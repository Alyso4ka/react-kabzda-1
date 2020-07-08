import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import Redirect from "react-router-dom/es/Redirect";


const LoginForm = (props) => {
    return (
    <form onSubmit={props.handleSubmit}>
<div>
    <Field
        validate={[required]}
        placeholder={'Email'}
        component={Input}
        name={'email'}

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
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
 const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
 })


 export default connect (mapStateToProps, {login})(Login);
