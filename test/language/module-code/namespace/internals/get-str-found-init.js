// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-module-namespace-exotic-objects-get-p-receiver
description: >
    Behavior of the [[Get]] internal method with a string argument for exported
    initialized bindings.
info: |
    [...]
    12. Let targetEnvRec be targetEnv's EnvironmentRecord.
    13. Return ? targetEnvRec.GetBindingValue(binding.[[BindingName]], true).
flags: [module]
---*/

import * as ns from './get-str-found-init_FIXTURE.js';

assert.sameValue(ns.local1, 23);
assert.sameValue(ns.renamed, 45);
assert.sameValue(ns.default, 444);
