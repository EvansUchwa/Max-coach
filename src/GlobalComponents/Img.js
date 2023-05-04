

export const SimpleImage = ({ props }) => {
    const { src, alt } = props;
    return <img alt={alt}
        src={require('../Assets/images/' + src)} />
}


// export const ProductImage = ({ props }) => {
//     const { src, alt } = props;
//     return <img alt={alt}
//         src={require('../Assets/images/produits/' + src).default} />
// }

export const UrlImage = ({ props }) => {
    const { src, alt, rounded, className, id } = props;
    return <img alt={alt} className={className + ' ' + ((rounded) ? 'rounded' : '')}
        src={src} id={id} />
}