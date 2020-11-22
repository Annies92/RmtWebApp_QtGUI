

function buildgridview(contentType)
{
  var index = window.mirror.currentIndexRemote;
  if(contentType === 4)
  {
    var gridValue = [];
    gridValue = window.mirror.gridData;
    var gridElement = document.getElementById("listElement");
    gridElement.innerHTML = '';
    gridElement.innerHTML = "<div id =\"managergrid\" class=\"gridView\"></div>";

    document.getElementById("managergrid").innerHTML +=
    "<div id = \"gridElement0\" class=\"Mgbuttons\"    onclick=\"gridOptionClicked(" + 0 +")\"> &#9776;</div>" +
    "<div id = \"gridElement1\" class=\"Mgbuttons\"    onclick=\"gridOptionClicked(" + 1 +")\"> &#9881;</div>";

    for(var j=2;j<9;j++)
    {
     // document.getElementById("gridElement"+j+"").innerText = gridData[i];
      document.getElementById("managergrid").innerHTML += "<div id = \"gridElement"+j+"\" class=\"gridbuttons\"  onclick=\"gridOptionClicked(" + j +")\"></div>"
    }

    //"<div id = \"gridElement2\" class=\"gridbuttons\"  onclick=\"gridOptionClicked(" + 2 +")\">        </div>" +
    //"<div id = \"gridElement3\" class=\"gridbuttons\"  onclick=\"gridOptionClicked(" + 3 +")\">        </div>" +
    //"<div id = \"gridElement4\" class=\"gridbuttons\"  onclick=\"gridOptionClicked(" + 4 +")\">        </div>" +
    //"<div id = \"gridElement5\" class=\"gridbuttons\"  onclick=\"gridOptionClicked(" + 5 +")\">        </div>" +
    //"<div id = \"gridElement6\" class=\"gridbuttons\"  onclick=\"gridOptionClicked(" + 6 +")\">        </div>" +
    //"<div id = \"gridElement7\" class=\"gridbuttons\"  onclick=\"gridOptionClicked(" + 7 +")\">        </div>" +
    //"<div id = \"gridElement8\" class=\"gridbuttons\"  onclick=\"gridOptionClicked(" + 8 +")\">        </div>" +
    //"</div>";

    for(var i=2;i<9;i++)
    {
      document.getElementById("gridElement"+i+"").innerText = gridValue[i];
    }
    document.getElementById("gridElement"+index+"").style.backgroundColor = "#3371ff";
  }

  window.mirror.gridDataChanged.connect(function(gridData)
  {
    if(window.mirror.contentType === 4 )
    {
      for(var i=2;i<9;i++)
      {
        document.getElementById("gridElement"+i+"").innerText = gridData[i];
      }
      document.getElementById("gridElement"+window.mirror.currentIndexRemote+"").style.backgroundColor = "#3371ff";
    }
  });

  window.mirror.currentIndexRemoteChanged.connect(function (currentIndexRemote)
  {
    if(window.mirror.contentType === 4)
    {
      for(var i=0;i<9;i++)
      {
        document.getElementById("gridElement"+i+"").style.backgroundColor = "gray" ;
      }
      console.log("index grid view indexchanged:"+currentIndexRemote);
      document.getElementById("gridElement"+currentIndexRemote+"").style.backgroundColor = "#3371ff";
    }
  });
}
