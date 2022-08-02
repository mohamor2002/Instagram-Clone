import './Navbar.css'
import Pic from './../Post/pics/herman_melville_1870._oil_painting_by_joseph_oriel_eaton-800pix.jpg'
import InstagramIcon from '@mui/icons-material/Instagram';
import SearchIcon from '@mui/icons-material/Search';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';



function Navbar(props) {
    
    var on=false
    const Shownotif = () =>{
        on ? (document.querySelector('.notifs').style.display='block'):(document.querySelector('.notifs').style.display='none')
        on=!on
    }

    return (
        <nav id='navbar' className='scroll'>
            <a href="./index.html">
                <InstagramIcon className='Nav-logo'></InstagramIcon>
            </a>
            <div className='Nav-search'>
                <SearchIcon className='sicon'></SearchIcon>         
                <input type="text"  placeholder='Search'/>   
            </div>
            <div className='sidebar'>
                <HomeRoundedIcon className='Home-logo' ></HomeRoundedIcon>
                <SendOutlinedIcon className='Message-logo' ></SendOutlinedIcon>
                <AddCircleOutlineOutlinedIcon className='Add-logo' ></AddCircleOutlineOutlinedIcon>
                <ExploreOutlinedIcon className='Explore-logo' ></ExploreOutlinedIcon>
                <FavoriteBorderOutlinedIcon className='Notif-logo' onClick={Shownotif} ></FavoriteBorderOutlinedIcon>
                <div className='Navbar-account'>
                    <img className='Navbar-pp' src={Pic} alt="" />
                </div>

            </div>
            
            

        </nav>

    );
}

export default Navbar;