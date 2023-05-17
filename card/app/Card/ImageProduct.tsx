import Image from 'next/image';
import styles from '../style.module.scss';

interface Iimage {
  src: string,
  alt: string
}

const ImageProduct = (props: Iimage) => {
  return (
    <Image
      src={props.src}
      alt={props.alt} 
      width='258' 
      height='258' 
      placeholder='blur' 
      blurDataURL={props.src}
      className={styles.img} 
    />
  )
}

export default ImageProduct;