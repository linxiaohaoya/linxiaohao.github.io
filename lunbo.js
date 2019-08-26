var index = 0

        function lb() {
            $(".lunbo img").css("opacity", "0");
            $(".lunbo img").eq(index).css("opacity", "1");
            $(".lunbo ul li").css("background", "black");
            $(".lunbo ul li").eq(index).css("background", "#00865E")
        }

        lb();

        $(".prev").click(function() {
            console.log(123)
            clearInterval(timer);
            index--;
            if (index < 0) {
                index = $(".lunbo img").length - 1
            }
            lb();
            autoChange();
        })

        $(".next").click(function() {
            clearInterval(timer);
            index++;
            if (index > $(".lunbo img").length - 1) {
                index = 0
            }
            lb();
            autoChange();
        })


        for (let i = 0; i < $(".lunbo ul li").length; i++) {
            $(".lunbo ul li").eq(i).click(function() {
                clearInterval(timer);
                index = i;
                lb();
                autoChange();
            })
        }

        var timer

        function autoChange() {
            timer = setInterval(function() {
                index++;
                if (index > $(".lunbo img").length - 1) {
                    index = 0
                }
                lb();
            }, 3000)
        }
        autoChange();
