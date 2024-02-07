
const Youtube_Api_Key="";
const Base_Url=`https://www.googleapis.com/youtube/v3/videos?part=statistics`;

export default async function Fetch_Video(Video_ID)
{
    if(Video_ID)
    {
        let URL=Base_Url+"&key=" + Youtube_Api_Key+"&id="+ Video_ID;
        return await fetch(URL)
        .then(resolve=>resolve.json())
        .then(result=>result)
    }
}