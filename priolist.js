

function buildPrioView(contentType)
{
  window.currentCount = window.mirror.countRemote
  if(contentType === 1)
  {
    show_Priolist(contentType,window.currentCount,window.mirror.currentIndexRemote);
    window.mirror.countRemoteChanged.connect(function(countRemote)
    {
      if(window.currentCount !== countRemote && window.mirror.contentType === 1)
      {
        window.currentCount = countRemote;
        console.log("count changed after view change to rebuild:" +window.currentCount);
        show_Priolist(contentType,window.currentCount,window.mirror.currentIndexRemote);
      }
    });
  }
  window.mirror.currentIndexRemoteChanged.connect(function (currentIndexRemote)
  {
    if(window.mirror.contentType === 1)
    {
      //console.log("content in priolist :"+window.mirror.contentType);
      console.log("index in priolist - changed signal: "+currentIndexRemote);
      for(var i=0;i<window.mirror.countRemote;i++)
      {
        document.getElementById("priotext-"+i+"").style.backgroundColor = "gray" ;
      }
      document.getElementById("priotext-"+currentIndexRemote+"").style.backgroundColor = "#3371ff" ;
    }
  });

}
function show_Priolist(contentType, count, index)
{
  var prioList_array = [];
  prioList_array = window.mirror.priolist;
  var viewText;
  var viewElement = document.getElementById("listElement");
  if(contentType === 1)
  {
    viewElement.innerHTML = '';
    for(var i=0 ;i<count;i++)
    {
      viewElement.innerHTML += "<div class=\"listView\">"
      + "<input name=\"dummy\" for=\"priotext-"+i+"\" type=\"radio\" id=\"option1\" onclick=\"optionClicked("+i+")\">"
      + "<label id = \"priotext-"+i+"\" class=\"listLabel\" onclick=\"optionClicked("+i+")\"></label>" + "</div>" ;
      viewText = document.getElementById("priotext-"+i+"");
      viewText.innerText = prioList_array[i];
    }
    document.getElementById("priotext-"+index+"").style.backgroundColor ="#3371ff";
  }
}

