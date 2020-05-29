(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var menu = this;
  menu.searchTerm ="";

  menu.getMenu = function(){
  var promise = MenuSearchService.getMatchedMenuItems();

  promise.then(function (response) {

    //menu.found = response.data.menu_items;
    menu.found=[];
     var categories;
     categories= response.data.menu_items;

     for(var i=0; i< categories.length;i++)
     {
       var description=categories[i].description;
       if(description.search(menu.searchTerm) !== -1)
       {
         menu.found.push(categories[i])
       }
     }

    })
    .catch(function (error) {
      console.log("Something went terribly wrong.");
    })
  };
  menu.removeItem = function (itemIndex) {
      menu.found.splice(itemIndex, 1);
   };

}


MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function () {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    });

    return response;
  };

}

})();
