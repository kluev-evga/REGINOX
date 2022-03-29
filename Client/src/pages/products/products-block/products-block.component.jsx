import { useState, useMemo, useEffect } from 'react';
import { connect } from 'react-redux';
import { filteredProducts, isFiltering } from '../../../redux/selectors';
import ProductCardContainer from '../product-card-container/product-card-container.component';
import Pagination from '../../../components/pagination/pagination.component';
import styles from './products-block.module.css';


const sliceProducts = (filteredProducts) => {
    const j = 18;
    const totalItems = filteredProducts.length;
    const totalPages = Math.ceil(totalItems / j);
    const pages = [...Array(totalPages)].map((_, i) => i + 1);
    const products = pages.map((_, i) => filteredProducts.slice(i * j, i * j + j));
    return { products, totalItems, totalPages, pages };
};

const ProductsBlock = ({ tiles, url, filteredProducts, isFiltering, categoryUrl }) => {
    const [currentPage, selectPage] = useState(1);

    const { products, totalItems, totalPages, pages } = useMemo(() => {
        return !isFiltering && sliceProducts(filteredProducts);
    }, [isFiltering]); //eslint-disable-line

    useEffect(() => {
        if (!isFiltering && currentPage > totalPages && currentPage !== 1) selectPage(totalPages)
    }, [isFiltering])// eslint-disable-line


    if (isFiltering) return <div>FILTRING</div>
    if (totalItems === 0) return <div>Ничего не найдено</div>

    return (
        <>
            {currentPage <= totalPages && !!totalItems &&
                products[currentPage - 1].map(id =>
                    <ProductCardContainer key={id} id={id} url={url} categoryUrl={categoryUrl} tiles={tiles} />)}

            <div className={styles.pagination}>
                <Pagination
                    totalItems={totalItems}
                    totalPages={totalPages}
                    pages={pages}
                    currentPage={currentPage}
                    selectPage={selectPage} />
            </div>
        </>
    );
};

const mapStateToProps = (state) => ({
    filteredProducts: filteredProducts(state),
    isFiltering: isFiltering(state)
});

export default connect(mapStateToProps)(ProductsBlock);