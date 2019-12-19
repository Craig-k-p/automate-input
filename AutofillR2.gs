function autofillR2( itemSheet, cellRow ) {
  var reuse = itemSheet.getRange( 'L' + cellRow.toString() )
  var resale = itemSheet.getRange( 'M' + cellRow.toString() )
  reuse.setValue( 'No' )
  resale.setValue( 'Yes' )
}
