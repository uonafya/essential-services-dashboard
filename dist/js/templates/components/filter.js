const filter_template = `

{{#is_county}}
    <div class="col-md-2 col-sm-3 col-xs-12">
        <select class="form-control m-r-5 mb-1" id="county-dropdown" name="county">
            <option selected="true" disabled="" value="">Select County</option>
            <option value="HfVjCurKxh2">Kenya</option>
            <option value="vvOK1BxTbet">Baringo County</option>
            <option value="HMNARUV2CW4">Bomet County</option>
            <option value="KGHhQ5GLd4k">Bungoma County</option>
            <option value="Tvf1zgVZ0K4">Busia County</option>
            <option value="MqnLxQBigG0">Elgeyo Marakwet County</option>
            <option value="PFu8alU2KWG">Embu County</option>
            <option value="uyOrcHZBpW0">Garissa County</option>
            <option value="nK0A12Q7MvS">Homa Bay County</option>
            <option value="bzOfj0iwfDH">Isiolo County</option>
            <option value="Hsk1YV8kHkT">Kajiado County</option>
            <option value="BjC1xL40gHo">Kakamega County</option>
            <option value="ihZsJ8alvtb">Kericho County</option>
            <option value="qKzosKQPl6G">Kiambu County</option>
            <option value="nrI2khZx3d0">Kilifi County</option>
            <option value="Ulj33KBau7V">Kirinyaga County</option>
            <option value="sPkRcDvhGWA">Kisii County</option>
            <option value="tAbBVBbueqD">Kisumu County</option>
            <option value="j8o6iO4Njsi">Kitui County</option>
            <option value="N7YETT3A9r1">Kwale County</option>
            <option value="xuFdFy6t9AH">Laikipia County</option>
            <option value="NjWSbQTwys4">Lamu County</option>
            <option value="yhCUgGcCcOo">Machakos County</option>
            <option value="BoDytkJQ4Qi">Makueni County</option>
            <option value="R6f9znhg37c">Mandera County</option>
            <option value="Eey8fT4Im3y">Marsabit County</option>
            <option value="Y52XNJ50hYb">Meru County</option>
            <option value="fVra3Pwta0Q">Migori County</option>
            <option value="wsBsC6gjHvn">Mombasa County</option>
            <option value="ahwTMNAJvrL">Muranga County</option>
            <option value="jkG3zaihdSs">Nairobi County</option>
            <option value="ob6SxuRcqU4">Nakuru County</option>
            <option value="t0J75eHKxz5">Nandi County</option>
            <option value="kqJ83J2D72s">Narok County</option>
            <option value="uepLTG8wGWJ">Nyamira County</option>
            <option value="mYZacFNIB3h">Nyandarua County</option>
            <option value="ptWVfaCIdVx">Nyeri County</option>
            <option value="o36zCRjSd4G">Samburu County</option>
            <option value="u4t9H8XyU9P">Siaya County</option>
            <option value="QyGNX2DpR4h">Taita Taveta County</option>
            <option value="JsH2bnvNt2d">Tana River County</option>
            <option value="T4urHM47nlm">Tharaka Nithi County</option>
            <option value="mThvosEflAU">Trans Nzoia County</option>
            <option value="kphDeKClFch">Turkana County</option>
            <option value="pZqQRRW7PHP">Uasin Gishu County</option>
            <option value="sANMZ3lpqGs">Vihiga County</option>
            <option value="CeLsrJOH0g9">Wajir County</option>
            <option value="XWALbfAPa6n">West Pokot County</option>
        </select>
    </div>
{{/is_county}}

{{#is_subcounty}}
    <div class="col-md-2 col-sm-3 col-xs-12">
        <select class="form-control m-r-5 mb-1" id="subcounty-dropdown" name="subcounty">
        <option selected disabled>Select subcounty</option>
        </select> 
    </div> 
{{/is_subcounty}}

{{#is_ward}}
    <div class="col-md-2 col-sm-3 col-xs-12">
        <select class="form-control m-r-5 mb-1" id="ward-dropdown" name="ward">
        <option selected disabled>Select ward</option>
        </select> 
    </div> 
{{/is_ward}}

{{#is_facility}}
    <div class="col-md-2 col-sm-3 col-xs-12">
        <select class="form-control m-r-5 mb-1" id="facility-dropdown" name="facility">
        <option selected disabled>Select facility</option>
        </select> 
    </div> 
{{/is_facility}}
{{#is_period}}
    <div class="col-md-3 col-sm-3 col-xs-12 hidden">
        <div class="dropdown w-100">
            <button class="btn btn-light btn-lg dropdown-toggle" type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="border: 1px solid #ccc;">
                &nbsp;<small>Period</small>&nbsp;
            </button>
            <div class="dropdown-menu w-100 text-center p-3 shadow-sm" aria-labelledby="triggerId">
                <!-- <div class="row m-b-5">
                    <div class="col-md-6"><button class="btn-info btn-xs btn-block btn-rounded" onclick="setPeriodVal('THIS_WEEK')"><b>This Week</b></button></div>
                    <div class="col-md-6"><button class="btn-info btn-xs btn-block btn-rounded" onclick="setPeriodVal('LAST_WEEK')"><b>Last Week</b></button></div>
                </div>
                <div class="row m-b-5">
                    <div class="col-md-6"><button class="btn-info btn-xs btn-block btn-rounded" onclick="setPeriodVal('LAST_4_WEEKS')"><b>Last 4 Weeks</b></button></div>
                    <div class="col-md-6"><button class="btn-info btn-xs btn-block btn-rounded" onclick="setPeriodVal('LAST_12_WEEKS')"><b>Last 12 Weeks</b></button></div>
                </div> -->
                <div class="row m-t-10">
                    <div class="col-md-6">
                        <input type="month" class="form-control p-1" id="period-dropdownFromz" placeholder="Period {{#is_period_range}} from {{/is_period_range}}"/>
                    </div>
                    {{#is_period_range}}
                        <div class="col-md-6">
                            <input type="month" class="form-control p-1" id="period-dropdownToz" placeholder="Period to"/>
                        </div> 
                    {{/is_period_range}}
                </div>
            </div>
        </div>
    </div> 

    <div class="col-md-4">
        <div class="row">
            <div class="col-md-6">
                <div class="input-group">
                    <select class="form-control yearsfilt" id="period-dropdownFrom">
                        <option value="" disabled selected>Year {{#is_period_range}} from {{/is_period_range}}</option>
                    </select>
                    
                    <select class="form-control" id="period-dropdownFromQs" disabled>
                        <option value="" selected>All year</option>
                        <option value="1" >Q1 (Jan-Mar)</option>
                        <option value="2" >Q2 (Apr-Jun)</option>
                        <option value="3" >Q3 (Jul-Sept)</option>
                        <option value="4" >Q4 (Oct-Dec)</option>
                    </select>
                </div>
            </div>
            {{#is_period_range}}
                <div class="col-md-6">
                    <div class="input-group">
                        <select class="form-control yearsfilt" id="period-dropdownTo" disabled>
                            <option value="" disabled selected>Period to</option>
                        </select>

                        <select class="form-control" id="period-dropdownToQs" disabled>
                            <option value="" selected>All year</option>
                            <option value="1" >Q1 (Jan-Mar)</option>
                            <option value="2" >Q2 (Apr-Jun)</option>
                            <option value="3" >Q3 (Jul-Sept)</option>
                            <option value="4" >Q4 (Oct-Dec)</option>
                        </select>
                    </div> 
                </div> 
            {{/is_period_range}}
        </div>
    </div>
{{/is_period}}
`;

