$(function () {
    $("#submit").on("click", function (e) {
        e.preventDefault();
        var name = $("#name-input");
        var subject = $("#subject-input");
        var emailBody = $("#message-input");

        console.log("name" + name.val());
        console.log("subject" + subject.val());
        console.log("emailBody" + emailBody.val());

        window.location = 'mailto: shimmer10@aol.com' + '?subject=' + JSON.stringify(subject) + '&body=' + JSON.stringify(name) + "\n" + JSON.stringify(emailBody);
    });
});