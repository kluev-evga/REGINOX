import styles from './brands.module.css';


const Brands = ({ brands }) => (
    <div className={styles.cards}>
        {
            brands.map(({ img, alt, text, url }) => (
                <figure>
                    <img src={img} alt={alt} />
                    <figcaption>
                        {text}
                        {url && (
                            <a href={`https://${url}`} className='link_primary' target="_blank" rel='noreferrer'>{url}</a>
                        )}
                    </figcaption>
                </figure>
            ))
        }
    </div>
);

export default Brands;