import Navbar from '../components/navbar';

const Header = () => {
  return (
    <div className="text-center mt-10">
      <p className="mt-3 max-w-lg text-xl ml-auto mr-auto">
        {' '}
        This is Homework 3. Learn about South America!
      </p>
      <img alt="Map of South America" style={{ maxWidth: '300px' }} />
    </div>
  );
};

//landing screen component
const Home = () => {
  return (
    <div className="bg-gray-100 h-screen w-screen">
      <Navbar />
      <Header />
    </div>
  );
};

export default Home;
