
void main() {
  // Basic usage

  var rect = Rectangle(25, 40);

  const circ = Circle(name: 'foo', radius: 50);

  var p1 = Point.fromMap({'lat': 23.0, 'lng': 50.0});
  var p2 = Point.fromList([23.0,50.0]);

}

// Classic way to declare classes
class Rectangle {

  final int width;
  final int height;
  late final int area;
  String? name;

  // If you want to add optional arguments to the constructor,
  // simply wrap them on brackets
  Rectangle(this.width, this.height, [this.name]){
    this.area = this.width * this.height;
  }
}

// New Dart way to declare classes
class Circle {

// Using "const" in front of the constructor makes possible instantiate
// objects with the "const" keyword, use always when possible
const Circle({required int radius, String? name});

}

class Point {

  double lat = 0;
  double lng = 0;

  // Named constructors
  Point.fromMap(Map data) {
    lat = data['lat'];
    lng = data['lng'];
  }

  // If the atribute name is unique, then there is no need to use "this" keyword
  Point.fromList(List data) {
    lat = data[0];
    lng = data[1];
  }
}

class FooException implements Exception {
  final String? msg;

  const FooException([this.msg]);

  @override
  String toString() => msg ?? 'FooException';
}

