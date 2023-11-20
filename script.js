document.querySelectorAll('section p').forEach(function(paragraph) {
    paragraph.addEventListener('click', function() {
        alert('You clicked on a paragraph!');
    });
});
