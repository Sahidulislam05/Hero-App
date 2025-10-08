import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const AppChart = ({ app }) => {
  const data = app?.ratings || [];
  //   console.log( typeof data);
  return (
    <div>
      <h1 className="text-2xl font-semibold my-10">Ratings</h1>
      <div className="bg-base-100 border rounded-xl p-4 h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 5, right: 30, left: 80, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <YAxis dataKey="name" type="category" width={80} />
            <XAxis type="number" />
            <Tooltip />
            <Legend />

            <Bar dataKey="count" fill="#FF8C00" barSize={25} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AppChart;
