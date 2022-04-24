import { useSelector } from 'react-redux'
import { homeAddressBar } from '../../../../redux/selectors'
import { useMediaQuery } from 'react-responsive'
import Collapse, { Panel } from 'rc-collapse'
import Tab from './tab.component'
import TabContent from './tab-content.component'
import { ReactComponent as Squares } from '../../../../assets/svg/squares.svg'
import { ReactComponent as ChevronIcon } from '../../../../assets/svg/chevron-right.svg'


const HomeAdress = () => {
   const addressData = useSelector(homeAddressBar)
   const isDesktop = useMediaQuery({ query: '(min-width: 1200px)' })

   return (
      <div className='home-address'>
         <div className='container'>

            <div className='home-address__title' aria-hidden='true' translate='no'>
               THE CROWN FOR YOUR KITCHEN
            </div>

            {isDesktop
               ? <ul className='home-address__tabs-wrapper'>
                     {addressData.map(data => <Tab key={data.id} {...data} /> )}
               </ul>
               : <Collapse accordion={true} expandIcon={<ChevronIcon/>} defaultActiveKey='asdf'>
                     {addressData.map(({ id, name, ...rest }) => (
                        <Panel key={id} header={name} headerClass='home-address__header'>
                           <TabContent {...rest} />
                        </Panel>
                     ))}
                  </Collapse>
               }

            <Squares className='home-address__squares' />

         </div>
      </div>
   )
}

export default HomeAdress