const getIds = (idString) => {
    const ids = idString.split("-").filter( id => (id!=="0"))
    return ids;
}
export default getIds;