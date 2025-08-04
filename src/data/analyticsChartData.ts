export const pieData = [
  { name: "Card", value: 300, color: "#274754" },
  { name: "QR", value: 200, color: "#E8C468" },
  { name: "Cash", value: 100, color: "#00AB57" },
  { name: "Other", value: 50, color: "#9D9C9C" },
];

export const barData = [
  { name: "Mon", card: 90, qr: 30 },
  { name: "Tue", card: 50, qr: 45 },
  { name: "Wed", card: 70, qr: 25 },
  { name: "Thu", card: 60, qr: 30 },
  { name: "Fri", card: 100, qr: 60 },
  { name: "Sat", card: 40, qr: 30 },
  { name: "Sun", card: 45, qr: 35 },
];

export const areaData = Array.from({ length: 40 }, (_, i) => ({
  date: `Jun ${i + 1}`,
  newUser: Math.random() * 100,
  regularUser: Math.random() * 120,
}));
