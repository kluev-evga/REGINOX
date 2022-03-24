import { useState } from 'react';
import { connect } from 'react-redux';
import { filteredProducts } from '../../../redux/selectors';
import { openFiltersMenu, filterProducts } from '../../../redux/actions';
import ProductCardContainer from '../product-card-container/product-card-container.component';
import Pagination from '../../../components/pagination/pagination.component';
// import styles from './products-section.module.css';

import styles from './products-block.module.css';




const sliceProducts = (filteredProducts) => {
    const totalItems = filteredProducts.length;
    const totalPages = Math.ceil(totalItems / 4);
    const pages = [...Array(totalPages)].map((_, i) => i + 1);

    const products = pages.reduce((acc, _, i) => {
        acc.push(filteredProducts.slice(i * 4, i * 4 + 4));
        return acc;
    }, []);

    return { products, paginationData: { totalItems, totalPages, pages } }
}


const ProductsBlock = ({ tiles, url, filteredProducts }) => {
    const [currentPage, selectPage] = useState(1);

    const { products, paginationData } = sliceProducts(filteredProducts);

    return (
        <>
            {
                products[currentPage - 1].map(id => <ProductCardContainer key={id} id={id} url={url} tiles={tiles} />)
            }

            <div className={styles.pagination}>
                <Pagination {...paginationData} currentPage={currentPage} selectPage={selectPage} />
            </div>
        </>
    );
};

const mapStateToProps = (state) => ({
    filteredProducts: filteredProducts(state),
});

const mapDispatchToProps = { openFiltersMenu, filterProducts };

export default connect(mapStateToProps, mapDispatchToProps)(ProductsBlock);