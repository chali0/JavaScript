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
let list = 'param=eyJhY3Rpb24iOiJNQiIsInNlYXJjaEtleSI6IiIsImNhdGVnb3J5IjoiQTA3Iiwic29ydFR5cGUiOiIwNCIsImludGVydmFsIjoiMDAiLCJhY3Rpdml0eVR5cGUiOiIwNCwwMywwMiwxMywxNCwwMCIsImN1cnJlbnRQYWdlIjoiMSIsInBhZ2VTaXplIjoiMTAifQ=='         //库存监控请求体body，默认虚拟卡类 如需其他自己抓
//https://member.cignacmb.com/shop/member/interface/queryShopList

var _0xodE='jsjiami.com.v6',_0xodE_=['‮_0xodE'],_0x2269=[_0xodE,'wrrDjn1tIsKMwrtswq7CvD1FwrtFw43DucKYw6N4w7/DvMOgw6bDiXU9w41WVMOuN8OzMcOZCcOaTh4vEsKKwrZGVmtDKxPCjsOoKsK2LcOfRcKSGcO2chXDp8OdwoU=','SBLCncOwwrs=','w7PDncOZw6zDvw==','XzoIecKJ','6Lag5Y60SQ==','wrTDt8KQw7x5QmzDsTnCkcOH','w6MUwrXCjMK+ccOzw5JXw4FEwps=','6K2D57KoVOW6q+Wtug==','w6vChsKFw47DjADDnsK3','GMObe8OVwpzDm8OQwrTDkzzDpw==','A8KZwp4ve8O1YA==','GRQTbMKzLMK4L8Oxb8OHeS3DqgDCkei0hOWNlOagr+aelEnCksOmw7nCksO4w53CicKxw5tnw5A8w53Dow==','EXwFw7jDgQ==','VhrCjTfCrMOCw6nCvMOM','Q8KMw5jDisO0','B8OITcKXVA==','fVA4wrgqw75sdMKsw70TXw==','NcOLwqwTw49Sw7LDg8Khw4rDrMKE','w5Z+w5rCnHc=','QMOdwpEd','bsO+wqI=','BT8Rwq96w5I=','w7XChsKYw5nDvAk=','O8KTwqYjUQ==','w5fDl3Ykw7w=','w7cEwqDChQ==','wpnCk8K0wr7CjsK3w4TDjHLDmsKbEsOnw5zCl8KXc1o=','ecKOw7ptcA==','w48kIMO8HMO3','SFk6wogG','eMK+eMKgdA==','FDcUwq8=','wr3CksKzwr7Cjw==','wpMMM8OsEQ==','wrnDssO7w7o=','UsKNw4hESHRU','wqTCll8L','wpIJA8OR','eMK7dsKkacKHw5/CuMKJw48=','w7Y2YWY=','wq7DosO8w4dUdMOPwrbCrkVJemTCksK0','eMOzwqfChQ==','NDQXw4zDkG7Ck8OULFwK','f8OzwrzCgsKn','QRvCjSs=','w6UiZm3Drw==','w5d6w5U=','UToPQcKkQSc=','b8KhesKs','wq7CscK2w7PDvw==','w5XDsFQkw5Y=','SBzCnMOl','wpodCcOLw68=','wpbCp8KYw7LDjg==','wrXCtsK0wqbCng==','w5rDrlYww7U=','wrJlGkZeWMK0VcKlCsOxPjPDlw==','SsK7YMKhb8KBw6XCq8KPw5UJwrIP','w7vCljBoWg==','ADkZwr4=','wrfDnA3DlcKT','ZiXDmMKbLQ==','ZVYywpx1','T8KOw5/DqcO5','BcKVwoAl','LsOFwqIm','f1ZZAMOwZcObbcKoK8KMLQ==','8LG+n+WPk+Wsoumqv+ivjOaKleWLjsKr5p+b5pS55pyA6Ie1','H8OGecOC','NMOXwqw=','woLCgsKDwoTDsw==','w5rCtBBd','WsKuw692bg==','w7cWwpnCvsKP','worDqyLDiMKN','YcOzwqPClA==','FOWWvOeyteaciMKLw7E=','wp/DrSE=','woFuAlDCgQ==','wqfDqsKbw70=','fEw4','Neisn+WJjOWlmuWlkeS/keeWksKJVOmHueiiuOeOsuWgiemCteaLlOitp+iBsuewl+S8j+iAlOikk+mZkg==','QsONwpEaw6nCtMO2','JcOeWMKuScOoXQ==','KeadnuaKl+WJosKJw6DCp+isrumareiuleiGj+aeiOiuuuaYoQ==','OcOvwpXCmkU=','woDDsj/DqsKB','BsO5Y8KLQQ==','w6PDo0EWw70=','wpPClsKLwqvCi8K/w4w=','e8K7Z8Kh','RcOMwrQZwoXDtw==','wo4TFw==','XeWHiuaJleWLsQ==','5Lil6La05Yy5','NsORwrPCgkvDjBMHHsOpwrPCog==','cE8vwpUtw7lDb8Kxw7sbCcKJFsOiwrzClMO5w68MF8KqcMONw7jCisKkV0fCtzfDvcKTdcK3wog2J8Knwphwwp1qHytfQA==','ScK5w77DqcO7H0zCiMKzw74ew4g5LA==','B8Obwq3Cmk/DgQI=','BsOOwrHCn1o=','BcOMO8KxNGVVdcOEwpPDvsOINMOqLFIgDQDCuBI4w59MwpnCuwfDuMK1w5HDosKEWQ==','cnvCssOAMQ==','WhzCi8Oo','w64mc2rDogZi','dhXCisOLwrY=','w5DClsKuw4vDqQ==','w5Nww5PCgFZ/w7Y=','w7HDvsOFw5DDgQ==','d8KHw5c5','axFRNw==','Z8KresKudMKb','w7QmYWHDqwJ0','TwZFPcKL','fMOEwog8woM=','WsKdw5RWeQ==','BcObRMODwr0=','GkcSw4DDlw==','wo/CiMKjw6LDow==','KQ83w7/DtQ==','w7UmfGo=','finCvcOEwoA=','wpR4A2fChA==','wpQ0D8Opw5DDjADDnhDDmlh9','6La15Y21aA==','X8KEw4BC','AOespOWJkeiMnuW8tA==','fcO3wr3CgcKGHcKJBQ==','Z8Khcw==','6K+U5rC25aeY6LW3','wr7DlW4=','YE1MKMOwZsO8ZMKl','wp1TwpfDrsOY','R8OAwofCg8K7','Qw58NsKI','wo9ewr/DjQ==','acKhcMKw','S8OGwr4H','TxvCjg==','wp9UwqjDm8ORw4dV','woRCwpXDm8OZw5Q=','UDYVRMKpWT8=','w7DCkMK4w5HDrAQ=','PMOKwr0=','w6BxQ3hs','w5U4dsOibA==','Em/CpsOcSMKNR8KVw5zCksKfwqnChsKxWw==','w5deTXM=','IFAHw7HDiQ==','WTIMRQ==','CcOWwrzDnWg=','ZTTDhsKTNA==','bSzCgMKswq3Co0hy','acK9w4bDvMOyGFw=','U8ODwrQUw6nCq8O3','HcKTwooBecOnS2LDl8K8wpIf','wp3CjcKLwojDrw==','ABkq5qKV5b6s6ZSD6Ky/','FsOWwrjClUXDiwk=','dFcPwpMq','w7rCtBpMR0Ykw7vClMOmbMKpJcOv','wpXDuzI=','eFEIwoge','w4bDt8O5w6bDtg==','BcOQwojDkn4=','A8O2fcKLQA==','LTsTw5rDhg==','wrDDlW1k','wpo0DMOR','NS4Vw5nDkCDDv8KaKlUAwrTDqzFWfgYvwrHDuMOow5HCq0ZNdgPDk8OEwqxNwoHDjcOLDV5dwo48w6omwrVrE8KvPklfwrM6NcKYw7jDjTjDkk0dZCICwrDDlcOIbxjDs3c=','DGHCsMOYCA==','w7/DgMO7w53DqW8Dw43DihErNsOh','w4IHXX3DjA==','w7vDp1ITw7XCj18=','w73DkHEUw7M=','eCHCusOuwp8=','w7jDo8O8w4TDgg==','6Law5Y6IRg==','MzsMw4w=','wpXDjV10Pg==','UiLDoMKbNg==','WcOGwoYQw70=','wpvDsCLDqMK+','QBXChwDCr8OKw6M=','w7QFwqHDn8KhbsOow68=','w7DDqWUWw7zClEg=','ecKHw5QBO8OKw7TCiVJdG2Q=','WMKLw4lCWw==','Y8O9wqnCsMKsGMKzC8OewqhMfA==','fVhTJA==','wo8PFw==','FcOxwpk4w5g=','w4Jaw5vCjGM=','w5sHKMO7DQ==','B8Obwq7CmULDlAI=','DmXCscOWCcKWQw==','wp5EwrnDmcOUw4VjJXkd','wolIFmFz','G8OOZsOGwpTCp8OYwqLDrDrDigTDrG1Yw6UgwqbCrsKnSVnDoVTDnks=','w6YQbsOz','wpZRO1DCtw==','PMOAVsOTwpE=','w7nDjmomw4A=','LxMHw6LDhw==','wpDDsSLDtA==','YQpBPsKoJcKsw4LDkQ3ChH5nw6YmWmtOw4bDo8OhSgfChBzCjxY+wqgedznCjRzDu1NtNsK4U8OUTMKRw4fChVxgw6JeEw8Ew6UFw5puw5sOw50L','DcO+wr4cw7Q=','UxXCmzPCpw==','wrXClsKbwoXDuMKBwpLChMKqw5bDscOFwo4=','IsKvwokOfQ==','w7VgTlJ7','YcOrwqs0w44=','w4zDkMO8w4XDhXIOw5I=','Ilw2w7LDsA==','P8O8wrvCklQ=','wqF2woPDg8OR','6LS25Y+1wps=','w73Do14S','DmXCscOJIcKBUsKX','w6DDq1QZw4PCnkMjwpM=','ecKrZ8KmbMKFw6k=','wpjCjMKIwqzDucKXwrXCkcK/w4vDvsOT','6LaP5Y66Fw==','w6HDp0AHw5TCmF8y','UTfCocOswpE=','wobCgEY0w4U=','w6sewrTCrMKlecOJw65Aw4dQwoc=','6LeS5YyUwrQ=','CsOdJsK4','Tua1tuintg==','ajnCgcO1wonCsUp5','L+avtuS4teWJkOW0sOe6s+WtseaJtOS4rA==','wrbDoMKMw7dgV30=','LlsXw4HDgsK0R8OFQ1pWRE53w7U=','U23CrsOfHkbCscO0w6zCgcKww7hiw7M=','V8ONwpY=','JcOBwoLDjmU=','McOQwr8iw5IMwpPCg8K9w47DucOTBzLDvcKGF0VPwo0Owo5pwqotwpLCr2HDo8OGwpfCp09owpzCscKaw4XCnDw6w6fDpkDCpVbDq0bCn8K6EMOswrFfPnDCgxkJwq9dw7EHOsKp','YV4twpgp','w4c2ZmbDqAZ4w4bDohlMw6DDrg==','GsOtwogdw5Y=','w4tTSXlww53DrQ==','YRDCtcOAwrI=','wr0CDcOBw5Q=','wpnCvX86w5w=','w590w4bChQ==','JMOLTsKiTMO/VMKEFcKywp0=','wq/CpMK7w6zDvng=','woDDuyXDosK0HMOpUA==','OTsVw4g=','a8OzwrrCkA==','SwfCjsOlwqM4','asOgwrsBw4s=','JMOLR8KoUQ==','A8KZwo4vZcOnTGk=','KFIPw4DDkMKiXg==','w5FTS3Jnw4vDl3A=','w5RXQWk=','cTTDgMKT','UcOEwo4hw6TCscO4','I8OaWMKqa8O/VcK1','AMOOwrnCl1rDhzNLOcO7wpDCsykCXMKB','w5dXW3ZWw4DDunE=','woTCnMKuwqHCpMK5w4zDgA==','aBJZGsK6bMOo','HXfCo8OLAcKjScKYw4DCnsKfwrg=','O8OTwrvCpEA=','6LaF5Y+Bcw==','LOaUlei2muaIk+WNtuaKk+WKmg==','fA5RL8KvesOXwozDjwPCumhjw6B9Sg==','wr4iCcOfw50=','w64owqnChsK8','DMOIP8KtLjwbLsOFwpHDo8OJL8KuPEs2QwvCtU42wp1Uw4TCtgHDosK/w4jDr8KVRMOHJ8KHOMOPLSTDusK6w4nCqB7CksO6bHFhw6E6VEM8Gm9fTsKfSMOdw6kHMMKfw4PDnlnCog==','PV8Qw7/DssK+UcO0Hw==','woVrB1l4WcKkHQ==','KcOFwrkzw4w=','S8Kjw6TDtcOxA1HDn8Kew68Zw4Aj','w5g8FMOSMg==','ZcKHw4A0','wpbDvzLDrA==','REnCh8OqOg==','VjDCocOmwoM=','wpzCksK6wovCicKyw6bDinzDlsKoGA==','DsOZwrXDnQ==','auS6qOWLgBrDqA==','Z2PCqcOf','ecKrd8KmcsKXw4XCtQ==','w41XRXgk','w7/DrVQ2w77CmWI+woJHwrnChQ==','6LS45Y6vwqk=','G8OfwrDCkw==','wr7ChFE=','wr7DlW5cP8OSw5oswrfCsDZe','bea3p+ikqg==','wpYdA8OSCcOYw73DvQ==','PuasvOS4ieWIv+W0tee4n+Wuq+aIjOS4vA==','YMKMw5pxQQ==','JMOueMKpZA==','woAUGcO3Hw==','wqHCkkUQw50awqY=','ZMK3w73DuA==','wqfCtsKlwqHDgQ==','A8KZwo4vZcOnTGnCng==','esK3w6LDvMOz','NMOLwqnCnkHDkA5QK8OkwqrCqCY=','HsOcwrnCnkE=','wqRFwrPDt8O7','UADCiCbCv8OYw4TCtsOMCw==','eDkUcsKB','ZA1S','wr/CmFE+w58Iwo0UwqFAIsKd','BcOOecOCw4g=','woYdBMOY','eFE2wo0tw7tOcsKiw7EgVcKUScOcwqXChcK7','wrPCksKzwr7CgsK4w5zCiETDmsKgBsO2w4Y=','ZMO9wpYyw5Y=','McOQwr8iw5IMwpPCg8K9w47DucOTBzLDvcKGF0VPwo0Owo5pwqotwpLCr2HDo8OGwpfCp09owpzCscKaw4XCnDw6w6fDpkDCpVbDq0bCn8K6HsOnwqx+JHTCnSQSwrljw44LO8KUwqLCp8OD','wrnDpsO6w7NK','wrkuHMOAw5HDmifDiwXDh1drRA==','w68UwrLCicKub8O0','wqTDiA7DiMKJ','w4t6w4HCkA==','SwfCjsOlwqM4w7sJeMKK','CRYvw47Dqw==','R2xKBsON','wr3Cllsa','RAbChiXCvsODw4vCvMOeC8O5','dGPCtMOK','URHCijfCo8Odw6LCvcOmD8O6w4knYcKzGA==','wp7njIXmnobnsaPmnJo=','w5rDlMO7w5Q=','VsKXw4JQV3V2wqDCtcK4GU7Cl8KfMMOhwqbDpgA=','8KCNrMOi','wojDi8K9w4Bu','d1hKIA==','w7UUwrDCiMKia8Oiw6V6w49ZwpNuwoRTwrg=','wqDDn2p4OMOAw7ENwqLCtj1O','wptQwrfDncOZ','w6QQwr3Cv8KufMOj','6LSe5Y6EwrQ=','J18Ow7E=','BsOccw==','w6/CgsKaw5fDrA==','w5h0w5zCtlZsw6E=','Y1oswpYow6xH','w68tZGvDtABSw53DrQlc','MsOIe8O/wqM=','w4g0AMOmDQ==','Z8OnwoURw5U=','WcKRw5lXUCcVw6rCq8KwBiPClcKYM8O2wonDsABWcWvClMKSY8OSEmvCvVQ4woFqTW/CmSPCosK0XxzCt8OpC8K9GMK4wpfCiGoZwpnCtTVjw6ACdcKCw7cs','OV8Rw7XDnA==','fcKNw5IkMMOcw4k=','c8K7w4LDqMO4','w7x+w5bCgXQ=','AcKTwp40','w6RBbWVS','wp1lE3NVUsKOF8KdBsO5IA==','6LeW5YyKwoY=','w5PDhsOo','O8OUTMKAS8O6dsK/AMKowpDDsw==','6LaY5Y2Cw5Q=','TgfCjg==','wqTDm2V0NQ==','CMOOesO1wpzDu8OZ','ViotTsK8','WcKIQsKCTA==','wo7DrMO8w4dj','Lz8Cw4bDkX7CmcOR','w4hlw5fCh1psw6kFw6rCoRo=','wrvDosOrw71VdcO0woY=','HjUPw53DhnTCpMKYDl0dw73DvDA=','wqzDoMKew7xpU2s=','IMOtTcKLaA==','w7vCniVrdQ==','QMOHwpEB','6LWG5Y2PwoM=','NuaWmeivruezlMODwro=','w6swdQ==','fcO3wr3CnsKuCsKY','RTYST8KkWzs=','FDcHw6TDhw==','WcOGwqkK','wprCvMK5wo3ClQ==','wojDrsKew5N4','ZTTDhsKTNMK/wqrCpMOyCQ==','f8OzwrzCkMKv','B8OZwqfCjns=','eTrDk8KzN8OmwoHDuMK2XVRb','6LWN5Y2YTw==','w41XRXg=','woFKPkLCnhbCmhs=','jsLjVzligPGaRmSi.yWtcomNIY.vR6=='];if(function(_0x47668f,_0x3082d6,_0x324659){function _0x1d6424(_0x588d53,_0x4b8b9c,_0xe7d839,_0x1a2667,_0x347707,_0x1627dc){_0x4b8b9c=_0x4b8b9c>>0x8,_0x347707='po';var _0x32ef67='shift',_0x26a0a6='push',_0x1627dc='‮';if(_0x4b8b9c<_0x588d53){while(--_0x588d53){_0x1a2667=_0x47668f[_0x32ef67]();if(_0x4b8b9c===_0x588d53&&_0x1627dc==='‮'&&_0x1627dc['length']===0x1){_0x4b8b9c=_0x1a2667,_0xe7d839=_0x47668f[_0x347707+'p']();}else if(_0x4b8b9c&&_0xe7d839['replace'](/[LVzlgPGRSyWtNIYR=]/g,'')===_0x4b8b9c){_0x47668f[_0x26a0a6](_0x1a2667);}}_0x47668f[_0x26a0a6](_0x47668f[_0x32ef67]());}return 0x1122ad;};return _0x1d6424(++_0x3082d6,_0x324659)>>_0x3082d6^_0x324659;}(_0x2269,0x8b,0x8b00),_0x2269){_0xodE_=_0x2269['length']^0x8b;};function _0x3934(_0x252ec6,_0x571e71){_0x252ec6=~~'0x'['concat'](_0x252ec6['slice'](0x1));var _0x59bc47=_0x2269[_0x252ec6];if(_0x3934['JZGxGd']===undefined){(function(){var _0x221d60=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x4f672d='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x221d60['atob']||(_0x221d60['atob']=function(_0x175712){var _0x190933=String(_0x175712)['replace'](/=+$/,'');for(var _0x5be4fe=0x0,_0x6155f9,_0x3ba802,_0x5ccbd0=0x0,_0x238d19='';_0x3ba802=_0x190933['charAt'](_0x5ccbd0++);~_0x3ba802&&(_0x6155f9=_0x5be4fe%0x4?_0x6155f9*0x40+_0x3ba802:_0x3ba802,_0x5be4fe++%0x4)?_0x238d19+=String['fromCharCode'](0xff&_0x6155f9>>(-0x2*_0x5be4fe&0x6)):0x0){_0x3ba802=_0x4f672d['indexOf'](_0x3ba802);}return _0x238d19;});}());function _0x3a6d03(_0x15852b,_0x571e71){var _0x3367e5=[],_0x33ce67=0x0,_0x49500a,_0x4fee1f='',_0x1b5b2e='';_0x15852b=atob(_0x15852b);for(var _0x198e19=0x0,_0x540bb3=_0x15852b['length'];_0x198e19<_0x540bb3;_0x198e19++){_0x1b5b2e+='%'+('00'+_0x15852b['charCodeAt'](_0x198e19)['toString'](0x10))['slice'](-0x2);}_0x15852b=decodeURIComponent(_0x1b5b2e);for(var _0x53771c=0x0;_0x53771c<0x100;_0x53771c++){_0x3367e5[_0x53771c]=_0x53771c;}for(_0x53771c=0x0;_0x53771c<0x100;_0x53771c++){_0x33ce67=(_0x33ce67+_0x3367e5[_0x53771c]+_0x571e71['charCodeAt'](_0x53771c%_0x571e71['length']))%0x100;_0x49500a=_0x3367e5[_0x53771c];_0x3367e5[_0x53771c]=_0x3367e5[_0x33ce67];_0x3367e5[_0x33ce67]=_0x49500a;}_0x53771c=0x0;_0x33ce67=0x0;for(var _0xdf59d3=0x0;_0xdf59d3<_0x15852b['length'];_0xdf59d3++){_0x53771c=(_0x53771c+0x1)%0x100;_0x33ce67=(_0x33ce67+_0x3367e5[_0x53771c])%0x100;_0x49500a=_0x3367e5[_0x53771c];_0x3367e5[_0x53771c]=_0x3367e5[_0x33ce67];_0x3367e5[_0x33ce67]=_0x49500a;_0x4fee1f+=String['fromCharCode'](_0x15852b['charCodeAt'](_0xdf59d3)^_0x3367e5[(_0x3367e5[_0x53771c]+_0x3367e5[_0x33ce67])%0x100]);}return _0x4fee1f;}_0x3934['oqpZXG']=_0x3a6d03;_0x3934['tdVdPt']={};_0x3934['JZGxGd']=!![];}var _0x4b04f2=_0x3934['tdVdPt'][_0x252ec6];if(_0x4b04f2===undefined){if(_0x3934['LnanzU']===undefined){_0x3934['LnanzU']=!![];}_0x59bc47=_0x3934['oqpZXG'](_0x59bc47,_0x571e71);_0x3934['tdVdPt'][_0x252ec6]=_0x59bc47;}else{_0x59bc47=_0x4b04f2;}return _0x59bc47;};let httpResult,httpReq,httpResp;let userCookie=($[_0x3934('‮0','S@nb')]()?process['env']['ynzy']:$[_0x3934('‫1','[Qxi')]('ynzy'))||'';let userCGkey=($[_0x3934('‮2','C[7M')]()?process[_0x3934('‮3','p18x')][_0x3934('‮4','thF9')]:$['getdata'](_0x3934('‮5','3C3O')))||'';let userList=[];let userIdx=0x0;let userCount=0x0;let num=0x0;let ts=getNowFormatDate();const {machineId,machineIdSync}=require(_0x3934('‮6','c%&T'));machineId()[_0x3934('‮7','thF9')](_0x1eb2cd=>{});let uuid=machineIdSync();class UserInfo{constructor(_0x1cbcfc){this[_0x3934('‫8','t4AM')]=++userIdx;this[_0x3934('‫9','[Qxi')]=this[_0x3934('‫a','uY#z')];this['valid']=![];this['canRead']=![];try{this[_0x3934('‫b','A5vB')]=$[_0x3934('‫c','lmii')](_0x1cbcfc);this[_0x3934('‫d','wWbt')]=!![];}catch(_0xfc9f48){this[_0x3934('‮e','CI^s')]=![];$[_0x3934('‮f','3KB[')]('账号['+this[_0x3934('‮10','eJ(R')]+_0x3934('‮11','1KJJ'));}}async[_0x3934('‫12','o3]Y')](){var _0x4d00e3={'TMVJe':_0x3934('‮13',']PiO'),'DDOsK':function(_0x2ea0fc,_0x489b2b,_0x3b2175,_0x23c40e){return _0x2ea0fc(_0x489b2b,_0x3b2175,_0x23c40e);},'nRBcc':_0x3934('‫14','6&YC'),'fyHpX':function(_0x439d33,_0x2ca8bd,_0x21ae8d){return _0x439d33(_0x2ca8bd,_0x21ae8d);},'FVsqD':_0x3934('‮15','nIj8'),'tpoFX':function(_0xd9d5d0,_0x111839){return _0xd9d5d0!==_0x111839;},'GwTio':_0x3934('‫16',']PiO'),'LURjy':function(_0xca6ffa,_0x521d1f){return _0xca6ffa===_0x521d1f;},'rJdst':_0x3934('‮17','@ZWF')};try{if(_0x3934('‫18','uY#z')!==_0x4d00e3[_0x3934('‫19','v5aV')]){try{httpResult=JSON[_0x3934('‫1a','1KJJ')](resp[_0x3934('‫1b','%m12')]);}catch(_0xf2a0ad){httpResult=resp[_0x3934('‫1c','8$s5')];}}else{let _0x31aaa4=_0x3934('‮1d','1KJJ');let _0x2c3499='';let _0x161805=''+this[_0x3934('‫1e','c%&T')][_0x3934('‮1f','@ZWF')];let _0x2eca8c=_0x4d00e3[_0x3934('‫20','K^u8')](populateUrlObject,_0x31aaa4,_0x161805,_0x2c3499);delete _0x2eca8c[_0x3934('‮21','qU5w')][_0x4d00e3[_0x3934('‮22','qU5w')]];await _0x4d00e3[_0x3934('‫23','lmii')](httpRequest,_0x4d00e3[_0x3934('‫24','@ZWF')],_0x2eca8c);let _0x323665=httpResult;if(!_0x323665)return;if(_0x323665['statusCode']==0x0){if('dAakp'!=='QtEVA'){$['logAndNotify'](_0x3934('‮25','3C3O')+this[_0x3934('‮26','1KJJ')]+']早起打卡成功');}else{console['log'](e);}}else{if(_0x4d00e3['tpoFX'](_0x4d00e3[_0x3934('‮27','%m12')],_0x4d00e3[_0x3934('‫28','A5vB')])){this[_0x3934('‮29','CI^s')]=++userIdx;this['name']=this[_0x3934('‮2a','nIj8')];this['valid']=![];this[_0x3934('‮2b','8blT')]=![];try{this['param']=$[_0x3934('‮2c','LOS5')](str);this['ckValid']=!![];}catch(_0x232bc7){this[_0x3934('‮2d','qU5w')]=![];$[_0x3934('‫2e','R0^h')]('账号['+this[_0x3934('‫2f','W1Y#')]+']CK格式错误');}}else{$[_0x3934('‮30','Pc9c')]('账号['+this[_0x3934('‫31','*vu!')]+']'+_0x323665[_0x3934('‮32','@12*')]);}}}}catch(_0x484e0c){}finally{if(_0x4d00e3[_0x3934('‮33','p18x')](_0x3934('‫34','kN2n'),_0x4d00e3[_0x3934('‫35','3Fj3')])){return Promise[_0x3934('‫36','o3]Y')](0x1);}else{return Promise[_0x3934('‮37','c%&T')](0x1);}}}async[_0x3934('‮38','S@nb')](){var _0xd09a06={'rIfKd':_0x3934('‮39','qg0r'),'TZuNU':_0x3934('‫3a','dx(G'),'hhwuR':function(_0x14dee8,_0x36681b,_0x22c4ef,_0x5906bb,_0x124efc){return _0x14dee8(_0x36681b,_0x22c4ef,_0x5906bb,_0x124efc);},'SSdNj':function(_0x4fd9a1,_0x1fba6f,_0x13accd){return _0x4fd9a1(_0x1fba6f,_0x13accd);},'VVfOn':_0x3934('‫3b','3C3O'),'QCIAK':function(_0x3535b6,_0x4b519e){return _0x3535b6==_0x4b519e;},'kbUfA':function(_0x55c66e,_0x2f4984){return _0x55c66e!==_0x2f4984;},'JBfdz':_0x3934('‫3c','vOVy'),'LGXwl':_0x3934('‮3d','dx(G'),'OoSrV':function(_0x542ee7,_0x5a6535){return _0x542ee7===_0x5a6535;},'XxIbg':'SioAd','UwpKt':_0x3934('‫3e','qU5w')};try{if(_0xd09a06[_0x3934('‮3f','1KJJ')]==='ohQMw'){httpResult=resp[_0x3934('‫40','nIj8')];}else{let _0x16b57a=_0x3934('‮41','%v!j');let _0x1dc737=_0xd09a06[_0x3934('‮42','p18x')];let _0x3b4d10='26';let _0x5c817a=''+this[_0x3934('‮43','8blT')][_0x3934('‮44','eJ(R')];let _0x3598ac=_0xd09a06['hhwuR'](populateUrlObject,_0x16b57a,_0x5c817a,_0x3b4d10,_0x1dc737);await _0xd09a06[_0x3934('‫45','3KB[')](httpRequest,_0xd09a06[_0x3934('‫46','thF9')],_0x3598ac);let _0x3a123f=httpResult;if(!_0x3a123f)return;if(_0xd09a06[_0x3934('‫47','CI^s')](_0x3a123f[_0x3934('‫48','@ZWF')],0x0)){if(_0xd09a06[_0x3934('‮49','t4AM')](_0xd09a06[_0x3934('‮4a','o3]Y')],_0xd09a06[_0x3934('‮4b','S@nb')])){$['logAndNotify'](_0x3934('‮4c','a^YE')+this[_0x3934('‮4d','qU5w')]+']签到获得'+_0x3a123f[_0x3934('‫4e','c%&T')][_0x3934('‮4f','qU5w')]+'诺米');}else{return Promise[_0x3934('‮50','zAzg')](0x1);}}else{$[_0x3934('‫51','eJ(R')](_0x3934('‫52','3Fj3')+this['name']+']'+_0x3a123f[_0x3934('‮53','qU5w')]);}}}catch(_0x213913){}finally{if(_0xd09a06[_0x3934('‫54','lmii')](_0xd09a06['XxIbg'],_0xd09a06[_0x3934('‫55','XF!W')])){$[_0x3934('‫56','LOS5')](_0x3934('‮57','eJ(R')+this[_0x3934('‮58','eZ68')]+_0x3934('‫59','*vu!')+this[_0x3934('‫5a','lmii')]+_0x3934('‮5b','Pc9c'));}else{return Promise[_0x3934('‫5c','MfUW')](0x1);}}}async[_0x3934('‫5d','t4AM')](){var _0x2754fa={'CICOw':function(_0x55b762,_0x192a7e,_0x5bac9e){return _0x55b762(_0x192a7e,_0x5bac9e);},'YcZQd':_0x3934('‮5e','a^YE'),'ApOGn':function(_0x285fbb,_0x72f47,_0x56fcfd){return _0x285fbb(_0x72f47,_0x56fcfd);},'EYeij':_0x3934('‫5f','CI^s'),'JJIEm':function(_0x257591,_0x3e759f){return _0x257591==_0x3e759f;},'MQpaL':function(_0x5a2db7,_0x7afea9){return _0x5a2db7==_0x7afea9;},'ZHYtN':'2|4|5|0|1|3','NmfRn':_0x3934('‫60','uY#z')};try{let _0x23debe=_0x3934('‮61','p18x');let _0x48399a='';let _0x4256d2=''+this[_0x3934('‫62',']PiO')][_0x3934('‮63','K^u8')];let _0x1a2f7d=_0x2754fa[_0x3934('‫64','p18x')](populateUrlObject,_0x23debe,_0x4256d2);delete _0x1a2f7d[_0x3934('‮65','thF9')][_0x2754fa[_0x3934('‮66','16yu')]];await _0x2754fa['ApOGn'](httpRequest,_0x2754fa[_0x3934('‮67','8$s5')],_0x1a2f7d);let _0x45978a=httpResult;if(!_0x45978a)return;if(_0x2754fa[_0x3934('‫68','XF!W')](_0x45978a[_0x3934('‫69','kN2n')][_0x3934('‫6a','v5aV')][0x0][_0x3934('‫6b','doUY')],0x0)){this[_0x3934('‮6c','nIj8')]=_0x45978a[_0x3934('‮6d','1KJJ')]['specialTask'][0x0]['recordId'];}for(let _0x3d2bb7=0x0;_0x3d2bb7<0x5;_0x3d2bb7++){if(_0x2754fa['MQpaL'](_0x45978a[_0x3934('‮6e','Pc9c')]['allTask'][_0x3d2bb7][_0x3934('‫6f','16yu')],0x0)||-0x1){var _0x379ec4=_0x2754fa[_0x3934('‮70','CI^s')][_0x3934('‫71','v5aV')]('|'),_0xed3b3a=0x0;while(!![]){switch(_0x379ec4[_0xed3b3a++]){case'0':this[_0x3934('‫72','3KB[')]=_0x45978a['data'][_0x3934('‮73','t4AM')][_0x3d2bb7][_0x3934('‮74','thF9')];continue;case'1':await $[_0x3934('‮75','thF9')](0xbb8);continue;case'2':this['taskName']=_0x45978a[_0x3934('‫76','A5vB')][_0x3934('‫77','CI^s')][_0x3d2bb7][_0x3934('‮78','v5aV')];continue;case'3':await this[_0x3934('‮79','o3]Y')]();continue;case'4':this[_0x3934('‫7a','thF9')]=_0x45978a['data']['allTask'][_0x3d2bb7][_0x3934('‮7b','[MaY')];continue;case'5':this['awardContent']=_0x45978a[_0x3934('‮6e','Pc9c')][_0x3934('‫7c','%v!j')][_0x3d2bb7][_0x3934('‮7d','c%&T')];continue;}break;}}}}catch(_0x382284){}finally{if(_0x2754fa[_0x3934('‫7e','o3]Y')]!=='DvVfz'){return Promise[_0x3934('‫36','o3]Y')](0x1);}else{$['logAndNotify'](_0x3934('‮7f','thF9')+this['name']+_0x3934('‮80','3KB['));}}}async[_0x3934('‫81','%v!j')](){var _0x6b763c={'qqXZK':function(_0x10724b,_0x5c7842,_0x4308f5,_0x558fbd,_0xf371bb){return _0x10724b(_0x5c7842,_0x4308f5,_0x558fbd,_0xf371bb);},'jmIGt':function(_0x1532f2,_0x2e2b3e,_0x21382d){return _0x1532f2(_0x2e2b3e,_0x21382d);},'YGKjA':function(_0x47ded7,_0x270269){return _0x47ded7==_0x270269;},'TKGAA':_0x3934('‮82','8$s5'),'nCNwU':'bykEd','QiwVb':function(_0x3acc20,_0x1a0674){return _0x3acc20!==_0x1a0674;},'bhiNX':_0x3934('‮83','LOS5')};try{let _0x4985bc=_0x3934('‫84','eZ68');let _0x4f6eb6=_0x3934('‮85','t4AM')+this[_0x3934('‫86','qg0r')];let _0xe76f6b=''+this[_0x3934('‮87','p18x')][_0x3934('‫88','wWbt')];let _0x4f15b3='12';let _0x3fd57e=_0x6b763c[_0x3934('‮89','3Fj3')](populateUrlObject,_0x4985bc,_0xe76f6b,_0x4f15b3,_0x4f6eb6);await _0x6b763c['jmIGt'](httpRequest,_0x3934('‫8a','R0^h'),_0x3fd57e);let _0x515593=httpResult;if(!_0x515593)return;if(_0x6b763c['YGKjA'](_0x515593[_0x3934('‫8b','nIj8')],0x1)){if(_0x6b763c[_0x3934('‫8c','a^YE')]!==_0x6b763c[_0x3934('‫8d','16yu')]){$[_0x3934('‮8e','[MaY')]('账号['+this[_0x3934('‫8f','uY#z')]+_0x3934('‫90','[Qxi')+this['awardContent']);await $[_0x3934('‫91','a^YE')](0xbb8);this['id']=''+this[_0x3934('‮92','zAzg')];this[_0x3934('‫93','thF9')]='{this.taskName}';await this['receiveCandy']();}else{$[_0x3934('‮94','qU5w')](_0x3934('‮95','lmii')+this[_0x3934('‮96','o3]Y')]+']'+_0x515593[_0x3934('‮97','XF!W')]);}}else{$[_0x3934('‫98','%m12')]('账号['+this['name']+_0x3934('‫99','CI^s')+this[_0x3934('‮9a','@12*')]+_0x3934('‮9b','lmii'));}}catch(_0x5f3bec){}finally{if(_0x6b763c[_0x3934('‫9c','W1Y#')](_0x3934('‫9d','v5aV'),_0x6b763c[_0x3934('‫9e','@12*')])){return Promise[_0x3934('‫9f','XF!W')](0x1);}else{$['logAndNotify'](_0x3934('‮95','lmii')+this[_0x3934('‮a0','wWbt')]+']'+result['msg']);}}}async['receiveCandy'](){var _0x6f2e1d={'kbdho':function(_0x435d53,_0x2f1975,_0x2102f7,_0x17283d,_0x15bcf2){return _0x435d53(_0x2f1975,_0x2102f7,_0x17283d,_0x15bcf2);},'fJVGn':function(_0x1f8d51,_0x499562,_0x4df252){return _0x1f8d51(_0x499562,_0x4df252);},'IthCF':'post','LNpOo':'MRqIk','OjuRI':_0x3934('‫a1','eJ(R')};try{let _0x1b5d23='https://hms.cignacmb.com/activity/cignaInvestment/receiveCandy';let _0x43ed21=_0x3934('‫a2','3KB[')+this['id'];let _0x375933=''+this[_0x3934('‮a3','wWbt')][_0x3934('‮a4','o3]Y')];let _0x8df4e3='17';let _0x47d990=_0x6f2e1d[_0x3934('‫a5','o3]Y')](populateUrlObject,_0x1b5d23,_0x375933,_0x8df4e3,_0x43ed21);await _0x6f2e1d['fJVGn'](httpRequest,_0x6f2e1d[_0x3934('‫a6','S@nb')],_0x47d990);let _0x3df6ef=httpResult;if(!_0x3df6ef)return;if(_0x3df6ef[_0x3934('‫a7','8blT')]==0x0){if(_0x6f2e1d['LNpOo']===_0x6f2e1d[_0x3934('‫a8','[Qxi')]){$['logAndNotify']('❌'+_0x3df6ef[_0x3934('‫a9','%v!j')]+'\x20请检查卡密或在TG机器人\x20@CGKEYBot\x20处获取卡密');}else{await $['wait'](0xbb8);$[_0x3934('‫aa','XF!W')]('账号['+this['name']+']领取:\x20'+this[_0x3934('‮ab','dx(G')]+'\x20'+_0x3df6ef[_0x3934('‫ac','@12*')][0x0]['disposableCandyNum']+'颗糖果🍬');}}}catch(_0x1d8c32){}finally{return Promise['resolve'](0x1);}}async[_0x3934('‫ad',']PiO')](){var _0x5329fe={'dvZav':function(_0x574642,_0x1520fe,_0x57ced2,_0x149d2c){return _0x574642(_0x1520fe,_0x57ced2,_0x149d2c);},'VVHEO':_0x3934('‫ae','[MaY'),'TLNgH':function(_0x2d4759,_0x2fc80b){return _0x2d4759!==_0x2fc80b;},'tTmdn':_0x3934('‮af','CI^s'),'LNBXb':function(_0x3c8397,_0x2d53e3){return _0x3c8397>=_0x2d53e3;}};try{let _0x489f42=_0x3934('‫b0','p18x');let _0x5ed630='';let _0x5394c8=''+this[_0x3934('‫b1','8]B2')][_0x3934('‮b2','8$s5')];let _0x19ec17=_0x5329fe['dvZav'](populateUrlObject,_0x489f42,_0x5394c8,_0x5ed630);delete _0x19ec17[_0x3934('‮b3','LOS5')][_0x5329fe[_0x3934('‮b4','nIj8')]];await httpRequest(_0x3934('‫b5','kN2n'),_0x19ec17);let _0x43ec54=httpResult;if(!_0x43ec54)return;if(_0x43ec54[_0x3934('‮b6','16yu')]==0x0){if(_0x5329fe[_0x3934('‫b7','1KJJ')](_0x5329fe['tTmdn'],_0x3934('‫b8','*vu!'))){return Promise['resolve'](0x1);}else{$['logAndNotify']('账号['+this[_0x3934('‮b9','XF!W')]+']等级'+_0x43ec54[_0x3934('‫69','kN2n')][_0x3934('‮ba','8blT')]+'\x20喂养进度'+_0x43ec54[_0x3934('‫bb','a^YE')][_0x3934('‫bc','8blT')]+_0x3934('‮bd','@ZWF')+_0x43ec54[_0x3934('‮be','@ZWF')][_0x3934('‫bf','W1Y#')]+_0x3934('‮c0','c%&T'));if(_0x5329fe[_0x3934('‮c1','MfUW')](_0x43ec54[_0x3934('‮c2','*vu!')][_0x3934('‫c3','LOS5')],0x64)){await this[_0x3934('‮c4','%m12')]();}this[_0x3934('‮c5','S@nb')]=!![];this[_0x3934('‮c6','LOS5')]=!![];}}else{$['logAndNotify'](_0x3934('‫c7','16yu')+this[_0x3934('‮c8','t4AM')]+']'+_0x43ec54[_0x3934('‫c9','dx(G')]);this[_0x3934('‮ca','C[7M')]=![];this[_0x3934('‫cb','kN2n')]=![];}}catch(_0x480f87){}finally{return Promise[_0x3934('‫cc',']PiO')](0x1);}}async[_0x3934('‮cd','K^u8')](){var _0x5e74de={'ayLnt':function(_0xbf3186,_0x1b0506){return _0xbf3186!==_0x1b0506;},'ymRuf':'Content-Length','GkdeG':function(_0x4bf9ed,_0x8c3e3a,_0x3d3f5e){return _0x4bf9ed(_0x8c3e3a,_0x3d3f5e);},'GwExG':function(_0x1e22e2,_0x1a94f1){return _0x1e22e2==_0x1a94f1;},'GktUD':_0x3934('‫ce','dx(G')};try{if(_0x5e74de[_0x3934('‫cf','3Fj3')]('wcDfw',_0x3934('‫d0','CI^s'))){let _0x444388=_0x3934('‮d1','W1Y#');let _0x48b8e9='';let _0x300b19=''+this[_0x3934('‮d2','t4AM')]['Authorization'];let _0x1a8df3=populateUrlObject(_0x444388,_0x300b19);delete _0x1a8df3[_0x3934('‮d3','R0^h')][_0x5e74de[_0x3934('‮d4','wWbt')]];await _0x5e74de[_0x3934('‫d5','kN2n')](httpRequest,_0x3934('‮d6','3KB['),_0x1a8df3);let _0x4cfae0=httpResult;if(!_0x4cfae0)return;if(_0x5e74de[_0x3934('‮d7','thF9')](_0x4cfae0['statusCode'],0x0)){$[_0x3934('‮d8','qg0r')](_0x3934('‮d9','[MaY')+this[_0x3934('‫31','*vu!')]+']喂糖果:\x20'+_0x4cfae0[_0x3934('‮da','@ZWF')]);}else{$[_0x3934('‫aa','XF!W')]('账号['+this['name']+']'+_0x4cfae0['msg']);}}else{$[_0x3934('‮db','v5aV')](_0x3934('‮dc','@ZWF')+this['name']+']'+result[_0x3934('‫dd','8blT')]);this[_0x3934('‮de','%m12')]=![];this[_0x3934('‮df','dx(G')]=![];}}catch(_0x1655ad){}finally{if(_0x5e74de[_0x3934('‮e0','[Qxi')](_0x3934('‮e1','zAzg'),_0x5e74de[_0x3934('‮e2','8]B2')])){return Promise['resolve'](0x1);}else{this[_0x3934('‫e3','1KJJ')]=result[_0x3934('‮6d','1KJJ')][_0x3934('‫e4','kN2n')][0x0][_0x3934('‮e5','8]B2')];}}}async[_0x3934('‮c4','%m12')](){var _0xe3f622={'cHrni':'lJmXY','wVfJM':_0x3934('‮e6','1KJJ'),'BEQSW':function(_0x495ae1,_0x578541,_0x2d06b4){return _0x495ae1(_0x578541,_0x2d06b4);}};try{if('lJmXY'===_0xe3f622['cHrni']){let _0x2e5a09='https://hms.cignacmb.com/activity/cignaInvestment/receiveNaomi';let _0x24c878='';let _0x523ae0=''+this['param'][_0x3934('‮63','K^u8')];let _0x201ac0=populateUrlObject(_0x2e5a09,_0x523ae0);delete _0x201ac0[_0x3934('‫e7','MfUW')][_0xe3f622[_0x3934('‫e8','v5aV')]];await _0xe3f622[_0x3934('‫e9','6&YC')](httpRequest,_0x3934('‫ea','CI^s'),_0x201ac0);let _0x299cae=httpResult;if(!_0x299cae)return;$[_0x3934('‮30','Pc9c')](_0x3934('‫eb','uY#z')+this['name']+_0x3934('‫ec','dx(G')+_0x299cae[_0x3934('‮ed','K^u8')]);}else{return Promise[_0x3934('‮ee','Pc9c')](0x1);}}catch(_0x4d6aec){}finally{return Promise[_0x3934('‫ef','[Qxi')](0x1);}}async['Month'](){var _0x414c13={'jAdGr':function(_0x532b40,_0xc98ebb){return _0x532b40===_0xc98ebb;},'LkaKt':_0x3934('‫f0','1KJJ'),'rgzxU':_0x3934('‫f1','KCeS')};try{if(_0x414c13[_0x3934('‫f2','[MaY')](_0x414c13['LkaKt'],_0x414c13[_0x3934('‫f3','MfUW')])){let _0x50208b='https://member.cignacmb.com/shop/member/interface/queryScoreStatisticsMonth';let _0x3eeb93=_0x3934('‫f4','A5vB');let _0x4913c4=''+this[_0x3934('‫f5','Pc9c')]['Authorization'];let _0xad4ebf='12';let _0x553a5f=populateUrlObject(_0x50208b,_0x4913c4,_0xad4ebf,_0x3eeb93);await httpRequest(_0x414c13[_0x3934('‮f6','o3]Y')],_0x553a5f);let _0xa5f543=httpResult;if(!_0xa5f543)return;$[_0x3934('‮f7','A5vB')](_0x3934('‮f8','dx(G')+this[_0x3934('‫f9','thF9')]+']现有诺米：'+_0xa5f543['respData']['totalScore']);for(let _0x46752c=0x0;_0x46752c<0xa;_0x46752c++){await this['ShopList']();}}else{return Promise['resolve'](0x1);}}catch(_0x1d19f6){}finally{return Promise['resolve'](0x1);}}async[_0x3934('‫fa','vOVy')](){var _0x4d90ed={'MhVYy':'210','iUBnZ':function(_0x510f12,_0x164942,_0x382ed7,_0x3013ef,_0x5a7443){return _0x510f12(_0x164942,_0x382ed7,_0x3013ef,_0x5a7443);},'hiiYA':function(_0x9371ee,_0x13fb09,_0x54d217){return _0x9371ee(_0x13fb09,_0x54d217);},'AQsOV':'post'};try{let _0x110128=_0x3934('‮fb','%m12');let _0x37325b=''+list;let _0x489e7f=''+this[_0x3934('‮fc','16yu')][_0x3934('‮a4','o3]Y')];let _0x5347fe=_0x4d90ed[_0x3934('‮fd','@ZWF')];let _0x3f2ca7=_0x4d90ed['iUBnZ'](populateUrlObject,_0x110128,_0x489e7f,_0x5347fe,_0x37325b);await _0x4d90ed[_0x3934('‫fe','[Qxi')](httpRequest,_0x4d90ed['AQsOV'],_0x3f2ca7);let _0x5922c2=httpResult;if(!_0x5922c2)return;$[_0x3934('‮db','v5aV')](_0x3934('‫ff','K^u8')+this['name']+']'+_0x5922c2['respData']['productList'][num]['productName']+'\x20需要'+_0x5922c2['respData'][_0x3934('‮100','MfUW')][num][_0x3934('‫101','LOS5')]+_0x3934('‮102','6&YC')+_0x5922c2[_0x3934('‫103','C[7M')]['productList'][num][_0x3934('‮104','dx(G')]);num++;}catch(_0x3ce721){}finally{return Promise[_0x3934('‮105','3KB[')](0x1);}}}!(async()=>{var _0x262ef0={'IZHWj':function(_0x2015a0,_0x2c453e){return _0x2015a0!==_0x2c453e;},'zwBei':function(_0x29eeab){return _0x29eeab();},'TUzqJ':function(_0x49fc5a,_0x1c71fe){return _0x49fc5a>_0x1c71fe;},'qILAf':_0x3934('‫106','*vu!'),'JoKcF':function(_0xca4438,_0x29edd9){return _0xca4438===_0x29edd9;},'HbxZe':_0x3934('‫107','t4AM'),'DUESl':'AraYM','HkWJS':'\x0a--------------\x20双签、喂养、浏览\x20--------------','YfeqB':'7|3|4|0|1|5|6|2','qofkY':function(_0x11702d,_0x106183){return _0x11702d>=_0x106183;},'qpCUV':function(_0x2839d9,_0x5b9cec){return _0x2839d9<_0x5b9cec;}};if(_0x262ef0['IZHWj'](typeof $request,_0x3934('‮108','8blT'))){}else{if(_0x262ef0[_0x3934('‮109','wWbt')](_0x3934('‮10a','v5aV'),'kqBJU')){$[_0x3934('‫10b',']PiO')]('通知区：\x0a\x0a⚠️有定时任务务必在6-8点运行一次\x0a');await _0x262ef0['zwBei'](km);if(!(await checkEnv()))return;let _0x1c8b3b=[];let _0x1cff1d=userList['filter'](_0x1963d6=>_0x1963d6['ckValid']);if(_0x262ef0['TUzqJ'](_0x1cff1d['length'],0x0)){$[_0x3934('‫10c','p18x')](_0x262ef0['qILAf']);_0x1c8b3b=[];for(let _0x473e32 of _0x1cff1d){if('mkhxD'!==_0x3934('‫10d','kN2n')){return Promise['resolve'](0x1);}else{_0x1c8b3b[_0x3934('‮10e','CI^s')](_0x473e32['initializeUserInfo']());}}await Promise[_0x3934('‮10f','Pc9c')](_0x1c8b3b);_0x1cff1d=_0x1cff1d[_0x3934('‫110','th#r')](_0x622ce=>_0x622ce[_0x3934('‮ca','C[7M')]);if(_0x1cff1d[_0x3934('‮111','C[7M')]>0x0){if(_0x262ef0[_0x3934('‫112','3KB[')](_0x262ef0['HbxZe'],_0x262ef0[_0x3934('‮113','qU5w')])){_0x1c8b3b[_0x3934('‮114','LOS5')](user[_0x3934('‮115','[MaY')]());}else{$[_0x3934('‫56','LOS5')](_0x262ef0[_0x3934('‫116','W1Y#')]);_0x1c8b3b=[];for(let _0x83ac22 of _0x1cff1d[_0x3934('‮117','3Fj3')](_0x349f44=>_0x349f44['canRead'])){var _0x41606b=_0x262ef0[_0x3934('‮118',']PiO')][_0x3934('‮119','zAzg')]('|'),_0xbf15f0=0x0;while(!![]){switch(_0x41606b[_0xbf15f0++]){case'0':await $[_0x3934('‫11a','th#r')](0xbb8);continue;case'1':_0x1c8b3b['push'](_0x83ac22[_0x3934('‮11b','[MaY')]());continue;case'2':if(_0x262ef0['qofkY'](h,0x6)&&_0x262ef0[_0x3934('‮11c','@12*')](h,0x8)){_0x1c8b3b[_0x3934('‮11d','8]B2')](_0x83ac22[_0x3934('‮11e','W1Y#')]());await $[_0x3934('‫11f','XF!W')](0xbb8);_0x1c8b3b[_0x3934('‫120','@12*')](_0x83ac22[_0x3934('‫121','zAzg')]());}continue;case'3':await $['wait'](0xbb8);continue;case'4':_0x1c8b3b[_0x3934('‫122','K^u8')](_0x83ac22[_0x3934('‮123','8]B2')]());continue;case'5':await $[_0x3934('‮124','Pc9c')](0xbb8);continue;case'6':h=local_hours();continue;case'7':_0x1c8b3b[_0x3934('‮10e','CI^s')](_0x83ac22[_0x3934('‮125','1KJJ')]());continue;}break;}}await Promise['all'](_0x1c8b3b);}}}await $['showmsg']();}else{httpResult=JSON[_0x3934('‫126','Pc9c')](resp[_0x3934('‫127','8blT')]);}}})()[_0x3934('‫128','K^u8')](_0xf463c7=>console[_0x3934('‫129','kN2n')](_0xf463c7))[_0x3934('‮12a','[Qxi')](()=>$[_0x3934('‫12b','zAzg')]());async function km(){var _0x53a0db={'bFacQ':function(_0xb653c4,_0x48ace8){return _0xb653c4!==_0x48ace8;},'JwBjE':_0x3934('‫12c','doUY'),'EKily':_0x3934('‮12d','qU5w'),'Vfgna':function(_0x21c7cb,_0x49a057,_0x5dfaf4){return _0x21c7cb(_0x49a057,_0x5dfaf4);},'IleGe':function(_0x4d3073,_0x3cc35c,_0x2577ba){return _0x4d3073(_0x3cc35c,_0x2577ba);},'rrZfd':_0x3934('‫12e','16yu'),'BMDPx':function(_0x1c4d4d,_0x26e8cf){return _0x1c4d4d==_0x26e8cf;},'EBKXU':'4|1|3|2|5|0','EXOtg':function(_0x539a10,_0x5ce125){return _0x539a10(_0x5ce125);},'kKBQM':function(_0x5d0170,_0x3f2fbf){return _0x5d0170===_0x3f2fbf;},'xudEK':'pgJSD','SLSbS':function(_0x68bfb3,_0x2cf9eb){return _0x68bfb3==_0x2cf9eb;}};try{if(_0x53a0db[_0x3934('‮12f','8$s5')](_0x53a0db[_0x3934('‫130','doUY')],_0x53a0db[_0x3934('‫131','[MaY')])){let _0x259f8f='http://km.meetclover.ml/api.php?act=km_logon&app=10001&kami='+userCGkey+'&uuid='+uuid;let _0x449748='';let _0x3a8f7c=_0x53a0db['Vfgna'](populateUrlObject,_0x259f8f,_0x449748);await _0x53a0db[_0x3934('‮132','qU5w')](httpRequest,_0x53a0db['rrZfd'],_0x3a8f7c);delete _0x3a8f7c['headers'][_0x3934('‫133','qg0r')];delete _0x3a8f7c['headers'][_0x3934('‫134','zAzg')];let _0x97a941=httpResult;if(_0x53a0db[_0x3934('‫135','6&YC')](_0x97a941[_0x3934('‫136','th#r')],0xc8)){var _0x8c5948=_0x53a0db[_0x3934('‫137','nIj8')][_0x3934('‮138','A5vB')]('|'),_0x337e59=0x0;while(!![]){switch(_0x8c5948[_0x337e59++]){case'0':this['canRead']=!![];continue;case'1':this[_0x3934('‫139',']PiO')]=_0x53a0db[_0x3934('‫13a','wWbt')](timestampToTime,this[_0x3934('‮13b','3KB[')]);continue;case'2':await $[_0x3934('‮13c','p18x')](0xbb8);continue;case'3':$[_0x3934('‮13d','*vu!')](_0x3934('‮13e','kN2n')+this['time1']);continue;case'4':this[_0x3934('‫13f','dx(G')]=_0x97a941[_0x3934('‫140','p18x')]['vip'];continue;case'5':this[_0x3934('‮141','eJ(R')]=!![];continue;}break;}}if(_0x97a941[_0x3934('‫142','6&YC')]==0x95||_0x53a0db['BMDPx'](_0x97a941['code'],0x94)||_0x97a941['code']==0x70){if(_0x53a0db[_0x3934('‫143','W1Y#')](_0x3934('‫144','LOS5'),_0x53a0db[_0x3934('‫145','nIj8')])){$['logAndNotify']('❌'+_0x97a941['msg']+'\x20请检查卡密或在TG机器人\x20@CGKEYBot\x20处获取卡密');}else{$['logAndNotify']('账号['+this[_0x3934('‫146','Pc9c')]+_0x3934('‫147','t4AM')+_0x97a941[_0x3934('‮148','nIj8')]);}}if(_0x53a0db[_0x3934('‫149','vOVy')](_0x97a941[_0x3934('‮14a','MfUW')],0x192)){$[_0x3934('‫10c','p18x')]('❌'+_0x97a941[_0x3934('‫14b',']PiO')]+_0x3934('‮14c','R0^h'));}}else{return Promise[_0x3934('‫14d','CI^s')](0x1);}}catch(_0x5c080b){}finally{return Promise[_0x3934('‫14e','v5aV')](0x1);}}async function checkEnv(){var _0x4113a5={'LQHlk':function(_0x2fed29,_0x5f3b15){return _0x2fed29===_0x5f3b15;},'rlygG':'NShHE','QBHJd':function(_0x10b75e,_0x4f7754){return _0x10b75e>_0x4f7754;},'PnoOB':_0x3934('‫14f','8blT')};if(userCookie){let _0x5bcb56=envSplitor[0x0];for(let _0x4f7401 of envSplitor){if(_0x4113a5[_0x3934('‫150','o3]Y')](_0x4113a5[_0x3934('‮151','nIj8')],_0x4113a5['rlygG'])){if(_0x4113a5[_0x3934('‮152','v5aV')](userCookie['indexOf'](_0x4f7401),-0x1)){_0x5bcb56=_0x4f7401;break;}}else{this[_0x3934('‫153','qU5w')]=$['str2json'](str);this[_0x3934('‮154','[MaY')]=!![];}}for(let _0x1091f3 of userCookie['split'](_0x5bcb56)){if(_0x1091f3)userList[_0x3934('‫155','zAzg')](new UserInfo(_0x1091f3));}userCount=userList[_0x3934('‫156','KCeS')];}else{console['log'](_0x4113a5['PnoOB']);return;}console[_0x3934('‫157','@12*')](_0x3934('‫158','v5aV')+userCount+_0x3934('‮159','Pc9c'));return!![];}function populateUrlObject(_0x2b8d81,_0x305a00,_0x4001bd,_0x484642=''){var _0x23bb41={'byrkJ':function(_0x2b229b,_0xd36b14){return _0x2b229b===_0xd36b14;},'hMxUq':_0x3934('‮15a','o3]Y'),'IuXua':_0x3934('‫15b',']PiO'),'OKJeG':_0x3934('‫15c','wWbt')};let _0x4361ac=_0x2b8d81[_0x3934('‮15d','o3]Y')]('//','/')[_0x3934('‫15e','o3]Y')]('/')[0x1];let _0x18a8d3={'url':_0x2b8d81,'headers':{'Host':_0x4361ac,'Content-Length':_0x4001bd,'Authorization':_0x305a00,'User-Agent':defaultUA,'Content-Type':_0x3934('‫15f','eZ68')},'timeout':0x1388};if(_0x484642){if(_0x23bb41[_0x3934('‮160','a^YE')]('sYHOu','sYHOu')){_0x18a8d3[_0x3934('‮161','16yu')]=_0x484642;_0x18a8d3[_0x3934('‮162','K^u8')][_0x23bb41[_0x3934('‮163','lmii')]]=_0x23bb41[_0x3934('‮164','C[7M')];_0x18a8d3[_0x3934('‫165','kN2n')][_0x23bb41[_0x3934('‮166','@ZWF')]]=_0x18a8d3[_0x3934('‮167','R0^h')]?_0x18a8d3[_0x3934('‮168','%v!j')][_0x3934('‮169','zAzg')]:0x0;}else{return Promise[_0x3934('‫16a','K^u8')](0x1);}}return _0x18a8d3;}async function httpRequest(_0x10be2f,_0x7e1c60){var _0x417026={'kxyqZ':_0x3934('‮16b','%v!j'),'ntPdD':function(_0x3190bc,_0x57722b){return _0x3190bc===_0x57722b;},'SyqTf':'rSBKa','SXyzh':function(_0x8e6c6b,_0x4cdff0){return _0x8e6c6b!==_0x4cdff0;},'tUVVV':_0x3934('‫16c','KCeS')};httpResult=null,httpReq=null,httpResp=null;return new Promise(_0x453bf6=>{var _0xed49d0={'FZRUV':_0x417026[_0x3934('‮16d','W1Y#')],'pbLZe':function(_0x925a93,_0x3e6103){return _0x417026[_0x3934('‫16e','dx(G')](_0x925a93,_0x3e6103);},'JpIxS':_0x417026[_0x3934('‫16f','t4AM')]};if(_0x417026[_0x3934('‮170','doUY')]('xLEoN',_0x417026[_0x3934('‫171','1KJJ')])){$[_0x3934('‫172','K^u8')](_0x10be2f,_0x7e1c60,async(_0x4dd7a9,_0x506fbc,_0x19d6c4)=>{if(_0xed49d0[_0x3934('‫173','16yu')]!==_0xed49d0[_0x3934('‮174','vOVy')]){$[_0x3934('‮175','8$s5')](_0x3934('‫176','qU5w')+this[_0x3934('‫177','W1Y#')]+_0x3934('‫178','1KJJ')+result[_0x3934('‮179','Pc9c')]['signScore']+'诺米');}else{try{httpReq=_0x506fbc;httpResp=_0x19d6c4;if(_0x4dd7a9){console[_0x3934('‫17a','zAzg')](_0x10be2f+_0x3934('‮17b','8blT'));console[_0x3934('‮17c','%m12')](JSON[_0x3934('‮17d','*vu!')](_0x4dd7a9));}else{if(_0xed49d0[_0x3934('‮17e','S@nb')](_0x3934('‫17f','Pc9c'),_0xed49d0[_0x3934('‫180','%v!j')])){httpResult=_0x19d6c4['body'];}else{if(_0x19d6c4[_0x3934('‮181','S@nb')]){if(typeof _0x19d6c4[_0x3934('‫182','zAzg')]=='object'){httpResult=_0x19d6c4['body'];}else{try{httpResult=JSON['parse'](_0x19d6c4['body']);}catch(_0x5cf2ae){httpResult=_0x19d6c4[_0x3934('‮183','KCeS')];}}}}}}catch(_0x3b6e25){console[_0x3934('‮184','8blT')](_0x3b6e25);}finally{_0x453bf6();}}});}else{return Promise[_0x3934('‫185','S@nb')](0x1);}});};_0xodE='jsjiami.com.v6';
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