// import InlineStylingMess from './InlineStylingMess'
// import RefactoredStylingMess from './RefactoredStylingMess'
import WhenToUseInlineStyles from './WhenToUseInlineStyles'

function App() {
  /* 
  Inline Styles Demo 
  1. Create an h1  
  2. add background color - purple
  3. add font color yellow
  4. add font size
  5. add greenyellow border 
  6. demo removed style variable
  */
  /* 
  Demo Spread Syntax
  1. add h1 and h2
  2. create headingStyle object
  3. add greenyellow border 
  4. add background color - purple
  */

  // const headingStyles = {
  //   backgroundColor: "purple",
  //   color: "yellow",
  // };

  return (
    // <>
    <WhenToUseInlineStyles />
    //   <h1 style={headingStyles}>Test Title</h1>
    //   <h3 style={{...headingStyles, border: "5px solid green"}}>Test Sub Title</h3>
    // </>
  );
}

export default App;
