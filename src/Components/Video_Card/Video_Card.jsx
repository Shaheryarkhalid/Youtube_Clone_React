import './Video_Card.css'
import { useState } from 'react';
import Fetch_Channel_Details from '../../Utils/Fetch_Channel_Details';
function Video_Card({res})
{
    let video_Id=res.id.videoId;
    res=res.snippet;
    const [channel,SetChannel]=useState("");
    async function get_Details(channelId)
    {   
        let x=await Fetch_Channel_Details(channelId)
        x=x.items[0].snippet.thumbnails.high.url;
        SetChannel(x);
    }
    get_Details(res.channelId);
    return (
        <>
            <a href={'/video/?id='+video_Id} className='Video_Card'>
                <img src={res.thumbnails.high.url} alt="Thumbnail" className='Thumbnail' />
                <div className='Other_Details'>
                        <img src={channel} alt="" className='Channel_Image' />
                    <div className='Text_Details'>
                        <h3 className='Title'>{res.title}</h3>
                        <span className='Channel_Name'>{res.channelTitle}</span>
                        
                    </div>
                </div>
            </a>
        </>
    )
}
export default Video_Card