import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectArticlesPages, selectArticlesTotalPages, articlesCurrentPage, articlesTotal } from '../../redux/selectors';
import { selectArticlesPage } from '../../redux/actions';
import ArticlesCards from './article-cards/articles-cards.component';
import Pagination from '../../components/pagination/pagination.component';


const Articles = ({ pages, totalPages, currentPage, totalItems, selectArticlesPage }) => (
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
            selectArticlesPage={selectArticlesPage}
        />
    </div>
);

const mapStateToProps = state => ({
    pages: selectArticlesPages(state),
    totalPages: selectArticlesTotalPages(state),
    currentPage: articlesCurrentPage(state),
    totalItems: articlesTotal(state)
});

const mapDispatchToProps = ({ selectArticlesPage });

export default connect(mapStateToProps, mapDispatchToProps)(Articles);