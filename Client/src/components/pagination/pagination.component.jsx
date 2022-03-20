import cn from 'classnames';
import { ReactComponent as ChevronLeftIcon } from '../../assets/svg/chevron-left.svg';
import { ReactComponent as ChevronRightIcon } from '../../assets/svg/chevron-right.svg';
import styles from './pagination.module.css';


const Pagination = ({ pages, totalPages, currentPage, totalItems, selectArticlesPage }) => (
    <div className={styles.container}>
        <p>
            <b>Всего</b>
            <span>{totalItems}</span>
        </p>

        <div className={styles.wrapper}>
            <button
                onClick={() => selectArticlesPage(currentPage - 1)}
                className={cn({ [styles.disabled]: currentPage === 1 })}
                tabIndex={currentPage === 1 ? -1 : 0}
                aria-label='предыдущая страница'
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
                                tabIndex={-1}
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
                tabIndex={currentPage === totalPages ? -1 : 0}
                aria-label='следующая страница'
            >
                <ChevronRightIcon />
            </button>
        </div>
    </div>
);

export default Pagination;