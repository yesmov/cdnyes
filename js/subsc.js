function validateEmail(e) {
    var t = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return e.length > 0 && t.test(e)
}

function subscribe() {
    if (!$.cookie("y-subscribed")) {
        $("#error-subscribe").hide();
        var e = $("#subscribe-email").val();
        "" == e.trim() ? ($("#error-subscribe").text("Please enter your email."), $("#error-subscribe").show()) : validateEmail(e) ? ($("#subscribe-submit").prop("disabled", !0), $("#subscribe-loading").show(), $.ajax({
            url: base_url + "ajax/subscribe.html",
            type: "POST",
            dataType: "json",
            data: {
                email: e
            },
            success: function(e) {
                1 == e.status && ($.cookie("y-subscribed", 1, {
                    expires: 365
                }), $("#success-subscribe").show()), $("#subscribe-email").val(""), $("#subscribe-loading").hide(), $("#subscribe-submit").removeAttr("disabled")
            }
        })) : ($("#error-subscribe").text("Please enter a valid email."), $("#error-subscribe").show())
    }
}