import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const carbonData = [
  { category: "AI Data Centers", emissions: 400 },
  { category: "Aviation", emissions: 700 },
  { category: "Automobiles", emissions: 500 },
];

export default function CarbonFootprint() {
  return (
    <div className="container">
      <h2>AI's Carbon Footprint vs. Other Industries</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={carbonData}>
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="emissions" fill="#ff5722" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
