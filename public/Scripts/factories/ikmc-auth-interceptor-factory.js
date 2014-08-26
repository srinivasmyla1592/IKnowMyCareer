ikmcApp.factory('authInterceptor',['$rootScope','$window',function($rootScope,$window){
    return {
        request: function(config){
            config.headers = config.headers || {};
            if($window.sessionStorage.token){
                config.headers.Authorization = 'Bearer '+ $window.sessionStorage.token;
            }
            return config;
        }
    };
}]);