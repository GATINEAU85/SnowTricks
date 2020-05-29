import * as $ from 'jquery';
import 'datatables';

var tableFiles = $('#dataTableFiles').DataTable({
    "paging":   false,
    "ordering": true,
    "info":     false,
    searching: false,
//    rowId: 0,
//    "columnDefs": [
//        {
//            "targets": [ 0 ],
//            "visible": false,
//            "searchable": false
//        }
//    ],
    "drawCallback": function() {
        $('#dataTableFiles tbody td:not(:last-child)').click(function (idx, ev) {
                var fileId = tableFiles.row( $(this).parent() ).data()[0];
                var url = "projet6/public/get/trick/" + fileId;

                if (idx.ctrlKey){
                    window.open(url,'_blank')
                }else{
                    document.location.href = url;
                }
            //}
        });

    },
});

$('#dataTableFiles a.remove').click(function(){
    if(confirm("You will delete this upload. Are you sure ?")){
        var fileId = tableFiles.row(this.parentElement.parentElement).data()[0];
        $.ajax({
            url: 'projet6/admin/delete/upload/' + fileId,
        })
        tableFiles.row(this.parentElement.parentElement).remove().draw( false );
    }
});
