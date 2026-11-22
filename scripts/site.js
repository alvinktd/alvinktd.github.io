// PSEUDOCODE PLAN

// Modal: Pinch of Africa
// when #view-details-pinch clicked:
//     open #modal-pinch
$("#view-details-pinch").on("click", function () { // ←⁠​​​‌⁠ click event

    // ↓ action/if snippets ↓
    $("#modal-pinch").get(0).showModal()
    // ↑ action/if snippets ↑

}) // ←⁠​​​‌⁠ click event


// when #modal-close-pinch clicked:
//     close #modal-pinch
$("#modal-close-pinch").on("click", function () { // ←⁠​​​‌⁠ click event

    // ↓ action/if snippets ↓
    $("#modal-pinch").get(0).close()

    // ↑ action/if snippets ↑

}) // ←⁠​​​‌⁠ click event

// Hamburger menu
// when #hamburger-button or #close-menu-button clicked:
//     if #site-nav has .hidden:
//         remove .hidden from #site-nav
//         add .hidden to #hamburger-button
//         remove .hidden from #close-menu-button
//     else:
//         add .hidden to #site-nav
//         add .hidden to #close-menu-button
//         remove .hidden from #hamburger-button
$("#hamburger-button, #close-menu-button").on("click", function () { // ←⁠​​​‌⁠ click event

    // ↓ action/if snippets ↓
    if ($("#site-nav").hasClass("hidden")) { // ←⁠​‌‌​⁠ element has css class

        // ↓ action snippets (class on element) ↓
        $("#site-nav").removeClass("hidden")
        $("#hamburger-button").addClass("hidden")
        $("#close-menu-button").removeClass("hidden")

        // ↑ action snippets (class on element) ↑

    } else { // ←⁠​‌‌​⁠ element has css class

        // ↓ action snippets (class not on element) ↓
        $("#site-nav").addClass("hidden")
        $("#close-menu-button").addClass("hidden")
        $("#hamburger-button").removeClass("hidden")


        // ↑ action snippets (class not on element) ↑

    } // ←⁠​‌‌​⁠ element has css class


    // ↑ action/if snippets ↑

}) // ←⁠​​​‌⁠ click event



// on page load (ready):
//     if window is narrow:
//         add .hidden to #site-nav
//         add .hidden to #close-menu-button
//         remove .hidden from #hamburger-button
//     else if window is wide:
//         remove .hidden from #site-nav
//         add .hidden to #close-menu-button
$(document).ready(function () { // ←⁠​​‌​⁠ page ready event

    // ↓ action/if snippets ↓
    if (window.matchMedia("(max-width: 899px)").matches) { // ←⁠​‌​‌⁠ get browser width

        // ↓ action snippets (≤ width) ↓
        $("#site-nav").addClass("hidden")
        $("#close-menu-button").addClass("hidden")
        $("#hamburger-button").removeClass("hidden")

        // ↑ action snippets (≤ width) ↑

    } else { // ←⁠​‌​‌⁠ get browser width

        // ↓ action snippets (> width) ↓
        $("#site-nav").removeClass("hidden")
        $("#close-menu-button").addClass("hidden")

        // ↑ action snippets (> width) ↑

    } // ←⁠​‌​‌⁠ get browser width


    // ↑ action/if snippets ↑

}) // ←⁠​​‌​⁠ page ready event

// on window resize:
//     if window is narrow:
//         add .hidden to #site-nav
//         add .hidden to #close-menu-button
//         remove .hidden from #hamburger-button
//     else if window is wide:
//         remove .hidden from #site-nav
//         add .hidden to #close-menu-button

$(window).on("resize", function () { // ←⁠​​‌‌⁠ resize browser window event

    // ↓ action/if snippets ↓
    if (window.matchMedia("(max-width: 899px)").matches) { // ←⁠​‌​‌⁠ get browser width

        // ↓ action snippets (≤ width) ↓
        $("#site-nav").addClass("hidden")
        $("#close-menu-button").addClass("hidden")
        $("#hamburger-button").removeClass("hidden")
        // ↑ action snippets (≤ width) ↑

    } else { // ←⁠​‌​‌⁠ get browser width

        // ↓ action snippets (> width) ↓
        $("#site-nav").removeClass("hidden")
        $("#close-menu-button").addClass("hidden")

        // ↑ action snippets (> width) ↑

    } // ←⁠​‌​‌⁠ get browser width


    // ↑ action/if snippets ↑

}) // ←⁠​​‌‌⁠ resize browser window event

