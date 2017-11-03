app.config(['$routeProvider', 'configPasta',  function($routeProvider, configPasta){
    
    $routeProvider.when("/contatos",{
       templateUrl:   configPasta.viewsRoute +"/contatos.html",
    });
    
    $routeProvider.when("/novoContato",{
        templateUrl:  configPasta.viewsRoute +"/novoContato.html",
    });
    $routeProvider.when("/atualizarContato/:id",{
        templateUrl:  configPasta.viewsRoute +"/atualizarContato.html",
    });
    
    $routeProvider.otherwise("/contatos");
        
}]);