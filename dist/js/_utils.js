$(document).ready(function () {
    $(".table:not(.no-datatable)").DataTable({
        dom: "Bfrtlip",
        ordering: false,
        paging: true,
        pageLength: 10,
        fixedColumns: {
            leftColumns: 1,
        },
        buttons: ["copy", "csv", "excel", "pdf", "print", "pageLength"],
    });

    $("td").each(function (index, element) {
        var cell = $(this).html();
        if (!isNaN(cell)) {
            $(this).html(formatNumber(parseFloat(cell).toFixed(2)));
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

let plotGraph = (
    x_array,
    x_title,
    y_data,
    y_title,
    title,
    subtitle,
    container,
    chartype,
    colours,
    enableLegend
) => {
    let colo = colours || ["#1e77bf", "#8B0000", "#008000", "#2A2E79"];
    let legendable = true
    if(enableLegend == 'false'){
        legendable = false
    }
    // if((chartype == 'column' || chartype == 'bar') && !JSON.stringify(colours).includes('#d88842')){colo.unshift('#d88842')}

    Highcharts.chart(container, {
        chart: {
            type: chartype,
        },
        title: {
            text: title || null,
        },
        legend: {
            enabled: legendable
        },
        subtitle: {
            text: subtitle || null,
        },
        exporting: {
            enabled: true,
        },
        xAxis: {
            categories: x_array,
            title: {
                text: x_title || null,
            },
        },
        yAxis: {
            title: {
                text: y_title || null,
            },
            labels: {
                overflow: "justify",
            },
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true,
                },
            },
            line: {
                dataLabels: {
                    enabled: true,
                },
            },
            column: {
                dataLabels: true,
                colors: colo,
            },
        },
        credits: {
            enabled: false,
        },
        series: y_data,
        colors: colo,
    });
};

let justFetch = async (endpoint, postoptions) => {
    let showLoading = postoptions.showLoading
    if( showLoading != 'false'){
        $(".graph").html(
            `<div class="col-md-12 text-center p-t-15">${loading_template_plain}</div>`
        );
    }
    if (endpoint == null || endpoint.length < 4) {
        return { error: true, type: "url", message: "Invalid endpoint URL" };
    }
    let options = postoptions || {};
    let req_method = options.method || "GET"; //PUT //POST //DELETE etc.
    let req_hd = {};
    let headers = {};
    let final_endpoint = endpoint;
    if (!location.hostname.includes("hiskenya")) {
        let encurl = window.encodeURIComponent(window.btoa(endpoint));
        // console.log('encurl = '+encurl);
        final_endpoint = "http://localhost:5600/request/" + encurl;
    }
    req_hd.headers = headers;
    req_hd.method = req_method;
    req_hd.Accept = "application/json";

    // console.log(`justFetch: ${final_endpoint} with headers: ${JSON.stringify(req_hd)}`);
    try {
        let result = await window.fetch(final_endpoint, req_hd);
        let result_json = await result.json();
        if (result_json.status === "ERROR") {
            throw result_json;
        }
        return result_json;
    } catch (err) {
        return { error: true, msg: err.message };
    }
};

window.addEventListener("hashchange", (hash_event) => {
    var hash = window.location.hash.substr(1);
    var hashObj = munchHash(hash);
    console.log("hashchange: ", hashObj);
    window.fetchData(hashObj);
});

const munchHash = (hash) => {
    return hash.split("&").reduce((rs, itm) => {
        let pt = itm.split("=");
        rs[pt[0]] = pt[1];
        return rs;
    }, {});
};

const spreadHash = (hashObj) => {
    var str = "#";
    for (var key in hashObj) {
        if (str != "") {
            str += "&";
        }
        str += key + "=" + encodeURIComponent(hashObj[key]);
    }
    return str.replace("&", "");
};



window.Date.prototype.getWeek = function (dowOffset) {
    dowOffset = typeof dowOffset == "int" ? dowOffset : 0; //default dowOffset to zero
    var newYear = new Date(this.getFullYear(), 0, 1);
    var day = newYear.getDay() - dowOffset; //the day of week the year begins on
    day = day >= 0 ? day : day + 7;
    var daynum =
        Math.floor(
            (this.getTime() -
                newYear.getTime() -
                (this.getTimezoneOffset() - newYear.getTimezoneOffset()) *
                    60000) /
                86400000
        ) + 1;
    var weeknum;
    //if the year starts before the middle of a week
    if (day < 4) {
        weeknum = Math.floor((daynum + day - 1) / 7) + 1;
        if (weeknum > 52) {
            nYear = new Date(this.getFullYear() + 1, 0, 1);
            nday = nYear.getDay() - dowOffset;
            nday = nday >= 0 ? nday : nday + 7;
            /*if the next year starts before the middle of
                  the week, it is week #1 of that year*/
            weeknum = nday < 4 ? 1 : 53;
        }
    } else {
        weeknum = Math.floor((daynum + day - 1) / 7);
    }
    return weeknum;
};



// const getMonthsInYear = (year) => {
//     let this_yr = new Date().getFullYear()
//     let mnths = []
//     let latest_mnth = 12
//     let pop = false
//     if(parseFloat(year) >= this_yr){
//         latest_mnth = parseFloat(new Date().getMonth())+1
//         year = this_yr
//         pop = true
//     }
//     for (let mn = 1; mn <= latest_mnth; mn++) {
//         if(mn < 10){mn = '0'+mn}
//         mnths.push(year+''+mn)
//     }
//     if(pop){ let ms = mnths.pop(); return mnths.join(';')+';' }else{ return mnths.join(';')+';' }
// }



const getMonthsInYear = (year) => {
    let this_yr = new Date().getFullYear()
    let all_mnths = Array.from({length: 12}, (_, i) => i + 1)
    let mnths = []
    let latest_mnth = 12
    let pop = false
    let incl_last_yr = false
    if(parseFloat(year) >= this_yr){
        latest_mnth = parseFloat(new Date().getMonth())+1
        year = this_yr
        pop = true
        if(latest_mnth < 2){
            incl_last_yr = true
        }
    }
    if(incl_last_yr){
        let pr = all_mnths.filter(g=>g > latest_mnth)
        console.log(pr)
        pr.forEach(mn=>{
            if(mn < 10){mn = '0'+mn}
            mnths.push((year-1)+''+mn)
        })
    }
    for (let mn = 1; mn <= latest_mnth; mn++) {
        if(mn < 10){mn = '0'+mn}
        mnths.push(year+''+mn)
    }
    console.log(mnths)
    // if(pop && mnths.length>1){ 
    //     let ms = mnths.pop();
    //     return ms.join(';')+';' 
    // }else{ 
        return mnths.join(';')+';' 
    // }
}

const getWeeksInYear = (year) => {
    let this_yr = new Date().getFullYear()
    let wks = []
    let latest_wk = 52
    let pop = false
    if(parseFloat(year) >= this_yr){
        latest_wk = new Date().getWeek() - 1
        year = this_yr
        pop = true
    }
    for(let wk = 1; wk <= latest_wk; wk++){
        wks.push(year+'W'+wk)
    }
    // if(pop){let ws = wks.pop(); return wks.join(';')}else{return wks.join(';')}
    return wks.join(';')+';'
}

const default3YearPeriod = (return_what) => {
    let this_yr = new Date().getFullYear()
    let yrs = []
    for (let i = 0; i <= 3; i++){
        yrs.push(this_yr - i)
    }
    let pstr = ''
    yrs.reverse().forEach(yr=>{
        if(return_what && return_what == 'weeks'){
            pstr += getWeeksInYear(yr)
        }else{
            pstr += getMonthsInYear(yr)
        }
    })
    return pstr
}


const getPeriodBtwnYears = (y1, y2, returntype) => {
    let bg = Math.max(parseFloat(y1), parseFloat(y2))
    let sm = Math.min(parseFloat(y1), parseFloat(y2))
    let diff = bg - sm
    let yrs = []
    for (let k = 0; k <= diff; k++) {
         yrs.push( sm + k )
    }

    if(returntype && returntype == 'months'){
        let mnths = ''
        yrs.map(yr=>{
            mnths += ''+getMonthsInYear(yr)+';'
        })
        return mnths
    } else if(returntype && returntype == 'weeks'){
        let wks = ''
        yrs.map(yr=>{
            wks += ''+getWeeksInYear(yr)+';'
        })
        return wks
    }else{
        return yrs
    }
}


const getUniqueYears = (perds) => {
    return [... new Set( Array.from(perds, p__e=>p__e.substr(0,4)) ) ]
}