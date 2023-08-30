const catalog = []

const article = (name, description, price) => {
    return {name, description, price}
}

catalog.push(article('ropa1', 'Descripcion de ropa', 3000))
catalog.push(article('ropa2', 'Descripcion de ropa', 4000))
catalog.push(article('ropa3', 'Descripcion de ropa', 3000))
catalog.push(article('ropa4', 'Descripcion de ropa', 2000))
catalog.push(article('ropa5', 'Descripcion de ropa', 3000))
catalog.push(article('ropa6', 'Descripcion de ropa', 7000))

export { catalog }