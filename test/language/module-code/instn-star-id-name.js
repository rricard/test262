// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: >
    Namespace object reports properties for any valid exported IdentifierName.
esid: sec-imports
info: |
    [...]
    5. For each ExportEntry Record e in module.[[LocalExportEntries]], do
       a. Assert: module provides the direct binding for this export.
       b. Append e.[[ExportName]] to exportedNames.
    [...]
flags: [module]
---*/

import * as ns from './instn-star-id-name_FIXTURE.js';

assert('if' in ns, 'property name: if');
assert('import' in ns, 'property name: import');
assert('export' in ns, 'property name: export');
assert('await' in ns, 'property name: await');
assert('arguments' in ns, 'property name: arguments');
assert('eval' in ns, 'property name: eval');
assert('default' in ns, 'property name: default');
assert('as' in ns, 'property name: as');
