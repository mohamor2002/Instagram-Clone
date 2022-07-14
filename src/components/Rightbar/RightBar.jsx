import './RightBar.css'
import QuickAccessBar from './QuickAccessBar/QuickAccessBar'
import users from './Convos'
import Pic from './../Post/pics/herman_melville_1870._oil_painting_by_joseph_oriel_eaton-800pix.jpg'

function RightBar(props) {
    return (
        <div id='rightbar'>
            <QuickAccessBar href={Pic} username={users}></QuickAccessBar>
        </div>
    );
}

export default RightBar;