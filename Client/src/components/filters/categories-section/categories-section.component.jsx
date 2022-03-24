import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import { ReactComponent as CheckIcon } from '../../../assets/svg/checked.svg';


const CategoriesSection = ({ title, filters }) => {
    const match = useRouteMatch('/products/:group/:category?');
    const history = useHistory();
    const location = useLocation();
    const search = location.search;
    const isActive = match.params.category;

    return (
        <section>
            <p>{title}</p>
            {filters.map(({ title, url, count }, i) =>
                <button
                    key={i}
                    onClick={() => history.push({ pathname: url, search: search })}>

                    <CheckIcon style={isActive === url ? { color: 'var(--red)' } : {}} />
                    {title}
                    <span>({count})</span>
                </button>
            )}
        </section>
    );
};

export default CategoriesSection;