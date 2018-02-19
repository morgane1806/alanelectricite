angular.module('appControllers')


.controller('AppCtrl', function ($scope) {
    $scope.currentNavItem = 'accueil';
    $scope.toggle = true;
})

// Image proportionnelles à 800*300
.controller('CarouselCtrl', function ($scope) {
  $scope.myInterval = 3000;
  $scope.slides = [
    {
      image: 'image/carousel/alarme.jpg',
      title: 'Alarme'
    },
    {
      image: 'image/carousel/portail2.JPG',
      title: 'Sécurité & Vidéo Surveillance'
    },
    {
      image: 'image/carousel/eclairage1.JPG',
      title: 'Électricité'
    },
    {
      image: 'image/carousel/chauffagesol2.JPG',
      title: 'Chauffage et travaux intérieurs'
    },
    {
      image: 'image/carousel/cuisine2.JPG',
      title: 'Rénovation'
    },

  ];
})
