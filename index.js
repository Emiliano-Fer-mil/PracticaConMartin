

console.log('---------------Practica 1-------------')


//Crear un proyecto que implemente las siguientes funciones
// 1.-leerArchivoComoString
console.log('-----------leer Archivo Como String----------')
import fs, { readFileSync } from 'fs'

let datos= fs.readFileSync('../Practica1/src/primerDocumentoDePractica.txt', 'utf-8')
console.log(datos)

// 2.-escribirTextoEnArchivo
console.log('--------escribir Texto En Archivo----------')

let flag=false
let ruta ="../Practica1/src/datos2.txt"
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

let datos2= escribirTexto(ruta, texto, flag)
flag = true
escribirTexto(ruta, texto, flag)
//pisarContenido
datos2= fs.writeFileSync(ruta, 'a partir de ahora')
datos2= fs.readFileSync(ruta, 'utf-8')
console.log(datos2)

//agregarContenido
datos2= fs.appendFileSync(ruta, ' /// desde aqui texto de prueba añadido')
datos2= fs.readFileSync(ruta, 'utf-8')
console.log(datos2)


fs.renameSync(ruta, '../Practica1/datos2.txt')
datos2= fs.readFileSync('../Practica1/datos2.txt', 'utf-8')
console.log(datos2)
fs.unlinkSync('../Practica1/datos2.txt')
console.log(fs.readdirSync('../Practica1'))

//transformarStringEnArrayDeNumeros
console.log('--------transformar String En Array De Numeros----------')
let stringDeNumeros ="12, 14, 16, 33, 67, 115"
console.log(stringDeNumeros)

let arrayDeNumeros= stringDeNumeros.split(',')
console.log(arrayDeNumeros)

//transformarArrayDeNumerosAUnSoloString
console.log('--------transformar Array De Numeros A Un Solo String----------')
let nuevoStringDeNumeros = arrayDeNumeros.join('/')
console.log(nuevoStringDeNumeros)

//combinarDosArrays
console.log('--------combinar Dos Arrays----------')
let array1=[2,8, 16, 51, 999, 1187]
let array2=[2, 6, 16, 33, 41, 92, 1266]



let combinado = array1.concat(array2)
console.log(combinado)

let unificado = [new Set(combinado)]
console.log(unificado)
//let ordenado = unificado.sort(unificado)
//console.log(ordenado)






console.log(unificado)

//let ordenado = unificado.sort((a, b) => a - b);
//console.log(ordenado)
