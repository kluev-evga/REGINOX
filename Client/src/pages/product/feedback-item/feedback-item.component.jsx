import { useState, useMemo } from 'react';
import styles from './feedback-item.module.css';
import { ReactComponent as ChevronRight } from '../../../assets/svg/chevron-right.svg';
import { ReactComponent as ChevronUp } from '../../../assets/svg/chevron-up.svg';


const [date, dateTime] = ['22 / 01 / 21', '22 / 01 / 21'];

const FeedbackItem = ({ reviewText }) => {
    const [hidden, setHidden] = useState(true);

    const [withButton, text, textSample] = useMemo(() => ([
        reviewText.length > 250 ? true : false,
        reviewText,
        reviewText.slice(0, 150).split(' ').slice(0, -1).join(' ') + '...'
    ]), []);//eslint-disable-line

    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <h3><span>Анастастия Задова</span><span className={styles.prooved}>Подтвержденная покупка</span></h3>
                <time dateTime={dateTime}>{date}</time>
            </div>
            <p>
                {(withButton && hidden) ? textSample : text}
            </p>

            {withButton &&
                <button
                    className={styles.button}
                    onClick={() => setHidden(!hidden)}>
                    {hidden ? 'Читать далее' : 'Скрыть'}
                    {hidden ? <ChevronRight /> : <ChevronUp />}

                </button>
            }
        </div>
    )
}

export default FeedbackItem