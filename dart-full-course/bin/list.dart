import 'variables.dart';

void main(List<String> args) {

  // Basic usage

  List<int> list = [1,2,3,4,5];

  list[0];

  list.sublist(2,4);

  var list2 = List.filled(50, 'hello');
  
  list.length;
  list.last;
  list.first;

  list.add(2); // push 
  list.removeLast(); // pop
  list.insert(1, 23);

  for (int i in list) {
    print(i);
  }

  list.forEach((n) => print(n));

  var doubled = list.map((n) => n*2);

  // spread syntax
  var combined = [...list, ...list2];

  bool depressed = false;
  var cart = [
    'milk',
    'eggs',
    if (depressed) 'Vodka'
  ];
}