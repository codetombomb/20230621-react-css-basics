import { useEffect, useState } from "react"
import CardContainer from "./CardContainer"
import './App.css'

/* 
Figma design - https://www.figma.com/file/uxyY3e946K9C4WlWcAkXwC/React-CSS-Basics?type=design&node-id=48-39&t=hhOgBRUhstd5HxAX-0
1. Create card container component
2. Create card component
    a. Organize components
    b. Connect CSS files
3. Add classes
4. Add styles
*/

function App() {
    const [creatures, setCreatures] = useState([])

    useEffect(() => {
        fetch("https://botw-compendium.herokuapp.com/api/v2")
            .then(resp => resp.json())
            .then(({data}) => setCreatures(data.creatures.food))
    }, [])
  return (
    <div className="app">
        <h1>BOTW Food</h1>
        <CardContainer creatures={creatures}/>
    </div>
  )
}
export default App