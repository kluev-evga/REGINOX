import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectArticlesPages, selectArticlesTotalPages, articlesCurrentPage, articlesTotal } from '../../redux/selectors';
import { selectArticlesPage } from '../../redux/actions';
import ArticlesCards from './article-cards/articles-cards.component';
import Pagination from '../../components/pagination/pagination.component';
import { useEffect } from 'react';


const Articles = ({ pages, totalPages, currentPage, totalItems, selectArticlesPage }) => {
    useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }, []);

    return (
        <div className="container">
            <div className="breadcrumbs">
                <Link to='/home'>Главная</Link> / Статьи
            </div>
            <h1 className="title">Статьи</h1>

            <ArticlesCards />

            <Pagination
                pages={pages}
                totalPages={totalPages}
                currentPage={currentPage}
                totalItems={totalItems}
                selectPage={selectArticlesPage} />

        </div>
    )
}

const mapStateToProps = state => ({
    pages: selectArticlesPages(state),
    totalPages: selectArticlesTotalPages(state),
    currentPage: articlesCurrentPage(state),
    totalItems: articlesTotal(state)
})

export default connect(mapStateToProps, { selectArticlesPage })(Articles)