// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-module-namespace-exotic-objects-setprototypeof
description: The [[SetPrototypeOf]] internal method returns `false`
flags: [module]
---*/

import * as ns from './empty-module_FIXTURE.js';
var newProto = {};

assert.sameValue(typeof Object.setPrototypeOf, 'function');

assert.throws(TypeError, function() {
  Object.setPrototypeOf(ns, newProto);
});
