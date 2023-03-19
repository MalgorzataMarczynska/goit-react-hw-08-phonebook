import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Suspense } from 'react';
import { FallingLines } from 'react-loader-spinner';
import css from './Layout.module.css';
export const Layout = () => {
  return (
    <div className={css.container}>
      <Header />
      <Suspense
        fallback={
          <FallingLines
            color="#3f51b5"
            width="50"
            visible={true}
            ariaLabel="falling-lines-loading"
          />
        }
      >
        <Outlet />
      </Suspense>
    </div>
  );
};
