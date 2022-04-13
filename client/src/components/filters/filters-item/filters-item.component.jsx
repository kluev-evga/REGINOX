import { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import cn from 'classnames'
import { ReactComponent as CheckboxIcon } from '../../../assets/svg/checkbox.svg'
import styles from '../button.module.css'

const FiltersItem = ({ title, count, search, searchGroup, isOpen = true }) => {
   const history = useHistory()
   const params = new URLSearchParams(history.location.search)
   const isActive = params.get(searchGroup)?.includes(search)

   const handleClick = useCallback((isActive, params) => {
      if (!params.has(searchGroup) && !isActive) {
         params.set(searchGroup, search)
      } else {
         const searchArr = params.get(searchGroup).split('_')

         if (searchArr.length < 2 && isActive) {
            params.delete(searchGroup)
         } else {
            const arr = searchArr.filter(item => item !== search)
            !isActive && arr.push(search)
            params.set(searchGroup, arr.join('_'))
         }
      }
      history.push({ search: params.toString() })
   }, []) // eslint-disable-line

   return (
      <button
         tabIndex={count === 0 || !isOpen ? -1 : null}
         onClick={() => handleClick(isActive, params)}
         className={cn(styles.button, {
            [styles.disabled]: count === 0,
            [styles.active]: isActive,
         })}>
         <CheckboxIcon />
         {title}
         <span>({count})</span>
      </button>
   )
}

export default FiltersItem
