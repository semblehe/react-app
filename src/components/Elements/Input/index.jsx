import Input from "./Input.jsx";
import Label from "./Label.jsx";
import {forwardRef} from "react";

const InputForm = forwardRef((props,ref) => {
    const {label, name, type, placeholder} = props
    return (
        <div className="mt-4">
            <Label htmlFor={name}>{label}</Label>
            <div className="mt-1 mb-4">
                <Input type={type} name={name} placeholder={placeholder} id={name} ref={ref}/>
            </div>
        </div>)

})
export default InputForm