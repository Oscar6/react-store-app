function addProduct(item) {
    return {
        types: 'addProduct',
        productData: {
            productName: item.productName,
            productPrice: item.productPrice,
        }
    }
}

export default addProduct;