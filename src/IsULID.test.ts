import { validate } from 'class-validator'
import { IsULID, isULID } from './IsULID'

describe('isULID', () => {
  it('validate ulid', () => {
    expect(isULID('01ED8ABHD21XTZJMRW6ZMEGPSS')).toBeTruthy()
    // uuid v4
    expect(isULID('23bc826e-e366-403e-bbe8-e28cdb960584')).toBeFalsy()
  })

  describe('Excluded charactors', () => {
    it('include "I"', () => {
      expect(isULID('01ED8ABHD21XTZJMRW6ZMEGPSI')).toBeFalsy()
    })

    it('include "L"', () => {
      expect(isULID('01ED8ABHD21XTZJMRW6ZMEGPSL')).toBeFalsy()
    })

    it('include "O"', () => {
      expect(isULID('01ED8ABHD21XTZJMRW6ZMEGPSO')).toBeFalsy()
    })

    it('include "U"', () => {
      expect(isULID('01ED8ABHD21XTZJMRW6ZMEGPSU')).toBeFalsy()
    })
  })

  describe('class validation test', () => {
    it('valid', async () => {
      const vt = new ValidationTest('01ED8ABHD21XTZJMRW6ZMEGPSS')
      await expect(validate(vt)).resolves.toHaveLength(0)
    })
  })
})

class ValidationTest {
  @IsULID()
  id: string

  constructor(id: string) {
    this.id = id
  }
}
