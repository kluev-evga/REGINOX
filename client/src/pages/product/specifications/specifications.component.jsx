import styles from './specifications.module.css'

const Specifications = ({ specs }) =>
   specs.map(({ dt, dd }, i) => (
      <dl key={i} className={styles.item}>
         <dt>{dt}</dt>
         <dd>{dd}</dd>
      </dl>
   ))

export default Specifications
