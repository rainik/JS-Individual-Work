var fCalc = document.forms.calcresult;
var inpStr = fCalc.clres;

var result = 0;
var newVal = false;
var operation = "";



//обрабатываем нажатие
function Num (n) 
{
		if (newVal) 
		{
			inpStr.value = n;
			newVal = false;
		}	
		else
		{
			if (inpStr.value == "0")
				inpStr.value = n;
			else
				inpStr.value += n;
		}
}

// Очистка текущего результата
/*function ClearEntry () 
{
		inpStr.value = "0";
		FlagNewNum = true;
}
*/
	
// Полная очистка всех результатов
function Clear () 
{
		result = 0;
		operation = "";
		inpStr.value = "0";
}

function Action (operand) 
{
		var fromInput = +inpStr.value;
		if (newVal && operation != "=")
		{
			inpStr.value = result;
		}
		else
		{
			newVal = true;
			if ( '+' == operation )
				//result += parseFloat(fromInput);
				result += fromInput;
			else if ( '-' == operation )
				//result -= parseFloat(fromInput);
				result -= fromInput;
			else if ( '/' == operation )
				//result /= parseFloat(fromInput);
				result /= fromInput;
			else if ( '*' == operation )
				//result *= parseFloat(fromInput);
				result *= fromInput;
			else
				//result = parseFloat(fromInput);
				result = fromInput;
			inpStr.value = result;
			operation = operand;
		}
}

function Neg () 
{
		inpStr.value = +inpStr.value * -1;
}

function Dec () 
{
		var curReadOut = inpStr.value;
		curReadOut = curReadOut + ".";
		
/*		if (newVal) 
		{
			curReadOut = "0.";
			newVal = false;
		}
		else
		{
			if (curReadOut.indexOf(".") == -1) {
				curReadOut += ".";
			}
		} */
		inpStr.value = curReadOut;
}