const minHeap = (q) => {
  let size = q.length;

  let node;
  if (size % 2 == 0) {
    node = Math.trunc(size/2);
  } else {
    node = Math.trunc(size/2) + 1;
  }

  while (node > 0) {
    console.log("node :", node);
    let l = node * 2;
    let r = node * 2 + 1;
    let m = l;
    if (l - 1 >= size) {
      node--;
      continue;
    }
    if (r - 1 < size && q[r - 1] < q[l - 1]) m = r;
    if (q[node - 1] > q[m - 1]) {
      let temp = q[m - 1];
      q[m - 1] = q[node - 1];
      q[node - 1] = temp;
    }
    node--;
  }
  return q;
};

let q = [20, 10, 50, 30, 40];

const ans = minHeap(q);

console.log(ans);


