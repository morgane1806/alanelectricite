angular.module('appControllers')


.controller('AppCtrl', function ($scope) {
    $scope.currentNavItem = 'accueil';
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
      image: 'image/carousel/videoSurveillance.jpg',
      title: 'Vidéo Surveillance'
    },
    {
      image: 'image/carousel/lumiere.jpg',
      title: 'Électricité'
    }
  ];
})
