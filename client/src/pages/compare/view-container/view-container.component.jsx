import { connect } from 'react-redux';
import { compareItems, productItemById } from '../../../redux/selectors';
import { useMediaQuery } from 'react-responsive';
import ViewPhone from '../view-phone/view-phone.component';
import ViewLarge from '../view-large/view-large.component';


const ViewContainer = ({ compareItems, productItem }) => {
    const isLarge = useMediaQuery({ query: '(min-width: 768px)' });

    const items = compareItems.map(id => productItem(id));
    const specs = Object.keys(items.reduce((acc, { specs }) => {
        specs.forEach(({ dt }) => acc[dt] = true);
        return acc;
    }, {}));

    const data = items.map(({ id, images, specs, productUrl, url }) => {
        console.log(productUrl);
        const itemSpecs = specs.reduce((acc, item) => {
            acc[item.dt] = item.dd;
            return acc;
        }, {})
        return ({ id, images, specs: itemSpecs, productUrl, url })
    })

    if (specs.length === 0) return <div>ничего не выбрано</div>

    return isLarge
        ? <ViewLarge items={compareItems} data={data} specs={specs} />
        : <ViewPhone items={compareItems} data={data} specs={specs} />;
}

const mapStateToProps = state => ({
    compareItems: compareItems(state),
    productItem: productItemById(state),
})

export default connect(mapStateToProps)(ViewContainer)