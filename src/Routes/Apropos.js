import { Reveal } from 'react-reveal';
import '../Assets/styles/apropos.css';
import { SimpleImage } from '../GlobalComponents/Img';

import { OtherPageBanner, OtherPageTitle } from "../GlobalComponents/Other"

const Apropos = () => {
    return <div className="about">
        <OtherPageBanner props={{ title: "A propos" }} />
        <OtherPageTitle props={{ title: "Qui est TOSSOU Minankpon Eric ?" }} />

        <section className='about-biographie_palmares_interviews'>
            <div className='abpi-biographie'>
                <Reveal left cascade>
                    <article>
                        <h3>Biographie</h3>
                        <p>
                            TOSSOU Eric Minankpon est un coach sportif personal trainer formé et qualifié pour vous aider à atteindre vos objectifs : améliorer votre physique, rééquilibrer votre alimentation (sans faire de régime) et surmonter votre stress. Il vous accompagne aussi dans votre préparation physique adaptée à tous les niveaux : débutant, amateur ou sportif de haut niveau Sa philosophie consiste à améliorer la santé et la vie des personnes. Outre l'activité physique et athlétique, le sport permet de se libérer du stress et des soucis quotidiens en renforçant d'abord son mental.
                            Il amène donc les personnes à reprendre confiance en eux pour mieux les aider à atteindre leurs objectifs.
                        </p>
                    </article>
                </Reveal>
                <Reveal right>
                    <article>
                        <SimpleImage props={{ src: "visuels/max32.JPG", alt: "A propos du coach" }} />
                    </article>
                </Reveal>
            </div>
            <div className='abpi-palmares'>
                <h3>Palmares</h3>
                <ul>
                    <Reveal bottom cascade>
                        <li>Entraineure de l'équipe National de TAEKWONDO Séniors et Juniors</li>
                        <li>Directeur de l'entreprise MINANKPON MARTIAL ARTS ET SPORTS</li>
                        <li>Encadreur dans les Grands centres de formations dans les Arts Martiaux : INAMA BENIN et OKINAWA-RYU</li>
                        <li>Assistant du Grand-Maitre Pierre OGOUDJOBI</li>
                    </Reveal>
                </ul>
            </div>
            <div className='about-interview'>
                <h3>Interviews</h3>
                <ul>
                    {
                        [0, 0, 0, 0].map((interview, index) => <li key={"Interview nb" + index}>
                            <video src={require('../Assets/videos/v' + (index + 1) + '.mp4')} controls>
                            </video>
                        </li>)
                    }
                </ul>
            </div>


        </section>
    </div>
}

export default Apropos