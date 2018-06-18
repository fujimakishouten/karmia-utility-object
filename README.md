# karmia-utility-object
Karmia utility object module

## Usage
```javascript
const karmia_utility_object = require('karmia-utility-object').default,
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

```javascript
kobject.flip({a: 'A', b: 'B', c: 'C', d: 1, e: 2, f: 3});
// => {A: 'a', B: 'b', C: 'c', 1: d, 2: e, 3: f}
```

### mergeProperties
- object1 ```<Object>```
- object2 ```<Object>```

```javascript
const object1 = {
        a: {
            b: 'b',
            c: {
                d: 'd'
            }
        }
    },
    object2 = {
        a: {
            c: {
                e: 'e'
            },
            f: 'f'
        }
    };

kobject.mergeProperties(object1, object2);
// => {a: {b: 'b', c: {d: 'd', e: 'e'}, f: 'f'}}
```

### removeProperty
- object ```<Object>```
- property ```<Array|string>```

```javascript
const object = {
    a: 'a',
    b: {
        c: 'c'
        d: {
            e: 'e'
        }
    }
};

kobject.removeProperty(object, ['a', 'd']);
// => {b: {c: 'c'}}
```
