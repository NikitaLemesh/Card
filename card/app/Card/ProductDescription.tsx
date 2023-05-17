import styles from '../style.module.scss';

interface IproductDescription {
    descriprion: string
}

const ProductDescription = (props: IproductDescription) => {
  return (
    <p className={styles.p__description}>{props.descriprion}</p>
  )
}

export default ProductDescription;