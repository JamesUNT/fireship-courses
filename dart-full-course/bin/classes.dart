void main(List<String> args) {
  //Basic usage

  // Basic thing = new Basic(); // Classic way
  Basic thing = Basic(23); // Dart way 

  thing.id;
  thing.doStuff();

  Basic.helper();
}

class Basic {
  int id;

  // Constructor
  Basic(this.id);

  doStuff () {
    print('Thw id is $id');
  }

  static helper () {
    print('Hi Im static method');
  }
}