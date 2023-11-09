import Input from "./Input.jsx";
import Label from "./Label.jsx";

const InputForm = (props) => {
    const {label, name, type, placeholder} = props
    return (
        <div className="mt-4">
            <Label htmlFor={name}>{label}</Label>
            <div className="mt-1 mb-4">
                <Input type={type} name={name} placeholder={placeholder} id={name}/>
            </div>
        </div>)

}
export default InputForm