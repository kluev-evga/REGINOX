import { useState, useMemo } from 'react';
import styles from './feedback-item.module.css';
import { ReactComponent as ChevronRight } from '../../../assets/svg/chevron-right.svg';
import { ReactComponent as ChevronUp } from '../../../assets/svg/chevron-up.svg';


const string = 'Умный, проворный, с лестницы не падает, с разгона становится на базу Умный, проворный, с лестницы не падает, с разгона...';
const [date, dateTime] = ['22 / 01 / 21', '22 / 01 / 21'];

const FeedbackItem = () => {
    const [hidden, setHidden] = useState(true);

    const [withButton, text, textSample] = useMemo(() => ([
        string.length > 200 ? true : false,
        string,
        string.slice(0, 100).split(' ').slice(0, -1).join(' ') + '...'
    ]), []);

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