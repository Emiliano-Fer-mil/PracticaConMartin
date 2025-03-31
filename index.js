

console.log('---------------Practica 1-------------')


//Crear un proyecto que implemente las siguientes funciones
// 1.-leerArchivoComoString
console.log('-----------leer Archivo Como String----------')
import fs, { readFileSync } from 'fs'

let datos= fs.readFileSync('C:/Users/emife/Repos PNT2/PracticaConMartin/primerDocumentoDePractica.txt', 'utf-8')
console.log(datos)

// 2.-escribirTextoEnArchivo
console.log('--------escribir Texto En Archivo----------')

let flag=false
let ruta ="C:/Users/emife/Repos PNT2/PracticaConMartin/Datos2.txt"
let texto ="prueba de escritura en archivo de texto"

const escribirTexto = (ruta, texto, flag) => {
    if(flag){
        let datos2 = fs.writeFileSync(ruta, texto)
        datos2 = readFileSync(ruta, 'utf-8')
        console.log(datos2)
    } else {
        console.log('el archivo no existe')
    }
}

escribirTexto(ruta, texto, flag)
flag = true
escribirTexto(ruta, texto, flag)
//pisarContenido
let datos2= fs.writeFileSync('C:/Users/emife/Repos PNT2/PracticaConMartin/Datos2.txt', 'a partir de ahora')
datos2= fs.readFileSync(ruta, 'utf-8')
console.log(datos2)

//agregarContenido
datos2= fs.appendFileSync(ruta, ' /// desde aqui texto de prueba añadido')
datos2= fs.readFileSync(ruta, 'utf-8')
console.log(datos2)


fs.renameSync(ruta, 'C:/Users/emife/Repos PNT2/PracticaConMartin/subCarpeta/Datos2.txt')
datos2= fs.readFileSync('C:/Users/emife/Repos PNT2/PracticaConMartin/subCarpeta/Datos2.txt', 'utf-8')
console.log(datos2)
fs.unlinkSync('C:/Users/emife/Repos PNT2/PracticaConMartin/subCarpeta/Datos2.txt')
console.log(fs.readdirSync('C:/Users/emife/Repos PNT2'))

//transformarStringEnArrayDeNumeros
console.log('--------transformar String En Array De Numeros----------')
let stringDeNumeros ="12, 14, 16, 33, 67, 115"
console.log(stringDeNumeros)

let arrayDeNumeros= stringDeNumeros.split(', ').map(Number)
console.log(arrayDeNumeros)

//transformarArrayDeNumerosAUnSoloString
console.log('--------transformar Array De Numeros A Un Solo String----------')
let nuevoStringDeNumeros = arrayDeNumeros.join('/')
console.log(nuevoStringDeNumeros)

//combinarDosArrays
console.log('--------combinar Dos Arrays----------')
let array1=[2, 8, 16, 51, 999, 1187]
let array2=[2, 6, 16, 33, 41, 92, 1266]
console.log(typeof(array1))

let combinado = [...new Set([...array1,...array2])].sort((a,b) => a-b);
console.log(combinado)

//combinado = array1.concat(array2)
//console.log(combinado)

let unificado = [...new Set([...combinado])]
console.log(typeof(unificado))
//combinado = [...combinado.sort((a,b) => a-b)];
console.log(unificado)
//let ordenado = unificado.sort(unificado)
//console.log(ordenado)

console.log(unificado)

//let ordenado = unificado.sort((a, b) => a - b);
//console.log(ordenado)

const combinarNArrays = (a) => {
    let resultado=[];
    for (let i=0; i<a.length;i++){
        for (let j=0;j<a[i].length;j++){
            resultado.push(a[i][j])
        }
    }
    return resultado
}
let arrayDeArrays = [[1,3,10],[2,3,15,16],[4],[6,7,13]]
console.log(combinarNArrays (arrayDeArrays))