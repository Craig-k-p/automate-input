// Autofill CPU
// Ver 1.0
//
// Functions:
//   - Match entered CPU to its stats
//   - Fill in GHz (E or 5) and cores (F or 6)
//
// Future improvements:
//   - Auto-find the column with the heading "CPU"
//   - Undo date for deleted row

function autoFillCPU( activeCell, dataSheet, itemSheet ) {
 
  // activeCell   - currently selected/edited cell
  // activeCellA1 - stores the cell's A1 value i.e. D5
  var activeCellA1 = activeCell.getA1Notation() 
    
  // Log the names of the sheet
  //Logger.log( '\n\titemSheet name is: %s\n\tdataSheet name is: %s\n', itemSheet.getName(), dataSheet.getName() )    
  
  // Save the cell value as the cpu variable
  var CPU = activeCell.getValue();
      
  // Log the processor recorded in the cell
  //Logger.log( '\n\tProcessor cell value = %s\n', CPU )
      
  // Create a list/array of CPU values in the second column (includes empty cells)
  var allCPUs = dataSheet.getRange('B2:B300').getValues()
      
  // Log the array of CPU values
  //Logger.log( '\n\tAll processors:\n\t%s', allCPUs )
      
  // Now loop through the array of predetermined CPU names until a match is found
  var i = 0
  var cpuMatch = null
  var cpu_found = false
  while ( cpu_found == false && i <= allCPUs.length ) {
        
     // if the value in allCPUs[index position] is the same as the recorded CPU..
     if ( allCPUs[i] == CPU ) {
          
       // ..save the row number (as a string) and cpu name 
       var cpuRow = (i + 2).toString()
       var cpuMatch = allCPUs[i]
       // log the row number with the matching cpu name for verification
       //Logger.log( '\n\tCPU match row: %s\n\tCPU match value: %s', cpuRow, cpuMatch )
       cpu_found = true
        
     // else increment the i variable to avoid infinite loops
     } else {
       i += 1
        }   
      
     // If cpuMatch has a value
     if ( cpuMatch != null ) {
       
       //Logger.log( '\n\tcpuMatch = %s\n\ttypeof cpuMatch = %s', cpuMatch, typeof cpuMatch )
       var cellGHz = 'C' + cpuRow    // Get A1 notation for the cell to the right of the cpu cell
       var cellCores = 'D' + cpuRow  // Get A1 notation for the cell 2 to the right of the cpu cell
       var GHz = dataSheet.getRange( cellGHz ).getValue()      // Get the value in the GHz cell
       var cores = dataSheet.getRange( cellCores ).getValue()  // Get the value in the Cores cell
       //Logger.log( '\n\tGHz: %s\n\tCores: %s', GHz, cores )
          
       activeCell.offset( 0 , 1 ).setValue( GHz )
       activeCell.offset( 0 , 2 ).setValue( cores )
       itemSheet.setActiveSelection( activeCell.offset(0,3) )
    }   
  }
}
