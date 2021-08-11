$(document).ready(function() {
	
	// Nearest Divisible Number with Iteration (10)
	$('#formmain input').on('change',function() {
	var div = $('#div').val();
	var num = $('#num').val();
	var ans = 0;
    var text = "";
    var mod = (Number(num) + Number(div)) % Number(div);
    ans = (mod == 0) ? num : (Number(num) + Number(div)) - Number(mod);

    var init = 0;
    if (Number(ans) % Number(div) === 0) {
    text = addToText(text, ans)
    init = 1;
    }

    for (i = init; i < 10; i++) {
    ans = Number(ans) + Number(div);
    text = addToText(text, ans)
    }

    function addToText(text, ans) {
    return text + "<div style='padding:5px 0px 1px 0;'> <span class='lnr lnr-pointer-right'></span>&nbsp;&nbsp;" + ans + "<\/div>";
    }
	
	var divlarge = ans - (div * 9);
    //$('#answer, #demo').fadeIn();
	if(!div){
		$('#divresult').html('<b style="color:#F00">Please enter a divisible number!</b>');
	}else if(!num){
		$('#divresult').html('<b style="color:#F00">Please enter a target number!</b>');		
	}else{
		$('#divresult').html('<span style="color:#F00;">'+ divlarge + ' - Nearest <small>(Largest)</small> Divisible by ' + div +' </span> <hr> Iteration (10) by ' + div + ':' + text);
	}
	
    });
 	// Nearest Divisible Number with Iteration (10)
	
	
	//Generate Odd and Even Numbers with Looping
	$('#oddevenresult').on('click',function() {
	var initial = Number($('#initialNumber').val());
	var targetnum = Number($('#targetNumber').val());
	var odd = "";
	var even = "";
	var e = 0, o = 0;
    
    for (i = initial; i <= targetnum; i++) {	
	 if(i % 2 == 0){
	 even = evenText(i);
	 e++;
	 }
	 else{
	 odd = oddText(i);
	 o++
	 }
	}

	function evenText(i) {
    return even + "<div style='padding:2px 0px 1px 0;'> <span class='lnr lnr-pointer-right'></span>&nbsp;&nbsp;" + i + "<\/div>";
    }
	function oddText(i) {
    return odd + "<div style='padding:2px 0px 1px 0;'> <span class='lnr lnr-pointer-right'></span>&nbsp;&nbsp;" + i + "<\/div>";
    }
	
	if(!initial){
		$('#checkresult').show();
		$('#evenresult').html("");
		$('#oddresult').html("");
		$('#checkresult').html('<b style="color:#F00">Please enter an initial number!</b>');
	}else if(!targetnum){
		$('#checkresult').show();
		$('#evenresult').html("");
		$('#oddresult').html("");
		$('#checkresult').html('<b style="color:#F00">Please enter a target number!</b>');		
	}else{
		$('#checkresult').hide();
		$('#evenresult').html("<small style='color:#F00;'>" + e + " - even number(s)</small><hr>" + even);
		$('#oddresult').html("<small style='color:#F00;'>" + o + " - odd number(s)</small><hr>" +odd);	
	}
	
    });
   //Generate Odd and Even Numbers with Looping
   
   
   //Count All Characters
    $('#countAll').keyup(function() {
	var count = $('#countAll').val();
    var withSpace = count.length;
    // Without using regex
    //var withOutSpace = $('#countAll').value.split(' ').join('').length;
    //with using Regex
    var withOutSpace = count.replace(/\s+/g, '').length;
    var wordsCount = count.match(/\S+/g).length;
    var vowelsCount =  count.split(/[aeiou]/g).length - 1;
    var consCount =  count.split(/[bcdfghjklmnpqrstvwxyz]/g).length - 1;
    var digitsCount = count.replace(/[^0-9]/g, '').length;
    var specialsCount = count.split(/[@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g).length - 1;
    //var senteCount = count.split(/[.?!]/g).length - 1;
    //var parsCount = count.split(/\n *\n/).length;

	//$('#parCount').html('<b>' + parsCount + '</b> - Paragraph(s)');
	//$('#sentCount').html('<b>' + senteCount + '</b> - Sentence(s)');
	$('#vowelCount').html('<b>' + vowelsCount + '</b> - Vowel(s)');
	$('#conCount').html('<b>' + consCount + '</b> - Consonant(s)');
	$('#wordCount').html('<b>' + wordsCount + '</b> - Word(s)');
	$('#specialCount').html('<b>' + specialsCount + '</b> - Special Character(s)');
	$('#digitCount').html('<b>' + digitsCount + '</b> - Digit(s)');
	$('#charNumWithSpace').html('<b>' + withSpace + '</b> - Character(s) with space');
	$('#charNumWithOutSpace').html('<b>' + withOutSpace + '</b> - Character(s) without space');

    });
	//Count All Characters
	
	
	//Decimal, Binary, Octal and Hexadecimal Converter
	$("input[name=option]:radio").change(function() {

		if ($("#deci").is(":checked")) {
				
            $('#label').html('Decimal Number :');
			$("input[name=num]").attr({"placeholder": "Enter a number only", "type": "number", "id": "dec"});
			$('#numresult').html('');
			$('#dec').val('');
								 
			$('#connumresult').on('click',function() {									   
			var dec = $("#dec").val();	
			if(!dec){
			$('#numresult').html('<b style="color:#F00">Please enter a number!</b>');
			}else if(!dec.match(/^[0-9]*$/g)){
			$('#numresult').html('<b style="color:#F00">A number consists of 0 to 9 digits only.</b>');	
			}else{
			var bin = parseInt(dec, 10).toString(2);
			var hexadec = parseInt(dec, 10).toString(16);
			var octa = parseInt(dec, 10).toString(8);
			$('#numresult').html('<b>Binary:&nbsp;</b>' + bin + '<br><b>Octal:&nbsp;</b>' + octa + '<br><b>Hexadecimal:&nbsp;</b>' + hexadec);	
			}
			
			});
								
        }
        else if ($("#bina").is(":checked")) {
			
            $('#label').html('Binary Number :');
			$("input[name=num]").attr({"placeholder": "Enter a binary number only", "type": "number", "id": "bin"});
			$('#numresult').html('');
			$('#bin').val('');
			
			$('#connumresult').on('click',function() {	
			var bin = $("#bin").val();
		   	if(!bin){
			$('#numresult').html('<b style="color:#F00">Please enter a binary number!</b>');
			}else if(!bin.match(/^[0-1]*$/g)){
			$('#numresult').html('<b style="color:#F00">A binary number consists of 0 and 1 digits only.</b>');	
			}else{
			var dec = parseInt(bin, 2);
			var hexadec = parseInt(dec, 10).toString(16);
			var octa = parseInt(dec, 10).toString(8);
			$('#numresult').html('<b>Decimal:&nbsp;</b>' + dec + '<br><b>Octal:&nbsp;</b>' + octa + '<br><b>Hexadecimal:&nbsp;</b>' + hexadec);
			}
			
			});
		
        }
		 else if ($("#octa").is(":checked")) {
			 
            $('#label').html('Octal Number :');
			$("input[name=num]").attr({"placeholder": "Enter a octal number only", "type": "text", "id": "octal"});
			$('#numresult').html('');
			$('#octal').val('');
			
			$('#connumresult').on('click',function() {	
			var octal = $("#octal").val();
			if(!octal){
			$('#numresult').html('<b style="color:#F00">Please enter a octal number!</b>');
			}else if(!octal.match(/^[0-7]*$/g)){
			$('#numresult').html('<b style="color:#F00">A octal number consists of 0 and 7 digits only.</b>');	
			}else{
			var dec = parseInt(octal, 8);
			var bin = parseInt(dec, 10).toString(2);
			var hexadec = parseInt(dec, 10).toString(16);
			$('#numresult').html('<b>Decimal:&nbsp;</b>' + dec + '<br><b>Binary:&nbsp;</b>' + bin + '<br><b>Hexadecimal:&nbsp;</b>' + hexadec);
			}
			
			});
				
        }
		 else if ($("#hexa").is(":checked")) {
            $('#label').html('Hexadecimal Number :');
			$("input[name=num]").attr({"placeholder": "Enter a hexadecimal number only", "type": "text", "id": "hexadec"});			
			$('#numresult').html('');
			$('#hexadec').val('');
			
			$('#connumresult').on('click',function() {	
			var hexadec = $("#hexadec").val();
			
			if(!hexadec){
			$('#numresult').html('<b style="color:#F00">Please enter a hexadecimal number!</b>');
			}else if(!hexadec.match(/^[0-9a-fA-F]*$/i)){
			$('#numresult').html('<b style="color:#F00">A hexadecimal number consists of 0 and 9 digits with A,B,C,D,E,F (or alternatively a, b, c, d, e, f) only.</b>');	
			}else{
			var dec = parseInt(hexadec, 16);
			var bin = parseInt(dec, 10).toString(2);
			var octal = parseInt(dec, 10).toString(8);
			$('#numresult').html('<b>Decimal:&nbsp;</b>' + dec + '<br><b>Binary:&nbsp;</b>' + bin + '<br><b>Octal:&nbsp;</b>' + octal);
			}
												   
			});
			
        }

		});

	//$("#deci").prop("checked", true).change();
	$("#deci").prop("checked", true).trigger("change");
	//Decimal, Binary, Octal and Hexadecimal Converter
	
	
	//Alphabetical Order (Ascending and Descending)
	$('#alphabetcheck').on('click',function() {	
	var alphabetword = $("#alphabetword").val();
	//var lowRegStr = stringnum.toLowerCase().replace(/\s+/g, '');
	var alphabetorderasc = alphabetword.toLowerCase().split('').sort().join(' ');
	var alphabetorderdesc = alphabetorderasc.split('').reverse().join(''); 
	
	if(!alphabetword){
	$('#alphabetresult').html('<b style="color:#F00">Please enter a word!</b>');
	}else if(!alphabetword.match(/[a-zA-Z]/g)){
	$('#alphabetresult').html('<b style="color:#F00">You must enter a letter(s) only.</b>');	
	}else{
	$('#alphabetresult').html('<div><b>Alphabetical Order (Ascending): </b><br>' + alphabetorderasc +'</div> <br><b>Alphabetical Order (Descending):</b><br>' +  alphabetorderdesc);  
	}
	
	});
	//Alphabetical Order (Ascending and Descending)	
	
	
	//Reverse and Palindrome Checker
	$('#palrevcheck').on('click',function() {	

	var stringnum = $("#stringnum").val();
	var lowRegStr = stringnum.toLowerCase().replace(/\s+/g, '');
	var reverseStr = lowRegStr.split('').reverse().join(''); 
	
	if(!stringnum) { 
	$('#palrevresult').html('<b>You need to input a string or number</b>');
	}else {	
	
	if (reverseStr !== lowRegStr)
	$('#palrevresult').html('<div><b>Reverse String/Number: </b><br>' + reverseStr +'</div> <br><b>Palindrome Checker:</b><br><span style="color:#F00; font-weight:bold;">' +  lowRegStr + '</span> is not a Palindrome'); 	  
	else
	$('#palrevresult').html('<div><b>Reverse String/Number: </b><br>' + reverseStr +'</div> <br><b>Palindrome Checker:</b><br><span style="color:#F00; font-weight:bold;">' + stringnum + '</span> is a Palindrome of <span style="color:#F00; font-weight:bold;">' + lowRegStr + '</span>');	  		 
	}

});
	//Reverse and Palindrome Checker
	
	
						   
});
