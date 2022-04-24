import { ReactComponent as StarIcon } from '../../assets/svg/star.svg'


const Rating = ({ children, r, wrapperClass }) => (
   <div className={wrapperClass}>
      {[...Array(5)].map((_, i) => <StarIcon key={i} className={r > i + 0.5 ? '' : 'clear'} /> )}
      {children}
   </div>
)

export default Rating