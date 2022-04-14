import { useSelector } from 'react-redux'
import { sertificatesItem } from '../../../redux/selectors'
import { Item } from 'react-photoswipe-gallery'
import { ReactComponent as ZoomIcon } from '../../../assets/svg/zoom.svg'



//    return (
//          <Link
//             to={`/sertificates/${id}`}
//             onClick={() => setSertificatesScroll(window.scrollY)}>
//             <img
//                src={process.env.PUBLIC_URL + '/assets/sertificates/preview/' + img}
//                alt={alt}
//                width={360}
//                height={540}
//             />
//             <p>{name}</p>
//             <ZoomIcon />
//          </Link>
//    )
// }


const SliderItem = ({ id }) => {
   const { name, img, alt } = useSelector((state) => sertificatesItem(state, id))

   return (
      <Item
         original={process.env.PUBLIC_URL + '/assets/sertificates/' + img}
         thumbnail={process.env.PUBLIC_URL + '/assets/sertificates/preview/' + img}
         width="1024"
         height="768"
         alt={alt}
      >

         {({ ref, open }) => (
            <a href="#sdf"  ref={ref} onClick={open}>
               <img src={process.env.PUBLIC_URL + '/assets/sertificates/preview/' + img} alt={alt} />
               <p>{name}</p>
               <ZoomIcon />
            </a>
         )}
   
      </Item>
   )
}

export default SliderItem
