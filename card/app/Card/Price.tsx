import styles from '../style.module.scss';

interface Iprice {
    price: number
}

const Price = (props: Iprice) => {
  return (
    <p className={styles.p__price}>{`$${props.price}`}</p>
  )
}

export default Price;