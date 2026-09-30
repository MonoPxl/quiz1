document.addEventListener("DOMContentLoaded", function () {
  setupLegacyPageNavigation();
});

function setupLegacyPageNavigation() {
    const currentPage = document.body.getAttribute("data-page");

    if (!currentPage) {
        return;
    }

    // Activate the exact current page link.
    document.querySelectorAll("[data-page-link]").forEach(function (link) {
        const page = link.getAttribute("data-page-link");
        const isCurrentPage = page === currentPage;

        link.classList.toggle("active", isCurrentPage);

        if (isCurrentPage) {
            link.setAttribute("aria-current", "page");
        } else {
            link.removeAttribute("aria-current");
        }
    });

    // Keep the Ambon parent and dropdown arrow active for its child pages.
    const ambonGroup = document.querySelector(".ambon-nav-group");
    const ambonMainLink = document.querySelector(".ambon-main-link");
    const ambonMenuToggle = document.querySelector(".ambon-menu-toggle");
    const ambonPages = ["hometown", "food", "places"];
    const ambonIsActive = ambonPages.includes(currentPage);

    if (ambonGroup) {
        ambonGroup.classList.toggle("is-active", ambonIsActive);
    }

    if (ambonMainLink) {
        ambonMainLink.classList.toggle("active", ambonIsActive);
    }

    if (ambonMenuToggle) {
        ambonMenuToggle.classList.toggle("active", ambonIsActive);
    }
}