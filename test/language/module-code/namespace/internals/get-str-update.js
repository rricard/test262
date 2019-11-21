// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-module-namespace-exotic-objects-get-p-receiver
description: References observe the mutation of initialized bindings
info: |
    [...]
    12. Let targetEnvRec be targetEnv's EnvironmentRecord.
    13. Return ? targetEnvRec.GetBindingValue(binding.[[BindingName]], true).
flags: [module]
---*/

import * as ns from './get-str-update_FIXTURE.js';

assert.sameValue(ns.local1, 333);
assert.sameValue(ns.renamed, 444);
