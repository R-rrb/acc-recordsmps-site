$(document).ready(function () {
    //check admin password if correct or not
    $("#current_password").keyup(function () {
        var current_password = $("#current_password").val();
        $.ajax({
            headers: {
                "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
            },
            type: "post",
            url: "/admin/check-current-password",
            data: { current_password: current_password },
            success: function (response) {
                if (response == "false") {
                    $("#verifyCurrentPassword").html(
                        "Current Password is Incorrect!"
                    );
                    $("#verifyCurrentPassword").css("color", "red");
                } else {
                    $("#verifyCurrentPassword").html(
                        "Current Password is correct!"
                    );
                    $("#verifyCurrentPassword").css("color", "green");
                }
            },
            error: function () {
                alert("Error");
            },
        });
    });
});
