import { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadArticle } from '../../redux/actions';
import { article, articleLoaded, articleError } from '../../redux/selectors';
import { Link } from 'react-router-dom';
import ArticleContent from './article-content/article-content.component';
import Loader from '../../components/loader/loader.coponent';


const Article = ({ match, history, loadArticle, article, loaded }) => {
    useEffect(() => { loadArticle(match, history) }, []);//eslint-disable-line

    if (!loaded) return <Loader />;

    const { date, title } = article;
    const { d, m, y } = date;
    const dateText = d + ' / ' + m + ' / ' + y;
    const dateTime = '20' + y + '-' + m + '-' + d;

    return (
        <div className="container">
            <div className="breadcrumbs">
                <Link to='/home'>Главная</Link> / <Link to='/articles'>Статьи</Link> / {title}
            </div>
            <h1 className="title">{title}</h1>
            <time dateTime={dateTime} className='article-date'>{dateText}</time>

            <ArticleContent entities={article.content} />
        </div>
    );
};

const mapStateToProps = (state, props) => ({
    article: article(state, props),
    loaded: articleLoaded(state, props),
    error: articleError(state, props),
})

export default connect(mapStateToProps, { loadArticle })(Article);