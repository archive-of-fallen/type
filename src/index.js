class Type {
  constructor(input) {
    this.input = input
  }
  
  switch(input) {
    case 'string':
      console.log('String');
      break;
    case 'boolean':
      console.log('Boolean');
      break;
    case 'number':
      console.log('Integer');
      break;
    default:
      console.log('Sorry, I don\'t recognize your input');
  }
}