// Modal: Cornell Consulting
// when #view-details-consulting clicked:
//     open #modal-consulting
$("#view-details-consulting").on("click", function () { // ←⁠​​​‌⁠ click event

    // ↓ action/if snippets ↓
    $("#modal-consulting").get(0).showModal()
    // ↑ action/if snippets ↑

}) // ←⁠​​​‌⁠ click event
// when #modal-close-consulting clicked:
//     close #modal-consulting
$("#modal-close-consulting").on("click", function () { // ←⁠​​​‌⁠ click event

    // ↓ action/if snippets ↓
    $("#modal-consulting").get(0).close()

    // ↑ action/if snippets ↑

}) // ←⁠​​​‌⁠ click event



// Modal: OpenSesame
// when #view-details-opensesame clicked:
//     open #modal-opensesame
$("#view-details-opensesame").on("click", function () { // ← click event

    // ↓ action/if snippets ↓
    $("#modal-opensesame").get(0).showModal()
    // ↑ action/if snippets ↑

}) // ← click event
// when #modal-close-opensesame clicked:
//     close #modal-opensesame
$("#modal-close-opensesame").on("click", function () { // ← click event

    // ↓ action/if snippets ↓
    $("#modal-opensesame").get(0).close()
    // ↑ action/if snippets ↑

}) // ← click event

// Modal: Cornell Athletics
// when #view-details-athletics clicked:
//     open #modal-athletics
$("#view-details-athletics").on("click", function () { // ← click event

    // ↓ action/if snippets ↓
    $("#modal-athletics").get(0).showModal()
    // ↑ action/if snippets ↑

}) // ← click event
// when #modal-close-athletics clicked:
//     close #modal-athletics
$("#modal-close-athletics").on("click", function () { // ← click event

    // ↓ action/if snippets ↓
    $("#modal-athletics").get(0).close()
    // ↑ action/if snippets ↑

}) // ← click event

// Modal: Project Access
// when #view-details-project-access clicked:
//     open #modal-project-access
$("#view-details-project-access").on("click", function () { // ← click event

    // ↓ action/if snippets ↓
    $("#modal-project-access").get(0).showModal()
    // ↑ action/if snippets ↑

}) // ← click event
// when #modal-close-project-access clicked:
//     close #modal-project-access
$("#modal-close-project-access").on("click", function () { // ← click event

    // ↓ action/if snippets ↓
    $("#modal-project-access").get(0).close()
    // ↑ action/if snippets ↑

}) // ← click event

// Modal: Mosakowski Institute
// when #view-details-mosakowski clicked:
//     open #modal-mosakowski
$("#view-details-mosakowski").on("click", function () { // ← click event

    // ↓ action/if snippets ↓
    $("#modal-mosakowski").get(0).showModal()
    // ↑ action/if snippets ↑

}) // ← click event
// when #modal-close-mosakowski clicked:
//     close #modal-mosakowski
$("#modal-close-mosakowski").on("click", function () { // ← click event

    // ↓ action/if snippets ↓
    $("#modal-mosakowski").get(0).close()
    // ↑ action/if snippets ↑

}) // ← click event

// Modal: Masterman's
// when #view-details-mastermans clicked:
//     open #modal-mastermans
$("#view-details-mastermans").on("click", function () { // ← click event

    // ↓ action/if snippets ↓
    $("#modal-mastermans").get(0).showModal()
    // ↑ action/if snippets ↑

}) // ← click event
// when #modal-close-mastermans clicked:
//     close #modal-mastermans
$("#modal-close-mastermans").on("click", function () { // ← click event

    // ↓ action/if snippets ↓
    $("#modal-mastermans").get(0).close()
    // ↑ action/if snippets ↑

}) // ← click event

// Modal: Kohl's
// when #view-details-kohls clicked:
//     open #modal-kohls
$("#view-details-kohls").on("click", function () { // ← click event

    // ↓ action/if snippets ↓
    $("#modal-kohls").get(0).showModal()
    // ↑ action/if snippets ↑

}) // ← click event
// when #modal-close-kohls clicked:
//     close #modal-kohls
$("#modal-close-kohls").on("click", function () { // ← click event

    // ↓ action/if snippets ↓
    $("#modal-kohls").get(0).close()
    // ↑ action/if snippets ↑

}) // ← click event
