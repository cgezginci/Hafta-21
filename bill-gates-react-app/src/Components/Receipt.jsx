import { useShoppingContext } from "./ShoppingContext";

const Receipt = () => {
  const { getReceiptTotal, getReceiptItems } = useShoppingContext();

  return (
    <div className="col-7 mt-2 mb-3 p-3 bg-light receipt">
      <div>
        <h2>Your Receipt</h2>
        <ul>{getReceiptItems()}</ul>
        <hr />
        <h3>Total: ${getReceiptTotal()}</h3>
      </div>
    </div>
  );
};

export default Receipt;
