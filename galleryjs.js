// fetch uses url to get a promise of data.
// then(()) w function built in will pass the fetched data thru the then function. u could console.log it
// function() or then(())=> is both notation for functions
//
// const elem = document.getElementById("button");
// elem.addEventListener("click", buttons);

function buttons() {
  fetch("https://api.thecatapi.com/v1/images/search?limit=5")
    .then(function (result) {
      // console.log(result); this will show data within the console
      return result.json(); // json will convert/ extract data and make it to object we can use
    })
    .then((data) => {
      // if the previous 'then' is accepted, then this then makes a new promise w new data
      console.log(data); // console.log(data[0].url);// .word finds the word in the index and fetches that data

      // for each method needs a function within parameter

      // for each method iterates to the object attached to it. the first parammeter is element, the second is index num

      data.forEach(function (item, indexed) {
        var picId = "cat_" + indexed;
        var urlId = document.getElementById(picId);
        urlId.src = item.url; // location. specifies the specific attribute to the id
      });
    })
    .catch(function () {
      console.log("error");
    });
}

buttons();
