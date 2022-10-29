function callMenu(){
    let nro_ejercicio= parseInt(
        prompt("ingrese el numero de ejercicio que quiere ejecutar: \r\n 1.suma. \r\n 2.Promedio de exmamenes \r\n 3.Calcular el area de un rectangulo \r\n 4.Calcular el area de un triangulo \r\n 5.Calcular el area de una circunferencia \r\n 6.Calcular el sueldo semanal de un trabajador. \r\n 7.Convertir metros a pulgadas \r\n 8.Convertir soles a dolares \r\n 9.Determinar edad de persona \r\n 10.Determinar persona de menor edad. \r\n 11.Determinar bono de trabajador. \r\n 12. Determinar Salaio de 6 años de un profesor. \r\n 13. Determinar aprobados y desaprobados. \r\n 14. Determinar colores foco ingresados. \r\n 15. Determinar edad para votar")
    );
    if(isNaN(nro_ejercicio)){
        alert ("No seas burro y llena los datso")
    }else{
        MenuEjercicios(nro_ejercicio)
    }
}
function MenuEjercicios(nro_ejercicio){
    switch(nro_ejercicio){
        case 1:
            let valor1 = parseFloat(prompt("ingresa el valor 1 a sumar "));
            let valor2 = parseFloat(prompt("ingresa el valor 2 a sumar "));
            alert(ej1_sumarValores(valor1,valor2)) 
            break;


        case 2:
            let ex1 = parseFloat(prompt("ingresa nota 1")) ;   
            let ex2 = parseFloat(prompt("ingresa nota 2")) ; 
            let ex3 = parseFloat(prompt("ingresa nota 3")) ; 
            let ex4 = parseFloat(prompt("ingresa nota 4")) ;
            alert(ej2_calcularPromedio(ex1,ex2,ex3,ex4))  
            break; 
            
            
        case 3:
            let base_rect = parseFloat(prompt("ingrese base"));
            let altura_rect = parseFloat(prompt("ingrese altura"));
            alert (ej3_calcularAreaRectangulo(base_rect,altura_rect));
            break;


        case 4:
            let base_tria = parseFloat(prompt("ingrese base: "));
            let altura_tria = parseFloat(prompt("ingrese altura: "));
            alert (ej4_calcularAreaTriangulo(base_tria,altura_tria));
            break;


        case 5:
            let radio = parseFloat(prompt("ingresar el radio: "));
            alert(ej5_calcularAreacirculo(radio));
            break;


        case 6:
            const salario = parseFloat(prompt("ingrese salario: "));
            const horas = parseFloat(prompt("ingresar cantidad de horas trabajadas: "));
            const dias = parseFloat(prompt("ingresar cantidad de dias trabajados: "));
            alert (ej6_Salario(salario, horas, dias));
            break;
        case 7:
            const metros = parseFloat(prompt("Escribir metros: "));
            alert (ej7_PulgadasaMetros(metros));
            break;
        case 8:
            const soles = parseFloat(prompt("Cantidad de soles a ingresar: "));
            const dolar = parseFloat(prompt("Precio dolar: "));
            alert (ej8_SolaDolar(soles, dolar));
            break;
        case 9:
            const año = parseFloat(prompt("Digite año en que nacieron: "))
            alert(ej9_edad(año));
            break;
        case 10:
            const nombre1 = prompt("Primer numbre: ");
            const edad1 = parseInt(prompt("Primera edad:"));

            const nombre2 = prompt("Segundo nombre: ");
            const edad2= parseInt(prompt("Segunda edad"));

            const nombre3 = prompt("Tercer nombre: ");
            const edad3 = parseInt(prompt("Tercera edad :"));
            alert(ej10_EdadMenor(nombre1, edad1, nombre2, edad2, nombre3, edad3));
            break;
        case 11:
            const trabajado = parseInt(prompt("años en la empresa: "));
            alert(ej11_bono(trabajado));
            break;
            case 12:
                const pSalario = parseInt(prompt("Ingrese salario"));
                alert(ej12_salarioProfesor(pSalario));
                break;
        case 13:
            const cantN = parseInt(prompt("escribe la cantidad de notas: "));
            alert(ej13_notas(cantN));
            break;
        case 14:
            const focos = parseInt(prompt("escribe la cantidad de focos: verde, blacno o rojo"));
            alert(ej14_Focos(focos));
            break;
        case 15:
            const votar = parseInt(prompt("escribe la edad: "));
            alert(ej15_votar(votar));
            break;
        default:
            break;
    }
}

// funciones

function ej1_sumarValores(a,b){
    if(isNaN(a) || isNaN(b)){
        return "No seas burro y llena los datso";
    } else {
        return a + b
    }
}

function ej2_calcularPromedio(ex1,ex2,ex3,ex4){
    if(isNaN(ex1)|| isNaN(ex2)|| isNaN(ex3)|| isNaN(ex4)){
        return "No seas burro y llena los datso";
    } else {
        return(ex1 + ex2 + ex3 + ex4)/4;
    }

}

