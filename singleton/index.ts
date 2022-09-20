import {SingletonUsingBuiltInFeature} from "./singleton-using-built-in-feature";
import {SingletonCacheExample} from "./singleton-cache-example";

SingletonCacheExample.instance.put('fname', 'rohit');
console.log(SingletonCacheExample.instance.get('fname'));