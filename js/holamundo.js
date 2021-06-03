let valor_entrada = 500
let edad1 = parseInt(prompt("Ingresar edad"));
let edad2 = parseInt(prompt ("Ingresar 2da edad"));
let cupon = true;

if(edad1>= 18 ||edad2 >= 18){
    document.write('Pueden entrar');


    if(cupon && (edad1>= 40 || edad2 >= 40)){
        console.log(`El precio de la entrada es de $ ${valor_entrada/1.4}`);

    }else if(cupon){
        console.log(`El precio de la entrada es de persona joven con cupo $ ${valor_entrada/1.2}`)

    }else{
        console.log(`El precio de la entrada es de $ ${valor_entrada}`);
    }
}else{
    document.write('no pueden entrar')
}