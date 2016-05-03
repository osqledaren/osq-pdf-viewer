pdfGrid = document.getElementsByClassName('pdf-stack');

var meta = [
    {
        'pdf': 'http://osqledaren.se/wp-content/uploads/2016/05/Osq1603s5-1.pdf',
        'frontpage': 'frontpage.jpg',
        'editorInChief': 'Tania Christensen',
        'year': 2015
    },
    {
        'pdf': 'http://osqledaren.se/wp-content/uploads/2016/05/Osq1603s5-1.pdf',
        'frontpage': 'frontpage.jpg',
        'editorInChief': 'Tania Christensen',
        'year': 2015
    },
    {
        'pdf': 'http://osqledaren.se/wp-content/uploads/2016/05/Osq1603s5-1.pdf',
        'frontpage': 'frontpage.jpg',
        'editorInChief': 'Tania Christensen',
        'year': 2015
    },
    {
        'pdf': 'http://osqledaren.se/wp-content/uploads/2016/05/Osq1603s5-1.pdf',
        'frontpage': 'frontpage.jpg',
        'editorInChief': 'Tania Christensen',
        'year': 2015
    }
];

for (var i in meta) {
    pdfGrid[0].innerHTML = pdfGrid[0].innerHTML + '<img src=' + meta[i].frontpage + ' class="pdf"/>';
}
