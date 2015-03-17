$(function () {
    console.log(graphs);
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
            data: []

        }, 
        {
            name: 'Obstacles',
            color: 'rgba(223, 83, 83, .5)',
            data: []
        },
        {
            name: 'Stories',
            color: 'rgba(223, 83, 83, .5)',
            data: []
        },
        {
            name: 'Values',
            color: 'rgba(119, 152, 191, .5)',
            data: []
                
        }]
    });
});
