import './App.css';
import Post from './components/Post/Post.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import ScrollBar from './components/Navbar/ScrollBar'
import Storybar from './components/Storybar/Storybar'
import RightBar from './components/Rightbar/RightBar';
import Downbar from './components/Downbar/Downbar';
import Query from './components/Query/Query';

function App() {

  return (
    <div>
      <Navbar></Navbar>
      <div className='mt'></div>
      <Storybar></Storybar>
      <Post pid="post1" Username='Mohamed Amor' Caption='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur doloremque autem explicabo. Nostrum, nihil, commodi quasi deleniti velit similique rerum provident quae tenetur corporis labore deserunt, praesentium corrupti. Nulla natus, quasi dolor repellendus nesciunt vitae ea adipisci a rem sequi animi dolores similique rerum dignissimos tenetur voluptas possimus doloribus perspiciatis?'>                     
      </Post>
      <Post pid="post2" Username='Lebron James' Caption='Lorem ipsum dolor, sit amet consectetur adipisicing elit.'>                     
      </Post>
      <Post pid="post3" Username='Steph Curry' Caption='Lorem ipsum dolor, sit amet consectetur adipisicing elit.'>                     
      </Post>
      <Post pid="post4" Username='Joel Embiid' Caption='Lorem ipsum dolor, sit amet consectetur adipisicing elit.'>                     
      </Post>
      <Post pid="post5" Username='Bnadem w5las' Caption='Lorem ipsum dolor, sit amet consectetur adipisicing elit.'>                     
      </Post>
      <RightBar></RightBar>
      <Downbar></Downbar>
      <ScrollBar></ScrollBar>
      <Query></Query>
    </div>
  )
   
}

export default App;
