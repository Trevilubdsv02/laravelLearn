app.factory("operadorasAPI",['$http', 'configPasta', function($http, configPasta){
    var _ajaxOperadoras = function() {
    return $http.get( configPasta.urlBase +"/listaOperadoras");
    };
    return {
      ajaxOperadoras: _ajaxOperadoras  
    };
}]);