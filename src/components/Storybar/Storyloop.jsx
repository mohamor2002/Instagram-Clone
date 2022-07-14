
function Storyloop(props) {
    return (
        <div className="Story-container">
            <div className='Story-loop'>
                    <img className='Profile-pic' src={props.href} alt="" />
            </div>
            <p className="Story-username">{props?.username}</p>

        </div>     
    );
}

export default Storyloop;