<%@page import="com.CardDetails"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%
if (request.getParameter("cardNo") != null) 
{ 
 CardDetails cObject = new CardDetails(); 
 String stsMsg = ""; 
//Insert--------------------------
if (request.getParameter("hidCardIDSave") == "") 
 { 
 stsMsg = cObject.insertCardDetails(request.getParameter("cardNo"), 
 request.getParameter("expDate"), 
 request.getParameter("expMonth"), 
 request.getParameter("expYear"),
 request.getParameter("securityCode"));
 } 
else//Update----------------------
 { 
 stsMsg = cObject.updateCardDetails(request.getParameter("hidCardIDSave"), 
 request.getParameter("cardNo"), 
 request.getParameter("expDate"), 
 request.getParameter("expMonth"), 
 request.getParameter("expYear"),
 request.getParameter("securityCode"));
 } 
 session.setAttribute("statusMsg", stsMsg); 
} 
//Delete-----------------------------
if (request.getParameter("hidCardIDDelete") != null) 
{ 
 CardDetails cObject = new CardDetails(); 
 String stsMsg = 
 cObject.deleteCardDetails(request.getParameter("hidCardIDDelete")); 
 session.setAttribute("statusMsg", stsMsg); 
}

%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>CardDetails Management</title>
<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.2.1.min.js"></script>
<script src="Components/card.js"></script>
</head>
<body> 
<div class="container"><div class="row"><div class="col-6"> 
<h1>CardDetails Management</h1>
<form id="formCard" name="formCard">
 Card No: 
 <input id="cardNo" name="cardNo" type="text" 
 class="form-control form-control-sm">
 <br> Expire Date: 
 <input id="expDate" name="expDate" type="text" 
 class="form-control form-control-sm">
 <br> Expire Month: 
 <input id="expMonth" name="expMonth" type="text" 
 class="form-control form-control-sm">
 <br> Expire Year: 
 <input id="expYear" name="expYear" type="text" 
 class="form-control form-control-sm">
 <br> Security Code: 
 <input id="securityCode" name="securityCode" type="text" 
 class="form-control form-control-sm">
 <br>
 <input id="btnSave" name="btnSave" type="button" value="Save" 
  class="btn btn-primary">
  <br> <br>
 <a href="bill.jsp">bill</a>
  <br> <br>
  <a href="invoice.jsp">invoice</a>
 <input type="hidden" id="hidCardIDSave" 
 name="hidCardIDSave" value="">
</form>
<div id="alertSuccess" class="alert alert-success"></div>
<div id="alertError" class="alert alert-danger"></div>
<br>
<div id="divItemsGrid">
 <%
 CardDetails cObject = new CardDetails(); 
 out.print(cObject.readCardDetails()); 
 %>
</div>
 <br>
  <br>
</div> </div> </div> 
</body>
</html>
