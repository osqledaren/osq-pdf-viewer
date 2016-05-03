pdfGrid = document.getElementById('pdf-grid');

var meta = [{
    'pdf': 'http://osqledaren.se/wp-content/uploads/2016/05/Osq1603s5-1.pdf',
    'frontpage': 'frontpage.jpg',
    'editorInChief': 'Tania Christensen',
    'year': 2015
}];

for (var i in meta) {
    pdfGrid.innerHTML = pdfGrid.innerHTML + '<img src=' + meta[i].frontpage + ' class="pdf"/>';
}
