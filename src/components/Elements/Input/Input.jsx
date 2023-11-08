const Input = (props) => {
    const {type,placeholder,name} = props;
    return (
        <input type={type} name={name} id="username" placeholder={placeholder}
               className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-slate-300 rounded-md p-2"/>
    )
}
export default Input