let this_yr = new Date().getFullYear();let ls_yrs = '';
for (let z = 0; z < 10; z++) { let f=this_yr-z; ls_yrs += '<option>'+f+'</option>'; };
const barchart_filter_template = `
<div class="col-md-12 p-0 text-right font-20 p-1">
    <div id="ldng" class="d-inline align-content-center justify-content-center align-items-center w-auto p-1">&nbsp;</div>
    <select id="month" class="d-inline w-auto p-1" name="month"><option value="01">January</option><option value="02">February</option><option value="03">March</option><option value="04">April</option><option value="05">May</option><option value="06">June</option><option value="07">July</option><option value="08">August</option><option value="09">September</option><option value="10">October</option><option value="11">November</option><option value="12">December</option></select> 
    <select id="year" class="d-inline w-auto p-1" name="year">${ls_yrs}</select>
    vs. similar period in previous year. <button class="btn btn-info" type="submit">Compare</button>
</div>
`
$('.bar-chart-filter').html(barchart_filter_template)

const gMonthsInYear = (year) => {
    let this_yr = new Date().getFullYear()
    let mnths = []
    let latest_mnth = 12
    let pop = false
    if(parseFloat(year) >= this_yr){
        latest_mnth = new Date().getMonth()+1
        year = this_yr
        pop = true
    }
    for (let mn = 1; mn <= latest_mnth; mn++) {
        if(mn < 10){mn = '0'+mn}
        mnths.push(year+''+mn)
    }
    if(pop){ let ms = mnths.pop(); return mnths.join(';') }else{ return mnths.join(';') }
}

