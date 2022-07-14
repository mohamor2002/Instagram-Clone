import './Downbar.css'
import Pic from './../Post/pics/herman_melville_1870._oil_painting_by_joseph_oriel_eaton-800pix.jpg'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

function Downbar(props) {
    return (
        <div className='downbar'>
                <HomeRoundedIcon className='Home-logo' ></HomeRoundedIcon>
                <SendOutlinedIcon className='Message-logo' ></SendOutlinedIcon>
                <AddCircleOutlineOutlinedIcon className='Add-logo' ></AddCircleOutlineOutlinedIcon>
                <ExploreOutlinedIcon className='Explore-logo' ></ExploreOutlinedIcon>
                <FavoriteBorderOutlinedIcon className='Notif-logo' ></FavoriteBorderOutlinedIcon>
                <div className='Navbar-account'>
                    <img className='Navbar-pp' src={Pic} alt="" />
                </div>

            </div>
    );
}

export default Downbar;