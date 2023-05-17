import styles from './style.module.scss';
import PRODUCTS from './constants';
import Card from './Card/Card';

export default function Home() {
  return (
   <main className={styles.main}>
    {PRODUCTS.map((item, index) => {
      return <Card key={item.id} card={item} index={index} />
    })}
   </main>
  )
}
