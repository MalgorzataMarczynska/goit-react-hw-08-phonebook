import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { EmailIcon, ViewOffIcon } from '@chakra-ui/icons';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>Username</label>
      <input className={css.input} type="text" name="name" />

      <label className={css.label}>
        <EmailIcon boxSize={4} mr={2} />
        Email
      </label>
      <input className={css.input} type="email" name="email" />

      <label className={css.label}>
        <ViewOffIcon boxSize={4} mr={2} />
        Password
      </label>
      <input className={css.input} type="password" name="password" />

      <button className={css.button} type="submit">
        Register
      </button>
    </form>
  );
};
