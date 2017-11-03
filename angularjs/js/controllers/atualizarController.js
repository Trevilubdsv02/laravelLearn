app.controller('atualizarController',['$sanitize', '$scope', '$timeout', 'contatosAPI', 'operadorasAPI', '$routeParams', '$location', '$route', function($sanitize, $scope, $timeout, contatosAPI, operadorasAPI, $routeParams, $location, $route){
    
    var that = this;    
    var pageid = $routeParams.id;
       /*
        Data
       */
    
    //form de atualização//
    that.formatt = [];
    /////////////////////////////////
    that.operadoras=[];
    that.cores =[
        {nome:"Azul", cor:"blue"},
        {nome:"Vermelho", cor:"red"}
    ];
        
        /*
         Methods
        */
    that.carregarOperadoras = function(){
        return $timeout(function() {
            operadorasAPI.ajaxOperadoras().then(function (response){
                    that.operadoras = response.data;
                console.log(that.operadoras);
            }); 
        });
    };
    that.carregarOperadoras();
    that.carregarUmContato = function(pageid){
        contatosAPI.ajaxUmContato(pageid).then(function(response){
            console.log(response.data);
            that.formatt = (response.data);
        });
    };
    that.carregarUmContato(pageid);
    
    that.atualizarContato = function()
    {
        
        contatosAPI.attContatos(that.formatt[0], that.formatt[0].id).then(function(response){
            console.log(response);
        });
        $location.path('/contatos');
        $route.reload();
    };
    console.log(pageid);
    
}]);