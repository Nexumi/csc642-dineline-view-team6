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

export function pseudoRandint(id: string, a: number, b: number, c: number) {
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

  const date = new Date();

  function mixer(time: number) {
    return id.length * time * date.getUTCDay() * 1e12;
  }
  
  let rand = sfc32(mixer(date.getUTCHours() + 3), mixer(date.getUTCDate()), mixer(date.getUTCMonth()), mixer(date.getUTCFullYear()));
  return [Math.floor(rand() * (b - a + 1) + a), Math.floor(rand() * (c - a + 1) + a)];
}