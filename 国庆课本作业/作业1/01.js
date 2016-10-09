// JavaScript Document
function addRow(){
	var fRow=document.getElementById("r3");
	var newRow=document.createElement("tr");
	var col1=document.createElement("td");
	col1.innerHTML="幸福从天而降";
	var col2=document.createElement("td");
	col2.innerHTML="&yen;18.50";
	col2.setAttribute("align","center");
	newRow.appendChild(col1);
	newRow.appendChild(col2);
	document.getElementById("r3").parentNode.insertBefore(newRow,fRow);
}
function del(){
	var delRow=document.getElementById("r2");
	delRow.parentNode.removeChild(delRow);
}
function change(){
	var biaoti=document.getElementById("r1");
	biaoti.setAttribute("style","font-weight:blod;text-align:center;background-color:#cccccc;");
}
function copy(){
	var last=document.getElementById("r3");
	var newRow=last.cloneNode(true);
	document.getElementById("myTable").appendChild(newRow);
	
}