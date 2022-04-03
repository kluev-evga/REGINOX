import { connect } from 'react-redux';
import { product } from '../../../redux/selectors';
import ProductCard from '../../../components/product-card/product-card.component';


const ProductCardContainer = ({ tiles, product, categoryUrl }) =>
    <ProductCard tiles={tiles} product={product} categoryUrl={categoryUrl} />

const mapStateToProps = (state, { url, id }) => ({ product: product(state, url, id) });

export default connect(mapStateToProps)(ProductCardContainer);