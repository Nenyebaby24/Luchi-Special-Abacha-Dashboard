import Navbar from "../Components/Navbar";
import Card from "../Components/Card";
import Chart from "../Components/Chart";
import analyticsData from "../Data/analytics";

import "../Styles/layout.css";

function Dashboard({ setSidebarOpen }) {
  return (
    <div className="main">
      <Navbar setSidebarOpen={setSidebarOpen} />

      <div className="cards fade-in">
        {analyticsData.stats.map((item) => (
          <Card key={item.id} title={item.title} value={item.value} />
        ))}
      </div>

      <div className="fade-up">
        <Chart
          data={analyticsData.chartData.map((item) => ({
            label: item.month,
            value: item.sales / 1000,
          }))}
        />
      </div>
    </div>
  );
}

export default Dashboard;
