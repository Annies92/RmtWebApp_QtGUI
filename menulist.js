

function buildAbstractView(contentType)
{
  window.currentCount = window.mirror.countRemote
  if(contentType === 3)
  {
    show_Abstractlist(contentType,window.currentCount,window.mirror.currentIndexRemote);
    window.mirror.countRemoteChanged.connect(function(countRemote)
    {
      if(window.currentCount !== countRemote && window.mirror.contentType === 3)
      {
        window.currentCount = countRemote;
        console.log("new count after countRemoteChanged signal called: "+window.currentCount);
        show_Abstractlist(contentType,window.currentCount,window.mirror.currentIndexRemote);
      }
    });
  }
}

function show_Abstractlist(contType,count, index)
{
  var menuValue = [];
  menuValue = window.mirror.menuData;
  var menuText;
  var menuText1;
  var AbstractElement = document.getElementById("listElement");
  if(contType === 3 )
  {
    AbstractElement.innerHTML = '';
    for(var x=0 ;x<count;x++)
    {
      AbstractElement.innerHTML += "<div class=\"abstractView\">"
      + "<div name=\"dummy\" type=\"button\" id =\"text-"+x+"\" class=\"abstractLabel\" onclick=\"optionClicked("+x+")\" style=\"padding-right=0px;\"></div>"
      + "<div id =\"text1-"+x+"\" type=\"button\" class=\"abstractLabel\" onclick=\"optionClicked("+x+")\" style=\"text-align:right;padding: 5px 5px;\"></div>"
      + "</div>" ;
      menuText = document.getElementById("text-"+x+"");
      menuText.innerText = menuValue[x];
      menuText1 = document.getElementById("text1-"+x+"");
      menuText1.innerText = menuValue[x+count];

    }
    console.log("index check :"+index);
    console.log("index check remote :"+window.mirror.currentIndexRemote);
    document.getElementById("text-"+index+"").style.backgroundColor ="#3371ff"
    document.getElementById("text1-"+index+"").style.backgroundColor ="#3371ff"

  }

  window.mirror.menuDataChanged.connect(function(menuData)
  {
    if(window.mirror.contentType === 3)
    {
      var AbstractElement = document.getElementById("listElement");
      AbstractElement.innerHTML = '';
      for(var x=0 ;x<window.mirror.countRemote;x++)
      {
        AbstractElement.innerHTML += "<div class=\"abstractView\">"
        + "<div name=\"dummy\" id =\"text-"+x+"\" type=\"button\" class=\"abstractLabel\" onclick=\"optionClicked("+x+")\" style=\"padding-right=0px;\"></div>"
        + "<div id =\"text1-"+x+"\" type=\"button\" class=\"abstractLabel\" onclick=\"optionClicked("+x+")\" style=\"text-align:right;padding: 5px 5px;\"></div>"
        + "</div>" ;
        menuText = document.getElementById("text-"+x+"");
        menuText.innerText = menuData[x];
        menuText1 = document.getElementById("text1-"+x+"");
        menuText1.innerText = menuData[x+window.mirror.countRemote];
      }
      document.getElementById("text-"+window.mirror.currentIndexRemote+"").style.backgroundColor ="#3371ff"
      document.getElementById("text1-"+window.mirror.currentIndexRemote+"").style.backgroundColor ="#3371ff"

    }
  });

  window.mirror.currentIndexRemoteChanged.connect(function(currentIndexRemote)
  {
    if(window.mirror.contentType === 3)
    {
      for(var i=0;i<window.mirror.countRemote;i++)
      {
        //console.log("loop")
        document.getElementById("text-"+i+"").style.backgroundColor = "gray" ;
        document.getElementById("text1-"+i+"").style.backgroundColor = "gray" ;
      }
      document.getElementById("text-"+currentIndexRemote+"").style.backgroundColor  = "#3371ff" ;
      document.getElementById("text1-"+currentIndexRemote+"").style.backgroundColor = "#3371ff" ;
      console.log("index in menulist ->indexchanged signal: "+currentIndexRemote);
    }
  });
}
