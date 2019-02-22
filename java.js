function newImage(el){
	if (el.src.match("images/chinese_e.jpg")){
	el.src = "images/chinese_s.jpg";

} else if (el.src.match("images/chinese_s.jpg")){
	el.src = "images/chinese_c.jpg";
 
} else if (el.src.match("images/chinese_c.jpg")){
	 el.src = "images/chinese_a.jpg";

} else if (el.src.match("images/chinese_a.jpg")){
	 el.src = "images/chinese_p.jpg";
	 
} else if (el.src.match("images/chinese_p.jpg")){
	 el.src = "images/chinese_e.jpg";
 
 }else {
	
}
}
