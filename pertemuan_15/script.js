// Ada 2 Cara pemanggilan
// import { hello, world, name, numbers } from './hello.js'
// import * as helper from './hello.js'

// hello('John Doe');
// world();
// console.log(name);
// console.log(numbers);

// import * as helper from './hello.js'

// helper.hello('John Doe');
// helper.world();
// console.log(helper.name);
// console.log(helper.numbers);

import Func1 from './hello.js'
import { world } from './components/world.js'

Func1('John Doe');
world();