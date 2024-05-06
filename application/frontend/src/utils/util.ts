export function cash(value: number) {
  return `$${value.toFixed(2)}`
}

export function menuSum(items: {
  name: string,
  price: number,
  count?: number
}[] | undefined) {
  if (!items) {
    return 0;
  }
  return items.reduce((total, item) => total + (item.price * (item.count || 0)), 0);
}

export function randint(a: number, b: number) {
  return Math.floor(Math.random() * (b - a + 1) + a);
}

export function randomFour() {
  return String(randint(1000, 9999));
}