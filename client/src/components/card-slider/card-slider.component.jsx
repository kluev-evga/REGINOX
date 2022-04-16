import cn from 'classnames'


const CardSlider = ({ title, img, alt, children, width, height, md }) => (
   <div className={cn('card-slider', { 'md': md } )}>

      <span>{children}</span>
      <img src={img} alt={alt} width={width} height={height} />
      <div>
         <p>{title}</p>
      </div>

   </div>
)

export default CardSlider