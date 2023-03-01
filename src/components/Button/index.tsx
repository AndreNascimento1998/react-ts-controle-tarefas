function Button(props : 
    {style?: Object, nome: string, type?: "button" | "submit" | "reset", onClick?: () => void}) {
    const stylesDefault = { backgroundColor: 'red', color: 'black'};
    const {style} = props;
    return (
        <button onClick={props.onClick} type={props.type} className="btn mb-3" style={style || stylesDefault}>{props.nome}</button>
    )

}

export default Button;