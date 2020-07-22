const filter_template = `

{{#is_county}}
    <div class="col-md-2 col-sm-3 col-xs-12">
        <select class="form-control m-r-5 mb-1" id="county-dropdown" name="county">
        <option selected disabled>Select county</option>
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
    $("#county-dropdown").on('change', function (ev) {
        let v_al = $(this).val()
        changeHashOnFilter({ou:v_al})
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

    let curr_hash = munchHash(window.location.hash.substr(1))
    let newHash = {}
    if(new_param.pe){ newHash.pe = new_param.pe }else{
        if(curr_hash.pe) newHash.pe = curr_hash.pe
    }
    if(new_param.ou){ newHash.ou = new_param.ou }else{
        if(curr_hash.ou) newHash.ou = curr_hash.ou
    }
    let enc_hash = spreadHash(newHash)
    const new_url = `${window.location.origin}${window.location.pathname}${enc_hash}`
    // console.log('New URL = '+new_url)
    window.location.hash = enc_hash
}

function setPeriodVal(pv) {
    $('#period-dropdownFrom').val(pv)
    $('#period-dropdownFrom').change()
}

const spreadHash = (hashObj)=>{
    var str = "#";
    for (var key in hashObj) {
        if (str != "") { str += "&"; }
        str += key + "=" + encodeURIComponent(hashObj[key]);
    }
    return str.replace("&","")
}
