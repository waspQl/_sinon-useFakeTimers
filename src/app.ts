import sinon from 'sinon'

import assert from 'assert'

let passSec = 0
const passSecID = setInterval(() => { passSec++ }, 1000)

const now = Date.now()
let passTime = Date.now() - now
assert.ok(
  0 <= passTime && passTime < (passSec + 1) * 1000
)

const fakeClock = sinon.useFakeTimers(new Date(2011,9,1).getTime());

passTime = Date.now() - now
assert.ok(
  !(0 <= passTime && passTime < (passSec + 1) * 1000)
)

fakeClock.restore();
passTime = Date.now() - now
assert.ok(
  0 <= passTime && passTime < (passSec + 1) * 1000
)

clearInterval(passSecID)
