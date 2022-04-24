import { ReactComponent as PlusIcon } from '../../assets/svg/plus.svg'
import { ReactComponent as MinusIcon } from '../../assets/svg/minus.svg'
import { ReactComponent as ErrorIcon } from '../../assets/svg/not-allowed.svg'


const ProductsCountPanel = ({ wrapperClass, increase, decrease, count }) => (
   <div className={wrapperClass}>
      <span>Количество</span>
      <div>
         <button onClick={decrease} aria-label='уменьшить количество'>
            <MinusIcon />
         </button>
         <span>{count || 0}</span>
         <button onClick={increase} aria-label='увеличить количество'>
            {count === 99 ? <ErrorIcon /> : <PlusIcon />}
         </button>
      </div>
   </div>
)

export default ProductsCountPanel