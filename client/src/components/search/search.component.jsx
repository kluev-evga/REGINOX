import { useState, useRef } from 'react'
import { connect } from 'react-redux'
import { appSearchIsOpen } from '../../redux/selectors'
import { closeSearchMenu } from '../../redux/actions'
import cn from 'classnames'
import useOnClickOutside from 'use-onclickoutside'
import { ReactComponent as SearchIcon } from '../../assets/svg/search.svg'
import { ReactComponent as CrossIcon } from '../../assets/svg/cross.svg'
import styles from './search.module.css'

const Search = ({ isOpen, closeSearchMenu }) => {
   const refInput = useRef(null)
   const refInputContainer = useRef(null)
   const refBody = useRef(null)
   const [isActive, setActive] = useState(false)
   const [searchText, setsearchText] = useState('')

   useOnClickOutside(refInputContainer, () => setActive(false))
   useOnClickOutside(refBody, closeSearchMenu)

   const handleChange = ({ target }) => {
      setsearchText(target.value)
   }

   const handleClearClick = () => {
      setsearchText('')
      refInput.current.focus()
   }

   return (
      <div
         ref={refBody}
         className={cn(styles.container, { [styles.open]: isOpen })}>
         <div className='container'>
            <div className={styles.wrapper}>
               <div
                  className={cn(styles.input, { [styles.active]: isActive })}
                  ref={refInputContainer}>
                  <SearchIcon />
                  <input
                     onChange={handleChange}
                     onFocus={() => setActive(true)}
                     value={searchText}
                     placeholder={isActive ? '' : 'поиск по сайту'}
                     maxLength={40}
                     type='text'
                     ref={refInput}
                  />

                  {isActive && (
                     <button
                        className={styles.btn_clear}
                        onClick={handleClearClick}>
                        <CrossIcon />
                     </button>
                  )}
               </div>

               {!isActive && (
                  <button
                     onClick={closeSearchMenu}
                     className={cn(styles.btn_close, {
                        [styles.active]: isActive,
                     })}>
                     <CrossIcon />
                     <span>Закрыть</span>
                  </button>
               )}
            </div>

            <div
               className={cn(styles.line, { [styles.active]: isActive })}></div>
         </div>
      </div>
   )
}

const mapStateToProps = state => ({ isOpen: appSearchIsOpen(state) })

export default connect(mapStateToProps, { closeSearchMenu })(Search)
