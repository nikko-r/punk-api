import "./BeerTile.scss";

const BeerTile = ({ beerName, imgUrl, desc, abv, date }) => {
  return (
    <div className="beers-tile">
      <img
        className="beers-tile__image"
        src={imgUrl}
        alt={beerName}
        width="100"
        height="200"
      ></img>
      <p className="beers-tile__description">{desc}</p>
      <p className="beers-tile__abv">abv: {abv}</p>
      <p className="beers-tile__date">date: {date}</p>
    </div>
  );
};

export default BeerTile;
