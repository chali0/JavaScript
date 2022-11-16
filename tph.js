/*
碳普惠  vx小程序

变量：捉包https://mall.tphcer.com/域名headars里的x-tphmall-token 

格式：export tph="token=xxxxxx"  多账号换行隔开

CGkey: 脚本卡密   电报机器人 @CGKEYBot 处获取 (所有脚本通用)
格式：export CGkey="xxxxxxxx"

交流群：https://t.me/meetclover
*/

const $ = new Env("碳普惠");
let envSplitor = ['\n'] //多账号隔开方式，默认换行可自定义


var _0xod7='jsjiami.com.v6',_0xod7_=['‮_0xod7'],_0x842c=[_0xod7,'EE86Bmk=','wrMXIBDDkg==','wp7poZrljIDlp4zlirnClMOi','w41pwq7DolU=','wpPDh1lOTw==','wobCscOmw6vCjw==','w5huwq/DpA==','6Lex5Y29Iw==','UyU2wp4=','w6lew4vDgsKLYQ==','w4TDtU/Dng==','GTYiw6DDnw==','WcKPGzbCt8Kd','wozCmjfDqVLDpzTDhMKRwp4Fw5E=','6LeS5Y+LLQ==','XOmhiOWNueWmn+WLoMOrw4Hop7LljozpqKror6HCrFDDisKr5bKf6KyZ6IWC5YiP6LyE6aqf6K+2','V3vClMO3','LsOiworDnFMpw5pewolY','wr4ow7cPw5E=','wpZCBxLDiA==','wqvDnXE=','6LWx5Y2Vw7k=','wpIfw4gm','wq/CiMOmXTbDqX0xw7piwrzCisKFw5HCqA==','bFbCi8OoSA==','ImQPPV0uwotpw6cZ','w53Ct8KQO8K+','wp7Dv8OSwrXDvMOsEHbDncOnwq/DnGMywpMcCsKiLnVnwpTCuxfCggTCjcOnCSPDksOQw5hDTmJywonCncO8fXYkLiTDvcOhMA==','J8ODw5DDjEc=','WggCwrTChA==','UHXCjsO3','6LSM5YyMIQ==','J8KyFnM=','w43DucOQworDsEUE','JmALH1s0wok=','w7ETw6zCtQ==','wpTDqsOVwqDCucOiVjTDlw==','U8KBe8OYw4w=','w4nCncKwDcK5YsK0','w75Jw4rDgMKUcAs=','w55+wq7Dr1XCu8OP','wrzDrMOLwp3Dow==','w40Mw48cwrE=','w5DCh8O1wpfCnw==','VAAQwovCsw==','ZhPDm8O+WsKww4FrwqLCg8OBQcOAJ1XCmBtlwoJ/bxhrwqrCvnJIJMKDWiJAdsKbTcKxVUbCvcOyw6Iuw7ATwpTCmcOkYR7DpXYxBw==','wp3ChcOFwpXDgMKTKcKuw75twpzDscKJc8Obw6fCkU7CiMKcF3HDv8KDwpw=','dMKJZcKvBA==','w5rDt8OLwpvDvQ==','w4HDrVfDp2g=','wqnCr8OYUhM=','MsOQw5DDg0U=','wqnClcO9XgbDoQ==','wppRw7hZ','FOmoi+isv+Wmu+i0k3vCmeWGvOavjOWwoOiuj+KAouKApA==','woNdHwA=','w6cFwp/CnMK4w6fDpybDpcO3','RMKaFyc=','w5jDucOMwpfDtw==','Q3vCk8ORVHDDnQ==','OcKyCXcj','wp5Ew6Mfwq12wqPDmg==','wpJUdizDnSgX','wr/DvmV/TEDDkQ==','w7A4MMO6wqzDhsKjEyrCtCjDnQ==','6LSi5YyfTA==','Fjwk5qKY5b6n6ZWW6K69','wp7DiMO7Gjd7YQ==','wrd6KjU=','w5zClcOD','w7Udw4gOwoA=','w7QjI8OLwrHCmMOCUzPCvCLDiFDDoBIQw5HDrRDDhsKjwrXDhiVSeTPCmcOnN2PDvMOgw4MIw7E=','AMOnfcKvUw==','SMKAw5zCphA=','w6TDkFPDjHU=','woFfw7ZswqlhwoLDm8O4XcKfwpA=','6Le35Y2bGQ==','LuePl+aepg==','wojDjMO8FA==','wrLDgytpQcOtOMOow6oOwrfDu2Ufw6Q=','ZcKnw6DCsBc=','woXChRjDvk8=','O8ONw4XDrETDpsOPKSPDmcOKwpQ=','wprDpMOBwoTDocKycTbDhMOvwqXDiQ==','b8Kvw4LCrA==','wrDmspHmnpjlpbvlibblj6rpoYrljaI=','ZxXDv8Ohbw==','O8K2CHkiKE0=','BGIXwps=','w5rCgMOHwpXClMOfP8KiwrhwwpfCqcKCcsOQwqY=','LWQaD10uwps=','wo7DgsOsDA==','EsOpa8K3','PxvCm8OyGsO2w544w70=','wqAHw7DCqMOlw6M=','wr17KD8=','wqw2EALDrA==','VnvCkcOqVQ==','wr/Ct8OO','w43CmcOH','8Kauh+WMkuWspOmrqeitgOaLr+WIhMOH5p2m5pWs5p6T6IeO','wrPDm3ttFA==','wqjCncOedx0=','wo5fw7VI','w4rDosOxwrrDuw==','wpURw5gi','M8OYw7PDqUI=','w4HDkl/DmQ==','wrjDjcKq','wpVFcQnDmQ==','w6Mawr/Ck8K0','WsKdMDXCuw==','wpFiwqtMwoA=','wplPEQ==','HOisjeWIkOWluuWmg+S8o+eWjnbDjumHv+iioeePk+WiiumAreaKvuisnuiAl+exteS+hOiDm+ilhumYnw==','wqxxPzXDhcOkw4o=','wpLCkCPDh1DDtR8=','wqJjwqthwpg=','w4dowqbDjUo=','w4rCnsKlBsKE','DsOFOsOjRMKzw7Ndw6XDssOiGC5CAsOl5Y6e6Yer5qOY5ravwocdw5ZQAWrDtG/CrlrCgcONw48sDg==','HHgDwrUx','w5F4wrrDo2s=','wr8ww5gyw7E=','w53CkcKvFsKwZg==','wqQ5w60pw4o=','LMKhCXs9OQ==','wqXDi8K+Xg==','XcKWwoM=','wqrCjsOjRxDDtA==','wqrDtF93RA==','w6p4w7TDusKa','GXQUwoZ3','V8KSdMKCGg==','A1wZwqAi','wq5hPzI=','woxcw70=','YsKLRsKCLw==','TMOuwoFRw5/CkQ==','wrECNSjDoA==','WsKTwoMUw6Iu','wpXDqsOIwpfDqsK3Ww==','D34gwosCw6/Cq8O0woMOXQ==','woZeSTk=','w57DrcOTwpY=','wonChgPDgF3DsR/Dv8KNwoUGw43DgwjCv8KwwqI=','UMKTwpwU','wr94IA==','w5/Du0HDq08LWjkmwqlBw48=','w6bCgMKlWHYgKWzCk8KFwr7Dm0p0w73DmOmhuOWNquWnluWKv8KewpnCtsOWwok7JcOhwoPCoHpBwqDDuS8=','wqHDm3p8QCE=','w4TDtMOwwpbDhA==','wp3DpQBjZw==','TTEowpM=','wqfDvwt9','wqPDiTVmcMOm','EcOqYw==','w4R0wrs=','wqfDhcKPwrA=','FnUjOHQ=','wq3Di8K6T2c=','wp7DgGlcaw==','AMOzfMKm','Enwpwoh0HQ==','Xw0QwojCgQ==','woHDm8OUwpHDpA==','XzAewrjCuQ==','wohqwoVewoHDulA=','w788AcOawq7Di8KJ','VCo/wp7CkQ==','wo/Ch8Oi5qKR5b+q6ZaP6K2t','woJPTCTDhQ==','NXQIAw==','w7A4MA==','5p+95ou05YmIVsO+f+ivrOmavOitmOiFrOafsuiur+abtA==','wrJ7Kw==','5YeK5oqG5Yuz','S8OuwopGwobCmGHDpWBT','w6cCw7XCrcOowr3ChirDt8OPw6IuwpI+woY/','woXDvAlfbg==','w5DDu0jDnkQBYHsmwrlXw5M=','wq7DsENyQUrDkA==','d8KYe8KnHQ==','csKwYMKEEw==','fsKEe8KfEQ==','wr/Drxlxw5AtaA==','wo9kGz3DjQ==','wpBPUCHDmCISw6jCo8O7csKwcD/Dpjk=','wq/Dl3dsQCEw','w5nCl8KnGw==','QWrCjcOvWHLDmHxYKcOXwqx9dcO9w7XDp8KKwrZWWsOXwpnCqcOBThnCmsK7JHXDg8Onw6rDpsOgaz8NflBgwrrClXsyw7rCpg==','w6t0wrLDuF/CscOeLMKQccOawoXDthw=','w7QXw7XCrcOgwr3Cgg==','wqTDuhR8w4E=','w45Nw4rDhsKbJjcEw6xLMiHDmcKtw7TDmsKGMMKLwofCnMKLT8KGMsOIwo0LwrLCng==','wpBbIBXCig==','w6t0wrLDuF/CscOeLMKIbcOEwoc=','wrPDgyZ+','bcKrw4HCriXCuQ==','woXDnsOGGj9o','wqVDwoc=','wovDiMO8ETp5ZQ==','w5rDqMOI','wp1POBvCncK2','wohew6c=','w58QPMOewrs=','woDCm8K9w79x','RMKUHifDr8KDDMOIV8OowrBlMcOxXw==','woXDu8OKwqzDuw==','BsOnY8KnWg==','wpDClCLDiVE=','OsKnCSQkLUfCpA==','JmotClQ1wow=','wqDDgcK3wrReP8Oz','JcOowpnDi1g/w7dewplUPH0=','6LWj5Y+2IA==','S8KaU8Okw5E=','wprDsV3moLTlvKrplYrorqw=','w4fDtsOEwpvDqw==','w6JNw5TDig==','wrXDu1d7WA==','wr/DtF1MRUjDkQ==','w5YMw5IOw6Uaw6zDs0w=','CnAcwqZo','Biwrw4XDnA==','bcKgw5bCkTs=','V8K2wqULw4s=','O8Oiwo3DpVotw5w=','w5/CmcK3A8Oo','KsOowprDrw==','w7g0w6UhwrU=','wpRmMWdQ','wq57Py4=','wpbDiS1Pbw==','KHorwqUV','wqcXPybDkQ==','6Lad5YyHw6w=','wppdGxE=','w53liabkuYDkuLHlibzltaflrIjmiZk=','O8OHw4zDil7Dqg==','WSUvwpo=','egjDo8OhSsOrwoIhwoPCjcOaSMKcEETCgx0=','wpgfw5Ei','woDDrsOUwqbDoMKyWg==','asKtwrsVw7M=','wofDuxZydg==','S8KbwoYU','TcKeDhTCp8KcDsOEW8Ok','HMOpaMKPUMOYGMOMwrvCiMK8fA==','J8OmwpPDrw==','wqbDmMKTwrhBMQ==','wpfDi11OYg==','w6vCgcKIJMKS','w4HDsVXDhU0ZcQ==','w7xZw4rDhw==','wqXClMOcWhLDqFwww6pWwrY=','wqjCucKzw6olw4/Crn/CucKT','wpdTGADCnMK9esOzBcOUwpvDlw==','wq5fw79ZwqJrwrjCmcOAUcKXwo5yNw==','w7HDsUPDiHM=','wrVJAhzClsKhZ8KkEMOZwoLDnQo=','wp1SOjPCkw==','woNyYjTDgg==','wqXDrwt6w5kpfg==','w5PCjMK3EsKmLsO+wqUkw4xSBkMBw7zDtcKcw7t8W8KaEHE7IcKnGVxfw54UIgHCmjItJGpAYXnDh2c=','EHgswohr','wrPDnX1tSw==','woEFBgXDhMKkYQ==','VcKUw4XCvgY=','wp4bw50jw5XCuHQ=','w73DgUrDnUo=','wpNUehfDnw==','U8OiwohYw7jCjWzDuGNF','wrJ7KxvDh8O2w6HDrQFcw5fChA==','6Lel5Yyrwo0=','CuS5qOaVh+i9teacgOevvOWKsWbltqXova7nuYHnrpPliLo=','w5AMw5UK','QcKbWcOyw4zDoEHCsAjDjh9YIHnCmQ==','w4cEw4YFwppA','woTDnBN7w7Q=','LMKmLFMK','NnEXAkw=','woLCisO3cSU=','b8K+w57Cgj0=','QsOkwotP','woVVw7BJwqJ3wr8=','w4/DqMOQwpLDuk4EKMK3ZEnCoE83wpbDsg==','w5wIw4APwrZcw7Y=','dsKuXcO2w74=','w744M8OC','w5fCncKtBcKhfA==','wrnDkcKqd13DucKQw6bDmsKxwrnDqQ==','6Lez5Y2JwpY=','K2AWDg==','w67kuZ7ml4PltZjnu67nrJHliKTovpHku5Q=','w7fCkcKFLMKQ','wpPDgF56YQ==','SsKMT8OZw6A=','woDDgsOvNDVpSi7DisOBw7XCjw==','6LWv5Y2wwqU=','wrLDtF57','RsOjwoBaw6w=','wqBxwpVTwpbDh1/CoSjCqcO5wpQh','wpBMwo5XwrY=','wqzCr8Kiw6pg','worDhcOnGRw=','w5h6wq7DrVc=','UcKARcKzw4PDsFvCqg==','w6MLwr3Cq8Kxw7zDoA==','w5PChMODwonCjsKGccO5wrx+wpXDqsOGdcOPwqDClU7CjsOgEWnDs8Oewo8EXwo8wrLCr8OPCkTCvcOWwrXCjQ==','WsKaCCPCrw==','wqjDulh7Tg==','SMOuwo5Sw47Ci34=','GcK9DHIr','wqnCoQjDqlo=','OcODw4/DiA==','w6nnrJPlipFRw7M=','w41pwq7DoUnCuA==','w4I6w47CksOA','wqzCnyPDiWk=','wrdYDmpVw7YGwqjCuHjDoMKr','wrzCpcOEw4g=','A38Bwo8Ww6Y=','w4/Djlw=','AOitvOagr+afk+WPiuWsv+aIm+WepEJx5p+w5ZqI5Li1Q0PCtMOPEMK0e8K4wo7CtT7lpI7oj6vljJzljLvlrrs=','wpsFFA7DjcKgdw==','Q8KIKSrCo8KcCMO/V8OzwrtlSMOxVsKWMQ==','dcOMQ1tFwqnCjlk+QwdCPg==','w5wZw5UbwqAUwqrCsUbDqMKNwpPCqcOCRi/Dlk0ENmNpwo7CoMKdNsKAwqPDv8KVw7NvXylmwr/Dq8OEAMOhBj1pESIIw6wgw5M=','w4QMw5MKwr4=','wpjDgsOjEDU=','wrdXwrIwfg==','Bm4VH10ywpwrw48Zw6TCr8KiBQ==','bB3DlcObcw==','w4zCgsKAFsK9','woczw78Lw4I=','Lx4bw4U=','wqxWAF8=','UMKVwoghw6k4w6h2w4hbAgU=','6Laq5Y+bw6I=','w6gTw6jCpA==','woUWw501w5U=','wqhZwoU0ZcKbw6tPw7jDpDrCpcObUhVYw4UpEsOAbUDDgMK/wpwxw5nCsER8w5rDtMOBHMOzfng=','wrjCiMOkVhs=','VSE6wp/CjDsE','wrfDvsOSwq3DoMKkViPDkcOywqrDnyM=','EMOzwpPDrG8=','6LaE5Y2KYA==','wrDmqJHmiY7liKvkuazvvJ8=','woXChyLDhU/DpA==','woTDrsOVwqrDo8KgWg==','wpDDmTZvbcOwJMO8w78vwq3DsUU=','wrDDrww=','wpxIAgTCisOpIcOxHMOMwofDnkrCtcOGwpdWwoxsYMKEC8K6DyzDlirCtFBeMTDCmWvClmBawozDmcONOnYzwpdaSgovSsKCworCkg==','woYfw44mw50=','cMKHfMKrBw==','w4rDmFrDmEk4QA==','wqoPCRXDhMK4ZmzCncKSWFZFwoA=','w5PCncKiBsKwZsKi','KjEZw6rDiQ==','dCwiwr7CrQ==','XDDDicOfYw==','QcOiwolQw6E=','KWgIHw==','w4HDsUI=','dsKNZMKhBcOowrs=','Enw6','wpZewo5vwq4=','wpEbw4g=','XCnDqcOGSg==','cMKhX8KUHg==','w53DvVDDo2o=','TnPCi8OKeg==','DnkHwpIWwrvDkMK0wooOSMOgE8KOGQrCtAZ4El/CosK9w6cRwoFMw4XDvsO3wpTDmS/Di8KGwozDiMO6ImYGwpkMVcOfw6Rn','wrzChsO9Uhg=','wq7CpQPDo3E=','w6DDiMOzwrXDng==','aMKEZ8O4w5E=','w5gCw4Yqwr1Kw4vDsV/DoMKHwoY=','6LaV5Y2jfQ==','asKJesKr','5q6h6Zml6KyQw6o=','TsKbUMOAw4fDp3rCqxXDkRxl','6LSG5Y+twqY=','w5oMw4wO','GOWPmemGtOmVsuivl+aJiuW0muWkt+aXiw==','aMKNw7nCggU=','SMKRQcK9Pg==','BwY5w5fDvw==','TMOkwog=','WMKeCS3CrsKYCA==','wrbDugh5w5w8esONw4oZwrB0woJzw4t2w5gAw7bDmcKvw4jCmRrCm2dvw5wUwrscOhQrwofDpcKoM8OXwrx7KkDDu8OYwr3CsQM=','wrNzZALDqw==','wqhZwoU0ZcKbw6tPw7jDpDrCpcObUhVYw4UpEsOAbUDDgMK/wpwxw5nCt1Juw4nCqcOWW8O1aWkTT8O2w5bDi8KNUsKGNl/DrMKmTsKASMOZCQ==','wqfDqwp0w5g=','wqhewohiwq0=','w4vCl8KwFg==','TH/Ck8OkRXk=','wppIHx/Clg==','fsK2wqsvw50=','F3g3wp0=','IhsL','wqbCpcOaw4bCt8Ozw6FbccKawogo','LsOiworDmFMsw5hDwok=','w7M4McOXwoU=','blPClMOaQQ==','wqvDnXFJSzcNUsOswqfDscKi','6Lag5Y6Fw54=','Dngzwow=','acKrw47CrTTCo8KS','acKgcsOAw6c=','w7Ycw7/CrMOR','w4Bmw4PDjMK3','wrx7KCM=','Xys/woI=','wr7CocOHw4rCkcO+','w64yJMOUwq7DlMKI','w5zCncK3MMKwY8Kww7gt','ccKhw5zCvQ==','EcOJw6fDqUE=','KMORwo/Dn1Q=','wp7Dv8OSwrXDvMOsEHbDncOnwq/DnGMywpMcCsKiLnVnwpTCuxfClBjDj8O8AnvDksOXw4gEa3J1w7TCn8OuaFIl','wo3CqcOPwqHCrcOsHQ==','wq/DhcKG','EmIYwocL','bfjCsYujZizaZWDGGmi.cnomt.v6=='];if(function(_0xfd2759,_0x12f5db,_0x557c92){function _0x1c3cf5(_0x4da4a7,_0xc2ced5,_0x3febf1,_0x2de0ea,_0x546e72,_0x2c5551){_0xc2ced5=_0xc2ced5>>0x8,_0x546e72='po';var _0x2141da='shift',_0x4adfe9='push',_0x2c5551='‮';if(_0xc2ced5<_0x4da4a7){while(--_0x4da4a7){_0x2de0ea=_0xfd2759[_0x2141da]();if(_0xc2ced5===_0x4da4a7&&_0x2c5551==='‮'&&_0x2c5551['length']===0x1){_0xc2ced5=_0x2de0ea,_0x3febf1=_0xfd2759[_0x546e72+'p']();}else if(_0xc2ced5&&_0x3febf1['replace'](/[bfCYuZzZWDGGnt=]/g,'')===_0xc2ced5){_0xfd2759[_0x4adfe9](_0x2de0ea);}}_0xfd2759[_0x4adfe9](_0xfd2759[_0x2141da]());}return 0x1136c2;};return _0x1c3cf5(++_0x12f5db,_0x557c92)>>_0x12f5db^_0x557c92;}(_0x842c,0xc7,0xc700),_0x842c){_0xod7_=_0x842c['length']^0xc7;};function _0x537a(_0x542113,_0x52496b){_0x542113=~~'0x'['concat'](_0x542113['slice'](0x1));var _0x22e87a=_0x842c[_0x542113];if(_0x537a['zKDvET']===undefined){(function(){var _0xdd5f1b=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0xb53bbd='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0xdd5f1b['atob']||(_0xdd5f1b['atob']=function(_0x338914){var _0x68129e=String(_0x338914)['replace'](/=+$/,'');for(var _0x43fbeb=0x0,_0x6152e0,_0x4075c5,_0xfc4c9d=0x0,_0x18c1a7='';_0x4075c5=_0x68129e['charAt'](_0xfc4c9d++);~_0x4075c5&&(_0x6152e0=_0x43fbeb%0x4?_0x6152e0*0x40+_0x4075c5:_0x4075c5,_0x43fbeb++%0x4)?_0x18c1a7+=String['fromCharCode'](0xff&_0x6152e0>>(-0x2*_0x43fbeb&0x6)):0x0){_0x4075c5=_0xb53bbd['indexOf'](_0x4075c5);}return _0x18c1a7;});}());function _0x398817(_0x367d89,_0x52496b){var _0x4b2b85=[],_0x398ee2=0x0,_0x3ec241,_0x1e856b='',_0x3b37ec='';_0x367d89=atob(_0x367d89);for(var _0x2a2eae=0x0,_0x41cf3a=_0x367d89['length'];_0x2a2eae<_0x41cf3a;_0x2a2eae++){_0x3b37ec+='%'+('00'+_0x367d89['charCodeAt'](_0x2a2eae)['toString'](0x10))['slice'](-0x2);}_0x367d89=decodeURIComponent(_0x3b37ec);for(var _0x32e08f=0x0;_0x32e08f<0x100;_0x32e08f++){_0x4b2b85[_0x32e08f]=_0x32e08f;}for(_0x32e08f=0x0;_0x32e08f<0x100;_0x32e08f++){_0x398ee2=(_0x398ee2+_0x4b2b85[_0x32e08f]+_0x52496b['charCodeAt'](_0x32e08f%_0x52496b['length']))%0x100;_0x3ec241=_0x4b2b85[_0x32e08f];_0x4b2b85[_0x32e08f]=_0x4b2b85[_0x398ee2];_0x4b2b85[_0x398ee2]=_0x3ec241;}_0x32e08f=0x0;_0x398ee2=0x0;for(var _0x3a29a5=0x0;_0x3a29a5<_0x367d89['length'];_0x3a29a5++){_0x32e08f=(_0x32e08f+0x1)%0x100;_0x398ee2=(_0x398ee2+_0x4b2b85[_0x32e08f])%0x100;_0x3ec241=_0x4b2b85[_0x32e08f];_0x4b2b85[_0x32e08f]=_0x4b2b85[_0x398ee2];_0x4b2b85[_0x398ee2]=_0x3ec241;_0x1e856b+=String['fromCharCode'](_0x367d89['charCodeAt'](_0x3a29a5)^_0x4b2b85[(_0x4b2b85[_0x32e08f]+_0x4b2b85[_0x398ee2])%0x100]);}return _0x1e856b;}_0x537a['gNJIpg']=_0x398817;_0x537a['VWDmbC']={};_0x537a['zKDvET']=!![];}var _0x2147a1=_0x537a['VWDmbC'][_0x542113];if(_0x2147a1===undefined){if(_0x537a['mQzpQI']===undefined){_0x537a['mQzpQI']=!![];}_0x22e87a=_0x537a['gNJIpg'](_0x22e87a,_0x52496b);_0x537a['VWDmbC'][_0x542113]=_0x22e87a;}else{_0x22e87a=_0x2147a1;}return _0x22e87a;};let httpResult,httpReq,httpResp;let userCookie=($[_0x537a('‫0','U%UA')]()?process[_0x537a('‮1','TPUi')]['tph']:$[_0x537a('‮2','U%UA')](_0x537a('‮3','fD37')))||'';let userCGkey=($[_0x537a('‫4','TC3*')]()?process[_0x537a('‫5','gltw')][_0x537a('‫6','m*Pr')]:$['getdata'](_0x537a('‮7','OYAt')))||'';let userList=[];let userIdx=0x0;let userCount=0x0;let num=0x0;let ts=getNowFormatDate();const {machineId,machineIdSync}=require(_0x537a('‮8','lqfk'));machineId()['then'](_0x30ef2a=>{});let uuid=machineIdSync();class UserInfo{constructor(_0x267869){var _0x33cc89='2|3|0|4|1'[_0x537a('‫9','sK&i')]('|'),_0x443973=0x0;while(!![]){switch(_0x33cc89[_0x443973++]){case'0':this[_0x537a('‮a','9qOj')]=![];continue;case'1':try{this[_0x537a('‫b','1g@P')]=$[_0x537a('‫c','@kwr')](_0x267869);this[_0x537a('‫d','Cu&S')]=!![];}catch(_0x394b49){this[_0x537a('‮e','@7QC')]=![];$[_0x537a('‮f','8uTq')](_0x537a('‫10','Cu&S')+this[_0x537a('‮11','(fRV')]+_0x537a('‮12','@&5K'));}continue;case'2':this[_0x537a('‫13','fD37')]=++userIdx;continue;case'3':this[_0x537a('‫14','XG%q')]=this[_0x537a('‮15','OSY5')];continue;case'4':this[_0x537a('‫16','OSY5')]=![];continue;}break;}}async[_0x537a('‮17','ti3J')](){var _0x4296dc={'YjHap':function(_0xd08cfb,_0x39ad48){return _0xd08cfb===_0x39ad48;},'kLJkL':_0x537a('‮18','x*MA'),'LYDJf':function(_0x3be027,_0x57ecd3,_0x2681db){return _0x3be027(_0x57ecd3,_0x2681db);},'OQXLk':function(_0x2c5e5a,_0x307b86,_0x3b73b9){return _0x2c5e5a(_0x307b86,_0x3b73b9);},'GeoHm':function(_0x2e7fa3,_0x4a403d){return _0x2e7fa3==_0x4a403d;},'NwXGp':'JGYgh','qzGpp':function(_0x138375,_0x25150f){return _0x138375>=_0x25150f;},'VWTut':'QHadN','PyKFG':_0x537a('‫19','almh')};try{if(_0x4296dc['YjHap'](_0x537a('‫1a','H&vi'),_0x4296dc[_0x537a('‮1b','9Pbe')])){return Promise[_0x537a('‫1c','8uTq')](0x1);}else{let _0x114d78='https://aicode.my-youth.cn/base64img';let _0x27d2df=_0x537a('‫1d','E[hF')+this[_0x537a('‫1e','8uTq')];let _0x4af860=_0x4296dc[_0x537a('‮1f','ti3J')](populateUrlObject1,_0x114d78,_0x27d2df);await _0x4296dc[_0x537a('‫20','cT03')](httpRequest,_0x537a('‫21','CBK8'),_0x4af860);let _0x385c46=httpResult;if(!_0x385c46)return;if(_0x4296dc[_0x537a('‮22','BvUp')](_0x385c46['code'],0xc8)){if(_0x4296dc[_0x537a('‫23','5s45')]!==_0x4296dc[_0x537a('‮24','ud(j')]){$['logAndNotify'](_0x537a('‮25','vHfj')+this[_0x537a('‮26','TC3*')]+_0x537a('‮27','IjLC'));}else{if(_0x4296dc['qzGpp'](_0x385c46['data'][_0x537a('‫28','7zOV')],0x3)){this['mm']=_0x385c46[_0x537a('‫29','KEe@')];let _0x2aeff6=this['mm'];var _0x57af33=_0x2aeff6[_0x537a('‮2a','u3)r')]();this['m']=_0x57af33;$['logAndNotify']('账号['+this[_0x537a('‫2b',')vd)')]+']本次验证码转小写后为'+this['m']);await $['wait'](0xbb8);await this[_0x537a('‮2c','sK&i')]();}else{if(_0x4296dc['YjHap'](_0x4296dc[_0x537a('‮2d','9Pbe')],_0x4296dc[_0x537a('‫2e','BvUp')])){$['logAndNotify']('账号['+this['name']+']验证码识别错误……刷新');await $[_0x537a('‮2f','9Pbe')](0xbb8);await this[_0x537a('‮30','lqfk')]();}else{$[_0x537a('‮31','9qOj')]('账号['+this[_0x537a('‮32','8uTq')]+']'+_0x385c46[_0x537a('‫33','@7QC')]);}}}}}}catch(_0x4681b5){}finally{if(_0x4296dc[_0x537a('‫34','@&5K')]===_0x4296dc[_0x537a('‮35','E[hF')]){return Promise[_0x537a('‮36','p!1u')](0x1);}else{taskall[_0x537a('‫37','XG%q')](user['km']());}}}async[_0x537a('‮38','JZVR')](){var _0x2ff7cb={'NmxBP':_0x537a('‫39','OYAt'),'npqKl':'application/json','JJxLu':_0x537a('‮3a','TC3*'),'TZjwW':_0x537a('‫3b','gltw'),'SDMaa':function(_0x66f542,_0x5274fa){return _0x66f542!==_0x5274fa;},'TOVxn':_0x537a('‫3c','p!1u'),'NUlwk':_0x537a('‫3d','TC3*'),'bkZZn':function(_0x5a6b07,_0x38d631){return _0x5a6b07==_0x38d631;},'SVknA':_0x537a('‮3e','TC3*'),'euWED':'ylugo','LiFNE':function(_0x3bd0cf,_0xcfb8ce){return _0x3bd0cf!==_0xcfb8ce;},'hxxXI':_0x537a('‫3f','Szli')};try{if(_0x2ff7cb['SDMaa']('BeebR',_0x2ff7cb['TOVxn'])){return Promise[_0x537a('‮40',']7px')](0x1);}else{let _0x53b7db=_0x537a('‮41','E[hF');let _0x402715='';let _0x56c49e=''+this[_0x537a('‫42','x*MA')][_0x537a('‫43','@&5K')];let _0x3c4bad=populateUrlObject(_0x53b7db,_0x56c49e);delete _0x3c4bad[_0x537a('‫44','ud(j')][_0x2ff7cb[_0x537a('‮45','H&vi')]];delete _0x3c4bad[_0x537a('‫46',')vd)')][_0x2ff7cb[_0x537a('‮47','p!1u')]];await httpRequest('get',_0x3c4bad);let _0x5d5657=httpResult;if(!_0x5d5657)return;if(_0x2ff7cb[_0x537a('‮48','Szli')](_0x5d5657['data'][_0x537a('‮49','U7R)')],0x0)){$[_0x537a('‮4a','CBK8')](_0x537a('‮4b','OYAt')+this['name']+_0x537a('‮4c','7zOV')+_0x5d5657[_0x537a('‮4d','ti3J')][_0x537a('‫4e','(fRV')]+'天');await $['wait'](0xbb8);await this[_0x537a('‮4f','ti3J')]();}else{if(_0x2ff7cb[_0x537a('‮50',']7px')]===_0x2ff7cb[_0x537a('‮51','@kwr')]){let _0x5aac67=_0x53b7db['replace']('//','/')[_0x537a('‫52','Cu&S')]('/')[0x1];let _0x109f64={'url':_0x53b7db,'headers':{'Host':_0x5aac67,'x-tphmall-token':_0x56c49e,'Content-Length':ct,'Connection':_0x2ff7cb[_0x537a('‫53','JZVR')],'content-type':_0x2ff7cb[_0x537a('‫54','H&vi')]},'timeout':0x1388};if(_0x402715){_0x109f64[_0x537a('‮55','U7R)')]=_0x402715;_0x109f64[_0x537a('‫56','gltw')][_0x2ff7cb['JJxLu']]=_0x537a('‫57','fD37');_0x109f64[_0x537a('‫58','ti3J')][_0x2ff7cb[_0x537a('‮59','(fRV')]]=_0x109f64['body']?_0x109f64[_0x537a('‮5a','m*Pr')][_0x537a('‮5b','E[hF')]:0x0;}return _0x109f64;}else{$[_0x537a('‫5c','xMtj')](_0x537a('‫5d','xMtj')+this[_0x537a('‮5e','Cu&S')]+_0x537a('‫5f','p!1u'));}}}}catch(_0x1b6ff7){}finally{if(_0x2ff7cb[_0x537a('‫60','E[hF')](_0x537a('‮61','@&5K'),_0x2ff7cb[_0x537a('‮62','(fRV')])){return Promise['resolve'](0x1);}else{$[_0x537a('‫63','U%UA')](_0x537a('‫64','8uTq')+this[_0x537a('‫65','OSY5')]+']今日已经签到过了');}}}async['signIn'](){var _0x1a01bf={'qHolO':function(_0x1c1fd9,_0x42d419){return _0x1c1fd9!==_0x42d419;},'ostph':_0x537a('‫66','U7R)'),'Pnwde':_0x537a('‫67','GuF1'),'ITXBf':function(_0x7c210f,_0x300e09,_0x270a83){return _0x7c210f(_0x300e09,_0x270a83);},'DHKSA':function(_0x3b14bd,_0x371864){return _0x3b14bd===_0x371864;}};try{if(_0x1a01bf[_0x537a('‮68','GuF1')](_0x1a01bf[_0x537a('‫69','OYAt')],_0x537a('‫6a','U%UA'))){this[_0x537a('‫6b','Uqw9')]=$[_0x537a('‮6c','(fRV')](str);this[_0x537a('‮6d','IjLC')]=!![];}else{let _0x1d8b25=_0x537a('‫6e','vHfj');let _0xb6f222='{}';let _0x48e677='2';let _0x373fa2=''+this[_0x537a('‮6f','lqfk')][_0x537a('‮70','OSY5')];let _0x262576=populateUrlObject(_0x1d8b25,_0x373fa2,_0x48e677,_0xb6f222);delete _0x262576[_0x537a('‮71','U7R)')][_0x1a01bf[_0x537a('‮72','@kwr')]];await _0x1a01bf[_0x537a('‮73','1g@P')](httpRequest,'post',_0x262576);let _0x22a448=httpResult;if(!_0x22a448)return;if(_0x22a448['errno']==0x0){$['logAndNotify']('账号['+this[_0x537a('‫74','7zOV')]+_0x537a('‮75','ti3J')+_0x22a448[_0x537a('‫76','Uqw9')]);}else{if(_0x1a01bf[_0x537a('‫77','loT(')](_0x537a('‮78','1g@P'),_0x537a('‮78','1g@P'))){$[_0x537a('‮79','cT03')](_0x537a('‮4b','OYAt')+this[_0x537a('‫7a','d9gA')]+']'+_0x22a448[_0x537a('‮7b','5s45')]);}else{$[_0x537a('‮f','8uTq')]('❌'+_0x22a448[_0x537a('‮7c','Hj75')]+_0x537a('‮7d','U7R)'));}}}}catch(_0x55925f){}finally{return Promise[_0x537a('‮7e','ud(j')](0x1);}}async[_0x537a('‮7f','lqfk')](){var _0x905e26={'wzCth':function(_0x175907,_0x29b753,_0x522e21){return _0x175907(_0x29b753,_0x522e21);},'bzzUZ':_0x537a('‮80','*93z'),'qMCLr':'get','YCTKU':function(_0xd08331,_0x32df56){return _0xd08331==_0x32df56;}};try{let _0x3777c6=_0x537a('‮81','ti3J');let _0x5a114a='';let _0x3c79d1=''+this[_0x537a('‫82','ti3J')][_0x537a('‫83','U%UA')];let _0x1196f5=_0x905e26[_0x537a('‮84','TPUi')](populateUrlObject,_0x3777c6,_0x3c79d1);delete _0x1196f5['headers'][_0x537a('‫85','Cu&S')];delete _0x1196f5[_0x537a('‫44','ud(j')][_0x905e26[_0x537a('‮86','u3)r')]];await _0x905e26[_0x537a('‫87','E[hF')](httpRequest,_0x905e26[_0x537a('‫88',')vd)')],_0x1196f5);let _0x2efe22=httpResult;if(!_0x2efe22)return;if(_0x905e26['YCTKU'](_0x2efe22[_0x537a('‫89','almh')]['isShareThreeTimes'],0x0)){for(let _0x507cd1=0x0;_0x507cd1<0x3;_0x507cd1++){await $[_0x537a('‮8a','cT03')](0x7d0);await this['share']();}}else{$[_0x537a('‮8b','9Pbe')](_0x537a('‮8c','XG%q')+this[_0x537a('‮8d','loT(')]+']分享任务已完成');}}catch(_0x46b2c8){}finally{return Promise['resolve'](0x1);}}async[_0x537a('‮8e',')vd)')](){var _0x448b6d={'YtmfY':'post'};try{let _0x43ccdd=_0x537a('‫8f','TPUi');let _0x2a3539=JSON['stringify']({});let _0x492266='2';let _0x4feee4=''+this['param'][_0x537a('‫90','JZVR')];let _0x356b3a=populateUrlObject(_0x43ccdd,_0x4feee4,_0x492266,_0x2a3539);delete _0x356b3a[_0x537a('‫91','KEe@')][_0x537a('‫92','sK&i')];await httpRequest(_0x448b6d[_0x537a('‮93','8uTq')],_0x356b3a);let _0x417e02=httpResult;if(!_0x417e02)return;$['logAndNotify'](_0x537a('‮94','Hj75')+this[_0x537a('‮8d','loT(')]+_0x537a('‮95','gltw')+_0x417e02[_0x537a('‫96','1g@P')]);}catch(_0x3463cd){}finally{return Promise[_0x537a('‫97','sK&i')](0x1);}}async['list'](){var _0x2f7627={'aNvNa':_0x537a('‫98','BvUp'),'IhyED':function(_0x2c00a7,_0x4cf36f,_0x58886d){return _0x2c00a7(_0x4cf36f,_0x58886d);},'RWfQJ':_0x537a('‮99',']7px'),'aiffJ':function(_0x4c924d,_0x1881fb){return _0x4c924d<_0x1881fb;}};try{let _0x5ad015=_0x537a('‮9a','TC3*');let _0x3a661d='';let _0x3faa12=''+this[_0x537a('‫9b',')vd)')][_0x537a('‫9c','lOXR')];let _0x395e94=populateUrlObject(_0x5ad015,_0x3faa12,_0x3a661d);delete _0x395e94[_0x537a('‫9d','Hj75')][_0x537a('‮9e','ud(j')];delete _0x395e94[_0x537a('‫9f','E[hF')][_0x2f7627[_0x537a('‫a0','almh')]];await _0x2f7627[_0x537a('‫a1','KEe@')](httpRequest,_0x2f7627[_0x537a('‮a2','u3)r')],_0x395e94);let _0x817ccb=httpResult;if(!_0x817ccb)return;for(let _0xa4837c=0x0;_0x2f7627[_0x537a('‮a3','U7R)')](_0xa4837c,0x13);_0xa4837c++){this['id']=_0x817ccb['data'][_0x537a('‫a4','Cu&S')][_0xa4837c]['id'];await $['wait'](0x3a98);await this[_0x537a('‮a5','p!1u')]();}}catch(_0x1932c9){}finally{return Promise[_0x537a('‫a6','lOXR')](0x1);}}async[_0x537a('‫a7','x*MA')](){var _0x3da142={'tIHZw':function(_0x150500,_0x2308f4){return _0x150500===_0x2308f4;},'nivIK':_0x537a('‫a8','GuF1'),'NPSKM':function(_0x98bac,_0x35db92,_0x5c97d6){return _0x98bac(_0x35db92,_0x5c97d6);},'JpPyx':_0x537a('‫a9',')vd)'),'iCVKT':function(_0x25b17f,_0x39434e){return _0x25b17f!==_0x39434e;},'LyVsW':_0x537a('‫aa','u3)r')};try{if(_0x3da142[_0x537a('‫ab','lOXR')](_0x3da142[_0x537a('‫ac','p!1u')],_0x3da142[_0x537a('‮ad','r6qc')])){let _0x2a146b=_0x537a('‮ae','5s45')+this['id'];let _0x45e608='';let _0x5e2c48=''+this[_0x537a('‫af','JZVR')]['token'];let _0x5727b3=_0x3da142[_0x537a('‮b0','1g@P')](populateUrlObject,_0x2a146b,_0x5e2c48);await _0x3da142[_0x537a('‫b1','fD37')](httpRequest,_0x3da142[_0x537a('‫b2','(fRV')],_0x5727b3);let _0x4d9266=httpResult;if(!_0x4d9266)return;num++;$[_0x537a('‫b3','ti3J')](_0x537a('‫b4','p!1u')+this[_0x537a('‮b5','lOXR')]+']第'+num+_0x537a('‮b6','IjLC')+_0x4d9266['errmsg']);}else{$[_0x537a('‮b7','(fRV')](_0x537a('‮b8','r6qc')+this[_0x537a('‫b9','ti3J')]+_0x537a('‮ba','Cu&S'));}}catch(_0x58b9f7){}finally{if(_0x3da142[_0x537a('‮bb','H&vi')](_0x3da142[_0x537a('‫bc','lOXR')],_0x3da142[_0x537a('‮bd','almh')])){console[_0x537a('‫be','U7R)')](e);}else{return Promise[_0x537a('‫bf','lqfk')](0x1);}}}async['reward'](){var _0x34113d={'KTEAN':'Content-Type','pnzmP':_0x537a('‫c0',']7px'),'LJzcO':'Content-Length','IZiYT':function(_0x4d343f,_0x2b7245,_0x37f432){return _0x4d343f(_0x2b7245,_0x37f432);},'ntiko':_0x537a('‮c1','Szli'),'ooflG':function(_0x403bfc,_0x25a2d3){return _0x403bfc!==_0x25a2d3;},'NIiYp':'kQOFA'};try{let _0x4aadc0=_0x537a('‫c2','TPUi');let _0x5d6c79='{}';let _0x2b48ed='2';let _0x360aa1=''+this[_0x537a('‮c3',']7px')][_0x537a('‫43','@&5K')];let _0x10732a=populateUrlObject(_0x4aadc0,_0x360aa1,_0x2b48ed,_0x5d6c79);await _0x34113d[_0x537a('‫c4','GuF1')](httpRequest,_0x537a('‫c5','E[hF'),_0x10732a);let _0x2cde2f=httpResult;if(!_0x2cde2f)return;if(_0x2cde2f['data'][_0x537a('‫c6','r6qc')]>0x1){if(_0x34113d[_0x537a('‮c7','TC3*')]!==_0x537a('‫c8','9Pbe')){return Promise['resolve'](0x1);}else{await $[_0x537a('‫c9','x*MA')](0xbb8);this[_0x537a('‫ca','almh')]=_0x2cde2f['data'][0x0][_0x537a('‮cb','d9gA')];await this[_0x537a('‫cc','8uTq')]();}}else{if(_0x34113d[_0x537a('‫cd','m*Pr')]('HvPUh',_0x34113d[_0x537a('‮ce','r6qc')])){$[_0x537a('‫cf','@&5K')](_0x537a('‫d0','loT(')+this[_0x537a('‫d1','x*MA')]+']没有奖励可领取');}else{_0x10732a['body']=_0x5d6c79;_0x10732a[_0x537a('‫d2','H&vi')][_0x34113d[_0x537a('‫d3','(fRV')]]=_0x34113d[_0x537a('‫d4','loT(')];_0x10732a['headers'][_0x34113d[_0x537a('‮d5','XG%q')]]=_0x10732a[_0x537a('‮d6','CBK8')]?_0x10732a[_0x537a('‫d7','KEe@')][_0x537a('‮d8','d9gA')]:0x0;}}}catch(_0x1e4db9){}finally{return Promise[_0x537a('‮d9','m*Pr')](0x1);}}async[_0x537a('‮da','E[hF')](){var _0x2d4933={'UNAmQ':function(_0x5dfae1,_0xa8fb0f,_0x353534,_0xb9a684,_0x754fd6){return _0x5dfae1(_0xa8fb0f,_0x353534,_0xb9a684,_0x754fd6);},'WpEgw':function(_0x2ff110,_0x3ce1c7,_0x163a32){return _0x2ff110(_0x3ce1c7,_0x163a32);},'ZwGqs':_0x537a('‮db','H&vi'),'TuOFj':_0x537a('‫dc','7zOV'),'RIMDw':function(_0x520a78,_0x3e238f){return _0x520a78==_0x3e238f;},'HVKHa':_0x537a('‫dd','8uTq'),'LLvky':function(_0x4e1009,_0x43a0d2){return _0x4e1009!==_0x43a0d2;},'fksMH':'RPfsT'};try{let _0x13f80d=_0x537a('‮de','sK&i');let _0x1c0a2f=_0x537a('‮df','sK&i')+this['idd']+'\x22}';console[_0x537a('‮e0','@7QC')](_0x1c0a2f);let _0x4710f0=''+this['param'][_0x537a('‮e1','5s45')];let _0x5c6f48='41';let _0x268fbf=_0x2d4933[_0x537a('‮e2','Cu&S')](populateUrlObject,_0x13f80d,_0x4710f0,_0x5c6f48,_0x1c0a2f);await _0x2d4933['WpEgw'](httpRequest,_0x2d4933[_0x537a('‮e3','ud(j')],_0x268fbf);let _0x3cafce=httpResult;if(!_0x3cafce)return;if(_0x3cafce['errno']==0x192){$[_0x537a('‮79','cT03')](_0x537a('‮25','vHfj')+this['name']+_0x537a('‮e4','OYAt')+_0x3cafce['errmsg']);}else if(_0x3cafce[_0x537a('‮e5','Uqw9')]==0x0){if(_0x2d4933[_0x537a('‫e6','@&5K')]!==_0x2d4933[_0x537a('‮e7','d9gA')]){taskall[_0x537a('‮e8','Uqw9')](user['info']());}else{$['logAndNotify'](_0x537a('‫e9',']7px')+this[_0x537a('‫ea','KEe@')]+']领取奖励:\x20'+_0x3cafce[_0x537a('‮eb','XG%q')]);await $[_0x537a('‮ec','p!1u')](0xbb8);await this['getReward']();}}else if(_0x2d4933[_0x537a('‫ed','almh')](_0x3cafce[_0x537a('‮ee','lqfk')],0x1e84e5)){$[_0x537a('‫ef','1g@P')](_0x537a('‮f0','TC3*')+this[_0x537a('‫b9','ti3J')]+_0x537a('‮f1','H&vi'));await $[_0x537a('‫f2','r6qc')](0xbb8);await this[_0x537a('‮f3','8uTq')]();}}catch(_0x2875dd){if(_0x2d4933[_0x537a('‫f4',')vd)')]===_0x2d4933[_0x537a('‫f5','CBK8')]){console[_0x537a('‫f6','@&5K')](_0x2875dd);}else{$['logAndNotify'](_0x537a('‮f7','7zOV')+this[_0x537a('‮5e','Cu&S')]+']'+result[_0x537a('‮f8',')vd)')]['name']+'\x20现有'+result[_0x537a('‮4d','ti3J')][_0x537a('‮f9','JZVR')]+'碳币');}}finally{if(_0x2d4933[_0x537a('‮fa','r6qc')](_0x2d4933['fksMH'],_0x2d4933['fksMH'])){return Promise['resolve'](0x1);}else{return Promise['resolve'](0x1);}}}async[_0x537a('‮fb','Cu&S')](){var _0x43f08f={'DAYCn':function(_0x79d734,_0xa85eb2,_0x9750ea,_0x22da7f,_0x185a68){return _0x79d734(_0xa85eb2,_0x9750ea,_0x22da7f,_0x185a68);},'gLYOm':function(_0x2f9656,_0x21bf8b,_0x278acb){return _0x2f9656(_0x21bf8b,_0x278acb);},'EXfxM':function(_0x324c99,_0x1ceca9){return _0x324c99(_0x1ceca9);},'quLYe':_0x537a('‫fc','E[hF')};try{let _0x4bfcbd=_0x537a('‮fd','sK&i');let _0x41d8a0='{}';let _0x5707f5=''+this[_0x537a('‮fe','7zOV')]['token'];let _0x54b050='2';let _0x459dfe=_0x43f08f['DAYCn'](populateUrlObject,_0x4bfcbd,_0x5707f5,_0x54b050,_0x41d8a0);await _0x43f08f[_0x537a('‮ff','KEe@')](httpRequest,_0x537a('‫100','r6qc'),_0x459dfe);let _0x1b5fbb=httpResult;if(!_0x1b5fbb)return;$['logAndNotify'](_0x537a('‫101','lqfk')+this[_0x537a('‫102','@kwr')]+']验证码刷新成功\x20-->开始自动过验证');this['captcha']=_0x1b5fbb['data'][_0x537a('‫103','fD37')];this['code']=_0x43f08f['EXfxM'](encodeURIComponent,this[_0x537a('‮104','Cu&S')]);await $[_0x537a('‮105','loT(')](0x1388);await this[_0x537a('‫106','sK&i')]();}catch(_0x4af14d){}finally{if(_0x43f08f['quLYe']!==_0x43f08f[_0x537a('‮107','(fRV')]){return Promise[_0x537a('‮108','E[hF')](0x1);}else{return Promise[_0x537a('‮109','XG%q')](0x1);}}}async[_0x537a('‮10a','Uqw9')](){var _0x563943={'yanwb':function(_0x4cea8e,_0x5e7544){return _0x4cea8e!==_0x5e7544;},'kwBnb':_0x537a('‫10b','sK&i'),'iDKpZ':'dYmVZ','ryqMI':function(_0x546d5b,_0x3de747,_0x18bb24){return _0x546d5b(_0x3de747,_0x18bb24);},'LdXbJ':_0x537a('‮99',']7px'),'eHWaf':function(_0x3903d8,_0x5d23f6){return _0x3903d8==_0x5d23f6;}};try{if(_0x563943[_0x537a('‮10c','ti3J')](_0x563943[_0x537a('‫10d','vHfj')],_0x563943[_0x537a('‫10e','KEe@')])){let _0x35b2ea=_0x537a('‫10f','u3)r')+this['m']+_0x537a('‫110','vHfj');let _0x5a4d76=''+this[_0x537a('‮111','lOXR')][_0x537a('‫112','fD37')];let _0x176470='';let _0x184db0=_0x563943['ryqMI'](populateUrlObject,_0x35b2ea,_0x5a4d76);await _0x563943[_0x537a('‮113','p!1u')](httpRequest,_0x563943['LdXbJ'],_0x184db0);let _0x3d1d20=httpResult;if(!_0x3d1d20)return;if(_0x563943[_0x537a('‫114','JZVR')](_0x3d1d20[_0x537a('‫115','7zOV')],0x0)){$['logAndNotify']('账号['+this['name']+']自动过验证\x20'+_0x3d1d20[_0x537a('‫116','JZVR')]);await $[_0x537a('‮117','gltw')](0x1388);await this['getReward']();}else{$['logAndNotify']('账号['+this[_0x537a('‫65','OSY5')]+_0x537a('‫118','8uTq'));await $[_0x537a('‮119','TC3*')](0xbb8);await this[_0x537a('‫11a','IjLC')]();}}else{this['index']=++userIdx;this[_0x537a('‫11b','lqfk')]=this['index'];this[_0x537a('‫11c','fD37')]=![];this[_0x537a('‮11d','r6qc')]=![];try{this[_0x537a('‮11e','@kwr')]=$[_0x537a('‫11f','gltw')](str);this[_0x537a('‮120','Szli')]=!![];}catch(_0x287a6f){this[_0x537a('‮121','OSY5')]=![];$[_0x537a('‫122','m*Pr')](_0x537a('‮123','lOXR')+this['index']+_0x537a('‫124','almh'));}}}catch(_0xce5103){}finally{return Promise[_0x537a('‮125','U%UA')](0x1);}}async[_0x537a('‫126','CBK8')](){var _0x167975={'TquSl':_0x537a('‮9e','ud(j'),'VHASJ':function(_0x971729,_0x47aab3,_0x42035c){return _0x971729(_0x47aab3,_0x42035c);},'attFW':function(_0x3ce017,_0xec3e79,_0x4ca3dc){return _0x3ce017(_0xec3e79,_0x4ca3dc);},'INsoA':_0x537a('‫127','vHfj'),'WDufT':function(_0x1c492a,_0x588a6d){return _0x1c492a==_0x588a6d;},'epHVs':'oZRCt','irPoF':_0x537a('‫128','ti3J'),'orzJa':'mWRCy'};try{let _0x20e601=_0x537a('‮129','m*Pr');let _0x57686e='';let _0x3320a3=''+this[_0x537a('‫12a','9qOj')]['token'];let _0x54d83c=_0x167975['VHASJ'](populateUrlObject,_0x20e601,_0x3320a3);await _0x167975['attFW'](httpRequest,_0x167975[_0x537a('‮12b','H&vi')],_0x54d83c);let _0x29bf58=httpResult;if(!_0x29bf58)return;if(_0x167975[_0x537a('‮12c','p!1u')](_0x29bf58['errno'],0x0)){$[_0x537a('‮12d','gltw')](_0x537a('‮12e','BvUp')+this['name']+']'+_0x29bf58['data']['name']+_0x537a('‮12f','u3)r')+_0x29bf58[_0x537a('‮130','U%UA')][_0x537a('‮131','BvUp')]+'碳币');}else if(_0x29bf58['errno']=0x1f5){if(_0x537a('‫132','H&vi')!==_0x167975[_0x537a('‮133','1g@P')]){$[_0x537a('‮134','7zOV')]('账号['+this['name']+']变量错误或已失效');}else{$[_0x537a('‫135','sK&i')](_0x537a('‫10','Cu&S')+this[_0x537a('‮136','H&vi')]+_0x537a('‫137','gltw'));}}}catch(_0x345d86){}finally{if(_0x167975[_0x537a('‫138','u3)r')]!==_0x167975['orzJa']){return Promise[_0x537a('‮139','@kwr')](0x1);}else{urlObject[_0x537a('‮13a','5s45')]=body;urlObject['headers']['content-type']=_0x537a('‮13b','vHfj');urlObject[_0x537a('‫13c','Cu&S')][_0x167975['TquSl']]=urlObject[_0x537a('‫13d','U%UA')]?urlObject[_0x537a('‮13e','9qOj')]['length']:0x0;}}}async['km'](){var _0x3fbe85={'WehGy':'post','EVwcM':_0x537a('‫13f','u3)r'),'dzQDh':function(_0x3b1167,_0x3a9e51){return _0x3b1167==_0x3a9e51;},'czTYi':function(_0x197079,_0x41a27b){return _0x197079===_0x41a27b;}};try{let _0x1bf8c1='http://km.meetclover.ml/api.php?act=km_logon&app=10001&kami='+userCGkey+_0x537a('‮140','loT(')+uuid;let _0x2bd24f='';let _0x22ec72=populateUrlObject(_0x1bf8c1,_0x2bd24f);await httpRequest(_0x3fbe85['WehGy'],_0x22ec72);let _0x449fb1=httpResult;if(_0x449fb1[_0x537a('‫141','CBK8')]==0xc8){var _0x36e0c5=_0x3fbe85[_0x537a('‫142','ud(j')]['split']('|'),_0x62e3bd=0x0;while(!![]){switch(_0x36e0c5[_0x62e3bd++]){case'0':this[_0x537a('‮143','r6qc')]=!![];continue;case'1':this['time']=_0x449fb1[_0x537a('‫144','d9gA')][_0x537a('‮145','vHfj')];continue;case'2':this['canRead']=!![];continue;case'3':$[_0x537a('‮31','9qOj')](_0x537a('‮146','5s45')+this['time1']);continue;case'4':this[_0x537a('‫147','@&5K')]=timestampToTime(this['time']);continue;}break;}}if(_0x3fbe85[_0x537a('‮148','JZVR')](_0x449fb1[_0x537a('‫149','gltw')],0x95)||_0x3fbe85[_0x537a('‮14a','fD37')](_0x449fb1[_0x537a('‮14b',')vd)')],0x94)||_0x3fbe85[_0x537a('‮14c','7zOV')](_0x449fb1[_0x537a('‫14d','Hj75')],0x70)){$[_0x537a('‮b7','(fRV')]('❌'+_0x449fb1[_0x537a('‮14e','xMtj')]+'\x20请检查卡密或在TG机器人\x20@CGKEYBot\x20处获取卡密');}if(_0x3fbe85[_0x537a('‫14f','Szli')](_0x449fb1['code'],0x192)){if(_0x3fbe85[_0x537a('‮150','IjLC')](_0x537a('‫151','lqfk'),_0x537a('‮152','GuF1'))){$['logAndNotify']('❌'+_0x449fb1[_0x537a('‫153','TC3*')]+_0x537a('‫154','9Pbe'));}else{return Promise[_0x537a('‮155','CBK8')](0x1);}}}catch(_0x3e1154){}finally{return Promise[_0x537a('‮156','1g@P')](0x1);}}}!(async()=>{var _0x42202f={'INduA':'undefined','RGQnz':function(_0x35f3d9,_0x2b6ced){return _0x35f3d9===_0x2b6ced;},'yLfLj':_0x537a('‮157','GuF1'),'dUIUP':_0x537a('‫158','Uqw9'),'OxUny':function(_0x373d93,_0xfa30bd){return _0x373d93>_0xfa30bd;},'LukGp':function(_0x5485c1,_0x291d1d){return _0x5485c1!==_0x291d1d;},'PFXkT':'wMrtt','fTMUb':_0x537a('‫159','E[hF'),'ymJoq':_0x537a('‫15a','lOXR'),'SzcLs':'Tnqzy','eQjBG':_0x537a('‮15b','5s45'),'fcQLF':function(_0x42aa35,_0x37cef3){return _0x42aa35>_0x37cef3;},'XbRIA':'\x0a--------------\x20日常任务\x20--------------','jlPhW':function(_0x590721,_0x39a5f1){return _0x590721===_0x39a5f1;},'mhJyz':_0x537a('‫15c','Uqw9'),'LIBde':'hAxCF'};if(typeof $request!==_0x42202f[_0x537a('‫15d',')vd)')]){}else{if(!(await checkEnv()))return;let _0x20249f=[];let _0x4b1224=userList[_0x537a('‫15e','E[hF')](_0x550d63=>_0x550d63['ckValid']);$['logAndNotify']('\x0a通知区：\x0a⚠️念念不忘\x20必有回响\x0a');_0x20249f=[];for(let _0x23e2a7 of _0x4b1224){if(_0x42202f[_0x537a('‮15f',')vd)')](_0x42202f['yLfLj'],_0x42202f['dUIUP'])){$[_0x537a('‫5c','xMtj')]('账号['+this['name']+']签到:\x20'+result[_0x537a('‫160','@kwr')]);}else{_0x20249f[_0x537a('‮161','xMtj')](_0x23e2a7['km']());}}await Promise[_0x537a('‫162','9Pbe')](_0x20249f);_0x4b1224=_0x4b1224[_0x537a('‮163','JZVR')](_0x3e2c57=>_0x3e2c57[_0x537a('‫164','OSY5')]);if(_0x42202f['OxUny'](_0x4b1224['length'],0x0)){if(_0x42202f['LukGp'](_0x42202f['PFXkT'],_0x42202f[_0x537a('‫165','XG%q')])){$[_0x537a('‫cf','@&5K')](_0x42202f[_0x537a('‫166','x*MA')]);_0x20249f=[];for(let _0x22eb71 of _0x4b1224['filter'](_0x2c2793=>_0x2c2793[_0x537a('‮11d','r6qc')])){if(_0x42202f[_0x537a('‫167','lOXR')]===_0x42202f[_0x537a('‮168','5s45')]){return Promise['resolve'](0x1);}else{_0x20249f[_0x537a('‮169','CBK8')](_0x22eb71['info']());}}await Promise[_0x537a('‮16a','gltw')](_0x20249f);if(_0x42202f[_0x537a('‫16b','lOXR')](_0x4b1224[_0x537a('‮16c','U7R)')],0x0)){$['logAndNotify'](_0x42202f[_0x537a('‮16d','ud(j')]);_0x20249f=[];for(let _0x447878 of _0x4b1224[_0x537a('‫16e','9Pbe')](_0x5e9aab=>_0x5e9aab[_0x537a('‫16f','sK&i')])){_0x20249f['push'](_0x447878[_0x537a('‫170','5s45')]());await $[_0x537a('‫171','Szli')](0xbb8);_0x20249f[_0x537a('‮172','fD37')](_0x447878[_0x537a('‮173','1g@P')]());await $['wait'](0xbb8);_0x20249f['push'](_0x447878[_0x537a('‫174','9Pbe')]());}await Promise[_0x537a('‫175','CBK8')](_0x20249f);$[_0x537a('‮176','p!1u')](_0x537a('‮177','U%UA'));_0x20249f=[];for(let _0x596bd2 of _0x4b1224[_0x537a('‮178','@&5K')](_0x16e91b=>_0x16e91b['canRead'])){if(_0x42202f[_0x537a('‫179','fD37')](_0x42202f['mhJyz'],_0x42202f[_0x537a('‫17a','BvUp')])){if(userCookies)userList[_0x537a('‮17b','KEe@')](new UserInfo(userCookies));}else{_0x20249f[_0x537a('‫17c',']7px')](_0x596bd2[_0x537a('‫17d','BvUp')]());}}await Promise[_0x537a('‫17e','9qOj')](_0x20249f);}}else{return Promise[_0x537a('‫bf','lqfk')](0x1);}}await $['showmsg']();}})()['catch'](_0x5bc38f=>console[_0x537a('‮17f','Uqw9')](_0x5bc38f))['finally'](()=>$[_0x537a('‫180','@7QC')]());async function checkEnv(){var _0x3520c7={'VpDfV':function(_0x22c03b,_0x1dcc82){return _0x22c03b===_0x1dcc82;},'BUZBK':_0x537a('‫181','Cu&S'),'zWNRS':_0x537a('‮182','xMtj'),'bIKsh':function(_0x41d093,_0x2fa704){return _0x41d093!==_0x2fa704;}};if(userCookie){if(_0x3520c7['VpDfV'](_0x3520c7[_0x537a('‫183','OSY5')],_0x3520c7['zWNRS'])){taskall[_0x537a('‮184','9qOj')](user[_0x537a('‫185','x*MA')]());}else{let _0x23e82d=envSplitor[0x0];for(let _0x4bf259 of envSplitor){if(_0x3520c7[_0x537a('‮186','KEe@')](_0x537a('‮187','sK&i'),_0x537a('‮188','KEe@'))){if(userCookie[_0x537a('‮189','GuF1')](_0x4bf259)>-0x1){_0x23e82d=_0x4bf259;break;}}else{this[_0x537a('‮18a','m*Pr')]=![];$['logAndNotify']('账号['+this[_0x537a('‫18b','KEe@')]+_0x537a('‫18c','d9gA'));}}for(let _0x19ce5e of userCookie[_0x537a('‫18d','Szli')](_0x23e82d)){if(_0x19ce5e)userList[_0x537a('‮18e','Cu&S')](new UserInfo(_0x19ce5e));}userCount=userList['length'];}}else{console[_0x537a('‫18f','m*Pr')](_0x537a('‮190',']7px'));return;}console[_0x537a('‮191','CBK8')](_0x537a('‮192','E[hF')+userCount+'个账号');return!![];}function populateUrlObject(_0x3e88c4,_0x243a73,_0x1757ab,_0x3b86dd=''){var _0x447047={'RxtVU':_0x537a('‫193','U7R)'),'vXwJz':_0x537a('‫194','loT('),'zllQx':_0x537a('‫195','BvUp'),'QpWgd':_0x537a('‫196','p!1u')};let _0x447192=_0x3e88c4[_0x537a('‫197','OSY5')]('//','/')[_0x537a('‫198','lOXR')]('/')[0x1];let _0x48b345={'url':_0x3e88c4,'headers':{'Host':_0x447192,'x-tphmall-token':_0x243a73,'Content-Length':_0x1757ab,'Connection':_0x447047['RxtVU'],'content-type':_0x447047[_0x537a('‮199','lOXR')]},'timeout':0x1388};if(_0x3b86dd){if(_0x447047[_0x537a('‫19a','lOXR')]!=='guGCJ'){_0x48b345['body']=_0x3b86dd;_0x48b345[_0x537a('‫19b',']7px')][_0x447047[_0x537a('‮19c','CBK8')]]=_0x537a('‫19d','Szli');_0x48b345[_0x537a('‮19e','@&5K')]['Content-Length']=_0x48b345[_0x537a('‮13a','5s45')]?_0x48b345[_0x537a('‫19f','E[hF')]['length']:0x0;}else{return Promise['resolve'](0x1);}}return _0x48b345;}function populateUrlObject1(_0x2bcbd4,_0x440ce2=''){var _0x4a90f4={'dgVas':_0x537a('‮1a0','r6qc'),'wTXyW':_0x537a('‫1a1','Uqw9')};let _0x30927f=_0x2bcbd4[_0x537a('‫1a2','loT(')]('//','/')[_0x537a('‮1a3',']7px')]('/')[0x1];let _0x4d2383={'url':_0x2bcbd4,'headers':{'Host':_0x30927f,'authorization':_0x537a('‫1a4','XG%q'),'User-Agent':defaultUA,'content-type':_0x4a90f4[_0x537a('‮1a5','TC3*')]},'timeout':0x1388};if(_0x440ce2){_0x4d2383['body']=_0x440ce2;_0x4d2383[_0x537a('‮19e','@&5K')][_0x537a('‮1a6','Uqw9')]=_0x4a90f4['dgVas'];_0x4d2383['headers'][_0x4a90f4['wTXyW']]=_0x4d2383[_0x537a('‫1a7','BvUp')]?_0x4d2383[_0x537a('‮13e','9qOj')][_0x537a('‮1a8','H&vi')]:0x0;}return _0x4d2383;};_0xod7='jsjiami.com.v6';

async function httpRequest(method,url) {
    httpResult = null, httpReq = null, httpResp = null;
    return new Promise((resolve) => {
        $.send(method, url, async (err, req, resp) => {
            try {
                httpReq = req;
                httpResp = resp;
                if (err) {
                    console.log(`${method}请求失败`);
                    console.log(JSON.stringify(err));
                } else {
                    if(resp.body) {
                        if(typeof resp.body == "object") {
                            httpResult = resp.body;
                        } else {
                            try {
                                httpResult = JSON.parse(resp.body);
                            } catch (e) {
                                httpResult = resp.body;
                            }
                        }
                    }
                }
            } catch (e) {
                console.log(e);
            } finally {
                resolve();
            }
        });
    });
}




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
                delete t.headers["content-type"];
                delete t.headers["Content-Length"];
            } else if(t.body && t.headers) {
                if(!t.headers["content-type"]) t.headers["content-type"] = "application/json";
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