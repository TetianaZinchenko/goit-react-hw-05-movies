import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Container, LinkStyles, Header } from './Layout.styled';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from 'components/Loader';

export default function Layout() {
  return (
    <>
      <ToastContainer autoClose={3000} theme={'colored'} />

      <Header>
        <Container>
          <nav>
            <LinkStyles to="/">Home</LinkStyles>
            <LinkStyles to="movies">Movies</LinkStyles>
          </nav>
        </Container>
      </Header>
      <Container>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
}
