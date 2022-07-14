import './QuickAccessBar.css'
import SettingsIcon from '@mui/icons-material/Settings';

function QuickAccessBar(props) {
    return (
        <div id='qabar'>
            <div className='qab-top'>
                <p className='qab-title' >Quick Access Conversations</p>
                <SettingsIcon className='qab-settings' fontSize='small'></SettingsIcon>
            </div>
            
            <div className='qab-convos'>
            <ul className='convos'>

                
    {
    props.username.map(
        (users) => {
            return(
                   <li> 
                    <div className='convo-story'>
                        <img className='Profile-pic' src={props.href} alt="" />
                    </div> 
                    <p className='convo-user'>{users.username}</p>
                </li>
            )
        }
    )
    

}
    
    
</ul>
                
               
                
                
            </div>
        </div>
    );
}

export default QuickAccessBar;