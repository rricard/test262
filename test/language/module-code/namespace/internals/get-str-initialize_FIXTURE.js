// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

export let localUninit1 = 111;
let localUninit2 = 222;
export { localUninit2 as renamedUninit };
export default 333;
