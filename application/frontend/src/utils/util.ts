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

function sfc32(a: number, b: number, c: number, d: number) {
  return function() {
    a |= 0; b |= 0; c |= 0; d |= 0;
    let t = (a + b | 0) + d | 0;
    d = d + 1 | 0;
    a = b ^ b >>> 9;
    b = c + (c << 3) | 0;
    c = (c << 21 | c >>> 11);
    c = c + t | 0;
    return (t >>> 0) / 4294967296;
  }
}

export function pseudoRandint(id: string, a: number, b: number, c: number) {
  const date = new Date();
  const rand = sfc32(id.length * 3 * 1e12, date.getHours() * 1e12, date.getDate() * 1e12, date.getMonth() * 1e12);
  return [Math.floor(rand() * (b - a + 1) + a), Math.floor(rand() * (c - a + 1) + a)];
}