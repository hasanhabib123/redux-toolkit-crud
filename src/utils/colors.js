export const generateRandomColorFromMUI = () => {
  const colors = [
    '#9c27b0',
    '#673ab7',
    '#3f51b5',
    '#2196f3',
    '#03a9f4',
    '#00bcd4',
    '#009688',
    '#4caf50',
    '#8bc34a',
    '#795548',
    '#9e9e9e',
    '#607d8b',
  ];

  return colors[Math.floor(Math.random() * colors.length)];
};
