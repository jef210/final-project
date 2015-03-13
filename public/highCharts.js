$(function () {
    $('#session-chart').highcharts({
        chart: {
            type: 'scatter',
            zoomType: 'xy'
        },
        title: {
            text: 'Clicks in Sections'
        },
        // subtitle: {
        //     text: 'Source: Heinz  2003'
        // },
        xAxis: {
            title: {
                enabled: true,
                text: 'Frequncy'
            },
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true
        },
        yAxis: {
            title: {
                text: 'Areas'
            }
        },
        legend: {
            layout: 'horizontal',
            align: 'top',
            verticalAlign: 'top',
            x: 250,
            y: 300,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
            borderWidth: 1
        },
        plotOptions: {
            scatter: {
                marker: {
                    radius: 5,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(100,100,100)'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                tooltip: {
                    headerFormat: '<b>{series.name}</b><br>',
                    pointFormat: '{point.x} cm, {point.y} kg'
                }
            }
        },
        series: [{
            name: 'Goals',
            color: 'rgba(223, 83, 83, .5)',
            data: [[91.2, 514.6], [167.5, 59.0], [159.5, 29.2], [157.0, 63.0], [145.8, 13.6]]

        }, 
        {
            name: 'Obstacles',
            color: 'rgba(223, 83, 83, .5)',
            data: [[161.2, 3.6], [111.5, 59.0], [133.5, 49.2], [157.0, 683.0], [123.8, 33.6]]
        },
        {
            name: 'Stories',
            color: 'rgba(223, 83, 83, .5)',
            data: [[261.2, 56.6], [164.5, 59.0], [139.5, 45.2], [157.0, 73.0], [155.8, 42.6]]
        },
        {
            name: 'Values',
            color: 'rgba(119, 152, 191, .5)',
            data: [[114.0, 64.6], [185.3, 81.8], [143.5, 80.7], [166.5, 92.6], [187.2, 58.8]]
                
        }]
    });
});







// $(function () {

//     // Give the points a 3D feel by adding a radial gradient
//     Highcharts.getOptions().colors = $.map(Highcharts.getOptions().colors, function (color) {
//         return {
//             radialGradient: {
//                 cx: 0.4,
//                 cy: 0.3,
//                 r: 0.5
//             },
//             stops: [
//                 [0, color],
//                 [1, Highcharts.Color(color).brighten(-0.2).get('rgb')]
//             ]
//         };
//     });

//     // Set up the chart
//     var chart = new Highcharts.Chart({
//         chart: {
//             renderTo: '#session-chart',
//             margin: 100,
//             type: 'scatter',
//             options3d: {
//                 enabled: true,
//                 alpha: 10,
//                 beta: 30,
//                 depth: 250,
//                 viewDistance: 5,

//                 frame: {
//                     bottom: { size: 1, color: 'rgba(0,0,0,0.02)' },
//                     back: { size: 1, color: 'rgba(0,0,0,0.04)' },
//                     side: { size: 1, color: 'rgba(0,0,0,0.06)' }
//                 }
//             }
//         },
//         title: {
//             text: 'Draggable box'
//         },
//         subtitle: {
//             text: 'Click and drag the plot area to rotate in space'
//         },
//         plotOptions: {
//             scatter: {
//                 width: 10,
//                 height: 10,
//                 depth: 10
//             }
//         },
//         yAxis: {
//             min: 0,
//             max: 10,
//             title: null
//         },
//         xAxis: {
//             min: 0,
//             max: 10,
//             gridLineWidth: 1
//         },
//         zAxis: {
//             min: 0,
//             max: 10
//         },
//         legend: {
//             enabled: false
//         },
//         series: [{
//             name: 'Reading',
//             colorByPoint: true,
//             data: [[1, 6, 5], [8, 7, 9], [1, 3, 4], [4, 6, 8], [5, 7, 7], [6, 9, 6], [7, 0, 5], [2, 3, 3], [3, 9, 8], [3, 6, 5], [4, 9, 4], [2, 3, 3], [6, 9, 9], [0, 7, 0], [7, 7, 9], [7, 2, 9], [0, 6, 2], [4, 6, 7], [3, 7, 7], [0, 1, 7], [2, 8, 6], [2, 3, 7], [6, 4, 8], [3, 5, 9], [7, 9, 5], [3, 1, 7], [4, 4, 2], [3, 6, 2], [3, 1, 6], [6, 8, 5], [6, 6, 7], [4, 1, 1], [7, 2, 7], [7, 7, 0], [8, 8, 9], [9, 4, 1], [8, 3, 4], [9, 8, 9], [3, 5, 3], [0, 2, 4], [6, 0, 2], [2, 1, 3], [5, 8, 9], [2, 1, 1], [9, 7, 6], [3, 0, 2], [9, 9, 0], [3, 4, 8], [2, 6, 1], [8, 9, 2], [7, 6, 5], [6, 3, 1], [9, 3, 1], [8, 9, 3], [9, 1, 0], [3, 8, 7], [8, 0, 0], [4, 9, 7], [8, 6, 2], [4, 3, 0], [2, 3, 5], [9, 1, 4], [1, 1, 4], [6, 0, 2], [6, 1, 6], [3, 8, 8], [8, 8, 7], [5, 5, 0], [3, 9, 6], [5, 4, 3], [6, 8, 3], [0, 1, 5], [6, 7, 3], [8, 3, 2], [3, 8, 3], [2, 1, 6], [4, 6, 7], [8, 9, 9], [5, 4, 2], [6, 1, 3], [6, 9, 5], [4, 8, 2], [9, 7, 4], [5, 4, 2], [9, 6, 1], [2, 7, 3], [4, 5, 4], [6, 8, 1], [3, 4, 0], [2, 2, 6], [5, 1, 2], [9, 9, 7], [6, 9, 9], [8, 4, 3], [4, 1, 7], [6, 2, 5], [0, 4, 9], [3, 5, 9], [6, 9, 1], [1, 9, 2]]
//         }]
//     });


