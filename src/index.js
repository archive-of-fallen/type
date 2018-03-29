class Type {
  constructor(input) {
    this.input = input
  }
  
  _type_string(input) {
    if(typeof input === 'string') {
      return "String";
    } else {
      return "Nope";
  }
}
