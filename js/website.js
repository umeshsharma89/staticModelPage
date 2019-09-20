angular.module('website', ['ngRoute']).
    config(function ($routeProvider) {
        $routeProvider.
            when('/home', {templateUrl: 'partials/home.html', controller: 'HomeCtrl'}).
            otherwise({redirectTo: '/home'});
    })
    .controller('HomeCtrl', function ($scope) {
        $scope.title = 'Home Page';
        $scope.body = 'This is the about home body';
        $scope.modalShown = false;
        $scope.likelihood = 'High';
        $scope.likelihoodChange = false;
        $scope.modalShownmodalShownConfirm = true;
        $scope.toggleModal = function () {
            $scope.modalShown = !$scope.modalShown;
        };
        $scope.toggleModalConfirm = function () { 
            $scope.modalShown = !$scope.modalShown;
            $scope.modalShownConfirm = !$scope.modalShownConfirm;
            // setTimeout(function () {
            //   document.querySelector('#desc').classList.toggle('show')
            // }, 500)
         }
        $scope.likelihoodFunc = function () {
          $scope.likelihoodChange = true
        }
        $scope.onSave = function () { 
          $scope.toggleModal();
          if ($scope.likelihoodChange) {
            $scope.toggleModalConfirm()
        }}
        $scope.backFunc = function () {
          $scope.toggleModalConfirm();
          $scope.toggleModal()
        }
    }).directive('modalDialog', function( ){
 
    return {
      restrict: 'E',
      scope: {
        show : '='
      },
      replace: true, // This will replace the template below
      transclude: true, // This says we want to insert custom content inside an element with our directive
      link: function(scope, element, attrs) {  // This gives us the scope element and attributes from the current state
        
        // initialize Style Obj ...
        scope.dialogStyle = {};
        if (attrs.width)
          scope.dialogStyle.width = attrs.width;
        if (attrs.height)
          scope.dialogStyle.height = attrs.height;
        scope.hideModal = function() {
          scope.show = false;
        };
      },
      template: "<div class='ng-modal transition' ng-show='show'><div class='ng-modal-overlay transition' ng-click='hideModal()'></div><div class='ng-modal-dialog transition' style='border-radius: 10px;' ng-style='dialogStyle'><div class='ng-modal-close' ng-click='hideModal()'>X</div><div class='ng-modal-dialog-content' ng-transclude></div></div></div>"
    };
  });

  // .directive('modalDialogConfirm', function( ){
 
  //   return {
  //     restrict: 'E',
  //     scope: {
  //       show : '='
  //     },
  //     replace: true, // This will replace the template below
  //     transclude: true, // This says we want to insert custom content inside an element with our directive
  //     link: function(scope, element, attrs) {  // This gives us the scope element and attributes from the current state
        
  //       // initialize Style Obj ...
  //       scope.dialogStyle = {};
  //       if (attrs.width)
  //         scope.dialogStyle.width = attrs.width;
  //       if (attrs.height)
  //         scope.dialogStyle.height = attrs.height+15;
  //       scope.hideModal = function() {
  //         scope.show = false;
  //       };
  //       console.log(scope.dialogStyle)
  //     },
  //     template: "<div class='ng-modal transition' ng-show='show'><div class='ng-modal-overlay transition' ng-click='hideModal()'></div><div class='ng-modal-dialog transition' style='border-radius: 10px;' ng-style='dialogStyle'><div class='ng-modal-close' ng-click='hideModal()'>X</div><div class='ng-modal-dialog-content' ng-transclude></div></div></div>"
  //   };
  // })
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
    console.log("tooltip initialize")
  })
$(function () {
  $('[data-toggle="popover"]').popover()
})
