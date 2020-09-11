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
    <div class="col-md-3 col-sm-3 col-xs-12">
        <div class="dropdown w-100">
            <button class="btn btn-light btn-lg dropdown-toggle" type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="border: 1px solid #ccc;">
                &nbsp;<small>Period</small>&nbsp;
            </button>
            <div class="dropdown-menu w-100 text-center p-3 shadow-sm" aria-labelledby="triggerId">
                <div class="row m-b-5">
                    <div class="col-md-6"><button class="btn-info btn-xs btn-block btn-rounded" onclick="setPeriodVal('THIS_WEEK')"><b>This Week</b></button></div>
                    <div class="col-md-6"><button class="btn-info btn-xs btn-block btn-rounded" onclick="setPeriodVal('LAST_WEEK')"><b>Last Week</b></button></div>
                </div>
                <div class="row m-b-5">
                    <div class="col-md-6"><button class="btn-info btn-xs btn-block btn-rounded" onclick="setPeriodVal('LAST_4_WEEKS')"><b>Last 4 Weeks</b></button></div>
                    <div class="col-md-6"><button class="btn-info btn-xs btn-block btn-rounded" onclick="setPeriodVal('LAST_12_WEEKS')"><b>Last 12 Weeks</b></button></div>
                </div>
                <div class="row m-t-10">
                    <div class="col-md-6">
                        <input type="text" class="form-control p-1" id="period-dropdownFrom" placeholder="Period {{#is_period_range}} from {{/is_period_range}}"/>
                    </div>
                    {{#is_period_range}}
                        <div class="col-md-6">
                            <input type="text" class="form-control p-1" id="period-dropdownTo" placeholder="Period to"/>
                        </div> 
                    {{/is_period_range}}
                </div>
            </div>
        </div>
    </div> 
{{/is_period}}
`;

$(document).ready(function () {
    $("#subcounty-dropdown").attr('disabled', true)
    $("#county-dropdown").on('change', function (ev) {
        let v_al = $(this).val()
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
    })
    
    $("#period-dropdownTo").on('change', function (ev) {
        let v_al = $(this).val();
        if(v_al.includes('/')){ v_al = v_al.replace('/', 'W') }
        changeHashOnFilter({pe:v_al})
    })
});


function changeHashOnFilter(new_param){ //new_param = {ou: 'Hfvgj5...'} OR {pe: '2020W12'}

    let curr_hash = window.location.hash.substr(1)
    let newHash = {}
    if(new_param.pe){ newHash.pe = new_param.pe }else{
        if(curr_hash.pe) newHash.pe = curr_hash.pe
    }
    if(new_param.ou){ newHash.ou = new_param.ou }else{
        if(curr_hash.ou) newHash.ou = curr_hash.ou
    }
    let enc_hash = spreadHash(newHash)
    const new_url = `${window.location.origin}${window.location.pathname}${enc_hash}`
    window.location.hash = enc_hash
}

function setPeriodVal(pv) {
    $('#period-dropdownFrom').val(pv)
    $('#period-dropdownFrom').change()
}

const fetchSubcounties = county_id => {
    justFetch(`https://hiskenya.org/api/organisationUnits/${county_id}.json?includeChildren=true&fields=id,name`, {})
    .then(response=>{
        if( response.error ){
            throw JSON.stringify(response)
        }
        let subc = response.organisationUnits;
        $("#subcounty-dropdown").html('<option disabled selected value="">Select subcounty</option>')
        subc.map(sc=>{
            $("#subcounty-dropdown").append('<option value="'+sc.id+'">'+sc.name+'</option>')
        })
    })
    .catch(er=>{
        console.error('error: '+er)
    })
}
