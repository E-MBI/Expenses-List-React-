const api = () => {
  const expenceData = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 256,
      date: new Date(2021, 10, 12),
    },
    {
      id: "e2",
      title: "New Desk",
      amount: 450,
      date: new Date(2022, 9, 5),
    },
  ];

  return expenceData;
};

export default api();
