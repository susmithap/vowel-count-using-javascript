function vowel_count(str1)
{
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;
  for(var x = 0; x < str1.length ; x++)
  {
    if (vowel_list.indexOf(str1[x]) !== -1)
    {
      vcount += 1;
    }
	}
	let i=(vcount*100)/500;
	return ("The percentage of vowel count from " + "'" + str1 + "'" + " is " + i +"%");
	}
   
 document.write(vowel_count(prompt("Enter your sentence")));
