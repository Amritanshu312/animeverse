export const cleanParam = (param) => {
  if (!param || typeof param !== 'string') {
    return '';
  }
  // Replace %20 with +
  return param.replace(/%20/g, '+');
};

