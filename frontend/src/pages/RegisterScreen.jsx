import React, { useEffect, useState } from 'react';
import {useNavigate,Link} from 'react-router-dom'
import api from '../components/api';

function RegisterScreen() {
  const nav = useNavigate()
  const [spa,setsap]=useState(10)
  const [register,setRegister]=useState("")
  const [values, setValues] = useState({
    name: "",
    password: "",
    confirmPassword: "",
    email: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);
  const [errors, setErrors] = useState({});
  async function setData()
  {
    try{
      const result=await api.post('/login',values)
      console.log(result.data.state)
      if(result.data.state=='logged in')
        {
          nav('/')
          localStorage.setItem('number',0)
          sessionStorage.setItem("userid",result.data.id)
          sessionStorage.setItem("name",result.data.name)
        }
        else
        {
          setErrors("Wrong Credentails!!")
        }
  }
  catch(error)
  {
    console.log(error)
  }
  }
  useEffect(()=>{
    if(register)
    {
      setData()
      nav('/')
    }
  },[register])
  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setValues((values) => ({
      ...values,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();
    setSubmitted(true);
    if(valid){
      api.post('/register',values)
      .then(result => {
      setRegister(result)
      const login = {email:values.email,password:values.password}
        const reply=ourApi.post('/login',login).then(result=>{
          if(result.data.reply==true)
          {
            sessionStorage.setItem('userid',result.data.id)
            sessionStorage.setItem('name',result.data.name)
            nav('/')
          }
        })
    })
      .catch(err => console.log(err))
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Please enter a first name';
    }
    if (!values.email) {
      errors.email = 'Please enter an email address';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!values.password) {
      errors.password = 'Please enter a password';
    } else if (values.password.length < 8) {
      errors.password = 'Password must be at least 8 characters long';
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = 'Please confirm your password';
    } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    setErrors(errors);
    setValid(Object.keys(errors).length === 0);
  };

  return (
    <div className="flex justify-between  form-container w-screen h-screen  bg-[#FDE4CE]">
      <form className="register-form grid content-center justify-items-center p-10 mx-auto bg-white" onSubmit={handleSubmit}>
      <Link to="/">
      <img src='/logo.svg' className='max-w-sm'/>
      </Link>
      <div className='flex justify-between gap-10'>
        <Link to="/login"><h1 className='text-xl font-extrabold text-blue-900'>LOGIN</h1></Link>
        <h1 className='text-xl font-extrabold text-blue-900 underline underline-offset-8'>REGISTER</h1>
      </div>
        <input
          className="form-field field"
          type="text"
          placeholder="First Name"
          name="name"
          value={values.name}
          onChange={handleInputChange}
        />
        {submitted && errors.name && (
          <span className="error-message">{errors.name}</span>
        )}

        <input
          className="form-field field"
          type="email"
          placeholder="Email"
          name="email"
          value={values.email}
          onChange={handleInputChange}
        />
        {submitted && errors.email && (
          <span className="error-message">{errors.email}</span>
        )}

        <input
          className="form-field field"
          type="password"
          placeholder="Password"
          name="password"
          value={values.password}
          onChange={handleInputChange}
        />
        {submitted && errors.password && (
          <span className="error-message">{errors.password}</span>
        )}

        <input
          className="form-field field "
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          value={values.confirmPassword}
          onChange={handleInputChange}
        />
        {submitted && errors.confirmPassword && (
          <span className="error-message">{errors.confirmPassword}</span>
        )}

        <button className="form-field lrbtn" type="submit">
          Register
        </button>
        <Link to='/login'><p>Already have an account?</p></Link>
      </form>
    </div>
  );
}

export default RegisterScreen;