import { useMemo, useState } from 'react'
import Collapsible from 'react-collapsible'
import FiltersItem from './filters-item.component'
import { ReactComponent as ChevronRightIcon } from '../../../assets/svg/chevron-right.svg'
import { ReactComponent as ChevronUpIcon } from '../../../assets/svg/chevron-up.svg'


const CollapsibleBlock = ({ filters, searchGroup }) => {
   const [isOpen, setOpen] = useState(false)
   const [Outside, inside, time, count] = useMemo(
      () => [
         () =>
            filters.slice(0, 3).map((data, i) => <FiltersItem key={i} {...data} searchGroup={searchGroup} />),
         filters.slice(3),
         Math.sqrt(filters.length) * 50,
         filters.slice(3).length,
      ],
      []) //eslint-disable-line

   return (
      <div className='filters__collapsible'>
         <Outside />
         <Collapsible
            trigger={<>Ещё{count}<ChevronRightIcon /> </>}
            triggerWhenOpen={<> Свернуть<ChevronUpIcon /> </>}
            triggerTagName={'button'}
            transitionTime={time}
            className='filters__collapsible-container'
            openedClassName='filters__collapsible-container'
            triggerClassName='filters__collapsible-trigger'
            triggerOpenedClassName='filters__collapsible-trigger'
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
         >

            {inside.map((data, i) => <FiltersItem key={i} {...data} searchGroup={searchGroup} isHidden={!isOpen} />)}

         </Collapsible>
      </div>
   )
}

export default CollapsibleBlock