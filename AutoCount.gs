// Automatically number units



function autoCount( activeCell, cellRow ) {
  
  // i.offset( y, x )
  var countCell = activeCell.offset( 0, -1 )
  //Logger.log( '\n\tCurrent Cell: %s\n\tCell to change: %s\n\tAbove Cell: %s', activeCell.getA1Notation(), countCell.getA1Notation(), countCell.offset( -1,0 ).getA1Notation() )
  
  if ( cellRow == 2 ) {
    
    //Logger.log( '\n\tcellRow is %s.. setting value to 1', cellRow )
    countCell.setValue( 1 )
    
  } 
  
  else if ( cellRow > 2 ) {
    
    //Logger.log( '\n\tAbove Cell value: %s\n\tNew Cell value: %s')
    countCell.setValue( countCell.offset( -1,0 ).getValue() + 1 )
    
  }
}
