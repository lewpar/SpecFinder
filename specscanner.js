const intel = new RegExp(">+[,&;\\.\\s\\w]*([iI][3,5,7]{1}.?[0-9]{4,5}[a-zA-Z]{0,2})[,&;\\.\\s\\w]*<");
const amd = new RegExp(">+[,&;\\.\\s\\w]*(yzen+\\s?[0-9]{4,5}[a-zA-Z]{0,2})[,&;\\.\\s\\w]*<");

function scanForMatches(expression)
{
    let page = document.body.innerHTML;

    console.log("Replacing matches..");
    let matches = page.match(expression);

    if(!matches)
    {
        console.log("Matches is null.");
        return;
    }

    if(matches.length < 2)
    {
        console.log("No matches found.");
        return;
    }
    else
    {
        console.log(`${matches.length / 2} matches found.`);
        console.log(matches);
    }

    document.body.innerHTML = page.replace(expression, matches[0].replace(matches[1], `${matches[1]} <a href="https://www.techpowerup.com/cpu-specs/?ajaxsrch=${encodeURI(matches[1])}">Specs</a>`));
    //let result = page.replace(expression, "hello");
    //console.log(result);
    //document.body.innerHTML = result;
    console.log("Done replacing.");
}

scanForMatches(intel);
scanForMatches(amd);