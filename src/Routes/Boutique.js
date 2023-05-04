import { OtherPageBanner } from '../GlobalComponents/Other';
import { OurProducts } from '../RouteSubComponents.js/boutique';


const Boutique = () => {
    return <div className='boutique'>
        <OtherPageBanner props={{ title: "Boutique" }} />
        <OurProducts />
    </div>
}

export default Boutique;