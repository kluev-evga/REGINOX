import { connect } from 'react-redux'
import { homeAddressBar } from '../../../redux/selectors'
import { useMediaQuery } from 'react-responsive'
import Collapse, { Panel } from 'rc-collapse'
import Tab from './tab/tab.component'
import TabContent from './tab-content/tab-content.component'
import { ReactComponent as Squares } from '../../../assets/svg/squares.svg'
import styles from './address-bar.module.css'
import 'rc-collapse/assets/index.css'

const AdressBar = ({ addressBar }) => {
   const isDesktop = useMediaQuery({ query: '(min-width: 1200px)' })

   return (
      <div className={styles.container}>
         <div className='container'>
            <div className={styles.title} aria-hidden='true'>
               THE CROWN FOR YOUR KITCHEN
            </div>

            {isDesktop ? (
               <ul className={styles.wrapper}>
                  {addressBar.map(data => (
                     <Tab key={data.id} {...data} />
                  ))}
               </ul>
            ) : (
               <Collapse accordion={true} className={styles.wrapper}>
                  {addressBar.map(({ id, name, ...rest }) => (
                     <Panel key={id} header={name} headerClass={styles.header}>
                        <TabContent {...rest} />
                     </Panel>
                  ))}
               </Collapse>
            )}
            <Squares className={styles.squares} />
         </div>
      </div>
   )
}

const mapStateToProps = state => ({ addressBar: homeAddressBar(state) })

export default connect(mapStateToProps)(AdressBar)
