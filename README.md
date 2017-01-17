# karmia-utility-object
Karmia utility object module

## Usage
```JavaScript
const karmia_utility_object = require('karmia-utility-object'),
    kobject = new karmia_utility_object();
```

### isObject
- value ```<*>```

Check if value is an instance of Object


### isPlainObject
- value ```<*>```

Check if value is a plain object


### flip
- object ```<Object>```

Get object that exchanges key with their value

```JavaScript
kobject.flip({a: 'A', b: 'B', c: 'C', d: 1, e: 2, f: 3});
// => {A: 'a', B: 'b', C: 'c', 1: d, 2: e, 3: f}
```