function ej3_calcularAreaRectangulo(base_rect,altura_rect){
    if(isNaN(base_rect) || isNaN(altura_rect)){
        return "No seas burro y llena los datso";
    } else {
        return "el area del rectangulo es :"+base_rect * +altura_rect
    }
}

function ej4_calcularAreaTriangulo(base_tria, altura_tria){
    if(isNaN(base_tria) || isNaN(altura_tria)){
        return "No seas burro y llena los datso";
    } 
    else {
        return "El area del triangulo es: "+(base_tria * altura_tria)/2;
    }
}

function ej5_calcularAreacirculo(radio){
    if(isNaN(radio)){
        return "No seas burro y llena los datso";
    } 
    else {
        return "El area de la circunferencia es: " + (Math.PI * (radio * radio));
    }
}

function ej6_Salario(salario, horas, dias){
    if(isNaN(salario) || isNaN(horas) || isNaN(dias)){
        return "No seas burro y llena los datso"
    } 
    else {
        return "salario de la semana es: " + ((salario * horas) * dias);
    }
}

function ej7_PulgadasaMetros(metros){
    if(isNaN(metros)){
        return "No seas burro y llena los datso"
    } else {
        const pulgadas = 39.3701;
        return "Las pulgadas que necesita es: " + (metros * pulgadas);
    }
}

function ej8_SolaDolar(soles, dolar){
    if(isNaN(soles) || isNaN(dolar)){
        return "No seas burro y llena los datso"
    } else {
        return "cantidad de soles a dolares es: " + (soles / dolar);
    }
}

function ej9_edad(año){
    if(isNaN(año)){
        return "No seas burro y llena los datso"
    } else {
        const añoActual = 2022;
        return "La edad es: " + (añoActual - año) + " años"
    }
}

function ej10_EdadMenor(nombre1, edad1, nombre2, edad2, nombre3, edad3){
    if(isNaN(nombre1) && isNaN(edad1) || isNaN(nombre2) && isNaN(edad2) || isNaN(nombre3) && isNaN(edad3)){
        return "No seas burro y llena los datso"
    } else {
        if(edad1 < edad2 && edad1 < edad3){
            return "nombre: " + nombre1 + " edad: " + edad1;
        } else {
            if (edad2 < edad3){
                return "nombre: " + nombre2 + " edad: " + edad2;
            } else {
                return "nombre: " + nombre3 + " edad: " + edad3;
            }
        }
    }
}

function ej11_bono(trabajado){
    if(isNaN(trabajado)){
        return "No seas burro y llena los datso"
    } else {
        if(trabajado == 1){
            return "recives tu bono de $100";
        } else if (trabajado == 2){
            return "recives tu bono de $200";
        } else if (trabajado == 3){
            return "recives tu bono de $300";
        } else if (trabajado == 4){
            return "recives tu bono de $400";
        } else if (trabajado == 5){
            return "recives tu bono de $500";
        } else if (trabajado > 5){
            return "recives tu bono de $1000";
        }
    }
}

function ej12_salarioProfesor (pSalario){
    let sal =0;
    let cantA;

    if (isNaN(pSalario)){
        return "Debe ingresar el salario"
    }else{
        for (p = 1; p <= 6; p ++){
            sal = pSalario * 0.10;
            pSalario=pSalario+sal;
            cantA=("El salario en el año "+p+" es: $"+pSalario);

            // Resulto con el prompt no con el return
            prompt(cantA);
        }
         return "el salrio en los 6 años es:$"+pSalario;
    }
}

function ej13_notas(cantN){
    if(isNaN(cantN)){
        return "No seas burro y llena los datso"
    } else {
        let aprovado = 0;
        let desaprobado = 0;
        for(let i = 0; i < cantN; i++){
            let nota = +(prompt("escribe las nota " + (i + 1) + ": "));
            if(nota >= 0 && nota <11){
                desaprobado++;
            } else if(nota >= 11 && nota <= 20){
                aprovado++;
            }

        }
        return "aprobados: " + aprovado + "\ndesaprobados: " + desaprobado;
    }
}

function ej14_Focos(focos){
    if(isNaN(focos)){
        return "No seas burro y llena los datso"
    }else{
        let rojo = 0;
        let verde = 0;
        let blanco = 0;
        for(let i = 0; i < focos; i++){
            let foco = prompt("Ingrese color foco " + (i +1) + ": ");
            if(foco == "rojo"){
                rojo++;
            } else if (foco == "verde"){
                verde++;
            } else if (foco == "blanco"){
                blanco++;
            } else if(foco !== "rojo" || foco !== "verde" || foco !== "blanco"){
                return "no se encontro, escribe solo rojo, verde o blanco";
            }
        }
        return "Focos Verdes: " + verde +
        "\nFocos Blancos: " +blanco +
        "\nFocos Rojos: " + rojo;
    }
}

function ej15_votar(votar){
    if(isNaN(votar)){
        return "No seas burro y llena los datso"
    } else {
        if(votar >= 0 && votar < 18){
            return "Sigue siendo un niño, no puedes votar"
        } else if(votar >= 18 && votar < 65){
            return "Ya es mayor de edad, si puede votar e independizarse"
        } else if(votar > 65){
            return "Estas anciano pero es puedes votar si tu quieres"
        }
    }
}