import Spinner from "react-bootstrap/esm/Spinner"
import styles from './styles.module.css'

/* 
If this Spinner component was not 
inside of this div.loadingSpinner,
it would not render right in the 
middle of the page. The styles applied 
to the outer div make it a container 
that extends the height of the veiwport.
Then the Spinner component is centered 
using grid. see ./styles.module.css
*/

function LoadingSpinner() {
  return (
    <div className={styles.loadingSpinner}>
        <Spinner/>
    </div>
  )
}
export default LoadingSpinner