
$(document).ready(function() {

    console.log("jQuery is ready!");

    $("h1").css("letter-spacing", "2px");

    $("#headline").text("Hello, I'm Zainab!");

    $(".intro").css("line-height", "1.8");

    $("#changeGreeting").click(function() {
        $("#headline").text("Welcome! Thanks for visiting my portfolio.");
    });

    $("#darkTheme").click(function() {
        $("body").css({
            "background-color": "#111111",
            "color": "#f5f5f5"
        });

        $("#profile, #about, #gallery, #favorites, #skills").css("background-color", "#1b1b1b");
    });

    $("#lightTheme").click(function() {
        $("body").css({
            "background-color": "#f4f4f4",
            "color": "#222222"
        });

        $("#profile, #about, #gallery, #favorites, #skills").css("background-color", "#ffffff");
    });

    $("#hideBtn").click(function() {
        $("#myDetails").hide();
    });

    $("#showBtn").click(function() {
        $("#myDetails").show();
    });

    $("#toggleBtn").click(function() {
        $("#myDetails").toggle();
    });

    $("#fadeInBtn").click(function() {
        $(".gallery-images img").fadeIn(1000);
    });

    $("#fadeOutBtn").click(function() {
        $(".gallery-images img").fadeOut(1000);
    });

    $("#fadeToggleBtn").click(function() {
        $(".gallery-images img").fadeToggle(1000);
    });

        $(".slide-heading").click(function() {
        $(this).next(".slide-content").slideToggle(500);
    });

    $("#hideAll").click(function() {
        $(".slide-content").slideUp(500);
    });

    $("#showAll").click(function() {
        $(".slide-content").slideDown(500);
    });

    $("#addSkill").click(function() {
        let skill = $("#skillInput").val().trim();

        if (skill !== "") {
            $("#skillList").append("<li>" + $("<div>").text(skill).html() + "</li>");
            $("#skillInput").val("");
        }
    });

    $("#prependSkill").click(function() {
        let skill = $("#skillInput").val().trim();

        if (skill !== "") {
            $("#skillList").prepend("<li>" + $("<div>").text(skill).html() + "</li>");
            $("#skillInput").val("");
        }
    });

    $("#removeSkill").click(function() {
        $("#skillList li:last").remove();
    });
    $("#changeLink").click(function() {
    $("#socialLink").attr("href", "https://github.com/topics/web-development");
    $("#socialLink").text("Visit Web Development on GitHub");
});
    $("#contactName, #contactEmail").on("input", function() {
        let name = $("#contactName").val();
        let email = $("#contactEmail").val();

        $("#previewName").text(name || "Not set");
        $("#previewEmail").text(email || "Not set");
    });
        let skillsShown = false;

    $("#animateSkills").click(function() {
        if (skillsShown === false) {
            $("#htmlBar").animate({ width: "85%" }, 1000);
            $("#cssBar").animate({ width: "75%" }, 1000);
            $("#jsBar").animate({ width: "60%" }, 1000);

            skillsShown = true;
        } else {
            $(".skill-progress").animate({ width: "0%" }, 1000);

            skillsShown = false;
        }
    });

});
