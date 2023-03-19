import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import css from './Register.module.css';
const Register = () => {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Registration</h2>
      <RegisterForm />
    </div>
  );
};
export default Register;
