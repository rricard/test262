// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-module-namespace-exotic-objects-delete-p
description: >
    [[Delete]] behavior for a key that describes an initialized exported
    binding
info: |
    [...]
    2. Let exports be the value of O's [[Exports]] internal slot.
    3. If P is an element of exports, return false.
flags: [module]
features: [Reflect]
---*/

import * as ns from './delete-exported-init_FIXTURE.js';

assert.throws(TypeError, function() {
  delete ns.local1;
}, 'delete: local1');
assert.sameValue(
  Reflect.deleteProperty(ns, 'local1'), false, 'Reflect.deleteProperty: local1'
);
assert.sameValue(ns.local1, 333, 'binding unmodified: local1');

assert.throws(TypeError, function() {
  delete ns.renamed;
}, 'delete: renamed');
assert.sameValue(
  Reflect.deleteProperty(ns, 'renamed'), false, 'Reflect.deleteProperty: renamed'
);
assert.sameValue(ns.renamed, 444, 'binding unmodified: renamed');
