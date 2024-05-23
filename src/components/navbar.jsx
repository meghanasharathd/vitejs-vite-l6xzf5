const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="hover:underline">
          <a href={`/`}>Home</a>
        </li>
        <li className="hover:underline">
          <a href={`/list`}>List</a>
        </li>
        <li className="hover:underline">
          <a href={`/population`}>Population</a>
        </li>
        <li className="hover:underline">
          <a href={`/gdp`}>GDP</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
