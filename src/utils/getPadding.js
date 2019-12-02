const getPadding = (total, start, render) => {
    const Padding = [];
    for (let i = start; i < total + 1; i++) {
        Padding.push(render(i)); 
    }
    return Padding;
}
export default getPadding;