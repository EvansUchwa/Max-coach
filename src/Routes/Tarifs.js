import { Reveal } from 'react-reveal';
import '../Assets/styles/tarif.css';
import { WhatsappLinks } from '../GlobalComponents/Button';

import { OtherPageBanner, OtherPageTitle } from "../GlobalComponents/Other"

const Tarifs = () => {
    const tarif = [
        {
            icon: "mdi-account-settings-outline", title: "Standard",
            specialitys: [
                "Cours Collectifs", "Self defense", "Exercice physique", "Initiation au taekwondo"
            ],
            inscription: "10 000 cfa",
            price: "10 000",
            time: "mois"
        },
        {
            icon: "mdi-account-tie-outline", title: "Prenium",
            specialitys: [
                "Cours personnel", "Self defense (accentué)", "Exercice physique (accentué)", "Initiation au taekwondo (accentué)"
            ],
            inscription: "gratuite",
            price: "10 000",
            time: "séance"
        }
    ]
    return <div className="tarifs">
        <OtherPageBanner props={{ title: "Tarifs" }} />

        <OtherPageTitle props={{ title: "Rejoignez nos cours de Taekwondo et de self-defense" }} />

        <section className='tarifs-liste'>
            {
                tarif.map((tarif, index) => <div key={"tarif nb" + index}>
                    <Reveal cascade top>
                        <i className={'mdi ' + tarif.icon}></i>
                        <b>{tarif.title}</b>

                        <p>
                            <b>Inscription :</b> {tarif.inscription}
                        </p>
                        {
                            tarif.specialitys.map((sp, ind) => <span key={ind + " speciality"}>
                                {sp}
                            </span>)
                        }
                        <p>
                            <b>{tarif.price} cfa</b>/{tarif.time}
                        </p>

                        <WhatsappLinks msg={",j'ai visisté votre site web et  La formule " + tarif.title + " de vos formation m'interesse ..."} />
                    </Reveal>
                </div>)
            }

        </section>
    </div>
}

export default Tarifs