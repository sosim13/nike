




function css(selector, property, value) {
    for (var i=0; i < document.styleSheets.length; ++i) {
        try { 
        	document.styleSheets[i].insertRule(selector+ ' {'+property+':'+value+'}', document.styleSheets[i].cssRules.length);
        } catch(err) {
        }
    }
}


css("#t_left","display","none");
css("#banner","display","none");
css("#head a img","margin-left","0");
css("#timg img","width","40px");
css("#timg img","height","30px");
css("#t_left","display","none");
css("#tsub a","font-size","30px");
css("#tcat a font","font-size","30px");
css("#tid font","font-size","30px");
css("#tdate","font-size","30px");
css("#thit","font-size","30px");
css("#r_idx_l","font-size","30px");
css("#r_idx_l a","font-size","20px");
css("#tail img","display","none");
css("#tg_box a img","display","none");



