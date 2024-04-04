<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script>
$(document).ready(function() {
    // Navigation
    const menu = $('#main-menu');
    const underline = $('#nav-underline');
    let current = menu.find('.w--current');
    
    if (!current.length) {
        console.error('Der aktuelle Link wurde nicht gefunden.');
        return;
    }
    
    function setPosition(element) {
        underline.css({
            width: element.offsetWidth + 'px',
            left: element.offsetLeft + 'px'
        });
    }

    setPosition(current[0]);
    
    menu.on('mouseover', 'a', function() {
        setPosition(this);
    }).on('mouseleave', function() {
        setPosition(current[0]);
    });

    // Suchfeld-Logik
    const searchInput = $('#search');
    const searchReset = $('#search-reset');
    
    searchInput.on('input', function() {
        searchReset.css('display', this.value.length > 0 ? 'block' : 'none');
    });
    
    searchReset.on('click', function() {
        searchInput.val('').css('display', 'none');
    });

    searchInput.on('keypress', function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });

    // Automatischer Texteffekt im Suchfeld
    var texts = ["ChatGPT", "Leadgenerierung", "Für Skype"];
    var currentText = 0;
    var index = 0;
    var isPaused = false;

    function typeText() {
        if (isPaused) return;
        let text = texts[currentText];
        let updatedText = text.substr(0, isTyping ? ++index : --index);
        searchInput.attr('placeholder', updatedText);

        if (index === text.length || index === 0) {
            isTyping = !isTyping;
            if (index === 0) {
                currentText = (currentText + 1) % texts.length;
            }
            setTimeout(typeText, 2000);
        } else {
            setTimeout(typeText, isTyping ? 150 : 50);
        }
    }

    var isTyping = true;
    typeText();
    
    searchInput.on('focus', function() {
        isPaused = true;
        $(this).attr('placeholder', '');
    }).on('blur', function() {
        isPaused = false;
        typeText();
    });

    // Toggle-Höhe und Button-Text
    function toggleHeightAndButtonText(button, element) {
        var maxHeight = element.css('max-height');
        var newText = maxHeight === '120px' ? 'Einklappen' : 'Alle anzeigen';
        element.css('max-height', maxHeight === '120px' ? 'none' : '120px');
        button.text(newText);
    }

    $('[id^=button-]').click(function() {
        var targetType = this.id.replace('button-', '');
        toggleHeightAndButtonText($(this), $('#' + targetType));
    });
});
</script>

    // Funktionen zur Steuerung des Scroll-Verhaltens
    (function manageScrollBehavior() {
        var $body = $(document.body);
        var scrollPosition = 0;

        $('[scroll="disable"]').on('click', function() {
            var oldWidth = $body.innerWidth();
            scrollPosition = window.pageYOffset;
            $body.css({
                overflow: 'hidden',
                position: 'fixed',
                top: `-${scrollPosition}px`,
                width: oldWidth
            });
        });

        $('[scroll="enable"]').on('click', function() {
            if ($body.css('overflow') !== 'hidden') { scrollPosition = window.pageYOffset; }
            $body.css({
                overflow: '',
                position: '',
                top: '',
                width: ''
            });
            $(window).scrollTop(scrollPosition);
        });

        $('[scroll="both"]').on('click', function() {
            if ($body.css('overflow') !== 'hidden') {
                var oldWidth = $body.innerWidth();
                scrollPosition = window.pageYOffset;
                $body.css({
                    overflow: 'hidden',
                    position: 'fixed',
                    top: `-${scrollPosition}px`,
                    width: oldWidth
                });
            } else {
                $body.css({
                    overflow: '',
                    position: '',
                    top: '',
                    width: ''
                });
                $(window).scrollTop(scrollPosition);
            }
        });
    })();

    // Tooltips mit Tippy.js initialisieren
    tippy('.is-tippy', {
        theme: 'light',
    });
});

// Jetboost-Script separat halten
window.JETBOOST_SITE_ID = "clue5rxif00va0y2feuah595l";
(function(d) {
    var s = d.createElement("script");
    s.src = "https://cdn.jetboost.io/jetboost.js";
    s.async = 1;
    d.getElementsByTagName("head")[0].appendChild(s);
})(document);
