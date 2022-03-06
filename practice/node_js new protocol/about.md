when we use node : something then we are telling js engine explicitly that we want to use official node js module not something which is installed as an npm module

the way js module resolution works is 
 1 -> seearches for the module in node_modules folder 
 if not found then
 2-> looks in one directory up and continue to do so until it finds that it want o export it from global module folder

``` js

import fs from 'node:fs' // it will load the official module enen if it is courrpted or somethng something
```
we can also import the promised version 
``` js
import fs from 'node:fs/promises'
```
