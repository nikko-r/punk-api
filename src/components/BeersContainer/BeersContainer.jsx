import "./BeersContainer.scss";
import BeerTile from ".././BeerTile/BeerTile";

const BeersContainer = ({ beersArr }) => {
  return (
    <div className="beers-container">
      {beersArr.map((object) => (
        <BeerTile
          className="beers-container__tile"
          beerName={object.name}
          imgUrl={object.image_url}
          desc={object.description}
          abv={object.abv}
          date={object.first_brewed}
          id={object.id}
        />
      ))}
    </div>
  );
};

export default BeersContainer;
