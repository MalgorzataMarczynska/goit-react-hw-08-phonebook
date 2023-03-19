import css from './Home.module.css';
const Home = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>
        Welcome in Phonebook - online contacts manager{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </h1>
      <div>
        <p className={css.text}>
          Welcome! We are giving you a tool that will allow you to access your
          contacts on any device. How often and how you will use it is of course
          up to you, but we have some advice and tips:
        </p>
        <p className={css.text}>
          1. Questions for "breaking the first ice" in relations with the
          others: How are you? Where are you from? How are you doing in life?
          What do you do in your life? How do you spend your free time? What are
          your hobbies, passions, dreams? Long time no see and talk, how are
          you? How are you? How do you feel? Are you healthy are you happy?
        </p>
        <p className={css.text}>
          2. The "weather" chat is a good way to "breaking the first ice" in
          establishing contact and relationships with other people.
        </p>
        <p className={css.text}>
          3. If you want to be a good conversationalist, be an attentive
          listener. Interest others, and you will seem interesting to them. Ask
          questions like this which the interlocutor will gladly answer.
          Encourage the interlocutor to talk about himself and his
          accomplishments. Talk about what interests you make the interlocutor
          feel important.
        </p>
        <p className={css.text}>
          4. Relationships are more important than achievements. This is what
          will make us happy for the rest of our lives.
        </p>
        <p className={css.cheer}>
          So come on, call someone you want to! What do you waiting for?{' '}
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </p>
      </div>
    </div>
  );
};
export default Home;
