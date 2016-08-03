'use strict';

/*---------------------
| interpolation
http://webapplog.com/es6/
---------------------*/
// defining default parameters
function interp() {
    var test = 'test';
    var interpolation = 'interpolation';
    // have to use backticks
    var testString = 'This is a <span>' + test + '</span> of <span>' + interpolation + '</span>';
    // console.log(testString);
    document.getElementById('interp').innerHTML = testString;
}
interp();
/*-------------------------------------
||
|| Using the arrow function
|| largely taken from Wes Bos ES6 course
-------------------------------------*/

// define the arrow button
var arrowButton = document.querySelector('#arrow');

// add event Listener for click function
// have to use a function initially to capture the right 'this' info
arrowButton.addEventListener('click', function () {
    var _this = this;

    // console.log(this);
    //using an arrow function keeps this === the parent object
    setTimeout(function () {
        //height with the padding
        var height = _this.offsetHeight;
        var width = _this.offsetWidth;
        //innerhtml will delete all the info in the box...
        document.getElementById('arrow-text').innerHTML = 'This button is <span>' + height + '</span> pixels high and <span>' + width + '</span> pixels wide!';
    });
});

/*-------------------------------------
| javascript promises with a dash of arrow functions
-------------------------------------*/

var wait = function wait() {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, 2000);
    });
};
// create variable for button
var promiseButton = document.querySelector('#promise-2000');
// add event listener
promiseButton.addEventListener('click', function () {
    document.getElementById('promises').innerHTML = '';
    wait().then(function () {
        document.getElementById('promises').innerHTML = 'Wait for it...';
        return wait();
    }).then(function () {
        document.getElementById('promises').innerHTML = 'I promise to do something else';
        return wait();
    }).then(function () {
        document.getElementById('promises').innerHTML = 'I did it!';
    });
});