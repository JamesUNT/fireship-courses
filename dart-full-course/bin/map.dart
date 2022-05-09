void main() {
  
  // Basic usage

  // Map<key_type, value_type> name 
  Map<String, dynamic> book = {
    'title': 'Moby Dick',
    'author': 'Herman Melville',
    'pages': 752,
  };

  book['title'];
  book['published'] = 1851;

  book.keys;
  book.values;
  book.keys.toList();
  book.values.toList();
  
  for (MapEntry b in book.entries) {
    print('the key is ${b.key} and the value is ${b.value}');
  }

  book.forEach((key, value) => print('Key: $key, Value: $value'));
}