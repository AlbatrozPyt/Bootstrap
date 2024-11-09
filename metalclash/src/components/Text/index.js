export const TitleForm = props => {
    return <h1 className="w-100 mb-3 text-center">{props.children}</h1>;
}

export const Link = props => {
    return <a href={props.to} className="link-underline-primary m-3">{props.children}</a>;
}