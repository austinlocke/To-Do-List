/* Driver function that creates all the event listeners */
const createListeners = (function () {
    // Toggle item color and line-through effect on click
    $(".listContainer").on("click", "li", function () {
        $(this).toggleClass("clicked");
    });

    // Remove item if trash icon is clicked
    $(".listContainer").on("click", ".delete", function (event) {
        $(this).parent().fadeOut(500, function () {
            $(this).remove();
        });
        event.stopPropagation();
    });

    // Append item to ul once enter is clicked inside input box
    $(".input").on("keypress", function (event) {
        // Check for keypress 'enter' and add item to list
        if (event.which === 13) {
            const newItem = $(this).val();
            $(this).val("");
            $("ul").append(`<li><span class="delete"><i class='fas fa-trash'></i></span> ${newItem}</li>`);
        }
    });

    // Toggle 'Add item' input box when edit icon is clicked
    $("#addToggle").on("click", function () {
        $(".input").fadeToggle();
    });
})();
