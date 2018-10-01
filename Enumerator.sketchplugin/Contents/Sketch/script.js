function renameArtboard(enteredName, pageName, artboard, index) {
  var originalArtboardName = artboard.name();
  var artboardName = originalArtboardName.replace(/ *\d\d */, '').replace(pageName, '');
  var num = String(index+1).padStart(2,'0');
  var newName = enteredName.replace('{ARTBOARD}', artboardName).replace('{PAGE}', pageName).replace('{NUM}', num);
  console.log(originalArtboardName + '->' + newName);
  artboard.setName(newName)
}

function sortArtboards(artboards) {
  artboards.sort(function (a, b) {
    return a.frame().x() - b.frame().x()
  });
}


var onRun = function (context) {
  var doc = context.document;
  var enteredName =
    String(doc.askForUserInput_initialValue("Renaming Scheme. {PAGE} = Name of Page Artboard is on. {ARTBOARD} = Name of Artboard. {NUM} = The index of the page", "{NUM} {ARTBOARD}"));
  if (!enteredName) return;

  var currentPage = doc.currentPage();
  var pageName = currentPage.name();
  var pageArtboards = currentPage.artboards();
  var artboards = [];
  console.log('Processing ' + pageArtboards.length + ' items');
  for (var i = 0; i < pageArtboards.length; i++) {
    artboards.push(pageArtboards[i]);
  }
  sortArtboards(artboards);
  for (i = 0; i < artboards.length; i++) {
    renameArtboard(enteredName, pageName, artboards[i], i);
  }
};



