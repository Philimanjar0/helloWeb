var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello from JavaScript! (click here)';
alert('this is an alert! 2+4=' + add(2,4))

function add(num1, num2){
  var result = num1+num2;
  return result;
}

myHeading.onclick = function setUser(){
  var name = prompt('Name?');
  localStorage.setItem('name', name);
  myHeading.textContent = 'Hello ' + name + ', from JavaScript!'
}
