import styles from '../style.module.scss';

interface IproductName {
  name: string
}

const ProductName = (props: IproductName) => {
  return (
    <h1 className={styles.h1}>{props.name}</h1>
  )
}

export default ProductName;