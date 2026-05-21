
export const getRecommendations = async (
  req,
  res
) => {
  try {
    const recommendations = [
      {
        name: "Wireless Mouse",
        category: "Electronics",
      },

      {
        name: "Gaming Keyboard",
        category: "Electronics",
      },

      {
        name: "Bluetooth Headset",
        category: "Accessories",
      },
    ];

    res.json(recommendations);
  } catch (error) {
    res.json({
      error: error.message,
    });
  }
};