import './Video.css'
import { useState,useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Fetch_Video from '../../Utils/Fetch_Video.js';
import Fetch_Video_Stats from '../../Utils/Fetch_Video_Stats.js';
import Fetch_Channel_Details from '../../Utils/Fetch_Channel_Details.js';
import Fetch_From_API from '../../Utils/Fetch_From_API.js';
import Video_Card from '../Video_Card/Video_Card.jsx';

export default function Video()
{
    const location = useLocation();

    const [res,setRes]=useState({});
    const [Video_Stats,setVideo_Stats]=useState({});
    const [channel,SetChannel]=useState("");
    const [Related_Media,setRelated_Media]=useState({});
    const Url = new URLSearchParams(location.search);
    const id = Url.get('id');
    const Video_Url='https://www.youtube.com/embed/'+id;
    useEffect(()=>{

        let x=async ()=>{
            let Video_Details=await Fetch_Video(id);
            setRes(prev=>{ return  {...prev,items:Video_Details.items}});
            
            let Video_Stats=await Fetch_Video_Stats(id);
            setVideo_Stats(prev=>{ return  {...prev,items:Video_Stats.items}});
            
            let Sugestions=await Fetch_From_API("new");
            setRelated_Media(prev=>{ return  {...prev,items:Sugestions.items}});


        }    
        x();
    },[location.search])

    useEffect(()=>{
        async function get_Details(channelId)
        {   
            let x=await Fetch_Channel_Details(channelId)
            SetChannel(prev=>{ return  {...prev,items:x.items}});
        }
        res.items&& get_Details(res.items[0].snippet.channelId);
    },[res])


    function formatNumber(num, precision = 0) {
        const map = [
          { suffix: 'T', threshold: 1e12 },
          { suffix: 'B', threshold: 1e9 },
          { suffix: 'M', threshold: 1e6 },
          { suffix: 'K', threshold: 1e3 },
          { suffix: '', threshold: 1 },
        ];
      
        const found = map.find((x) => Math.abs(num) >= x.threshold);
        if (found) {
          const formatted = (num / found.threshold).toFixed(precision) + found.suffix;
          return formatted;
        }
      
        return num;
      }
    function Readmore(event){

        if(event.target.style.height==="6ch")
        {
            let Video_Description=document.getElementById('Video_Description');
            Video_Description.style.height="100%";
        }else{
            let Video_Description=document.getElementById('Video_Description');
            Video_Description.style.height="6ch";
        }
                    
    }
    return(
        <>
            <section className='Main-Section'>
                <div className='Video_Player'>
                    <div className="embed-container">
                        <iframe allowFullScreen autoFocus className='Player' src={Video_Url}> 
                    </iframe>
                    </div>
                    <div className='Video_Title'>{res.items && res.items.map((val)=>{
                        return val.snippet.title;
                    })}</div>
                    <div className='Other_Details'>
                        <a>
                        {/* <a href={channel.items&&channel.items.map((val,index)=>{
                                    return '/Channel/?id='+val.id
                                })}>  */}

                            <div className="Channel_Details">
                                <img src={channel.items&&channel.items.map((val)=>{
                                    return val.snippet.thumbnails.medium.url
                                })} height="50" width="50" alt="" />
                                <div style={{textDecoration:"none"}}>{res.items && res.items.map((val)=>{
                                    return val.snippet.channelTitle;
                                })}
                                </div>
                            </div>  
                         </a>
                        <div className="Likes">
                            <i className='fas fa-thumbs-up'><span>{
                                Video_Stats.items&&Video_Stats.items.map((val)=>{
                                    return formatNumber(Number(val.statistics.likeCount))                                    
                                })
                            }</span></i>
                            <i className='fas fa-comment'><span>{
                                Video_Stats.items&&Video_Stats.items.map((val)=>{
                                    return formatNumber(Number(val.statistics.commentCount))                                    
                                })
                            }</span></i>
                        </div>
                    </div>
                    <div className="Desription">
                        <div className="Other_Video_Details">
                            <div className="Views">{
                                Video_Stats.items&&Video_Stats.items.map((val)=>{
                                    return formatNumber(Number(val.statistics.viewCount)) +" "                                   
                                })
                            }Views</div>
                            <div className="Posted_On">{res.items && res.items.map((val)=>{
                        return val.snippet.publishedAt.split('T')[0];
                    })}</div>
                        </div>
                        <div onClick={Readmore} className="Video_Description" id='Video_Description'>
                        {res.items && res.items.map((val)=>{
                            val.snippet.description;
                        return val.snippet.description;
                    })}
                        </div>
                    </div>
                </div>
                <div className='Recomended_Videos'>
                    {
                        Related_Media.items && Related_Media.items.map((value,index)=>{
                            return(
                                <Video_Card key={index} res={value} ></Video_Card>
                            )
                        })
                    }
                </div>
            </section>  
        </>
    )
}