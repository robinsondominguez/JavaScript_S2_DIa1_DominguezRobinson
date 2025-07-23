let Hamburguesas = [
    {
        "nombre": "Clásica",
        "categoria": "Clásica",
        "ingredientes": ["Pan", "Carne de res", "Queso cheddar", "Lechuga", "Tomate", "Cebolla", "Mayonesa", "Ketchup"],
        "precio": 10,
        "chef": "ChefA"
    },
    {
        "nombre": "Vegetariana",
        "categoria": "Vegetariana",
        "ingredientes": ["Pan integral", "Hamburguesa de lentejas", "Queso suizo", "Espinacas", "Cebolla morada", "Aguacate", "Mayonesa vegana"],
        "precio": 8,
        "chef": "ChefB"
    },
    {
        "nombre": "Doble Carne",
        "categoria": "Gourmet",
        "ingredientes": ["Pan de sésamo", "Doble carne de res", "Queso cheddar", "Bacon", "Lechuga", "Cebolla caramelizada", "Salsa BBQ"],
        "precio": 12,
        "chef": "ChefC"
    }
]

let booleanito = true
while (booleanito == true) {
    let Opciones = prompt("Bienvenido a la hamburgreseria X \n 1. Añadir \n 2. Eliminar \n 3. Actualizar \n 4. Borrar");

    if (Opciones == 1) {
        let Listar = prompt("Quieres ver la lista? \n 1. Si \n 2. No");

        if (Listar == "1") {
            alert("Listado");
            for (let i = 0; i < Hamburguesas.length; i++); {
                alert("Num"(i + 1) + ": " + Object.entries(Listar[i]));
            }
        }
        else {
            let Nombre = prompt("Nombre");
            let Descripcion = prompt("Descripcion");
            let Chef = prompt("Chef");
            let Categoria = prompt("Categoria");
            let Stock = prompt("Stock");
            let Precio = prompt("Precio");
        };
        let Guardar = prompt("Quieres guardar la informacion? \n 1. Guardar \n 2. Cancelar");

        if (Guardar == "1") {
            Hamburguesas.push({
                "Nombre": Nombre,
                "Descripcion": Descripcion,
                "Chef": Chef,
                "Categoria": Categoria,
                "Stock": Number(Stock),
                "Precio": Number(Precio),
            });
            alert("Se guardo");
        }
        else {
            alert("No se guardo");
        }
        if (Guardar == "1") {
            Hamburguesas.push({
                "Nombre": Nombre,
                "Descripcion": Descripcion,
                "Chef": Chef,
                "Categoria": Categoria,
                "Stock": Number(Stock),
                "Precio": Number(Precio),
            });
            alert("Se guardo");
        }
        else {
            alert("No se guardo");
        }
    }
}