const gWeeksInYear = (year) => {
    let this_yr = new Date().getFullYear()
    let wks = []
    let latest_wk = 52
    let pop = false
    if(parseFloat(year) >= this_yr){
        latest_wk = new Date().gWeek()
        year = this_yr
        pop = true
    }
    for(let wk = 1; wk <= latest_wk; wk++){
        wks.push(year+'W'+wk)
    }
    // if(pop){let ws = wks.pop(); return wks.join(';')}else{return wks.join(';')}
    return wks.join(';')
}

window.Date.prototype.gWeek = function (dowOffset) {
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

$(document).ready(function () {
    setTimeout(() => {
        
        $("#subcounty-dropdown").attr('disabled', true)
        window.sessionStorage.setItem("ouFilterType", "national")
        $("#county-dropdown").on('change', function () {
            let v_al = $(this).val()
            if(v_al != "HfVjCurKxh2"){
                window.sessionStorage.setItem("ouFilterType", "county")
            }
            changeHashOnFilter({ou:v_al})
            if(v_al != 'HfVjCurKxh2' && v_al != ''){
                $("#subcounty-dropdown").removeAttr('disabled')
                fetchSubcounties(v_al);
            }else{
                $("#subcounty-dropdown").attr('disabled', true)
            }
        })
        
        $("#subcounty-dropdown").on('change', function (ev) {
            let v_al = $(this).val()
            window.sessionStorage.setItem("ouFilterType", "subcounty")
            changeHashOnFilter({ou:v_al})
        })
        
        $("#ward-dropdown").on('change', function (ev) {
            let v_al = $(this).val()
            changeHashOnFilter({ou:v_al})
        })
        
        $("#facility-dropdown").on('change', function (ev) {
            let v_al = $(this).val()
            changeHashOnFilter({ou:v_al})
        })
        
        $("#period-dropdownFrom").on('change', function (ev) {
            let v_al = $(this).val();
            if(v_al.includes('/')){ v_al = v_al.replace('/', 'W') }
            changeHashOnFilter({pe:v_al})
            $('#period-dropdownFromQs').removeAttr('disabled')
            $('#period-dropdownTo').removeAttr('disabled')
            sessionStorage.removeItem("periodIsQuarters")
            $($('#period-dropdownTo option')).each(function (ix, ele) {
                if(ele.getAttribute('value') <= v_al){
                    ele.setAttribute('disabled', true)
                }
            });
        })
        
        $("#period-dropdownFromQs").on('change', function (ev) {
            let p_val = $("#period-dropdownFrom").val()
            let v_al = $(this).val();
            let v_alq = ""//p_val+"Q"+v_al;
            if(v_al != null && v_al != ""){
                for (let d = 1; d <= parseFloat(v_al); d++) {
                    v_alq += p_val+"Q"+d+";"
                }
                v_alq = v_alq.substr(0,v_alq.length-1)
            }
            console.log("fromQs = ", v_alq);
            sessionStorage.setItem("periodIsQuarters", true)
            if(v_alq.includes('/')){ v_alq = v_alq.replace('/', 'W') }
            changeHashOnFilter({pe:v_alq})
            $('#period-dropdownToQs').removeAttr('disabled')
        })
        
        $("#period-dropdownTo").on('change', function (ev) {
            let v_al = $(this).val();
            let v_al_fr = $('#period-dropdownFrom').val();
            if(v_al.includes('/')){ v_al = v_al.replace('/', 'W') }
            if(v_al_fr.includes('/')){ v_al_fr = v_al_fr.replace('/', 'W') }
            changeHashOnFilter({pe: v_al_fr, pe_to:v_al})
        })


        $("#period-dropdownToQs").on('change', function (ev) {
            let p_val = $("#period-dropdownTo").val()
            let v_al = $(this).val();
            let v_alq = p_val+""+v_al;
            let v_al_fr = $('#period-dropdownFrom').val();
            let v_al_fr_qs = $('#period-dropdownFromQs').val();
            if(v_alq.includes('/')){ v_alq = v_alq.replace('/', 'W') }
            changeHashOnFilter({pe: v_al_fr+""+v_al_fr_qs, pe_to:v_alq})
        })

        let this_yr = new Date().getFullYear()
        for (let l = 0; l <= 4; l++) {
            let y_r = this_yr - l
            $('.yearsfilt').append('<option value="'+y_r+'">'+y_r+'</option>')
        }
    }, 500);
});


function changeHashOnFilter(new_param){ //new_param = {ou: 'Hfvgj5...'} OR {pe: '2020W12'}
    let curr_hash = window.location.hash.substr(1)
    let curr_hash_obj = munchHash(curr_hash)
    let newHash = {}
    if(new_param.pe){ newHash.pe = new_param.pe }else{
        if(curr_hash_obj.pe) newHash.pe = curr_hash_obj.pe
    }
    if(new_param.pe_to){ newHash.pe_to = new_param.pe_to }else{
        if(curr_hash_obj.pe_to) newHash.pe_to = curr_hash_obj.pe_to
    }
    if(new_param.ou){ newHash.ou = new_param.ou }else{
        if(curr_hash_obj.ou) newHash.ou = curr_hash_obj.ou
    }
    let enc_hash = spreadHash(newHash)
    const new_url = `${window.location.origin}${window.location.pathname}${enc_hash}`
    window.location.hash = ""
    window.location.hash = enc_hash
}

function setPeriodVal(pv) {
    $('#period-dropdownFrom').val(pv)
    $('#period-dropdownFrom').change()
}

const getPeBtwnYears = (y1, y2, returntype) => {
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
            mnths += ''+gMonthsInYear(yr)+';'
        })
        return mnths
    } else if(returntype && returntype == 'weeks'){
        let wks = ''
        yrs.map(yr=>{
            wks += ''+gWeeksInYear(yr)+';'
        })
        return wks
    }else{
        return yrs
    }
}
// console.log('getPeBtwnYears(2017,2020, "m")');
// console.log( getPeBtwnYears(2017,2020, 'w') );

const fetchSubcounties = county_id => {
    $("#subcounty-dropdown").html('<option disabled selected value="">Select subcounty</option>')
    justFetch(`https://hiskenya.org/api/organisationUnits/${county_id}.json?includeChildren=true&fields=id,name`, {})
    .then(response=>{
        if( response.error ){
            throw JSON.stringify(response)
        }
        let subc = response.organisationUnits;
        subc.map(sc=>{
            $("#subcounty-dropdown").append('<option value="'+sc.id+'">'+sc.name+'</option>')
        })
    })
    .catch(er=>{
        console.error('error: '+er)
    })
}