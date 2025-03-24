document.addEventListener("DOMContentLoaded", function () {
    let menuButton = document.querySelector(".item.menu");
    let menuWrap = document.querySelector(".menu-wrap");
    let searchButton = document.querySelector(".search-btn");
    let searchWrap = document.querySelector(".search-wrap");

    menuButton.addEventListener("click", function () {
        // Ẩn searchWrap trước khi mở menuWrap
        searchWrap.classList.remove("show");
        menuWrap.classList.toggle("show");
    });

    searchButton.addEventListener("click", function () {
        // Ẩn menuWrap trước khi mở searchWrap
        menuWrap.classList.remove("show");
        searchWrap.classList.toggle("show");
    });
});

document.addEventListener("scroll", function () {
    let supportBox = document.querySelector(".support-box");
    let footer = document.querySelector(".custom-footer");
    
    let footerTop = footer.offsetTop; // Vị trí của footer
    let scrollY = window.scrollY; // Vị trí cuộn hiện tại
    let windowHeight = window.innerHeight; // Chiều cao màn hình

    if (scrollY + windowHeight >= footerTop) {
        // Khi chạm tới footer thì dừng lại
        supportBox.style.position = "absolute";
        supportBox.style.bottom = (windowHeight - (footerTop - scrollY) + 20) + "px";
    } else {
        // Khi chưa tới footer thì giữ cố định
        supportBox.style.position = "fixed";
        supportBox.style.bottom = "20px";
    }
});

    let next = document.querySelector('.next')
    let prev = document.querySelector('.prev')

    next.addEventListener('click', function(){
        let items = document.querySelectorAll('.item2')
        document.querySelector('.slide').appendChild(items[0])
    })

    prev.addEventListener('click', function(){
        let items = document.querySelectorAll('.item2')
        document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
    })

    // Tự động chuyển slide mỗi 3 giây
    //let autoSlide = setInterval(() => {
        //next.click();
    //}, 6000);

    // Tùy chọn: Dừng tự động khi người dùng tương tác, sau đó tiếp tục
    function resetAutoSlide() {
        clearInterval(autoSlide);
        autoSlide = setInterval(() => {
            next.click();
        }, 3000);
    }

    next.addEventListener('click', resetAutoSlide);
    prev.addEventListener('click', resetAutoSlide);
