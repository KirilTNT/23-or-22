
function newElement() {
  (async (a) => {

    const r = await fetch('https://www.random.org/integers/?num=1&min=1&min=100&col=1&base=10&format=plain&rnd=new')
    console.log(await response.json())
    return
    })
    

  var li = document.createElement("li");

  var t = document.createTextNode(a + "  " +  time);
 
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

 }


  