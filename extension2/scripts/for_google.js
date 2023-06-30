alert("after clicking ok backgroung will change")

document.addEventListener('load', submitAction())

function submitAction () {
  var host = window.location.host;
  if(host.indexOf('google.com') >= 0)
  {
    if(document.getElementsByClassName('gb_ud') != null)
    {
      
      heading = document.getElementById('gb')
      heading.style.backgroundColor = 'red'
    }
    
  }
  
}

// make it sensible css fixed now make it real fun