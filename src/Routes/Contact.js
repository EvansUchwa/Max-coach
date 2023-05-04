import { Reveal } from 'react-reveal';
import '../Assets/styles/contact.css';
import { OtherPageBanner, OtherPageTitle } from "../GlobalComponents/Other";
import { contactsUsInfos } from '../Raw/contact';

const Contact = () => {
    const contactArray = [
        {
            text: <p>{contactsUsInfos.localisation1},<br /> Ou
                {contactsUsInfos.localisation2},Bénin</p>,
            icon: "mdi-map"
        },
        {
            text: <>
                <p>
                    <b>Tel: </b>
                    <span>+229 {contactsUsInfos.tel1}/+229 {contactsUsInfos.tel2}</span>
                </p>
                <p>
                    <b>Mail: </b>
                    <span>{contactsUsInfos.mail}</span>
                </p>
            </>,
            icon: "mdi-gmail"
        },
        {
            text: <>
                <p>
                    <b>Jour de semaine: </b>
                    <span>08 h 00 a 19h 00</span>
                </p>
                <p>
                    <b>Weekend: </b>
                    <span>08 h 00 a 15 h 00</span>
                </p>
            </>,
            icon: "mdi-clock"
        }
    ]
    return <div className="contact">
        <OtherPageBanner props={{ title: "Contact" }} />

        <OtherPageTitle props={{ title: "Laissez moi un message" }} />

        <section className='contact-infos'>
            <Reveal bottom cascade>
                {
                    contactArray.map((ca, index) => <div key={"contact info" + index}>
                        <span>
                            <i className={"mdi " + ca.icon}></i>
                        </span>
                        <div>
                            {ca.text}
                        </div>
                    </div>)
                }
            </Reveal>
        </section>


        <div className="contact-formAndInfos">
            <section className="cf-form">

                <form>
                    <Reveal bottom cascade>
                        <div className="formSegment">
                            <label>Nom et prenom</label>
                            <input type="text" placeholder="Nom Prenom" />
                        </div>

                        <div className="formSegment">
                            <label>Email</label>
                            <input type="text" placeholder="Email" />
                        </div>

                        <div className="formSegment">
                            <label>Text area</label>
                            <textarea></textarea>
                        </div>
                        <div className='formBtn'>
                            <button>Envoyez</button>
                        </div>
                    </Reveal>
                </form>

            </section>


        </div>

        <h2 className="accueil-title-2">Ou me trouver ?</h2>

        <div className='contact-maps'>
            <section>
                <iframe id="gmap_canvas"
                    src="https://maps.google.com/maps?q=Cotonou&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    frameBorder="0" scrolling="no"></iframe>
            </section>
            <p>Ou</p>
            <section>
                <iframe id="gmap_canvas"
                    src="https://maps.google.com/maps?q=Cotonou&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    frameBorder="0" scrolling="no"></iframe>
            </section>
        </div>

    </div>
}

export default Contact;