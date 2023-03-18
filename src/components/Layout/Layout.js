import { Outlet } from 'react-router-dom';
//import { Toaster } from 'react-hot-toast';
import { Header } from '../Header/Header';
import { Suspense } from 'react';
import { FallingLines } from 'react-loader-spinner';
export const Layout = () => {
  return (
    <div>
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
      {/* <Toaster position="top-right" reverseOrder={false} /> */}
    </div>
  );
};
