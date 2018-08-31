function multiplicacao (a,b){
  
		 var resultado = a*b;
		 
		 console.log ("imprimindo resultado " + resultado);
		 return a*b;
		 }
		 
		 var ResultadoDaFuncao=multiplicacao (5,2);
		// alert (ResultadoDaFuncao);

function mostraCarros (recebeCarros){
	var i;
	for ( i=0; i <recebeCarros.length;i++){
		console.log (recebeCarros[i]);
	}
}

var Carros = ["Mustang", "ford", "camaro", "companheiro", "Vo ve e te aviso"]

mostraCarros (Carros);{
console.log ("Quantidade de objetos na função carros: " + Carros.length);}