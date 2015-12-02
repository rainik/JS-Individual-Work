 var test = document.forms.quiz;
 //alert(test);
 var linksQ = test.elements.links;
 var listQ = test.elements.list;
 var servQ = test.elements.serv;
 var checkQ = test.elements.box;
 
 //alert(test.children.length);
 //alert(checkQ[0].getAttribute("checked"));
 /*
alert(linksQ.length);
alert(listQ.length);
alert(servQ.length);
alert(checkQ.getAttribute("checked"));
*/
var results = 0;

function showResults() {
	for (var i = 0; i < 8 ; i++) {
		switch (i) {
		case 0:		
			if (linksQ[i].checked == true) {
				results += 2;
			};
		case 1:
			if (checkQ[i].checked == true) {
				results += 1;
			};
			break;
		case 2:
			if (listQ[i].checked == true) {
				results += 2;
			};
			if (servQ[i].checked == true) {
				results += 2;
			};
			break;
		case 3:
			if (checkQ[i].checked == true) {
				results += 1;
			};
			break;
		case 4:
			if (checkQ[i].checked == true) {
				results += 1;
			};
			break;
		case 5:
			if (checkQ[i].checked == true) {
				results += 1;
			};
			break;
	}
}
//return results;
alert("You've obtained " + results + " points as you gave " + results * 10 + "% right answers"); 
}

