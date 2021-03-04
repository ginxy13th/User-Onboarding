import React, {useState, useEffect} from 'react';
import './App.css';
import User from './User.js';
import Form from './Form.js';
import axios from 'axios';
import * as yup from 'yup';
import schema from './schema';

const initialFormValues = {
  name: '',
  email:'',
  password:'',
  termsOfService: {
    accept: false,
    decline: false,
  },
}

const initialFormErrors = {
  name:'',
  email:'',
  password:'',
}

const initialUsers = []
const initialDisabled = true

function App() {
  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  // const getUsers = () => {
  //   axios.get('http://localhost:3000/users')
  //   .then(response => {
  //     setUsers(response.data)
  //   })
  //   .catch(error => {
  //     console.log('error:', error)
  //   })
  // }

  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users/', newUser)
    
    .then(response => {
      console.log(response)
      setUsers([response.data, ...users])
      setFormValues(initialFormValues)
    })
    .catch(error => {
      console.log('error:', error)
    })
  }

  const inputChange = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: '',
        })
      })
      .catch(error => {
        setFormErrors({
          ...formErrors,
          [name]: error.errors[0],
        })
      })
      setFormValues({
        ...formValues,
        [name]: value
      })
  }

  const checkChange = (name, isChecked) => {
    setFormValues({
      ...formValues,
      termsOfService: {
        ...formValues.termsOfService,
        [name]: isChecked,
      }
    })
  }

  const submit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      termsOfService: Object.keys(formValues.termsOfService).filter(hb => formValues.termsOfService[hb]),
    }
    postNewUser(newUser)
  }

  useEffect(() => {
    // getUsers()
  }, [])

  useEffect(() => {
    schema.isValid(formValues).then(valid => {
      console.log(valid)
      setDisabled(!valid)
    })
  }, [formValues])

  // console.log(formErrors);
    console.log(formValues)

  return (
    <div className="App">
     <header>
       <h1>Users</h1>
     </header> 
     <Form
     values={formValues}
     inputChange={inputChange}
     checkChange={checkChange}
     submit={submit}
     disabled={disabled}
     errors={formErrors}
     />

    {
      users.map(user => {
        return (
          <User
          key={user.id}
          details={user}
          />
        )
      })
    }
     
    </div>
  );
}

export default App;
