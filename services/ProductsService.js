const PRODUCTS = [
    {
        id: 100,
        name: 'Flavettes Vitamin C',
        price: 25,
        image: require('../assets/products/vitamin_c.png'),
        description: 'Flavettes Vitamin C 1000mg Effervescent Orange 15pcs.'
    },
    {
        id: 101,
        name: 'Gaviscon Double Action Liquid 150 ml',
        price: 35,
        image: require('../assets/products/gaviscon.png'),
        description: 'Gaviscon double action liquid mint helps provide effective relief from heartburn and indigestion, providing fast, soothing and long lasting pain relief.'
    },
    {
        id: 102,
        name: 'Cold Fever Capsule',
        price: 13,
        image: require('../assets/products/fever.png'),
        description: 'Hurixs 1000 Cold Fever Capsule 12s'
    }
];
export function getProducts() {
    return PRODUCTS;
}
export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}