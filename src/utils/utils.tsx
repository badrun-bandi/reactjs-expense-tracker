const formatDate = (date: Date):string => {
  const d:Date = new Date(date);
  let month = `${d.getMonth() + 1}`;
  let day = `${d.getDate()}`;
  const year = d.getFullYear();

  if (month.length < 2) {
      month = `0${month}`;
  }

  if (day.length < 2) {
      day = `0${day}`
  }
  return [year, month, day].join('-')
}

const formatCurrency = (value: number = 0): string => {
  // const c:string = number.toLocaleString(undefined, { maximumFractionDigits: 2 });
  const v = value ? parseFloat(String(value)) : 0;
  const c:string = v.toFixed(2);
  return c;
}

const formatNumber = (value: number = 0) =>
  new Intl.NumberFormat('en', {
    style: 'currency', currency: 'MYR'
  }).format(value);

export { formatDate, formatCurrency, formatNumber };
