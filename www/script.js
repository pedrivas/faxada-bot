var xmlhttp;
xmlhttp=new XMLHttpRequest();

function bombaon()
    {
        xmlhttp.open("GET","cgi-bin/bomba.cgi",true);
        xmlhttp.send();
    }
function bombaoff()
    {
        xmlhttp.open("GET","cgi-bin/bombaoff.cgi",true);
        xmlhttp.send();
    }
function esponjaon()
{
	xmlhttp.open("GET","cgi-bin/esponja.cgi",true);
	xmlhttp.send();
}
function esponjaoff()
{
	xmlhttp.open("GET","cgi-bin/esponjaoff.cgi",true);
	xmlhttp.send();
}

function servo()
{
	alert('funcao servo0120')
	URL = "cgi-bin/servo0120.cgi"
	xmlhttp.open("GET",URL,true);	
	xmlhttp.send();
}

function servo01()
{
	var servo01t = window.document.getElementById("servo01");
	var servo01 = Number(servo01t.value);
	var URL = ""
	if (servo01 == 0) {
		URL = "cgi-bin/servo0100.cgi";
	} else if (servo01 == 20) {
		URL = "cgi-bin/servo0120.cgi";
	} else if (servo01 == 40) {
		URL = "cgi-bin/servo0140.cgi";
	} else if (servo01 == 60) {
		URL = "cgi-bin/servo0160.cgi";
	} else if (servo01 == 80) {
		URL = "cgi-bin/servo0180.cgi";
	}
	xmlhttp.open("GET",URL,true);
	xmlhttp.send();

}

function cimaon()
    {
        xmlhttp.open("GET","cgi-bin/cimaon.cgi",true);
        xmlhttp.send();
    }

function cimaoff()
    {
        xmlhttp.open("GET","cgi-bin/cimaoff.cgi",true);
        xmlhttp.send();
    }


function baixoon()
    {
        xmlhttp.open("GET","cgi-bin/baixoon.cgi",true);
        xmlhttp.send();
    }

function baixooff()
    {
        xmlhttp.open("GET","cgi-bin/baixooff.cgi",true);
        xmlhttp.send();
    }

function esquerdaon()
    {
        xmlhttp.open("GET","cgi-bin/esquerdaon.cgi",true);
        xmlhttp.send();
    }

function esquerdaoff()
    {
        xmlhttp.open("GET","cgi-bin/esquerdaoff.cgi",true);
        xmlhttp.send();
    }

function direitaon()
    {
        xmlhttp.open("GET","cgi-bin/direitaon.cgi",true);
        xmlhttp.send();
    }

function direitaoff()
    {
        xmlhttp.open("GET","cgi-bin/direitaoff.cgi",true);
        xmlhttp.send();
    }

function camera()
    {
        xmlhttp.open("GET","cgi-bin/camera.cgi",true);
        xmlhttp.send();  
    }