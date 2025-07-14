import { useParams } from 'react-router';
import { restaurantDetails } from '../utilities/constant';

export const Restaurant = () => {
  const { id } = useParams();
  const findIndex = restaurantDetails.findIndex(item => item.id == id);
  if (findIndex == -1)
    return (
      <div>
        <h1>No Restaraunts Found</h1>
      </div>
    );
  const restaraunt = restaurantDetails[findIndex];
  return (
    <div className="resto">
      <h1>{restaraunt.name}</h1>
      <h3>{restaraunt.cusines.join(', ')}</h3>
      <h4>Cost for two ₹{restaraunt.costForTwo}</h4>
      <h4>Delivery In {restaraunt.delivery}mins</h4>
      <ul className="menu-ul">
        {restaraunt.menu.map((i, ind) => (
          <li key={ind}>{i.item + ' -' + 'Rs.' + i.price}</li>
        ))}
      </ul>
    </div>
  );
};
