(function() {
    var elements;
    var windowHeight;

    function init() {
        elements = document.querySelectorAll('.hidden');
        windowHeight = window.innerHeight;
        console.log(elements);
    }

    function checkPosition() {
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            var positionFromTop = elements[i].getBoundingClientRect().top;
            console.log(positionFromTop)
            console.log(windowHeight)
            if (positionFromTop - windowHeight <= 0) {
                console.log('ovo se dogodi')
                element.classList.add('fade-in-element');
                element.classList.remove('hidden');
            }
        }
    }
    var sectionContainer = document.querySelector('.sections-container');
    sectionContainer.addEventListener('scroll', checkPosition);
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);

    init();
    checkPosition();
    console.log('skjdkfj')

})();

function preview(app) {
    var myModal = new Modal({
        el: document.getElementById(app)
    });
    myModal.show();
}