function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6NE1hId1Nx2":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycby9w8X3HU1aaX3P_oHzUK_iUQuJjr9Qjqdna9TRlp7sqsBxO2-oq3CATjg_YBt0NrpBFA/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

