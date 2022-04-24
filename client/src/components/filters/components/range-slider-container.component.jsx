import { useMatch } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { filtersMinMax } from '../../../redux/selectors';
import RangeSlider from './range-slider.component'


const RangeSliderContainer = () => {
   const {params} = useMatch('/products/:url')
  const { url } = params
  const [MIN, MAX] = useSelector(state => filtersMinMax(state, url))

  if (MIN === MAX) return null

   return (
      <section>
         <div className='filters__section-heading'>
            <p>Цена</p>
         </div>
         <RangeSlider MIN={MIN} MAX={MAX} url={url}/>
      </section>
   )
}

export default RangeSliderContainer