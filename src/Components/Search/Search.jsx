import './Search.css'
import Side_Bar from "../Side_Bar/Side_Bar"
import Fetch_From_API from "../../Utils/Fetch_From_API"
import Video_Card from "../Video_Card/Video_Card";
import { useEffect,useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function Search()
{
    let Search_Tag=document.getElementById("Search");
    Search_Tag&& (Search_Tag.innerHTML="");   
    const location = useLocation();
    const [res,setRes]=useState({});
    const Url = new URLSearchParams(location.search);
    const Search_term = Url.get('Search'); 
    useEffect(()=>{
        let x=async ()=>{
            let q=await Fetch_From_API(Search_term);
                setRes((prevs)=>{ return {...prevs, items: q.items}
            });
        }
        x();
        let all_i=document.querySelectorAll('.Nav-Options>span');
        for(let i in all_i)
        {
            all_i[i].innerText
            if(all_i[i].innerText===Search_term)
            {
                all_i[i].style.backgroundColor="red";
                all_i[i].childNodes[0].style.color="#fff";
            }
            else{
                if(all_i[i].childNodes)
                {
                        all_i[i].style.backgroundColor="transparent";
                        all_i[i].childNodes[0].style.color="var(--Youtube-Red)";
                }
            }
        }
    },[location.search])
   
    return(
        <>
            <div id='Search' className="Search">
                <Side_Bar></Side_Bar>
                <div id='Search_Videos' className="Search_Videos">
                    {res.items && res.items.map((value,index)=>{
                            return(
                                <Video_Card res={value}  key={index}></Video_Card>
                            )
                        })
                    }
                </div>
             </div>
        </>
    )
}