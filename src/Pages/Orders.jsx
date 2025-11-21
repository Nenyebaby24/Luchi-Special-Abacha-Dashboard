import Table from "../Components/Table";
import orders from "../Data/order";
import "../Styles/table.css";

function Orders() {
  return (
    <div className="page">
      <Table title="Orders" data={orders} />
    </div>
  );
}

export default Orders;

