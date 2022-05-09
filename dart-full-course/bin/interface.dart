void main() {
  var elephant = Elephant('hichard');
  print(elephant.sayHi());
}

// Public interface
// Every class technically inplements it's own interface
// But if you are interested only on the interface itself
// You can add "abstract" keyword in front of the "class" keyword
class Elephant {

  final String name;

  // In the interface, bur visible only in the library. (private)
  final int _id = 23;

  // Not in the interface, since this is a constructor
  Elephant(this.name);

  // Public method
  sayHi() => 'my name is $name';

  //Private method
  _saySecret() => 'My ID is $_id';
}