import { contactsUsInfos } from "../../Raw/contact"

export const Footer = () => {
    return <footer>
        <h1>2MAS </h1>
        <p>La plateforme 2MAS Far far away,<br /> behind the word mountains,
            far from the countries Vokalia and Consonantia,<br /> there live the blind texts.</p>
        <section className="foot-phones">
            <a href={"https://wa.me/00229" + contactsUsInfos.tel1.replaceAll(' ', '')}
                target="_blank">
                +229 {contactsUsInfos.tel1}
            </a>
            <span>/</span>
            <a href={"https://wa.me/00229" + contactsUsInfos.tel2.replaceAll(' ', '')}
                target="_blank">
                +229 {contactsUsInfos.tel2}
            </a>

        </section>
        <section className="foot-phones">
            <a href={"mailto:" + contactsUsInfos.mail + "?subject=Taekwondo Formation&body=Bonjour Monsieur Eric ...."}>
                {contactsUsInfos.mail}
            </a>
        </section>
        <section className="foot-socials">
            <a href=""> <i className="mdi mdi-facebook"></i> </a>
            <a href=""> <i className="mdi mdi-whatsapp"></i> </a>
            <a href=""> <i className="mdi mdi-instagram"></i> </a>
            <a href=""> <i className="mdi mdi-linkedin"></i> </a>
        </section>
    </footer>
}