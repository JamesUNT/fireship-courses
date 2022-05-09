
void main() {
  
  // Basic function
  takeFive() {

  }

  String takeSix(int number) {
    return '$number minus six equals ${number - 6}';
  }

  var str = takeSix(7);

  print(str);

  int namedParams({required int a, int? b, int c = 10}) {
    return (a - b!) * c;
  }
  
  namedParams(a: 10, b: 5);

  // Arrow function
  takeTen(int number) => '$number minus six equals ${number - 6}';
  takeTen(23);

  // Anonymous function
  callIt(Function callback) {
    return callback();
  }

  print(callIt(
    () => 'Hi mom'
  ));
}