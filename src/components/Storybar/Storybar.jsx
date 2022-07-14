import './Storybar.css'
import Storyloop from './Storyloop'
import Pic from './../Post/pics/herman_melville_1870._oil_painting_by_joseph_oriel_eaton-800pix.jpg'
function Storybar(props) {
    return (
        <div className='storybar'>
            <Storyloop href={Pic} className='story' username='Mohamed Amor'></Storyloop>
            <Storyloop href={Pic} className='story' username='Mohamed Amor'></Storyloop>
            <Storyloop href={Pic} className='story' username='Mohamed Amor'></Storyloop>
            <Storyloop href={Pic} className='story' username='Mohamed Amor'></Storyloop>
            <Storyloop href={Pic} className='story' username='Mohamed Amor'></Storyloop>
            <Storyloop href={Pic} className='story' username='Mohamed Amor'></Storyloop>
            <Storyloop href={Pic} className='story' username='Mohamed Amor'></Storyloop>
            <Storyloop href={Pic} className='story' username='Mohamed Amor'></Storyloop>
            <Storyloop href={Pic} className='story' username='Mohamed Amor'></Storyloop>
            <Storyloop href={Pic} className='story' username='Mohamed Amor'></Storyloop>
        </div>
    );
}

export default Storybar;