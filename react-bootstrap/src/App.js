import { useEffect, useState } from "react";
import CardContainer from "./CardContainer/index";
import styles from "./App.module.css";
import TopNav from "./TopNav";
import LoadingSpinner from "./LoadingSpinner";

function App() {
  const [creatures, setCreatures] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Boolean to conditionally render spinner

  useEffect(() => {
    setIsLoading(true); // Set isLoading to true right before the fetch fires
    fetch("https://botw-compendium.herokuapp.com/api/v2")
      .then((resp) => resp.json())
      .then(({ data }) => {
        setCreatures([...data.creatures.food]);
        setIsLoading(false); // Set isLoading to false once the date has been received and set to state
      });
  }, []);

  // conditionally render the LoadingSpinner component if isLoading is true
  return (
    <>
      <TopNav creatureData={creatures}/>
      <div className={styles.app}>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <CardContainer creatures={creatures} />
        )}
      </div>
    </>
  );
}
export default App;
