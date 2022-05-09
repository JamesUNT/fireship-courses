void main( ) {
  
}

class Dog {

  void walk() {
    print('walking...');
  }

}

// "extends" makes the Pug class inherited the Dog class
class Pug extends Dog {
  String breed = 'Pug';
  
  @override
  void walk() {
    super.walk();
    print('Im tired of walking... stop walking.');
  }
}

// "implements" obligues you to implement the class Dog
class Shiba implements Dog {
  String breed = 'Pug';
  
  @override
  void walk() {
    // super.walk(); // error
    print('Hi Im a shiba and Im waling !!');
  }
}