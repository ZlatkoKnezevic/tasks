
$("#taskForm").submit(function (event) {
    // cancels the form submission
    event.preventDefault();
    submitForm();
});

function submitForm() {
    var date = new Date();
    var timestampdate = date.getDate() + "/" +
        (date.getMonth() + 1) + "/" +
        date.getFullYear();
    var timestampdatetime = timestampdate + " " + date.getHours() + ":" +
        (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();

    // Initiate Variables With Form Content
    var vorname = $("#vorname").val();
    var nachname = $("#nachname").val();
    var contact_tel = $("#contact_tel").val();
    var contact_email = $("#contact_email").val();
    var ticketnr = $("#ticketnr").val();
    var nachricht = $("#nachricht").val();
    var queue = $("#queue").val();
    var datetime = $("#datetimepicker").val();
    var to_email = getEmail(queue);
    var username = document.getElementsByName("username")[0].value;

    
    // fill the elastic variable for elastic logging
    var elastic = {
        "error" : "",
        "customer" : queue,
        "user" : username,
        "firstname": vorname,
        "lastname": nachname,
        "phone": contact_tel,
        "mail": contact_email,
        "reference": ticketnr,
        "message": nachricht,
        "timetask": datetime == "" ? timestampdatetime : datetime,
        "timetaskdate": datetime == "" ? timestampdatetime.slice(0,10) : datetime.slice(0,10),
        "timestampdate": timestampdate,
        "timestampdatetime": timestampdatetime

    }
    // make an ajax call to the mailform.php
    $.ajax({
        type: "POST",
        url: "./scripts/mailform.php",
        data: "vorname=" + vorname +
            "&nachname=" + nachname +
            "&contact_tel=" + contact_tel +
            "&contact_email=" + contact_email +
            "&ticketnr=" + ticketnr +
            "&nachricht=" + nachricht +
            "&queue=" + queue +
            "&datetime=" + datetime +
            "&to_email=" + to_email +
            "&username=" + username,

        success: function (text) {
            // if the php-mailer returns the string "success", make the success message
            // visible and then reload the page after 3 seconds
            if (text == "success") {
                document.getElementById("success_message").style.display = "inline";
                setTimeout(function () { location.reload(true); }, 3000);
                // if the php-mailer returns anything other than "success",
                // make the fail message visible and don't reload the page
                // the user has to reload the page manually (either F5 or the clear button)
            } else {
                document.getElementById("fail_message").style.display = "inline";
            }

            // set error field to response from php mailer
            elastic.error = text;

            // after mailing, log to elastic server
            sendToElastic(elastic);

        }
    });
}

// get the email address from mapping jason by comparing queue and name
function getEmail(queue){
    // because of IE for-in has to be used instead of for-of
    for (var i in mappingJSON){
        if(queue === mappingJSON[i].name) {
            return mappingJSON[i].email;
        }
    }
}

