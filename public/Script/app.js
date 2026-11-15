// IIFI --> Immediately Innvoked function expression

(fucntion(){
    function Start(){
        console.log("App started...")
    }
    window.addEventListener("load",Start)
})();