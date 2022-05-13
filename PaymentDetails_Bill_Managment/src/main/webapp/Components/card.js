
$(document).ready(function() 
{ 
if ($("#alertSuccess").text().trim() == "") 
 { 
 $("#alertSuccess").hide(); 
 } 
 $("#alertError").hide(); 
}); 
// SAVE ============================================
$(document).on("click", "#btnSave", function(event) 
{ 
// Clear alerts---------------------
 $("#alertSuccess").text(""); 
 $("#alertSuccess").hide(); 
 $("#alertError").text(""); 
 $("#alertError").hide(); 
// Form validation-------------------
var status = validateCardForm(); 
if (status != true) 
 { 
 $("#alertError").text(status); 
 $("#alertError").show(); 
 return; 
 } 
// If valid------------------------
var type = ($("#hidCardIDSave").val() == "") ? "POST" : "PUT"; 
 $.ajax( 
 { 
 url : "CardsAPI", 
 type : type, 
 data : $("#formCard").serialize(), 
 dataType : "text", 
 complete : function(response, status) 
 { 
 onCardSaveComplete(response.responseText, status); 
 } 
 }); 
});

// UPDATE==========================================
$(document).on("click", ".btnUpdate", function(event) 
{ 
$("#hidCardIDSave").val($(this).data("carddetid")); 
 $("#cardNo").val($(this).closest("tr").find('td:eq(0)').text()); 
 $("#expDate").val($(this).closest("tr").find('td:eq(1)').text()); 
 $("#expMonth").val($(this).closest("tr").find('td:eq(2)').text()); 
 $("#expYear").val($(this).closest("tr").find('td:eq(3)').text()); 
 $("#securityCode").val($(this).closest("tr").find('td:eq(4)').text()); 
});

$(document).on("click", ".btnRemove", function(event) 
{ 
 $.ajax( 
 { 
 url : "CardsAPI", 
 type : "DELETE", 
 data : "cardDetID=" + $(this).data("carddetid"),
 dataType : "text", 
 complete : function(response, status) 
 { 
 onCardDeleteComplete(response.responseText, status); 
 } 
 }); 
});
// CLIENT-MODEL================================================================
function validateCardForm() 
{ 
// CODE
if ($("#cardNo").val().trim() == "") 
 { 
 return "Insert CardNo."; 
 } 
 
// is numerical value
var cNo = $("#cardNo").val().trim(); 
if (!$.isNumeric(cNo)) 
 { 
 return "Insert a numerical value for Card Number."; 
 }
if ($("#expDate").val().trim() == "") 
 { 
 return "Insert Expire Date."; 
 } 
// is numerical value
var exDate = $("#expDate").val().trim(); 
if (!$.isNumeric(exDate)) 
 { 
 return "Insert a numerical value for Expire Date."; 
 }
 if ($("#expDate").val() > 31) 
 { 
 return "max date value must be 31"; 
 }  
// -------------------------------
if ($("#expMonth").val().trim() == "") 
 { 
 return "Insert Expire Month."; 
 } 
// is numerical value
var exMonth = $("#expMonth").val().trim(); 
if (!$.isNumeric(exMonth)) 
 { 
 return "Insert a numerical value for Expire Month."; 
 } 
 if ($("#expMonth").val() > 12) 
 { 
 return "max month value must be 12"; 
 } 
 //
 if ($("#expYear").val().trim() == "") 
 { 
 return "Insert Expire Year."; 
 } 
// is numerical value
var exYear = $("#expYear").val().trim(); 
if (!$.isNumeric(exYear)) 
 { 
 return "Insert a numerical value for Expire Year."; 
 } 

// ------------------------
if ($("#securityCode").val().trim() == "") 
 { 
 return "Insert securityCode."; 
 } 
 var secCode = $("#securityCode").val().trim(); 
if (!$.isNumeric(secCode)) 
 { 
 return "Insert a numerical value for securityCode."; 
 } 
 if ($("#securityCode").val().length >= 4 ) 
 { 
 return "security code must have  3 Digits"; 
 } 
  if ($("#securityCode").val().length <= 2 ) 
 { 
 return "security code must have  3 Digits"; 
 } 
 
return true; 
}

function onCardSaveComplete(response, status) 
{ 
if (status == "success") 
 { 
 var resultSet = JSON.parse(response); 
 if (resultSet.status.trim() == "success") 
 { 
 $("#alertSuccess").text("Successfully saved."); 
 $("#alertSuccess").show(); 
 $("#divItemsGrid").html(resultSet.data); 
 } else if (resultSet.status.trim() == "error") 
 { 
 $("#alertError").text(resultSet.data); 
 $("#alertError").show(); 
 } 
 } else if (status == "error") 
 { 
 $("#alertError").text("Error while saving."); 
 $("#alertError").show(); 
 } else
 { 
 $("#alertError").text("Unknown error while saving.."); 
 $("#alertError").show(); 
 } 
 $("#hidCardIDSave").val(""); 
 $("#formCard")[0].reset(); 
}


function onCardDeleteComplete(response, status) 
{ 
if (status == "success") 
 { 
 var resultSet = JSON.parse(response); 
 if (resultSet.status.trim() == "success") 
 { 
 $("#alertSuccess").text("Successfully deleted."); 
 $("#alertSuccess").show(); 
 $("#divItemsGrid").html(resultSet.data); 
 } else if (resultSet.status.trim() == "error") 
 { 
 $("#alertError").text(resultSet.data); 
 $("#alertError").show(); 
 } 
 } else if (status == "error") 
 { 
 $("#alertError").text("Error while deleting."); 
 $("#alertError").show(); 
 } else
 { 
 $("#alertError").text("Unknown error while deleting.."); 
 $("#alertError").show(); 
 } 
}




