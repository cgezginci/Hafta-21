
import { useShoppingContext } from "./ShoppingContext";

const Card = () => {
  const { itemsSet, money, handleSell, handleBuy } = useShoppingContext();

  const handleSellClick = (index) => {
    if (index >= 0 && index < itemsSet.length) {
      handleSell(index);
    }
  };

  const handleBuyClick = (index) => {
    if (index >= 0 && index < itemsSet.length) {
      handleBuy(index);
    }
  };

  return (
    <div className=" col-7 ">
      <div className=" col-12 ">
        <div className="row justify-content-center ">
          {itemsSet.map((item, index) => (
            <div key={item.id} className="col-md-4 mb-4">
              <div className="card ">
                <img
                  src={item.image}
                  alt={item.name}
                  width={200}
                  height={100}
                />
                <div className="card-body">
                  <h3 className="card-title">{item.name}</h3>
                  <p className="card-text">
                    Price: ${item.price.toLocaleString()}
                  </p>
                  <div className="d-flex justify-content-between">
                    <button
                      className="btn"
                      id={index}
                      onClick={() => handleSellClick(index)}
                      disabled={item.quantity === 0}
                    >
                      Sell
                    </button>
                    <span className="mx-2 border p-2 rounded col-4">
                      {itemsSet[index].quantity}
                    </span>

                    <button
                      className="btn "
                      id={index}
                      onClick={() => handleBuyClick(index)}
                      disabled={item.price > money}
                    >
                      Buy
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
