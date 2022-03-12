import { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadBrands } from '../../redux/actions';
import { brandsLoaded, brandsError, brands } from '../../redux/selectors';
import { Redirect } from 'react-router-dom';
import { ReactComponent as Spinner } from '../../assets/svg/spinner.svg';
import styles from './brands.module.css';


const Brands = ({ loadBrands, loaded, error, brands, withUrl }) => {
    useEffect(() => loadBrands(), [loadBrands]);

    if (!loaded) return <Spinner width='400' className={styles.spinner} />
    if (error) <Redirect to='/error' />

    return (
        <div className={styles.cards}>
            {
                brands.map(({ id, img, alt, warranty, about, url }) => (
                    <figure key={id}>
                        <img src={process.env.PUBLIC_URL + img} alt={alt} width='340' height='145' />
                        <figcaption>
                            {withUrl ? about : warranty}
                            {withUrl && (
                                <a href={`https://${url}`} className='link_primary' target="_blank" rel='noreferrer'>{url}</a>
                            )}
                        </figcaption>
                    </figure>
                ))
            }
        </div>
    );
};

const mapStateToProps = state => ({
    loaded: brandsLoaded(state),
    error: brandsError(state),
    brands: brands(state)
})

const mapDispatchToProps = ({
    loadBrands
})

export default connect(mapStateToProps, mapDispatchToProps)(Brands);