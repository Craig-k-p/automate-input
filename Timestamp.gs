// Timestamp
// Ver 1.0
//
// Stamp the day/month/year/hour/minute into the provided sheet (Column 14)
//
// Future improvements:
//   - Auto-find the column with the heading "Date"
//   - Undo date for deleted row
//   - (Done) Figure out how to get the day/month/year and time



function timeStamp( activeCell, itemSheet ) {
  
  
  
  // Combine the column letter with..
  // Get the current row (integer) and change it to a string
  var dateCellA1 = 'N' + activeCell.getRow().toString();
  //Logger.log( dateCellA1 );
  
  var date  = new Date()
  var day   = date.getDate().toString()
  var month = (date.getMonth() + 1).toString()
  var year   = date.getYear().toString()
  var hour   = date.getHours().toString()
  var minute = date.getMinutes().toString()
  
  if ( minute.length == 1 ) {
    var minute = '0' + minute
  }
  
  //Logger.log( '\n\t%s', date )
  
  var formattedDate = month +'.'+ day +'.'+ year +' - '+ hour +':'+ minute
  
  var dateCell = itemSheet.getRange( dateCellA1 );
        
  dateCell.setValue( formattedDate );
  
}
