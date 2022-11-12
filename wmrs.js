/*
完美人生App: 一诺庄园

变量：捉包https://hms.cignacmb.com域名headars里的Authorization 多账号换行隔开
格式：export ynzy="Authorization=Bearer_xxxxxx"  

CGkey: 脚本卡密   电报机器人 @CGKEYBot 处获取 (所有脚本通用)
格式：export CGkey="xxxxxxxx"

*/

const $ = new Env("一诺庄园");
let envSplitor = ['\n']  //多账号隔开方式
let defaultUA = 'Mozilla/5.0 (Linux; Android 10; ProjectTitan Build/NZH54D; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/74.0.3729.186 Mobile Safari/537.36 ;hmsapp/5.5.36;HMS_APP_SESSIONID/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzaWduRGF0YSI6IkQ2QkY2NTRFNDA5N0UwMkMyQzJGRTVCQzFDNjg0RTg2OTI5MjQzIiwibG9naW5UaW1lIjoiMTY2ODAwOTAxMzY5NyIsIm5iZiI6MTY2ODAwOTAxMywiZXhwdCI6MTY2ODA5NTQxMzY5NywiaXNzIjoiSldUIiwiZnJvbSI6IkFQUCIsImV4cCI6MTY3MzE5MzAxMywidXNlcklkIjoiNjczMzQ5NCIsImlhdCI6MTY2ODAwOTAxM30.jFay4AUDuTq0ZQd2bzgGFw_WUZOz-An3UQc16aItE00;' //换成自己的UA
let list = 'param=eyJhY3Rpb24iOiJNQiIsInNlYXJjaEtleSI6IiIsImNhdGVnb3J5IjoiQTA3Iiwic29ydFR5cGUiOiIwNCIsImludGVydmFsIjoiMDAiLCJhY3Rpdml0eVR5cGUiOiIwNCwwMywwMiwxMywxNCwwMCIsImN1cnJlbnRQYWdlIjoiMSIsInBhZ2VTaXplIjoiMTAifQ=='         //库存监控body，默认虚拟卡类 如需其他自己抓
//https://member.cignacmb.com/shop/member/interface/queryShopList


