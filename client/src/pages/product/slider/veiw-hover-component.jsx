import { useEffect, useRef } from 'react'
import { useMediaQuery } from 'react-responsive'


function zoom(e) {
   var zoomer = e.currentTarget;
   const offsetX = e.offsetX ? e.offsetX : e.touches[0].pageX
   const offsetY = e.offsetY ? e.offsetY : e.touches[0].pageX
   const x = offsetX / zoomer.offsetWidth * 100
   const y = offsetY / zoomer.offsetHeight * 100
   zoomer.style.backgroundPosition = x + '% ' + y + '%';
}

const ViewHover = ({ image }) => {
   const isAnyHover = useMediaQuery({ query: '(any-hover)' })
   const ref = useRef()

   useEffect(() => {
      const target = ref.current;
      isAnyHover && target.addEventListener('mousemove', zoom)
      return () => target.removeEventListener('mousemove', zoom)
   }, [])//eslint-disable-line

   return (
      <div
         ref={ref}
         style={{ backgroundImage: `url(${image})` }}
         className='product-slider__hoverable'
      >
         <div className='product-slider__hoverable-image'>
            <img src={image} alt="proudct" />
         </div>
      </div>
   )
}

export default ViewHover