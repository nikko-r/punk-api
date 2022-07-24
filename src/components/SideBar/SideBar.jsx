import "./SideBar.scss";

const SideBar = () => {
  return (
    <div className="sidebar">
      <p>X</p>
      <section className="sidebar__filters">
        <div className="sidebar__filter">
          <p>High ABV</p>
          <input type="checkbox"></input>
        </div>
        <div className="sidebar__filter">
          <p>Classic Range</p>
          <input type="checkbox"></input>
        </div>
        <div className="sidebar__filter">
          <p>Acidic</p>
          <input type="checkbox"></input>
        </div>
      </section>
    </div>
  );
};

export default SideBar;
