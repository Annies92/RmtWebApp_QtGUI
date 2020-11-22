

function buildOptView(contentType)
{
  window.currentCount = window.mirror.countRemote
  if(contentType === 2)
  {
    show_Optlist(contentType,window.currentCount,window.mirror.currentIndexRemote);
    window.mirror.countRemoteChanged.connect(function(countRemote)
    {
      if(window.currentCount !== countRemote && window.mirror.contentType === 2)
      {
        window.currentCount = countRemote;
        console.log("count changed after view change to rebuild:" +window.currentCount);
        show_Optlist(contentType,window.currentCount,window.mirror.currentIndexRemote);
      }
    });
  }

}

function show_Optlist(contentType, count, index)
{
  console.log("show_optlist")
  var optList_array = [];
  optList_array = window.mirror.optlist;
  var viewText;
  var viewElement = document.getElementById("listElement");
  if(contentType === 2)
  {
    viewElement.innerHTML = '';
    for(var i=0 ;i<count;i++)
    {
      viewElement.innerHTML += "<div class=\"listView\">"
      + "<input name=\"dummy\" for=\"opttext-"+i+"\" type=\"radio\" id=\"option1\" onclick=\"optionClicked("+i+")\">"
      + "<label id = \"opttext-"+i+"\" class=\"listLabel\" onclick=\"optionClicked("+i+")\"></label>"
      + "</div>" ;

      viewText = document.getElementById("opttext-"+i+"");
      viewText.innerText = optList_array[i];
    }
    document.getElementById("opttext-"+index+"").style.backgroundColor ="#3371ff";
  }

  window.mirror.currentIndexRemoteChanged.connect(function (currentIndexRemote)
  {
    if(window.mirror.contentType === 2)
    {
      //console.log("content in priolist :"+window.mirror.contentType);
      console.log("index in optlist - changed signal: "+currentIndexRemote);
      for(var i=0;i<window.mirror.countRemote;i++)
      {
        document.getElementById("opttext-"+i+"").style.backgroundColor = "gray" ;
      }
      document.getElementById("opttext-"+currentIndexRemote+"").style.backgroundColor = "#3371ff" ;
    }
  });

  window.mirror.optlistChanged.connect(function(optlist)
  {
    console.log("optlistchanged")
    if(window.mirror.contentType === 2)
    {
      var optText;
      var optListElement = document.getElementById("listElement");
      optListElement.innerHTML ='';
      for(var i=0 ;i<window.mirror.countRemote;i++)
      {
        optListElement.innerHTML += "<div class=\"listView\">"
        + "<input name=\"dummy\" for= \"opttext-"+i+"\" type=\"radio\" id=\"option1\"  onclick=\"optionClicked(" + i + ")\">"
        + "<label id = \"opttext-"+i+"\" class=\"listLabel\" onclick=\"optionClicked(" + i + ")\"> </label>"
        + "</div>" ;
        optText = document.getElementById("opttext-"+i+"");
        optText.innerText = optlist[i];
        //document.getElementById("opttext-"+i+"").style.backgroundColor = "gray" ;
      }
      //console.log("currentindex in optlistchanged :"+window.mirror.currentIndexRemote);
      document.getElementById("opttext-"+window.mirror.currentIndexRemote+"").style.backgroundColor = "#3371ff" ;
    }

  });
}
