let winner_list_btn = document.querySelectorAll('.winner-list-btn-container img');
let information_detail_prize_list_detail_container = document.querySelector('.information-detail-prize-list-detail-container');
var string = "";
winner_list_btn.forEach(element => {
    element.addEventListener('click', function () {
        //當選中的時候
        if (this.getAttribute("src") == `./img/banner-2/png/Winner-announcement/${this.dataset.title}-active.svg`) {
            // 
            // this.setAttribute("src", `./img/banner-2/png/Winner-announcement/${this.dataset.title}.svg`);
            // 清空
            // information_detail_prize_list_detail_container.innerHTML = "";
        }
        //當不是選中的時候
        else {
            // 所有按鈕顏色回復暗紅
            winner_list_btn.forEach(element => {
                element.setAttribute("src", `./img/banner-2/png/Winner-announcement/${element.dataset.title}.svg`);
            });

            //更改選中的按鈕
            this.setAttribute("src", `./img/banner-2/png/Winner-announcement/${this.dataset.title}-active.svg`);
            
            //放資料庫的資料
            for (let index = 0; index < 1; index++) {
                string = string +
                    ` <div class="winning-people-container">
                <div class="winning-name">陳玲${index}</div>
                <div class="winning-phone">09${index}${index}${index}${index}${index}${index}${index}${index}</div>
                </div>`;
                console.log(string);
            }
            information_detail_prize_list_detail_container.innerHTML = `${string}`;
            string = "";
        }
    })
});