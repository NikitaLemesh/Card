import styles from '../style.module.scss';

interface IbuttonText {
  text: string
}

const Button = (props: IbuttonText) => {
  return (
    <button className={styles.btn}>{props.text}</button>
  )
}

export default Button;