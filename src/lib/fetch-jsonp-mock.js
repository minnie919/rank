import 'whatwg-fetch';
(function (global, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['exports', 'module'], factory);
    } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
        factory(exports, module);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, mod);
        global.fetchJsonp = mod.exports;
    }
})(this, function (exports, module) {
    'use strict';

    var fetchJsonp =  function(url){
        var urlArr = url.url.split('/');
        var dataurl = urlArr[urlArr.length - 1];
        return $.ajax({
            type: 'GET',
            url: '/data/' + dataurl + '.json',
            dataType: 'json',
            success: function(json){
                url.success(json);
            }
        });
    };
    // var fetchJsonp = function fetchJsonp(url) {
    //
    //     return new Promise(function (resolve) {
    //
    //
    //
    //         fetch('/data/' + dataurl + '.json')
    //             .then(function (response) {
    //                 return response.json();
    //             }).then(function (json) {
    //             resolve({
    //                 json: function () {
    //                     return json;
    //                 }
    //             });
    //         })
    //
    //
    //     });
    // };


    module.exports = fetchJsonp;
});
