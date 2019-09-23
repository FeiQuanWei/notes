class asdf{
  constructor(value){
    console.log(value)
    this.value = value
  }
  [Symbol.split](string){
    console.log(string)
    let index = string.indexOf(this.value);
    if (index === -1) {
      return string;
    }
    return [
      string.substr(0, index),
      string.substr(index + this.value.length)
    ];
  }
}
'asdfasdf'.split(new asdf('a'))