//     // Add mouse events for rotation
//     $(chart.container).bind('mousedown.hc touchstart.hc', function (e) {
//         e = chart.pointer.normalize(e);

//         var posX = e.pageX,
//             posY = e.pageY,
//             alpha = chart.options.chart.options3d.alpha,
//             beta = chart.options.chart.options3d.beta,
//             newAlpha,
//             newBeta,
//             sensitivity = 5; // lower is more sensitive

//         $(document).bind({
//             'mousemove.hc touchdrag.hc': function (e) {
//                 // Run beta
//                 newBeta = beta + (posX - e.pageX) / sensitivity;
//                 newBeta = Math.min(100, Math.max(-100, newBeta));
//                 chart.options.chart.options3d.beta = newBeta;

//                 // Run alpha
//                 newAlpha = alpha + (e.pageY - posY) / sensitivity;
//                 newAlpha = Math.min(100, Math.max(-100, newAlpha));
//                 chart.options.chart.options3d.alpha = newAlpha;

//                 chart.redraw(false);
//             },
//             'mouseup touchend': function () {
//                 $(document).unbind('.hc');
//             }
//         });
//     });

// });


// $(function () { 
//     $('#session-chart').highcharts({
//         chart: {
//             type: 'scatter'
//         },
//         title: {
//             text: 'Clicks on Sections'
//         },
//         xAxis: {
//             categories: ['Goals', 'Values', 'Obstacles', 'Stories']
//         },
//         yAxis: {
//             title: {
//                 text: 'Frequency of Clicks'
//             }
//         },
//         series: [{
//             name: 'Clicks',
//             data: [13, 7, 1, 6]
//         }, {
//             name: 'Standard Deviation',
//             data: [5, 7, 3, 15]
//         }]
//     });
// });







// http://api.highcharts.com/highcharts#global

// boring bar graph

// var chart = new Highcharts.Chart({

//         chart: {
//             renderTo: 'container',
//             type: 'bar'
//         },
//         title: {
//             text: 'Fruit Consumption'
//         },
//         xAxis: {
//             categories: ['Apples', 'Bananas', 'Oranges']
//         },
//         yAxis: {
//             title: {
//                 text: 'Fruit eaten'
//             }
//         },
//         series: [{
//             name: 'Jane',
//             data: [1, 0, 4]},
//         {
//             name: 'John',
//             data: [5, 7, 3]}]
//     });
// });




// bubble scatter plot


// $(function () {
//     $('#container').highcharts({

//         chart: {
//             type: 'bubble',
//             plotBorderWidth: 1,
//             zoomType: 'xy'
//         },

//         title: {
//             text: 'Highcharts bubbles with radial gradient fill'
//         },

//         xAxis: {
//             gridLineWidth: 1
//         },

//         yAxis: {
//             startOnTick: false,
//             endOnTick: false
//         },

//         series: [{
//             data: [
//                 [9, 81, 63],
//                 [98, 5, 89],
//                 [51, 50, 73],
//                 [41, 22, 14],
//                 [58, 24, 20],
//                 [78, 37, 34],
//                 [55, 56, 53],
//                 [18, 45, 70],
//                 [42, 44, 28],
//                 [3, 52, 59],
//                 [31, 18, 97],
//                 [79, 91, 63],
//                 [93, 23, 23],
//                 [44, 83, 22]
//             ],
//             marker: {
//                 fillColor: {
//                     radialGradient: { cx: 0.4, cy: 0.3, r: 0.7 },
//                     stops: [
//                         [0, 'rgba(255,255,255,0.5)'],
//                         [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0.5).get('rgba')]
//                     ]
//                 }
//             }
//         }, {
//             data: [
//                 [42, 38, 20],
//                 [6, 18, 1],
//                 [1, 93, 55],
//                 [57, 2, 90],
//                 [80, 76, 22],
//                 [11, 74, 96],
//                 [88, 56, 10],
//                 [30, 47, 49],
//                 [57, 62, 98],
//                 [4, 16, 16],
//                 [46, 10, 11],
//                 [22, 87, 89],
//                 [57, 91, 82],
//                 [45, 15, 98]
//             ],
//             marker: {
//                 fillColor: {
//                     radialGradient: { cx: 0.4, cy: 0.3, r: 0.7 },
//                     stops: [
//                         [0, 'rgba(255,255,255,0.5)'],
//                         [1, Highcharts.Color(Highcharts.getOptions().colors[1]).setOpacity(0.5).get('rgba')]
//                     ]
//                 }
//             }
//         }]

//     });
// });