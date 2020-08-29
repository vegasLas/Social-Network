import React from 'react';
import { Formik, Form, Field } from 'formik';
import { FilterType } from '../../redux/usersReducer';
import classes from './users.module.scss';

type ValidateType = {
    values: any
    email: string
}

const UsersSearchFormVAlidate = (values: any) => {
    const errors = {};
    return errors;
}


type PropsType = {
    onFilterChange: (filter: FilterType) => void
}
type FormData = {
    term: string
    friend: 'null' | 'true' | 'false'
}
const UsersSearchForm: React.FC<PropsType> = React.memo((props) => {
    const submit = (values: FormData, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
        const filter: FilterType = {
            term: values.term,
            friend: values.friend === 'null' ? null : values.friend === 'true' ? true : false

        }
        props.onFilterChange(filter)
        setSubmitting(false)
    }

    return <div>
        <Formik className={classes.Formik}
            initialValues={{ term: '', friend: 'null' }}
            validate={UsersSearchFormVAlidate}
            onSubmit={submit}>
            {({ isSubmitting }) => (
                <Form className={classes.Formik}>
                    <i className={classes.inputLogo}>dsadsadsdsa</i>
                    <Field placeholder='Find user' className={classes.formField} type="text" name="term" />
                    <Field name="friend" as="select" placeholder="Favorite Color">
                        <option value="null">All</option>
                        <option value="true">Only followed</option>
                        <option value="false">Only unfollowed</option>
                    </Field>
                    <button type="submit" disabled={isSubmitting}>
                        find
                    </button>
                </Form>
            )}
        </Formik>
    </div>
});

export default UsersSearchForm;