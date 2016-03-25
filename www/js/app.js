// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])
 
.controller('AppCtrl', function($scope) {
  $scope.data = {
    speechText: ''
  };
  $scope.recognizedText = '';
 
  $scope.speakText = function() {
    TTS.speak({
           text: $scope.data.speechText,
           locale: 'en-GB',
           rate: 1.5
       }, function () {
           // Do Something after success
       }, function (reason) {
           // Handle the error case
       });
  };
 
  $scope.record = function() {
    var recognition = new SpeechRecognition();
    recognition.onresult = function(event) {
        if (event.results.length > 0) {
            $scope.recognizedText = event.results[0][0].transcript;
            $scope.$apply()
        }
    };
    recognition.start();
  };
});
