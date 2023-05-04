

export const WhatsappLinks = ({ msg }) => {
    const text = msg ? msg : ''
    return <a href={"https://wa.me/0022966300927?text=Bonjour Monsieur Eric" + text} target={"_blank"}>Contactez nous</a>
}