import React, { Component } from 'react'
import classes from './FormControl.module.css'
import { Field } from 'redux-form'

const FormControl = ({ input, meta: { touched, error }, children }) => {
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

export const TextArea = (props) => {
    const { input, meta, child, ...restProps } = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}
export const input = (props) => {
    const { input, meta, child, ...restProps } = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}

export const createField = (placeHolder, name, validators, component, props = {}, text = "") => {
   return <div>
        <Field 
        placeholder = {placeHolder} 
        name = {name}
        validate = {validators}
        component = {component}
        {...props} /> {text}
    </div>
}