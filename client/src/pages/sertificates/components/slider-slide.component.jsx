import { useSelector } from 'react-redux'
import { sertificatesItem } from '../../../redux/selectors'
import { Item } from 'react-photoswipe-gallery'


const SliderSlide = ({ id }) => {
   const { name, img, alt } = useSelector((state) => sertificatesItem(state, id))

   return (
      <Item
         original={'/assets/sertificates/' + img}
         thumbnail={'/assets/sertificates/' + img}
         caption={`<div>${name}</div>`}
         width="780"
         height="1150"
         alt={alt}
      >

         {({ ref, open }) => (
            <div className='sertificates-slider__slide' onClick={open} ref={ref}>
               <img src={'/assets/sertificates/' + img} alt={alt} loading='lazy' />
               <p>{name}</p>
            </div>
         )}

      </Item>
   )
}

export default SliderSlide