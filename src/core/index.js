class Type {
  constructor(input) {
    this.input = input
  }
  
  type(input) {
    switch(input) {
      case typeof(input === 'string'):
        console.log('String');
        break;
      case typeof(input === 'boolean'):
        console.log('Boolean');
        break;
      case typeof(input === 'number'):
        console.log('Integer');
        break;
      default:
        console.log('Sorry, I don\'t recognize the type of your input');
    }
  }
}

module.exports = Type;
