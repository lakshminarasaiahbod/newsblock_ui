export const MONTHS = [
  'JANUARY',
  'FEBRUARY',
  'MARCH',
  'APRIL',
  'MAY',
  'JUNE',
  'JULY',
  'AUGUST',
  'SEPTEMBER',
  'OCTOBER',
  'NOVEMBER',
  'DECEMBER',
]

export const getDDMonthYYYY = date => {
  const dateObj = new Date(date);
  if (dateObj) {
    const month = MONTHS[dateObj.getMonth()+1];
    const date = dateObj.getDate();
    const year = dateObj.getFullYear();

    return `${date} ${month}, ${year}`;
  }
}