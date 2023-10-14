

const randomNum = Math.random() * (0.5 - 0.2) + 0.2;


export const useRandomIncreasingPrice = (price: number) => (price + (randomNum * price)).toFixed(0);


