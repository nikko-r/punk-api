import "./NavBar.scss";

const NavBar = ({ searchBoxInput, handleInput }) => {
  return (
    <div className="navbar">
      <div className="navbar__toggle-sidebar">
        <div className="toggle-sidebar__line"></div>
        <div className="toggle-sidebar__line"></div>
        <div className="toggle-sidebar__line"></div>
      </div>
      <input
        className="navbar__searchbar"
        type="text"
        placeholder="🔎 Search..."
        value={searchBoxInput}
        onInput={handleInput}
      ></input>
    </div>
  );
};

export default NavBar;
