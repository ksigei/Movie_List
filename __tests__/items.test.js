const showsArr = [
  { name: "title", id: 'id'},
  { name: "title", id: 'id'},
  { name: "title",  id: 'id'},
];

const showsCount = (arr) => {
 return arr.length
}
describe('Show counter ', () => { 
    test('Count Number of Shows for All', () => { expect(showsCount(showsArr)).toBe(3); })
})