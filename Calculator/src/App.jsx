
import styles from './App.module.css';

function App() {
  

  return (
    <div className={styles.calculator}>
      <input className={styles.display} type='text'/>
      <div className='buttons-container'>
        <buttons>C</buttons>
      </div>
    </div>
  )
}

export default App
