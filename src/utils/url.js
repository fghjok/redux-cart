export default {
    getProducts: () => `/static/prods.json`,
    getComparativesResultByIds: (ids) => (ids.map(id => `/static/spec/p${id}.json`))
}