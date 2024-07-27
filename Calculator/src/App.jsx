import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.calculator}>
     <Display></Display>
      <div className={styles.buttonsContainer}>
        <buttons className={styles.button}>C</buttons>
        <buttons className={styles.button}>1</buttons>
        <buttons className={styles.button}>2</buttons>
        <buttons className={styles.button}>3</buttons>
        <buttons className={styles.button}>4</buttons>
        <buttons className={styles.button}>5</buttons>
        <buttons className={styles.button}>6</buttons>
      </div>
    </div>
  );
}

export default App;
