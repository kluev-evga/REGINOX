import cn from 'classnames'


const CardSlider = ({ title, img, alt, children, width, height, md }) => (
   <div className={cn('card-slider', { 'md': md } )}>

      <div>
         <img src={img} alt={alt} width={width} height={height} />
         <p>{title}</p>
      </div>
      <span>{children}</span>

   </div>
)

export default CardSlider