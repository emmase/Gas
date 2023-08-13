var url = 'https://wati-integration-service.clare.ai/ShopifyWidget/shopifyWidget.js?70939';
var s = document.createElement('script');
s.type = 'text/javascript';
s.async = true;
s.src = url;
var options = {
"enabled":true,
"chatButtonSetting":{
  "backgroundColor":"#4dc247",
  "ctaText":"Message Us",
  "borderRadius":"25",
  "marginLeft":"0",
  "marginBottom":"50",
  "marginRight":"50",
  "position":"right"
},
"brandSetting":{
  "brandName":"Gas Xpress Services Ltd",
  "brandSubTitle":"Typically replies within 10 minutes",
  "brandImg":"Images/Logo 2.png",
  "welcomeText":"Hi there!\nWelcome, need gas? We got you coverd.",
  "messageText":"Hello, ",
  "backgroundColor":"#0a5f54",
  "ctaText":"Start Chat",
  "borderRadius":"25",
  "autoShow":false,
  "phoneNumber":"256758588658"
}
};
s.onload = function() {
    CreateWhatsappChatWidget(options);
};
var x = document.getElementsByTagName('script')[0];
x.parentNode.insertBefore(s, x);