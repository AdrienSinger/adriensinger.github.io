function OnPageLoaded() {
    LinkTrigger();
    SetupScrollToContact();
}

function LinkTrigger() {
    var trigger = $('.toggle-trigger');
    var target = $('.toggle-target');
    target.IsShown = false;
    target.toggle();

    trigger.click(function () {
        target.toggle(350);
        target.IsShown = !target.IsShown;
        trigger.addClass(target.IsShown ? "fa-angle-up" : "fa-angle-down");
        trigger.removeClass(target.IsShown ? "fa-angle-down" : "fa-angle-up");
    });
}

function SetupScrollToContact() {
    var goToContact = $('#go-contact');
    goToContact.click(function () {
        $('html, body').animate({
            scrollTop: $('#contact-target').offset().top
        }, 500);
    })
}

window.onload = OnPageLoaded;