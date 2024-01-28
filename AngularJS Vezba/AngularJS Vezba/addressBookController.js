var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
  $scope.showornot=false;
  $scope.myAddressBG="black";
  $scope.provera=false;
  $scope.lista = [
    {id: 1, ime:'Anastasija', prezime: 'Trajkovic', broj: '0649444457', imejl: 'anastasija.trg@gmail.com'},
    {id: 2, ime:'Luka', prezime: 'Stosic', broj: '0647896557', imejl: 'luka.stosic@gmail.com'},
    {id: 3, ime:'Katarina', prezime: 'Nikolic', broj: '0647896541', imejl: 'kaca.nikolic@gmail.com'}
  ];

  $scope.orderByMe = function(x) {
    $scope.myOrderBy = x;
  }

  $scope.edit = function(x) {
    $scope.provera=true;
    console.log($scope);
    $scope.Ime = $scope.lista[x].ime;
    $scope.Prezime = $scope.lista[x].prezime;
    $scope.Telefon = $scope.lista[x].broj;
    $scope.Email = $scope.lista[x].imejl;
    $scope.selectedIndex = x;
    $scope.provera=false;
  }

  $scope.delete = function(x) {
    $scope.sem=true;
    $scope.lista.splice(x, 1);
    $scope.sem=false;
  }

  $scope.addRecord = function(){
    $scope.provera=true;

    for (var i = 0; i < $scope.lista.length; i++) {
      if ($scope.lista[i].broj === $scope.Telefon && i !== $scope.selectedIndex) {
        $scope.showornot=true;
        return;
      }
    }

    const pom = {id: $scope.lista.length+1, ime: $scope.Ime, prezime: $scope.Prezime, broj: $scope.Telefon, imejl: $scope.Email};
    if(!$scope.Ime || !$scope.Prezime || !$scope.Telefon || !$scope.Email)
    {
        $scope.showornot=true;
        return;
    }

    if ($scope.selectedIndex !== undefined) {
      $scope.lista[$scope.selectedIndex] = pom;
      $scope.selectedIndex = undefined;
    } else {
      $scope.lista.push(pom);
    }
    
    $scope.provera=false;
  }   
});