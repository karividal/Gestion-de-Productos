# Gestion-de-Productos

 El objetivo es construir una herramienta funcional para manejar productos de una tienda en línea desde la terminal.
 Implementaremos las funcionalidades principales usando la API FakeStore (https://fakestoreapi.com/docs#tag/Products). El sistema debe ser capaz de interpretar comandos ingresados en la terminal y ejecutar las siguientes acciones con los comandos como ejemplo:

- Para traer todos los productos:
  npm start GET products

- Para traer un producto pasandole un id, por ejemplo el id = 4:
  npm start GET products/4

- Para agregar un nuevo producto con los datos proporcionados en este orden (title price category):
  npm start POST products Gorra 39.99 accesorios

- Para eliminar un producto pasandole un id, por ejemplo el id = 7:
  npm start DELETE products/7
