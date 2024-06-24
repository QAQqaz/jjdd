/**************************************
[rewrite_local]
^http[s]?:\/\/api\.m\.jd\.com\/client\.action\? url script-response-body https://raw.githubusercontent.com/QAQqaz/jjdd/main/jd_getcookie.js

[mitm]
hostname = mars.jd.com
*****************************************/


let headerCookie = $request.headers["Cookie"];

// 使用正则表达式查找pt_pin和pt_key
let pt_pin_match = headerCookie.match(/pt_pin=([^;]+)/);
let pt_key_match = headerCookie.match(/pt_key=([^;]+)/);

// 如果找到了匹配项，则打印它们
if (pt_pin_match && pt_key_match) {
    console.log("pt_pin: " + pt_pin_match[1]);
    console.log("pt_key: " + pt_key_match[1]);
}else {
    console.log("未找到pt_pin或pt_key。");
}

#console.log("获取京东Cookie"+headerCookie);

if(headerCookie){
	$notify("更新京东Cookie成功🎉", "", "无需禁用脚本，仅cookie改变时才会重新获取");
}else{
	$notify("更新京东Cookie失败‼‼", "", "请重试");
}
$done({});
