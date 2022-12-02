import React, { useState } from "react";
import axios from 'axios';
import s from './Register.module.css';
import { NavLink, useNavigate } from "react-router-dom";
import ReactDropdown from "react-dropdown";
import { Dropdown,Modal, Button } from "react-bootstrap";

const GENDER_INFO = {
  1: 'Male',
  2: 'Female'
}

const Register = props => {

  const navigation = useNavigate();

  const [error, setError] = useState(false);
  const [gender, setGender] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [showModal, setModal] = useState(false);

  const doRegister = e => {
    e.preventDefault();
    if (!gender) {
      setError(true);
      setErrorMessage('Please fill all fields')
      return;
    }

    axios.post('user/register',
      {
        "userid": document.getElementById("username").value,
        "password": document.getElementById("password").value,
        "fullname": document.getElementById('fullname').value,
        "email": document.getElementById('email').value,
        "mobilenumber": document.getElementById('mobile').value,
        "gender": gender,
        "address": document.getElementById('address').value,
      })
      .then(resp => {
        
        const res = resp.data.response
        if (resp.data.status === 200 && res === 'user created') {
          setError(false);
          setModal(true);
        }

        // if (token) {
        //   setError(false)
        //   localStorage.setItem("token", token)
        //   navigation('/')
        // }
      })
      .catch(err => {
        console.log(err)
        setError(true)
      })
  }

  const onToggle = e => {
    setGender(e);
  }

  const Successmodal = () => {
    return (
      <Modal
        show={true}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <h4>User Created Successfully</h4>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => {
              setModal(false);
              navigation('/user/login')
            }}
            style={{ color: '#0076ff !important'}}
          >
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }

  return (
    <div className={s.root}>
      <div className={s.registerpage}>
        <div className={s.form}>
          <form className={s.loginForm} onSubmit={doRegister}>
            <img src="/images/logo.jpg" alt="logo" style={{ width: 180, marginBottom: 32 }} />
            <div style={{ display: 'flex', alignitems: 'center', columnGap: '16px' }}>
              <input type="text" placeholder="username" id="username" required />
              <input type="password" placeholder="password" id="password" required />
            </div>
            <div style={{ display: 'flex', alignitems: 'center', columnGap: '16px' }}>
              <input type="text" placeholder="fullname" id="fullname" required />
              <input type="email" placeholder="email" id="email" required />
            </div>
            <div style={{ display: 'flex', alignitems: 'center', columnGap: '16px' }}>
              <input style={{ flex: '0.9' }} type="number" placeholder="Enter mobile number..." id="mobile" required />
              <div style={{ flex: 1 }}>
                <Dropdown onSelect={onToggle} defaultValue={gender}>
                  <Dropdown.Toggle className="dropbutton" id="dropdown-basic">
                    {!gender ? 'Select Gender' : GENDER_INFO[gender]}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item eventKey={1}>Male</Dropdown.Item>
                    <Dropdown.Item eventKey={2}>Female</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
            <textarea id="address" placeholder="Enter address" required>

            </textarea>
            <button>Create Account</button>
            {error && <p className={s.error}>Please fill all fields</p>}
            <span>Already have an account ? <NavLink to="/user/login">Signin</NavLink></span>
          </form>
        </div>
      </div>
      {showModal && <Successmodal />}
    </div>

  );
}

export default Register;