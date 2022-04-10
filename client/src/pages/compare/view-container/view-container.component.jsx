import { connect } from 'react-redux';
import { compareItems, productItemById } from '../../../redux/selectors';
import { useMediaQuery } from 'react-responsive'
import ViewPhone from '../view-phone/view-phone.component'
import ViewLarge from '../view-large/view-large.component'


const ViewContainer = ({ compareItems }) => {
    const isLarge = useMediaQuery({ query: '(min-width: 768px)' })

    return isLarge ? <ViewLarge compareItems={compareItems} /> : <ViewPhone compareItems={compareItems} />;
}

const mapStateToProps = state => ({
    compareItems: compareItems(state),
    productItem: productItemById(state)// непосредственно айтем из продуктов
})

export default connect(mapStateToProps)(ViewContainer)