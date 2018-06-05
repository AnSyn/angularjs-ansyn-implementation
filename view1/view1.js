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
                            importsToExclude: [
                              Ansyn.Modules.AnsynRouterModule,
                              Ansyn.Modules.RouterModule
                            ],
                            providers: [],
                            customModules: []
                        };

                        const callback = ((api) => {
                            ansynAPIS[id] = api
                        });

                        ansynBuilder = new Ansyn({ id, config, options, callback });
                })
            }
        };

        $scope.loadOverlay = function (id) {
            const overlay = {
                'id': 'newId',
                'footprint': {
                    'type': 'MultiPolygon',
                    'coordinates': [[[[-119.45464065703361, 34.221987731476354], [-117.49034101969485, 33.8435279581249], [-117.98337041613146, 32.120404101964624], [-119.90912780210559, 32.49869792584401], [-119.45464065703361, 34.221987731476354]]]]
                },
                'sensorType': 'Landsat8L1G',
                'sensorName': 'Landsat8',
                'bestResolution': 30,
                'name': 'LC80410372018051LGN00',
                'imageUrl': 'https://tiles.planet.com/data/v1/Landsat8L1G/LC80410372018051LGN00/{z}/{x}/{y}.png?api_key=9f7afec0ebfb4e1ca0bf959a0050545b',
                'thumbnailUrl': 'https://api.planet.com/data/v1/item-types/Landsat8L1G/items/LC80410372018051LGN00/thumb?api_key=9f7afec0ebfb4e1ca0bf959a0050545b',
                'date': new Date('2018-02-20T18:28:30.196Z'),
                'photoTime': '2018-02-20T18:28:30.196489Z',
                'azimuth': 0,
                'sourceType': 'PLANET',
                'isGeoRegistered': true
            };

            ansynAPIS[id].displayOverLay(overlay)
        }
        $scope.changeMapLayout = function (id) {
            ansynAPIS[id].changeMapLayout('layout2')
        }
        $scope.changeWindowLayout = function (id) {
            const windowLayout = {
                menu: false,
                statusBar: true,
                timeLine: true,
                contextSun: true,
                toolsOverMenu: true
            };
            ansynAPIS[id].changeWindowLayout(windowLayout)
        }
        $scope.getMapPosition = function (id) {
            ansynAPIS[id].mapPosition$.subscribe(position => {
                    const pos = JSON.stringify(position.payload.position.projectedState.center);
                $scope.position = pos
                console.log(position)
            })

        }
        $scope.setMapPosition = function (id) {
            const position = [-117.89788973855977, 33.77329129691691];
            ansynAPIS[id].goToPosition(position)
        }
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

            ]
            setInterval(() => {
                ansynAPIS[id].setOutSourceMouseShadow(coords[Math.floor(Math.random() * 10)]);
            }, 1000);

        }
        $scope.getMouseShadow = function (id) {
            ansynAPIS[id].getShadowMouse(pointerMove$ => pointerMove$.subscribe(point => console.log(point)))

        }


        }]);




