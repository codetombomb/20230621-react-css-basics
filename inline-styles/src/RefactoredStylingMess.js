import { useState } from "react";

// Styling inspiration from: https://www.rubens.design/

const styles = {
  header: {
    height: "10%",
  },
  inlineStylesRefactorSection: {
    fontFamily: "poppins",
    padding: "0",
    margin: "0",
    height: "100vh",
  },
  roundBorder: {
    border: "2px solid black",
    borderRadius: "5px",
  },
  hamburgerMenu: {
    width: "40px",
    height: "40px",
    margin: "1% 0 0 2.5%",

    backgroundColor: "#D661FF",
    cursor: "pointer",
  },
  hamburgerMenuSlices: {
    backgroundColor: "black",
    height: "4px",
    borderRadius: "5px",
    margin: "6px",
    transform: "rotateY(0deg) rotate(0deg)",
    transition: "transform .5s",
  },
  navStyles: {
    position: "relative",
    fontFamily: "Jura",
    fontWeight: "bolder",
    margin: "2.5%",
    backgroundColor: "#FFCB46",
    width: "20%",
    maxWidth: "300px",
    height: "100%",
    zIndex: "20",
    filter: "drop-shadow(5px 5px 0 black)",
  },
  menuUl: {
    height: "100%",
    alignItems: "center",
    justifyContent: "space-around",
    display: "flex",
    flexDirection: "column",
    zIndex: "20",
  },
  menuLi: {
    cursor: "pointer",
    listStyle: "none",
  },
  menuLink: {
    color: "black",
    textDecoration: "none",
  },
  main: {
    backgroundColor: "#D661FF",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "95%",
    maxWidth: "1000px",
    minWidth: "200px",
    height: "auto",
    padding: "2%",
    filter: "drop-shadow(10px 10px 0 black)",
    zIndex: "10",
  },
  mainImg: {
    width: "30%",
    maxWidth: "350px",
    minWidth: "190px",
    backgroundColor: "#3ED27A",
    border: "2px solid black",
    borderRadius: "5px",
    margin: "1%",
    padding: "2%",
  },
  mainHeading: {
    padding: "2%",
    border: "2px solid black",
    minWidth: "190px",
    borderRadius: "5px",
    backgroundColor: "#FF81CC",
    fontFamily: "Black Han Sans",
    fontSize: "3rem",
    margin: "1%",
  },
  mainSubHead: {
    padding: "2%",
    backgroundColor: "#4ED688",
    minWidth: "190px",
    fontFamily: "Jura",
    fontSize: "2em",
    border: "2px solid black",
    borderRadius: "5px",
    margin: "1%",
  },
  mainP: {
    padding: "2%",
    border: "2px solid black",
    borderRadius: "5px",
    minWidth: "190px",
    backgroundColor: "#FFCB46",
    width: "80%",
    maxWidth: "1000px",
  },
  button: {
    height: "4em",
    borderRadius: "10px",
    cursor: "pointer",
    minWidth: "70px",
    backgroundColor: "white",
    fontFamily: "Jura",
    padding: "2%",
    filter: "drop-shadow(5px 2px 0 black)",
    border: "2px solid black",
    margin: "5%",
    fontWeight: "bolder",
  },
  buttonSection: {
    height: "10%",
    width: "100%",
    maxWidth: "400px",
    minWidth: "190px",
    display: "flex",
    justifyContent: "space-between",
  },
};

function RefactoredStylingMess() {
  const [show, setShow] = useState(true);

  const handleMenuIconClick = (e) => {
    setShow((prev) => !prev);
  };

  return (
    <section
      id="refactored-inline-styles"
      style={styles.inlineStylesRefactorSection}
    >
      <header style={styles.header}>
        <div
          onClick={handleMenuIconClick}
          style={{ ...styles.roundBorder, ...styles.hamburgerMenu }}
        >
          <div
            style={
              show
                ? {
                    ...styles.hamburgerMenuSlices,
                  }
                : {
                    ...styles.hamburgerMenuSlices,
                    transform: "translateY(10px) rotateY(0deg) rotate(45deg)",
                    transition: "transform .5s",
                  }
            }
          ></div>
          <div
            style={
              show
                ? {
                    ...styles.hamburgerMenuSlices,
                    display: "block",
                  }
                : {
                    ...styles.hamburgerMenuSlices,
                    display: "none",
                  }
            }
          ></div>
          <div
            style={
              show
                ? {
                    ...styles.hamburgerMenuSlices,
                  }
                : {
                    ...styles.hamburgerMenuSlices,
                    transform: "translateY(0px) rotateY(0deg) rotate(-45deg)",
                    transition: "transform .5s",
                  }
            }
          ></div>
        </div>
        <nav
          style={
            show
              ? { display: "none" }
              : { ...styles.roundBorder, ...styles.navStyles }
          }
        >
          <ul style={styles.menuUl}>
            <li style={styles.menuLi}>
              <a href="#refactored-inline-styles" style={styles.menuLink}>
                LINK 1
              </a>
            </li>
            <li style={styles.menuLi}>
              <a href="#refactored-inline-styles" style={styles.menuLink}>
                LINK 2
              </a>
            </li>
            <li style={styles.menuLi}>
              <a href="#refactored-inline-styles" style={styles.menuLink}>
                LINK 3
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <section style={{ display: "grid", placeItems: "center" }}>
        <main style={{ ...styles.roundBorder, ...styles.main }}>
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/021/596/210/small/colorful-paint-splashes-colored-powder-explosion-mix-rainbow-splash-on-transparent-background-png.png"
            alt="Colorful smoke explosion"
            style={styles.mainImg}
          />
          <h1 style={styles.mainHeading}>Refactored Styling Mess</h1>
          <h3 style={styles.mainSubHead}>A CSS Adventure</h3>
          <p style={styles.mainP}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <section style={styles.buttonSection}>
            <button style={styles.button}>LEARN MORE</button>
            <button style={{ ...styles.button, backgroundColor: "#57EF97" }}>
              START YOUR JOURNEY
            </button>
          </section>
        </main>
      </section>
    </section>
  );
}
export default RefactoredStylingMess;
