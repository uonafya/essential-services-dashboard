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
        container, //DOM object, preferrably document.getElementBlaBlaBla
        chartype,   //string, 'bar', 'line'
        colours,    //array of string colors e.g [ '#7CB799', '#1e779a', '#2A2E79']
    )
*/

let plotGraph = (x_array, x_title, y_data, y_title, title, subtitle, container, chartype, colours)=> {
    let colo = colours || [ '#1e77bf', '#8B0000', '#008000', '#2A2E79']
    // if((chartype == 'column' || chartype == 'bar') && !JSON.stringify(colours).includes('#d88842')){colo.unshift('#d88842')}
    
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
                text: y_title || null
            },
            labels: {
                overflow: 'justify'
            }
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            },
            line: {
                dataLabels: {
                    enabled: true
                }
            },
            column: {
                dataLabels: true,
                colors: colo
            }
        },
        credits: {
            enabled: false
        },
        series: y_data,
        colors: colo
    });
}

let justFetch = async (endpoint, postoptions) => {
    if (endpoint == null || endpoint.length < 4) {
      return { error: true, type: 'url', message: 'Invalid endpoint URL' };
    }
    let options = postoptions || {};
    let req_method = options.method || 'GET'; //PUT //POST //DELETE etc.
    let req_hd = {};
    let headers = {};
    let final_endpoint = endpoint
    if (!location.hostname.includes("hiskenya")){
        let encurl = window.encodeURIComponent(window.btoa(endpoint)); 
        // console.log('encurl = '+encurl);
        final_endpoint = 'http://41.76.170.34:3000/request/'+encurl
    }
    req_hd.headers = headers;
    req_hd.method = req_method;
    req_hd.Accept = 'application/json';
    
    // console.log(`justFetch: ${final_endpoint} with headers: ${JSON.stringify(req_hd)}`);
    try {
        let result = await window.fetch(final_endpoint, req_hd);
        let result_json = await result.json();
        if (result_json.status === 'ERROR') {
            throw result_json;
        }
        return result_json;
    } catch (err) {
      return { error: true, msg: err.message };
    }
  };

  window.addEventListener('hashchange', (hash_event)=>{
    var hash = window.location.hash.substr(1);
    var hashObj = munchHash(hash)
    // exec fn to utilize new params
    if(hashObj.ou){
        let ou_ = hashObj.ou || "HfVjCurKxh2"
        // window.sessionStorage.setItem("ess_ou", ou_)
    }
    if(hashObj.pe){
        let pe_ = hashObj.pe || "LAST_6_MONTHS"
        // window.sessionStorage.setItem("ess_pe", pe_)
    }
    console.log("hashchange: ",hashObj)
    window.fetchData(hashObj)
})

const munchHash = (hash)=>{
    return hash.split('&').reduce( (rs, itm)=>{
        let pt = itm.split('=')
        rs[pt[0]] = pt[1]
        return rs
    }, {})
}

const spreadHash = (hashObj)=>{
    var str = "#";
    for (var key in hashObj) {
        if (str != "") { str += "&"; }
        str += key + "=" + encodeURIComponent(hashObj[key]);
    }
    return str.replace("&","")
}