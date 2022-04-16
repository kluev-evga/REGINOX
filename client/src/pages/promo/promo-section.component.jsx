import Slider from '../../components/slider/slider.component'


const PromoSection = ({ title, text, items }) => (
   <div className='promo-section'>
      <h2 className='title-1'>{title}</h2>
      <p className='promo-section__sub-title'>{text}</p>
      <Slider items={items} />
   </div>
)

export default PromoSection