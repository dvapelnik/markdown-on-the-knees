angular.module('markedApp', [])
    .filter('markedFilter', function () {
        return function (input) {
            return input === undefined ? input : marked(input);
        }
    })
    .filter('markedTrustHtml', ['$sce', function ($sce) {
        return function (input) {
            return input === undefined ? input : $sce.trustAsHtml(marked(input));
        }
    }]);
