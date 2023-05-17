import styles from '../style.module.scss';

interface Icolor {
  divColor: string
}

const InputRadio = (props: Icolor) => {
  return (
    <div className={styles.div__radio}>
      <input type="radio" name="radiobtn" id="slide1" className={styles.input} />
      <label htmlFor='slider1'></label>
      <div className={styles.div__input} style={{backgroundColor: props.divColor}}>
      </div>
    </div>
  )
}

export default InputRadio;