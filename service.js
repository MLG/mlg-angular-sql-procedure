angular.module('SQLCall', [])
  .service('SQLCall', function ($http) {
    "use strict";

    var objectDefinition = {
      call: function (robot, params) {
        if (!robot) {
          console.log('robot name required');
          return false;
        }
        var requestParams = {robot: robot};
        if (angular.isObject(params)) {
          requestParams.params = Object.keys(params).join(',');
        }
        angular.extend(requestParams, params);
        return $http.get('/sql_procedure/call', {params: requestParams});
      }
    };

    return objectDefinition;
  });