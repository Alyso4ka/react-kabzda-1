import React from 'react';
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    return (
    <form onSubmit={props.handleSubmit}>
<div>
    <Field placeholder={'login'} component={'input'} name={'login'}/>
</div>
<div>
    <Field placeholder={'password'} component={'input'} name={'password'}/>
</div>
<div>
    <Field type={'checkbox'} component={'input'} name={'remember me'}/> remember me
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
