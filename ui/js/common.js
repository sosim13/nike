// 2014/01/08 �� ���� �������� �����

?function hideElement(id)
{
	var element = document.getElementById(id);

	if (element)
  		element.style.display='none';
}

function hideElementByClass(className)
{
  	var tags=document.getElementsByClassName(className);
  	
	for (var i = 0; i < tags.length; ++i) {
  		var element = tags[i];
  		element.style.display='none';
  	}		
}

function css(selector, property, value) {
    for (var i=0; i < document.styleSheets.length; ++i) {
        try { 
        	document.styleSheets[i].insertRule(selector+ ' {'+property+':'+value+'}', document.styleSheets[i].cssRules.length);
        } catch(err) {
        }
    }
}

function insertAdBefore(html)
{
	  	document.getElementById("banner_box").innerHTML = html;
}

function getMomlAd()
{
	var sc = document.getElementById("banner_box");
	if (sc.length == 0)
		return;

	var momlAd = '<script type="text/javascript"> google_ad_client = "ca-pub-7252630941302629"; google_ad_slot = "4292477114"; google_ad_width = 728; google_ad_height = 90;</script><!-- �����бⱤ�� --><script type="text/javascript"src="//pagead2.googlesyndication.com/pagead/show_ads.js"></script>';
	return momlAd; 
}

function goFind(){
	var sc = document.getElementById("tid");

	if (sc.length == 0)
		return;
	alert(sc);	
}

function goZoom()
{
  	document.body.style.zoom='100%';
}

hideElement('banner_left');
hideElement('t_left');
hideElement('mb_l');
hideElement('head');





css("body", "background-color", "rgba(255, 255, 255, 0.01)");
css("body", "zoom", "percentage");
//goZoom();
css("#listWrap.index h2 span", "background-color", "rgba(255, 255, 255, 0.01)");
css("body", "font-size", "24px");
css("a:link", "font-size", "24px");
css("a:visited", "font-size", "24px");
css("a:hover", "font-size", "24px");
css("tr, td, th", "font-size", "24px");
css("tr, td, th", "font-size", "24px");
css("table.bbslist td#tdate", "font-size", "1px");

css("table.bbslist", "width", "1000px");
css("#t_right", "margin", "0 0 0 0");
css("div#banner_box", "width", "1000px");
css("div#banner_box", "margin", "0 0 0 0");
css("table.bbslist td#tcat", "white-space", "nowrap");
css("table.bbslist td#tsub", "width", "700px");
css("table.bbslist td#tsub", "table-:layout", "pixed");

// �б� �Խ���
css("table.bbslist", "width", "1000px");
css("#t_right", "margin", "0 0 0 0");
css("table.bbslist", "width", "1000px");
css("table.bbslist", "margin", "10px 0px 10px 0px");
css("table.reply_box", "width", "1000px");
css("table.reply_box", "margin", "10px 0px 10px 0px");
css("div#banner_box", "width", "1000px");
css("div#banner_box", "margin", "10px 0px 10px 0px");
css("table.rp_box", "width", "1000px");
css("table.rp_box", "margin", "10px 0px 10px 0px");
css("table.rp_box2", "width", "1000px");
css("table.rp_box2", "margin", "10px 0px 10px 0px");
css("div#con_text", "font-size", "50px");
css("div#con_text", "padding-top", "30px");
css("div#login_head", "font-size", "50px");
css("input#rf_b", "width", "90px");
css("input#rf_b", "height", "67px");
css("font#rep", "font-size", "40px");
css("div#pmemo_cont", "font-size", "40px");
css("div#pmemo_cont", "width", "800px");
css("div#pmemo3", "width", "800px");
css("div#con_head1", "font-size", "50px");
css("table.reply_box td#rp_right", "font-size", "50px");
css("div#con_says", "width", "1000px");
css("div#con_says", "padding-top", "80px");
css("div#con_says", "font-size", "50px");
css("font.reply_id", "font-size", "50px");
css("div#con_text", "width", "1000px");
css("div#con_head1", "width", "1000px");
css("div#con_head1", "height", "52px");
css("div#con_tail", "width", "1000px");
css("a:link", "font-size", "25pt");


