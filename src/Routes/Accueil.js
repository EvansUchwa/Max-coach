import '../Assets/styles/accueil.css';
import { HomeBanner, HomeOtherBanner, OurCoach, OurServices, WhyTaekwondo } from '../RouteSubComponents.js/accueil';

const Accueil = () => {
    return <div className="accueil">
        <HomeBanner />
        <WhyTaekwondo />
        <OurServices />
        <HomeOtherBanner />
        <OurCoach />

        {/* Carrefour Tankpe ET Cadjehoun */}
    </div>
}

export default Accueil;