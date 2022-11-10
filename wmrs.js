/*
完美人生App: 一诺庄园

变量：捉包https://hms.cignacmb.com域名headars里的authorization 多账号换行隔开
格式：export ynzy="authorization=Bearer_xxxxxx"  

CGkey: 脚本卡密   电报机器人 @CGKEYBot 处获取 (所有脚本通用)
格式：export CGkey="xxxxxxxx"

*/

const $ = new Env("一诺庄园");
let envSplitor = ['\n']  //多账号隔开方式
let defaultUA = 'Mozilla/5.0 (Linux; Android 10; ProjectTitan Build/NZH54D; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/74.0.3729.186 Mobile Safari/537.36 ;hmsapp/5.5.36;HMS_APP_SESSIONID/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzaWduRGF0YSI6IkQ2QkY2NTRFNDA5N0UwMkMyQzJGRTVCQzFDNjg0RTg2OTI5MjQzIiwibG9naW5UaW1lIjoiMTY2ODAwOTAxMzY5NyIsIm5iZiI6MTY2ODAwOTAxMywiZXhwdCI6MTY2ODA5NTQxMzY5NywiaXNzIjoiSldUIiwiZnJvbSI6IkFQUCIsImV4cCI6MTY3MzE5MzAxMywidXNlcklkIjoiNjczMzQ5NCIsImlhdCI6MTY2ODAwOTAxM30.jFay4AUDuTq0ZQd2bzgGFw_WUZOz-An3UQc16aItE00;' //换成自己的UA



