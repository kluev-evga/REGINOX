import { useEffect, useRef } from 'react'


function zoom(e){
   var zoomer = e.currentTarget;
   const offsetX = e.offsetX ? e.offsetX : e.touches[0].pageX
   const offsetY = e.offsetY ? e.offsetY : e.touches[0].pageX
   const x = offsetX/zoomer.offsetWidth*100
   const y = offsetY/zoomer.offsetHeight*100
   zoomer.style.backgroundPosition = x + '% ' + y + '%';
   zoomer.style.backgroundSize = '150% 150%';
}

const SliderViewHover = ({image}) => {
   const ref = useRef()

   useEffect(()=> {
      const target = ref.current;
      target.addEventListener('mousemove', zoom);
      return () => target.removeEventListener('mousemove', zoom)
   }, [])

   return (
      <div
         ref={ref}
         style={{backgroundImage: `url(${image})`}}
         className='product-slider__hoverable'
      >
         <img src={image} alt="proudct"/>
      </div>
   )
}

export default SliderViewHover