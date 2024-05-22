//utils.js

export const calculateValues = (data) => {
  let currentValueTotal = 0;
  let totalInvestment = 0;
  let todaysPNL = 0;

  data.forEach(item => {
    const currentValue = item.ltp * item.quantity;
    const investmentValue = item.avgPrice * item.quantity;
    const pnl = currentValue - investmentValue;

    currentValueTotal += currentValue;
    totalInvestment += investmentValue;
    todaysPNL += (item.close - item.ltp) * item.quantity;

    item.currentValue = currentValue;
    item.investmentValue = investmentValue;
    item.pnl = pnl;
  });

  const totalPNL = currentValueTotal - totalInvestment;

  return {
    currentValueTotal,
    totalInvestment,
    totalPNL,
    todaysPNL
  };
}

