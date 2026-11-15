/* Alvin Kwame Tete-Djawu personal site.
   Three small jobs and nothing else.
   The site still works with this file turned off.

   1. A Copy email button next to the email link.
   2. The jump links on the work page light up as you scroll.
   3. Blocks below the first screen fade in once.
*/

(function () {
    "use strict";

    /* Small message that pops up at the bottom of the screen. */
    var toast = null;
    var toastTimer = null;

    function showToast(message) {
        if (!toast) {
            toast = document.createElement("div");
            toast.className = "toast";
            toast.setAttribute("role", "status");
            toast.setAttribute("aria-live", "polite");
            document.body.appendChild(toast);
        }
        toast.textContent = message;
        toast.classList.add("is-visible");
        window.clearTimeout(toastTimer);
        toastTimer = window.setTimeout(function () {
            toast.classList.remove("is-visible");
        }, 2200);
    }

    /* Copies text. Uses the clipboard when it can, and an old trick when it cannot. */
    function copyText(text) {
        if (navigator.clipboard && window.isSecureContext) {
            return navigator.clipboard.writeText(text);
        }
        return new Promise(function (resolve, reject) {
            var field = document.createElement("textarea");
            field.value = text;
            field.setAttribute("readonly", "");
            field.style.position = "fixed";
            field.style.opacity = "0";
            document.body.appendChild(field);
            field.select();
            try {
                if (document.execCommand("copy")) {
                    resolve();
                } else {
                    reject();
                }
            } catch (error) {
                reject(error);
            }
            document.body.removeChild(field);
        });
    }

    /* Job 1. Adds a button after every email link marked with data-copy-email. */
    function initCopyEmail() {
        var links = document.querySelectorAll("a[data-copy-email]");
        links.forEach(function (link) {
            var address = link.getAttribute("href").replace("mailto:", "");
            var button = document.createElement("button");
            button.type = "button";
            button.className = "copy-button";
            button.textContent = "Copy email";
            button.addEventListener("click", function () {
                copyText(address).then(
                    function () {
                        showToast("Email copied");
                    },
                    function () {
                        showToast("Copy failed, the address is " + address);
                    }
                );
            });
            link.parentNode.insertBefore(button, link.nextSibling);
        });
    }

    /* Job 2. Watches the scroll and marks the jump link for the section on screen. */
    function initScrollSpy() {
        var links = Array.prototype.slice.call(
            document.querySelectorAll(".page-nav a[href^='#']")
        );
        if (!links.length) {
            return;
        }

        var items = [];
        links.forEach(function (link) {
            var section = document.getElementById(link.getAttribute("href").slice(1));
            if (section) {
                items.push({ link: link, section: section });
            }
        });
        if (!items.length) {
            return;
        }

        var ticking = false;

        function mark(active) {
            items.forEach(function (item) {
                var on = item === active;
                item.link.classList.toggle("is-active", on);
                if (on) {
                    item.link.setAttribute("aria-current", "true");
                } else {
                    item.link.removeAttribute("aria-current");
                }
            });
        }

        function update() {
            ticking = false;
            var line = window.innerHeight * 0.3;
            var active = null;

            /* The last section whose top has passed the line wins. */
            items.forEach(function (item) {
                if (item.section.getBoundingClientRect().top <= line) {
                    active = item;
                }
            });

            /* Short last sections never reach the line, so the page bottom picks the last one. */
            var atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
            if (atBottom) {
                active = items[items.length - 1];
            }

            mark(active);
        }

        function onScroll() {
            if (!ticking) {
                ticking = true;
                window.requestAnimationFrame(update);
            }
        }

        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);
        update();
    }

    /* Job 3. Fades in blocks that start below the first screen. Skipped for reduced motion. */
    function initReveal() {
        if (!("IntersectionObserver" in window)) {
            return;
        }
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            return;
        }

        var targets = document.querySelectorAll(
            ".role, .entry, .school-row, .skill-group, .story-block, .facts, .certification-list"
        );
        var viewHeight = window.innerHeight;

        var observer = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
        );

        targets.forEach(function (el) {
            /* Anything already on screen, or inside a closed drop-down, stays as it is. */
            if (el.getBoundingClientRect().top < viewHeight) {
                return;
            }
            el.classList.add("reveal");
            observer.observe(el);
        });
    }

    initCopyEmail();
    initScrollSpy();
    initReveal();
})();
