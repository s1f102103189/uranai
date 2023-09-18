function initializeFortuneTelling() {
    let userName = prompt("名前を入力してください。");
  
    if (!userName) {
      userName = "none";
    }
  
    document.getElementById("userName").textContent = userName;
  
    const fortunes = ["大吉", "中吉", "小吉", "吉", "凶", "大凶", "死"];
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    const userFortune = fortunes[randomIndex];
  
    document.getElementById("fortuneResult").textContent = userFortune;
  }
  