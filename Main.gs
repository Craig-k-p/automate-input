// Main


// onEdit() ---- Each time a cell is edited
function onEdit() {
  
  // Get the active sheet
  var activeSheet = SpreadsheetApp.getActiveSheet();
  
  // Make sure we are in the correct sheet before we start making changes
  if ( activeSheet.getName() == 'Desktops' ); {
    
    // Get some basic information for our functions to use
    var document = SpreadsheetApp.getActiveSpreadsheet();  // the current Spreadsheet Document
    var itemSheet = document.getSheetByName('Desktops');       // itemSheet is the sheet named "Item"
    var dataSheet = document.getSheetByName('info');       // infoSheet is the sheet named "info"
    var activeCell = activeSheet.getActiveCell()
    var cellColumn = activeCell.getColumn()
    var cellRow = activeCell.getRow()
    
    // autoCount function
    if ( cellColumn == 2 && cellRow != 1 ) {
      autoCount( activeCell, cellRow )
      autofillR2( itemSheet, cellRow )
    }
    
    // timeStamp function
    if ( cellColumn == 2 && cellRow != 1 ) {
      timeStamp( activeCell, itemSheet )
    }
    
    // autoFillCPU function
    if ( cellColumn == 4 && cellRow != 1 ) {
      
      autoFillCPU( activeCell, dataSheet, itemSheet )
    }
      
  }
}
