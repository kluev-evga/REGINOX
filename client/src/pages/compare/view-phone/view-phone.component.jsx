import { useMediaQuery } from 'react-responsive';
import Slider from '../slider/slider.component';
import styles from './view-phone.module.css';


const ViewPhone = ({ data, specs }) => {
    const isPhoneXL = useMediaQuery({ query: '(min-width: 300px)' });

    return (
        <div className={styles.container}>
            <div className={styles.specs}>
                {specs.map((item, i) => <span key={i}><p>{item}</p></span>)}
            </div>

            <div className={styles.slider_left}>
                <Slider data={data} specs={specs} />
            </div>

            {isPhoneXL &&
                <div className={styles.slider_right}>
                    <Slider data={data} specs={specs} />
                </div>
            }
        </div>
    )
}

export default ViewPhone