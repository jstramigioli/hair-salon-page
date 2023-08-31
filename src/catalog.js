const catalog = []

const article = (name, description, price, img) => {
    return {name, description, price, img}
}

import ropa1img from './img/ropa1.jpg'
import ropa2img from './img/ropa2.jpg'
import ropa3img from './img/ropa3.jpg'
import ropa4img from './img/ropa4.jpg'
import ropa5img from './img/ropa5.jpg'
import ropa6img from './img/ropa6.jpg'

catalog.push(article('ropa1', 'Descripcion de ropa', 3000, ropa1img))
catalog.push(article('ropa2', 'Descripcion de ropa', 4000, ropa2img))
catalog.push(article('ropa3', 'Descripcion de ropa', 3000, ropa3img))
catalog.push(article('ropa4', 'Descripcion de ropa', 2000, ropa4img))
catalog.push(article('ropa5', 'Descripcion de ropa', 3000, ropa5img))
catalog.push(article('ropa6', 'Descripcion de ropa', 7000, ropa6img))

export { catalog }