'use strict';


angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', ['$scope', function ($scope) {
        let ansynBuilder;
        let ansynAPIS = {};
        $scope.initAnsyn = function (id) {
            if (Ansyn) {
                fetch('assets/config/app.config.json')
                    .then(response => response.json())
                    .then(config => {
                        const options = {
                            providers: [],
                            customModules: []
                        };

                        const callback = ((api) => {
                            ansynAPIS[id] = api;
                        });

                        ansynBuilder = new Ansyn({id, config, options, callback});
                    })
            }
        };

        $scope.loadOverlay = function (id) {
            const overlay = {
                    "id": "S2A_MSIL1C_20180708T182921_N0206_R027_T11SMT_20180708T221438",
                    "footprint": {
                        "type": "MultiPolygon",
                        "coordinates": [[[[-116.89444287520452, 33.89457226182276], [-116.89510325389628, 33.3513170774216], [-118.07511005827479, 33.34670729904315], [-118.08758328379399, 34.33683322524422], [-116.89388597356348, 34.34161747856573], [-116.89444287520452, 33.89457226182276]]]]
                    },
                    "sensorType": "Sentinel2L1C",
                    "sensorName": "Sentinel-2A",
                    "bestResolution": 10,
                    "name": "S2A_MSIL1C_20180708T182921_N0206_R027_T11SMT_20180708T221438",
                    "imageUrl": "https://tiles.planet.com/data/v1/Sentinel2L1C/S2A_MSIL1C_20180708T182921_N0206_R027_T11SMT_20180708T221438/{z}/{x}/{y}.png?api_key=98d4e5a377594e7b80f692d9d487ff26",
                    "thumbnailUrl": "https://api.planet.com/data/v1/item-types/Sentinel2L1C/items/S2A_MSIL1C_20180708T182921_N0206_R027_T11SMT_20180708T221438/thumb?api_key=98d4e5a377594e7b80f692d9d487ff26",
                    "date": new Date("2018-07-08T18:36:56.649Z"),
                    "photoTime": "2018-07-08T18:36:56.649Z",
                    "azimuth": 0.07103490055616922,
                    "sourceType": "PLANET",
                    "isGeoRegistered": true
                }
            ;

            ansynAPIS[id].displayOverLay(overlay)
        };

        $scope.setOverlays = function (id) {
            const overlays = [
                    {
                        "id": "S2A_MSIL1C_20180708T182921_N0206_R027_T11SMT_20180708T221438",
                        "footprint": {
                            "type": "MultiPolygon",
                            "coordinates": [[[[-116.89444287520452, 33.89457226182276], [-116.89510325389628, 33.3513170774216], [-118.07511005827479, 33.34670729904315], [-118.08758328379399, 34.33683322524422], [-116.89388597356348, 34.34161747856573], [-116.89444287520452, 33.89457226182276]]]]
                        },
                        "sensorType": "Sentinel2L1C",
                        "sensorName": "Sentinel-2A",
                        "bestResolution": 10,
                        "name": "S2A_MSIL1C_20180708T182921_N0206_R027_T11SMT_20180708T221438",
                        "imageUrl": "https://tiles.planet.com/data/v1/Sentinel2L1C/S2A_MSIL1C_20180708T182921_N0206_R027_T11SMT_20180708T221438/{z}/{x}/{y}.png?api_key=98d4e5a377594e7b80f692d9d487ff26",
                        "thumbnailUrl": "https://api.planet.com/data/v1/item-types/Sentinel2L1C/items/S2A_MSIL1C_20180708T182921_N0206_R027_T11SMT_20180708T221438/thumb?api_key=98d4e5a377594e7b80f692d9d487ff26",
                        "date": new Date("2018-07-08T18:36:56.649Z"),
                        "photoTime": "2018-07-08T18:36:56.649Z",
                        "azimuth": 0.07103490055616922,
                        "sourceType": "PLANET",
                        "isGeoRegistered": true
                    },
                    {
                        "id": "S2A_MSIL1C_20180519T182921_N0206_R027_T11SMT_20180519T232423",
                        "footprint": {
                            "type": "MultiPolygon",
                            "coordinates": [[[[-116.89442492347177, 33.909138052591665], [-116.89510325389628, 33.3513170774216], [-118.07511005827479, 33.34670729904315], [-118.08758328379399, 34.33683322524422], [-116.89388597356348, 34.34161747856573], [-116.89442492347177, 33.909138052591665]]]]
                        },
                        "sensorType": "Sentinel2L1C",
                        "sensorName": "Sentinel-2A",
                        "bestResolution": 10,
                        "name": "S2A_MSIL1C_20180519T182921_N0206_R027_T11SMT_20180519T232423",
                        "imageUrl": "https://tiles.planet.com/data/v1/Sentinel2L1C/S2A_MSIL1C_20180519T182921_N0206_R027_T11SMT_20180519T232423/{z}/{x}/{y}.png?api_key=98d4e5a377594e7b80f692d9d487ff26",
                        "thumbnailUrl": "https://api.planet.com/data/v1/item-types/Sentinel2L1C/items/S2A_MSIL1C_20180519T182921_N0206_R027_T11SMT_20180519T232423/thumb?api_key=98d4e5a377594e7b80f692d9d487ff26",
                        "date": new Date("2018-05-19T18:43:52.538Z"),
                        "photoTime": "2018-05-19T18:43:52.538Z",
                        "azimuth": 0.07086036763096977,
                        "sourceType": "PLANET",
                        "isGeoRegistered": true
                    }
                ]
            ;

            ansynAPIS[id].setOverlays(overlays)
        };

        $scope.changeMapLayout = function (id) {
            ansynAPIS[id].changeMapLayout('layout2')
        };
        $scope.changeWindowLayout = function (id) {
            const windowLayout = {
                menu: false,
                statusBar: true,
                timeLine: true,
                contextSun: true,
                toolsOverMenu: true
            };
            ansynAPIS[id].changeWindowLayout(windowLayout)
        };
        $scope.getMapPosition = function (id) {
            ansynAPIS[id].mapPosition$.subscribe(position => {
                const pos = JSON.stringify(position.payload.position.projectedState.center);
                $scope.position = pos;
                console.log(position)
            })

        };
        $scope.setMapPosition = function (id) {
            const position = [-117.89788973855977, 33.77329129691691];
            ansynAPIS[id].goToPosition(position)
        };
        $scope.setMouseShadow = function (id) {
            const coords = [
                [-117.89337288312173, 33.80392816773926],
                [-117.89308121984654, 33.803128387461086],
                [-117.89267289126127, 33.80223165523036],
                [-117.89241039431359, 33.80174693119338],
                [-117.89217706369344, 33.80140762273396],
                [-117.8921187310384, 33.80123796799978],
                [-117.89311038617407, 33.80140762273396],
                [-117.89057291567984, 33.8027406125144],
                [-117.88949376156158, 33.80295873613814],
                [-117.8892020982864, 33.80632746372551],
                [-117.90159778748237, 33.80804812952371],
                [-117.90699355807357, 33.80901750346732]

            ];
            setInterval(() => {
                ansynAPIS[id].setOutSourceMouseShadow(coords[Math.floor(Math.random() * 10)]);
            }, 1000);

        };
        $scope.getMouseShadow = function (id) {
            ansynAPIS[id].getShadowMouse(pointerMove$ => pointerMove$.subscribe(point => console.log(point)))

        }


    }]);




