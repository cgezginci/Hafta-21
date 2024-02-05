import { useShoppingContext } from "./ShoppingContext.jsx";
import Card from "./Card.jsx";
import Receipt from "./Receipt.jsx";

const SpendBillGatesMoney = () => {
  const { money } = useShoppingContext();

  return (
    <div className="d-flex flex-column align-items-center main">
      <div className="bg-light col-7 mt-5 mb-3 d-flex flex-column align-items-center p-3">
        <img
          className="rounded-circle"
          src="https://neal.fun/spend/billgates.jpg"
          alt=""
          width={120}
          height={120}
        />
        <h1>Spend Bill Gates' Money</h1>
      </div>

      <div
        className=" p-3 col-7 text-light d-flex align-items-center justify-content-center mb-3 sticky-top "
        id="money"
      >
        ${money.toLocaleString()}
      </div>

      <Card />
      <Receipt />
    </div>
  );
};

export default SpendBillGatesMoney;
