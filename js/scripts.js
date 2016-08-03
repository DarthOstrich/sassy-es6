/*---------------------
| interpolation
http://webapplog.com/es6/
---------------------*/
// defining default parameters
function interp() {
    let test = 'test';
    let interpolation = 'interpolation';
    // have to use backticks
    var testString = `This is a <span>${test}</span> of <span>${interpolation}</span>`;
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
const arrowButton = document.querySelector('#arrow');

// add event Listener for click function
// have to use a function initially to capture the right 'this' info
arrowButton.addEventListener('click', function() {
    // console.log(this);
    //using an arrow function keeps this === the parent object
    setTimeout(() => {
        //height with the padding
        let height = this.offsetHeight;
        let width = this.offsetWidth;
        //innerhtml will delete all the info in the box...
        document.getElementById('arrow-text').innerHTML = `This button is ${height} pixels high and ${width} pixels wide!`;
    });
});

/*-------------------------------------
| javascript promises with a dash of arrow functions
-------------------------------------*/

var wait = () => new Promise((resolve, reject) => {
    setTimeout(resolve, 2000)
})

$('#promise-2000').click((event) => {
    document.getElementById('promises').innerHTML = ``
    wait()
        .then(function() {
            document.getElementById('promises').innerHTML = `Wait for it...`
            return wait()
        })
        .then(function() {
            document.getElementById('promises').innerHTML = `I promise to do something else`
            return wait()
        })
        .then(function() {
            document.getElementById('promises').innerHTML = `I did it!`
        });

});