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