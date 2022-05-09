void main() {
  
  // the question mark in front of the type indicates the age can be assing as null
  int? age;

  // The assertion operator "!" make the compiler think the value is non-null
  String? anwser;

  // String result = anwser; // error

  // Always be shure that when using the "result", "anwser" won't be null
  String result = anwser!;
}


// late inicialization
class Animal {
 // late allows you to assing a non-nullable value later, at runtime
 late final String _size;

 void goBig() {
    _size = 'Big';
    print(_size);
 }
}