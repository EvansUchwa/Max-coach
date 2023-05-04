import { Fade } from "react-reveal"

export const OtherPageBanner = ({ props }) => {
    const { title } = props
    return <div className="otherPageBanner">
        <h1>{title}</h1>
    </div>
}

export const OtherPageTitle = ({ props }) => {
    const { title } = props
    return <Fade top>
        <h2 className='accueil-title-2'>{title}</h2>
    </Fade>
}