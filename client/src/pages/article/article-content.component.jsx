const Article = ({ entities }) => (
   <div className='article'>
      {entities.map(({ type, text, list }, i) =>
         type === 'b' ? (
            <b key={i}>{text}</b>
         ) : type === 'p' ? (
            <p key={i}>{text}</p>
         ) : (
            <ul key={i}>
               {list.map((text, i) => (
                  <li key={i}>{text}</li>
               ))}
            </ul>
         )
      )}
   </div>
)

const Images = ({ entities }) => (
   <div className='image-container'>
      {entities.map(({ url, alt }, i) => (
         <img src={process.env.PUBLIC_URL + url} alt={alt} key={i} />
      ))}
   </div>
)

const ArticleContent = ({ entities }) => (
   <div>
      {entities.map(({ type, entities }, i) =>
         type === 'article' ? (
            <Article key={i} entities={entities} />
         ) : (
            <Images key={i} entities={entities} />
         )
      )}
   </div>
)

export default ArticleContent