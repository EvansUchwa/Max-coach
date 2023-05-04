import { SimpleImage } from "../GlobalComponents/Img"
import { Link } from "react-router-dom"
export const OurProducts = () => {
    const items = [
        { name: "Raquettes", src: "raquette.jpeg" },
        { name: "Dobok", src: "dobok.jpeg" },
        { name: "Protège (Avant-bras et Tibia) ", src: "protege.jpeg" },
        { name: "Plastron", src: "plastron.jpeg" },
        { name: "Corde à sauter", src: "corde.jpeg" },

    ]
    return <div className="ourProducts">

        <h2 className="accueil-title-2">Nos accessoires</h2>
        <section>
            {
                items.map((pr, index) => <div key={"coach product nb" + index}
                    className="opItem">
                    <SimpleImage props={{ src: "produits/" + pr.src, alt: 'the coach' }} />

                    <b>{pr.name}</b>
                    <span>1000 Fcfa</span>

                    <a href="">Je commande</a>
                </div>)
            }
        </section>
    </div>
}