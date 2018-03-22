angular.module('app', []);

var appCtrl = function ($scope, loc8rData, geolocation) {
    $scope.message = "Checking your location";
}

angular
    .module('app')
    .controller('appCtrl', appCtrl);



var itemListControl = function ($scope) {
    $scope.items = {

            name: 'iPhone 5s',
            description: 'Apple iPhone 5s - Verizon',
            startingPrice: 100,
            bids: { }

    }
};

angular
    .module('app')
    .controller('itemListControl', itemListControl);


var listItems = function ($http) {
    return $http.get('/api/items/5a989b1a8490a7e67240873c');
};

var getListItems = function($scope, listItems) {
    $scope.message = "Searching the MongoDB";
    listItems
        .success(function (data) {
            $scope.data = {listItems: data};
        })
        .error(function (e) {
            $scope.message = "Sorry something has gone awry";
        });
};

angular
    .module('app')
    .controller('getListItems', getListItems)
    .service('listItems', listItems);