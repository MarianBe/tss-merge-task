import { MERGE } from './intervalService'

describe('MERGE', () => {
  const data = [
    [25, 30],
    [2, 19],
    [14, 23],
    [4, 8]
  ]
  const expected = [
    [2, 23],
    [25, 30]
  ]

  it('Undefinded array', () => {
    expect(MERGE(undefined)).toEqual(undefined)
  })

  it('Empty array', () => {
    expect(MERGE([])).toEqual(undefined)
  })

  it('Negative values', () => {
    expect(MERGE([[-1, 3], [3, 6], ...data])).toEqual([
      [-1, 23],
      [25, 30]
    ])
  })

  it('Correct array', () => {
    expect(MERGE(data)).toEqual(expect.arrayContaining(expected))
  })
})
