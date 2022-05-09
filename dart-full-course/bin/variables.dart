void main () {
  int num1 = 1;
  double num2 = 3.0;

  print((num1 + num2) is int);

  // runtimeType prints the type of an object
  print((num1 + num2).runtimeType);

  String str = 'hello mom';
  
  print('The type of $str is a String ? ${str is String}');

  // Reassingnable variables
  var username = 'fireship';
  username = 'Fireship is the best !!';

  // Final means the value can't be changed
  final String fullname = 'Thiago';
  
  // const is like final, but is an immutable compile-time const, resulting in better performance
  const int age = 75;

  // const variables can't be assigned in runtime
  // const int favNumber = num1 + 5; // error
}