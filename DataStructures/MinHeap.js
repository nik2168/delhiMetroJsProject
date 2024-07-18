class MinHeap {

  constructor() {
    this.MinHeap = [];
  }

  push(obj) {
    if (!obj) return undefined;
    this.MinHeap.push(obj);
    let size = this.MinHeap.length;

    let node;
    if (size % 2 == 0) {
      node = Math.trunc(size / 2);
    } else {
      node = Math.trunc(size / 2) + 1;
    }

    let newNodeIdx = size - 1;
    while (
      Number(Object.keys(this.MinHeap[node - 1])) >
      Number(Object.keys(this.MinHeap[newNodeIdx]))
    ) {
      let temp = this.MinHeap[node - 1];
      this.MinHeap[node - 1] = this.MinHeap[newNodeIdx];
      this.MinHeap[newNodeIdx] = temp;
      newNodeIdx = node - 1;
      if (node % 2 == 0) {
        node = Math.trunc(node / 2);
      } else {
        node = Math.trunc(node / 2) + 1;
      }
    }
  }

  minHeapify(){
      let size = this.MinHeap.length;
      let node;
      if (size % 2 == 0) {
        node = Math.trunc(size/2);
      } else {
        node = Math.trunc(size/2) + 1;
      }
      while (node > 0) {
        let l = node * 2;
        let r = node * 2 + 1;
        let m = l;

        if (l - 1 >= size) {
          node--;
          continue;
        }

        if (r - 1 < size && Number(Object.keys(this.MinHeap[r - 1])) >
      Number(Object.keys(this.MinHeap[l - 1]))) m = r;

        if (Number(Object.keys(this.MinHeap[node - 1])) >
      Number(Object.keys(this.MinHeap[m - 1]))) {
          let temp = this.MinHeap[m - 1];
          this.MinHeap[m - 1] = this.MinHeap[node - 1];
          this.MinHeap[node - 1] = temp;
        }
        node--;
      }
  }

  size(){
    let s = this.MinHeap.length
    return s
  }

  pop(){
    this.MinHeap.splice(0,1)
    this.minHeapify()
  }

  top(){
    return this.MinHeap[0]
  }

  print(){
    this.MinHeap.map((i) => {
        console.log(i)
    })
  }

}

module.exports = {
    MinHeap
}

// let minHeap = new MinHeap()
// minHeap.push({4: 2})
// minHeap.push({2: 4})
// minHeap.push({7: 1})
// minHeap.push({3: 2})
// minHeap.push({5: 2})
// minHeap.push({1: 2})

// minHeap.print()
// minHeap.pop()
// console.log("-------");
// minHeap.print()

