import {/*cloneElement, useCallback, useEffect,*/ useState} from "react"
import Button from '@mui/material/Button';
import WebComp from './SomeMod.tsx'
import { Sidebar } from "./SomeMod.tsx";
import Header from './Header.tsx'
import './Home.css'
function Home() {
  const initial = [<WebComp/>]
  const [postList, setPostList] = useState(initial);


  function handleAdd() {
    // add item
    setPostList([...postList, <WebComp/>]);
  }



  return (
    <div className="main">
        <Header/>
      <div id="sidebar">
      <Sidebar/>
      </div>

      <div id="main" className="postSection">

        <div>
          <h2>Welcome to web forum</h2>
          <ul>
            {postList}
          </ul>
        </div>

        <Button variant="text" onClick={handleAdd}>Test Add post</Button>
      </div>



      
    </div>

    
  )
}

export default Home