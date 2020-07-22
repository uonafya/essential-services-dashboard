$(document).ready(function () {
    $('.table').DataTable({
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