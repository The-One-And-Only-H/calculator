const Commify = (number) => {

  if (typeof(number) !== 'string') {
    number = String(number);
  }

  // Below three lines include commas on left of decimal point and no commas on right of decimal point
  number = number.split('.');
  number[0] = number[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  number = number.join('.');

  return number;
}

export default Commify;
