const Specifications = ({ specs }) =>
   specs.map(({ dt, dd }, i) =>
      <dl key={i} className='product-specification-item'>
         <dt>{dt}</dt>
         <dd>{dd}</dd>
      </dl>
)

export default Specifications