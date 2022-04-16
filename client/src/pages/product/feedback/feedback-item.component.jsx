import { useEffect } from 'react'
import { useState, useRef } from 'react'
import { ReactComponent as ChevronRight } from '../../../assets/svg/chevron-right.svg'
import { ReactComponent as ChevronUp } from '../../../assets/svg/chevron-up.svg'


const FeedbackItem = ({ name, date, dateTime, text, confirmed}) => {
   const [hidden, setHidden] = useState(true)
   const [withButton, setWithButton] = useState(false)
   const ref = useRef()

   useEffect(() => { ref.current.scrollHeight > 48 && setWithButton(true) }, [])

   return (
      <div className='product-feedback__item'>
         <div className='product-feedback__item-title'>
            <h3>
               <span>{name}</span>
               {confirmed && <span className='product-feedback__item-prooved'>Подтвержденная покупка</span>}
            </h3>
            <time dateTime={dateTime}>{date}</time>
         </div>
         <p style={hidden ? {} : { display:'block' }} ref={ref}>{text}</p>
         {withButton &&
            <button
               className='product-feedback__item-btn-more'
               onClick={() => setHidden(!hidden)}>
               {hidden ? 'читать далее' : 'скрыть'}
               {hidden ? <ChevronRight /> : <ChevronUp style={{marginLeft: 8}} />}
            </button>
         }
      </div>
   )
}

export default FeedbackItem