/**************************************
[rewrite_local]
^http[s]?:\/\/api\.m\.jd\.com\/client\.action\? url script-response-body jd_getcookie.js

[mitm]
hostname = api.m.jd.com
*****************************************/


let headerCookie = $request.headers["Cookie"];
console.log("获取京东Cookie"+headerCookie);
if(headerCookie){
	$notify("更新京东Cookie成功🎉", "", "无需禁用脚本，仅cookie改变时才会重新获取");
}else{
	$notify("更新京东Cookie失败‼‼", "", "请重试");
}
$done({});