var _0xodr='jsjiami.com.v6',_0xodr_=['‮_0xodr'],_0x3c82=[_0xodr,'IMKiQwh6','wqAWDk1i','wpnDrWLChcKkw7PCvcKcF1vDnRU=','bQbCgg==','wqXDr8Ojw4rCrMO+wqdB','w4U8J8O8DUUNC8Omw5ZP','w6chw6Riwqdrw74S','wojDhgzCmH4=','w6bChsK4KQ==','G3TDosK/b37DuQ==','w7TDsD8a','woXDmF87J8K0woQ=','w5gSZMOuasOLw67DjQ==','Q0wQG0jCosKg','w7bChsK/I27Dtxcu','HnYocA==','wrXCtcO8wolOw6rDig==','HcK2w4/CqAHCrHbDo8OqwofCpz4=','fH95UB9Uwo7CmTfDlMKZeXhbNVc=','ZBTCkcOT','wqdmOyHCiwsu','w54WdMOqVsOOw4rDjA==','w6XDpCwDw7w=','wqvCqjtRw5M=','w5ElJ8O2Ew==','wpwtwr3CnsKuwqVG','E8O/w6ogw6YawoobSyV8wrPCsTLCslgcEyp4wobCjyYEw7UJw7fCiWvDi8KSwoFUwpMDQAM6w5l6dlIxCRA/wpPCp8OOw7bDscKiw4tAwp5Xwr8sIMObwrx/w7zDlgVxLMK/EMOV','wqDCuMOjwrZsw7bDhUk=','wrddw5BBdQ==','w7pDOjIZ','wpotZ8KeEw==','STjCgsOfLg==','wqJbCcKz','EcOXwqnDhHo=','6LWD5YyVw78=','wpfkurHli6d7w5A=','w7HDpioJw4jDiQJfw6vCjFN6','ZgpaRibDnQ5l','wpbDkVAKL8KxworDt8OQwozDo2c=','EMKuw4nCmwvCi1fDosOqwovCrzM=','6Leg5Y+9DA==','woVIw7vDmQ==','wrbmtabopZ4=','DnYvej5ZOiQ=','wrrmr7bkuL/lirrltY7nuLTlrZvmibTkub8=','YhlOwrXCiA==','OR0HwosI','wot1w4x6Ww==','6LeX5Y2LMw==','wqQrKyQ=','F8KHw5fCjGZjwpZx','wrZVDsKm','LS8gwrcSw57CuAQD','wod/Ix3ChQoscAJJLXfCqQ==','wqB7GcKkZw==','Blp6EDM=','w5vCiVBOYA==','wqwxccKmFEokwo7Dixo=','fW3Cr8K5','Fng7UB5cGS4DwoBCLg==','wpcADlo=','wqJjJAXChQskaA9YB3nCqXXCn3cINQ==','6aOr57CX5pyy8YmsiQ==','w4/CunNwamFk','E3k1ZRlZOygNwoxxJMOqB8KhYMKswo4=','CxM3fjI=','K1gKYzY=','LxwoaQ4=','wodPCcK6UnPDhh3CiE/DjVZr','w4/CjgMAw786XQ==','wp3CpS5hw4g=','c25NXAU=','NsOJwqjDm18=','N8KRw4DCvwg=','w7zCv21EwpDDryEaw4I=','woLDjATCvHk=','S04YKlE=','w7nDs8KqScOZwprCsw==','KMKbYgFe','wo0jwpjCkMKuwrpH','w7nDucKSesOQwpLCsw==','w4LCkRXDnUYSw55AwoRgwoMT','6LWc5Y+vw5U=','w47ChQYBw6I=','J2tVBg==','LsKbfAlX','J8OLwqzDmCvCj8OUQzfCm1V+','worDlV4K','w7rnrqLnu4U=','wqLllaXlhrfovpPluos=','dgpdTA==','w6Ywwp7CpcKLw47DulQpKcK0FMOHeVhx','AueMjOaeluezpuachQ==','L8OFwr/DuA==','w4nCjB3Dq1wew5xKwoZswokpdsKzw6k/JMOZwpE=','CcOuw701w7xWw4BQbSlgw7DCuxXCoFs=','wqsDP3Nx','wororoDli7jlppvlpJzkv5Dnlo/DhsOg6YW56KKn546w5aKc6YKx5oin6Kyd6IGX57KQ5L2d6IC66Ke16Zq+','LRg5bQpIWTHCsMOzw58g','w65uw7Bb','JsOXwqw=','wpgpwqLCmMKm','w6chw7Riwrl5w5I=','w7PDvMKyfsOPwo/ClAXCl8OLwpM=','SlQIP1rDq8OkPcOAwqJvw5nCuk12wpt7W8OERsOQYcO7woVEw5bDjcKawovDoTPDlcKvHHnDrcOMwqRZw6dgw5fDlxbClXPCqxHDtxdsTsKwHUPDvsKvOcK6KMOb','CnYucB0=','wolCPsK0cg==','SmBzRQ5fwq7DlQjDmsKkam1H','C8Okw60k','w47Cq2Frc2RCw6BTeA==','6LS+5Y2rwoE=','MSsuwr0=','XOWXo+ezmuadiMO6w7E=','T1Mb','K1o0SSI=','UEUPIEXCp8Ku','wrvDpcOnw6TCsMO+wqBKEsKaUMOF','6Le55Y6ySw==','w5QQSDs=','w6/ClMKr','wrbDrWvCsMKvw7nCh8OeL1fDlQsDMw==','wrolNTU=','aAHCkcOCJD1iOsOGK8OFwrnCvw0QLQDDvzpaKMK5RcOcwrU1w4DDizPDmy5YwpFxJ8KgEkTDqMKHwqshMMKdTVRzOx03asOnw6l6AMKCenHCvcKpw4zDtQ==','wo11PRDCrg==','w6rCgsKtLEjDqgA=','Lnp7CCc=','VAxTYjA=','C8KDw4nCmQ==','w5wlAMOdBw==','wqAjBAPCkw==','wqMnwqDChcKq','wrzCrC1M','w6DDsDkaw4E=','wpbDv8O0w43CscOowodfB8KHX8OTAg==','bMOxwr3DuQY=','Tk8bDkfCtcKFfcOcwqZ6wo4=','bwBhwrE=','w7PnjY7mnbvorabnsZvvvaw=','wrRfDsKieWDDmwY=','wol7OxDCrw/DpMK4wqzDvQ==','KxQiQjE=','OGnDv8K7aA==','w53DgQoow7k=','wopbw7nDjlI=','wrhBw7nDjERyw55Q','Oz4t','w6Q6wo7CtA==','O23DusKDYX/Du8OnfcOwbcKjw50=','OsKtw5vCgiE=','wq3Ch8OcwqrDug==','6Ley5Yyuw4s=','wpfCvMORwr7DjAgMAUhoGQ==','YhlGSR3DnxdOaw96','w6Ywwo7CsMKmw5nDq1E=','wrsgdsKzFFUTwrLDjBDDlm4=','6K+Y57OPwr/luqPlr4E=','O29LEwIOBkg=','KMKIfwRGGSzDksO7RsKp','woAVFUlgHsO/FEDCvSk=','EMOCwrbDgmLDgX4=','RRBjwp/Chw==','w6Fkw61SXg==','w7LCiMK/PA==','w7UjLMOrAUoVcsOLw4BKw4bCicKD','woZJw5ZId8OcwqTClSfDtjAEw5o=','E193GQU=','wrVYOxXCiw==','Q8KXw5HClUY/','w419CTQ7','w7rCqhfDjH0=','wp3Dp2TCoMKvw6XCgA==','w4c+S8OAWg==','M8OrwqnDjTA=','wrTDpcOkw4A=','wolGw7LDhQ==','woxow77DmHg=','D8Kxw4LCsxE=','w5PCgg8B','woPDq3U=','wpPCp8OTwr/CiA==','w5ojJcOeCkAvMMOzw4xCw5g=','8YOctuWMieWsk+mqgeiuiOaKkeWLq8O95p+q5pSB5p+c6IaI','w54easOkKQ==','wpbDo2vClsKvw7bClw==','CHQNdxY=','wo7CpQZgw6M=','wrwqdMK3','wql9JRnCrQ==','fHbCr8KcaA==','bsOmwrPDngE=','Mjkk','w6bor43mor3mnLfljZzlr4fmirnlnY/CvXzmnp7lmZHkur8MFMKtw5NbXcK1GGU2BeWnr+iNuuWMpuWOvOWthw==','w7doCmo=','IOiuguWImuWmqOWlk+S9uOeVpXrDnOmGi+ihs+eMuOWhn+mBhOaJp+iutOiAteexp+S8i+iAveinpemavg==','wpTDlUEcIw==','QE8YNg==','asO5wqnDoBs9wp4=','5pyg5omy5Yu2wo5Vw5/or6Ppm6LorqjohLTmnp7orrXmm7E=','w5lDw7hIcw==','Oml5LQQ=','wrINZ8KaIA==','wpPCocO9wr3Diw==','LcKzw4TCsj8=','OsOKw7Egw5E=','w69ow4h1bA==','wqVRK8KzUWjDiw==','wrDpgavnn4DljaTvvoldbOKaue+6meacsuWvp+aUguS5u+WJmOWJsOW9seWcgETDi1/ng4/ovbDooYjkupbmrZDCmQ==','wq8wY8K6','w7U5wpE=','wqrCqjJMw4HDoQ==','wp8EFFxxNw==','w5rCpmV7UA==','w7zDviw=','M8OBwrrDgBQ=','w7vCkUXDuCBkwqxZw7DDjmTDrlbCjcK9NeWPpOmEueaivOa0lsOUw6YGw4vDuwR1w4gewofCiMKbaAJm','RMOVw7NEw7xV','wrfCuMO+wo9Kw7jDhQ==','wrZ/JB0=','A8OLwqk=','NRsqecOM','wrjCvMO+wrpbw7E=','JWVfIigLPEbCgCQZw6Y=','wohIw7jDrm16w4k=','wqbDrXoHwpzDtlpNwqvClQhyw5nDmgM=','w40Sc8OUa8OKw5XDvcOzw4cJU3bDokM=','wrjCjcOUwoh8','Cm3DvcKD','w7PDuS4Yw4fDowM=','w43CqnN3','w6cYacO1cA==','DMOqw7ck','DREgX8OUPDA=','wrMqd8KTD10pwo7DmxbDgnI=','w4wQSTfDtw==','wrwkfsKABFgD','wpAADlht','w7bDvcKj','wqwjKCDCnArCjw==','FcODw6Qkw5E=','5p215oiD5YmqSyge6K+L6Zm66Kyq6IaG5p6e6K695pix','w4DCq8KUO0Q=','IGRcBj4gFA==','NsKKw7LCpkc=','FFDDtMKfSg==','ZmPCoQ==','OnpUCjI=','w7gwwpPCp8KWw5A=','wqZMw5JMccONwqzCmy/DrTdEw4zDojcOwrpXfl4Uw5I8w6pow705RcKqwqPDhsKGEQ==','wrTDpW3CisKu','G8KVfhRWFCzCs8OGTMKtXw==','wpfCtsO+wqlKw7fDlQFJwqJOIETDhw==','w77CjyPDknk=','w6VtPWRy','w6zCi8KBO0U=','YxPClcOQLg==','w75gNzk=','wq5fHMK2WHPDnA==','FhwuTMOcPSQ=','CDA0cQA=','QMOTw7tJ','wqRVGcKr','w5fCnhEM','w6kYacO1fcOBw5PChMOGw40Seg==','w4w3w5VBwoM=','wp5Nw6fDk3o=','LiUNwosD','ckwGLG8=','wqpmPwTCtQ==','wqnDmlQcCA==','cyFcWRk=','GsKpUgdi','E0tCCTM=','wqTDr8Ouw4E=','wqgwDQPChw==','eBFdZAc=','M8OUwpfDjHc=','BDgDRsOz','w4vCuDXDqnw=','UcOMw7NZw60=','w4zCkRbDpQ==','woYtwq/ClcKnwqFQ','Hwk/RMOQLDbDijQ2wpfCnMK/FsKfO8OJworCo8OPDsKFeHdOD8KNw6xuJcO5w4c8wrg3w5R6E212E8KJGMOtw6TCnmM=','w7RqMiQSw7wr','HsKuw4rCow==','TkUSKF3CuQ==','6K6M5rOJ5aav6LW1','wpnDrWI=','wqfCrcOiwrRBw77DiEp8','wqVTw4ZZ','PRI+cQ==','CnnDvMKYaw==','esOzwr7Dtg==','w4U4MMKtDlcOMQ==','wohCw4DDnWRyw4k=','wqplMDTChBwLZRdUImE=','6LW55Y6KAQ==','cwR/wqTChMK0w4Ms','wp8OHQ==','wr4sSsK8Dg==','wo3Dh30AIsKi','woLCoMOI','w7vCicK2MQ==','ZgR4wrDCocKlw5E=','w607wofCuQ==','w7FpGA==','USxCSBE=','wqBZw5ZEecOawqw=','IcOgwq7DiHc=','wpN7KxTDrjHDpsK0wrbDscOrwqtaKCE=','wol8Kh8=','w57Cvm5NY3Zl','woPDo2nCrcKu','YR9bHwLDjwxu','H8Kqw7jCuwnChn0=','bBrCgsOzOWMDesOaL8OQw64=','6LeI5Y6/wpU=','IGRcBj4=','wqjDgU7mo7jlv4Xplo7orJw=','C8OJwqHDiHY=','wqLCojNd','FcKvw4rCvx0=','w6HCj8KpK0bDsR0=','GMO0wqzDuDI=','OXgyZRVWI2w7woxKMMO7HQ==','f8O5wq4=','w6khQj/DpA==','wpXDjsOvw4vClw==','w6rCk8K4OF7ColxkwpAhD8OpwrzDo8KJX8Khw7rCs8OUSsKjwqp5RsOWTMKaYBIFEg3DsEUrwpzDiHnDi8OmwqLDh8OhcRprwqNgwqvCnTJVRMODwoPDs8KkfMKOIcKHwpDCocKZE8KPPA==','cQB+wrXCrQ==','wowpHw7Clw==','Ej8Lwo06','TEERKg==','wpF7KDDCrTjDicK4wqrDscOjwrc=','6LSs5Y+7wp0=','w4rCmAU=','YR5LQAHDiDBpbQw=','wpHDsGAsDA==','w59KEhEj','w6HClAHDknI=','DsOPw40Tw58=','U13CkcKEag==','wpVgOwHCsGbCqMO4wrPDvcOowqwSM2tyGcK3XcOgwpkRAsOtwqjDn8OMesKhSMOXYyLCkG1lwojCqibCj8OOMgDCosOrNMKuw4dlwqg2wrQVV0LDpxcHwqoi','w516JygYw7wxw7LCicK0Mnkm','LyUwwqw=','wrobMmN8','w5gSdMOxW8OAw4PDjA==','woh2JQjClQ==','wrMhKzDCvw==','6LSv5Y+4Rg==','BeeuhOWIoOiPl+W+pA==','BMOOwrjDlx8=','XW3CssK4Xw==','wrxIw6LDiUk=','w6Ywwo7Cr8KOw47Dug==','w5YeQh/DvTModsOiUhvCjQ==','6LaB5YycOQ==','wrrCuMO9wrg=','RmVufzE=','wrRvJBrChg4g','w6ZiDWBqwpbCk2I=','Ghg7SQ==','wo5kKhLCqj3Dq8KDwr/Dq8Ou','woDCq8OKwo/Dig4KGUBoBsK1wqPCgcOu','w5Yrw6l5wrBhw4NbCU5zwoUMJQ==','HXIo','wr/DhMOxw6rCqQ==','agFrdFFCDAPDpcOgwoE=','w4l3HxgY','w7xzGn9rw4jDtSktWcKaPcKDw64SwpIywrB6ZMO0HHA7w7JRY2c8B1zCisOkXVlbC1gfdcKkYsOuw7/DkCPCpk3CkcO+w5JzOsKswqxXwo1mw6TDmUIbeEk3','wp4pwrzCkMKv','wqxxw6Z5SA==','IW9ZByMdAQ==','a1VwRyI=','wq7DsMOkw6jCrQ==','HnnDusKK','FsKSw4HCn0tjwo5EeMOnwpg=','K8KOcRRGCQ==','jsjiawKmi.kNBcDbAAAISoRmOO.v6AZ=='];if(function(_0xaf507a,_0x451b9b,_0x4c18c0){function _0xf704c(_0x2c82b6,_0x4cf845,_0x296245,_0x3613ab,_0x5f5663,_0x1a5afe){_0x4cf845=_0x4cf845>>0x8,_0x5f5663='po';var _0x4baefc='shift',_0x299108='push',_0x1a5afe='‮';if(_0x4cf845<_0x2c82b6){while(--_0x2c82b6){_0x3613ab=_0xaf507a[_0x4baefc]();if(_0x4cf845===_0x2c82b6&&_0x1a5afe==='‮'&&_0x1a5afe['length']===0x1){_0x4cf845=_0x3613ab,_0x296245=_0xaf507a[_0x5f5663+'p']();}else if(_0x4cf845&&_0x296245['replace'](/[wKkNBDbAAAISROOAZ=]/g,'')===_0x4cf845){_0xaf507a[_0x299108](_0x3613ab);}}_0xaf507a[_0x299108](_0xaf507a[_0x4baefc]());}return 0x1124a1;};return _0xf704c(++_0x451b9b,_0x4c18c0)>>_0x451b9b^_0x4c18c0;}(_0x3c82,0x12b,0x12b00),_0x3c82){_0xodr_=_0x3c82['length']^0x12b;};function _0xa087(_0x3eab2b,_0x24d678){_0x3eab2b=~~'0x'['concat'](_0x3eab2b['slice'](0x1));var _0x380e02=_0x3c82[_0x3eab2b];if(_0xa087['mcydJd']===undefined){(function(){var _0x239f67=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x4ea667='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x239f67['atob']||(_0x239f67['atob']=function(_0x416094){var _0x47866b=String(_0x416094)['replace'](/=+$/,'');for(var _0x4e72f5=0x0,_0x34e21e,_0x30aa21,_0x3bbb5e=0x0,_0x245230='';_0x30aa21=_0x47866b['charAt'](_0x3bbb5e++);~_0x30aa21&&(_0x34e21e=_0x4e72f5%0x4?_0x34e21e*0x40+_0x30aa21:_0x30aa21,_0x4e72f5++%0x4)?_0x245230+=String['fromCharCode'](0xff&_0x34e21e>>(-0x2*_0x4e72f5&0x6)):0x0){_0x30aa21=_0x4ea667['indexOf'](_0x30aa21);}return _0x245230;});}());function _0x1ff335(_0x4ba5c8,_0x24d678){var _0x1ede03=[],_0x42c87c=0x0,_0x2b0a09,_0x55bbde='',_0x5acd11='';_0x4ba5c8=atob(_0x4ba5c8);for(var _0x17d77f=0x0,_0x16c31b=_0x4ba5c8['length'];_0x17d77f<_0x16c31b;_0x17d77f++){_0x5acd11+='%'+('00'+_0x4ba5c8['charCodeAt'](_0x17d77f)['toString'](0x10))['slice'](-0x2);}_0x4ba5c8=decodeURIComponent(_0x5acd11);for(var _0x546313=0x0;_0x546313<0x100;_0x546313++){_0x1ede03[_0x546313]=_0x546313;}for(_0x546313=0x0;_0x546313<0x100;_0x546313++){_0x42c87c=(_0x42c87c+_0x1ede03[_0x546313]+_0x24d678['charCodeAt'](_0x546313%_0x24d678['length']))%0x100;_0x2b0a09=_0x1ede03[_0x546313];_0x1ede03[_0x546313]=_0x1ede03[_0x42c87c];_0x1ede03[_0x42c87c]=_0x2b0a09;}_0x546313=0x0;_0x42c87c=0x0;for(var _0x19de5e=0x0;_0x19de5e<_0x4ba5c8['length'];_0x19de5e++){_0x546313=(_0x546313+0x1)%0x100;_0x42c87c=(_0x42c87c+_0x1ede03[_0x546313])%0x100;_0x2b0a09=_0x1ede03[_0x546313];_0x1ede03[_0x546313]=_0x1ede03[_0x42c87c];_0x1ede03[_0x42c87c]=_0x2b0a09;_0x55bbde+=String['fromCharCode'](_0x4ba5c8['charCodeAt'](_0x19de5e)^_0x1ede03[(_0x1ede03[_0x546313]+_0x1ede03[_0x42c87c])%0x100]);}return _0x55bbde;}_0xa087['rHAwaq']=_0x1ff335;_0xa087['FXuiNB']={};_0xa087['mcydJd']=!![];}var _0x255dd0=_0xa087['FXuiNB'][_0x3eab2b];if(_0x255dd0===undefined){if(_0xa087['LdnjvK']===undefined){_0xa087['LdnjvK']=!![];}_0x380e02=_0xa087['rHAwaq'](_0x380e02,_0x24d678);_0xa087['FXuiNB'][_0x3eab2b]=_0x380e02;}else{_0x380e02=_0x255dd0;}return _0x380e02;};let httpResult,httpReq,httpResp;let userCookie=($[_0xa087('‮0','GhgD')]()?process[_0xa087('‮1','m5kO')][_0xa087('‫2','AL7M')]:$[_0xa087('‮3','0JZA')](_0xa087('‮4','dq[F')))||'';let userCGkey=($['isNode']()?process[_0xa087('‫5','(rNg')][_0xa087('‮6','w2H]')]:$[_0xa087('‫7',']TgT')](_0xa087('‮8','dK22')))||'';let userList=[];let userIdx=0x0;let userCount=0x0;let num=0x0;let ts=getNowFormatDate();const {machineId,machineIdSync}=require(_0xa087('‮9','BqdJ'));machineId()[_0xa087('‮a','BqdJ')](_0x3768b8=>{});let uuid=machineIdSync();class UserInfo{constructor(_0x36a05f){var _0x258add='3|4|1|0|2'['split']('|'),_0x52d991=0x0;while(!![]){switch(_0x258add[_0x52d991++]){case'0':this[_0xa087('‮b','Aj24')]=![];continue;case'1':this[_0xa087('‮c','2qny')]=![];continue;case'2':try{this['param']=$[_0xa087('‮d','w2H]')](_0x36a05f);this['ckValid']=!![];}catch(_0x220d39){this[_0xa087('‮e','l6b2')]=![];$[_0xa087('‫f','SQ$e')](_0xa087('‫10','opbn')+this[_0xa087('‮11','JuBt')]+_0xa087('‮12','2qny'));}continue;case'3':this[_0xa087('‫13','dK22')]=++userIdx;continue;case'4':this[_0xa087('‮14','&epw')]=this[_0xa087('‮15','l6b2')];continue;}break;}}async[_0xa087('‫16','AL7M')](){var _0x9c2a91={'BDonI':_0xa087('‮17','2gT&'),'KJOlz':_0xa087('‫18','sQU('),'FcYOg':function(_0x572521,_0x53a9e3,_0x9800a4){return _0x572521(_0x53a9e3,_0x9800a4);},'ZHbpi':_0xa087('‮19','HfUS'),'MuHUZ':function(_0x527357,_0x3c1c6c){return _0x527357==_0x3c1c6c;}};try{if(_0xa087('‮1a','bQ8O')!==_0x9c2a91[_0xa087('‮1b','i!Kc')]){return Promise['resolve'](0x1);}else{let _0x17fa06=_0xa087('‫1c','AL7M');let _0x539ed9='';let _0x2ee6af=''+this[_0xa087('‫1d','0JZA')]['Authorization'];let _0x550c90=populateUrlObject(_0x17fa06,_0x2ee6af,_0x539ed9);delete _0x550c90['headers'][_0x9c2a91['KJOlz']];await _0x9c2a91[_0xa087('‮1e','hs[g')](httpRequest,_0x9c2a91['ZHbpi'],_0x550c90);let _0x4092d8=httpResult;if(!_0x4092d8)return;if(_0x9c2a91[_0xa087('‫1f','G)v5')](_0x4092d8['statusCode'],0x0)){$['logAndNotify']('账号['+this[_0xa087('‫20','tA(D')]+']早起打卡成功');}else{$[_0xa087('‮21','BqdJ')](_0xa087('‫22','%^bi')+this['name']+']'+_0x4092d8[_0xa087('‮23','kmGq')]);}}}catch(_0x1588f6){}finally{return Promise['resolve'](0x1);}}async[_0xa087('‫24','w2H]')](){var _0x3223a2={'OjsNZ':function(_0x2a470a,_0x9fcbfb){return _0x2a470a!==_0x9fcbfb;},'YQWIt':_0xa087('‫25','GhgD'),'OvAht':function(_0x4be971,_0x7ec999,_0x5bcd3f,_0x4c3414,_0x2f647d){return _0x4be971(_0x7ec999,_0x5bcd3f,_0x4c3414,_0x2f647d);},'IzHXy':function(_0x2d67f1,_0x10f402){return _0x2d67f1==_0x10f402;},'ubjyV':function(_0x3777e9,_0x301bc6){return _0x3777e9===_0x301bc6;},'ykmqO':_0xa087('‫26','G(Uy'),'olvlx':'HrDkS'};try{if(_0x3223a2[_0xa087('‮27','NBza')](_0xa087('‫28','M0*h'),_0x3223a2[_0xa087('‫29','%^bi')])){httpResult=resp['body'];}else{let _0x1660ee=_0xa087('‫2a','BqdJ');let _0x37fb44='param=eyJhY3Rpb24iOiJNQiJ9';let _0x565b97='26';let _0x3e47ec=''+this['param'][_0xa087('‫2b','G(Uy')];let _0x4c0dac=_0x3223a2['OvAht'](populateUrlObject,_0x1660ee,_0x3e47ec,_0x565b97,_0x37fb44);await httpRequest(_0xa087('‫2c','G)v5'),_0x4c0dac);let _0x29ab29=httpResult;if(!_0x29ab29)return;if(_0x3223a2[_0xa087('‫2d','UGao')](_0x29ab29[_0xa087('‫2e','yP&C')],0x0)){if(_0x3223a2[_0xa087('‫2f','BqdJ')](_0x3223a2[_0xa087('‫30','hs[g')],'CEAQT')){$['logAndNotify'](_0xa087('‫31','f^[N')+this[_0xa087('‮14','&epw')]+_0xa087('‮32','v!MY')+_0x29ab29['respData']['signScore']+'诺米');}else{$[_0xa087('‮21','BqdJ')]('账号['+this['name']+']'+_0x29ab29['msg']);}}else{if(_0x3223a2[_0xa087('‮33','2gT&')](_0xa087('‫34','%^bi'),_0xa087('‫35','S3!J'))){return Promise[_0xa087('‫36','dq[F')](0x1);}else{$[_0xa087('‮37','bQ8O')](_0xa087('‮38','kmGq')+this[_0xa087('‮39','RaZT')]+']'+_0x29ab29['respDesc']);}}}}catch(_0x42d99b){}finally{if(_0x3223a2[_0xa087('‮3a','f^[N')](_0x3223a2['olvlx'],'btWAj')){return Promise[_0xa087('‮3b','XZEM')](0x1);}else{this[_0xa087('‮3c','(rNg')]=result[_0xa087('‮3d','@dq*')][_0xa087('‫3e','BqdJ')][0x0]['recordId'];}}}async[_0xa087('‫3f','m5kO')](){var _0x385374={'kMDYP':function(_0x206083,_0x4727fc,_0x4ff39a){return _0x206083(_0x4727fc,_0x4ff39a);},'bZmvI':_0xa087('‮40','JlSj'),'ZEcsS':function(_0x3e34fd,_0x5273ef,_0x5978ba){return _0x3e34fd(_0x5273ef,_0x5978ba);},'YzbmQ':_0xa087('‫41','sQU('),'yzdMs':function(_0xef47a4,_0x4adb06){return _0xef47a4==_0x4adb06;},'hHFCA':function(_0x289749,_0xb31dea){return _0x289749===_0xb31dea;},'xXShI':_0xa087('‮42','i!Kc'),'Ugwxf':_0xa087('‮43','t8qX'),'uugxP':function(_0x4af99a,_0x241386){return _0x4af99a!==_0x241386;},'gieiw':_0xa087('‮44','G(Uy')};try{let _0x50dc22=_0xa087('‮45','(rNg');let _0x4123ad='';let _0x291b15=''+this[_0xa087('‫46','opbn')]['Authorization'];let _0x5deab3=_0x385374[_0xa087('‮47',']TgT')](populateUrlObject,_0x50dc22,_0x291b15);delete _0x5deab3[_0xa087('‫48','JuBt')][_0x385374[_0xa087('‮49','f^[N')]];await _0x385374['ZEcsS'](httpRequest,_0x385374['YzbmQ'],_0x5deab3);let _0x27f6e2=httpResult;if(!_0x27f6e2)return;if(_0x385374[_0xa087('‮4a','i!Kc')](_0x27f6e2[_0xa087('‮4b',')]cq')][_0xa087('‮4c','Z65r')][0x0][_0xa087('‫4d','v!MY')],0x0)){if(_0x385374['hHFCA'](_0x385374[_0xa087('‮4e','v!MY')],_0xa087('‫4f','UGao'))){$[_0xa087('‮50','2qny')]('❌'+_0x27f6e2[_0xa087('‮51','SQ$e')]+'\x20请检查卡密或在TG机器人\x20@CGKEYBot\x20处获取卡密');}else{this[_0xa087('‫52','i!Kc')]=_0x27f6e2[_0xa087('‮4b',')]cq')][_0xa087('‫53','j%xm')][0x0][_0xa087('‮54','JlSj')];}}for(let _0x12be2f=0x0;_0x12be2f<0x5;_0x12be2f++){if(_0x385374[_0xa087('‫55','NEGL')](_0x27f6e2[_0xa087('‫56','AL7M')][_0xa087('‫57',')]cq')][_0x12be2f]['status'],0x0)||-0x1){var _0x14bb29=_0x385374['Ugwxf']['split']('|'),_0x11ae04=0x0;while(!![]){switch(_0x14bb29[_0x11ae04++]){case'0':this['recordId']=_0x27f6e2[_0xa087('‫58','c4H9')][_0xa087('‮59','GhgD')][_0x12be2f][_0xa087('‮5a','yP&C')];continue;case'1':this['taskCode']=_0x27f6e2['data'][_0xa087('‮5b','tA(D')][_0x12be2f][_0xa087('‮5c','AL7M')];continue;case'2':this['awardContent']=_0x27f6e2[_0xa087('‮5d','sQU(')][_0xa087('‫5e','RaZT')][_0x12be2f][_0xa087('‮5f','l6b2')];continue;case'3':await this[_0xa087('‫60','f^[N')]();continue;case'4':await $['wait'](0xbb8);continue;case'5':this['taskName']=_0x27f6e2[_0xa087('‫61','SQ$e')][_0xa087('‮62','XZEM')][_0x12be2f][_0xa087('‫63','yP&C')];continue;}break;}}}}catch(_0x177f7b){}finally{if(_0x385374[_0xa087('‮64','c4H9')](_0x385374[_0xa087('‫65','&epw')],_0x385374[_0xa087('‫66','j%xm')])){resolve();}else{return Promise[_0xa087('‮67','opbn')](0x1);}}}async['updateTaskStatus'](){var _0x15371f={'fLirn':function(_0x2ad54a,_0x21139c,_0x4276d6,_0x2d5931,_0x550911){return _0x2ad54a(_0x21139c,_0x4276d6,_0x2d5931,_0x550911);},'EhwLr':function(_0x2ddf65,_0x31d564,_0x117375){return _0x2ddf65(_0x31d564,_0x117375);},'IMgmy':'post','hKkGH':'0|3|1|2|4','cxBaH':function(_0x35c823,_0x3134a6){return _0x35c823===_0x3134a6;},'fWDSh':'MYsmI','LInZC':'JlGZO'};try{let _0x434264=_0xa087('‮68','M0*h');let _0x34e11c='taskCode='+this[_0xa087('‫69','RaZT')];let _0x203661=''+this[_0xa087('‫6a',']TgT')]['Authorization'];let _0x26d896='12';let _0x2bcbb9=_0x15371f[_0xa087('‮6b','G(Uy')](populateUrlObject,_0x434264,_0x203661,_0x26d896,_0x34e11c);await _0x15371f[_0xa087('‮6c','o7KU')](httpRequest,_0x15371f[_0xa087('‮6d','SQ$e')],_0x2bcbb9);let _0x417ddb=httpResult;if(!_0x417ddb)return;if(_0x417ddb[_0xa087('‫6e','phOV')]==0x1){var _0x1228a5=_0x15371f['hKkGH'][_0xa087('‫6f','dK22')]('|'),_0x5a3489=0x0;while(!![]){switch(_0x1228a5[_0x5a3489++]){case'0':$['logAndNotify'](_0xa087('‮70','Z65r')+this[_0xa087('‫20','tA(D')]+_0xa087('‮71','hs[g')+this[_0xa087('‫72','c4H9')]);continue;case'1':this['id']=''+this['recordId'];continue;case'2':this['name1']=''+this[_0xa087('‮73','w2H]')];continue;case'3':await $['wait'](0xbb8);continue;case'4':await this[_0xa087('‫74','GhgD')]();continue;}break;}}else{$[_0xa087('‮75','l6b2')](_0xa087('‫76','XZEM')+this[_0xa087('‮77','S3!J')]+_0xa087('‫78','S3!J')+this[_0xa087('‫79','sQU(')]+_0xa087('‫7a','yio0'));}}catch(_0x3c4abf){}finally{if(_0x15371f[_0xa087('‮7b','0JZA')](_0x15371f[_0xa087('‫7c','G)v5')],_0x15371f[_0xa087('‫7d',']TgT')])){$['logAndNotify'](_0xa087('‫7e','NEGL')+this[_0xa087('‮7f','hs[g')]+']签到获得'+result[_0xa087('‫80','Z65r')]['signScore']+'诺米');}else{return Promise[_0xa087('‮67','opbn')](0x1);}}}async['receiveCandy'](){var _0x264c5e={'fAdvZ':function(_0x5441c8,_0x2c769e,_0x7c1f83){return _0x5441c8(_0x2c769e,_0x7c1f83);},'OPBsu':_0xa087('‫81','phOV'),'fVPQf':function(_0x3a3912,_0x14bbda){return _0x3a3912==_0x14bbda;}};try{let _0x311072='https://hms.cignacmb.com/activity/cignaInvestment/receiveCandy';let _0x5af31a=_0xa087('‮82','G)v5')+this['id'];let _0x3787ec=''+this['param'][_0xa087('‫83','XZEM')];let _0x5c99b0='17';let _0x56d89c=populateUrlObject(_0x311072,_0x3787ec,_0x5c99b0,_0x5af31a);await _0x264c5e[_0xa087('‫84','phOV')](httpRequest,_0x264c5e[_0xa087('‮85','JuBt')],_0x56d89c);let _0xcef2ae=httpResult;if(!_0xcef2ae)return;if(_0x264c5e[_0xa087('‫86','Aj24')](_0xcef2ae[_0xa087('‫87','o7KU')],0x0)){await $[_0xa087('‫88','%^bi')](0xbb8);$[_0xa087('‫89','sQU(')](_0xa087('‫31','f^[N')+this['name']+']领取:\x20'+this['name1']+'\x20'+_0xcef2ae[_0xa087('‫8a','UGao')][0x0][_0xa087('‮8b','XZEM')]+_0xa087('‫8c','l6b2'));}}catch(_0x3d8be3){}finally{return Promise[_0xa087('‮8d','Aj24')](0x1);}}async[_0xa087('‫8e','sQU(')](){var _0x1ab3d1={'PLfLW':function(_0x175398,_0x5b3340,_0x8c06ed,_0x4a2593){return _0x175398(_0x5b3340,_0x8c06ed,_0x4a2593);},'NNXwU':'Content-Length','dDtlr':function(_0x4a420e,_0x2c2fec,_0x40731b){return _0x4a420e(_0x2c2fec,_0x40731b);},'QfpYl':'post','zaPmn':function(_0x3c8263,_0x295ce1){return _0x3c8263!==_0x295ce1;},'KPnem':_0xa087('‮8f','t8qX'),'VpMpe':function(_0x3cb207,_0x951d2c){return _0x3cb207>=_0x951d2c;},'XbEHt':function(_0x10c6fc,_0x484902){return _0x10c6fc===_0x484902;},'VQaPv':_0xa087('‮90','sQU(')};try{let _0x4e5d04='https://hms.cignacmb.com/activity/cignaInvestment/initializeUserInfo';let _0x48c77c='';let _0x381119=''+this[_0xa087('‫91','t8qX')][_0xa087('‮92','phOV')];let _0x4c059e=_0x1ab3d1['PLfLW'](populateUrlObject,_0x4e5d04,_0x381119,_0x48c77c);delete _0x4c059e[_0xa087('‫93','kmGq')][_0x1ab3d1['NNXwU']];await _0x1ab3d1['dDtlr'](httpRequest,_0x1ab3d1[_0xa087('‮94','&epw')],_0x4c059e);let _0x40c54e=httpResult;if(!_0x40c54e)return;if(_0x40c54e['statusCode']==0x0){if(_0x1ab3d1[_0xa087('‮95','f^[N')](_0xa087('‫96','dK22'),_0x1ab3d1[_0xa087('‮97','l6b2')])){var _0x3dc924=_0xa087('‫98','&epw')[_0xa087('‫99','NEGL')]('|'),_0x345efc=0x0;while(!![]){switch(_0x3dc924[_0x345efc++]){case'0':this[_0xa087('‮9a','tA(D')]=++userIdx;continue;case'1':this[_0xa087('‮9b','yio0')]=![];continue;case'2':try{this[_0xa087('‫9c','v!MY')]=$['str2json'](str);this[_0xa087('‫9d','opbn')]=!![];}catch(_0x19a458){this[_0xa087('‫9e','yio0')]=![];$[_0xa087('‫9f','NBza')](_0xa087('‫a0',')]cq')+this[_0xa087('‮a1','kmGq')]+']CK格式错误');}continue;case'3':this[_0xa087('‫a2','JuBt')]=this['index'];continue;case'4':this[_0xa087('‮a3','v!MY')]=![];continue;}break;}}else{$[_0xa087('‮a4','2gT&')](_0xa087('‫10','opbn')+this[_0xa087('‫a5','GhgD')]+_0xa087('‮a6','kmGq')+_0x40c54e['data']['growthLevel']+_0xa087('‫a7','AL7M')+_0x40c54e[_0xa087('‮a8','w2H]')][_0xa087('‮a9','dq[F')]+_0xa087('‮aa','1hb0')+_0x40c54e[_0xa087('‫ab','2gT&')][_0xa087('‫ac','NBza')]+'🍬\x20');if(_0x1ab3d1['VpMpe'](_0x40c54e[_0xa087('‫58','c4H9')][_0xa087('‮ad','M0*h')],0x64)){if(_0x1ab3d1[_0xa087('‮ae','UGao')]('OaItD',_0x1ab3d1['VQaPv'])){$['logAndNotify']('❌'+_0x40c54e[_0xa087('‮51','SQ$e')]+_0xa087('‫af','yP&C'));}else{await this[_0xa087('‮b0','t8qX')]();}}}}else{$['logAndNotify']('账号['+this[_0xa087('‫b1','[%%K')]+']'+_0x40c54e[_0xa087('‫b2','2gT&')]);this[_0xa087('‫b3','opbn')]=![];this['canRead']=![];}}catch(_0x2019f5){}finally{return Promise[_0xa087('‫b4','JlSj')](0x1);}}async[_0xa087('‮b5','yio0')](){var _0x59be8e={'OxCfO':function(_0x43f4bb,_0x16f37c,_0x434b54){return _0x43f4bb(_0x16f37c,_0x434b54);},'ShEAX':function(_0x4e2250,_0x1f0ee0){return _0x4e2250==_0x1f0ee0;},'bhcjw':function(_0x32979e,_0x236ef5){return _0x32979e!==_0x236ef5;},'ejrhS':'QMhXR'};try{let _0x8f5d41=_0xa087('‮b6','tA(D');let _0x560cc4='';let _0x2a3808=''+this[_0xa087('‮b7','sQU(')]['Authorization'];let _0x60ebaf=_0x59be8e[_0xa087('‫b8','phOV')](populateUrlObject,_0x8f5d41,_0x2a3808);delete _0x60ebaf['headers'][_0xa087('‮b9','f^[N')];await httpRequest(_0xa087('‫ba','M0*h'),_0x60ebaf);let _0x1fca47=httpResult;if(!_0x1fca47)return;if(_0x59be8e['ShEAX'](_0x1fca47[_0xa087('‮bb','Aj24')],0x0)){$[_0xa087('‮75','l6b2')](_0xa087('‫bc','HfUS')+this[_0xa087('‫bd','G)v5')]+_0xa087('‫be','0JZA')+_0x1fca47[_0xa087('‫bf','tA(D')]);}else{if(_0x59be8e['bhcjw'](_0x59be8e['ejrhS'],_0xa087('‮c0','sQU('))){return Promise[_0xa087('‫c1','tA(D')](0x1);}else{$[_0xa087('‮c2','i!Kc')](_0xa087('‮c3','o7KU')+this[_0xa087('‫c4','bQ8O')]+']'+_0x1fca47[_0xa087('‮c5','AL7M')]);}}}catch(_0x37c761){}finally{return Promise['resolve'](0x1);}}async['receiveNaomi'](){var _0x2138b0={'gpCka':function(_0x1124db,_0xf9772f,_0x3dd3a6){return _0x1124db(_0xf9772f,_0x3dd3a6);},'QkdUX':_0xa087('‮c6','2qny'),'FgzOX':_0xa087('‮c7','hs[g')};try{let _0x264837=_0xa087('‫c8','SQ$e');let _0x176812='';let _0x33d057=''+this[_0xa087('‮c9','BqdJ')][_0xa087('‫83','XZEM')];let _0x64470b=_0x2138b0['gpCka'](populateUrlObject,_0x264837,_0x33d057);delete _0x64470b[_0xa087('‮ca','AL7M')][_0x2138b0['QkdUX']];await _0x2138b0[_0xa087('‫cb','JuBt')](httpRequest,_0x2138b0[_0xa087('‮cc','w2H]')],_0x64470b);let _0x5ee602=httpResult;if(!_0x5ee602)return;$['logAndNotify']('账号['+this[_0xa087('‫cd','Z65r')]+']收诺米:\x20'+_0x5ee602['msg']);}catch(_0x488e7d){}finally{if(_0xa087('‮ce','j%xm')!==_0xa087('‮cf','hs[g')){console['log'](e);}else{return Promise[_0xa087('‫c1','tA(D')](0x1);}}}async[_0xa087('‫d0','opbn')](){var _0x921345={'fCkma':function(_0x1a0397,_0x32b778,_0x201e53,_0x3152b0,_0x326910){return _0x1a0397(_0x32b778,_0x201e53,_0x3152b0,_0x326910);},'tmgvq':function(_0x54a67e,_0x127215,_0x3c4e8b){return _0x54a67e(_0x127215,_0x3c4e8b);},'tgtKp':_0xa087('‫d1','&epw'),'tixJR':function(_0x79e2d8,_0x2c6b7c){return _0x79e2d8<_0x2c6b7c;},'BqqPf':function(_0x191c37,_0x260715){return _0x191c37!==_0x260715;},'MPASU':'bzMpr'};try{let _0x23855a='https://member.cignacmb.com/shop/member/interface/queryScoreStatisticsMonth';let _0x474af7='param=e30=';let _0x51c1ce=''+this[_0xa087('‫d2','c4H9')][_0xa087('‮d3','i!Kc')];let _0x509848='12';let _0x538462=_0x921345['fCkma'](populateUrlObject,_0x23855a,_0x51c1ce,_0x509848,_0x474af7);await _0x921345[_0xa087('‫d4','HfUS')](httpRequest,_0x921345['tgtKp'],_0x538462);let _0x4d099e=httpResult;if(!_0x4d099e)return;$[_0xa087('‮d5','tA(D')]('账号['+this[_0xa087('‫d6','0JZA')]+_0xa087('‫d7','NBza')+_0x4d099e[_0xa087('‫d8','phOV')][_0xa087('‫d9','BqdJ')]);for(let _0x2774fc=0x0;_0x921345[_0xa087('‫da','t8qX')](_0x2774fc,0xa);_0x2774fc++){await this['ShopList']();}}catch(_0x2c3820){}finally{if(_0x921345[_0xa087('‮db',')]cq')](_0x921345[_0xa087('‮dc','c4H9')],_0xa087('‫dd','S3!J'))){return Promise['resolve'](0x1);}else{return Promise['resolve'](0x1);}}}async[_0xa087('‮de','S3!J')](){var _0x4ba452={'JfPqr':_0xa087('‫df','f^[N'),'FluXD':function(_0xbd394f,_0xf39c0d,_0x37be00,_0x11b9f7,_0x534faa){return _0xbd394f(_0xf39c0d,_0x37be00,_0x11b9f7,_0x534faa);},'JIbpC':function(_0x2b3052,_0x1925ed,_0x4c43ed){return _0x2b3052(_0x1925ed,_0x4c43ed);},'dvZZe':_0xa087('‮e0','dq[F')};try{let _0x29b408='https://member.cignacmb.com/shop/member/interface/queryShopList';let _0xd53d84=''+list;let _0x572038=''+this['param'][_0xa087('‫e1',')]cq')];let _0x1c591a=_0x4ba452['JfPqr'];let _0x434580=_0x4ba452[_0xa087('‫e2','l6b2')](populateUrlObject,_0x29b408,_0x572038,_0x1c591a,_0xd53d84);await _0x4ba452[_0xa087('‮e3','m5kO')](httpRequest,_0x4ba452['dvZZe'],_0x434580);let _0xd16a84=httpResult;if(!_0xd16a84)return;$['logAndNotify'](_0xa087('‮e4','RaZT')+this['name']+']'+_0xd16a84['respData'][_0xa087('‮e5','m5kO')][num][_0xa087('‮e6','w2H]')]+'\x20需要'+_0xd16a84[_0xa087('‫e7','dq[F')]['productList'][num][_0xa087('‮e8','o7KU')]+_0xa087('‮e9','1hb0')+_0xd16a84[_0xa087('‫ea','JuBt')][_0xa087('‮eb','v!MY')][num][_0xa087('‮ec','UGao')]);num++;}catch(_0x5148df){}finally{return Promise[_0xa087('‫ed','dK22')](0x1);}}async['km'](){var _0x10a9a4={'ZUOzC':function(_0x1298e1,_0x524d58){return _0x1298e1!==_0x524d58;},'wRqIl':_0xa087('‫ee','0JZA'),'HLtdH':_0xa087('‫ef','[%%K'),'QrZtL':_0xa087('‫f0','AL7M'),'TTePU':_0xa087('‫f1','j%xm'),'mILAB':_0xa087('‫f2',']TgT'),'xObTu':function(_0xfb1683,_0x5310b2){return _0xfb1683==_0x5310b2;},'ZmoBQ':'SaoNZ','gAhdp':'0|1|3|2|4','rcQff':function(_0x19f142,_0x2abc97){return _0x19f142==_0x2abc97;},'BfXXG':function(_0x9d970d,_0x5cb076){return _0x9d970d==_0x5cb076;},'owrlG':function(_0x46cc78,_0x594ee8){return _0x46cc78==_0x594ee8;},'vziQv':'nDcia'};try{if(_0x10a9a4[_0xa087('‮f3','JuBt')](_0x10a9a4['wRqIl'],_0x10a9a4[_0xa087('‮f4','BqdJ')])){let _0x248c5c='http://km.meetclover.ml/api.php?act=km_logon&app=10001&kami='+userCGkey+_0xa087('‮f5','Z65r')+uuid;let _0x366f17='';let _0x212e04=populateUrlObject(_0x248c5c,_0x366f17);await httpRequest(_0x10a9a4[_0xa087('‫f6','G(Uy')],_0x212e04);delete _0x212e04[_0xa087('‮ca','AL7M')][_0x10a9a4[_0xa087('‫f7','NBza')]];delete _0x212e04[_0xa087('‫f8','2qny')][_0x10a9a4[_0xa087('‮f9','yP&C')]];let _0x56d993=httpResult;if(_0x10a9a4[_0xa087('‮fa','2gT&')](_0x56d993[_0xa087('‮fb','i!Kc')],0xc8)){if(_0x10a9a4['ZmoBQ']!==_0x10a9a4['ZmoBQ']){httpResult=resp[_0xa087('‫fc','S3!J')];}else{var _0x2dee95=_0x10a9a4[_0xa087('‫fd','S3!J')][_0xa087('‫fe','l6b2')]('|'),_0x137c7d=0x0;while(!![]){switch(_0x2dee95[_0x137c7d++]){case'0':this[_0xa087('‫ff','kmGq')]=_0x56d993['msg'][_0xa087('‫100','2qny')];continue;case'1':this[_0xa087('‮101','m5kO')]=timestampToTime(this['time']);continue;case'2':this['valid']=!![];continue;case'3':$[_0xa087('‮102','j%xm')](_0xa087('‮103','NEGL')+this[_0xa087('‫104','yP&C')]);continue;case'4':this[_0xa087('‫105','2qny')]=!![];continue;}break;}}}if(_0x10a9a4[_0xa087('‮106','sQU(')](_0x56d993['code'],0x95)||_0x10a9a4[_0xa087('‫107','&epw')](_0x56d993[_0xa087('‫108','o7KU')],0x94)||_0x10a9a4[_0xa087('‮109','XZEM')](_0x56d993['code'],0x70)){if(_0x10a9a4[_0xa087('‫10a','%^bi')]===_0x10a9a4[_0xa087('‫10b','HfUS')]){$['logAndNotify']('❌'+_0x56d993[_0xa087('‫10c','G)v5')]+_0xa087('‫10d','phOV'));}else{return Promise['resolve'](0x1);}}if(_0x10a9a4['owrlG'](_0x56d993[_0xa087('‫10e','(rNg')],0x192)){$['logAndNotify']('❌'+_0x56d993['msg']+_0xa087('‮10f','SQ$e'));}}else{httpResult=JSON[_0xa087('‮110','GhgD')](resp[_0xa087('‫111','tA(D')]);}}catch(_0xd0d009){}finally{return Promise[_0xa087('‫112','HfUS')](0x1);}}}!(async()=>{var _0x765fa8={'xeqYQ':_0xa087('‮113','%^bi'),'toCgr':'undefined','idfju':function(_0x5745e5,_0x7214ff){return _0x5745e5!==_0x7214ff;},'AAopD':_0xa087('‮114','[%%K'),'ogUKq':function(_0x5f04aa){return _0x5f04aa();},'mGImY':function(_0x28ff91,_0x382476){return _0x28ff91>_0x382476;},'EAzko':function(_0x650a3c,_0x5fbfe7){return _0x650a3c===_0x5fbfe7;},'gyedV':_0xa087('‫115','JuBt'),'HyZPJ':function(_0x1b91de,_0x2f979b){return _0x1b91de===_0x2f979b;},'KdaMg':_0xa087('‫116','o7KU'),'KbeQu':function(_0x4415a7,_0x474fb4){return _0x4415a7>_0x474fb4;},'JlokZ':function(_0xf4e6f1,_0x387f36){return _0xf4e6f1>=_0x387f36;},'lTDUS':function(_0x3463d6,_0x4cb461){return _0x3463d6<_0x4cb461;}};if(typeof $request!==_0x765fa8[_0xa087('‫117','m5kO')]){}else{if(_0x765fa8['idfju'](_0xa087('‮118','l6b2'),_0x765fa8[_0xa087('‮119','M0*h')])){if(!(await _0x765fa8[_0xa087('‮11a','[%%K')](checkEnv)))return;let _0x16b0de=[];let _0x532492=userList['filter'](_0x38d360=>_0x38d360[_0xa087('‫11b','phOV')]);$[_0xa087('‮102','j%xm')](_0xa087('‫11c','bQ8O'));_0x16b0de=[];for(let _0x2eee64 of _0x532492){_0x16b0de[_0xa087('‮11d','o7KU')](_0x2eee64['km']());}await Promise[_0xa087('‮11e','dq[F')](_0x16b0de);_0x532492=_0x532492[_0xa087('‮11f','&epw')](_0x862465=>_0x862465['valid']);if(_0x765fa8['mGImY'](_0x532492[_0xa087('‫120','UGao')],0x0)){if(_0x765fa8['EAzko'](_0x765fa8[_0xa087('‮121','Aj24')],'SpIsp')){console[_0xa087('‫122','c4H9')](_0x765fa8[_0xa087('‮123','2gT&')]);return;}else{$['logAndNotify'](_0xa087('‮124','NEGL'));_0x16b0de=[];for(let _0x1e04ad of _0x532492[_0xa087('‮125','1hb0')](_0x8be527=>_0x8be527[_0xa087('‮126','RaZT')])){if(_0x765fa8['HyZPJ'](_0x765fa8['KdaMg'],_0x765fa8['KdaMg'])){_0x16b0de[_0xa087('‮127','XZEM')](_0x1e04ad['initializeUserInfo']());}else{$['logAndNotify']('账号['+this['name']+']喂糖果:\x20'+result['msg']);}}await Promise[_0xa087('‮128','dK22')](_0x16b0de);if(_0x765fa8[_0xa087('‮129','@dq*')](_0x532492[_0xa087('‫12a','RaZT')],0x0)){$[_0xa087('‫12b','JuBt')]('\x0a--------------\x20双签、喂养、浏览\x20--------------');_0x16b0de=[];for(let _0x1378b7 of _0x532492['filter'](_0x18fd66=>_0x18fd66[_0xa087('‮12c','S3!J')])){var _0x4bdcce=_0xa087('‮12d','c4H9')['split']('|'),_0x1ee93f=0x0;while(!![]){switch(_0x4bdcce[_0x1ee93f++]){case'0':_0x16b0de['push'](_0x1378b7[_0xa087('‫12e','yP&C')]());continue;case'1':await $['wait'](0xbb8);continue;case'2':if(_0x765fa8['JlokZ'](h,0x6)&&_0x765fa8[_0xa087('‫12f','RaZT')](h,0x8)){_0x16b0de[_0xa087('‫130',')]cq')](_0x1378b7[_0xa087('‫131','c4H9')]());await $[_0xa087('‫88','%^bi')](0xbb8);_0x16b0de['push'](_0x1378b7['submitSign']());}continue;case'3':h=local_hours();continue;case'4':_0x16b0de[_0xa087('‫132','Aj24')](_0x1378b7[_0xa087('‮133','yP&C')]());continue;case'5':await $[_0xa087('‮134','M0*h')](0xbb8);continue;case'6':_0x16b0de['push'](_0x1378b7['investCandy']());continue;case'7':await $['wait'](0xbb8);continue;}break;}}await Promise['all'](_0x16b0de);}}}await $[_0xa087('‮135','@dq*')]();}else{$[_0xa087('‫136','o7KU')]('账号['+this['name']+']'+result[_0xa087('‮51','SQ$e')]);this[_0xa087('‮137','bQ8O')]=![];this[_0xa087('‮138','o7KU')]=![];}}})()[_0xa087('‫139','UGao')](_0x1b04de=>console[_0xa087('‮13a','yio0')](_0x1b04de))[_0xa087('‮13b','hs[g')](()=>$['done']());async function checkEnv(){var _0x32a6ea={'BLXsi':function(_0x59c6b1,_0x4a114c){return _0x59c6b1>_0x4a114c;},'ShVZe':function(_0x5921e2,_0x37aa63){return _0x5921e2!==_0x37aa63;},'krlpX':_0xa087('‮13c','M0*h'),'IHCER':_0xa087('‫13d','t8qX')};if(userCookie){let _0x33367f=envSplitor[0x0];for(let _0x4277ce of envSplitor){if(_0x32a6ea[_0xa087('‫13e','AL7M')](userCookie[_0xa087('‫13f','JuBt')](_0x4277ce),-0x1)){if(_0x32a6ea[_0xa087('‮140','Z65r')](_0xa087('‮141',')]cq'),_0x32a6ea['krlpX'])){console[_0xa087('‮142','%^bi')](method+'请求失败');console['log'](JSON['stringify'](err));}else{_0x33367f=_0x4277ce;break;}}}for(let _0x158935 of userCookie[_0xa087('‮143','JuBt')](_0x33367f)){if(_0x158935)userList['push'](new UserInfo(_0x158935));}userCount=userList[_0xa087('‮144','dq[F')];}else{console['log'](_0x32a6ea['IHCER']);return;}console[_0xa087('‮142','%^bi')]('共找到'+userCount+'个账号');return!![];}function populateUrlObject(_0x598c70,_0x3d59aa,_0x77d74d,_0x3ec253=''){var _0x244795={'PqQNQ':_0xa087('‫145',']TgT'),'qjSkj':function(_0x26ad65,_0x4882d0){return _0x26ad65!==_0x4882d0;},'nlMsh':_0xa087('‮146','2qny'),'cfpby':'EjhLQ','OLWoW':_0xa087('‫147','v!MY'),'pyOgk':'application/x-www-form-urlencoded;charset=UTF-8','WMnyc':_0xa087('‫148','RaZT')};let _0x912b44=_0x598c70['replace']('//','/')['split']('/')[0x1];let _0x4ebe44={'url':_0x598c70,'headers':{'Host':_0x912b44,'Content-Length':_0x77d74d,'Authorization':_0x3d59aa,'User-Agent':defaultUA,'Content-Type':_0x244795[_0xa087('‫149','NBza')]},'timeout':0x1388};if(_0x3ec253){if(_0x244795[_0xa087('‫14a','(rNg')](_0x244795[_0xa087('‫14b','AL7M')],_0x244795[_0xa087('‫14c','SQ$e')])){_0x4ebe44[_0xa087('‮14d','G(Uy')]=_0x3ec253;_0x4ebe44[_0xa087('‮14e','phOV')][_0x244795['OLWoW']]=_0x244795['pyOgk'];_0x4ebe44[_0xa087('‮14f','@dq*')][_0x244795[_0xa087('‫150','t8qX')]]=_0x4ebe44[_0xa087('‫151','1hb0')]?_0x4ebe44[_0xa087('‫152','phOV')]['length']:0x0;}else{taskall[_0xa087('‮153','kmGq')](user['km']());}}return _0x4ebe44;}async function httpRequest(_0x492cdd,_0x5e9c34){var _0x324c27={'TWvFw':_0xa087('‮154','yP&C'),'xewgY':_0xa087('‮155','JlSj'),'PlzcF':function(_0x19eedb,_0x2521bf){return _0x19eedb===_0x2521bf;},'Wrpuv':function(_0xdcb9b5,_0x23012b){return _0xdcb9b5==_0x23012b;},'MngsN':'object','aJutq':function(_0x3eb201,_0x77adde){return _0x3eb201!==_0x77adde;},'BSBgQ':_0xa087('‫156','S3!J'),'ZAzju':function(_0x2d9608){return _0x2d9608();}};httpResult=null,httpReq=null,httpResp=null;return new Promise(_0x10bc3a=>{var _0x35bcfc={'EQRzt':_0x324c27['TWvFw'],'bzKBw':_0x324c27['xewgY'],'jztIo':_0xa087('‫157','G)v5'),'QsRay':function(_0x3dc7ce,_0x405837){return _0x324c27[_0xa087('‫158','tA(D')](_0x3dc7ce,_0x405837);},'xJAMx':function(_0x3e4c25,_0x51ce1c){return _0x324c27[_0xa087('‫159','BqdJ')](_0x3e4c25,_0x51ce1c);},'nZkYi':_0x324c27[_0xa087('‫15a','GhgD')],'xwMdO':function(_0x1aa613,_0x56178a){return _0x324c27[_0xa087('‮15b','w2H]')](_0x1aa613,_0x56178a);},'UbQvH':_0x324c27[_0xa087('‫15c','v!MY')],'aiZno':function(_0x1169c5){return _0x324c27[_0xa087('‫15d','JuBt')](_0x1169c5);}};$[_0xa087('‮15e','i!Kc')](_0x492cdd,_0x5e9c34,async(_0x35c008,_0x1306d2,_0x5ef1a3)=>{try{if(_0x35bcfc[_0xa087('‮15f','hs[g')]!==_0x35bcfc[_0xa087('‮160','w2H]')]){httpReq=_0x1306d2;httpResp=_0x5ef1a3;if(_0x35c008){if(_0x35bcfc[_0xa087('‮161','dK22')](_0xa087('‮162','@dq*'),_0xa087('‫163','NBza'))){let _0x2c6db2=_0x5e9c34['replace']('//','/')[_0xa087('‫164','1hb0')]('/')[0x1];let _0x1fa352={'url':_0x5e9c34,'headers':{'Host':_0x2c6db2,'Content-Length':Content,'Authorization':ck,'User-Agent':defaultUA,'Content-Type':'application/x-www-form-urlencoded'},'timeout':0x1388};if(body){_0x1fa352[_0xa087('‫165','NBza')]=body;_0x1fa352[_0xa087('‮166','opbn')][_0x35bcfc['EQRzt']]=_0xa087('‮167','@dq*');_0x1fa352[_0xa087('‮168','G(Uy')]['Content-Length']=_0x1fa352[_0xa087('‫169','l6b2')]?_0x1fa352['body'][_0xa087('‮16a','tA(D')]:0x0;}return _0x1fa352;}else{console['log'](_0x492cdd+_0xa087('‮16b','M0*h'));console[_0xa087('‫16c','2qny')](JSON[_0xa087('‮16d','RaZT')](_0x35c008));}}else{if(_0x5ef1a3['body']){if(_0x35bcfc['xJAMx'](typeof _0x5ef1a3[_0xa087('‮16e',']TgT')],_0x35bcfc['nZkYi'])){httpResult=_0x5ef1a3[_0xa087('‮16f','t8qX')];}else{try{httpResult=JSON[_0xa087('‮170',')]cq')](_0x5ef1a3[_0xa087('‮171','HfUS')]);}catch(_0x4bd01c){if(_0x35bcfc['xwMdO']('udqor',_0x35bcfc['UbQvH'])){this[_0xa087('‮c9','BqdJ')]=$[_0xa087('‮172','j%xm')](str);this[_0xa087('‮173','S3!J')]=!![];}else{httpResult=_0x5ef1a3[_0xa087('‮14d','G(Uy')];}}}}}}else{$[_0xa087('‫174','XZEM')](_0xa087('‮175','t8qX')+this[_0xa087('‫cd','Z65r')]+']'+result[_0xa087('‫176','0JZA')]);}}catch(_0x5001a6){console[_0xa087('‮177','UGao')](_0x5001a6);}finally{_0x35bcfc[_0xa087('‫178','o7KU')](_0x10bc3a);}});});};_0xodr='jsjiami.com.v6';
////////////////////////////////////////////////////////////////////
function local_hours() {
    let myDate = new Date();
    h = myDate.getHours();
    return h;
}
function timestampToTime(timestamp) {
    var date = new Date(timestamp * 1000);
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    var D = (date.getDate() < 10 ? '0'+(date.getDate()) : date.getDate()) + ' ';
    var h = (date.getHours() < 10 ? '0'+(date.getHours()) : date.getHours()) + ':';
    var m = (date.getMinutes() < 10 ? '0'+(date.getMinutes()) : date.getMinutes()) + ':';
    var s = (date.getSeconds() < 10 ? '0'+(date.getSeconds()) : date.getSeconds());
    return Y+M+D;
}

function getNowFormatDate() {
        var date = new Date();
        var separator = "-";
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var currentdate = year + separator + month + separator + strDate;
        return currentdate;
    }
function Env(name,env) {
    "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
    return new class {
        constructor(name,env) {
            this.name = name
            this.notifyStr = ''
            this.startTime = (new Date).getTime()
            Object.assign(this,env)
            console.log(`${this.name} 开始运行：\n`)
        }
        isNode() {
            return "undefined" != typeof module && !!module.exports
        }
        isQuanX() {
            return "undefined" != typeof $task
        }
        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }
        isLoon() {
            return "undefined" != typeof $loon
        }
        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const[, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
                r = s ? this.getval(s) : "";
                if (r)
                    try {
                        const t = JSON.parse(r);
                        e = t ? this.lodash_get(t, i, "") : e
                    } catch (t) {
                        e = ""
                    }
            }
            return e
        }
        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const[, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
                o = this.getval(i),
                h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t),
                    s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t),
                    s = this.setval(JSON.stringify(o), i)
                }
            }
            else {
                s = this.setval(t, e);
            }
            return s
        }
        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }
        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }
        send(m, t, e = (() => {})) {
            if(m != 'get' && m != 'post' && m != 'put' && m != 'delete') {
                console.log(`无效的http方法：${m}`);
                return;
            }
            if(m == 'get' && t.headers) {
                delete t.headers["Content-Type"];
                delete t.headers["Content-Length"];
            } else if(t.body && t.headers) {
                if(!t.headers["Content-Type"]) t.headers["Content-Type"] = "application/x-www-form-urlencoded";
            }
            if(this.isSurge() || this.isLoon()) {
                if(this.isSurge() && this.isNeedRewrite) {
                    t.headers = t.headers || {};
                    Object.assign(t.headers, {"X-Surge-Skip-Scripting": !1});
                }
                let conf = {
                    method: m,
                    url: t.url,
                    headers: t.headers,
                    timeout: t.timeout,
                    data: t.body
                };
                if(m == 'get') delete conf.data
                $axios(conf).then(t => {
                    const {
                        status: i,
                        request: q,
                        headers: r,
                        data: o
                    } = t;
                    e(null, q, {
                        statusCode: i,
                        headers: r,
                        body: o
                    });
                }).catch(err => console.log(err))
            } else if (this.isQuanX()) {
                t.method = m.toUpperCase(), this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                        hints: !1
                    })),
                $task.fetch(t).then(t => {
                    const {
                        statusCode: i,
                        request: q,
                        headers: r,
                        body: o
                    } = t;
                    e(null, q, {
                        statusCode: i,
                        headers: r,
                        body: o
                    })
                }, t => e(t))
            } else if (this.isNode()) {
                this.got = this.got ? this.got : require("got");
                const {
                    url: s,
                    ...i
                } = t;
                this.instance = this.got.extend({
                    followRedirect: false
                });
                this.instance[m](s, i).then(t => {
                    const {
                        statusCode: i,
                        request: q,
                        headers: r,
                        body: o
                    } = t;
                    e(null, q, {
                        statusCode: i,
                        headers: r,
                        body: o
                    })
                }, t => {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i && i.body)
                })
            }
        }
        time(t) {
            let e = {
                "M+": (new Date).getMonth() + 1,
                "d+": (new Date).getDate(),
                "h+": (new Date).getHours(),
                "m+": (new Date).getMinutes(),
                "s+": (new Date).getSeconds(),
                "q+": Math.floor(((new Date).getMonth() + 3) / 3),
                S: (new Date).getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let s in e)
                new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)));
            return t
        }
        async showmsg() {
            if(!this.notifyStr) return;
            let notifyBody = this.name + " 运行通知\n\n" + this.notifyStr
            if($.isNode()){
                var notify = require('./sendNotify');
                console.log('\n============== 推送 ==============')
                await notify.sendNotify(this.name, notifyBody);
            } else {
                this.msg(notifyBody);
            }
        }
        logAndNotify(str) {
            console.log(str)
            this.notifyStr += str
            this.notifyStr += '\n'
        }
        msg(e = t, s = "", i = "", r) {
            const o = t => {
                if (!t)
                    return t;
                if ("string" == typeof t)
                    return this.isLoon() ? t : this.isQuanX() ? {
                        "open-url": t
                    }
                 : this.isSurge() ? {
                    url: t
                }
                 : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"],
                        s = t.mediaUrl || t["media-url"];
                        return {
                            openUrl: e,
                            mediaUrl: s
                        }
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl,
                        s = t["media-url"] || t.mediaUrl;
                        return {
                            "open-url": e,
                            "media-url": s
                        }
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {
                            url: e
                        }
                    }
                }
            };
            this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
            let h = ["", "============== 系统通知 =============="];
            h.push(e),
            s && h.push(s),
            i && h.push(i),
            console.log(h.join("\n"))
        }
        getMin(a,b){
            return ((a<b) ? a : b)
        }
        getMax(a,b){
            return ((a<b) ? b : a)
        }
        padStr(num,length,padding='0') {
            let numStr = String(num)
            let numPad = (length>numStr.length) ? (length-numStr.length) : 0
            let retStr = ''
            for(let i=0; i<numPad; i++) {
                retStr += padding
            }
            retStr += numStr
            return retStr;
        }
        json2str(obj,c,encodeUrl=false) {
            let ret = []
            for(let keys of Object.keys(obj).sort()) {
                let v = obj[keys]
                if(v && encodeUrl) v = encodeURIComponent(v)
                ret.push(keys+'='+v)
            }
            return ret.join(c);
        }
        str2json(str,decodeUrl=false) {
            let ret = {}
            for(let item of str.split('&')) {
                if(!item) continue;
                let idx = item.indexOf('=')
                if(idx == -1) continue;
                let k = item.substr(0,idx)
                let v = item.substr(idx+1)
                if(decodeUrl) v = decodeURIComponent(v)
                ret[k] = v
            }
            return ret;
        }
        randomString(len,charset='abcdef0123456789') {
            let str = '';
            for (let i = 0; i < len; i++) {
                str += charset.charAt(Math.floor(Math.random()*charset.length));
            }
            return str;
        }
        randomList(a) {
            let idx = Math.floor(Math.random()*a.length)
            return a[idx]
        }
        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }
        done(t = {}) {
            const e = (new Date).getTime(),
            s = (e - this.startTime) / 1e3;
            console.log(`\n${this.name} 运行结束，共运行了 ${s} 秒！`)
            if(this.isSurge() || this.isQuanX() || this.isLoon()) $done(t)
        }
    }(name,env)
}