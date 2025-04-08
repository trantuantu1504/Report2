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

    // Lấy thẻ a và phần tử cần cuộn đến
    /*let amThucLink = document.querySelector(".am-thuc-link");
    let amThuc = document.querySelector("#am-thuc");
    let dichVuLink = document.querySelector(".dich-vu-link");
    let dichVu = document.querySelector("#dich-vu");*/

    function scrollToTarget(linkSelector, targetSelector) {
        const link = document.querySelector(linkSelector);
        const target = document.querySelector(targetSelector);
    
        link.addEventListener("click", function (e) {
            e.preventDefault();
            menuWrap.classList.remove("show");
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    }

    // Gọi hàm cho các mục
    scrollToTarget(".am-thuc-link", "#am-thuc");
    scrollToTarget(".dich-vu-link", "#dich-vu");
    scrollToTarget(".du-lich-link", "#du-lich");
    scrollToTarget(".giai-tri-link", "#giai-tri");
    scrollToTarget(".cong-ty-link", "#cong-ty");
    scrollToTarget(".shopping-link", "#shopping");


    const fahrenheitBtn = document.getElementById('fahrenheitBtn');
    const celsiusBtn = document.getElementById('celsiusBtn');
    const tempElements = document.querySelectorAll('.weather-header .season > div');

    let isCelsius = false; // mặc định đang là Fahrenheit

    // Lưu nhiệt độ gốc F vào data attribute

    tempElements.forEach(el => {
        const text = el.textContent.trim();
        const temps = text.match(/\d+/g);
        if (temps && temps.length >= 2) {
            el.dataset.highF = temps[0];
            el.dataset.lowF = temps[1];
        }
    });

    function toCelsius(f) {
        return Math.round((f - 32) * 5 / 9);
    }

    function toFahrenheit(c) {
        return Math.round((c * 9 / 5) + 32);
    }

    function updateTemperatures(toC) {
        tempElements.forEach(el => {
            const highF = parseInt(el.dataset.highF);
            const lowF = parseInt(el.dataset.lowF);

            if (toC) {
                const highC = toCelsius(highF);
                const lowC = toCelsius(lowF);
                el.innerHTML = `${highC}° <span>${lowC}°</span>`;
            } else {
                el.innerHTML = `${highF}° <span>${lowF}°</span>`;
            }      
        });
    }

    fahrenheitBtn.addEventListener('click', () => {
        if (!fahrenheitBtn.classList.contains('active')) {
            fahrenheitBtn.classList.add('active');
            celsiusBtn.classList.remove('active');
            updateTemperatures(false);
        }
    });

    celsiusBtn.addEventListener('click', () => {
        if (!celsiusBtn.classList.contains('active')) {
            celsiusBtn.classList.add('active');
            fahrenheitBtn.classList.remove('active');
            updateTemperatures(true);
        }
    });

    /* */
    document.querySelectorAll('.accordion-header').forEach(header => {
        const content = header.nextElementSibling;
      
        header.addEventListener('click', () => {
          header.classList.toggle('active');
      
          if (content.style.maxHeight) {
            content.style.maxHeight = null;
            content.classList.remove('open');
          } else {
            content.style.maxHeight = content.scrollHeight + 'px';
            content.classList.add('open');
          }
        });
      });
    
});

//Tính năng button tự di chuyển đến thư mục

/*
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
});*/

    let next = document.querySelector('.next')
    let prev = document.querySelector('.prev')

    next.addEventListener('click', function(){
        let items = document.querySelectorAll('.items')
        document.querySelector('.slide').appendChild(items[0])
    })

    prev.addEventListener('click', function(){
        let items = document.querySelectorAll('.items')
        document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
    })

    // Tự động chuyển slide mỗi 7 giây
    let autoSlide = setInterval(() => {
        next.click();
    }, 6000);

    // Tùy chọn: Dừng tự động khi người dùng tương tác, sau đó tiếp tục
    function resetAutoSlide() {
        clearInterval(autoSlide);
        autoSlide = setInterval(() => {
            next.click();
        }, 6000);
    }

    next.addEventListener('click', resetAutoSlide);
    prev.addEventListener('click', resetAutoSlide);

/*scroll button move page*/
const scrollToTopBtn = document.getElementById("scrollToTopBtn");
const circle = document.querySelector("#scrollToTopBtn svg circle");

// Hàm kiểm tra vị trí cuộn và thay đổi màu sắc vòng tròn
window.onscroll = function() {
    let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    // Hiển thị nút và thay đổi màu sắc của vòng tròn khi cuộn
    if (scrollPosition > 100) {
        scrollToTopBtn.style.display = "block"; // Hiển thị nút
        scrollToTopBtn.classList.add("show-circle");  // Hiệu ứng vòng tròn
        let dashOffset = 159.513 - (scrollPosition / document.documentElement.scrollHeight) * 162.513;
        circle.style.strokeDashoffset = dashOffset; // Thay đổi độ dài vòng tròn
        circle.style.stroke = "#e05c0c"; // Màu stroke khi cuộn xuống
    } else {
        scrollToTopBtn.style.display = "none"; // Ẩn nút
        scrollToTopBtn.classList.remove("show-circle"); // Xóa hiệu ứng vòng tròn
        circle.style.stroke = "#e05c0c"; // Màu mặc định
    }
};

// Cuộn về đầu trang khi nhấn nút
scrollToTopBtn.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn form gửi đi mặc định
    window.location.href = "#"; // Chuyển hướng tới YouTube
});

