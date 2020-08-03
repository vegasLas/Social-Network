import { FieldValidatorType } from '../../utils/validators';
import React from 'react'
import classes from './FormControl.module.css'
import { Field, WrappedFieldProps } from 'redux-form'
import {  } from '../../utils/validators'


const FormControl: React.FC<WrappedFieldProps> = ({  meta: { touched, error }, children }) => {
    const hasError = touched && error
    return (
        <div className={classes.formControl + " " + (hasError ? classes.error : "")}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const TextArea: React.FC<WrappedFieldProps> = (props) => {
    //const { input, meta, child, ...restProps } = props;
    const { input, meta, ...restProps } = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}
export const input: React.FC<WrappedFieldProps> = (props) => {
    //const { input, meta, child, ...restProps } = props;
    const { input, meta, ...restProps } = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}

type NameType = {
    email: string
    password: string
    rememberMe: boolean
}


export function createField<KeyType extends string>(placeHolder: string | undefined, name: KeyType, validators: Array<FieldValidatorType>, component:React.FC<WrappedFieldProps>, props = {}, text = "")    {
   return <div>
        <Field 
        placeholder = {placeHolder} 
        name = {name}
        validate = {validators}
        component = {component}
        {...props} /> {text}
    </div>
}