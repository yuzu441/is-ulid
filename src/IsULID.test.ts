import {isULID} from "./IsULID"

describe('isULID', () => {
  it('validate ulid', () => {
    expect(isULID('01ED8ABHD21XTZJMRW6ZMEGPSS')).toBeTruthy()
    // uuid v4
    expect(isULID('23bc826e-e366-403e-bbe8-e28cdb960584')).toBeFalsy()
  })
})