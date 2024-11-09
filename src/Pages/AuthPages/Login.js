import React, { useState } from 'react';
import { Modal, Button, Form, Spinner, Alert } from 'react-bootstrap';
import { auth, db } from '../../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import './../../assets/css/signup.css';
import image from './../../assets/images/signup.avif';
import {useNavigate} from "react-router-dom";

const LoginModal = ({ loginshow, handleLoginClose }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errorAlert, setErrorAlert] = useState('');
  const Navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.email) formErrors.email = 'Email is required';
    if (!formData.password) formErrors.password = 'Password is required';
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorAlert('');

    if (validateForm()) {
      setLoading(true);
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          formData.email,
          formData.password
        );

        const user = userCredential.user;
        const userDocRef = doc(db, 'users', user.uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          console.log('User logged in:', userDoc.data());
          localStorage.setItem('userEmail',formData.email);
          Navigate('/dashboard');
          handleLoginClose();
        } else {
          setErrorAlert('User data does not exist in the database.');
        }
      } catch (error) {
        setErrorAlert('Invalid email or password.');
        console.error('Login error:', error.message);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <Modal show={loginshow} onHide={() => {}} centered>
      <div className="modal-content signup-modal">
        <div className="modal-body d-flex">
          <div className="image-section">
            <img src={image} alt="Signup" />
          </div>
          <div className="form-section">
            <button className="close-button" onClick={handleLoginClose}>&times;</button>
            <h2 className="text-center mb-4">Login Here</h2>
            {errorAlert && <Alert variant="danger">{errorAlert}</Alert>}

            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formPassword" className="mb-3">
                <Form.Label>Password</Form.Label>
                <div className="password-field">
                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    isInvalid={!!errors.password}
                  />
                  <Button
                    variant="link"
                    onClick={() => setShowPassword(!showPassword)}
                    className="show-password-toggle"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </Button>
                </div>
                <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
              </Form.Group>

              <Button
                type="submit"
                variant="success"
                className="w-100"
                disabled={loading} // Disable button when loading
              >
                {loading ? (
                  <Spinner animation="border" size="sm" role="status" aria-hidden="true" />
                ) : (
                  "Login"
                )}
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default LoginModal;
