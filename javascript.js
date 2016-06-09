/*jshint multistr:true */
function nameSearch(){

var text = "William is a really great guy. Well, sometimes William farts, a lot. William really has stinky farts. ";
var myName = "William";
var hits = [];

for (var i = 0; i < text.length; i++)
{
	if (text[i] === myName[i])
	{
		for (var j = i; j <= i + myName.length; j++)
		{
			hits.push(text[j]);
		};
	};
};

if (hits.length === 0)
{
	document.write("Your name wasn't found!");
} else {
	document.write(hits);
}
}