function mostrar()
{
    let nombre;
	let cantidadLamparas;
	let marca;
	let precioUnidad;
	let totalCompra;
	let seguir;

	let descuento=0;
	let descuentoAcum=0;
	let ventasAcum=0;

	let acumFeliLam=0;
	let acumArgLuz=0;
	let acumIllum=0;
	let acumTotal=0;

	let porcentajeFelLamp;
	let porcentajeArgLuz;
	let porcentajeIllum;

	let masVentasFeliLam=0;
	let masVentasArgLuz=0;
	let masVentasIllum=0;

	do{
		nombre=prompt("Ingrese el nombre del cliente: ")

		cantidadLamparas=parseInt(prompt("Ingrese cantidad de lámparas. Máx 10000"));
		while(!(cantidadLamparas > 0 && cantidadLamparas < 10000 )){
			cantidadLamparas=parseInt(prompt("Error. Ingrese cantidad válida. Máx 10000"));
		}

		marca=prompt("Ingrese marca: FelipeLamparas/ArgentinaLuz/Illuminatis: ").toLowerCase();
		while(marca != "felipelamparas" && marca != "argentinaluz" && marca !="illuminatis"){
			marca=prompt("Error. Ingrese marca: FelipeLamparas/ArgentinaLuz/Illuminatis: ").toLowerCase();
		}

		precioUnidad=parseFloat(prompt("Ingrese el precio por unidad:"));

		totalCompra=cantidadLamparas*precioUnidad;

		if (marca=="felipelamparas" && cantidadLamparas>5){

			descuento=totalCompra*0.1
			totalCompra=totalCompra*0.9
		}

		if (marca=="argentinaluz" && cantidadLamparas>=3){
			descuento=totalCompra*0.05
			totalCompra=totalCompra*0.95
		}

		if(marca=="argentinaluz"){
			acumArgLuz+=cantidadLamparas;
			masVentasArgLuz++;
		}else if(marca=="felipelamparas"){
			acumFeliLam+=cantidadLamparas;
			masVentasFeliLam++;
		}else{
			acumIllum+=cantidadLamparas;
			masVentasIllum++;
		}

		descuentoAcum+=descuento;
		ventasAcum+=totalCompra;
		acumTotal+=cantidadLamparas;

		seguir=prompt("Desea continuar ingresando datos? s/n");
	}while(seguir=="s")

	porcentajeArgLuz= acumArgLuz*100/acumTotal 
    porcentajeFelLamp= acumFeliLam*100/acumTotal
    porcentajeIllum= acumIllum*100/acumTotal

	console.log('a. La empresa recaudó $' + ventasAcum);
	console.log('b. La empresa perdió en forma de descuento $' + descuentoAcum);
    console.log('c. El porcentaje que se lleva del total ArgentinaLuz es de ' + porcentajeArgLuz + '%, el de FelipeLamparas es de ' + porcentajeFelLamp + '%, y el de Illuminatis es ' + porcentajeIllum + '%. ');

	if(masVentasArgLuz > masVentasFeliLam && masVentasArgLuz > masVentasIllum){
		console.log('d. La empresa que más veces vendió fue ArgentinaLuz');
	}else if(masVentasFeliLam > masVentasArgLuz && masVentasFeliLam > masVentasIllum){
		console.log('d. La empresa que más veces vendió fue FelipeLamparas.');
	}else{
		console.log('d. La empresa que más veces vendió fue Illuminatis.');
	}

}

/*Tres
Ferrete lamparas 2.0 El empleado del negocio ingresa los siguientes datos de cada venta, teniendo en cuenta que tenemos varias ventas:
nombre del cliente
cantidad de lamparas 
marca (FelipeLamparas - ArgentinaLuz - Illuminatis)
precio por unidad 
total de la compra: dato que se calcula.
Se sabe que si la marca es FelipeLamparas y la cantidad de lamparas supera las 5 unidades, 
se aplica un descuento del 10% sobre la compra 
Si la marca es ArgentinaLuz y compra 3 o mas unidades, 
el descuento es del 5%. 
Ningun otro caso aplica descuento. 
al terminar la carga de todas las ventas,la empresa desea saber:
a) Cuanto recauda la empresa en concepto de todas las ventas realizadas.
b) Cuanto "perdio" la empresa en concepto de descuentos.
c) El promedio de la cantidad de lamparas vendidas de cada marca.
d) La marca que mas ventas realizo (sin importar la cantidad de lamparas vendidas)*/


