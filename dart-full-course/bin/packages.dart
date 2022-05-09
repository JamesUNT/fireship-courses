// import 'constructors.dart' as my_shapes; // namescaped packages
// import 'constructors.dart' hide Circle; // Dart wont import this class into the file
import 'constructors.dart' show Rectangle; // Dart will import only this class from the library

class Circle {}

void main() {
  // mu_shapes.Circle();
  Circle();
  Rectangle(1,2);
}