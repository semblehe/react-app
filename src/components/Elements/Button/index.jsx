const ButtonFunc = (props) => {
    const {children = "Text..", classname = "bg-black", textcolor = "white"} = props;
    return (<button className={`h-10 px-6 font-semibold rounded-md ${classname} text-${textcolor}`} type="submit">
        {children}
    </button>)
}

export default ButtonFunc