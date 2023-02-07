export const chartDataFormatter = data => {
  const initialData = [{
    rate: 1,
    counter: 0,
  }, {
    rate: 2,
    counter: 0,
  }, {
    rate: 3,
    counter: 0,
  }, {
    rate: 4,
    counter: 0,
  }, {
    rate: 5,
    counter: 0,
  }];

  data.forEach(item => {
    initialData[item.rate - 1].counter = initialData[item.rate - 1].counter + 1;
  });

  return initialData;
};