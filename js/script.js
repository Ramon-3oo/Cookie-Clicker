let scoreText = document.getElementById('score');
let upgradeTextCPC = document.getElementById('cpc');
let upgradeTextCPS = document.getElementById('cps');
let upgradePriceTextCPC = document.getElementById('pricecpc');
let upgradePriceTextCPS = document.getElementById('pricecps');
let cpcText = document.getElementById('cpcText');
let cpsText = document.getElementById('cpsText');
let score = 0;
let scorePerClick = 1;
let scorePerSeccond = 0;


let upgradeCostCPC = 10;
let upgradeCostCPS = 10;
let upgradeCostMultiplier = 1.1;
let cpcUpgrade = 1;
let cpsUpgrade = 1;

setInterval(increaseScorePerSecond, 1000 / 100);

function increaseScorePerSecond(){
    score += scorePerSeccond / 100;
    scoreText.innerHTML = Math.round(score);
}

function IncreaseScore() {
    score+=scorePerClick;
    scoreText.innerHTML = Math.round(score);
}

upgradePriceTextCPC.innerHTML = Math.round(upgradeCostCPC);
upgradeTextCPC.innerHTML = "+" + 1;

upgradePriceTextCPS.innerHTML = Math.round(upgradeCostCPS);
upgradeTextCPS.innerHTML = "+" + 1;

function upgradeCPC(){
    if(score >= upgradeCostCPC){
        score -=upgradeCostCPC;
        upgradeCostCPC *= upgradeCostMultiplier;
        scorePerClick += cpcUpgrade;
        scoreText.innerHTML = Math.round(score);
        upgradePriceTextCPC.innerHTML = Math.round(upgradeCostCPC);
        cpcText.innerHTML = scorePerClick;
    }
}

function upgradeCPS(){
    if(score >= upgradeCostCPS){
        score -=upgradeCostCPS;
        upgradeCostCPS *= upgradeCostMultiplier;
        scorePerSeccond += cpsUpgrade;
        scoreText.innerHTML = Math.round(score);
        upgradePriceTextCPS.innerHTML = Math.round(upgradeCostCPS);
        cpsText.innerHTML = scorePerSeccond;
    }
}