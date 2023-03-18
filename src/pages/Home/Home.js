import css from './Home.module.css';
const Home = () => {
  return (
    <div style={css.container}>
      <h1 style={css.title}>
        Contact manager welcome page{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </h1>
    </div>
  );
};
export default Home;
