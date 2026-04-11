window.onload = function () {
	var cookies = document.cookie; //全てのcookieを取り出して
	var cookiesArray = cookies.split(';'); // ;で分割し配列に
	var is_show = true;
	var new_ele;
	for (var c of cookiesArray) { //一つ一つ取り出して
		var cArray = c.split('='); //さらに=で分割して配列に
		if (cArray[0].match(/\_\_gdpr\_\_/)) { // 取り出したいkeyと合致したら
			is_show = false;
		}
	}
	if (is_show) {

		var new_ele = document.createElement("div");
		new_ele.innerHTML = "<div class=\"bdpr_box\" style=\"position:fixed;bottom:0;z-index:99999!important;width:100%;display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;-webkit-justify-content:center;justify-content:center;padding:5px 10px;font-size:14px;color:#000;background-color:#eee\">\n" +
			"\t<div class=\"bdpr_tx\" style=\"letter-spacing:normal !important;line-height:normal !important\">\n" +
			"\t\tサービスの利便性向上、利用分析、広告配信等のためにCookieを利用し、アクセスデータを取得しています。当社のサイトにアクセスすることにより、<a href=\"https://retribes.co.jp/privacy-policy.html\" target=\"_blank\" style=\"color:#000;text-decoration:underline\">プライバシーポリシー</a>に記載されているCookieの利用に同意するものとします。\n" +
			"\t</div>\n" +
			"\t<div class=\"bdpr_close\" style=\"line-height:1; padding:0 5px 0 10px; cursor:pointer\">\n" +
			"\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"19\" height=\"19\" viewBox=\"0 0 19 19\"><defs><style>.a{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;}</style></defs><title>close_btn</title><circle class=\"a\" cx=\"9.5\" cy=\"9.5\" r=\"9\"/><line class=\"a\" x1=\"6.14\" y1=\"6.14\" x2=\"12.86\" y2=\"12.86\"/><line class=\"a\" x1=\"12.86\" y1=\"6.14\" x2=\"6.14\" y2=\"12.86\"/></svg>\n" +
			"\t</div>\n" +
			"</div><!-- / .bdpr_box -->";
		document.body.appendChild(new_ele);
	}

	var bdpr_close = document.getElementsByClassName("bdpr_close");
	for (var $i = 0; $i < bdpr_close.length; $i++) {
		bdpr_close[$i].onclick = function () {
			//スクリプト実行時から1年後を設定
			var exp = new Date().setFullYear(new Date().getFullYear() + 1);
			//その数字をDateコンストラクタに渡してみる
			exp = new Date(exp);
			//cookieにエンコードした上で格納
			document.cookie = "__gdpr__=" + encodeURIComponent('1') + "; expires=" + exp.toUTCString() +"; path=/";
			//GDPR表記を削除
			var bdpr_box = document.getElementsByClassName("bdpr_box");
			var e = bdpr_box[0];
			e.parentNode.removeChild(e);

		}
	}

};

