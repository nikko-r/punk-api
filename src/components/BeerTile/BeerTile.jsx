import "./BeerTile.scss";

const BeerTile = ({ beerName, imgUrl, desc, abv, date, id }) => {
  return (
    <div className="beer-tile">
      {imgUrl ? (
        <img className="beer-tile__image" src={imgUrl} alt={beerName}></img>
      ) : (
        <p>NO IMAGE FOUND</p>
      )}

      <p className="beer-tile__name">
        name: {id} {beerName}
      </p>
      <p className="beer-tile__abv">abv: {abv}</p>
      <p className="beer-tile__date">First Brewed: {date}</p>
      <p className="beer-tile__description">{desc}</p>
    </div>
  );
};

export default BeerTile;
