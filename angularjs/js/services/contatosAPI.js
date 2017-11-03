app.factory("contatosAPI",['$http', 'configPasta', '$routeParams', function($http, configPasta, $routeParams){
   $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
    
    var _ajaxContatos = function() {
        return $http.get( configPasta.urlBase + "/contacts" ) ;  
    };
    var _ajaxUmContato = function(id) {
        return $http.get( configPasta.urlBase + "/contacts/"+id);  
    };
    var _attContatos = function(frmData, id) 
    {
        return $http({
             method  : 'POST',
             url     : configPasta.urlBase +"/contacts/"+id+"/update",
             data    : frmData, // pass in data as strings
             headers : { 'Content-Type': 'application/json' }  // set the headers so angular passing info as form data (not request payload)
            });
    };
    var _sbmContatos = function(recebeA) 
    {
        return $http({
             method  : 'POST',
             url     : configPasta.urlBase + "/contacts/register",
             data    : recebeA, // pass in data as strings
             headers : { 'Content-Type': 'application/json' }  // set the headers so angular passing info as form data (not request payload)
            });
    };
    
    

    
    
    
    return {
        ajaxContatos: _ajaxContatos,
        ajaxUmContato: _ajaxUmContato,
        attContatos: _attContatos,
        sbmContatos: _sbmContatos
    };
    
}]);