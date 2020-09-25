const nav_template = `
<ul id="sidebarnav" class="p-t-30">
    <li class="sidebar-item">
        <a class="sidebar-link" href="https://hiskenya.org" aria-expanded="false">
            <span class="text-white text-bold">&larr;</span>&nbsp;
            <span class="hide-menu">Back to DHIS2</span>
        </a>
    </li>
    <li class="sidebar-divider">
        <br/>
    </li>
    
    <li class="sidebar-item">
        <a class="sidebar-link" href="index.html" aria-expanded="false">
            <small class="text-muted text-smaller"><i class="fa-small fa fa-th fcwhite hidden"></i></small>&nbsp;
            <span class="hide-menu">Dashboard</span>
        </a>
    </li>
    <li class="sidebar-item">
        <a class="sidebar-link" href="hsu.html" aria-expanded="false">
            <small class="text-muted text-smaller"><i class="fa-small fa fa-th fcwhite hidden"></i></small>&nbsp;
            <span class="hide-menu">Health Services Utilization</span>
        </a>
    </li>
    <li class="sidebar-item"> <a class="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i class="fa-small fa fa-th fcwhite hidden"></i><span class="hide-menu">RMNCAH </span></a>
        <ul aria-expanded="false" class="collapse show first-level">
            <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="rmncah-anc1.html" aria-expanded="false"><i class="mdi mdi-border-inside"></i><span class="hide-menu">ANC 1st Visit</span></a></li>
            <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="rmncah-skilledeliveries.html" aria-expanded="false"><i class="mdi mdi-border-inside"></i><span class="hide-menu">Skilled Deliveries</span></a></li>
            <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="rmncah-adole-rh.html" aria-expanded="false"><i class="mdi mdi-border-inside"></i><span class="hide-menu">Adolescent Reproductive Health</span></a></li>
            <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="childHealth.html" aria-expanded="false"><i class="mdi mdi-border-inside"></i><span class="hide-menu">Child Health</span></a></li>
            <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="rmncah-cwc.html" aria-expanded="false"><i class="mdi mdi-border-inside"></i><span class="hide-menu">Nutrition</span></a></li>
            <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="rmncah-vitasup.html" aria-expanded="false"><i class="mdi mdi-border-inside"></i><span class="hide-menu">Vitamin A supplementation</span></a></li>
        </ul>
    </li>
    <li class="sidebar-item"> <a class="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i class="mdi mdi-receipt"></i><span class="hide-menu">Communicable Diseases </span></a>
        <ul aria-expanded="false" class="collapse show first-level">
            <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="communicable-hiv.html" aria-expanded="false"><i class="mdi mdi-border-inside"></i><span class="hide-menu">HIV</span></a></li>

            <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="communicable-tb.html" aria-expanded="false"><i class="mdi mdi-border-inside"></i><span class="hide-menu">Tuberculosis</span></a></li>

            <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="communicable-malaria.html" aria-expanded="false"><i class="mdi mdi-border-inside"></i><span class="hide-menu">Malaria</span></a></li>
        </ul>
    </li>
    <li class="sidebar-item"> <a class="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i class="mdi mdi-receipt"></i><span class="hide-menu">Non-Communicable Diseases </span></a>
        <ul aria-expanded="false" class="collapse show first-level">
            <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="non-communicable-cancer.html" aria-expanded="false"><i class="mdi mdi-border-inside"></i><span class="hide-menu">Cancer</span></a></li>

            <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="non-communicable-diabetes.html" aria-expanded="false"><i class="mdi mdi-border-inside"></i><span class="hide-menu">Diabetes</span></a></li>

            <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="non-communicable-hypertension.html" aria-expanded="false"><i class="mdi mdi-border-inside"></i><span class="hide-menu">Hypertension</span></a></li>

            <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="non-communicable-kidney.html" aria-expanded="false"><i class="mdi mdi-border-inside"></i><span class="hide-menu">Kidney disease</span></a></li>
        </ul>
    </li>
    <li class="sidebar-item hidden">
        <a class="sidebar-link" href="birthsdeathsreg.html" aria-expanded="false">
            <small class="text-muted text-smaller"><i class="fa-small fa fa-th fcwhite hidden"></i></small>&nbsp;
            <span class="hide-menu">Births &amp; Deaths Registration</span>
        </a>
    </li>
    <li class="sidebar-item">
        <a class="sidebar-link" href="violence.html" aria-expanded="false">
            <small class="text-muted text-smaller"><i class="fa-small fa fa-th fcwhite hidden"></i></small>&nbsp;
            <span class="hide-menu">Violence</span>
        </a>
    </li>
</ul>
`
