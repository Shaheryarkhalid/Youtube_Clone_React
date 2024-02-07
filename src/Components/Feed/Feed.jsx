import Side_Bar from "../Side_Bar/Side_Bar"
import Fetch_From_API from "../../Utils/Fetch_From_API"
import Video_Card from "../Video_Card/Video_Card";
import './Feed.css'
import { useEffect, useState } from "react";
export default function Feed()
{
    let [res,setRes]=useState({});
    useEffect(()=>{
        let x=async()=>{
            let result=await Fetch_From_API("new");
            setRes(result);
        }
        x();
    },[])
    return(
        <>
        <div className="Feed">
            <Side_Bar></Side_Bar>
            <div className="Feed_Videos">
                {
                    res.items && res.items.map((value,index)=>{
                        return(
                            <Video_Card key={index} res={value} ></Video_Card>
                        )
                    })
                }
            </div>
        </div>
        </>
    )
}
