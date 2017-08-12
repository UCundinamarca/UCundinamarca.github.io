//funcion shorcut
function getId(id){
    return document.getElementById(id);
}
function preppend(elem) {
  var resultados = getId('resultados');
  resultados.insertBefore(elem, resultados.childNodes[2]);
  getId('sinrespuestas').style.display = 'none';
}

function getRadioValue(name) {
  // http://stackoverflow.com/questions/9618504/get-radio-button-value-with-javascript
  var radios = document.getElementsByName(name);

  for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
        // do whatever you want with the checked radio
        return radios[i].value;
    }
  }
  return false;
}

var futuro = null;
function mensajeFeedback(msg) {
  if(futuro) {
    clearTimeout(futuro);
  }
  var elem = getId('mensaje');
  elem.style.top = (15 + window.scrollY) + 'px';
  elem.innerHTML = msg;
  elem.style.display = 'block';
  futuro = setTimeout(function() {
    elem.style.display = 'none'
  }, 5000);
}
