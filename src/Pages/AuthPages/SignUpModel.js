import React, { useState } from 'react';
import { Modal, Button, Form, Spinner, Alert } from 'react-bootstrap';
import { auth, db } from '../../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import './../../assets/css/signup.css';
import image from './../../assets/images/signup.avif';

const SignupModal = ({ show, handleClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    mobileNumber: '',
    countryCode: '+971', // Default for UAE
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = 'Username is required';
    if (!formData.email) formErrors.email = 'Email is required';
    if (!formData.password) formErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword)
      formErrors.confirmPassword = 'Passwords do not match';
    if (formData.countryCode === '+971' && formData.mobileNumber.length !== 9)
      formErrors.mobileNumber = 'UAE mobile numbers must be 9 digits';
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      setErrorMessage(null);
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          formData.email,
          formData.password
        );
        const user = userCredential.user;

        await setDoc(doc(db, 'users', user.uid), {
          name: formData.name,
          email: formData.email,
          phonenumber: formData.mobileNumber,
          countrycode: `+971`,
          password: formData.password,
          Orders_Count: '00',
          Referralcode: '',
          Wishlist_Count: '00',
          cart_Count: '00',
          confirmpassword: formData.confirmPassword,
          imgurl: 'default-profile-url',
          id: user.uid,
        });

        console.log('User registered and data saved to Firestore');
        handleClose();
      } catch (error) {
        console.error('Error creating account:', error.message);
        setErrorMessage(error.message);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <Modal show={show} onHide={() => {}} centered>
      <div className="modal-content signup-modal">
        <div className="modal-body d-flex">
          <div className="image-section">
            <img src={image} alt="Signup" />
          </div>
          <div className="form-section">
            <button className="close-button" onClick={handleClose}>&times;</button>
            <h2 className="text-center mb-4">Sign Up</h2>
            {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formUsername" className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  isInvalid={!!errors.name}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.name}
                </Form.Control.Feedback>
              </Form.Group>

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
                <Form.Control
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  isInvalid={!!errors.password}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formConfirmPassword" className="mb-3">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  isInvalid={!!errors.confirmPassword}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.confirmPassword}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formMobileNumber" className="mb-3">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                  type="text"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  isInvalid={!!errors.mobileNumber}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.mobileNumber}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formCountryCode" className="mb-4">
                <Form.Label>Country Code</Form.Label>
                <Form.Control as="select" value={formData.countryCode} onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}>
                  <option value="+971">+971 (UAE)</option>
                </Form.Control>
              </Form.Group>

              <Button type="submit" variant="outline-success" className="w-100" disabled={loading}>
                {loading ? <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /> : 'Sign Up'}
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default SignupModal;
