let LO;
let splitter = 134217729;

function twoSum(a, b) {
  let s = a + b;
  let a1  = s - b;
  LO = (a - a1) + (b - (s - a1));
  return s;
}

function twoProd(a, b) {
  let t = splitter * a;
  let ah = t + (a - t), al = a - ah;
  t = splitter * b;
  let bh = t + (b - t), bl = b - bh;
  t = a * b;
  LO = (((ah * bh - t) + ah * bl) + al * bh) + al * bl;
  return t;
}

export function fma(a, b, c) {
  if (!isFinite(a) || !isFinite(b))
		return a * b + c;
	if (!isFinite(c))
    return c;
    
	if (a === 0 || b === 0)
    return a * b + c;
	if (c === 0) {
    return twoProd(a, b);
  }
  
  let mhi = twoProd(a, b);
  let mlo = LO;

  let shi = twoSum(mhi, c);
  let slo = LO;
  
  slo += mlo;
  return shi + slo;
}