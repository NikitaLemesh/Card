import PRODUCTS, { IPRODUCTS } from "../constants";
import ImageProduct from "./ImageProduct";
import Price from "./Price";
import ProductName from "./ProductName";
import ProductDescription from "./ProductDescription";
import Paragraph from "./Paragraph";
import InputRadio from "./InputRadio";
import Button from "./Button";
import LinlToRead from "./LinkToRead";
import styles from '../style.module.scss';

interface Icard {
    card: IPRODUCTS,
    index: number
}

const Card = (props: Icard) => {
  return (
    <div className={styles.div__card}>
      <ImageProduct src={props.card.image} alt={props.card.productName} />
      <Price price={props.card.price}/>
      <ProductName name={props.card.productName} />
      <ProductDescription descriprion={props.card.productDescription} />
      <Paragraph />
      <div className={styles.div__inputs}>
        {PRODUCTS[props.index].colors.map((item) => {
          return (
            <InputRadio key={props.card.id} divColor={item} />  
          )
        })}
      </div>
      <Button text='Add to cart' />
      <Button text='Buy now' />
      <LinlToRead />
    </div>
  )
}

export default Card;