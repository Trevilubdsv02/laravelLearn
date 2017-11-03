app.config(['$mdThemingProvider', function($mdThemingProvider) {

  $mdThemingProvider.definePalette('amazingPaletteName', {
    '50': '#FFED00',
    '100': '#FF0000',
    '200': '#FF00AB',
    '300': '#0047AB', //primary - raised hue-1
    '400': '#00EDFF',
    '500': '#FFFFFF', //primary - raised
    '600': '#000000', //primary - raised :hover 
    '700': '#662F00',
    '800': '#FF00AB', //primary - raised hue-2
    '900': '#FF7B00',
    'A100': '#FF7B00', //primary - raised hue-3   //accent - raised hue-1
    'A200': '#FF00AB', //accent - raised hue-3      //checkbox
    'A400': '#0047AB', //accent - raised hue-2
    'A700': '#00B500', //accent - raised :hover
    'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                        // on this palette should be dark or light
    'contrastDarkColors': ['50', '100', // não se aplica a mudança de cor no hover
     '200', '300', '400', 'A100'],
    'contrastLightColors': ['A700']
  });

  $mdThemingProvider.theme('default')
    .primaryPalette('blue' , {})
    .accentPalette('yellow')
    .warnPalette('red');

}]);