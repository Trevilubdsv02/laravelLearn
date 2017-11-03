        app.controller("helloWorldctrl",['$sanitize', '$scope', 'contatosAPI', 'operadorasAPI', '$timeout', '$location','$window' ,function($sanitize, $scope, contatosAPI, operadorasAPI, $timeout, $location, $window){
            
            var that = this;
            
       /*
        Data
       */   
            that.filteredItems = $scope.lul;
            that.foto ="http://lorempixel.com/50/50/people?";
            that.lista ="Lista Telefonica";
            that.nome="weege";
            that.telefone="starcell";
            that.contatos= [];
            that.hora = new Date();
            that.operadoras = [];
            that.cores =[
              {nome:"Azul", cor:"blue"},
              {nome:"Vermelho", cor:"red"}
            ];
            that.googleUrl = 'http://google.com';
        /*
         Methods
        */
            
            that.carregarCores = function(){return $timeout(function() {}, 650);};
            that.carregarContatos = function(){
                contatosAPI.ajaxContatos().then(function (response) {
                     that.contatos = response.data;
                              
                }).catch(function(response){
                     that.error = "Não foi possível carregar os Dados!";     
                });                   
            };
            
            that.carregarOperadoras = function(){
                return $timeout(function() {
                operadorasAPI.ajaxOperadoras().then(function (response){
                    that.operadoras = response.data;
                }); 
                    }, 450);
            };
            
            that.adicionarContato = function(testA){
                that.formdata = {
                    nome : testA.nome,
                    telefone : testA.telefone,
                    operadora : testA.operadora,
                    cor : testA.cor
                };
                
                contatosAPI.sbmContatos(that.formdata).then(function (response){
                    console.log(response);
                });
               // console.log(that.contatos);
                delete $scope.testA;
                $scope.contatoForm.$setPristine();
                $scope.contatoForm.$setUntouched();
               // $window.location.href = 'http://localhost/blog/contacts/register';
                $location.path('/contatos');
            };
            
            that.apagarContatos = function(valorRecebido){
                that.contatos = valorRecebido.filter(function(valorRecebido2) {
                    if (!valorRecebido2.selecionado) return valorRecebido2; 
                });
            };
            
            that.isContatoSelecionado = function(contatos){
                return contatos.some (function(contato){
                   return contato.selecionado; 
                });
            };    
            
            that.ordenarPor = function(campo){
                that.criterioDeOrdenacao = campo;
                that.direcaoDeOrdenacao = !that.direcaoDeOrdenacao;
            };
            
            that.carregarContatos();
            that.carregarOperadoras();
        }
    ]);