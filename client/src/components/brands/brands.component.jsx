const Brands = ({ brands, withUrl }) => (
   <div className='brands'>
      {brands.map(({ id, img, alt, warranty, about, url }) =>
         <figure key={id}>
            <img src={process.env.PUBLIC_URL + img} alt={alt} width='340' height='145' />

            <figcaption>
               {withUrl ? about : warranty}
               {withUrl && (
                  <a className='link_primary' href={`https://${url}`} target='_blank' rel='noreferrer' tabIndex={-1}>
                     {url}
                  </a>
               )}
            </figcaption>
         </figure>
      )}
   </div>
)

export default Brands