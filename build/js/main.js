"use strict";

let changeBidAsk = function () {
    let price = Math.round(Math.random() * 199999 + 150000);
    document.querySelector(".form--bid-price").textContent = String((price - 34) / 100);
    document.querySelector(".form--ask-price").textContent = String(price / 100);
};

changeBidAsk();
setInterval(changeBidAsk, 15000);

(function () {
    let generatePriceByYear = function () {
        let prices = [];
        for (let i = 0; i < 4; i++) {
            prices.push(Math.round(Math.random() * 8998 + 2))
        }
        prices[0] = (prices[0] + 200) / 100;
    
        prices.sort(function (a, b) {
            return a - b;
        });
    
        for (let i = 0; i < 4; i++) {
            document.querySelector(".growth--item:nth-child(" + (i + 1) + ") .growth--price").textContent = "$" + String(prices[i]);
        }
    }
    return generatePriceByYear();
})();

let popup = document.querySelector(".advantage--button");

popup.addEventListener("click", function (evt) {
    evt.preventDefault();
    document.querySelector(".popup").classList.add("js--show-form");

    window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
            if (document.querySelector(".popup").classList.contains("js--show-form")) {
                document.querySelector(".popup").classList.remove("js--show-form");
            }
        }
    })
});