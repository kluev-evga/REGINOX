import { useSelector } from 'react-redux'
import { formLoading, formError } from '../../redux/selectors'
import { ReactComponent as SuccessIcon } from '../../assets/svg/success.svg'
import { ReactComponent as LoadingIcon } from '../../assets/svg/spinner.svg'


const Response = () => {
   const isLoading = useSelector(formLoading)
   const isError = useSelector(formError)

   return (
      <>
         { isLoading
            ? <LoadingIcon/>
            : isError ? <p className='response-text'>Произошла ошибка</p>
            : <SuccessIcon/>
         }
      </>
   )
}

export default Response