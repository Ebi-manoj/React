export const ResCard = ({ resData }) => {
  const { name, cuisine, rating, img } = resData;
  return (
    <div className="card">
      <img src={img} />
      <h3>{name}</h3>
      <h5>{cuisine}</h5>
      <p>{rating + ' rating'}</p>
    </div>
  );
};

export const withPromoted = RestaurantCard => {
  return props => {
    console.log(props);
    return (
      <div>
        <p className="promo">Promoted</p>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
