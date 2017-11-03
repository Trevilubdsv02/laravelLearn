app.directive("uiAlert",['configPasta', function(configPasta) {
    
   return {
        templateUrl: configPasta.viewsRoute+"/ui-alert.html",
        restrict:"AE",
        scope:{
            title: "@",
        },
        transclude:true
   };
}]);