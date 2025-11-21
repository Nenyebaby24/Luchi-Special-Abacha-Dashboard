import "../Styles/chart.css";

function Chart({ data }) {
  return (
    <div className="chart-container">
      <h3 className="chart-title">Sales Analytics</h3>

      <div className="chart-bars">
        {data.map((item, index) => (
          <div className="chart-bar-wrapper" key={index}>
            <div
              className="chart-bar"
              style={{ height: `${item.value}px` }}
            ></div>
            <p className="chart-label">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Chart;