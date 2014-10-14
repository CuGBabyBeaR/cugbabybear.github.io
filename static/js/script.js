var $ = function (s) { return document.getElementById(s); },
    apistate = true,
    popscount = 0,
    lastevent = $('lastevent'),
    urlhistory = $('urlhistory'),
    nav = $('nav'),
    content = $('content');

if (typeof history.pushState === 'undefined') {
  //$('history-api-alert').style.display="block";
  apistate = false;
}

addEvent(nav, 'click', function (event) {
  if (event.target.nodeName === 'A' && apistate) {
    var target = event.target.target;
    if (!(target === '_blank')) {
        var title = event.target.href;
        event.preventDefault();
        history.pushState({loc:title}, title, title);
        loadData(title);
    }
  }
});

addEvent(window, 'popstate', function (event) {
  if (popscount < 1) {popscount++;return;};
  state = event.state;
  if (state) {
    loadData(state.loc || "home")
  }else{
    hashLoad();
  }
});

function addEvent( obj, type, fn ) {
  if ( obj.attachEvent ) {
    obj['e'+type+fn] = fn;
    obj[type+fn] = function(){obj['e'+type+fn]( window.event );}
    obj.attachEvent( 'on'+type, obj[type+fn] );
  } else{
    obj.addEventListener( type, fn, false );
  }
}

function loadData(data) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange=function(){
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
      xmlDoc = xmlhttp.responseText;
      content.innerHTML = marked(xmlDoc);
    }
  }
  xmlhttp.open("GET",data+".md",true);
  xmlhttp.send();
}

