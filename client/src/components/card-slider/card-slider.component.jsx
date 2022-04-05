import cn from 'classnames';
import styles from './card-slider.module.css';


const CardSlider = ({
    title,
    img,
    alt,
    children,
    date,
    dateTime,
    fixed,
    sm,
    md,
    width,
    height,
    isLocked
}) => (
    <div className={cn(styles.wrapper, { [styles.fixed]: fixed, [styles.isLocked]: isLocked })}>
        <span>
            {children}
        </span>
        <img
            src={img}
            alt={alt}
            width={width}
            height={height}
        />
        <div>
            <p className={cn({ [styles.sm]: sm, [styles.md]: md, [styles.with_date]: date })} >
                {title}
                {date && <time dateTime={dateTime} className={styles.date}>{date}</time>}
            </p>
        </div>
    </div>
);

export default CardSlider;