// Default analytics data for your dashboard

const analytics = {
  stats: [
    {
      id: 1,
      title: "Total Sales",
      value: "₦1,240,000",
      growth: "+12%"
    },
    {
      id: 2,
      title: "Total Orders",
      value: 345,
      growth: "+8%"
    },
    {
      id: 3,
      title: "Total Customers",
      value: 128,
      growth: "+5%"
    },
    {
      id: 4,
      title: "Products in Stock",
      value: 42,
      growth: "-3%"
    }
  ],

  chartData: [
    { month: "Jan", sales: 120000 },
    { month: "Feb", sales: 150000 },
    { month: "Mar", sales: 180000 },
    { month: "Apr", sales: 160000 },
    { month: "May", sales: 200000 },
    { month: "Jun", sales: 240000 }
  ]
};

export default analytics;