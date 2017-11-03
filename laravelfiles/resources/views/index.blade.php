<!doctype html>
<html lang="en">
  <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>My HTML File</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic">
    
    <link rel="stylesheet" type="text/css" href="{{ URL::asset('minified/cssmin/all/myangularcss.min.css')}}"/>    
    <link rel="stylesheet" type="text/css" href="{{ URL::asset('node_modules/angular-material/angular-material.css')}}" />    
    <link rel="stylesheet" type="text/css" href="{{URL::asset('node_modules/bootstrap/dist/css/bootstrap.css')}}" />
    
    <script src="{{ URL::asset('minified/jsmin/angulararchives.min.js')}}"></script>
    <script src="{{ URL::asset('minified/jsmin/myangulararchives.min.js')}}"></script>

    
  </head>
  <body ng-app="helloWorld">
    <div ng-view></div>
  </body>
</html>