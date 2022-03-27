import FiltersItem from '../filters-item/filters-item.component';
import { ReactComponent as CrossIcon } from '../../../assets/svg/cross.svg';
import { ReactComponent as CrossIcon1 } from '../../../assets/svg/sweep.svg';
import { ReactComponent as CrossIcon2 } from '../../../assets/svg/sweep1.svg';
import { ReactComponent as CrossIcon3 } from '../../../assets/svg/sweep2.svg';
import { ReactComponent as CrossIcon4 } from '../../../assets/svg/sweep3.svg';
import { ReactComponent as CrossIcon5 } from '../../../assets/svg/sweep4.svg';
import { ReactComponent as CrossIcon6 } from '../../../assets/svg/sweep6.svg';


const FiltersSection = ({ title, filters, searchGroup }) => (
    <section>
        <p>
            {title}
            <CrossIcon4 />
        </p>
        {filters.map((data, i) => <FiltersItem key={i} {...data} searchGroup={searchGroup} />)}
    </section>
);

export default FiltersSection;