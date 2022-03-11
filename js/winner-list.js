winner_list_btn = document.querySelectorAll('.winner-list-btn-container img');
console.log(winner_list_btn);
winner_list_btn.forEach(element => {
    element.addEventListener('click', function () {
        if (this.getAttribute("src") == `./img/banner-2/png/Winner-announcement/${this.dataset.title}-active.svg`) {
            //當選中的時候
            this.setAttribute("src", `./img/banner-2/png/Winner-announcement/${this.dataset.title}.svg`);
            //長資料
        }
        else {
            //當不是選中的時候
            this.setAttribute("src", `./img/banner-2/png/Winner-announcement/${this.dataset.title}-active.svg`);
            //長資料
        }
    })
});