import "../styles/table.css";

function Table({ title, data }) {
  if (!data || data.length === 0) {
    return (
      <div className="table-container">
        <h3 className="table-title">{title}</h3>
        <p className="empty-message">No data available</p>
      </div>
    );
  }

  return (
    <div className="table-container">
      <h3 className="table-title">{title}</h3>

      <table className="custom-table">
        <thead>
          <tr>
            {Object.keys(data[0]).map((key) => (
              <th key={key}>{key.toUpperCase()}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((value, i) => (
                <td key={i}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;

