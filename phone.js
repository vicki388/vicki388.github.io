//JavaScript File
$(document).ready(function() { // do this when the document is loaded
	$("#content_dialer").show(); // show the element with ID "Dialer"
	$("#content_list").hide(); // hide the element with ID "Dialer"
	$("#content_add").hide(); // hide the element with ID "Dialer"
	
});
$("#AddContact").click(function() { // when "button_id" is clicked
	$("#content_add").show(); // show element
	$("#content_list").hide();	// hide other element
	$("#content_dialer").hide();	// hide other element
});
$("#Contacts").click(function() { // when "button_id" is clicked
	$("#content_add").hide(); // show element
	$("#content_list").show();	// hide other element
	$("#content_dialer").hide();	// hide other element
});
$("#Dialer").click(function() { // when "button_id" is clicked
	$("#content_add").hide(); // show element
	$("#content_list").hide();	// hide other element
	$("#content_dialer").show();	// hide other element
});