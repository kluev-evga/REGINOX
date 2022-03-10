import { Link } from 'react-router-dom';
import ArticlesCards from './article-cards/articles-cards.component';
import Pagination from './pagination/pagination.component';


const Articles = () => {
    return (
        <div className="container">
            <div className="breadcrumbs">
                <Link to='/home'>Главная</Link> / Статьи
            </div>
            <h1 className="title">Статьи</h1>

            <ArticlesCards />
            <Pagination />
        </div>
    );
};

export default Articles;