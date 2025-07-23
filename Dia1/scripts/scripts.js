//############
//### Dia1 ###
//############

let Gastos = []

let booleanito = true
while (booleanito == true) {
    let options = prompt(
        "===========================================\
    \n                               Simulador de Gasto Diario\
    \n===========================================\
    \nSeleccione una opción:\
    \n\
    \n1. Registrar nuevo gasto\
    \n2. Ver los gastos\
    \n3. Calcular total de gastos\
    \n4. Generar reporte de gastos\
    \n5. Salir\
    \n==========================================="
    );

    if (options === "1") {
        let MontoGasto = prompt("Ingrese el monto del gasto");
        let Cantidad = prompt("Ingrese la cantidad");
        let Categoria = prompt("Ingrese la categoria \n 1. Comida \n 2. Transporte \n 3. Entretenimiento \n 4. Etc... ");
        let Descripcion = prompt("Ingrese la Descripcion");
    }

    let Guardar = prompt("Seguro que quieres guardar? \n 1. Si \n 2. No");
    if (Guardar === "1") {
        Gastos.push({
            "MontoGasto": Number(MontoGasto),
            "Cantidad": Number(Cantidad),
            "Categoria": Categoria,
            "Descripcion": Descripcion,
        });
        alert("El gasto se guardo")
    }
    else {
        alert("No se guardo el gasto");
    }
};

    else if (options == "2") {
    let Loptions = prompt(
        "===========================================\
        \n                               Listar Gastos\
        \n===========================================\
        \nSeleccione una opción para filtrar los gastos:\
        \n\
        \n1. Ver todos los gastos\
        \n2. Filtrar por categoría\
        \n3. Filtrar por rango de fechas\
        \n4. Regresar al menú principal\
        \n==========================================="
    )
}


// Desarrollado por: DominguezRobinson - T.I:1.104.128.994