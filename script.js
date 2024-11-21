$(document).ready(function() {
    $(".toggle-btn").click(function() {
        $(".profile-bio").toggleClass("expanded");
        $(".profile-img").toggleClass("blurred");
        var buttonText = $(".profile-bio").hasClass("expanded") ? "Show Less" : "Show More";
        $(this).text(buttonText);
    });
});