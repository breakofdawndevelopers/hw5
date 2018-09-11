// JavaScript source code
    $(document).ready(function () {
        $("#Spin").click(function () {
            spin("first");
            spin("second");
            spin("third");
            writemsg();
            $("#Spin").mouseover(function () {
                $("#Spin").text("SPIN NOW");
            });
            $("#Spin").mouseout(function () {
                $("#Spin").text("Spin Again");
            });
            $("#Quit").click(function () {
                $("div").fadeOut(2000);
                $("h2").fadeIn(2000).text("Goodbye");
            });
        });
    });
        function spin(tbId) {
            var i = 0;
            var randomNum;
            for (i = 0; i < 10; i++) {
                var randomNum = Math.floor(Math.random() * 10);
   
                if (randomNum == 0 || randomNum > 3) {
                    continue;
                }
            var box = document.getElementById(tbId);
                if (randomNum == 1) {
                box.className = "one";
                }
                else if (randomNum == 2) {
                box.className = "two";
                }
                else if (randomNum == 3) {
                box.className = "three";
                }
}
};
        function writemsg() {
            var slot1 = document.getElementById('first').getAttribute("class");
            var slot2 = document.getElementById('second').getAttribute("class");
            var slot3 = document.getElementById('third').getAttribute("class");
            if (slot1 == slot2 && slot1 == slot3) {
        document.getElementById('msg').innerHTML = ("Congratulations, you won!");
            }
            else {
        document.getElementById('msg').innerHTML = ("Sorry, try again");
            };
        };
       