var _0xod1='jsjiami.com.v6',_0xod1_=['‮_0xod1'],_0x1e21=[_0xod1,'W8O5w4R+w5PCgVJ8WcK9WsKm','6LWM5Y2mw7M=','w7/Chn7DjA==','w7hZwpg=','YSo0wpXCgxNT','Yg7DlMOSBlM=','wrMKXcOHWQ==','w77Du8Ohw4hE','W8KOwq0=','6K6d5rOT5aaZ6LWd','PsK5NsKOw6F2w50ZSA==','R0TCug==','acKUTA==','RWzCv8KJwoTCr8KxVCHCq8KywqIHcsK7w5PCo8KLQcOFI8KGwrHCpmzDusKJwpwcbGLDnMOcwqQ/w7FLwpxXwrMcw6hAwrc5Z8Oq','X2bDm8KOw5vCvcK7w4R6LcKiJ8O1Gw==','P8KoNMKLw65yw5E=','QUB7AjY=','YCQ+wr4=','w5oteFnDhQ==','bQ3Ch3F+','Z8KUT8O3','SEZlICw=','XnzCglN0','UU5LbTbCmA==','w5kxwq90Bw==','TijCikFK','MMOuCVo1','EsKudsOQw4w=','w5DCoj/DmiI=','wobCoHMowpA=','VCDDs8OFPw==','Vn5pbh0=','M8KNGltq','esOJw5jCghw=','w4Mdwp5bMw==','wo/DhsO4wpfChQ==','wqfClm4Bwoc=','wrwDfg==','XnbCt35y','w7vCn07CtxI=','HsOhVMO0wqg=','wrd0wqQ=','6K+y5rK55aSa6Lar','O8ObBA0LdcK5w6rDsQ==','F+itoeaho+afmuWPnOWso+aIiuWcu3nCk+achuWat+S4lcKPw7tFwo3CkRrDpMOtw6PCjmHlpZvojJ3lj7zljZHlrZI=','w5HCuxjDgiQ=','cD4RwqDCng==','w6J5TsOmwrA=','wpBLJylI','dSnDrnw0','w4HCrknDj18=','V8OtwrfCrMO3','w5/Cpn/Dm2k=','esK2wqhiwpU=','S3LDlDI4G8K/','GsOww5oLFQ==','wqh7CglR','bAYVwq3CjQ==','6LWD5Y2/Gw==','BcKCAsKv','w4jojp3lvag=','wqIJasOdVMOuwrzDgw==','V3XCqMKLwr7Cr8K/Ui0=','b8Ozw40bVQ==','wqcSCSzCqg==','aGJCw7XDpg==','XENFcQ==','wrdBHcO6w6EKD8OYGjUpwqvDmMOtw4MWVDY=','JcO5wo8Ww6nDnw==','YMKVXQ==','w6jCiWnDkA==','worDp8OGworCiwnCqQ==','woNPNRk=','VsKgCA==','Z1vCpMKAwpQ=','w5RGTMOFwp1Nw7o=','DsKKL8KCw7Y=','w6FCwprCmQ==','w4I+wppOHw==','dWfDkcKfw4Y=','I8KsKcKC','V0JFbS0=','XStnNsO2','w44ld2fDhU9a','w74RdnvDsg==','wohOwqzDmkk=','BsO+w485Hi/ChMOjfFUIJg==','dcKaWcOvw7c=','PsK5NsOVw6Viw5sR','UVtBCi7Dtgg=','wpHCr0kiwo9WDg==','wpZOKCFXwq03wrVVTh7Cqw==','bMKVT8Orw6I=','w7pww4rmoYflv5fplKHorpE=','CMKLCsKpwrTCrFo=','asOtwrfCssOM','OsKLV8OBw5k=','NMKmTMORw5BkAgPCl8OaQcObbcK+','wqTCvcK4RsO+','TF7CrFFF','w5bDucO7w4PDuw==','JMOAESULdsKew6PDvMOZZRw=','6LaL5Y6zQg==','U+aWgui3jeaLpuWMk+aIq+WJsw==','Q1/CqcOpNSLDkSMucsOfMBkCwqIiw4x6w4U/w6jCjAw/wrEULMK9w5JBwoU5dWNLw4otaDrDp8KQw4UlWMOewo3CsFF5QhU8w4bDhcKRw5hgeG5uNALDr8OnL8KzCMKk','wqUiDSzCrQ==','eltjAMKMGsKcQGc1w7fDksKb','w7JAUcOZwrE=','XcKIwqFWwrE=','YsKeXw==','QUR2HzfDrC/DlD1O','6LSf5Y+gw7w=','ewnDsMODFg==','esOcw5nCsCrCosKmwocMwqXCv3g=','6Lao5YyPRw==','BMOww4Ud','a8OEwqY=','egrDicOePFrCgWM=','w5bCkCfDqwMXCcOT','w4tcw6Y6wrZcMMO4wpIsbMKx','RA/CkHc=','WOastOaXjg==','bGJDw63DjcKCw7DDiA==','wolowpTDpmg=','AMKxMG5d','woPCikYzwrI=','w44vT1TDjEda','w5nDqsO6w4B4wp83','w6Y+wr56LMK+w5LDjcKlwpE=','PMOlwrIN','eSJ7BcO7','w496wojCrj0=','w5LCkCbDoSA=','f1lVYDrCnsKXXcKSwpvDs8KqBg==','XMK6KA5M','wotBJcOow7I=','wp9yASFy','cMKeGMOXfcOMwqTCnw==','biQ9wobCiBZ5fzRCY3A=','w4zCkDnDpQ==','a2pXw6jDkMKAw7LDn0o=','b3hlJ8KN','YMKOPcOwbg==','IMOlwqY4w6PDnsOjKMKfXMKGw5U=','6LSo5Y6cw6E=','aMOWwqzCjg==','bmzDhsKKw7rCtsK8woo=','UcKhGiE=','fmbDkcKD','amZDw6nDr8KVw7g=','worDp8OGwrvCmRjCumUzJcKRbibDjTc=','wojDuMO7wr/CnA==','GcKRBHdl','Qz5/L8OhQWnClhPCmMKYwqzDoRLDmcKuw7pZw7kwwp/CrCF5w5NlCmnCmMK1w5TCrCMYwpljw6bDrMOCO8K5EHLDhTnDmFtgw7bDvcK9e1tqBsKML2s2w6PDiHdvRGU=','eMK5DhxU','w71Pwp7Ckx7DjTk=','RsKURcO6w78YPsK1ccO8KWpFwqw=','RsKnFAlY','AsOtNA==','P8OcGHo+','RMOiw4JLw4jCll98ScKx','w7XChmfDiA==','woHCtHogwopeBsKUw4pWRA==','O8OrwqgN','w5DClDfDpSQAAcO1bMOOwqFVeg==','6LSR5Y2hw7g=','a8KaRsOr','GcOFNw0c','w4klbVQ=','wptNIzRYwroS','w4BXWcOVwolK','wpnDo8OBwoXCqRLCrFQ=','RXDCo8KxwozCv8K7','ayLDtV4GEgtV','SiZnC8OzCC0=','wrFEVjI=','wrNVWyfCs8O5QcK2w7ocw5vDknXCtsKpw5E=','fMOaw4wz','VsKNwqZEwrjDuEE=','QUR2HzfDrA==','T0rCqcO4','w5JPVMO1wp1Kw7A=','wql+wqDDu2nDqVXCtg==','XErCtMOt','w4NSw7Ua','Z8Obwq3Cv8OawroO','ayLDtV4LHAJV','RgHCmlNWworCs8KFw4zCs8O+Ig==','6Leg5Y+SZA==','wqhEUiM=','E+S4teWLn+W2quWut+aInQ==','wq1+NsOnw6w=','cijDqVYk','B8OJw6cxPw==','dMOSwrLChMOXwr8A','CcKMC8Kz','wrlOIRRcwqcNw7d1XgjCtw==','wrQzDyHCqUd5dsOACS0qwpPDszckw4Mrw6QfLD8QwpzCpsKfeMOOw6YMwqFHwoHCjXkjd8OwPcORaCwXwpLDjiDDsg==','wqlCwoLDuF0=','ZhvCiVdN','QFVkBC7DqQk=','cHdEw7bDsMOZwrLCgkfDnlDDsBfCh8Kdw7ZMwrguwqXCnMOZfcKHYcOUwq1iw53Cp3nChnwAwr9Pw4rCsMKcw69IwrvClxXCn1QQwqEwDSXDlMOBwpHDvMKHw7LDhkM6wpzCgCpQCMODw5Uiw6cR','wrJETC3ChMOzccKywrQ=','w4NCSsOAwpE=','WU9/w7XDoQ==','PcKiN8KT','6LSg5Y2Awpo=','wrpswqLDpn/DjnPCvA5lw6wD','fMOUw4F7w5w=','I8Onwoccw6Y=','VVN1Gw0=','ZMOYwqXCkg==','wq5AXiLCosOuZg==','Ux/CuFZt','CsK1EcKgw5c=','UXLDhjkxH8Kp','cV95HyfDsRjClhVOwqHCrjfDog==','wo/DrcOWwpc=','dGxXw4fDrcKHw5PDglvDmkXCpw==','6Le95Y+swpg=','cSLDq1A=','wrDmt43opbrkuJXliYvlpYzot60R5Y696IKr5q6e5LuZ5Yuu5bWM57qM5a605oin5Lmz','w4FGS8OOwpBPw74=','X2lQIyE=','w7Rww4MUwrs=','w4AdXn3Dgw==','aW1tHMKv','BcKsQcOKw4duP0rDpg==','w5nDqsOqw4Bmwo0bwoM=','UT5JKMO3','R8KOwrlk','SFp2HMKWG8K2VWIk','W8KOwq1RwrfDr2TCoMONw6fDl8KI','6Le25Y6bQg==','W+mgseWMl8ORwps=','UXPCglk=','w4ktakXDj11fwosZwploSk/DpMKpRMOZw4I=','wp/Dp8OBwoHChgvCrQ==','JcOkwqgNw6TDm8OBLsKRUMK1w59SwoUIJGZV','wrZKTDI=','XWbCgkhjKsOSwrvDqsKyHMKiw63Ck8Krw6hEworChSjDu8KQYDfDgjQ6w5dkKRJtT8KMw7HDui4Iw6nDqMOjwoF2YcOiwpHCqMKHwo9HwpFyw5JCJcOjwoJGeEwGVsK0w4VUw7HCjj0=','ZsOSw4zCkCk=','Qz4uwq/CiQBeaiFfbGZX','wot3McOfw4E=','ai47wqPCgwBE','VMOaw4xnw5E=','X3pKQhE=','wqMYeMOZZcO8wovDjcKWGw==','RyVsHsO8HwjDlg/CnMKNw7s=','6LSk5YyMMA==','w6DCmXHCgQ==','w4jnrILnubs=','wp5AOwE=','w53llbPlhpPov7bluL4=','wrpOAMOv','wrXnj7vmn5Xns4Hmn5k=','wpnCkMKcTA==','AsO6L2olW8ONahTCk1TDmcK5woDDh8O4w7pJwqg=','PsOOGg0B','bQrDlMOnF1rCiA==','Xl9wKizDuyLDlC1CwqnCsA==','bCo3wqI=','SW/CqA==','QiR9OsOhDwXDmBXCkcKS','WcKlwpJ9wrQ=','wq7DrcOcwprCjxPCvBweM8KURTvDlg==','wqt0wrDDoA==','w7gtwphbBg==','wrdBE8O3w6E=','UyE/wp7Chw==','fcOiw69dw60=','w61Hw40Zwog=','wqANa8OMfQ==','XjbDsl0qDwZKw63Di8KXw5LDpA==','JcKoJcKDw6pjw4c=','IcKUDnxD','XcOyw5lUw6c=','U8K4BMOQdQ==','UWTCk8O4NA==','G8KmRcOkw5tuOEHCr8OWScOF','W+WUteewl+adt8KBw6k=','6LSU5Y+HTA==','X+auhOaWv+S8muWOs+esjOWIh+W3ouWvjOaIuw==','AsKTDMKpwrQ=','w4MldFA=','w4A3fg==','wobCg34Xwqk=','UDDDiUYQ','fA7DicOaHk3CiQ==','dMOUw58TXgkew4Exw63CkcOc','w4XDrsOkw4o=','Quesiue4oQ==','w7Eqwqh2','w5RRV8OWwohRw5fCmVQ1HA==','G+WWrOWFrOi+s+W5hQ==','GcKGDMKvwrbCs1HDm8OOTsKfw47DjAwpwpo=','DsOww5wZ','f8OJw5clRAUcw4szw6HCm8OmCMOgbsKuFCtk','YMOSw5LCmCA=','YcKaBcO1W8OCwqQ=','w57DocOtw4pywoA8woLCrw==','OcOjU3UWIMOXEXYpwpLCtWDCtm/Dtui2quWNp+ajiOaegiXDtxlrw7tnwrIGdixdw6BYKV0=','wrRKwrHDjnQ=','NAEMJXjDgcOTCsOew4LCt8OoRcK1YsOa5Y6256yI44CY5ZaK5YSz44OJ5rS56Ke4GBnDqRlIQglrBcKbNsOMGjrDtQ==','w6DCjm7CgBA=','ccKOecOqw5w=','w40xwr5TPA==','w4Faw60Pwr1K','wrQTDh3Chw==','K8OwcMOCwrTCnw==','wqliOsOKw6E=','W2TChFx+','wrXClMKOe8Or','aMOOw4s6','W15+HyvDvgDDkiNOwprCuibDuEfDosOAQQ==','6LaE5YyGDw==','w4zpoaHlj4XCkxw=','w7FDwozChxTDjCsnaMOIB8Odwq89w7o0w7HCqA==','6aKg57C35p2W8JuOtQ==','FsKlTg==','emDDmcKOw5vCoQ==','XA/CkXtc','XRTCs31V','w4Ehd1LDlEY=','woDCoWwswo9JDw==','wpHCnsKPbMO2EcOLw4PDqGomSw==','dsOHwqTCvsOi','WEVNfDDCng==','wr1OGsOcw60KBw==','R8Ojw5BX','T8OVw4ABSA==','dcKaAsOT','w5TDhMO5w6o=','AsKKC3Nlw4TCtcOMw4J4','R33Cu8KGwoU=','wpZOKA==','IcO8cMOEwqzCm3E=','wqJKUSM=','wpEZbcOFf8O9wqHDmMKTCmZ0YQ==','w7jCmwPDsjk=','wrVHKhJg','W8K6CigBIsOVVzYqw5LDvSjDryHCusOjw6ZtFSvCt1hpwrc6w7YFK2kAw7IUZwQHFm3Dk8KTbSbDgBbDlMKxGsO0FRtCwp7DlcK5PxRdwo7CrMO8','AmnCusKMwonDsQ==','w77Cl2/CkA==','QgvCnHZdwpzCjg==','WUF8Kiw=','Yg1FDMOA','CMKOM21p','BsOnJHg=','XR1RPMOd','w6LCl3/DgEg=','U33CpsKR','5Y235a216aiy6Kyw5omU5YmZw4jmn6HmlLDmn5PohKo=','wo5IIgUI','VMO3w41tw5jChHg=','Q8O/w45a','wpDCgsKP','wrQNOQnChg==','A8KgT8OA','SUtRJcKk','dcOcw5rClA==','asO5w6w0WA==','w6XCqB3DpyE=','acKUTMOPw7QSBMO3ScOwIXQ=','WGHCkQ==','Reitv+aigOafuOWMsOWvteaKl+WcpzbCseacguWbsuS5osOOw6PDgsOzd8KAwpjDt8KGwpbDpeWlh+iNg+WMtuWNlOWunQ==','cyzDoXQrGSFfw7jDlsKYw4Q=','cjDDoQ==','w7DCvkPDrlc=','w7ZBwqnClhfDli4=','wrJAE8OPw6YPLcOeFDkawqE=','wrvDu8OVwovCvg==','EcO7W8OdwoM=','RGHChcO+BQ==','w7ZMwrvCnTI=','dgfDvEI/','VcKOwq5p','w7rCnVXDrm8=','cFHCrMK0wrk=','6LeL5Y21w6k=','SmfDizQg','w43Dg8Ozw5HDgw==','V3HCpUFk','wr8mQcOKUw==','jWuOswKjiamxVXOORePpi.com.v6=='];if(function(_0x13a97c,_0x5f4898,_0x451185){function _0x444501(_0x17ff80,_0x46a3e6,_0x300589,_0x15754d,_0x33fb32,_0x507bbc){_0x46a3e6=_0x46a3e6>>0x8,_0x33fb32='po';var _0x2f2085='shift',_0x1e4aa='push',_0x507bbc='‮';if(_0x46a3e6<_0x17ff80){while(--_0x17ff80){_0x15754d=_0x13a97c[_0x2f2085]();if(_0x46a3e6===_0x17ff80&&_0x507bbc==='‮'&&_0x507bbc['length']===0x1){_0x46a3e6=_0x15754d,_0x300589=_0x13a97c[_0x33fb32+'p']();}else if(_0x46a3e6&&_0x300589['replace'](/[WuOwKxVXOORePp=]/g,'')===_0x46a3e6){_0x13a97c[_0x1e4aa](_0x15754d);}}_0x13a97c[_0x1e4aa](_0x13a97c[_0x2f2085]());}return 0x111d65;};return _0x444501(++_0x5f4898,_0x451185)>>_0x5f4898^_0x451185;}(_0x1e21,0x1c4,0x1c400),_0x1e21){_0xod1_=_0x1e21['length']^0x1c4;};function _0x55d8(_0x53fb34,_0x389c6){_0x53fb34=~~'0x'['concat'](_0x53fb34['slice'](0x1));var _0x540423=_0x1e21[_0x53fb34];if(_0x55d8['OvctZU']===undefined){(function(){var _0x57b123=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x1d466e='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x57b123['atob']||(_0x57b123['atob']=function(_0x43fb6c){var _0x32b741=String(_0x43fb6c)['replace'](/=+$/,'');for(var _0x1c4646=0x0,_0x50cd27,_0x5250f6,_0x57a070=0x0,_0x255838='';_0x5250f6=_0x32b741['charAt'](_0x57a070++);~_0x5250f6&&(_0x50cd27=_0x1c4646%0x4?_0x50cd27*0x40+_0x5250f6:_0x5250f6,_0x1c4646++%0x4)?_0x255838+=String['fromCharCode'](0xff&_0x50cd27>>(-0x2*_0x1c4646&0x6)):0x0){_0x5250f6=_0x1d466e['indexOf'](_0x5250f6);}return _0x255838;});}());function _0x1b828a(_0x2a9ae2,_0x389c6){var _0x25fbda=[],_0x3b1a5f=0x0,_0x5706b2,_0x1e414c='',_0x46eef0='';_0x2a9ae2=atob(_0x2a9ae2);for(var _0x4fa637=0x0,_0x50223a=_0x2a9ae2['length'];_0x4fa637<_0x50223a;_0x4fa637++){_0x46eef0+='%'+('00'+_0x2a9ae2['charCodeAt'](_0x4fa637)['toString'](0x10))['slice'](-0x2);}_0x2a9ae2=decodeURIComponent(_0x46eef0);for(var _0x4f10a6=0x0;_0x4f10a6<0x100;_0x4f10a6++){_0x25fbda[_0x4f10a6]=_0x4f10a6;}for(_0x4f10a6=0x0;_0x4f10a6<0x100;_0x4f10a6++){_0x3b1a5f=(_0x3b1a5f+_0x25fbda[_0x4f10a6]+_0x389c6['charCodeAt'](_0x4f10a6%_0x389c6['length']))%0x100;_0x5706b2=_0x25fbda[_0x4f10a6];_0x25fbda[_0x4f10a6]=_0x25fbda[_0x3b1a5f];_0x25fbda[_0x3b1a5f]=_0x5706b2;}_0x4f10a6=0x0;_0x3b1a5f=0x0;for(var _0xdac84d=0x0;_0xdac84d<_0x2a9ae2['length'];_0xdac84d++){_0x4f10a6=(_0x4f10a6+0x1)%0x100;_0x3b1a5f=(_0x3b1a5f+_0x25fbda[_0x4f10a6])%0x100;_0x5706b2=_0x25fbda[_0x4f10a6];_0x25fbda[_0x4f10a6]=_0x25fbda[_0x3b1a5f];_0x25fbda[_0x3b1a5f]=_0x5706b2;_0x1e414c+=String['fromCharCode'](_0x2a9ae2['charCodeAt'](_0xdac84d)^_0x25fbda[(_0x25fbda[_0x4f10a6]+_0x25fbda[_0x3b1a5f])%0x100]);}return _0x1e414c;}_0x55d8['ZTzEvq']=_0x1b828a;_0x55d8['VnppXB']={};_0x55d8['OvctZU']=!![];}var _0x13d56f=_0x55d8['VnppXB'][_0x53fb34];if(_0x13d56f===undefined){if(_0x55d8['AFHaXq']===undefined){_0x55d8['AFHaXq']=!![];}_0x540423=_0x55d8['ZTzEvq'](_0x540423,_0x389c6);_0x55d8['VnppXB'][_0x53fb34]=_0x540423;}else{_0x540423=_0x13d56f;}return _0x540423;};let httpResult,httpReq,httpResp;let userCookie=($[_0x55d8('‫0','zJ@a')]()?process[_0x55d8('‫1','rIbV')][_0x55d8('‫2','y%Tw')]:$[_0x55d8('‫3','kxRH')](_0x55d8('‮4','a1fF')))||'';let userCGkey=($['isNode']()?process[_0x55d8('‮5','CzYN')][_0x55d8('‮6','Wezt')]:$[_0x55d8('‮7',')F*n')](_0x55d8('‫8','1k(f')))||'';let userList=[];let userIdx=0x0;let userCount=0x0;let num=0x0;let ts=getNowFormatDate();const {machineId,machineIdSync}=require('node-machine-id');machineId()[_0x55d8('‫9','Vr$o')](_0x269040=>{});let uuid=machineIdSync();class UserInfo{constructor(_0x16c2b0){var _0x156c1b={'SUoNR':_0x55d8('‮a','OSqp')};this[_0x55d8('‮b','81^V')]=++userIdx;this[_0x55d8('‮c','1k(f')]=this[_0x55d8('‮d','rZt2')];this[_0x55d8('‮e','5YDZ')]=![];this[_0x55d8('‮f','%L[^')]=![];try{if(_0x156c1b[_0x55d8('‮10','%L[^')]!==_0x156c1b[_0x55d8('‮11','^v#p')]){$[_0x55d8('‫12','2t16')](result['msg']+'\x20请勿多处使用or重装环境造成请联系作者解除');}else{this[_0x55d8('‮13','rIbV')]=$[_0x55d8('‮14','1k(f')](_0x16c2b0);this[_0x55d8('‫15','PhdC')]=!![];}}catch(_0x858e0d){this[_0x55d8('‫16','DjN9')]=![];$[_0x55d8('‫17','a1fF')]('账号['+this[_0x55d8('‮18','rIbV')]+_0x55d8('‫19','7#mM'));}}async[_0x55d8('‮1a','aGp2')](){var _0x15f9c2={'yLZiU':function(_0x282a7c,_0x359127){return _0x282a7c===_0x359127;},'rGVIZ':_0x55d8('‫1b','7Ff2'),'rHqAV':_0x55d8('‮1c','^*xg'),'AcixM':function(_0x3ee5b7,_0x50c090,_0x36c243,_0x2ac426){return _0x3ee5b7(_0x50c090,_0x36c243,_0x2ac426);},'IzSBZ':_0x55d8('‫1d','^*xg'),'jikFh':function(_0x56089c,_0x310c55,_0x3c8951){return _0x56089c(_0x310c55,_0x3c8951);},'fLaZF':function(_0x460190,_0xe75094){return _0x460190==_0xe75094;},'NcbXO':function(_0x315abf,_0x4d504c){return _0x315abf!==_0x4d504c;},'ubJvd':_0x55d8('‮1e','^KO!'),'RsWrs':function(_0x2dd501,_0x29bc70){return _0x2dd501!==_0x29bc70;},'qNYpQ':'oBqHf'};try{if(_0x15f9c2[_0x55d8('‮1f','Q%m@')](_0x15f9c2['rGVIZ'],_0x15f9c2[_0x55d8('‫20','9XpZ')])){$[_0x55d8('‮21','v*n]')](_0x55d8('‫22','%L[^')+this['name']+_0x55d8('‮23','g[(['));}else{let _0x30fff4=_0x55d8('‮24','Cz@$');let _0x5248b4='';let _0x553196=''+this[_0x55d8('‫25','ScfZ')][_0x55d8('‮26','hf1@')];let _0x409e17=_0x15f9c2[_0x55d8('‮27',')F*n')](populateUrlObject,_0x30fff4,_0x553196,_0x5248b4);delete _0x409e17['headers'][_0x15f9c2['IzSBZ']];await _0x15f9c2[_0x55d8('‮28','6RZk')](httpRequest,_0x55d8('‫29','rIbV'),_0x409e17);let _0x4ab149=httpResult;if(!_0x4ab149)return;if(_0x15f9c2['fLaZF'](_0x4ab149[_0x55d8('‮2a','PhdC')],0x0)){$['logAndNotify'](_0x55d8('‮2b','TQV*')+this['name']+']早起打卡成功');}else{if(_0x15f9c2['NcbXO']('PeSiD',_0x15f9c2[_0x55d8('‫2c','g[([')])){$[_0x55d8('‫2d','v3IP')](_0x55d8('‮2e','**ri')+this[_0x55d8('‫2f','2t16')]+']'+_0x4ab149[_0x55d8('‫30','7Ff2')]);}else{this[_0x55d8('‫31','g[([')]=_0x4ab149['data']['allTask'][''+num][_0x55d8('‫32','#jFm')];$[_0x55d8('‮33','7#mM')]('账号['+this[_0x55d8('‮34','pe4r')]+_0x55d8('‫35','rIbV')+this[_0x55d8('‮36','gTj5')]+'\x20任务已完成');num++;}}}}catch(_0x2fbaf4){}finally{if(_0x15f9c2[_0x55d8('‫37','^v#p')](_0x15f9c2[_0x55d8('‫38','TY*6')],_0x15f9c2[_0x55d8('‫39','DjN9')])){this['param']=$['str2json'](str);this[_0x55d8('‫3a','%L[^')]=!![];}else{return Promise[_0x55d8('‮3b','qYu(')](0x1);}}}async[_0x55d8('‫3c','OSqp')](){var _0xdb5bd2={'otVVw':function(_0x1412f5,_0x294729,_0xc645cd,_0x2f90fc,_0x505f4b){return _0x1412f5(_0x294729,_0xc645cd,_0x2f90fc,_0x505f4b);},'UnQfz':function(_0x10df45,_0x375a38,_0x324079){return _0x10df45(_0x375a38,_0x324079);},'eSNAK':_0x55d8('‮3d','zJ@a'),'pRkzz':function(_0x36a5e5,_0xc55969){return _0x36a5e5==_0xc55969;},'TVrOn':_0x55d8('‫3e','5YDZ'),'buVWP':_0x55d8('‫3f','Vr$o')};try{let _0x27b41f='https://member.cignacmb.com/shop/member/interface/submitSign';let _0x1738f1='param=eyJhY3Rpb24iOiJNQiJ9';let _0x51bdf1='26';let _0x119b47=''+this[_0x55d8('‫40','#jFm')][_0x55d8('‮41','rZt2')];let _0x92f048=_0xdb5bd2[_0x55d8('‮42','CzYN')](populateUrlObject,_0x27b41f,_0x119b47,_0x51bdf1,_0x1738f1);await _0xdb5bd2[_0x55d8('‫43',')E^M')](httpRequest,_0xdb5bd2[_0x55d8('‮44','a1fF')],_0x92f048);let _0x458f60=httpResult;if(!_0x458f60)return;if(_0xdb5bd2['pRkzz'](_0x458f60[_0x55d8('‫45','D9ox')],0x0)){$[_0x55d8('‮46','pYlK')]('账号['+this[_0x55d8('‫47','#jFm')]+']获得'+_0x458f60['respData'][_0x55d8('‫48','gTj5')]+'诺米');}else{if(_0xdb5bd2[_0x55d8('‮49','hf1@')]!==_0xdb5bd2[_0x55d8('‫4a','D9ox')]){$[_0x55d8('‮4b','zJ@a')](_0x55d8('‫4c','g[([')+this[_0x55d8('‮4d','7Ff2')]+']'+_0x458f60[_0x55d8('‫4e','81^V')]);}else{try{httpResult=JSON['parse'](resp[_0x55d8('‮4f','CzYN')]);}catch(_0x30c62e){httpResult=resp[_0x55d8('‮50','81^V')];}}}}catch(_0x48cdfc){}finally{return Promise[_0x55d8('‫51','gTj5')](0x1);}}async[_0x55d8('‫52','kxRH')](){var _0x8a09d2={'KwpDo':function(_0x248944,_0x74ece3,_0x4a82c9,_0x1db53f){return _0x248944(_0x74ece3,_0x4a82c9,_0x1db53f);},'uijQc':function(_0x4c2d05,_0x4729b4,_0x46ff9c){return _0x4c2d05(_0x4729b4,_0x46ff9c);},'ZTXgo':function(_0xd744a0,_0xb5dfa){return _0xd744a0==_0xb5dfa;},'QjAiy':function(_0x594a5d,_0x3c92ba){return _0x594a5d<_0x3c92ba;},'NIAGs':function(_0x464f34,_0x46ab7e){return _0x464f34==_0x46ab7e;},'vHYCD':function(_0x26fb7d,_0x474254){return _0x26fb7d==_0x474254;},'sQBid':function(_0x2aa294,_0x203fb7){return _0x2aa294!==_0x203fb7;},'mkoca':_0x55d8('‮53','kxRH'),'mXOIO':_0x55d8('‫54','TY*6')};try{let _0x57e321=_0x55d8('‫55','5YDZ');let _0x3251cb='';let _0x3bb16c=''+this['param'][_0x55d8('‮41','rZt2')];let _0x3af559=_0x8a09d2[_0x55d8('‫56','CzYN')](populateUrlObject,_0x57e321,_0x3bb16c,_0x3251cb);delete _0x3af559[_0x55d8('‮57','Vr$o')][_0x55d8('‮58','rIbV')];await _0x8a09d2[_0x55d8('‮59','CzYN')](httpRequest,_0x55d8('‫5a','ER2#'),_0x3af559);let _0x3c9a40=httpResult;if(!_0x3c9a40)return;if(_0x8a09d2[_0x55d8('‮5b','ER2#')](_0x3c9a40[_0x55d8('‫5c','u#Hm')],0x0)){if(_0x3c9a40[_0x55d8('‫5d','y%Tw')][_0x55d8('‫5e','DjN9')][0x0]['status']=0x0){await $[_0x55d8('‮5f','zJ@a')](0xbb8);await this[_0x55d8('‫60','#jFm')]();}else{$['logAndNotify'](_0x55d8('‮61','u#Hm')+this[_0x55d8('‫62','rIbV')]+']每日保单签到已完成');}for(let _0x10df1d=0x0;_0x8a09d2[_0x55d8('‫63','v*n]')](_0x10df1d,0x4);_0x10df1d++){if(_0x8a09d2['NIAGs'](_0x3c9a40[_0x55d8('‫64','%L[^')][_0x55d8('‫65','a1fF')][''+_0x10df1d][_0x55d8('‫66',')F*n')],-0x1)||0x1){this[_0x55d8('‫67','kxRH')]=_0x3c9a40['data'][_0x55d8('‮68','Wezt')][''+_0x10df1d][_0x55d8('‫69','(gjw')];this['awardContent']=_0x3c9a40['data'][_0x55d8('‫6a','5YDZ')][''+_0x10df1d]['awardContent'];this['recordId']=_0x3c9a40['data']['allTask'][''+_0x10df1d]['recordId'];await $[_0x55d8('‮6b','t3zL')](0x1388);await this[_0x55d8('‫6c','t3zL')]();if(_0x8a09d2['vHYCD'](_0x3c9a40[_0x55d8('‫6d','3Wbo')][_0x55d8('‮6e','6RZk')][''+_0x10df1d][_0x55d8('‮6f','PhdC')],0x0)){this['recordId']=_0x3c9a40[_0x55d8('‫70','Cz@$')][_0x55d8('‮71',')F*n')][''+_0x10df1d][_0x55d8('‮72','^v#p')];await $[_0x55d8('‮73','Cz@$')](0x1388);await this['receiveCandy']();}}else{this['taskName']=_0x3c9a40[_0x55d8('‮74','7#mM')][_0x55d8('‮75','7Ff2')][''+num][_0x55d8('‮76','(gjw')];$[_0x55d8('‮77','pe4r')](_0x55d8('‫78','t3zL')+this[_0x55d8('‫79','t3zL')]+']每日'+this['taskName']+_0x55d8('‫7a','CzYN'));num++;}}}}catch(_0x2165ca){}finally{if(_0x8a09d2[_0x55d8('‫7b',')E^M')](_0x8a09d2[_0x55d8('‫7c','(gjw')],_0x8a09d2[_0x55d8('‮7d','2t16')])){return Promise[_0x55d8('‮7e','7Ff2')](0x1);}else{httpResult=resp[_0x55d8('‫7f','aGp2')];}}}async['updateTaskStatus'](){var _0x3cb075={'yqEDU':_0x55d8('‮80','a1fF'),'GxUGX':_0x55d8('‮81','ScfZ'),'LutEu':function(_0x570761,_0x2a78e0){return _0x570761!==_0x2a78e0;},'vZHkR':'pUGCa','ALOsb':function(_0x26b95a,_0x11df71,_0xa9d18,_0x1eba75,_0x2c0281){return _0x26b95a(_0x11df71,_0xa9d18,_0x1eba75,_0x2c0281);},'KBbDa':function(_0x3513d1,_0xecabb6){return _0x3513d1===_0xecabb6;},'omFek':_0x55d8('‮82','^v#p')};try{if(_0x3cb075[_0x55d8('‫83','pe4r')](_0x3cb075['vZHkR'],_0x3cb075['vZHkR'])){return Promise[_0x55d8('‫84','PhdC')](0x1);}else{let _0x59a1ba=_0x55d8('‫85','gTj5');let _0x3e566d=_0x55d8('‫86','t3zL')+this['taskCode'];let _0x485768=''+this[_0x55d8('‮87',')F*n')]['Authorization'];let _0x59c6ce='12';let _0xfa9ad8=_0x3cb075[_0x55d8('‮88','gTj5')](populateUrlObject,_0x59a1ba,_0x485768,_0x59c6ce,_0x3e566d);await httpRequest(_0x55d8('‫89','1k(f'),_0xfa9ad8);let _0x5e7c7b=httpResult;if(!_0x5e7c7b)return;if(_0x5e7c7b[_0x55d8('‮74','7#mM')]==0x1){$['logAndNotify'](_0x55d8('‮8a','7Ff2')+this['name']+']任务:\x20'+this[_0x55d8('‮8b','^v#p')]);}else{if(_0x3cb075[_0x55d8('‮8c','u#Hm')](_0x3cb075[_0x55d8('‮8d','zJ@a')],_0x55d8('‫8e','PhdC'))){_0xfa9ad8[_0x55d8('‫8f','7Ff2')]=_0x3e566d;_0xfa9ad8[_0x55d8('‮90','t3zL')][_0x3cb075[_0x55d8('‫91','pe4r')]]=_0x3cb075[_0x55d8('‮92','1k(f')];_0xfa9ad8[_0x55d8('‫93','TQV*')][_0x55d8('‫94','PhdC')]=_0xfa9ad8[_0x55d8('‫95','kxRH')]?_0xfa9ad8['body']['length']:0x0;}else{$[_0x55d8('‫96','gTj5')](_0x55d8('‮97','^v#p')+this[_0x55d8('‫98','(gjw')]+_0x55d8('‮99','kxRH'));}}}}catch(_0x47dfa9){}finally{return Promise[_0x55d8('‫9a',')F*n')](0x1);}}async['receiveCandy'](){var _0x24cca6={'SCBoc':function(_0x23acfd,_0x41098f){return _0x23acfd===_0x41098f;},'RCztL':_0x55d8('‮9b','PhdC'),'ztBwe':function(_0x22c6d2,_0x4e3447,_0x30d49a,_0x138d99,_0x1ac5f0){return _0x22c6d2(_0x4e3447,_0x30d49a,_0x138d99,_0x1ac5f0);},'XGUNU':function(_0x5de534,_0x28a366,_0x35a3a0){return _0x5de534(_0x28a366,_0x35a3a0);},'kycTN':function(_0x39651c,_0x466bfc){return _0x39651c==_0x466bfc;}};try{if(_0x24cca6[_0x55d8('‫9c','7#mM')](_0x55d8('‮9d','%L[^'),_0x24cca6[_0x55d8('‫9e','hf1@')])){let _0x53d41b='https://hms.cignacmb.com/activity/cignaInvestment/receiveCandy';let _0x3d9300=_0x55d8('‮9f','^*xg')+this[_0x55d8('‫a0','qYu(')];let _0x193d12=''+this['param']['Authorization'];let _0x4ed5b2='17';let _0x7af5f4=_0x24cca6[_0x55d8('‫a1','5YDZ')](populateUrlObject,_0x53d41b,_0x193d12,_0x4ed5b2,_0x3d9300);await _0x24cca6['XGUNU'](httpRequest,_0x55d8('‮a2','6RZk'),_0x7af5f4);let _0x20de18=httpResult;if(!_0x20de18)return;if(_0x24cca6['kycTN'](_0x20de18[_0x55d8('‫a3','hf1@')],0x0)){$[_0x55d8('‫a4','6RZk')](_0x55d8('‫a5','[(Sq')+this['name']+_0x55d8('‫a6','7Ff2')+_0x20de18[_0x55d8('‮a7','Q%m@')][0x0][_0x55d8('‫a8','%L[^')]+'颗糖果🍬');}}else{return Promise[_0x55d8('‫a9','kxRH')](0x1);}}catch(_0x14b12d){}finally{return Promise[_0x55d8('‫a9','kxRH')](0x1);}}async[_0x55d8('‮aa','zJ@a')](){var _0x4e9e2f={'UXEQI':function(_0x317303,_0x447c89,_0x39ee8e,_0x3f8116){return _0x317303(_0x447c89,_0x39ee8e,_0x3f8116);},'cLoXl':'Content-Length','jrMnH':function(_0x48ed94,_0x2b9a22,_0x568f66){return _0x48ed94(_0x2b9a22,_0x568f66);},'aVkJD':_0x55d8('‫ab','t3zL')};try{let _0x5e0763=_0x55d8('‫ac','Q%m@');let _0x5ba040='';let _0x29f491=''+this[_0x55d8('‮ad','v3IP')][_0x55d8('‫ae','pYlK')];let _0xc5077e=_0x4e9e2f[_0x55d8('‮af',')E^M')](populateUrlObject,_0x5e0763,_0x29f491,_0x5ba040);delete _0xc5077e[_0x55d8('‮b0','pYlK')][_0x4e9e2f[_0x55d8('‫b1','u#Hm')]];await _0x4e9e2f['jrMnH'](httpRequest,_0x4e9e2f[_0x55d8('‮b2','rZt2')],_0xc5077e);let _0x35d893=httpResult;if(!_0x35d893)return;if(_0x35d893[_0x55d8('‮b3','[(Sq')]==0x0){$[_0x55d8('‮b4','5YDZ')](_0x55d8('‮b5','D9ox')+this[_0x55d8('‮b6','**ri')]+_0x55d8('‫b7','OSqp')+_0x35d893[_0x55d8('‫b8','a1fF')]['growthLevel']+_0x55d8('‮b9','^KO!')+_0x35d893[_0x55d8('‮ba',')E^M')]['receivedNaomiNum']+_0x55d8('‫bb','OSqp')+_0x35d893[_0x55d8('‮bc','^KO!')][_0x55d8('‫bd','ER2#')]+'🍬\x20');this[_0x55d8('‮be','v*n]')]=!![];this[_0x55d8('‮bf','g[([')]=!![];}else{$[_0x55d8('‮c0','PhdC')]('账号['+this[_0x55d8('‮c1','pYlK')]+']'+_0x35d893[_0x55d8('‫c2','Wezt')]);this['valid']=![];this['canRead']=![];}}catch(_0x161714){}finally{return Promise['resolve'](0x1);}}async[_0x55d8('‫c3','5YDZ')](){var _0x1713dd={'QjeYa':function(_0x29d1cc,_0x53bbda){return _0x29d1cc!==_0x53bbda;},'JtLbP':_0x55d8('‫c4','6RZk'),'PkgbO':function(_0x49f916,_0x483836,_0x30b60a){return _0x49f916(_0x483836,_0x30b60a);},'amgMz':_0x55d8('‫c5','kxRH'),'icebA':_0x55d8('‮c6','^v#p'),'jdzkZ':function(_0x3ba2ef,_0x7a1412){return _0x3ba2ef==_0x7a1412;},'QCowK':function(_0x187d34,_0x379158){return _0x187d34===_0x379158;},'zONar':'pyEPq','ipcck':function(_0x3620c,_0x23dbf9){return _0x3620c!==_0x23dbf9;},'QLkvp':_0x55d8('‫c7','OSqp'),'tGaTJ':'DVyIv','OsOsU':_0x55d8('‮c8',')E^M')};try{if(_0x1713dd[_0x55d8('‫c9','pYlK')](_0x1713dd[_0x55d8('‮ca','u#Hm')],_0x1713dd[_0x55d8('‮cb','7#mM')])){return Promise['resolve'](0x1);}else{let _0x36d56b='https://hms.cignacmb.com/activity/cignaInvestment/investCandy';let _0x5a9453='';let _0x457da6=''+this[_0x55d8('‮cc','[(Sq')][_0x55d8('‫cd','(gjw')];let _0x313de0=_0x1713dd['PkgbO'](populateUrlObject,_0x36d56b,_0x457da6);delete _0x313de0[_0x55d8('‫ce','1k(f')][_0x1713dd['amgMz']];await _0x1713dd[_0x55d8('‫cf','TY*6')](httpRequest,_0x1713dd['icebA'],_0x313de0);let _0x59aa65=httpResult;if(!_0x59aa65)return;if(_0x1713dd[_0x55d8('‮d0','u#Hm')](_0x59aa65['statusCode'],0x0)){if(_0x1713dd[_0x55d8('‫d1','D9ox')](_0x1713dd[_0x55d8('‮d2','Cz@$')],_0x1713dd['zONar'])){$[_0x55d8('‫d3','^*xg')]('账号['+this[_0x55d8('‫79','t3zL')]+_0x55d8('‮d4','7Ff2')+_0x59aa65['msg']);}else{$[_0x55d8('‫17','a1fF')](_0x55d8('‫d5','PhdC')+this['name']+_0x55d8('‫d6','pYlK'));}}else{if(_0x1713dd[_0x55d8('‫d7','aGp2')]('bncrM',_0x1713dd['QLkvp'])){$['logAndNotify'](_0x55d8('‮2e','**ri')+this[_0x55d8('‫d8','%L[^')]+']'+_0x59aa65[_0x55d8('‮d9','%L[^')]);}else{return Promise[_0x55d8('‮7e','7Ff2')](0x1);}}}}catch(_0xa336aa){}finally{if(_0x1713dd[_0x55d8('‮da','DjN9')]!==_0x1713dd[_0x55d8('‫db','(gjw')]){return Promise[_0x55d8('‮dc','g[([')](0x1);}else{$[_0x55d8('‮dd','3Wbo')]('账号['+this[_0x55d8('‫de','qYu(')]+_0x55d8('‮df','(gjw')+result[_0x55d8('‫e0','OSqp')][_0x55d8('‮e1',')F*n')]+_0x55d8('‫e2','hf1@')+result['data'][_0x55d8('‫e3','aGp2')]+'\x20现有糖果'+result[_0x55d8('‮e4','2t16')][_0x55d8('‫e5','3Wbo')]+'🍬\x20');this[_0x55d8('‮e6','v3IP')]=!![];this[_0x55d8('‮e7','D9ox')]=!![];}}}}!(async()=>{var _0xcb91c3={'nvrdn':function(_0x905101,_0x370006){return _0x905101!==_0x370006;},'tuRdF':_0x55d8('‫e8','qYu('),'XzbDy':function(_0x39b65e){return _0x39b65e();},'TozRz':function(_0x3c0f7b){return _0x3c0f7b();},'aPqPG':function(_0x490a85,_0x26b666){return _0x490a85>_0x26b666;},'wMNDi':_0x55d8('‮e9','CzYN'),'HefVs':_0x55d8('‫ea','^v#p'),'VftzP':'auwTc','wzNom':function(_0x424485,_0x282ea7){return _0x424485>_0x282ea7;},'yUgyW':function(_0x40e374,_0x2a0a60){return _0x40e374!==_0x2a0a60;},'yaZBX':'tuSGp','ppeUY':_0x55d8('‮eb','rZt2'),'WnxSx':function(_0x252e48,_0x28cfea){return _0x252e48<=_0x28cfea;}};if(_0xcb91c3[_0x55d8('‫ec','**ri')](typeof $request,_0xcb91c3[_0x55d8('‫ed','rIbV')])){}else{await _0xcb91c3[_0x55d8('‫ee','OSqp')](km);if(!(await _0xcb91c3['TozRz'](checkEnv)))return;let _0x4f466f=[];let _0x3c7479=userList[_0x55d8('‮ef','7#mM')](_0x15ab68=>_0x15ab68['ckValid']);if(_0xcb91c3[_0x55d8('‫f0','ScfZ')](_0x3c7479[_0x55d8('‮f1','Qb8K')],0x0)){$['logAndNotify'](_0xcb91c3[_0x55d8('‮f2',')E^M')]);_0x4f466f=[];for(let _0x3f1315 of _0x3c7479){if(_0xcb91c3[_0x55d8('‫f3','Q%m@')](_0xcb91c3[_0x55d8('‮f4','^KO!')],_0xcb91c3['VftzP'])){_0x4f466f[_0x55d8('‫f5','3Wbo')](_0x3f1315[_0x55d8('‫f6','PhdC')]());}else{$['logAndNotify'](_0x55d8('‮f7','#jFm')+this['name']+_0x55d8('‫f8','y%Tw')+result['data'][0x0][_0x55d8('‫f9','Vr$o')]+_0x55d8('‫fa','6RZk'));}}await Promise[_0x55d8('‫fb','^*xg')](_0x4f466f);_0x3c7479=_0x3c7479[_0x55d8('‫fc','81^V')](_0x3f43f5=>_0x3f43f5[_0x55d8('‫fd','pe4r')]);if(_0xcb91c3[_0x55d8('‫fe','pe4r')](_0x3c7479[_0x55d8('‮ff','%L[^')],0x0)){if(_0xcb91c3['yUgyW'](_0xcb91c3['yaZBX'],_0xcb91c3['yaZBX'])){return Promise[_0x55d8('‫100','DjN9')](0x1);}else{$[_0x55d8('‫101','^KO!')](_0xcb91c3[_0x55d8('‮102','7Ff2')]);_0x4f466f=[];for(let _0x4916b5 of _0x3c7479[_0x55d8('‮103','rZt2')](_0x4a73a4=>_0x4a73a4[_0x55d8('‮104',')E^M')])){_0x4f466f['push'](_0x4916b5['investCandy']());_0x4f466f[_0x55d8('‫105','u#Hm')](_0x4916b5['getUserTaskList']());h=local_hours();if(h>=0x6&&_0xcb91c3[_0x55d8('‫106','3Wbo')](h,0x8)){_0x4f466f[_0x55d8('‫f5','3Wbo')](_0x4916b5['checkin']());await $[_0x55d8('‫107','D9ox')](0xbb8);_0x4f466f[_0x55d8('‫108','9XpZ')](_0x4916b5[_0x55d8('‮109','TY*6')]());}else{$['logAndNotify']('\x0a⚠️有定时任务务必在6-8点运行一次\x0a');}}await Promise['all'](_0x4f466f);}}}await $['showmsg']();}})()[_0x55d8('‮10a','Wezt')](_0x47d9e7=>console[_0x55d8('‮10b','a1fF')](_0x47d9e7))[_0x55d8('‮10c','Qb8K')](()=>$[_0x55d8('‫10d','t3zL')]());async function km(){var _0x3797da={'RMKCd':function(_0x3ccb99,_0x5cb78,_0xe28c87){return _0x3ccb99(_0x5cb78,_0xe28c87);},'kqkAn':'Content-Length','IGNSR':_0x55d8('‫10e','[(Sq'),'yqZse':function(_0x5a563c,_0x142d9b){return _0x5a563c==_0x142d9b;},'vWZcO':'3|5|1|0|4|2','aNFDF':function(_0x4b9d21,_0xb9e203){return _0x4b9d21(_0xb9e203);},'KOCmE':function(_0xab2ac4,_0x54d861){return _0xab2ac4==_0x54d861;},'reFMG':function(_0x3c7dfa,_0x5c5553){return _0x3c7dfa==_0x5c5553;},'rBTfh':function(_0x77e258,_0x1c8fa3){return _0x77e258===_0x1c8fa3;},'GYIgl':_0x55d8('‮10f','#jFm'),'tLDfX':'helyp','sNQgR':function(_0x10e08d,_0x1a1bb7){return _0x10e08d!==_0x1a1bb7;},'dwdvd':_0x55d8('‮110','a1fF'),'aYPGk':'LWwQn'};try{let _0x29fbc0=_0x55d8('‫111','CzYN')+userCGkey+_0x55d8('‫112','Wezt')+uuid;let _0x2220da='';let _0x1aabd6=_0x3797da['RMKCd'](populateUrlObject,_0x29fbc0,_0x2220da);await httpRequest(_0x55d8('‮113','**ri'),_0x1aabd6);delete _0x1aabd6[_0x55d8('‮114','pe4r')][_0x3797da[_0x55d8('‮115','PhdC')]];delete _0x1aabd6['headers'][_0x3797da[_0x55d8('‮116','5YDZ')]];let _0x14a530=httpResult;if(_0x3797da[_0x55d8('‫117','TY*6')](_0x14a530[_0x55d8('‫118','ER2#')],0xc8)){var _0x5997a5=_0x3797da[_0x55d8('‮119','5YDZ')][_0x55d8('‮11a','y%Tw')]('|'),_0x338cf1=0x0;while(!![]){switch(_0x5997a5[_0x338cf1++]){case'0':await $[_0x55d8('‮11b','Wezt')](0xbb8);continue;case'1':$[_0x55d8('‮b4','5YDZ')](_0x55d8('‫11c','v3IP')+this[_0x55d8('‮11d','a1fF')]);continue;case'2':this[_0x55d8('‫11e','u#Hm')]=!![];continue;case'3':this[_0x55d8('‮11f','u#Hm')]=_0x14a530[_0x55d8('‮120','^KO!')]['vip'];continue;case'4':this[_0x55d8('‫fd','pe4r')]=!![];continue;case'5':this['time1']=_0x3797da[_0x55d8('‫121','ScfZ')](timestampToTime,this[_0x55d8('‮122','^*xg')]);continue;}break;}}if(_0x3797da['KOCmE'](_0x14a530['code'],0x95)||_0x3797da[_0x55d8('‮123','hf1@')](_0x14a530['code'],0x94)||_0x14a530[_0x55d8('‫124','v3IP')]==0x70){if(_0x3797da[_0x55d8('‮125','3Wbo')](_0x3797da[_0x55d8('‮126','#jFm')],_0x3797da['tLDfX'])){return Promise[_0x55d8('‫84','PhdC')](0x1);}else{$[_0x55d8('‮127','rIbV')](_0x14a530[_0x55d8('‮128','Q%m@')]+_0x55d8('‮129','ER2#'));}}if(_0x14a530['code']==0x192){$[_0x55d8('‮12a','(gjw')](_0x14a530[_0x55d8('‮12b','(gjw')]+'\x20请勿多处使用or重装环境造成请联系作者解除');}}catch(_0x128d80){}finally{if(_0x3797da['sNQgR'](_0x3797da['dwdvd'],_0x3797da[_0x55d8('‫12c','y%Tw')])){return Promise[_0x55d8('‫9a',')F*n')](0x1);}else{this[_0x55d8('‮12d','Vr$o')]=![];$[_0x55d8('‮12e',')E^M')](_0x55d8('‫d5','PhdC')+this['index']+']CK格式错误');}}}async function checkEnv(){var _0x20f7e3={'cfDjI':function(_0x28b470,_0x2a4c66){return _0x28b470!==_0x2a4c66;},'iDzwz':_0x55d8('‮12f','kxRH'),'kzFGS':function(_0x59f935,_0x32d758){return _0x59f935>_0x32d758;},'HYZzZ':_0x55d8('‮130','Qb8K'),'irySn':function(_0x500a0b,_0x2658a1){return _0x500a0b===_0x2658a1;},'bcSyt':_0x55d8('‮131','Cz@$'),'UthgP':'EScSe','woGwa':'\x0a未找到CK\x20请阅读脚本说明'};if(userCookie){if(_0x20f7e3[_0x55d8('‮132','Vr$o')](_0x20f7e3[_0x55d8('‮133','(gjw')],'VygeT')){httpResult=resp[_0x55d8('‮134','6RZk')];}else{let _0x476e2e=envSplitor[0x0];for(let _0x17b99d of envSplitor){if(_0x20f7e3[_0x55d8('‫135','y%Tw')](userCookie['indexOf'](_0x17b99d),-0x1)){if(_0x20f7e3['HYZzZ']!==_0x55d8('‮136','Wezt')){_0x476e2e=_0x17b99d;break;}else{$['logAndNotify'](_0x55d8('‫137','kxRH')+this[_0x55d8('‫d8','%L[^')]+']浏览任务失败\x20可能此任务已经完成了');}}}for(let _0x469059 of userCookie[_0x55d8('‮138','TQV*')](_0x476e2e)){if(_0x20f7e3[_0x55d8('‮139','9XpZ')](_0x20f7e3[_0x55d8('‫13a','Q%m@')],_0x55d8('‮13b','[(Sq'))){if(_0x469059)userList[_0x55d8('‫105','u#Hm')](new UserInfo(_0x469059));}else{$[_0x55d8('‫13c','u#Hm')](_0x55d8('‫13d','2t16')+this[_0x55d8('‮13e','y%Tw')]+']'+result[_0x55d8('‮13f','Vr$o')]);this['valid']=![];this[_0x55d8('‮140','pYlK')]=![];}}userCount=userList[_0x55d8('‮141','g[([')];}}else{if(_0x20f7e3[_0x55d8('‮142','[(Sq')](_0x20f7e3['UthgP'],_0x20f7e3[_0x55d8('‮143','qYu(')])){console[_0x55d8('‫144','6RZk')](method+_0x55d8('‮145','2t16'));console['log'](JSON[_0x55d8('‮146','1k(f')](err));}else{console[_0x55d8('‫147','Cz@$')](_0x20f7e3['woGwa']);return;}}console[_0x55d8('‫148','rIbV')]('\x0a共找到'+userCount+'个账号');return!![];}function populateUrlObject(_0x44a95c,_0x3e77e0,_0x31d87a,_0x3bc613=''){var _0x545ff0={'inPft':'Content-Type','wiale':_0x55d8('‫149','Wezt'),'GczcF':_0x55d8('‮14a','81^V')};let _0x485028=_0x44a95c[_0x55d8('‫14b','1k(f')]('//','/')[_0x55d8('‫14c','PhdC')]('/')[0x1];let _0x1b00c6={'url':_0x44a95c,'headers':{'Host':_0x485028,'Content-Length':_0x31d87a,'Authorization':_0x3e77e0,'User-Agent':defaultUA,'Content-Type':'application/x-www-form-urlencoded'},'timeout':0x1388};if(_0x3bc613){_0x1b00c6[_0x55d8('‫14d','pYlK')]=_0x3bc613;_0x1b00c6['headers'][_0x545ff0['inPft']]=_0x545ff0[_0x55d8('‫14e','%L[^')];_0x1b00c6['headers'][_0x545ff0[_0x55d8('‫14f','pe4r')]]=_0x1b00c6['body']?_0x1b00c6[_0x55d8('‫150','rIbV')]['length']:0x0;}return _0x1b00c6;}async function httpRequest(_0xd7a68,_0x17192d){var _0x23811f={'VEZQR':function(_0x4b239a,_0x3c3ce0){return _0x4b239a!==_0x3c3ce0;},'rSkZo':_0x55d8('‮151','PhdC'),'tdlks':_0x55d8('‫152','Q%m@'),'ZKIpM':'TjoQv','BrsEf':_0x55d8('‫153','rZt2'),'lzfsX':_0x55d8('‮154','OSqp'),'xskhb':function(_0x431563,_0x32c432){return _0x431563===_0x32c432;},'VVBLv':_0x55d8('‮155','pe4r'),'bDJyo':_0x55d8('‮156','ER2#'),'UbQwa':'FrfCw'};httpResult=null,httpReq=null,httpResp=null;return new Promise(_0x523f7f=>{var _0x187b89={'QZvGL':function(_0x2de3b6,_0x1b3e7c){return _0x2de3b6===_0x1b3e7c;},'kdAFb':_0x55d8('‫157','^*xg'),'ugRSl':function(_0x3062aa,_0x1ccbf4){return _0x23811f['VEZQR'](_0x3062aa,_0x1ccbf4);},'YtJQh':_0x23811f[_0x55d8('‮158','#jFm')],'sJLBi':_0x23811f[_0x55d8('‮159','DjN9')],'ruKgx':_0x23811f[_0x55d8('‮15a','g[([')],'jjhIq':_0x55d8('‫15b','rZt2'),'PIZfc':_0x23811f[_0x55d8('‫15c','TY*6')],'MWbrL':_0x23811f[_0x55d8('‫15d','v3IP')],'RZEih':function(_0x3dd8ba,_0xba359f){return _0x23811f['xskhb'](_0x3dd8ba,_0xba359f);},'nMOjk':_0x23811f[_0x55d8('‫15e','OSqp')],'wHuIe':'DMikp','rQvaj':_0x23811f[_0x55d8('‮15f','kxRH')]};if(_0x23811f['xskhb'](_0x55d8('‮160','DjN9'),_0x23811f['UbQwa'])){console[_0x55d8('‫161','[(Sq')](e);}else{$['send'](_0xd7a68,_0x17192d,async(_0x9a2fca,_0xbda21a,_0x46bbbb)=>{if(_0x187b89['QZvGL'](_0x187b89[_0x55d8('‮162','Q%m@')],_0x187b89['kdAFb'])){try{httpReq=_0xbda21a;httpResp=_0x46bbbb;if(_0x9a2fca){if(_0x187b89[_0x55d8('‮163','**ri')](_0x187b89[_0x55d8('‫164','Qb8K')],'mNYrS')){console[_0x55d8('‮165','^v#p')](_0xd7a68+_0x55d8('‫166','rIbV'));console[_0x55d8('‮165','^v#p')](JSON[_0x55d8('‫167','v*n]')](_0x9a2fca));}else{$[_0x55d8('‮b4','5YDZ')](result['msg']+_0x55d8('‫168','u#Hm'));}}else{if(_0x187b89[_0x55d8('‮169','#jFm')]!==_0x187b89[_0x55d8('‮16a','pYlK')]){if(_0x46bbbb[_0x55d8('‫150','rIbV')]){if(_0x187b89[_0x55d8('‫16b',')F*n')](_0x187b89[_0x55d8('‫16c','a1fF')],_0x187b89[_0x55d8('‮16d','(gjw')])){if(typeof _0x46bbbb['body']==_0x187b89[_0x55d8('‫16e','y%Tw')]){httpResult=_0x46bbbb['body'];}else{try{if(_0x187b89[_0x55d8('‮16f','7Ff2')](_0x55d8('‫170','y%Tw'),_0x187b89[_0x55d8('‮171','6RZk')])){return Promise[_0x55d8('‫172','TQV*')](0x1);}else{httpResult=JSON[_0x55d8('‮173','2t16')](_0x46bbbb[_0x55d8('‮50','81^V')]);}}catch(_0xda8ee0){if(_0x187b89[_0x55d8('‫174','a1fF')](_0x187b89[_0x55d8('‫175','pYlK')],'dFwSr')){httpResult=_0x46bbbb['body'];}else{$[_0x55d8('‮77','pe4r')](_0x55d8('‫d5','PhdC')+this['name']+']'+result['msg']);}}}}else{return Promise['resolve'](0x1);}}}else{$[_0x55d8('‫101','^KO!')](_0x55d8('‮176','ER2#')+this[_0x55d8('‫177','aGp2')]+_0x55d8('‮178','Vr$o')+result[_0x55d8('‫179','[(Sq')][_0x55d8('‮17a','Wezt')]+'诺米');}}}catch(_0x54f1be){if(_0x187b89['RZEih'](_0x187b89[_0x55d8('‮17b','3Wbo')],_0x187b89[_0x55d8('‫17c','ScfZ')])){httpResult=JSON[_0x55d8('‮17d','gTj5')](_0x46bbbb[_0x55d8('‫17e','rZt2')]);}else{console['log'](_0x54f1be);}}finally{_0x523f7f();}}else{taskall['push'](user[_0x55d8('‮17f',')E^M')]());}});}});};_0xod1='jsjiami.com.v6';
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