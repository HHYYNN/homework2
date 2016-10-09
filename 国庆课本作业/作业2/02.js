// JavaScript Document
function addOrder(){
	var myTable=document.getElementById("myTable");
	var index=myTable.rows.length-1;
	var newRow=myTable.insertRow(index);
	newRow.id="r"+index;
	var col1=newRow.insertCell(0);
	col1.innerHTML="抗疲劳神奇钛项圈";
	var col2=newRow.insertCell(1);
	col2.innerHTML=index;
	var col3=newRow.insertCell(2);
	col3.innerHTML="&yen;49.00";
	var col4=newRow.insertCell(3);
	col4.innerHTML="<input name='del"+index+"' type='button' value='删除' onclick=\"delRow('r"+index+"')\" /> ";
	}
function delRow(rowId){
	var row=document.getElementById(rowId).rowIndex;
	document.getElementById("myTable").deleteRow(row);
}