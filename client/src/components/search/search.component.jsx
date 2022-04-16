import { useState, useRef, useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeSearchMenu } from '../../redux/actions'
import cn from 'classnames'
import FocusTrap from 'focus-trap-react'
import { useMediaQuery } from 'react-responsive'
import useOnClickOutside from 'use-onclickoutside'
import { ReactComponent as SearchIcon } from '../../assets/svg/search.svg'
import { ReactComponent as CrossIcon } from '../../assets/svg/cross.svg'


const Search = () => {
   const isTablet = useMediaQuery({ query: '(min-width: 768px)' })
   const refInput = useRef()
   const refBody = useRef()
   const [isActive, setActive] = useState(false)
   const [searchText, setsearchText] = useState('')
   const dispatch = useDispatch()

   useOnClickOutside(refBody, () => dispatch(closeSearchMenu()))

   const handleChange = ({ target }) => { setsearchText(target.value) }

   const handleClearClick = useCallback(() => {
      setsearchText('')
      refInput.current.focus()
   }, [])

   const handleKeyDown = useCallback((e) => { if (e.code === 'Escape') dispatch(closeSearchMenu()) }, [])//eslint-disable-line

   useEffect(() => {
      document.addEventListener('keydown', handleKeyDown)
      return () => {document.removeEventListener('keydown', handleKeyDown)}
   })

   return (
      <FocusTrap>
      <div className='search' ref={refBody} >
         <div className='container search__container'>

               <div className={cn('search__input-container', {'active': isActive})}>
                  <SearchIcon className='search__icon' />

                  <input
                     ref={refInput}
                     onChange={handleChange}
                     onFocus={() => setActive(true)}
                     onBlur={() => !searchText && setActive(false)}
                     value={searchText}
                     maxLength={40}
                     type='text'
                  />
                  <span>поиск по сайту</span>

                  {isActive && (
                     <button
                        className='search__btn-clear'
                        onClick={handleClearClick}
                        tabIndex={-1}
                     >
                        <CrossIcon />
                     </button>
                  )}
               </div>

               <div className='search__btn-close'>
                  <button onClick={() => dispatch(closeSearchMenu())} >
                     <CrossIcon />
                     {isTablet && <span>Закрыть</span>}
                  </button>
               </div>

         </div>
      </div>
      </FocusTrap>
   )
}

export default Search