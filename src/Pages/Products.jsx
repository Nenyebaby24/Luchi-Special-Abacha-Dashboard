import Table from "../Components/Table";
import products from "../Data/products";
import "../styles/table.css";

function Products() {
  return (
    <div className="page">
      <Table title="Products" data={products} />
    </div>
  );
}

export default Products;
