// Algoritmo
// crear variables y obtener su valor
// preguntarme cual de los dos datos es mayor
// hacer la diferencia en el orden correspondiente
// devolver un respuesta

let edad = parseInt(prompt("Cual es tu edad?"));
let edad2 = parseInt(prompt("Cual es la edad de tu hno?"));

if (edad > edad2)
{
    let diferencia = edad - edad2;
    alert("Tu hno y tu se llevan "+diferencia+" años, tu eres el mayor");
}
else if (edad < edad2)
{
    let diferencia2 = edad2 - edad;
    alert("Tu hno y tu se llevan "+diferencia2+" años, tu eres el menor");
}
else if (edad == edad2)
{
    let diferencia3 = edad2 - edad;
    alert("Tu hno y tu se llevan "+diferencia3+" años, son mellizos?");
}
else{
    alert("error")
}
