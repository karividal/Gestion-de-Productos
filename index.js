//Nombre del alumno: Karina Vidal

const [, , method, route, ...args] = process.argv; //le paso los comandos - destructuring
const BASE_URL = `https://fakestoreapi.com/`;

//--- Funciones Individuales ---
async function getAllProducts() {
    try {
        const res = await fetch(BASE_URL + 'products');
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.error('Error al obtener los productos: ', error.message);
    }
}

async function getProductById(id) {
    try {
        const res = await fetch(`${BASE_URL}products/${id}`);
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.error('Error al obtener el producto: ', error.message);
    }
}

async function createProduct(title, price, category) {
    if (!title || !price || !category) {
        console.log('Faltan argumento');
        return;
    }
    const newProduct = {
        title,
        price: parseFloat(price),
        category
    };
    try {
        const res = await fetch(BASE_URL + 'products', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newProduct)
        });
        const data = await res.json();
        console.log('Producto creado: ', data);
    } catch (error) {
        console.error('Error al crear el producto: ', error.message);
    }
}

async function deleteProductById(id) {
    try {
        const res = await fetch(`${BASE_URL}products/${id}`, {
            method: 'DELETE'
        });
        const data = await res.json();
        console.log('Producto eliminado: ', data);
    } catch (error) {
        console.error('Error al eliminar el producto: ', error.message);
    }
}

//--- Función principal con switch ---

async function main() {
    switch (method) {
        case 'GET':
            if (route === 'products') {
                await getAllProducts();
            } else if (route.startsWith('products/')) {
                const id = route.split('/')[1];
                await getProductById(id);
            } else {
                console.log('Ruta GET no reconocida')
            }
            break;
        case 'POST':
            if (route === 'products') {
                const [title, price, category] = args;
                await createProduct(title, price, category);
            } else {
                console.log('Ruta POST no reconocida');
            }
            break;
        case 'DELETE':
            if (route.startsWith('products/')) {
                const id = route.split('/')[1];
                await deleteProductById(id);
            } else {
                console.log('Ruta DELETE no reconocida');
            }
            break;

        default:
            console.log('Método no reconocido. Usa GET, POST o DELETE');
    }
}
main();
