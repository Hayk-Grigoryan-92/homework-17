import { InputForm } from './inputForm'
import { PageApply } from './pageApply'
import './style.scss'

export const FormPage = () => {

    return (
        <div className="formPage">
            <InputForm/>
            <PageApply/>
    </div>
    )
}