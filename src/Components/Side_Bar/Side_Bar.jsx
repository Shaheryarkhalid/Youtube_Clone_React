import { useNavigate } from 'react-router-dom';
import './Side_Bar.css'
export default function Side_Bar()
{
    const navigate=new useNavigate();
    let Year=new Date();
    Year=Year.getFullYear();
    let y=event=>navigate("/Search/?Search="+event.currentTarget.innerText);
    
    return(
        <>
            <nav className="Side-Bar">
                <div className="Nav-Options">
                    <span onClick={()=>{navigate("/")}} ><i className="fas fa-home"></i> Home</span>
                    <span onClick={y}><i className="fa-solid fa-code"></i> Coding </span>
                    <span onClick={y}><i className="fa-solid fa-code"></i>JS Mastery</span>
                    <span onClick={y}><i className="fa-solid fa-code"></i> React JS</span>
                    <span onClick={y}><i className="fa-solid fa-code"></i> Next JS</span>
                    <span onClick={y}><i className="fa-solid fa-music"></i> Music</span>
                    <span onClick={y}><i className="fa-solid fa-graduation-cap"></i> Education</span>
                    <span onClick={y}><i className="fa-solid fa-podcast"></i> Podcast</span>
                    <span onClick={y}><i className="fa-solid fa-film"></i> Movie</span>
                    <span onClick={y}><i className="fa-solid fa-gamepad"></i> Gaming </span>
                    <span onClick={y}><i className="fa-solid fa-tv"></i> Live</span>
                    <span onClick={y}><i className="fa-solid fa-dumbbell"></i>Sport</span>
                    <span onClick={y}><i className="fa-solid fa-hat-cowboy"></i> Fashion</span>
                    <span onClick={y}><i className="fa-solid fa-user-tie"></i>Beauty</span>
                </div>
                <span className='Copyright'>© {Year} Google LLC</span>
            </nav>
        </>
    )
}