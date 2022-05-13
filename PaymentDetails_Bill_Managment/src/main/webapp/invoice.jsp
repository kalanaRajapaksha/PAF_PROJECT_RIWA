<%@page import="com.Bill"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.2.1.min.js"></script>
<script src="Components/card.js"></script>
<meta charset="ISO-8859-1">
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<br>
<div id="divItemsGrid">
 <%
 Bill invoice = new Bill(); 
 out.print(invoice.readInvoice()); 
 %>
</div>
 <br>
</body>
</html>