import Specifications from "../specifications/specifications.component"
import styles from './information-container.module.css';


const InformationContainer = ({ specs }) => (
    <div className={styles.container}>
        <div>
            <h2 className={styles.title}>Характеристики</h2>
            <Specifications specs={specs} />
        </div>
        <div>
            <h2 className={styles.title}>Отзывы</h2>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores aperiam dicta aliquid mollitia qui praesentium ipsam voluptatem debitis, perferendis cumque, perspiciatis, obcaecati rerum quia aliquam quae minus quisquam sapiente cupiditate?
        </div>
        <div>
            <h2 className={styles.title}>Задать вопрос</h2>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores aperiam dicta aliquid mollitia qui praesentium ipsam voluptatem debitis, perferendis cumque, perspiciatis, obcaecati rerum quia aliquam quae minus quisquam sapiente cupiditate?
        </div>
    </div>
)

export default InformationContainer