import React from 'react';

export default function Form(props){
const {
    values,
    submit,
    inputChange,
    checkChange,
    disabled,
    errors,
} = props

const onSubmit = evt => {
    evt.preventDefault()
    submit()
}

const onCheckChange = evt => {
    const {name, checked} = evt.target
    checkChange(name, checked)
}

const onInputChange = evt => {
    const { name, value} = evt.target
    inputChange(name, value)
}

return (
    <form className='form container' onSubmit={onSubmit}>
        <div className='form submit'>
            <h2>Add An User</h2>
            <button disabled={disabled} className='submitButton'>Submit</button>
            <div className='errors'>
            <div>{errors.name}</div>
            <div>{errors.email}</div>
            <div>{errors.password}</div>
            </div>
        </div>
        <div className='inputs'>
            <label>Name&nbsp;
                <input
                value={values.name}
                onChange={onInputChange}
                name='name'
                type='text'
                />
            </label>
            <label>Email
                <input
                value={values.email}
                onChange={onInputChange}
                name='email'
                type='text'
                />
            </label>
            <label>Password
                <input
                value={values.password}
                onChange={onInputChange}
                name='password'
                type='text'
                />
            </label>
        </div>
        <div className='checks'>
            <h4>Terms Of Service</h4>
            <label>This is My Jam!!!
                <input
                type='checkbox'
                name='accept'
                checked={values.termsOfService.accept === true}
                onChange={onCheckChange}
                />
            </label>
            <label>Cash Me Outside, How Bout Dat?
                <input
                type='checkbox'
                name='decline'
                checked={values.termsOfService.decline === true}
                onChange={onCheckChange}
                />
            </label>
        </div>
    </form>
)

}