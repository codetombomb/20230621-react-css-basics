import styles from "./ComponentTwo.module.css";

function ComponentTwo() {
  return (
    <div className={styles.card} >
      <h2 className={styles.cardHeading}>This is Component Two</h2>
      <p className={styles.cardP}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </div>
  );
}
export default ComponentTwo;