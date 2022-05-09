import 'dart:ffi';

void main() {
  String color = 'blue';

  if (color == 'blue') {
    //
  } else if (color == 'green') {
    
  } else {
    // default
  }

  // simple conditions
  if ( color == 'red') print('the color is red');

  if (color.isEmpty) print('the string is empty');

  // LOOPS
  for (var i = 0; i < 5; i++) {
    print(i);
  }

  int i = 0;
  while (i < 5) {
    print(i);
    i++;
  }

  i = 0;
  do {
    print(i);
    i++;
  } while (i < 5);

  // Assert: used to debug, if the condition is true nothing happens
  // but if the condition is false it will raise an error in debug mode.  
  var txt = 'good';
  assert(txt != 'bad');


}