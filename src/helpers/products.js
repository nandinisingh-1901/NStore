import products from '../API/products'

export const getProductByID = (id) => {
    if(!id) return null
    return products.find(product => product.id === id)
}

export const searchProducts = (searchTerm) => {
    if(!searchTerm || (typeof(searchTerm) !== "string" && typeof(searchTerm) !== "number")) return []
    
    const term = searchTerm.trim().toLowerCase()
    return products.filter(product => {
        return product.name.toLowerCase().includes(term) || product.discription.toLowerCase().includes(term)
    })
}