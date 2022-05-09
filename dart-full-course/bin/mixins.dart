void main() {
  // Basic usage
}

// mixins are just like classes, it can have methods and properties,
// but it cant be instantiated.
mixin Strong {
  bool doesLift = true;

  void benchPress() {
    print('doing bench press...');
  }
}

mixin Fast {
  bool doesRun = true;

  void sprint() {
    print('running fast...');
  }
}

class Human {}

// Mixins are used to extend a specific behaviors to classes with the "with" keyword
class SuperHuman extends Human with Strong, Fast {}