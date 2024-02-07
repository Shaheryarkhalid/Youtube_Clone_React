
const Youtube_Api_Key="";
const Base_Url="https://www.googleapis.com/youtube/v3/channels?part=snippet&id=";
// const Rest_Url="SWMb9NxQL9I6c&key={YOUR_API_KEY}";


export default async function Fetch_Channel_Details(Channel_Id)
{
    let URL=Base_Url+ Channel_Id +"&key=" + Youtube_Api_Key;
    return await fetch(URL)
    .then(resolve=>resolve.json())
    .then(result=>result)
}