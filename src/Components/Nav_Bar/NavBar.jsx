import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './NavBar.css'
export default function NavBar()
{
    const [Search_Term,setSearch]=useState("");
    const navigate=new useNavigate();
    let x=event=>setSearch(event.currentTarget.value);
    let y=()=>{
        Search_Term
        navigate("/Search/?Search="+Search_Term)
    };
    return(
        <>
            <nav className="Nav-Bar">
                    <a href='/'>
                        <img  className="Logo" src="/src/assets/YouTube-Logo.wine.svg" alt="" />    
                    </a>
                    <form  className="Search_Box" onSubmit={y}>
                        <input type="text" onChange={x} name="Search" id="Search"  className="Search"/>
                        <button style={{backgroundColor:"transparent",border:"none"}} type="submit"> <img height="50" src="/src/assets/search-icon.svg" alt="" /> </button>
                    </form>
            </nav>
        </>
    )
}