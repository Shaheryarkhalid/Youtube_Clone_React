
const Youtube_Api_Key="";
const Base_Url="https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=21&type=video";
// const Rest_Url="&key=AIzaSyCh1cV_thxi-cMlSmBpL7vhPEvUP7JUF94&q=new";


export default async function Fetch_From_API(Search_Term)
{
    if(Search_Term)
    {
        let URL=Base_Url+"&key=" + Youtube_Api_Key+"&q="+ Search_Term;
        return await fetch(URL)
        .then(resolve=>resolve.json())
        .then(result=>result)
    }
}