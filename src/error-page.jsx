import { useRouteError } from 'react-router-dom';
import Navbar from './components/navbar';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <Navbar />
      <div className="text-4xl bg-gray-300 h-screen w-screen text-center p-10 font-mono">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}
