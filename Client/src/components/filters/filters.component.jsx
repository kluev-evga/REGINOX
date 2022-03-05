import styles from './filters.module.css';
import { ReactComponent as ChevronIcon } from '../../assets/svg/chevron.svg';
import { ReactComponent as CheckIcon } from '../../assets/svg/check-mark.svg';


const data = {
    'links': {
        id: '',
        name: 'Категории',
        filters: [
            { name: 'Нержавеющая сталь', count: '10' },
            { name: 'Гранит', count: '20' },
            { name: 'PVD-покрытие (Miami)', count: '15' },
            { name: 'Окрашенные (Regi Color)', count: '8' },
        ]
    },
    'filters': [
        {
            'name': 'Материал',
            'filters': ['нержавеющая сталь', 'гранит', 'PVD-покрытие (серия Miami)', 'окрашенные (серия Regi Color)', 'керамика']
        },
        {
            'name': 'Метод установки',
            'filters': ['врезной', 'подстольный', 'вровень со столешницей']
        },
        {
            'name': 'Размер шкафа',
            'filters': ['300мм', '400мм', '450мм', '500мм', '600мм', '700мм', '800мм', '900мм', '900мм х 900мм', '1000мм']
        },
        {
            'name': 'Форма',
            'filters': ['круглая', 'квадратная', 'прямоугольная', 'овальная', 'с крылом', 'двойная']
        },
        {
            'name': 'Цвет',
            'filters': ['полированная', 'матовая', 'брашированная', 'текстурированная', 'медь', 'золото', 'белый', 'бежевый', 'серый', 'черный', 'коричневый']
        },
    ]
};

const Tab = ({ name }) => {
    return (
        <button className={styles.tab}>
            {name}
            <ChevronIcon />
        </button>
    );
}

const CategoryButton = ({ name, count }) => (
    <button className={styles.button}>
        {name}
        <span>{count}</span>
    </button>
);

const FiltersButton = ({ name }) => {
    return (
        <button className={styles.button}>
            <CheckIcon className={styles.checkmark} />
            {name}
        </button>
    );
};

const FiltersBlock = ({ name, filters }) => {
    return (
        <div className={styles.container}>
            <Tab name={name} />
            {filters.map(name => <FiltersButton key={name} name={name} />)}
        </div>
    );
};

const Filters = () => (
    <div className={styles.wrapper}>
        <div className={styles.container}>
            <Tab name={data.links.name} />
            {data.links.filters.map(item => <CategoryButton key={item.name} {...item} />)}
        </div>

        {data.filters.map(item => <FiltersBlock key={item.name} {...item} />)}
    </div>
);

export default Filters;