function newImage(el){
	if (el.src.match("images/chinese_e.png")){
	el.src = "images/chinese_s.png";

} else if (el.src.match("images/chinese_s.png")){
	el.src = "images/chinese_c.png";
 
} else if (el.src.match("images/chinese_c.png")){
	 el.src = "images/chinese_a.png";

} else if (el.src.match("images/chinese_a.png")){
	 el.src = "images/chinese_p.png";
	 
} else if (el.src.match("images/chinese_p.png")){
	 el.src = "images/chinese_e.png";
 
 }else {
	
}
}

