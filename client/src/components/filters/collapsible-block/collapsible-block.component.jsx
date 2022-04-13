import { useMemo, useState } from 'react'
import Collapsible from 'react-collapsible'
import FiltersItem from '../filters-item/filters-item.component'
import { ReactComponent as ChevronDownIcon } from '../../../assets/svg/chevron-down.svg'
import { ReactComponent as ChevronUpIcon } from '../../../assets/svg/chevron-up.svg'
import styles from './collapsible-block.module.css'

const CollapsibleBlock = ({ filters, searchGroup }) => {
   const [isOpen, setOpen] = useState(false)
   const [Outside, inside, time, count] = useMemo(
      () => [
         () =>
            filters
               .slice(0, 3)
               .map((data, i) => (
                  <FiltersItem key={i} {...data} searchGroup={searchGroup} />
               )),
         filters.slice(3),
         Math.sqrt(filters.length) * 80,
         filters.slice(3).length,
      ],
      []
   ) //eslint-disable-line

   return (
      <div className={styles.container}>
         <Outside />
         <Collapsible
            trigger={
               <>
                  Ещё {count}
                  <ChevronDownIcon />
               </>
            }
            triggerWhenOpen={
               <>
                  Свернуть
                  <ChevronUpIcon />
               </>
            }
            triggerTagName={'button'}
            transitionTime={time}
            className={styles.collapsible}
            openedClassName={styles.collapsible}
            triggerClassName={styles.trigger}
            triggerOpenedClassName={styles.trigger_open}
            contentOuterClassName={styles.folded}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}>
            {inside.map((data, i) => (
               <FiltersItem
                  key={i}
                  {...data}
                  searchGroup={searchGroup}
                  isOpen={isOpen}
               />
            ))}
         </Collapsible>
      </div>
   )
}

export default CollapsibleBlock
