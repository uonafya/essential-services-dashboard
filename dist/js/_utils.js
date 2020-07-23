$(document).ready(function () {
    $('.table:not(.no-datatable)').DataTable({
        dom: 'Bfrtlip',
        ordering: false,
        paging: true,
        pageLength: 10,
        fixedColumns:   {
            leftColumns: 1,
        },
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print', 'pageLength'
        ]
    });

    $('td').each(function (index, element) {
        var cell = $(this).html()
        if(!isNaN(cell)){
            $(this).html( formatNumber(
                parseFloat(cell)
                    .toFixed(2)
            ) )
        }
    });
});


function formatNumber(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/* 
    plotGraph(
        x_array,    //array of x values e.g. months
        x_title,    //string
        y_data,     //array of objects e.g [{name:"Year 2018", data:[1,2,3], color: "#3330ff"}],
        y_title,    //string
        title,      //string title of entire graph
        subtitle,   //string subtitle
        containter, //DOM object, preferrably jQuery selector-ed
        chertype,   //string, 'bar', 'line'
        colours,    //array of string colors e.g [ '#7CB799', '#1e779a', '#2A2E79']
    )
*/

let plotGraph = (x_array, x_title, y_data, y_title, title, subtitle, container, chartype, colours)=> {
    Highcharts.chart(container, {
        chart: {
            type: chartype
        },
        title: {
            text: title
        },
        subtitle: {
            text: subtitle || null
        },
        exporting: {
            enabled: true
        },
        xAxis: {
            categories: x_array,
            title: {
                text: x_title || null
            }
        },
        yAxis: {
            title: {
                text: y_title || null,
                // align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ''
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        credits: {
            enabled: false
        },
        series: y_data,
        colors: colours || [ '#0AC4CC', '#59D1A2', '#7CB799', '#1e779a', '#2A2E79']
    });
}