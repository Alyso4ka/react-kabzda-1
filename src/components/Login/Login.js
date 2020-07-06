import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";

const LoginForm = (props) => {
    return (
    <form onSubmit={props.handleSubmit}>
<div>
    <Field
        validate={[required]}
        placeholder={'login'}
        component={Input}
        name={'login'}

    />
</div>
<div>
    <Field validate={[required]} placeholder={'password'} component={Input} name={'password'}/>
</div>
<div>
    <Field type={'checkbox'} component={Input} name={'remember me'}/> remember me
</div>
<div>
    <button>login</button>
</div>
    </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)


const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default Login;
