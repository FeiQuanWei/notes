class IncreasingCounter {
  #count = 0;
  get aaa() {
    console.log('Getting the current value!');
    return this.#count;
  }
  increment() {
    this.#count++;
  }
}
let asdf = new IncreasingCounter()
console.log(asdf.aaa)