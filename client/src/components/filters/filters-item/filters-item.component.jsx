import { useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'
import cn from 'classnames'
import { ReactComponent as CheckboxIcon } from '../../../assets/svg/checkbox.svg'
import styles from '../button.module.css'

const FiltersItem = ({ title, count, search, searchGroup, isHidden = false }) => {
   const [params, setSearchParams] = useSearchParams()
   const isChecked = params.get(searchGroup)?.split('_').includes(search)

   const handleClick = useCallback((isChecked, params) => {
      if (!params.has(searchGroup) && !isChecked) {
         params.set(searchGroup, search)
      } else {
         const searchArr = params.get(searchGroup).split('_')

         if (searchArr.length < 2 && isChecked) {
            params.delete(searchGroup)
         } else {
            const arr = searchArr.filter(item => item !== search)
            !isChecked && arr.push(search)
            params.set(searchGroup, arr.join('_'))
         }
      }
      setSearchParams(params)
   }, []) // eslint-disable-line

   return (
      <button
         tabIndex={count === 0 || isHidden ? -1 : null}
         onClick={() => handleClick(isChecked, params)}
         className={cn(styles.button, { [styles.disabled]: count === 0, [styles.active]: isChecked })}>
         <CheckboxIcon />
         {title}
         <span>({count})</span>
      </button>
   )
}

export default FiltersItem
