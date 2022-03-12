import { useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import { articlesCurrentPage, articlesSelectedIsLoaded, articlesList, articlesError } from '../../../redux/selectors';
import { loadArticles } from '../../../redux/actions';
import { Redirect } from 'react-router-dom';
import ArticlesCard from '../articles-card/articles-card.component';
import { ReactComponent as LoadingIcon } from '../../../assets/svg/spinner-loading.svg';
import styles from './articles-cards.module.css';


const ArticlesCards = ({ loadArticles, currentPage, loaded, articlesList, error }) => {
    useEffect(() => { loadArticles(currentPage) }, [loadArticles, currentPage]);
    const placeholder = useMemo(() => [...Array(5)].map((_, i) => i), []);
    const list = (loaded) ? articlesList : placeholder;

    if (error) <Redirect to='/error' />

    return (
        <div className={styles.wrapper}>
            {
                list.map(id =>
                    loaded
                        ? <ArticlesCard key={id} id={id} />
                        : <div key={id} className={styles.loading}><LoadingIcon width='1250' height='900' /></div>
                )
            }
        </div>
    )
};

const mapStateToProps = state => ({
    loaded: articlesSelectedIsLoaded(state),
    currentPage: articlesCurrentPage(state),
    articlesList: articlesList(state),
    error: articlesError(state)
});

const mapDispatchToProps = ({
    loadArticles
})

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesCards);