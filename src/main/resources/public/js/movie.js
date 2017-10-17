var table =
    $('#guestTable').DataTable({
      "ajax":  {"url":"/api/guest","dataSrc":""},
      "columns": [
          { "data": "guestNumber" },
          { "data": "name" },
          { "data": "surname"},
          { "data": "address" },
          { "data": "zipcode" },
          { "data": "city" },
          { "data": "country" },
          { "data": "phone" },
          { "data": "email" }
        ],
        "columnDefs": [
            {
                "targets": [ 0 ],
                "visible": false,
                "searchable": false
            }
        ],
        "order": [[0, 'desc']],
       "pageLength": 10,
         "bLengthChange": false,
         "language": {
             "info": "Showing guests _START_ to _END_ of _TOTAL_ "
             }
    } );


// $("#addGuest").validate({
//     rules: {
//         name: "required",
//         surname: "required",
//         address: "required",
//         zipcode: "required",
//         city: "required",
//         country: "required",
//         phone: "required",
//         email: {
//             required: true,
//             email: true
//         }
//     },
//     messages: {
//         name: "U heeft uw voornaam niet ingevuld.",
//         surname: "U heeft uw achternaam niet ingevuld.",
//         address: "U heeft uw adres niet ingevuld.",
//         zipcode: "U heeft uw postcode niet ingevuld.",
//         city: "U heeft uw woonplaats niet ingevuld.",
//         country: "U heeft uw land niet ingevuld.",
//         phone: "U heeft uw telefoonnummer niet ingevuld.",
//         email: {
//             required: "U heeft uw e-mail niet ingevuld.",
//             email: "Uw e-mail adres klopt niet."
//         }
//     }
// });

function handleMovie(type) {

    var obj = {
        guestNumber: $("#guestNumber").val(),
        name:       $("#name").val(),
        surname:    $("#surname").val(),
        address:    $("#address").val(),
        zipcode:    $("#zipcode").val(),
        city:       $("#city").val(),
        country:    $("#country").val(),
        phone:      $("#phone").val(),
        email:      $("#email").val()
    }

    var params = {
        url: "api/guest",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8"
    };

    switch (type) {
        case 'post':

            params.type = "POST";
            params.success = function (result) {
                console.log(result);
                // toggle modal
                $("#guestModal").modal('toggle');
                // add to DataTable
                var rowNode = table.row.add(result).draw().node();
                // Highlight row (timeout)
                $(rowNode).addClass('table-success');
                setTimeout(function () {
                    $(rowNode).removeClass('table-success');
                }, 3000)
                toastr["success"]('Guest ' + result["name"] + " " + result["surname"] + ' added.')

            };
            params.error = function (err) {
                console.log(err);
                toastr["error"](err.responseJSON.join('<br>'));
            };

            break;

        case 'update':
            params.type = "PUT";
            params.success = function (result) {
                console.log(result);
                // toggle modal
                $("#guestModal").modal('toggle');
                // Refresh DataTable
                table.ajax.reload();
                toastr["success"]('Guest ' + result["name"] + " " + result["surname"] + ' updated.')
            };
            params.error = function (err) {
                console.log(err);
                toastr["error"](err.responseJSON.join('<br>'));
            };

            break;

        case 'delete':
            params.type = "DELETE";
            params.success = function (result) {
                console.log(result);
                // Toggle modal
                $("#guestModal").modal('toggle');
                // Reload DataTable
                table.ajax.reload();
                toastr["success"]('Guest ' + result["name"] + " " + result["surname"] + ' deleted.')
            };
            params.error = function (err) {
                console.log(err);
                toastr["error"](err.responseJSON.join('<br>'));
            };
            break;

    }

    // if($("#addGuest").valid()){
        $.ajax(params);
    //}
}


// Show modal for updating guest
$('#guestTable tbody').on('click', 'tr', function () {
    var data = table.row(this).data();
    console.log(data);
    showGuestModal('modify', data);
});

// Show modal for adding guests
$('#addGuestButton').on('click', function () {
    showGuestModal('add');
});

function showGuestModal(format, data) {
    // Populates inputfields and buttons based on format (String)
    // data id optional.
    switch (format) {
        case 'modify':
            // populate form
            $.each(data, function (key, value) {
                $('#addGuest').find("input[id='" + key + "']").val(value);
            });
            // initialize title and buttons
            $('#modalLabel').html('Edit guest "' + data['name'] + ' ' + data ['surname'] + '"');
            $('#guestDeleteButton').show();
            $('#guestSaveButton').show();
            $('#guestAddButton').hide();
            break;

        default:
            // empty form
            $(':input', '#addGuest')
                .not(':button, :submit, :reset')
                .val('');
            // initialize title and buttons
            $('#modalLabel').html('Add new guest');
            $('#guestDeleteButton').hide();
            $('#guestSaveButton').hide();
            $('#guestAddButton').show();
            break;
    }

    // show modal
    $("#guestModal").modal('toggle');
}