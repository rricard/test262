// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

export var local1 = 23;
var local2 = 45;
export { local2 as renamed };
export default 444;
