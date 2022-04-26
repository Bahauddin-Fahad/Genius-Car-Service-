import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import Reload from "../../Shared/Reload/Reload";

const Register = () => {
  const navigate = useNavigate();
  const [agree, setAgree] = useState(false);
  const [createUserWithEmailAndPassword, user, loading] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating /*updateError*/] = useUpdateProfile(auth);

  const handleRegister = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const pass = e.target.password.value;
    // const agree = e.target.terms.checked;
    await createUserWithEmailAndPassword(email, pass);
    await updateProfile({ displayName: name });
    navigate("/home");
  };

  if (user) {
    //  navigate("/home");
    console.log(user);
  }

  if (loading || updating) {
    return <Reload />;
  }

  return (
    <div>
      <h2 className="text-center m-3 font-mono font-bold">Register Form</h2>
      <Form
        onSubmit={handleRegister}
        className="mx-auto w-96 border-2 p-4 rounded-md"
      >
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter your Name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            onClick={() => setAgree(!agree)}
            className={agree ? " text-green-700" : " text-gray-400"}
            type="checkbox"
            name="terms"
            label="Accept Terms and Conditions"
          />
        </Form.Group>
        <Button
          id="create-account"
          variant="dark"
          type="submit"
          disabled={!agree}
        >
          Create Account
        </Button>
        <p>
          Already have an Account?
          <Link className="ml-2 decoration-transparent" to="/login">
            Log In Here
          </Link>
        </p>
        <SocialLogin />
      </Form>
    </div>
  );
};

export default Register;
