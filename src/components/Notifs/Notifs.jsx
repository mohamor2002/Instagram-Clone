import './Notifs.css'
import ntfs from './ntfs'
import pic from "./../Post/pics/herman_melville_1870._oil_painting_by_joseph_oriel_eaton-800pix.jpg";
function Notifs(props) {
    return (
        <div className='notifs'>
            {ntfs.map((not)=>{
                return (
                    <div className='notif-container'>
                        <img className='notif-pic' src={pic} alt="" />
                        <div className='notif-username'> {not.username} </div>
                        <p className='notif-type'>{not.type}</p>
                    </div>
                )
            })}
        </div>
    );
}

export default Notifs;