import cn from 'classnames'
import styles from './card-slider.module.css'


const CardSlider = ({ title, img, alt, children, fixed, md, width, height, isLocked }) => (
   <div
      className={cn(styles.wrapper, { [styles.fixed]: fixed, [styles.isLocked]: isLocked })}>
      <span>{children}</span>
      <img src={img} alt={alt} width={width} height={height} />
      <div>
         <p className={cn({ [styles.md]: md })}>
            {title}
         </p>
      </div>
   </div>
)

export default CardSlider