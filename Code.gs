function doGet(e) {
  return HtmlService.createTemplateFromFile("index").evaluate()
  .addMetaTag('viewport', 'width=device-width, initial-scale=1')
  .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent()
}

function checkLogin(employeeid) {
  let ss = SpreadsheetApp.openById('xxxxxx');
  let sheet = ss.getSheetByName("xxx");
  var getLastRow = sheet.getLastRow();
  var found_record = '';
  for(var i = 1; i <= getLastRow; i++)
  {
   if(sheet.getRange(i, 1).getDisplayValue().toUpperCase() == employeeid.toUpperCase())
   {
     found_record = sheet.getRange(i,2).getDisplayValue();
     found_record2 = sheet.getRange(i,4).getDisplayValue();
      var data2 = {
        username: found_record,
        department: found_record2
      };
   }    
  }
  if(found_record == '')
  {
    var data2 = {
      username: 'FALSE',
      department: 'FALSE'
    }; 
  }
  return data2;
}

function addData(data) {
  let ss = SpreadsheetApp.openById('xxxxxxx');
  let sheet = ss.getSheetByName("xxx");

  //let ss = SpreadsheetApp.openById('1wSCjtD-9DEHHh0Hl41UfOLKGK1U8ME8dwFW1S1odZAs');
  //let sheet = ss.getSheets()[0];

  let employeeid = "'"+data.employeeid;
  
  //Input data in spreadsheet
  var datelogin =  Utilities.formatDate(new Date(),"GMT+7","yyyy/MM/dd");
  var timelogin = Utilities.formatDate(new Date(),"GMT+7", "HH:mm:ss");
  var rowdata =[datelogin,timelogin,employeeid,data.username,data.department];
  sheet.appendRow(rowdata)
  SpreadsheetApp.flush();
  var lastRow = sheet.getLastRow();
  console.info(lastRow);
  //sheet.insertRowAfter(sheet.getLastRow(), rowdata);
  //sheet.appendRow([datelogin, timelogin]);
  //logger.log(data.employeeid," ",data.username);
  
  return true;
}

function displayTitle(){
  let ss = SpreadsheetApp.openById('xxxxxxx');
  let sheet = ss.getSheetByName('xxxx');
  let rangeTitle1 = sheetName + "!B2";
  let title1 = sheet.getRange(rangeTitle1).getValue();
  return title1;
}

function statusForm(){
  let ss = SpreadsheetApp.openById('xxxxxxx');
  let sheet = ss.getSheetByName('xxx');
  let rangeStatus = sheetName + "!B4";
  let statusf = sheet.getRange(rangeStatus).getValue();
  return statusf;
}
