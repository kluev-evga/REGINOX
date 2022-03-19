import { connect } from 'react-redux';
import { popularProducts } from '../../redux/selectors';
import { useMediaQuery } from 'react-responsive'
import ProductCard from '../product-card/product-card.component';
import styles from './popular-products.module.css';


const PopularProducts = ({ popularProducts }) => {
    const isPhone = useMediaQuery({ query: '(max-width: 767.98px)' });
    if (isPhone) return null;

    return (
        <div className='container section-container'>
            <h2 className='title'>Популярные товары</h2>

            <div className={styles.container}>
                {popularProducts.map(({ id, url, ...rest }) => <ProductCard key={id} tiles={true} url={url} product={rest} />)}
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    popularProducts: popularProducts(state)
})

export default connect(mapStateToProps)(PopularProducts);