import Table from "../Components/Table";
import customers from "../Data/customers";
import "../Styles/table.css";

function Customers() {
  return (
    <div className="page">
      <Table title="Customers" data={customers} />
    </div>
  );
}

export default Customers;
