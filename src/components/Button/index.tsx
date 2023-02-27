function Button(props: any) {
    const style = { backgroundColor: 'red', color: 'black'}

    return (
        <button className="btn mb-3" style={props.style || style}>{props.nome}</button>
    )

}

export default Button;