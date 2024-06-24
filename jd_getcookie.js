/**************************************
[rewrite_local]
^http[s]?:\/\/api\.m\.jd\.com\/client\.action\? url script-response-body https://raw.githubusercontent.com/QAQqaz/jjdd/main/jd_getcookie.js

[mitm]
hostname = mars.jd.com
*****************************************/

// 获取Cookie并打印pt_pin和pt_key
function getCookiesAndLog() {
    let headerCookie = $request.headers["Cookie"];
    let pt_pin_match = headerCookie.match(/pt_pin=([^;]+)/);
    let pt_key_match = headerCookie.match(/pt_key=([^;]+)/);

    if (pt_pin_match && pt_key_match) {
        #console.log("pt_pin: " + pt_pin_match[1]);
        #console.log("pt_key: " + pt_key_match[1]);
        console.log("pt_pin=" + pt_pin_match[1] + ";pt_key=" + pt_key_match[1]+";");
        $notify("京东Cookie更新成功🎉", "", "pt_pin=" + pt_pin_match[1] + ";pt_key=" + pt_key_match[1]+";");
    } else {
        console.log("未找到pt_pin或pt_key。");
        $notify("京东Cookie更新失败‼️", "", "请检查是否已登录并重试");
    }
}

// 执行脚本
if ($request && $request.method != 'OPTIONS') {
    getCookiesAndLog();
}

$done({});
