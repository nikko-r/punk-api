import "./SideBar.scss";

const SideBar = () => {
  return (
    <div className="sidebar">
      <section className="sidebar__filters">
        <div className="sidebar__filter">
          <p className="filter__title">High ABV</p>
          <input className="filter__checkbox" type="checkbox"></input>
        </div>
        <div className="sidebar__filter">
          <p className="filter__title">Classic Range</p>
          <input className="filter__checkbox" type="checkbox"></input>
        </div>
        <div className="sidebar__filter">
          <p className="filter__title">Acidic</p>
          <input className="filter__checkbox" type="checkbox"></input>
        </div>
      </section>
    </div>
  );
};

export default SideBar;
