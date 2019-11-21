// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-module-namespace-exotic-objects-get-p-receiver
description: >
    References observe the initialization of lexical bindings
info: |
    [...]
    12. Let targetEnvRec be targetEnv's EnvironmentRecord.
    13. Return ? targetEnvRec.GetBindingValue(binding.[[BindingName]], true).
flags: [module]
features: [let]
---*/

import * as ns from './get-str-initialize_FIXTURE.js';

assert.sameValue(ns.localUninit1, 111);
assert.sameValue(ns.renamedUninit, 222);
assert.sameValue(ns.default, 333);
