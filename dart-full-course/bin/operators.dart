void main() {
  
  // basic math

  1 + 2 - 3 * 4 / 5;

  // logic

  1 == 1;
  1 < 2;
  (1 >= 1) || ('a' == 'b') && ('A' == 'B');
  
  var x = 1;
  x++;
  x--;

  // Assignment
  String? name;

  // ??= means to assign value if null, otherwise use current value
  name ??= 'Guest';
  var z = name ?? 'Guest was null';

  // print(name);

  // print(z);

  // Ternary
  String color = 'blue';
  var isThisBlue = color == 'blue' ? 'Yep, it is blue' : 'Nah, it aint blue';

  // Cascade

  dynamic Paint;

  // var paint = Paint();
  // paint.color = 'black';
  // paint.strokeCap = 'round';
  // paint.strokeWidth = 5.0;

  // Use cascade operator (...) facilitates acessing data and methods on objects
  // It can't be used in objects that return void
  var paint = Paint()
    ..color = 'black'
    ..strokeCap = 'round'
    ..strokeWidth = 5.0;

  // Typecast
  var number = 23 as String;
  number is String; // true

}