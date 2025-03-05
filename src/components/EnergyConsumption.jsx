import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { year: 2015, energy: 10 },
  { year: 2018, energy: 50 },
  { year: 2021, energy: 120 },
  { year: 2023, energy: 300 }, // Example values
];

export default function EnergyConsumption() {
  return (
    <div className="container">
      <h2>AI Energy Consumption Over Time</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="energy" stroke="#0044cc" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
