import styles from "./ButtonsContainer.module.css";
const ButtonsContainer = () => {
  const buttonNames = [
    "C",
    " 1",
    "2 ",
    " +",
    " 3",
    " 4",
    " -",
    " 5",
    " 6",
    " *",
    " 8",
    "/ ",
    " =",
    " 9",
    " 0",
    " .",
  ];

  return (
    <div className={styles.buttonsContainer}>
      {buttonNames.map((buttonName) => (
        <buttons className={styles.button}>{buttonName}</buttons>
      ))}
    </div>
  );
};

export default ButtonsContainer;
