import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { menuLinks } from '../../../redux/selectors'
import CardSlider from '../../../components/card-slider/card-slider.component'
import { ReactComponent as ListIcon } from '../../../assets/svg/list.svg'


const HomeCatalog = () => {
   const links = useSelector(menuLinks)

   return (
      <div className='container section-container'>
         <h2 className='title'>каталог</h2>
         <div className='home-catalog'>

            {links.map(({ url, ...rest }) => (
               <Link to={`products/${url}`} key={url} className='link-card'>

                  <CardSlider {...rest} width='550' height='640'>
                     <ListIcon />
                     Перейти в каталог
                  </CardSlider>

               </Link>
            ))}

         </div>
      </div>
   )
}

export default HomeCatalog
