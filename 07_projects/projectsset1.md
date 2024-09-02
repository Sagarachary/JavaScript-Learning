# Projects related to DOM

## Project link
[click here](https://stackblitz.com/edit/stackblitz-starters-994evr?file=index.html)

# Solution code

## Project 1

```javascript

console.log("Sagar");
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'green') {
      body.style.backgroundColor = e.target.id;
    }
    
  });
});


```

## Project 2

```javascript
console.log("Sagar");
```