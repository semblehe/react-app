const ButtonFunc = (props) => {
    const {children = "Text..", classname = "bg-black", textcolor = "white",onClick = () => {},type="button"} = props;
    return (<button className={`h-10 px-6 font-semibold rounded-md ${classname} text-${textcolor}`} type={type}
    onClick={ () => onClick() }
    >
        {children}
    </button>)
}

export default ButtonFunc