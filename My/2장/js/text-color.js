        
        // heading이라는 변수를 선언하고 h1태그를 지정한 것
        var heading = document.querySelector('#heading');
        // h1태그를 클릭하면 글자 색깔을 red로 바꾸어라.
        heading.onclick = function() {
            heading.style.color = "red";
        }