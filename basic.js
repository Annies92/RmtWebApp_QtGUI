
function doBasicSetup()
  {
    document.getElementById("softKeyName1").innerHTML = window.mirror.softKeyName1
    document.getElementById("softKeyName2").innerHTML = window.mirror.softKeyName2
    document.getElementById("softKeyName3").innerHTML = window.mirror.softKeyName3
    document.getElementById("softKeyName4").innerHTML = window.mirror.softKeyName4
    document.getElementById("title").innerHTML        = window.mirror.title

    if(window.mirror.mgrvisible === true)
      document.getElementById("mgr").style.visibility="visible";
    else
    {
      //document.getElementById("mgr").style.visibility="hidden";
      document.getElementById("mgr").style.backgroundColor="#333333";
      document.getElementById("mgr").style.color="#333333";

    }

    if(window.mirror.backvisible === true)
      document.getElementById("back").style.visibility="visible";
    else
    {
      //document.getElementById("back").style.visibility="hidden";
      document.getElementById("back").style.backgroundColor="#333333";
      document.getElementById("back").style.color="#333333";
    }


    window.mirror.softKeyName1Changed.connect( function(softKeyName1)
    {
      var element1 = document.getElementById("softKeyName1");
      element1.innerHTML = softKeyName1;
    });
    window.mirror.softKeyName2Changed.connect( function(softKeyName2)
    {
      var element1 = document.getElementById("softKeyName2");
      element1.innerHTML = softKeyName2;
    });
    window.mirror.softKeyName3Changed.connect( function(softKeyName3)
    {
      var element3 = document.getElementById("softKeyName3");
      element3.innerHTML = softKeyName3;
    });
    window.mirror.softKeyName4Changed.connect( function(softKeyName4)
    {
      var element4 = document.getElementById("softKeyName4");
      element4.innerHTML = softKeyName4;
    });
    window.mirror.TitleChanged.connect( function(title){
      var element4 = document.getElementById("title");
      element4.innerHTML = title;
    });
    window.mirror.backvisibleChanged.connect( function(backvisible)
    {
      var back = document.getElementById("back");
      if(backvisible === false)
      {
        //back.style.visibility = "hidden";
        back.style.backgroundColor="#333333";
        back.style.color="#333333";
      }
      else
      {
        back.style.visibility="visible";
        back.style.color="white";
      }
    });
    window.mirror.mgrvisibleChanged.connect( function(mgrvisible)
    {
      var mgr = document.getElementById("mgr");
      if(mgrvisible === false)
      {
        //mgr.style.visibility="hidden";
        mgr.style.backgroundColor="#333333";
        mgr.style.color="#333333";
      }
      else{
        mgr.style.visibility="visible";
        mgr.style.color="white";
      }
    });
  }

