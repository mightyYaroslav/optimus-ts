[![NPM Version](https://img.shields.io/badge/npm-v1.0.0-blue.svg)](https://www.npmjs.com/package/optimus-js)
![Travis Info](https://travis-ci.org/mightyYaroslav/optimus-ts.svg?branch=master)
# optimus-ts
With this library, you can transform your ids to obfuscated integers based on Knuth's integer hash. Port of optimus-js https://www.npmjs.com/package/optimus-js

Installation
-------------

```
npm i optimus-ts
```

```
yarn add optimus-ts
```

Usage
-----
To initialize the library you need 3 things.

- Large prime number lower than 2147483647 (prime)
- The inverse prime so that (prime * inverse) & 2147483647 = 1
- A large random number lower than 2147483647

For more info refer to the [original project](https://github.com/jenssegers/optimus)

using the above parameters you can create instances of Optimus(prime, inverse, random)


```
import Optimus from 'optimus-ts'

let optimus = new Optimus(1580030173, 59260789, 1163945558)
```

After that you can use encode and decode methods to encode/decode positive integers ranging from (0 to 2147483647). 

```
let hash = optimus.encode(25);
let original = optimus.decode(hash);
```

***Warning***: Please note that this library only provides obfuscation and not encryption.

