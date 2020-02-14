export function matchLike(arr, sub) {
    sub = sub.toLowerCase();
    return arr.map(str => str
      .toLowerCase()
      .startsWith(sub.slice(0, Math.max(str.length - 1, 1)))
    );
  }