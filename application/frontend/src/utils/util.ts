export function cash(value: number) {
  return `$${value.toFixed(2)}`
}

export function time(value: number) {
  const hours = Math.floor(value / 60);
  const minutes = value % 60;
  return hours === 0 ? `${minutes} minutes` : `${hours} ${hours === 1 ? "hour" : "hours"} ${minutes} minutes`
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

export function pseudoRandint(id: string, start: number, stop: number, amount?: number, offset?: number) {
  amount = amount || 1;
  offset = offset || 0;

  function sfc32(a: number, b: number, c: number, d: number) {
    return function () {
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
    function hashCode(str: string) {
      var hash = 0,
        i, chr;
      if (str.length === 0) return hash;
      for (i = 0; i < str.length; i++) {
        chr = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0;
      }
      return hash;
    }
    return hashCode(id) * time * date.getUTCDay() * 1e3;
  }

  let rand = sfc32(mixer(date.getUTCHours() + 3), mixer(date.getUTCDate()), mixer(date.getUTCMonth()), mixer(date.getUTCFullYear()));
  const randNums = [];
  for (let i = 0; i < amount + offset; i++) {
    const randNum = Math.floor(rand() * (stop - start + 1) + start);
    if (i >= offset) {
      randNums.push(randNum);
    }
  }
  return randNums;
}