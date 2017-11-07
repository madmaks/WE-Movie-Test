angular.module("movieList", ['ui.bootstrap']);
angular.module("movieList").controller("movieCtrl", function ($scope, $http, $uibModal) {
        var $ctrl = this;
        API_BASE_URL = 'https://api.themoviedb.org/3/';
        IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/';
        API_KEY = 'ADD API KEY';
        IMAGE_SIZE = 'w185';
        var image_size = 'w185';
        // Set image size based on screen size
        if(screen.width > 768){
            image_size = 'w342';
        }


        $http.get(API_BASE_URL + 'movie/popular?api_key=' + API_KEY)
            .then(function (response) {

                var data = response.data;
                var status = response.status;
                var statusText = response.statusText;
                var headers = response.headers;
                var config = response.config;

                $scope.movies = data.results;
                $scope.page = data.page;
                $scope.total_pages = data.total_pages;
                $scope.total_results = data.total_results;

                console.log(response);
                console.log($scope.movies);
            });

        $scope.setSelectedMovie = function (movie) {
            console.log('GO ID=' + movie.id);
            console.log(IMAGE_BASE_URL+image_size+movie.poster_path);

            $scope.movieTitle = movie.original_title;
            $scope.movieImage =  IMAGE_BASE_URL+image_size+movie.poster_path;
            $scope.movieDesc = movie.overview;
            $scope.movieReleaseDate = movie.release_date;
            $scope.movieRating = movie.vote_average;

            document.getElementById("movieDetails").style.width = "100%";
        };

    $scope.closeMovie = function () {
        document.getElementById("movieDetails").style.width = "0%";
    };

    }
);
