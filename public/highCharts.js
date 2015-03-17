$(function () {
    $('.session-chart').highcharts({
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