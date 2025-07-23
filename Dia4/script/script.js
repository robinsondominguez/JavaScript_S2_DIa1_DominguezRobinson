Chefs = [
    {
        "Numero": "1",
        "nombre": "ChefA",
        "especialidad": "Carnes"
    },
    {
        "Numero": "2",
        "nombre": "ChefB",
        "especialidad": "Cocina Vegetariana"
    },
    {
        "Numero": "3",
        "nombre": "ChefC",
        "especialidad": "Gourmet"
    }
]

Categoria =
    [
        {
            "Numero": "1",
            "nombre": "Clásica",
            "descripcion": "Hamburguesas clásicas y sabrosas"
        },
        {
            "Numero": "2",
            "nombre": "Vegetariana",
            "descripcion": "Hamburguesas sin carne, perfectas para vegetarianos"
        },
        {
            "Numero": "3",
            "nombre": "Gourmet",
            "descripcion": "Hamburguesas gourmet con ingredientes premium"
        }
    ]

ingredientes = [
    {
        "Numero": "1",
        "nombre": "Pan",
        "descripcion": "Pan de hamburguesa clásico",
        "precio": 2.5,
        "stock": 500
    },
    {
        "Numero": "2",
        "nombre": "Carne de res",
        "descripcion": "Carne de res jugosa y sabrosa",
        "precio": 8,
        "stock": 300
    },
    {
        "Numero": "3",
        "nombre": "Queso cheddar",
        "descripcion": "Queso cheddar derretido",
        "precio": 1.5,
        "stock": 200
    }
]

Hamburguesas = [
    {
        "Numero": "1",
        "nombre": "Clásica",
        "categoria": "Clásica",
        "ingredientes": ["Pan", "Carne de res", "Queso cheddar", "Lechuga", "Tomate", "Cebolla", "Mayonesa", "Ketchup"],
        "precio": 10,
        "chef": "ChefA"
    },
    {
        "Numero": "2",
        "nombre": "Vegetariana",
        "categoria": "Vegetariana",
        "ingredientes": ["Pan integral", "Hamburguesa de lentejas", "Queso suizo", "Espinacas", "Cebolla morada", "Aguacate", "Mayonesa vegana"],
        "precio": 8,
        "chef": "ChefB"
    },
    {
        "Numero": "3",
        "nombre": "Doble Carne",
        "categoria": "Gourmet",
        "ingredientes": ["Pan de sésamo", "Doble carne de res", "Queso cheddar", "Bacon", "Lechuga", "Cebolla caramelizada", "Salsa BBQ"],
        "precio": 12,
        "chef": "ChefC"
    }
]

let Inicio = true
while (Inicio == true) {
    let Opciones = prompt("Bienvenido a la hamburgreseria X \n 1. Añadir \n 2. Eliminar \n 3. Actualizar \n 4. Ver lista");

    if (Opciones == 1) {{
            Numero = 3
            let Nombre = prompt("Nombre");
            let Descripcion = prompt("Descripcion");
            let Chef = prompt("Chef");
            let Categoria = prompt("Categoria");
            let Stock = Number(prompt("Stock"));
            let Precio = Number(prompt("Precio"));

            let NuevaHamburguesa = {
                "Number": Numero + 1,
                "Nombre": Nombre,
                "Descripcion": Descripcion,
                "Chef": Chef,
                "Categoria": Categoria,
                "Stock": Stock,
                "Precio": Precio,
            }

            let Guardar = prompt("Quieres guardar la informacion? \n 1. Guardar \n 2. Cancelar");
            if (Guardar == "1") {
                Hamburguesas.push(NuevaHamburguesa);
                alert("Informacion Guardada")
            } else if (Guardar == 2) {
                alert("Informacion no guardada")
            };
        }
    }
    else if (Opciones == 2) {
        let Eliminacion = prompt("Ingrese el numero de la hamburguesa a eliminar");
        Hamburguesas.splice(Eliminacion - 1);
        alert("Hamburguesa Elimanada")
    }
    else if (Opciones == 3) {
        let Update = prompt("Ingrese la hamburguesa a actualizar")
        let UNombre = prompt("Nombre");
        let UDescripcion = prompt("Descripcion");
        let UChef = prompt("Chef");
        let UCategoria = prompt("Categoria");
        let UStock = Number(prompt("Stock"));
        let UPrecio = Number(prompt("Precio"));

        Hamburguesas[ Update - 1]["Nombre"] = UNombre
        Hamburguesas[ Update - 1]["Descripcion"] = UDescripcion
        Hamburguesas[ Update - 1]["Chef"] = UChef
        Hamburguesas[ Update - 1]["Categoria"] = UCategoria
        Hamburguesas[ Update - 1]["Stock"] = UStock
        Hamburguesas[ Update - 1]["Precio"] = UPrecio

        alert("Hamburguesa Actualizada")
    }

    else if (Opciones == 4) {
        alert("Listado");
            for (let i = 0; i < Hamburguesas.length; i++) {
                alert("Num " + (i + 1) + ": " + Object.entries(Hamburguesas[i]));
            }
    }
}

