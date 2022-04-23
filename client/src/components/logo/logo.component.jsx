import { ReactComponent as LogoIcon } from '../../assets/svg/logo.svg'
import { ReactComponent as PRholding } from '../../assets/svg/PRHolding.svg'

const Logo = () =>
<div className='logo'>
   <LogoIcon className='logo__crown' />
   <PRholding className='logo__pr' />
</div>

export default Logo