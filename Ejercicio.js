function esNatural(num) {
    // Devuelve true si el num es Natural
    // Usa Recursividad
    if(num > 0) return true;
    else esNatural(num);
}
console.log(esNatural(2));

function Colores(colores) {
    // Aquellos colores negros cambiar su palabra a Black
    // Devuelve el arreglo
    let array = [];
    colores.map(function(item){
    if(item==='Negros'){
        item= 'Black';
         array.push(item);
    }else{
         array.push(item);
    }
})
return array;
}

var colores = ['Blanco', 'Negros', 'Rojo', 'Amarillo', 'Negros', 'Verde']

function Filtrado(colores) {
    // Del resultado de la funcion Colores() filtra aquellos colores llamados Black
    // ejemplo ---> ['Blanco', 'Rojo', 'Amarillo', 'Verde']
    return colores.filter(function(item){
        return item==='Black';
    })

}

console.log(Filtrado(Colores(colores)))

function Filtrar(personas){
    // Filtrar aquellas personas que sean menores de edad, siendo mayor de edad a partir de los 18 años
    // Mostrar arreglo
    edades= personas.filter((item)=>{
        return item.edad < 18;
    })
    return edades;
}

const personas = [

    { nombre: 'Carlos', edad: 20},
    { nombre: 'Esteban', edad: 15},
    { nombre: 'Franco', edad: 12},
    { nombre: 'Estela', edad: 19},
    { nombre: 'Juan', edad: 10},
    { nombre: 'Mirtha', edad: 17}
];

console.log(Filtrar(personas));





