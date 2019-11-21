// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.


export var local1 = 111;
var local2 = 222;
export { local2 as renamed };

local1 = 333;
local2 = 444;
