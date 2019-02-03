(function(){

    // let prevClass = "gradient_1";
    let classIndex = Math.floor(Math.random() * 10) + 1;
    $('#container').addClass(`gradient_${classIndex}`);

    function getQuote() {
        let url = `https://random-math-quote-api.herokuapp.com/`;
        fetch(url)
        .then(res => res.json())
        .then(res => {
            // console.log(res);
            renderQuote(res);
        })
        .catch(err => console.log(err));
    }

    getQuote();

    setInterval(() => {
        getQuote();
    }, 60000);

    function renderQuote(quoteObj) {
        let { author, quote } = quoteObj;
        $("#quote").text(quote);
        $("#author").text(author);
        getBgColor();
    }

    function getBgColor() {
        let temp = classIndex;
        if(classIndex == 10) classIndex = 1;
        else classIndex++;
        $("#container").removeClass(`gradient_${temp}`).addClass(`gradient_${classIndex}`);
    }

  })()