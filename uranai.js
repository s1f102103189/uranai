function exe(){
    let name;
    let keca;
    name=prompt("名前をいえ。");
    if (name==""){
      name="none";
    }
    document.getElementById("name").innerHTML=name;
    let co =Math.floor (Math.random()*5);
    if (co==0){
      keca="大吉"
    }else if (co==1){
      keca="中吉"
    }else if (co==2){
      keca="小吉"
    }else if (co==3){
      keca="吉"
    }else if (co==4){
      keca="凶"
    }else if (co==5){
      keca="大凶"
    }else if (co==6){
        keca="死"
    }
    document.getElementById("keca").innerHTML=keca;
    }