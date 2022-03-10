import { connect } from 'react-redux';
import { selectArticlesPages, selectArticlesTotalPages, articlesCurrentPage, articlesTotal } from '../../../redux/selectors';
import { selectArticlesPage } from '../../../redux/actions';
import cn from 'classnames';
import { ReactComponent as ChevronLeftIcon } from '../../../assets/svg/chevron-left.svg';
import { ReactComponent as ChevronRightIcon } from '../../../assets/svg/chevron-right.svg';
import styles from './pagination.module.css';


const Pagination = ({ pages, totalPages, currentPage, articlesTotal, selectArticlesPage }) => (
    <div className={styles.container}>
        <p>
            <b>Всего</b>
            <span>{articlesTotal}</span>
        </p>

        <div className={styles.wrapper}>
            <button
                onClick={() => selectArticlesPage(currentPage - 1)}
                className={cn({ [styles.disabled]: currentPage === 1 })}
            >
                <ChevronLeftIcon />
            </button>

            <div className={styles.pagination} style={{ '--i': `-${currentPage === totalPages ? currentPage - 3 : currentPage - 2}px` }}>
                <div>
                    {
                        pages.map((index) => (
                            <button
                                key={index}
                                onClick={() => selectArticlesPage(index)}
                                className={cn(styles.page, { [styles.active]: currentPage === index })}
                            >
                                {index}
                            </button>
                        ))
                    }
                </div>
            </div>

            <button
                onClick={() => selectArticlesPage(currentPage + 1)}
                className={cn({ [styles.disabled]: currentPage === totalPages })}
            >
                <ChevronRightIcon />
            </button>
        </div>
    </div>
);

const mapStateToProps = state => ({
    pages: selectArticlesPages(state),
    totalPages: selectArticlesTotalPages(state),
    currentPage: articlesCurrentPage(state),
    articlesTotal: articlesTotal(state)
});

const mapDispatchToProps = ({ selectArticlesPage });

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);