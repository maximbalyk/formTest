/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const renderError = (errorMessage: {} | null | undefined) => (
  <span className="errorMessage">{errorMessage}</span>
);

export const App: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [login, setLogin] = useState('');
  const [hidePassword, setHidePassword] = useState(true);

  const emailValidator = (clientEmail: string) => {
    const re = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

    return re.test(clientEmail);
  };

  const confirmPasswordValidate = (pass: string, confirmPass: string) => {
    return pass === confirmPass && pass.length !== 0;
  };

  const resetInput = () => {
    setLogin('');
    setEmail('');
    setPassword('');
    setPasswordConfirm('');
  };

  const loginMaxLength = 24;
  const passwordMaxLength = 24;
  const isEmailValid = emailValidator(email);
  const isPasswordValid = password.length >= 6;
  const isConfirmValid = confirmPasswordValidate(password, passwordConfirm);

  // eslint-disable-next-line no-useless-concat
  const alertMessage = `login : ${login} \nemail : ${email} \npassword : ${password}`;

  return (
    <div className="App">
      <header className="header">
        <h1 className="header__title">Sign Up with email</h1>
      </header>

      <form
        method="post"
        className="form"
        onSubmit={(event) => {
          event.preventDefault();
          if (isEmailValid && isPasswordValid && isConfirmValid) {
            // eslint-disable-next-line no-alert
            alert(alertMessage);
            resetInput();
          }
        }}
      >

        <div className="form__input">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Login
            <input
              value={login}
              type="text"
              className="form-control"
              placeholder="Create login"
              maxLength={loginMaxLength}
              onChange={e => setLogin(e.target.value)}
              required
            />
          </label>
        </div>

        <div className="form__input">
          <label htmlFor="exampleInputEmail1" className="form-label">
            E-mail
            <input
              value={email}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="johnsmith@mail.com"
              maxLength={25}
              onChange={e => setEmail(e.target.value)}
              required
            />
            {!isEmailValid && email.length !== 0 ? renderError('Email not valid') : null}
          </label>
        </div>

        <div className="form__input">
          <label htmlFor="inputPassword" className="form-label">
            Create Password
            <input
              value={password}
              type={hidePassword ? 'password' : 'text'}
              name="password"
              className="form-control"
              id="inputPassword"
              maxLength={passwordMaxLength}
              onChange={e => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="form__button--showPassword"
              onClick={() => setHidePassword(!hidePassword)}
            >
              <img src="./eye.svg" alt="showPassword" />
            </button>
            {!isPasswordValid && password.length !== 0 ? renderError('Password not valid. Min length 6 symbol') : null}
          </label>
        </div>

        <div className="form__input">
          <label htmlFor="inputConfirm" className="form-label">
            Confirm Password
            <input
              value={passwordConfirm}
              type={hidePassword ? 'password' : 'text'}
              className="form-control"
              id="inputConfirm"
              maxLength={passwordMaxLength}
              onChange={e => setPasswordConfirm(e.target.value)}
              required
            />
            <button
              type="button"
              className="form__button--showPassword"
              onClick={() => setHidePassword(!hidePassword)}
            >
              <img src="./eye.svg" alt="showPassword" />
            </button>
            {(!isConfirmValid && password.length !== 0)
            || password.length !== passwordConfirm.length
              ? renderError('Confirm password not valid') : null}
          </label>
        </div>

        <button
          type="submit"
          className={isEmailValid && isPasswordValid && isConfirmValid
            ? 'form__button--singUp'
            : 'form__button--singUp form__button--singUp--nonActive'}
        >
          Submit
        </button>
      </form>

    </div>
  );
};
