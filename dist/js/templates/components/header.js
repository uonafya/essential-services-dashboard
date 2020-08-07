const header_template = `
<nav class="navbar top-navbar navbar-expand-md navbar-dark">
    <div class="navbar-header" data-logobg="skin5">
        <a class="nav-toggler waves-effect waves-light d-block  d-md-none" href="javascript:void(0)" >
            <i class="ti-menu ti-close"></i>
        </a>
        <a class="navbar-brand" href="index.html">
            <span class="logo-text">
                <img src="../assets/images/logo.png" style="max-height: 56px" alt="homepage" class="light-logo" />
            </span>
        <a class="topbartoggler d-block d-md-none waves-effect  waves-light" href="javascript:void(0)" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i class="ti-more"></i>
        </a>
    </div>
    <div class="navbar-collapse collapse" id="navbarSupportedContent" data-navbarbg="skin5">
        <ul class="navbar-nav float-left mr-auto">
            <li class="nav-item d-none d-md-block">
                <a class="nav-link sidebartoggler waves-effect  waves-light" href="javascript:void(0)" data-sidebartype="mini-sidebar">
                    <i class="fa fa-bars font-24"></i>
                </a>
            </li>
            <li class="nav-item d-none d-md-block ml-3">
                <h3 class="text-white mt-3">{{title}}</h3>
            </li>
        </ul>
        <ul class="navbar-nav float-right hidden-xs">
            <li class="nav-item search-box">
                <a href="https://usaid.gov/kenya/global-health/" class="bcwhite ws-nowrap bdr-3 p-3 m-r-5">
                    <img src="../assets/images/logos/USAID-Kenya.png" alt="USAID Kenya" style="max-height: 37px"/>
                </a>
            </li>
            <li class="nav-item search-box">
                <a href="https://health.go.ke/" class="m-r-5 bcwhite ws-nowrap bdr-3 p-3">
                    <img src="../assets/images/logos/moh-logo.jpg" alt="MoH" style="max-height: 37px"/>
                </a>
            </li>
            <li class="nav-item search-box">
                <a href="https://healthit.uonbi.ac.ke" class="bcwhite ws-nowrap bdr-3 p-3">
                    <img src="../assets/images/logos/healthit.png" alt="HealthIT" style="max-height: 37px"/>
                </a>
            </li>
        </ul>
    </div>
</nav>
`