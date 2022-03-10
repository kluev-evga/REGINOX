import { useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import { articlesCurrentPage, articlesSelectedIsLoaded, articlesList } from '../../../redux/selectors';
import { loadArticles } from '../../../redux/actions';
import ArticlesCard from '../articles-card/articles-card.component';
import { ReactComponent as LoadingIcon } from '../../../assets/svg/spinner-articles.svg';
import styles from './articles.module.css';


const ArticlesCards = ({ loadArticles, currentPage, loaded, articlesList }) => {
    useEffect(() => { loadArticles(currentPage) }, [loadArticles, currentPage]);
    const placeholder = useMemo(() => [...Array(5)].map((_, i) => i), []);
    const list = (loaded) ? articlesList : placeholder;

    return (
        <div className={styles.wrapper}>
            {
                list.map(id =>
                    loaded
                        ? <ArticlesCard key={id} id={id} />
                        : <div key={id} className={styles.loading}><LoadingIcon /></div>
                )
            }
        </div>
    )
};

const mapStateToProps = state => ({
    loaded: articlesSelectedIsLoaded(state),
    currentPage: articlesCurrentPage(state),
    articlesList: articlesList(state)
});

const mapDispatchToProps = ({
    loadArticles
})

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesCards);