const afinn111 = require('./')

test('should export object', () => {
  expect(afinn111).toBeDefined()
  expect(typeof afinn111).toBe('object')
})
