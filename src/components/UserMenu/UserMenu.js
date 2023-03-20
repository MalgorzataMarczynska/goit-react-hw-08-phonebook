import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import css from './UserMenu.module.css';
import { useColorMode, Button } from '@chakra-ui/react';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div className={css.wrapper}>
      <Button onClick={toggleColorMode} borderStyle="none" mr={4}>
        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      </Button>
      <p className={css.username}>
        Welcome, <b>{user.email}</b>
      </p>
      <button
        className={css.button}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};
