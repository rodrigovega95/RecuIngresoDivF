/*Una software factory registra la siguiente informacion de sus empleados:
Nombre,
edad (validar),
sexo (masculino - femenino - no binario),
puesto (programador - analista - Qa),
sueldo (entre 15000 y 70000).
La empresa desea saber: se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) promedio de sueldos para cada puesto
b) el sexo del que percibe el mayor sueldo
c) el nombre del empleado femenino con mas sueldo
d) cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000*/



function mostrar()
{
	let nombre;
	let edad;
	let sexo;
	let puesto;
	let sueldo;
	let seguir;

	let contSueldoProg = 0;
	let contSueldoAnalista =0;
	let contSueldoQa=0;
	let acumProg=0;
	let acumAnalis=0;
	let acumQa=0;
	let promSueldProg;
	let promSueldAnalis;
	let promSueldQa;

	let mayorSueldo;
	let sexoMayorSueldo;
	let flag = 1;

	let femMayorSueldo;
	let nombreFemMayorSueldo;
	let flagFemMayorSueldo = 1;

	let contSueldoProgNb=0;

	let flagEmpleadoFemenino=1;
	
	let flagProgramadorNb=1;


	do {
		nombre=prompt("Ingrese su nombre: ");

		edad=parseInt(prompt("Ingrese su edad: "));
		while(!(edad >= 17 && edad <=100)){
			edad=parseInt(prompt("Error. Ingrese una edad válida: "));
		}

		sexo=prompt("Ingrese sexo masculino/femenino/no binario: ").toLowerCase();
		while(sexo != "masculino" && sexo != "femenino" && sexo !="no binario"){
			sexo=prompt("Error. Ingrese su sexo: masculino/femenino/no binario: ").toLowerCase();
		}
	
		puesto=prompt("Ingrese puesto 'programador'/'analista'/'Qa': ").toLowerCase();
		while(puesto != "programador" && puesto != "analista" && puesto !="qa"){
			puesto=prompt("Error. Ingrese su puesto 'programador'/'analista'/'Qa': ").toLowerCase();
		}
		
		sueldo=parseInt(prompt("Ingrese su sueldo: (entre $15000 y $70000) "));
		while(!(sueldo >= 15000 && sueldo <= 70000 )){
			sueldo=parseInt(prompt("Error. Ingrese su sueldo: (entre $15000 y $70000) "));
		}
	
		if(puesto == "programador"){
			acumProg+=sueldo;
			contSueldoProg++;
		}
		else if ( puesto == "analista"){
			acumAnalis+=sueldo;
			contSueldoAnalista++;	
		}
		else{
			acumQa+=sueldo;
			contSueldoQa++;
		}
		
		if( flag || sueldo > mayorSueldo  ){
			mayorSueldo= sueldo;
			sexoMayorSueldo=sexo;
			flag=0;
		}

		if(sexo=="femenino"){
			if(flagFemMayorSueldo || sueldo > femMayorSueldo){
				femMayorSueldo=sueldo;
				nombreFemMayorSueldo=nombre;
				flagFemMayorSueldo=0;
				flagEmpleadoFemenino=0;
			}
		}

		if(puesto=="programador" && sexo=="no binario" && sueldo > 20000 && sueldo < 55000){
			contSueldoProgNb++;
			flagProgramadorNb=0;
		}
		
		seguir = prompt("Desea seguir ingresando empleados? (s/n)")
		} while (seguir == "s") //fin do while

	promSueldAnalis = acumAnalis / contSueldoAnalista;
	promSueldProg = acumProg / contSueldoProg;
	promSueldQa = acumQa / contSueldoQa;

	console.log('a. EL promedio de sueldo de los Analistas es de ' + promSueldAnalis + ', el de los programadores es de ' + promSueldProg + ', y el de los Qa es de '+ promSueldQa);
	console.log('b. Quien percibe el mayor sueldo es de sexo ' + sexoMayorSueldo);

	if (flagEmpleadoFemenino){
		console.log('c. No hay ingresdadas empleadas femeninas.');
	}
	else{
		console.log('c. La empleada femenina con mayor sueldo se llama: '+ nombreFemMayorSueldo);
	}
	
	if(flagProgramadorNb){
		console.log('d.No hay programadores no binarios que ganen entre $20000 y $55000');
	}
	else{
		console.log('d. Hay ' + contSueldoProgNb + ' programadores no binarios que cobran entre $20000 y $55000');
	}



}
