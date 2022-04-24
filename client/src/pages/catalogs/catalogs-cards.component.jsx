import { useSelector } from 'react-redux'
import { catalogs, catalogsLoading } from '../../redux/selectors'
import { ReactComponent as DownloadIcon } from '../../assets/svg/download.svg'
import { ReactComponent as PdfIcon } from '../../assets/svg/pdf.svg'
import { ReactComponent as Spinner } from '../../assets/svg/spinner.svg'


const CatalogsCards = ({ pageSize }) => {
   const catalogsArr = useSelector(catalogs)
   const loading = useSelector(catalogsLoading)

   return (
      <div className='catalog__container'>
   
         {catalogsArr.slice(0, pageSize).map( ({ id, url, img, title, alt }) =>
            <a href={url} download key={id} className='catalog__card'>
                  <img src={img} alt={alt} width='380' height='550' />
                  <div className='catalog__card-caption'>
                     <DownloadIcon className='catalog__card-download'/>
                     <PdfIcon className='catalog__card-pdf'/>
                     <div className='catalog__card-title'>
                        {title}
                     </div>
                  </div>
            </a>
         )}
   
         {loading && <div className='catalog__spinner'><Spinner /></div>}
      </div>
   )
}

export default CatalogsCards