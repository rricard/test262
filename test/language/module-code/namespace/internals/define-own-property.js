// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-module-namespace-exotic-objects-defineownproperty-p-desc
description: >
    The [[DefineOwnProperty]] internal method returns `true` if no change is
    requested, and `false` otherwise.
flags: [module]
features: [Symbol.iterator, Reflect, Symbol, Symbol.toStringTag]
---*/

import * as ns from './define-own-property_FIXTURE.js';
var sym = Symbol('test262');

const exported = ['local1', 'renamed'];


// Non-existant properties.

for (const key of ['local2', 0, sym, Symbol.iterator]) {
  assert.sameValue(
    Reflect.defineProperty(ns, key, {}),
    false,
    'Reflect.defineProperty: ' + key.toString()
  );
  assert.throws(TypeError, function() {
    Object.defineProperty(ns, key, {});
  }, 'Object.defineProperty: ' + key.toString());
}


// Own properties. No change requested.

for (const key of ([...exported, Symbol.toStringTag])) {
  assert.sameValue(
    Reflect.defineProperty(ns, key, {}),
    true,
    'Reflect.defineProperty: ' + key.toString()
  );
  assert.sameValue(
    Object.defineProperty(ns, key, {}),
    ns,
    'Object.defineProperty: ' + key.toString()
  );

}

assert.sameValue(
  Reflect.defineProperty(ns, Symbol.toStringTag,
      {value: "Module", writable: false, enumerable: false,
       configurable: false}),
  true,
  'Reflect.defineProperty: Symbol.toStringTag'
);
assert.sameValue(
  Object.defineProperty(ns, Symbol.toStringTag,
      {value: "Module", writable: false, enumerable: false,
       configurable: false}),
  ns,
  'Object.defineProperty: Symbol.toStringTag'
);


// Own properties. Change requested.

for (const key of ([...exported, Symbol.toStringTag])) {
  assert.sameValue(
    Reflect.defineProperty(ns, key, {value: 123}),
    false,
    'Reflect.defineProperty: ' + key.toString()
  );
  assert.throws(TypeError, function() {
    Object.defineProperty(ns, key, {value: 123});
  }, 'Object.defineProperty: ' + key.toString());
}

assert.sameValue(
  Reflect.defineProperty(ns, Symbol.toStringTag,
      {value: "module", writable: false, enumerable: false,
       configurable: false}),
  false,
  'Reflect.defineProperty: Symbol.toStringTag'
);
assert.throws(TypeError, function() {
  Object.defineProperty(ns, Symbol.toStringTag,
      {value: "module", writable: false, enumerable: false,
       configurable: false});
}, 'Object.defineProperty: Symbol.toStringTag');
