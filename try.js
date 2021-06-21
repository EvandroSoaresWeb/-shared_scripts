function SaveData () {
    try {
        setCookie('id_name_lead', document.getElementById("Nome").value, 1);
        setCookie('id_user_lead', document.getElementById("Usuario").value, 1);
   }
    finally {
        if( navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/webOS/i)
            || navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i)
            || navigator.userAgent.match(/BlackBerry/i)
            || navigator.userAgent.match(/Windows Phone/i)
            ){
                window.top.location.replace("https://traderevolution.com.br/obrigado-teste-gratis-mobile/");
            }
        else {
            window.top.location.replace("https://traderevolution.com.br/obrigado-teste-gratis/");
        }
}
