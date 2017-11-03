app.filter("name", function(){
    return function(input){
        var listaDeNomes = input.split(" ");
        var listadeNomesFormatada = listaDeNomes.map(function(nome){
           if (/(da|DA|Da|dA|de|DE|dE|DE|do|DO|Do|dO|das|dos)/.test(nome)) return nome.substring(0).toLowerCase();
           return nome.charAt(0).toUpperCase() + nome.substring(1).toLowerCase(); 
        });
        
        return listadeNomesFormatada.join(" ");
    };
});