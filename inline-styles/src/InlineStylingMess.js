import { useState } from "react";

// Styling inspiration from: https://www.rubens.design/

function InlineStylingMess() {
  const [show, setShow] = useState(true);

  const handleMenuIconClick = (e) => {
    setShow((prev) => !prev);
  };

  const hamburgerMenuStyle = {
    backgroundColor: "black",
    height: "4px",
    borderRadius: "5px",
    margin: "6px",
    transform: "rotateY(0deg) rotate(0deg)",
    transition: "transform .5s",
  };

  return (
    <section
      id="cluttered-app-section"
      style={{
        fontFamily: "poppins",
        padding: "0",
        margin: "0",
        height: "100vh",
      }}
    >
      <header
        style={{
          height: "10%",
        }}
      >
        <div
          onClick={handleMenuIconClick}
          style={{
            width: "40px",
            height: "40px",
            margin: "1% 0 0 2.5%",
            border: "2px solid black",
            borderRadius: "5px",
            backgroundColor: "#D661FF",
            cursor: "pointer",
          }}
        >
          <div
            style={
              show
                ? {
                    ...hamburgerMenuStyle,
                  }
                : {
                    ...hamburgerMenuStyle,
                    transform: "translateY(10px) rotateY(0deg) rotate(45deg)",
                    transition: "transform .5s",
                  }
            }
          ></div>
          <div
            style={
              show
                ? {
                    ...hamburgerMenuStyle,
                    display: "block",
                  }
                : {
                    ...hamburgerMenuStyle,
                    display: "none",
                  }
            }
          ></div>
          <div
            style={
              show
                ? {
                    ...hamburgerMenuStyle,
                  }
                : {
                    ...hamburgerMenuStyle,
                    transform: "translateY(0px) rotateY(0deg) rotate(-45deg)",
                    transition: "transform .5s",
                  }
            }
          ></div>
        </div>
        <nav
          style={
            show
              ? {
                  display: "none",
                }
              : {
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
                  border: "2px solid black",
                  borderRadius: "5px",
                }
          }
        >
          <ul
            style={{
              height: "100%",
              alignItems: "center",
              justifyContent: "space-around",
              display: "flex",
              flexDirection: "column",
              zIndex: "20"
            }}
          >
            <li
              style={{
                cursor: "pointer",
                listStyle: "none",
              }}
            >
              <a
                href="#cluttered-app-section"
                style={{
                  color: "black",
                  textDecoration: "none"
                }}
              >
                LINK 1
              </a>
            </li>
            <li
              style={{
                cursor: "pointer",
                listStyle: "none",

              }}
            >
              <a
                href="#cluttered-app-section"
                style={{
                  color: "black",
                  textDecoration: "none"
                }}
              >
                LINK 2
              </a>
            </li>
            <li
              style={{
                cursor: "pointer",
                listStyle: "none",

              }}
            >
              <a
                href="#cluttered-app-section"
                style={{
                  color: "black",
                  textDecoration: "none"
                }}
              >
                LINK 3
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <section style={{ display: "grid", placeItems: "center" }}>
        <main
          style={{
            backgroundColor: "#D661FF",
            border: "2px solid black",
            borderRadius: "5px",
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
            zIndex: "10"
          }}
        >
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/021/596/210/small/colorful-paint-splashes-colored-powder-explosion-mix-rainbow-splash-on-transparent-background-png.png"
            alt="Colorful smoke explosion"
            style={{
              width: "30%",
              maxWidth: "350px",
              minWidth: "190px",
              backgroundColor: "#3ED27A",
              border: "2px solid black",
              borderRadius: "5px",
              margin: "1%",
              padding: "2%"
            }}
          />
          <h1
            style={{
              padding: "2%",
              border: "2px solid black",
              minWidth: "190px",
              borderRadius: "5px",
              backgroundColor: "#FF81CC",
              fontFamily: "Black Han Sans",
              fontSize: "3rem",
              margin: "1%",
            }}
          >
            Inline Styling Mess
          </h1>
          <h3
            style={{
              padding: "2%",
              backgroundColor: "#4ED688",
              minWidth: "190px",
              fontFamily: "Jura",
              fontSize: "2em",
              border: "2px solid black",
              borderRadius: "5px",
              margin: "1%",
            }}
          >
            A CSS Adventure
          </h3>
          <p
            style={{
              padding: "2%",
              border: "2px solid black",
              borderRadius: "5px",
              minWidth: "190px",
              backgroundColor: "#FFCB46",
              width: "80%",
              maxWidth: "1000px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <section
            style={{
              height: "10%",
              width: "100%",
              maxWidth: "400px",
              minWidth: "190px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <button
              style={{
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
              }}
            >
              LEARN MORE
            </button>
            <button
              style={{
                height: "4em",
                minWidth: "70px",
                borderRadius: "10px",
                cursor: "pointer",
                backgroundColor: "#57EF97",
                fontFamily: "Jura",
                padding: "2%",
                filter: "drop-shadow(5px 2px 0 black)",
                border: "2px solid black",
                margin: "5%",
                fontWeight: "bolder",
              }}
            >
              START YOUR JOURNEY
            </button>
          </section>
        </main>
      </section>
    </section>
  );
}
export default InlineStylingMess;
