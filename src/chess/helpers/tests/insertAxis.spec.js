import insertAxis from '../insertAxis'

describe('#insertAxis', () => {
  describe('Insert into axis list that after converted tiles', () => {
    it('mutlple tiles -> multiple axis', () => {
      expect(insertAxis([], ['a7'])).toEqual([[1, 7]])
      expect(insertAxis([[1, 7]], ['h2'])).toEqual([[1, 7], [8, 2]])
      expect(insertAxis(['h3'], ['h2'])).toEqual([[8, 2]])
    })
  })
})
