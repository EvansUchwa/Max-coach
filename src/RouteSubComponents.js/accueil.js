import { Fade, Reveal } from "react-reveal"
import { Link } from "react-router-dom"
import { WhatsappLinks } from "../GlobalComponents/Button"
import { SimpleImage } from "../GlobalComponents/Img"

export const HomeBanner = () => {
    return <div className='accueil-banner'>
        <section className='ab-text'>
            {/* TOSSOU */}
            <h1>
                <Fade top cascade>
                    Minankpon Martial Arts et Sports
                </Fade>
            </h1>

            <h3>
                <Fade cascade bottom>
                    Rejoignez nos cours de taekwondo et de selfdefense
                </Fade>
            </h3>
            <Fade bottom delay={300}>
                <WhatsappLinks msg={",j'ai vu votre site web,et j'aimerai en savoir plus sur vos formations..."} />
            </Fade>
        </section>
    </div>
}
export const WhyTaekwondo = () => {
    const whyTakwondoArray = [
        { icon: "mdi-heart-pulse", title: "Santé", text: "" },
        { icon: "mdi-head-check-outline", title: "Discipline", text: "" },
        { icon: "mdi-yoga", title: "Relaxation", text: "" },
        { icon: "mdi-kabaddi", title: "Self defense", text: "" },

    ]
    return <div className='accueil-whyTaekwondo'>
        <section className='aw-reason'>
            <h2 className='accueil-title'>Pourquoi apprendre le taekwndo</h2>
            <p>Enfant ,adulte ou meme vieux,le taekwondo vous aidera a ...</p>

            <section>
                <Fade left>
                    {
                        whyTakwondoArray.map((wt, index) => <div key={"why yaek" + index}>
                            <i className={'mdi ' + wt.icon}></i>
                            <b>{wt.title}  </b>
                            <p>
                                We have a wide choice of classes that are a great complement to any training programme.
                            </p>
                        </div>)
                    }
                </Fade>
            </section>
        </section>


        <Fade right delay={250}>
            <section className='aw-img'>
                <SimpleImage props={{ src: "visuels/why.JPG", alt: 'text alternatif', className: "" }} />
            </section>
        </Fade>

    </div>
}

export const OurServices = () => {
    const servArray = [
        {
            title: "Developpement personnel et sportif", icon: "mdi-trending-up",
            text: "Développer des qualités personnelles telles que la coopération ou le fait de travailler avec les autres, la compétition ou encore le surpassement de soi , est une grande qualité qu'il faut avoir . ",
            textFull: "Développer des qualités personnelles telles que la coopération ou le fait de travailler avec les autres, la compétition ou encore le surpassement de soi , est une grande qualité qu'il faut avoir . L’objectif global est le sentiment de se réaliser pleinement, d’être bien en soi, de progresser vers les objectifs que l’on s’est soi-même fixé. En cela, le développement personnel est une démarche d’auto-construction où la personne prend en charge de façon volontaire son propre perfectionnement .Je vous accompagne donc dans cette vision pour un résultat bien défini ."
        },
        {
            title: "Gestion de competition sportives", icon: "mdi-run-fast",
            textFull: "Le sport est un véritable événement fédérateur. Il met petits et grands au diapason, et il n’y a qu’à regarder l’engouement que rencontrent les tournois sportifs (de grand chelem ou en petit comité) pour s’en convaincre. Pour qu'un événement atteigne les objectifs et soit une réussite sur tous les plans, l’organisation doit être infaillible. Pour vous aider dans cet énorme travail qui demande du temps et de l’énergie, nous vous donnons tous les conseils nécessaires pour organiser un tournoi sportif ou une compétition.",
            text: "Le sport est un véritable événement fédérateur. Il met petits et grands au diapason, et il n’y a qu’à regarder l’engouement que rencontrent les tournois sportifs (de grand chelem ou en petit comité) pour s’en convaincre."
        },
        {
            title: "Ventes de materiaux sportifs", icon: "mdi-basket",
            text: "En matière de pratiques sportives, les besoins d’équipements adaptés sont multiples. Les pratiques des activités physiques et sportives des adolescents et des jeunes adultes dans un cadre collectif sont nombreuses.",
            textFull: "En matière de pratiques sportives, les besoins d’équipements adaptés sont multiples. Les pratiques des activités physiques et sportives des adolescents et des jeunes adultes dans un cadre collectif sont nombreuses. Il est donc primordial de s'équiper pour éviter les éventuelles blessures. Nous vous proposons donc des matériaux sportifs adaptés."
        }
    ]


    return <div className='accueil-ourServices'>

        <h2 className='accueil-title-2'>Nos services</h2>
        <section className='aos-services'>
            <Reveal cascade>
                {
                    servArray.map((os, index) => <div key={"why yaek" + index}>
                        <Fade left>
                            <i className={'mdi ' + os.icon}></i>
                        </Fade>
                        <Fade right>
                            <p>
                                <b>{os.title} </b>
                                <span>
                                    {os.text}
                                </span>
                                <u>Voir plus</u>
                            </p>
                        </Fade>

                    </div>)
                }
            </Reveal>
        </section>
        {/* <Moda */}
    </div>
}


export const OurCoach = () => {
    const coachs = [
        {
            name: "TOSSOU Eric", exp: "Coach Principal",
            description: "Coach proffesionel depuis 8 ans.",
            otherDescription: "Personal trainer formé et qualifié pour vous aider à atteindre vos objectifs : améliorer votre physique, rééquilibrer votre alimentation (sans faire de régime) et surmonter votre stress."
        },
        {
            name: "ASSOGBA Bignon Benoît Max", exp: "Assistant Coach",
            description: "Champion du Bénin,Ceinture Noire 4eme Dan",
            otherDescription: "Jeune initié assistant le coach ,il vous aide a atteindre vos objectifs : améliorer votre physique, rééquilibrer votre alimentation (sans faire de régime) et surmonter votre stress."

        },
        {
            name: "NATCHIMDJABO Bouama", exp: "Assistant Coach",
            description: "Champion du Bénin,Ceinture Noire 3eme Dan",
            otherDescription: "Jeune initiée assistant le coach ,elle vous aide a atteindre vos objectifs : améliorer votre physique, rééquilibrer votre alimentation (sans faire de régime) et surmonter votre stress."

        },


    ]
    return <div className="ourCoachs">

        <h2 className="accueil-title-2">Nos coachs</h2>
        <div className="oc-coachs">
            <Fade bottom>
                {
                    coachs.map((coach, index) => <section key={"coach nb" + index}>
                        <SimpleImage props={{ src: "visuels/coach" + (index + 1) + ".jpeg", alt: 'the coach' }} />
                        <b>{coach.name}</b>
                        <span>{coach.exp} </span>
                        <p>
                            {coach.description} <br />
                            {coach.otherDescription}
                        </p>
                        {/* <Link to="">Voir plus</Link> */}

                    </section>)
                }
            </Fade>
        </div>
    </div>
}





export const HomeOtherBanner = () => {
    return <div className="homeOtherBanner">
        <section>
            <h3>
                <q>
                    Connaître ne suffit pas. Il faut savoir appliquer. La volonté ne suffit pas. Il faut savoir agir.
                </q>
            </h3>
            <p>Bruce Lee.</p>
            <WhatsappLinks msg={",j'ai vu votre site web,et j'aimerai en savoir plus sur vos formations..."} />
        </section>
    </div>
}