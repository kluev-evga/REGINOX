import { useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import styles from './cart.module.css';


const Cart = () => {
    useEffect(() => { !'cartIsEmpty' && <Redirect to='/home' /> })

    return (
        <div className={"container"} >
            <div className={"breadcrumbs"}>
                <Link to='/'>Главная</Link> / корзина
            </div>
            <h1 className={'title'}>Корзина</h1>

            <div className={styles.container}>
                <div className={styles.poduct}>
                    <img src={process.env.PUBLIC_URL + '/assets/products/91266701_02.webp'} alt='product item' />
                </div>
            </div>




            <div className={styles.summary}>
                <h2>Ваша корзина</h2>

                <div className={styles.price}>
                    <p>Товары<span>(2)</span></p>

                    <span>40 000 руб</span>

                    <p>Скидка</p>
                    <span>20%</span>
                </div>

                <div className={styles.total}>
                    <p>Итого</p>
                    <span>34 000 руб</span>
                </div>

                <button className='button-block'>Перейти к оформлению</button>
            </div>
        </div>
    )
}

export default Cart