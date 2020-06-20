"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var randomDate = function (start, end) {
    var date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return date.getTime();
};
var locationArray = [];
var filter = 'byName';
var LocationClass = (function () {
    function LocationClass(name, city, zipCode, address, img) {
        this.createdAt = randomDate(new Date(2012, 0, 1), new Date());
        this.name = name;
        this.city = city;
        this.zipCode = zipCode;
        this.address = address;
        this.img = img;
        this.html = this.display();
        locationArray.push(this);
    }
    LocationClass.prototype.display = function () {
        var time = moment(this.createdAt).format('MMMM Do YYYY, h:mm:ss a');
        return "<div class=\"col-12 col-md-6 col-lg-3\">\n                    <div class=\"card mb-4 bg-info text-black\"> \n                        <img src=" + this.img + " class=\"d-none d-md-inline-block d-none d-md-inline-block card-img-top img-same\" alt=\"...\">\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\">" + this.name + "</h5>\n                            <p class=\"card-text\">" + this.address + "</p>\n                            <p class=\"card-text\">" + this.zipCode + " " + this.city + "</p>\n                            <a class=\"btn btn-warning\" data-toggle=\"modal\" data-target=\"#modal\" data-pic=" + this.img + ">Show</a>\n                        </div>\n                        <div class=\"card-footer text-muted font-italic\">\n                            " + time + "\n                        </div>\n                    </div>\n                </div>";
    };
    return LocationClass;
}());
var Restaurant = (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant(name, city, zipCode, address, img, type, phoneNumber, webAddress) {
        var _this = _super.call(this, name, city, zipCode, address, img) || this;
        _this.type = type;
        _this.phoneNumber = phoneNumber;
        _this.webAddress = webAddress;
        _this.html = _this.display();
        return _this;
    }
    Restaurant.prototype.display = function () {
        var time = moment(this.createdAt).format('MMMM Do YYYY, h:mm:ss a');
        return "<div class=\"col-12 col-md-6 col-lg-3\">\n                    <div class=\"card mb-4 bg-info text-black\"> \n                        <img src=" + this.img + " class=\"d-none d-md-inline-block card-img-top img-same\" alt=\"...\">\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\">" + this.name + "</h5>\n                            <p class=\"card-text\">" + this.address + "</p>\n                            <p class=\"card-text\">" + this.zipCode + " " + this.city + "</p>\n                            <p class=\"card-text\">" + this.type + "</p>\n                            <p class=\"card-text\">" + this.phoneNumber + "</p>\n                            <p><a href=" + this.webAddress + ">" + this.webAddress + "</a></p>\n                            <a class=\"btn btn-warning\" data-toggle=\"modal\" data-target=\"#modal\" data-pic=" + this.img + ">Show</a>\n                        </div>\n                        <div class=\"card-footer text-muted font-italic\">\n                            " + time + "\n                        </div>\n                    </div>\n                </div>";
    };
    return Restaurant;
}(LocationClass));
var Events = (function (_super) {
    __extends(Events, _super);
    function Events(name, city, zipCode, address, img, eventDate, eventTime, price, webAddress) {
        var _this = _super.call(this, name, city, zipCode, address, img) || this;
        _this.eventDate = eventDate;
        _this.eventTime = eventTime;
        _this.price = price;
        _this.webAddress = webAddress;
        _this.html = _this.display();
        return _this;
    }
    Events.prototype.display = function () {
        var time = moment(this.createdAt).format('MMMM Do YYYY, h:mm:ss a');
        return "<div class=\"col-12 col-md-6 col-lg-3\">\n                    <div class=\"card mb-4 bg-info text-black\"> \n                        <img src=" + this.img + " class=\"d-none d-md-inline-block card-img-top img-same\" alt=\"...\">\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\">" + this.name + "</h5>\n                            <p class=\"card-text\">" + this.address + "</p>\n                            <p class=\"card-text\">" + this.zipCode + " " + this.city + "</p>\n                            <p class=\"card-text\">" + this.eventDate + " " + this.eventTime + "</p>\n                            <p class=\"card-text\">" + this.price + " \u20AC</p>\n                            <p><a href=" + this.webAddress + ">" + this.webAddress + "</a></p>\n                            <a class=\"btn btn-warning\" data-toggle=\"modal\" data-target=\"#modal\" data-pic=" + this.img + ">Show</a>\n                        </div>\n                        <div class=\"card-footer text-muted font-italic\">\n                            " + time + "\n                        </div>\n                    </div>\n                </div>";
    };
    return Events;
}(LocationClass));
var location1 = new LocationClass('St. Charles Church', 'Vienna', '1010', 'Karlsplatz 1', 'img/charles.jpeg');
var location2 = new LocationClass('Schönbrunn Park', 'Vienna', '1130', 'Maxingstraße 13b', 'img/schonbrunn.jpeg');
var location3 = new LocationClass('Karlsplatz', 'Vienna', '1040', 'Karlplatz', 'img/karlsplatz.jpeg');
var location4 = new LocationClass('Kahlenber', 'Vienna', '1190', 'Kahlenberg', 'img/berg.jpeg');
console.log(locationArray[0]);
var restaurant1 = new Restaurant('ON Restaurant', 'Vienna', '1050', 'Wehrgasse 8', 'img/onwien.jpg', 'Chinese', '+43(1)5854900', 'http://www.restaurant-on.at/');
var restaurant2 = new Restaurant('BioFrische', 'Vienna', '1150', 'Stutterheimstraße 6', 'img/biofrische.jpg', 'Indian', '+43(1) 9529215', 'biofrische.wien');
var restaurant3 = new Restaurant('Plachutta', 'Vienna', '1010', 'Oper', 'img/plachutta.jpg', 'Viennese', '+43(677) 111111', 'https://www.plachutta.at/');
var restaurant4 = new Restaurant('Joma', 'Vienna', '1010', 'Hoher Markt', 'img/joma.jpg', 'International', '+43(01) 222222', 'https://www.joma.at');
var event1 = new Events('Cats - the musical', 'Vienna', '1010', 'Ronacher Theater, Seilerstätte 9', 'img/cats.jpg', 'Fr., 15.12.2020', '20:00', 120, 'http://catsmusical.at');
var event2 = new Events('Guns ‘n Roses', 'Vienna', '1020', 'Ernst-Happel Stadion, Meiereistraße 7', 'img/gunsroses.jpg', 'Sat, 09.06.2020', '19:30', 95.50, 'www.gunsandroses.com/');
var event3 = new Events('Romeo & Julia', 'Vienna', '1006', 'Theater an der Wien, Linke WIenzeile 6', 'img/romeo.jpg', 'Sat, 30.12.2020', '11:00', 40.50 , 'https://www.theater-wien.at/de/home/');
var event4 = new Events('Neustifter Kirtag', 'Vienna', '1190', 'Neustift, Rathstraße 44-54,', 'img/neustift.jpg', 'Fri, 10.11.2020', '11:00', 30.50, 'https://www.events.at/c/wien/kirtag/');
console.log('LOCATION ARRAY', locationArray);
console.log(locationArray[0] instanceof LocationClass);
var appendHTMLToDOM = function (locations) {
    $('.events').html('');
    $('.restaurants').html('');
    $('.places').html('');
    locations.map(function (location) {
        if (location instanceof Events) {
            $('.events').append(location.html);
        }
        else if (location instanceof Restaurant) {
            $('.restaurants').append(location.html);
        }
        else if (location instanceof LocationClass) {
            $('.places').append(location.html);
        }
    });
};
appendHTMLToDOM(locationArray);
var sort = function (sortBy) {
    sortLocations(locationArray, sortBy);
    appendHTMLToDOM(locationArray);
};
var sortLocations = function (locations, sortBy) {
    if (sortBy === 'byName') {
        return locations.sort(function (a, b) {
            if (a.name.toLowerCase() < b.name.toLowerCase()) {
                return -1;
            }
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return 1;
            }
            return 0;
        });
    }
    else if (sortBy === 'descending') {
        return locations.sort(function (a, b) { return b.createdAt - a.createdAt; });
    }
    else if (sortBy === 'ascending') {
        return locations.sort(function (a, b) { return a.createdAt - b.createdAt; });
    }
    else {
        return locations;
    }
};
$('.btn').on('click', function (e) {
    var pictureSource = e.target.dataset.pic;
    $('.modal-body').html('');
    $('.modal-body').append("<img src=" + pictureSource + " class=\"card-img-top img-same\" alt=\"picutre of the clikced element\">");
});
//# sourceMappingURL=script.js.map