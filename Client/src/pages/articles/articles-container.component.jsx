import { Switch, Route, Redirect } from 'react-router-dom';
import Article from '../article/article.component';
import Articles from './articles.component';
import srollRestoration from '../../hoc/scroll-restoration';


const ArticlePage = srollRestoration(Article);

const ArticlesContainer = () => (
    <Switch>
        <Route exact path='/articles' component={Articles} />
        <Route exact path='/articles/:articleId' component={ArticlePage} />
        <Redirect to='/not-found' />
    </Switch>
);

export default ArticlesContainer;