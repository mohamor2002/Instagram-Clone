import './Post.css';
import { useState } from 'react';
import Pic from './pics/herman_melville_1870._oil_painting_by_joseph_oriel_eaton-800pix.jpg'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SendIcon from '@mui/icons-material/Send';

export default function Post(props) {


    
    const [likeButton,setLikeButton]=useState(false)

    function likeHandle () {
        setLikeButton(()=>!likeButton);
    }







    return (
        
        <div id ='post-container' className='Post-container'>
                <div className="Post-user">
                    <div className='Post-story'>
                    <img className='Profile-pic' src={Pic} alt="" />
                    </div>
                    <p className='Username'>{props.Username}</p>
                </div>
                <img id = {props.pid} className='Post-pic' src={Pic} alt="Post pic" />
                <div className="Post-react">
                    <div className='icon like-button' onClick={likeHandle}>
                        {!likeButton?<FavoriteBorderIcon fontSize='large'> </FavoriteBorderIcon>:<FavoriteIcon className='liked' fontSize='large'> </FavoriteIcon>}
                    </div>
                    <ChatBubbleOutlineIcon fontSize='large' className='icon'></ChatBubbleOutlineIcon>
                    <SendIcon fontSize='large' className='icon'></SendIcon>
                </div>
                <p className='Post-likes'> <b className='like-account'>Cristiano</b> and <b>70 others </b>liked it </p>

                <p className='Post-caption'>{props.Caption}</p>

            </div>
    );
}



