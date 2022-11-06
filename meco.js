/*
Meco真茶局

变量：捉包unionid=xxx openid=xxx wxid=123456用&连接   多账号换行隔开
格式：export meco="unionid=xxxxxxxx&openid=xxx&wxid=1234"

CGkey: 脚本卡密   电报机器人 @CGKEYBot 处获取 (所有脚本通用)
格式：export CGkey="xxxxxxxx"

*/

const $ = new Env("Meco真茶局");
let hpid = 'oPwQG5l8YphEDH5TbYPIURZBJrfw' //需要助力的账号openid
let envSplitor = ['\n']  //多账号隔开方式
let defaultUA = 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.23(0x18001729) NetType/WIFI Language/zh_CN'


var _0xodC='jsjiami.com.v6',_0xodC_=['‮_0xodC'],_0x5ce2=[_0xodC,'NW7Cg8OQBg==','wpNyw47DlB8=','esOgA8O3Wg==','woITVsKfTA==','RMKcwpsiw4c=','E1TCk20=','PMKYwrNy','wrvDisKKABYC','6LWv5Y+hBQ==','woYmYQ0=','wqDChsOQ','HDHCjz3CnQ==','IgMQF8Kv','cHTCusOxw5g=','V0AXw7zChg==','w6zCqcOLBFcEw40Hw4tTIsOU','w4bor6nliaPlpoXlpbHkvpTnlZZMwqnphYvoo4Xnjpjloprpgqvmi4rorKXogI/nsJXkvKzogIDopZnpmKg=','w7LCo8OfKlUWw6Y=','wrfDq8KIwqHCng==','MMODw7vDjxI=','HsKlGFkp','Jw3CjzzCtW7Dtg==','w7PCtsOALE0=','w5zCqcO1BcO1KjM=','w5HCqcO2Mg==','wqPDuyMTw5s=','QcOAw7vDucORwpfCr37CgGjCqwo=','wrUER+ahlOW/sumVmuiusA==','UsOcw6HCkA==','DS3CmDvCsQ==','woNPw6TDujA=','wp3Dm8KFPSY=','WlwRw7HCvw==','eRlUw53Drg==','wpwzWcKeYA==','eCZQw4HDsWg=','w71EJcOVZk8=','wrnDoSYCw5bDqA==','w7BRwozDq0g=','w6EPwohow5s=','AcK9RcO+wq0=','MMOOw5/DhTDCsm4=','6LWX5Y+Mwqw=','w6UlwrMIb8KBccK7wofCkMOPFA==','QcKkwp4/','wrzDnWd7Tj0g','OHDDvGN8w6s1','w7ANwoZFw7F0MnHCtMKnUQ==','AgbDvAfCrw==','ekgn','OFcXCMKI','AcOoIx8G','DH8vJcKT','wqLDgcKNCAwDw4M=','wqDDsRIRw5M=','w5Q5wodQw4k=','w7PCssONMUwT','F1/CsMOX','fDNYw4E=','UHPCsMOAw7doej8+QT4K','6LSJ5Y6Dw4o=','ZTNcw5A=','beausOaXnOevhOWLneS7suWLieW2nOWsseaJmA==','w5NzQcKISjPDog==','IcOlLT4J','KQ4TNMKV','w43CrcOoOMO8PTI=','wqXDisKXCA4cw4I=','w7klwqc9','ARjDjATChg==','L8KAecO5wpU2wpprwpDCtsOqw7gUUMOvMFbDm8KmwqbDpsKTw7MqdcOUwoN4CAnDlsK2IiTDsQDCi8KwwrbDvhLCkMO5KQIWwqzCmFjChEXCgMOtwp02wobDvcKRwr3ChjRdECZP','wr3ClMOFTcKq','wo1Ww5rDvSI=','NsOUwppIaMKZK8OPKsOtw5pj','6LS75Y+aCA==','wqnDg25x','J3DDvH9xw7o1','wobCgsOhfcKL','wqIJYS3Ctw==','w4IKwptgw4A=','JHjDtRrDrnN9','OnLDoQ==','6K6t5rO55aeM6LSs','K8Kbag==','wrDDisKQMwMZw4zCuSDDhcOdag==','wqrCkMOD','wr8VwqhWMg==','w6jCssOYNUpawqxHw4dKNMOFw4LCpMK9XcKSCGnDrngJWm15w7fDvMKiwqUyw57CiAtuVMKyEG7CjMO7wrokwoLCnC/DpMKAYcOxckbDlMOjQhomUzTChgjDlg==','wqHDmWZpQg==','wrlhFFBB','JhzCnSfCrGs=','wp1nwrrCg8OD','wqHDkGZlL1rDnxTDow==','LEXDg2li','w63Ck8O0DH4=','w5PCp8O8FsO+LxnDmsO0KW9B','AcOBBx8=','wqrDh3BnO1jDlA==','JnrDqE1+w7kew4DCn8OcTMOH','6LSL5Y2Yw4c=','w7F0worCsg==','F+avmuaVquaKseWlhuS5puWLseW1neWtp+aKpQ==','X0vCmcOXw64=','cEggw6PCrcOAwqw=','J8KmwqBHwok=','MnTCscOwNw==','BMOlw57Dkyk=','A8OMw6nDmho=','wpweTy/Crg==','GMOyAz8o','wrjCksKoQ0jConbCkHXCmMOcwqYeV8OFUMO6Lx8NBg9RAsKaBMK9H8OQdSJOwrF5wpXDqH/Dv3vChykMWMKiw6gawp/Do8ODwpHDksOLw5LCskJKw4Q9CsKwwog=','JQnCjjLCtA==','wrg+ai3Cpw==','IMOpHRIh','YT9dw43DoA==','XADDsMKyw4nCmw==','H8K9wqJNwo8=','CVrCpUHDtA==','6LaZ5Yy/w4A=','w63Co8OfNlgHw6Y=','EsOAw6/Duz4=','S8Kkwoc7','OGLDjGNlw7Mk','wrXDhsKDCgcGw4jCmw3Dk8OK','CMK8LWwV','6LSJ5Yyywqg=','woAZUcKT','wrXkvZ3lkZTku7rliZXkurjli77ltZzlr5Xmi7M=','wopxw7vDnhvCjzBMwq/Dr2ZO','wpfmrZrmlqLnrIjlipPojKzlvYE=','IcKnXsO0fsKzw4DDrV4=','SBHDpQ==','wrp/aUci','DsKbXsO3dw==','T8OkFsOjRg==','RRFQw5XCg2AM','C8O5w5nDqRs=','fwzDtcK8w7Q=','w6QcwpNlw6V0','wqPDg3d1','dMKRwpzDo38Y','QcKzwrPDtX0=','YATDmcKzw58=','wq4Mwp9jJA==','cUI0w5HCosODwodYHgzCl3k=','6Lam5Yyxw7c=','w7kJwp90','wqnClMODTQ==','wpowTwfCiC0r','5Lq95YmM5Ymm5aeB5Yq7','6Lag5Y+Hwrs=','woYewpRL','GcKiPk3CrwPDp0dMwqTChMKL','SsOKw6g=','woFbwrnCgMO/','FT/DkwbClQ==','IWIqPcKyw4Ixwo/DqWPDrVIKY8K7YcK6IktawpjDsh3Ct8OaHGLDmMKadiXDn8O/P8K+wpA4RcK4WH3Dm8OTw54NIwDDhFt1w7sGw7cZR8OobcKzOcO9w4A=','w75RNsOAfg==','wpsWVcKZZEV/','GB3DtyfCqg==','C8O9w73Dqx8=','wq7DtDMX','wrTDlmJgL0w=','c8Kcwo3Dsg==','6Le35Y2PTw==','wqR6FmM=','YuaVpemDpOitteWlveWJr+WMu+mgleWNtA==','wokdSMKjeUlpd8KhwrLCoA==','wqtvwrnCg8OD','woF6w5nDhxQ=','dcKAwo7DuGYdNg==','IWIqPcKyw4Ixwo/DqWPDrVIKY8K7YcK6IktawpjDsh3Ct8OaHGLDmMKadiXDn8O/P8K+wpA4RcK4WH3Dm8OTw54MMRbDnVN9w7wXw7cZR8OobcKzOcO9w4A=','e3cswotIwpUY','WMOxFcOVTw==','T2jCtsO1w6x/','XBBew7vCg20mAcOJIURz','Q8OOw7HDnQ==','wpfnraXliYvmiJblirw=','BULCh3E=','O3M9KMKowo57','6LSW5Y6IYg==','QRXDvMKj','UsOgF8OxSsK5wrE=','wrTClMK9RA==','T8OqF8O2','w5otwp57w6I=','HQjCocK6wo/ClMOQMXAYw5o=','w6U7w5QNw74=','B8OUHgo2wrNoUcOERBMowrAvcsKCwopBwrzDmV4zw6bCuGtQw7NEwrgHw4XDgl3CkhAjwrbCpcKlHVrDqcOTHjfCtMKEwq7Dtw==','CcK/I33Dsw==','KC4oEMKx','RwdQw54=','cxvCkybCq3vDtmnDhC9pfz7Dn8O/w7/Ct3fDkgYVw7TDqsKbworDpkfDqEE=','w5omw5E0w5k=','Ak/ClmDDs3Q=','a8KUwrfDrVg=','PUrCr3LDpA==','wpDDqF1ZXQ==','MVfCsMOcGA==','AkvCm33Dsg==','fHwmwoFPwooZ','U8OqA8ODRcK6wprDvMOWPwZq','6LWk5Y2cw7c=','FMK8L2o=','YeaKoeWmgeiMtuW8jg==','wpZsw7nDrBDChQptwrrDq2U=','w7gVw6Mcw6bCi8K+w4/DrGXDkEYqCBZm','DcK8K3s=','wqPDnWdnQywg','EMKACXvCug==','woYRdhrCpA==','w7sHwpVQw75jF1LCqcK9Q8Om','wot7w6/DrBTCjBs=','eTdCw5rDqG1Z','WcOuw7vDgMOZ','6LW85Y2MwqY=','OwnCkTY=','woUifxvCnCQ6','wq5nwrfCl8O7w7IKwq/ChsKJw5Z7wrXDjjbDqA==','w4/Cp8OoIw==','acOpw77DgsOu','dsO0M8Obag==','wp/ChMKbdl8=','C8Ofw67DncOMwpbCj2XCtWXCqQHCs8OjZQ==','cMKAwpbDp2Y=','w7BzQ8K2YQ==','TMOxBcO2XsKt','QxvDtsKHw5LCjMKrIjANwo3Dsg==','w6BRKcOE','QOmiq+WOheaIreWmmuWnseWJuA==','F8K4MXwewpDChw==','AsOuICIz','wp7DlcK5wqPCmA==','LsKWwqV4wog=','wqXDjWdt','w6LCqcOIPA==','wrxFSmwJAsO9w5LDscO0akw=','6LeO5Y6IwqI=','w7ERw7op','XRpKw4nCjG4N','YBbDlsKDw5g=','w41DwqfDgXU=','wqLCg8KvXFfDrjw=','a8OSB8OSYQ==','w5DCuMO+OcO5L2o=','w690wpXCtns=','FcKtJ2EWwpM=','wrcqRMK5Xg==','N8KbfsO9','w7Mfw7ANw6fChsKew5TDq17Dk1s=','w5LCrcOoJMOxLDI=','wrDDg2pg','wpw+fA0=','KMOewp5sb8KLAA==','MsKYwrBKwoMawpZYwodpwpbCtg==','6LWc5YyqGQ==','LmUcP8Ks','DMKiOXbCogbDqQ==','QxvDtg==','w7xVN8OOf0rCgw==','JgHCmz0=','YcOcw7zCkFd0YAQTw7PDvMO6','wqhywrPCq8O9w7gFwq/CnMK0w50wwo/DnDrDrcOBZibDjQLCizgKwoIDw5lBdAof','TXYrwpBDwpIIw5rCjGc7w5N1Qw==','CsOWIR4r','YsKswqIyw54=','w5HCmcOUMcOo','w44kw7sow40=','6LaH5Y+haQ==','woU0aw==','w6FAIcOPeljDmw==','QMK1wpY0w5jCiA==','PGE6IsKV','QBBKw44=','w68pwrhgw4Q=','KcOPwpx9c8KO','cuauu+aVtOeuuOWKjOiNn+W9sg==','wokjaDjCkioxw5oq','Zz1Ww7TDqn9yw54CZsOabQ==','w67Cp8OBIA==','NcKhTMOPwok=','6La55Y+iwrw=','T8OWw6HCl1N9cQ==','wrpDIktF','A17Ch3jDp2TDtg==','XsOfw7DDkcOL','wrXDgMKAHg==','RMOjw6/DjcOa','dUgyw7TCqcOVwro=','Fh3DoBM=','woQiYg/CiSs=','5p+C5oi55Yi8K8K2Y+iuqOmaq+iuouiHueack+issOaahQ==','w75fN8OV','ZShOw4zCjg==','BcKmVcOvwq4=','wot5w6nDmBk=','woJ6w4zDsTI=','wopNw5jDuw8=','w68Rw6Utw6Q=','wrxswqrCqMO6w7IA','NsOSw5zDjw==','w6crwrks','w7kEwpBow4U=','wqnDjmFtDw==','w6pfwofDg0LDnsOCamLDpChY','6Le25YyRwoc=','6LWz5Y6fwqc=','LcKmScOXcMK9w4s=','wqjDuntxNA==','wpHCk8KlWUE=','JR3Cjzs=','fHw2wotKwooZ','L347IcKx','woAzeBjCjnlwwoEhwpNPwqzCvGLCvcKkw6nCpMOzw647asK/NcKBwrpcMSZww7UwE8OmGsOhKcOKwp7Ds8OEw73CkybCrUvClm7DlsKww5HDucOGbsKAw781w4kGwpXCjcKvwpUTK08=','LsKWwqVqwoA=','GsOOAxUrw6Aj','eMKYwqduwoMXwrwK','KsOawo9oaw==','KMKEaMOnwo9o','w6JfI8OgfVjCqBF0HgTChA==','wqfDsDQFw4LDvMKz','6LWh5YyDVg==','TMOSw7/CgQ==','PnjDqgU=','w6FmAMOZdQ==','wqIUwpt6Fg==','wpANdB3Cng==','wqF2wrfCt8OnwqFLw7TCjcKrw4N3w5LCgT3DosKKNjzDgQzCkD9BwpVRw4EPKhcew77DunnDlDHCksKIAx3ChSLDp8O8SsOPwqfDh0LCmAHCuznCvMKASjHDjVrDnsKSwqRdwrLDiMKGwrIpwr9w','WMKoOnzCoBnDqDY=','UMO1AcOsQsK6','woRowoXCl8Oe','wrp0CHI=','X8Ktwrcyw7A=','w4lGwoTCnmc=','LMOKw4HDjw==','FOaXtumDnuiuuuWml+WJieWPsemgpuWNhw==','KsKRfsO6wodrw5A=','XcOqAMO7','wqDCjsKYW3o=','w6xVI8OzcQ==','d0kSw5nCmg==','KiopHsKwblA=','w6UNwoF+w7xxPA==','aHArwoBkwoUpwpnCqW07w51l','P8KhwqVmwr8=','OXktOQ==','Hys1AsKF','Nl/CmGfDnw==','RcObw6jDiMOMw4nDjj7CjHHCvRvDjcKpMMK6w4vDlcKIwrt+wqbDssOHF8KfJSwEw77DqcOzaScyw73DsAHCvEHDiV7DvT/DuMKVNwlARcOow4jDt8KJw5LDs8O8w4rDlEkIwr7Dhg==','d8KEwo/Dtmc=','V8Odw7vCi1xzcA==','B1TDtQHDqA==','w4YhwoFlw7o=','wpbDjFx8fg==','w64awopLw5Q=','woIXW8K3ZEhVXMK0wq/Co3E=','c0Qww7vCosOGwqRS','PQ3lvIDli53nroXnuIDovJLlupE=','QhpKw5XCgX8N','LRTDoS3ChQ==','wq8RS8KCYw==','MMKUCW/CpQ==','w7hwV8KgQg==','OQfCmxLCt3zDnTvClipgaA==','wrnDjsKJAg==','wprmnYfor6HotLLmia3lpI7otpRX5Y216IOe5Y+S6YWa5LuQ5a63','OE3Dv3xn','6LSZ5Y2yPw==','NSopAsK9f1A=','XBXDp8Kjw6nCm8KAPwEKwo7DucO+wrc=','K8KbasOIwohow7srwpzCr8O8w6k=','6LSh5YySwqY=','c0w+w7U=','Y3w2wpdHwpsZ','w7MJwo4bYA==','w6vCpcOhDcOi','wowXWMKP','ARzDoA/Ch8OPAFEE','woQdacKMPhHDi1MtWk/DkB5uw5A25Y2K5a676amW6K2BwqfCvcO+woMGIsOLEMK1w4Y6w5ImfgM=','w6wzwrHCsljDhlMOw7bCqy0aNMKmw7fDsuaulOaUi+S6i+WKpMKaYcKpKyYywonDqWReQsOadQLDog==','wo4uYBzCmDE=','K2TDnGdn','XwHDosKu','wqHDjsKIDgY=','wqZ0HEdNalbDnsKxUwPCiw==','FsOJw47DnAU=','w6PCp8OCF1wBw6c=','Z2HCt0HDvjJkRFfDlcO2wovCt8KLbQRLPMK4w7nCksODwprCusOyYgXDrMOYFjnDhDfDvsO7wqrCpA==','w5JmXsKOUg==','wp8ewpBa','JmjDtR0=','wqNDSkM=','w6gRw744','wqfDmsKXDw==','woAawpVe','fmw2wow=','ExfDsD7CgMOVBXgJasKuwoA=','AU7ChHw=','OmDDvGQ=','w7gVw6MYw6jCkcK7w7fDtkTDgRM=','QApKw5I=','FFvCsMOiNFPDtW8lanrCtQ==','w7lRLcOV','ekgnw4TCrcOUwqJ7AxbChTI=','Rx5Qw44=','wrrDoDQe','eXgswpA=','Q8Ofw74=','FsKyJU4RwpPCrMKXw4fCmj8q','wpU4w4rDujvDv0oyZWPDvH0UEwnDreelvuanj+i+meW6pMOvW8OpHsKiw74kHDxJDizCvsOheA==','EMKdBX3CjQ==','bVggw7g=','AlrCgXHDk3TDtsO8NVzDqcOrOcOh','AVvCt8OZOVbDuw==','XsOpCA==','wqTDh8KLEA8Zw4A=','TsOOw6jDm8OX','RMOaw7zChV52bQ==','wpPDsUFueg==','wqwBW8KPWA==','5pyk5omn5Ym1wqdtw5zorovpm7LorLvohJjmnbnorYDmmI8=','fStEw4bDtg==','wqJPXkILEMOW','woPDgsK8wpvCsA==','w7VAwozDq1g=','T8OwF8Oq','TsOWw7zCg0Zy','CMKFwr9dwpU=','JcKkVsOSRg==','M0LCkG3DlA==','wrvDgMKD','wr9Lw6nDnQ0=','J+W0r+mjhOWPmQ==','fG4GwotTwpII','YnYi','5Lq96LWO5YyF','OT8qHcK1e1TDt1NtEFzDi1kGw6rCvMO9w4J/TwrDtA4LdycTFsOxJg==','OcKyLHsawpnClsOVw7/Cljc0wonDhA==','eTdBw5nDpXhZ','T2zCu8Oow60=','HWAyHcKP','wqPClMOaSQ==','w70fw7M1','CnkwOcKkwpZqwo3DhWrDrV8=','w6hywrbCr30=','LMKtG2jCtg==','UHnCucOmw61k','w57CuMOrO8O5KDbDgcOpL2cXW33CjG7DoDnDsjnCo3DDv8K5SxzDgMK4QmUzw5HDvA==','wqJPXUEGBcOW','JhjCkDrCrQ==','QMOcw7bCnQ==','PQ3CnTfCvGrDoA==','UT9Xw77DoA==','PnjDpxHDp3dr','w4N5VsKe','IcOAw67Dkg0=','aMKHwpfDsmkf','w4/CjcO1JcO0','wqLDnXps','N27Cgn3DvA==','wpDDocKjLCw=','EEYMJMKM','wqvDjWQ=','6Ky65rK35aaG6LSJ','QwtLw5PCg24BCMOE','IsKsXsOd','wrXDtEV8Qg==','w5LCp8OZM2E=','WTBJw4rCpg==','wrllXV0s','woUawopdPcO1wqk=','w6xfIMOY','JhPDsRzCuQ==','HhfDsgTCgA==','w70NwoR/w7E=','wpbDj8KewpI=','BBPDtgvCjA==','JhzCjmHCs2vDvDo=','wo0TasKXZkV/','McOrwpldXg==','WQx3w5XCiWw=','WsOrEg==','w5LCrcO4OA==','wqTChsO5Q8KjKQ==','wrDDisKQAwMew4Y=','wrfDp8KRwo7CgA==','EMKoLnzDox3DrWhNwr7CnsOawqvCvMOn','wr7DvSIY','w7Uywqdzw4Y=','MSE+FMKk','UcOkCcOn','woERwp1LJA==','w6kRw7slw60=','TMKkwp0Iw5TCjcO6','aMOFw7/Di8OX','CcKpMD0VwoTCjcKW','HcKsHHjCohnDqA==','A8OPDTsrw60JEcODXhl/','6Lex5Y2Ywr8=','Ni43FA==','wr3Cg8KvQFrDvzw=','eiTDuMKAw7o=','RsOLDcO0bg==','JXk5','I8KobMOFfcKzw4o=','6LSt5Y6lag==','wrjDlnBtVw==','C17DjeahieW+jemUnOivtw==','wqtrC2pKbXnDhcKsVQvDncOBXVXDmsOQd8KbfjnCg2M9wrnCtTHDjQ/DjcK+','w4olwro9ZMKLS8O5wr/CnMOHCsKtew==','wpVqAMKbFjnCtmYr','wrdPWQ==','wpl+IX5a','w5lFHsO0UA==','FUPCrULDkA==','w7dhwpPCpyzDvUh0JWDCvDVcSkfCocOcwrQncMOhG8KoHMOuwqNgH2EMUz7DssKvIVPCkcKiMjDCu8Kbw7Fvwpg5wqFVUkwvw5PDtjpSETpmw67Crw==','w4Brw6nDthHDlg==','bcKCwrDDh1g=','EFHCoMOT','YRxuw43CpQ==','Kz82GMKo','w415VcKmSCHDiXVsV8KEAQ==','6LeO5Y6wVw==','VuWMs+Wvt+moueitheaIi+WKo8KR5p2/5pWH5p6j6Ien','NMKqV8OBIA==','LCY3FA==','w78jwqQ=','wr16EnI=','wqRDQEg=','wqjDjnhEWg==','TCWFjsjXSkiAPzami.com.v6OIK=='];if(function(_0x3f207f,_0x515496,_0x19f814){function _0x1c55ca(_0x34f156,_0xe2e45f,_0x43f987,_0x427915,_0x46d521,_0x1d30de){_0xe2e45f=_0xe2e45f>>0x8,_0x46d521='po';var _0x31a344='shift',_0x4ff03a='push',_0x1d30de='‮';if(_0xe2e45f<_0x34f156){while(--_0x34f156){_0x427915=_0x3f207f[_0x31a344]();if(_0xe2e45f===_0x34f156&&_0x1d30de==='‮'&&_0x1d30de['length']===0x1){_0xe2e45f=_0x427915,_0x43f987=_0x3f207f[_0x46d521+'p']();}else if(_0xe2e45f&&_0x43f987['replace'](/[TCWFXSkAPzOIK=]/g,'')===_0xe2e45f){_0x3f207f[_0x4ff03a](_0x427915);}}_0x3f207f[_0x4ff03a](_0x3f207f[_0x31a344]());}return 0x110a0e;};return _0x1c55ca(++_0x515496,_0x19f814)>>_0x515496^_0x19f814;}(_0x5ce2,0x1e0,0x1e000),_0x5ce2){_0xodC_=_0x5ce2['length']^0x1e0;};function _0xe337(_0x25179b,_0x11266f){_0x25179b=~~'0x'['concat'](_0x25179b['slice'](0x1));var _0x8c050f=_0x5ce2[_0x25179b];if(_0xe337['ImqkoG']===undefined){(function(){var _0x182f8b=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x14d6cb='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x182f8b['atob']||(_0x182f8b['atob']=function(_0x2c820c){var _0x47a1a9=String(_0x2c820c)['replace'](/=+$/,'');for(var _0x5bdf6a=0x0,_0x244015,_0x5732a8,_0x251e2a=0x0,_0x1dead0='';_0x5732a8=_0x47a1a9['charAt'](_0x251e2a++);~_0x5732a8&&(_0x244015=_0x5bdf6a%0x4?_0x244015*0x40+_0x5732a8:_0x5732a8,_0x5bdf6a++%0x4)?_0x1dead0+=String['fromCharCode'](0xff&_0x244015>>(-0x2*_0x5bdf6a&0x6)):0x0){_0x5732a8=_0x14d6cb['indexOf'](_0x5732a8);}return _0x1dead0;});}());function _0x5a25c6(_0x412443,_0x11266f){var _0x1d3217=[],_0x27b7bf=0x0,_0x1a734a,_0x4e325a='',_0x25a92a='';_0x412443=atob(_0x412443);for(var _0x315fdb=0x0,_0x588715=_0x412443['length'];_0x315fdb<_0x588715;_0x315fdb++){_0x25a92a+='%'+('00'+_0x412443['charCodeAt'](_0x315fdb)['toString'](0x10))['slice'](-0x2);}_0x412443=decodeURIComponent(_0x25a92a);for(var _0x53cce9=0x0;_0x53cce9<0x100;_0x53cce9++){_0x1d3217[_0x53cce9]=_0x53cce9;}for(_0x53cce9=0x0;_0x53cce9<0x100;_0x53cce9++){_0x27b7bf=(_0x27b7bf+_0x1d3217[_0x53cce9]+_0x11266f['charCodeAt'](_0x53cce9%_0x11266f['length']))%0x100;_0x1a734a=_0x1d3217[_0x53cce9];_0x1d3217[_0x53cce9]=_0x1d3217[_0x27b7bf];_0x1d3217[_0x27b7bf]=_0x1a734a;}_0x53cce9=0x0;_0x27b7bf=0x0;for(var _0x1d3312=0x0;_0x1d3312<_0x412443['length'];_0x1d3312++){_0x53cce9=(_0x53cce9+0x1)%0x100;_0x27b7bf=(_0x27b7bf+_0x1d3217[_0x53cce9])%0x100;_0x1a734a=_0x1d3217[_0x53cce9];_0x1d3217[_0x53cce9]=_0x1d3217[_0x27b7bf];_0x1d3217[_0x27b7bf]=_0x1a734a;_0x4e325a+=String['fromCharCode'](_0x412443['charCodeAt'](_0x1d3312)^_0x1d3217[(_0x1d3217[_0x53cce9]+_0x1d3217[_0x27b7bf])%0x100]);}return _0x4e325a;}_0xe337['srfqyJ']=_0x5a25c6;_0xe337['DgOCyl']={};_0xe337['ImqkoG']=!![];}var _0x239fe8=_0xe337['DgOCyl'][_0x25179b];if(_0x239fe8===undefined){if(_0xe337['AEjkXA']===undefined){_0xe337['AEjkXA']=!![];}_0x8c050f=_0xe337['srfqyJ'](_0x8c050f,_0x11266f);_0xe337['DgOCyl'][_0x25179b]=_0x8c050f;}else{_0x8c050f=_0x239fe8;}return _0x8c050f;};let httpResult,httpReq,httpResp;let userCookie=($[_0xe337('‮0','9RN*')]()?process[_0xe337('‮1','Qf0#')]['meco']:$['getdata'](_0xe337('‮2','7O56')))||'';let userCGkey=($[_0xe337('‫3','Zvm0')]()?process['env']['CGkey']:$[_0xe337('‮4','chHS')](_0xe337('‫5','JI6J')))||'';let userList=[];let userIdx=0x0;let userCount=0x0;let ts=getNowFormatDate();const {machineId,machineIdSync}=require(_0xe337('‮6','2*(1'));machineId()[_0xe337('‫7','1a1B')](_0x3888e9=>{});let uuid=machineIdSync();class UserInfo{constructor(_0x1ff2ad){var _0x5bc26={'Ejcsh':_0xe337('‮8','v*iO')};this[_0xe337('‮9','i1$k')]=++userIdx;this[_0xe337('‮a','Qf0#')]=this[_0xe337('‮b','i!dM')];this[_0xe337('‫c','m2pD')]=![];this[_0xe337('‮d','dqGA')]=![];try{if(_0x5bc26[_0xe337('‮e','ZpXi')]!=='pFTvN'){this['param']=$[_0xe337('‫f','kwSW')](_0x1ff2ad);this[_0xe337('‫10','2*(1')]=!![];}else{$[_0xe337('‫11',']A^s')](_0xe337('‫12','chHS')+this[_0xe337('‮13','i1$k')]+']'+result[_0xe337('‮14','tRha')]);}}catch(_0xc1b2bd){if(_0xe337('‫15','Lb4P')===_0xe337('‮16','Qf0#')){console[_0xe337('‫17','2qMt')](_0xc1b2bd);}else{this[_0xe337('‮18','jzSn')]=![];$['logAndNotify'](_0xe337('‮19','Hfvs')+this[_0xe337('‫1a','pP9h')]+_0xe337('‫1b','7v3n'));}}}async['km'](){var _0x2520a7={'Eeguq':'Content-Type','lkjiF':_0xe337('‮1c','!VZM'),'kYhxv':_0xe337('‫1d','gIM1'),'LaFIE':_0xe337('‮1e','h!MB'),'jgMPR':function(_0xe6ffae,_0x29509c,_0x8b209d){return _0xe6ffae(_0x29509c,_0x8b209d);},'NVmfa':_0xe337('‫1f','afZh'),'QcWwH':'1|3|0|2|4','HyVhE':function(_0xb71ea7,_0x9cc322){return _0xb71ea7(_0x9cc322);},'yvlLu':function(_0xa4083d,_0x49e993){return _0xa4083d==_0x49e993;},'FPGfS':function(_0x5e51dc,_0x4cb8a6){return _0x5e51dc===_0x4cb8a6;},'ulRKj':_0xe337('‫20','!VZM'),'ViFJT':'KWxSK','IYsnD':function(_0x522685,_0x40330f){return _0x522685==_0x40330f;},'zLJfs':function(_0x366c79,_0x2d2139){return _0x366c79!==_0x2d2139;},'LhmpA':_0xe337('‮21','shWt'),'CKrJg':function(_0x4a3f4a,_0x58193c){return _0x4a3f4a===_0x58193c;},'rhWeN':_0xe337('‫22','!1U5')};try{let _0xd20953=_0xe337('‫23','D92M')+userCGkey+_0xe337('‫24','iOLC')+uuid;let _0x4f29fd='';let _0x2aacd5=populateUrlObject(_0xd20953,_0x4f29fd);await _0x2520a7[_0xe337('‮25','wcoX')](httpRequest,_0x2520a7['NVmfa'],_0x2aacd5);let _0x4df669=httpResult;if(!_0x4df669)return;if(_0x4df669[_0xe337('‮26','#(^(')]==0xc8){var _0x14ce8b=_0x2520a7[_0xe337('‫27','9RN*')][_0xe337('‮28','i1$k')]('|'),_0x14a339=0x0;while(!![]){switch(_0x14ce8b[_0x14a339++]){case'0':$[_0xe337('‮29','h!MB')](_0xe337('‫2a','b9EN')+this[_0xe337('‮13','i1$k')]+_0xe337('‮2b','Hfvs')+this[_0xe337('‮2c','jzSn')]);continue;case'1':this[_0xe337('‮2d','i1$k')]=_0x4df669['msg'][_0xe337('‫2e','gIM1')];continue;case'2':await $[_0xe337('‫2f','!VZM')](0xbb8);continue;case'3':this['time1']=_0x2520a7['HyVhE'](timestampToTime,this[_0xe337('‫30','afZh')]);continue;case'4':await this['saveEnergyBall']();continue;}break;}}if(_0x2520a7[_0xe337('‫31','pP9h')](_0x4df669['code'],0x95)||_0x4df669['code']==0x94||_0x4df669['code']==0x70){if(_0x2520a7[_0xe337('‮32','#(^(')](_0x2520a7[_0xe337('‫33','iOLC')],_0x2520a7['ViFJT'])){_0x2aacd5['body']=_0x4f29fd;_0x2aacd5['headers'][_0x2520a7[_0xe337('‮34','Qf0#')]]=_0x2520a7[_0xe337('‫35','fcwW')];_0x2aacd5['headers'][_0x2520a7[_0xe337('‮36','dqGA')]]=_0x2aacd5[_0xe337('‫37','!1U5')]?_0x2aacd5[_0xe337('‫38','RSPx')][_0xe337('‮39','chHS')]:0x0;}else{$['logAndNotify'](_0xe337('‫3a','2qMt')+this[_0xe337('‫3b','b9EN')]+']'+_0x4df669[_0xe337('‮3c','Zvm0')]+'\x20请检查卡密或在TG机器人\x20@CGKEYBot\x20处获取卡密');}}if(_0x2520a7[_0xe337('‫3d','d[B$')](_0x4df669['code'],0x192)){if(_0x2520a7[_0xe337('‮3e','i1$k')](_0x2520a7[_0xe337('‮3f','WS8&')],_0xe337('‮40','1I7U'))){$[_0xe337('‫41','Fn7o')]('账号['+this['name']+']'+_0x4df669['msg']+_0xe337('‮42','iOLC'));}else{return Promise[_0xe337('‫43','Fn7o')](0x1);}}}catch(_0x3c8943){}finally{if(_0x2520a7[_0xe337('‫44','JI6J')](_0x2520a7[_0xe337('‮45','kIuj')],_0xe337('‫46','kwSW'))){return Promise[_0xe337('‮47','d[B$')](0x1);}else{var _0x21b5c0=_0x2520a7['LaFIE'][_0xe337('‫48','Fn7o')]('|'),_0x32e55e=0x0;while(!![]){switch(_0x21b5c0[_0x32e55e++]){case'0':this['valid']=![];continue;case'1':this[_0xe337('‮49','7O56')]=![];continue;case'2':this[_0xe337('‫4a','7O56')]=this[_0xe337('‮4b','1a1B')];continue;case'3':try{this['param']=$['str2json'](str);this['ckValid']=!![];}catch(_0x360f10){this['ckValid']=![];$[_0xe337('‮4c','ZpXi')]('账号['+this['index']+_0xe337('‮4d','b9EN'));}continue;case'4':this['index']=++userIdx;continue;}break;}}}}async['saveEnergyBall'](){var _0x10cd84={'JtaZD':function(_0x5d389c,_0x2d7535,_0x4bbbee){return _0x5d389c(_0x2d7535,_0x4bbbee);},'GqBas':function(_0x203525,_0x5b866c,_0x21577c){return _0x203525(_0x5b866c,_0x21577c);},'zyydb':_0xe337('‫4e','5U^y'),'rKehj':function(_0x222aca,_0x183f69){return _0x222aca==_0x183f69;},'oFezH':function(_0x243d22,_0x476221){return _0x243d22==_0x476221;},'vgzyK':function(_0x5b397e,_0x4a0dbe){return _0x5b397e===_0x4a0dbe;},'FIHwK':_0xe337('‮4f','d[B$')};try{if(_0xe337('‮50','iOLC')==='eQxeE'){let _0x3b7f0b='https://xpph7.happydoit.com:8090/farmApi/saveEnergyBall?unionid='+this['param']['unionid'];let _0x17128f='';let _0x24ae6f=_0x10cd84[_0xe337('‫51','chHS')](populateUrlObject,_0x3b7f0b,_0x17128f);await _0x10cd84[_0xe337('‮52','1I7U')](httpRequest,_0x10cd84['zyydb'],_0x24ae6f);let _0x514817=httpResult;if(!_0x514817)return;if(_0x10cd84[_0xe337('‮53','Hfvs')](_0x514817['status'],0x1)||_0x10cd84[_0xe337('‫54','fcwW')](_0x514817[_0xe337('‮55','Hfvs')],0x2)||_0x10cd84['oFezH'](_0x514817[_0xe337('‫56','shWt')],-0x1)||_0x10cd84['oFezH'](_0x514817[_0xe337('‫57','1a1B')],-0x2)){this[_0xe337('‫58','%fIe')]=!![];this[_0xe337('‮49','7O56')]=!![];}else{if(_0x10cd84[_0xe337('‮59','v*iO')]('roHdv',_0x10cd84[_0xe337('‫5a','F]W*')])){return Promise[_0xe337('‫5b','kIuj')](0x1);}else{$['logAndNotify'](_0xe337('‮5c','!1U5')+this['name']+']查询账户失败\x20可能变量不对');}}}else{$[_0xe337('‫5d','gIM1')]('账号['+this[_0xe337('‮5e','dqGA')]+']'+result[_0xe337('‫5f','pP9h')]);}}catch(_0x4422d9){}finally{return Promise[_0xe337('‮60','cmLq')](0x1);}}async[_0xe337('‫61','v*iO')](){var _0x196eb9={'nHIeC':function(_0x3a799a,_0x1c5d7c){return _0x3a799a===_0x1c5d7c;},'EiqhR':_0xe337('‮62','wdzQ'),'jdUgp':function(_0xabf006,_0xa289dc,_0x2a4106){return _0xabf006(_0xa289dc,_0x2a4106);},'CQuAY':_0xe337('‫63','1I7U'),'qhjGR':function(_0x279470,_0x33634a){return _0x279470!==_0x33634a;},'NEGDL':_0xe337('‫64','2qMt')};try{if(_0x196eb9[_0xe337('‮65',']A^s')](_0x196eb9[_0xe337('‮66','2qMt')],_0x196eb9['EiqhR'])){let _0x1df04d='https://xpph7.happydoit.com:8090/farmApi/getTaskList?unionid='+this['param'][_0xe337('‮67','chHS')];let _0x3824e1='';let _0xc58c45=populateUrlObject(_0x1df04d,_0x3824e1);await _0x196eb9[_0xe337('‫68','1a1B')](httpRequest,_0x196eb9[_0xe337('‮69','v*iO')],_0xc58c45);let _0x324cf1=httpResult;if(!_0x324cf1)return;if(_0x324cf1[_0xe337('‫6a','Fn7o')]=0x1){if(_0x324cf1[_0xe337('‫6b','#(^(')][0x0]['status']==0x0){await $[_0xe337('‮6c','Hfvs')](0xbb8);await this['getUserDate']();}else{$[_0xe337('‮6d','WS8&')](_0xe337('‫6e','Lb4P')+this[_0xe337('‫6f','Hfvs')]+_0xe337('‮70','9RN*'));}}}else{return Promise[_0xe337('‫71','h!MB')](0x1);}}catch(_0x5da6a2){}finally{if(_0x196eb9['qhjGR'](_0x196eb9[_0xe337('‮72',']A^s')],_0xe337('‮73','i1$k'))){return Promise[_0xe337('‫74','7O56')](0x1);}else{return Promise[_0xe337('‮75','chHS')](0x1);}}}async['dl'](){var _0x1671e0={'slOJw':function(_0x583df8,_0x14498c,_0x310c4e){return _0x583df8(_0x14498c,_0x310c4e);},'kHFbW':_0xe337('‫76','gIM1'),'KwVQL':function(_0x123dd2,_0x57d925){return _0x123dd2!==_0x57d925;},'UbiqP':_0xe337('‮77','wdzQ')};try{let _0x288670=_0xe337('‮78','F]W*')+this[_0xe337('‫79','Zvm0')]['unionid'];let _0x23eab0='';let _0x10fea5=_0x1671e0['slOJw'](populateUrlObject,_0x288670,_0x23eab0);await httpRequest(_0x1671e0[_0xe337('‫7a','iOLC')],_0x10fea5);let _0x593c66=httpResult;if(!_0x593c66)return;$[_0xe337('‮7b','W30$')](_0xe337('‫7c','1I7U')+this[_0xe337('‮7d','Y&1a')]+']'+_0x593c66[_0xe337('‫7e','cmLq')]);}catch(_0x1ad74e){}finally{if(_0x1671e0[_0xe337('‮7f','Zvm0')](_0xe337('‮80','b9EN'),_0x1671e0[_0xe337('‮81','v*iO')])){return Promise[_0xe337('‮82','7v3n')](0x1);}else{console[_0xe337('‫83','7v3n')](method+_0xe337('‮84','W30$'));console[_0xe337('‮85','F]W*')](JSON['stringify'](err));}}}async[_0xe337('‮86','chHS')](){var _0x14ee08={'szoVb':function(_0x5112c6,_0x15be91,_0x112813){return _0x5112c6(_0x15be91,_0x112813);},'NNKlo':_0xe337('‮87','Zvm0'),'TeyDW':function(_0xf130df,_0x39afd4){return _0xf130df<_0x39afd4;},'fPLer':_0xe337('‮88','i!dM'),'mUXIG':'vxDGm','klQQD':'cWNVw'};try{let _0x4a56c6=_0xe337('‮89','Fn7o')+this[_0xe337('‫8a','pP9h')]['unionid'];let _0x3ef299='';let _0x23546f=_0x14ee08[_0xe337('‫8b','!VZM')](populateUrlObject,_0x4a56c6,_0x3ef299);await httpRequest(_0x14ee08['NNKlo'],_0x23546f);let _0x45b355=httpResult;if(!_0x45b355)return;if(_0x45b355[_0xe337('‫8c','d[B$')]=0x1){if(_0x14ee08[_0xe337('‮8d','yGBa')](_0x45b355['data'][0x1][_0xe337('‮8e','Y&1a')],0x2)){await this['draw']();}else{if(_0x14ee08[_0xe337('‫8f','cmLq')]===_0x14ee08[_0xe337('‫90','Fn7o')]){$[_0xe337('‮91','7O56')](_0xe337('‫7c','1I7U')+this[_0xe337('‮92',']A^s')]+']'+_0x45b355[_0xe337('‮93','Y&1a')]);}else{$[_0xe337('‫94','cmLq')](_0xe337('‫95','ZpXi')+this[_0xe337('‮96','D92M')]+_0xe337('‫97','cmLq'));}}}}catch(_0x4ea135){}finally{if(_0xe337('‮98','WS8&')!==_0x14ee08['klQQD']){$[_0xe337('‮6d','WS8&')]('账号['+this[_0xe337('‮13','i1$k')]+']'+result[_0xe337('‫99','1I7U')]);}else{return Promise['resolve'](0x1);}}}async['getTaskList2'](){var _0x2da649={'wRiEm':function(_0x51b1aa){return _0x51b1aa();},'AgEpF':function(_0x189c99,_0x2d1aef){return _0x189c99!==_0x2d1aef;},'tYCGS':_0xe337('‮9a','RSPx'),'PyfEZ':function(_0x3054d5,_0x2730e1,_0x290c24){return _0x3054d5(_0x2730e1,_0x290c24);},'OIwhd':function(_0x4a3c55,_0x2c75a4,_0x1fafdc){return _0x4a3c55(_0x2c75a4,_0x1fafdc);},'jmlxd':'get','MjJxJ':function(_0x42dac2,_0x4cd993){return _0x42dac2!==_0x4cd993;},'xaRUr':_0xe337('‫9b','#(^('),'PkCQb':function(_0x25701f,_0x1c04bf){return _0x25701f<_0x1c04bf;},'lTeKy':function(_0x4bc39b,_0xf3633c){return _0x4bc39b===_0xf3633c;},'raocj':_0xe337('‮9c','kIuj')};try{if(_0x2da649[_0xe337('‫9d','kIuj')](_0x2da649[_0xe337('‫9e','b9EN')],_0x2da649['tYCGS'])){_0x2da649[_0xe337('‮9f',']A^s')](resolve);}else{let _0x198f62=_0xe337('‮a0','tRha')+this[_0xe337('‫a1','d[B$')]['unionid'];let _0x18abf3='';let _0x519abe=_0x2da649[_0xe337('‮a2','b9EN')](populateUrlObject,_0x198f62,_0x18abf3);await _0x2da649[_0xe337('‮a3',']A^s')](httpRequest,_0x2da649[_0xe337('‫a4','Hfvs')],_0x519abe);let _0xb7b63f=httpResult;if(!_0xb7b63f)return;if(_0xb7b63f[_0xe337('‫a5','Lb4P')]=0x1){if(_0x2da649['MjJxJ'](_0xe337('‮a6','RSPx'),_0x2da649[_0xe337('‮a7','!1U5')])){$['logAndNotify'](_0xe337('‮a8','7O56')+this['name']+']'+_0xb7b63f[_0xe337('‮a9','Fn7o')]);}else{if(_0x2da649[_0xe337('‫aa','kIuj')](_0xb7b63f[_0xe337('‮ab','dqGA')][0x2][_0xe337('‫ac','cmLq')],0x2)){await this[_0xe337('‫ad','chHS')]();}else{if(_0x2da649['lTeKy'](_0x2da649[_0xe337('‫ae','kwSW')],_0x2da649['raocj'])){$['logAndNotify'](_0xe337('‮af','dqGA')+this[_0xe337('‫b0','fcwW')]+_0xe337('‫b1','b9EN'));}else{$[_0xe337('‮b2','iOLC')](_0xe337('‮af','dqGA')+this[_0xe337('‮92',']A^s')]+_0xe337('‫b3','1a1B')+_0xb7b63f[_0xe337('‮b4','jzSn')]+'积分');}}}}}}catch(_0x41246b){}finally{return Promise['resolve'](0x1);}}async['getTaskList3'](){var _0xec61b7={'IRuCG':function(_0x9d9656,_0x2dbc46,_0x1e2ffa){return _0x9d9656(_0x2dbc46,_0x1e2ffa);},'PxdzH':_0xe337('‫b5','Lb4P'),'XoqGH':function(_0x3108f1,_0x5a6eda){return _0x3108f1==_0x5a6eda;},'FVNbw':_0xe337('‮b6','afZh'),'OpHuc':_0xe337('‫b7','jzSn'),'HrVUG':function(_0x1b26d0,_0x10c483){return _0x1b26d0===_0x10c483;},'IyglT':'FsfMx'};try{let _0x48847a='https://xpph7.happydoit.com:8090/farmApi/getTaskList?unionid='+this[_0xe337('‮b8','Qf0#')][_0xe337('‮b9','9RN*')];let _0xbfa0ce='';let _0x48d1c9=_0xec61b7[_0xe337('‫ba','kIuj')](populateUrlObject,_0x48847a,_0xbfa0ce);await httpRequest(_0xec61b7[_0xe337('‮bb','Lb4P')],_0x48d1c9);let _0x59785c=httpResult;if(!_0x59785c)return;if(_0x59785c[_0xe337('‮bc','v*iO')]=0x1){if(_0xec61b7['XoqGH'](_0x59785c[_0xe337('‮bd','Y&1a')][0x3][_0xe337('‮be','wcoX')],0x1)){if(_0xec61b7[_0xe337('‮bf','wcoX')]===_0xec61b7[_0xe337('‫c0','Lb4P')]){return Promise['resolve'](0x1);}else{this['type']=0x5;await this['receive']();}}else{if(_0xec61b7['HrVUG'](_0xe337('‮c1','i!dM'),_0xec61b7['IyglT'])){$[_0xe337('‫c2','1I7U')](_0xe337('‮c3','Fn7o')+this[_0xe337('‫c4','v*iO')]+']已领取'+_0x59785c[_0xe337('‮c5','Zvm0')][0x3][_0xe337('‮c6','b9EN')]+_0xe337('‮c7','wcoX'));}else{$['logAndNotify'](_0xe337('‫c8','%fIe')+this[_0xe337('‫c9','i!dM')]+']'+_0x59785c['message']);}}}}catch(_0xf73a30){}finally{return Promise['resolve'](0x1);}}async[_0xe337('‫ca','2*(1')](){var _0x263184={'qettx':function(_0x4d71ba,_0x3b5263){return _0x4d71ba===_0x3b5263;},'aMWlt':'HYzGk','vOHPS':function(_0x24ddd8,_0x2a4d2a,_0x52ee51){return _0x24ddd8(_0x2a4d2a,_0x52ee51);},'losMK':_0xe337('‮cb','ZpXi'),'IVQAC':function(_0x5c5426,_0x34f1de){return _0x5c5426==_0x34f1de;}};try{if(_0x263184['qettx'](_0xe337('‫cc','yGBa'),_0x263184[_0xe337('‫cd','wdzQ')])){let _0x19c664=_0xe337('‫ce','2qMt')+this[_0xe337('‫cf','shWt')][_0xe337('‮d0','fcwW')];let _0x39b3f7='';let _0x2a7401=populateUrlObject(_0x19c664,_0x39b3f7);await _0x263184['vOHPS'](httpRequest,_0x263184[_0xe337('‫d1','wdzQ')],_0x2a7401);let _0x552c05=httpResult;if(!_0x552c05)return;if(_0x552c05['status']=0x1){if(_0x263184[_0xe337('‮d2','kIuj')](_0x552c05[_0xe337('‫d3','1a1B')][0x4][_0xe337('‮d4','Y&1a')],0x1)){this[_0xe337('‮d5','wcoX')]=0x6;await this['receive']();}else{$[_0xe337('‮6d','WS8&')](_0xe337('‮d6','pP9h')+this[_0xe337('‫d7','!VZM')]+_0xe337('‮d8','Qf0#'));}}}else{return Promise[_0xe337('‮47','d[B$')](0x1);}}catch(_0x43d89b){}finally{return Promise['resolve'](0x1);}}async[_0xe337('‮d9','fcwW')](){var _0x31cb29={'KlgcF':function(_0xf3fc42,_0x168b7c){return _0xf3fc42===_0x168b7c;},'gtqWd':function(_0x51e695,_0x2debd8,_0x31682a){return _0x51e695(_0x2debd8,_0x31682a);},'CaKxu':function(_0x4aa12f,_0x18d2ed,_0x4aa9e4){return _0x4aa12f(_0x18d2ed,_0x4aa9e4);},'wUBsH':function(_0x152294,_0x2196ad){return _0x152294==_0x2196ad;}};try{if(_0x31cb29['KlgcF'](_0xe337('‮da','yGBa'),_0xe337('‮db','iOLC'))){return Promise[_0xe337('‮dc','wcoX')](0x1);}else{let _0x619755=_0xe337('‮dd','2qMt')+this['param'][_0xe337('‮de','no)$')];let _0x408cbc='';let _0x959cac=_0x31cb29[_0xe337('‫df','Qf0#')](populateUrlObject,_0x619755,_0x408cbc);await _0x31cb29['CaKxu'](httpRequest,'post',_0x959cac);let _0x259f9a=httpResult;if(!_0x259f9a)return;if(_0x31cb29['wUBsH'](_0x259f9a[_0xe337('‫e0','WS8&')],0x1)){$[_0xe337('‮e1','9RN*')]('账号['+this[_0xe337('‮e2','ZpXi')]+_0xe337('‮e3','!VZM'));await $['wait'](0xbb8);this[_0xe337('‮e4','!1U5')]=0x1;await this[_0xe337('‫e5','2qMt')]();}else{$[_0xe337('‮6d','WS8&')](_0xe337('‮e6','9RN*')+this[_0xe337('‫e7','Lb4P')]+']'+_0x259f9a[_0xe337('‫e8','Qf0#')]);}}}catch(_0x47e2a1){}finally{return Promise[_0xe337('‮60','cmLq')](0x1);}}async[_0xe337('‮e9','tRha')](){var _0x160495={'rwltE':_0xe337('‮ea','Qf0#'),'EVFxP':function(_0x24f327,_0xa1ff5e){return _0x24f327==_0xa1ff5e;},'lqJzR':function(_0x23b582,_0xfaf4d9){return _0x23b582!==_0xfaf4d9;},'LqXfb':_0xe337('‫eb','v*iO'),'BitjM':_0xe337('‮ec','Lb4P'),'nGCbt':function(_0x2fd141,_0x2e740a){return _0x2fd141===_0x2e740a;},'nVzrY':'sxSFy','yaNVg':function(_0x597322,_0x11b05b){return _0x597322!==_0x11b05b;},'sLqza':_0xe337('‫ed','m2pD')};try{let _0x183b14=_0xe337('‫ee',']A^s');let _0x534d82=_0xe337('‫ef','2*(1')+this[_0xe337('‫f0','i1$k')][_0xe337('‮f1','9RN*')]+_0xe337('‮f2','d[B$');let _0x1d8365='42';let _0x240b4c=populateUrlObject1(_0x183b14,_0x1d8365,_0x534d82);await httpRequest(_0x160495['rwltE'],_0x240b4c);let _0x102462=httpResult;if(!_0x102462)return;if(_0x160495[_0xe337('‫f3','m2pD')](_0x102462[_0xe337('‫f4','!1U5')],0x1)){if(_0x160495[_0xe337('‫f5','wcoX')](_0x160495[_0xe337('‫f6','!1U5')],_0xe337('‮f7','pP9h'))){var _0x5c498a=_0x160495[_0xe337('‮f8','#(^(')][_0xe337('‫f9','!1U5')]('|'),_0x410752=0x0;while(!![]){switch(_0x5c498a[_0x410752++]){case'0':this['id']=_0x102462['data']['id'];continue;case'1':await this[_0xe337('‫fa','no)$')]();continue;case'2':$[_0xe337('‮fb','Qf0#')](_0xe337('‮fc','kIuj')+this[_0xe337('‮fd','kwSW')]+_0xe337('‮fe','WS8&')+_0x102462['data'][_0xe337('‮ff','iOLC')]);continue;case'3':await this[_0xe337('‮100','m2pD')]();continue;case'4':this['type']=0x2;continue;case'5':await $[_0xe337('‫101','kwSW')](0xbb8);continue;}break;}}else{return Promise[_0xe337('‮102','pP9h')](0x1);}}else{if(_0x160495[_0xe337('‫103','2*(1')](_0x160495[_0xe337('‫104','b9EN')],_0x160495['nVzrY'])){$[_0xe337('‫105','v*iO')](_0xe337('‮fc','kIuj')+this[_0xe337('‫4a','7O56')]+']'+_0x102462[_0xe337('‫106','iOLC')]);}else{return Promise[_0xe337('‮107','Hfvs')](0x1);}}}catch(_0x41d5dc){}finally{if(_0x160495['yaNVg'](_0x160495['sLqza'],_0xe337('‮108','ZpXi'))){return Promise[_0xe337('‫43','Fn7o')](0x1);}else{$[_0xe337('‮91','7O56')](_0xe337('‫109','W30$')+this[_0xe337('‫10a','d[B$')]+']'+result[_0xe337('‫10b','b9EN')]);}}}async[_0xe337('‫10c','yGBa')](){var _0x2163c8={'AFBUN':function(_0x4d6d32,_0x44edb6,_0x29a769,_0x56d489){return _0x4d6d32(_0x44edb6,_0x29a769,_0x56d489);},'wekpl':function(_0x71a856,_0x3a1722,_0x6ab8a8){return _0x71a856(_0x3a1722,_0x6ab8a8);},'QeqQG':_0xe337('‫10d','7O56'),'mNJXv':function(_0x528e55,_0x5111ac){return _0x528e55===_0x5111ac;},'xEqGx':_0xe337('‮10e','ZpXi'),'juCHa':_0xe337('‫10f','Qf0#'),'KsGCY':_0xe337('‮110','tRha')};try{let _0x5de86e='https://ssl.meco.chinaxpp.com/api/xpppresent/getPointsRedPack';let _0x430472='wxid='+this['param']['wxid']+_0xe337('‮111','ZpXi')+this['id'];let _0x16e28e='36';let _0x28d65c=_0x2163c8['AFBUN'](populateUrlObject1,_0x5de86e,_0x16e28e,_0x430472);await _0x2163c8[_0xe337('‮112','wcoX')](httpRequest,_0x2163c8[_0xe337('‫113','h!MB')],_0x28d65c);let _0xa9362b=httpResult;if(!_0xa9362b)return;if(_0xa9362b[_0xe337('‫114','Qf0#')]==0x1){$[_0xe337('‮115','Lb4P')](_0xe337('‮e6','9RN*')+this[_0xe337('‮116','shWt')]+_0xe337('‮117','1I7U')+_0xa9362b[_0xe337('‫118','kwSW')]);}else{if(_0x2163c8[_0xe337('‮119',']A^s')](_0x2163c8['xEqGx'],_0x2163c8[_0xe337('‮11a','JI6J')])){try{httpResult=JSON[_0xe337('‮11b','RSPx')](resp[_0xe337('‫11c','Y&1a')]);}catch(_0x5d7ed0){httpResult=resp[_0xe337('‫11d','Fn7o')];}}else{$[_0xe337('‮11e','afZh')](_0xe337('‫11f','i!dM')+this[_0xe337('‮120','m2pD')]+']'+_0xa9362b[_0xe337('‫121','9RN*')]);}}}catch(_0x454bcd){}finally{if(_0xe337('‫122','Lb4P')===_0x2163c8[_0xe337('‫123','%fIe')]){return Promise[_0xe337('‮124','tRha')](0x1);}else{console['log'](e);}}}async['bigmelonDec'](){var _0x4a671d={'YRxOT':function(_0x243b8e,_0x338aa2,_0x442f24,_0x3ecb86){return _0x243b8e(_0x338aa2,_0x442f24,_0x3ecb86);},'hdVQR':function(_0x4ef28a,_0x5e2ca6){return _0x4ef28a==_0x5e2ca6;},'gsBrm':_0xe337('‮125','Qf0#'),'bDKQw':'QVHek'};try{let _0x21d160='https://ssl.meco.chinaxpp.com/api/meco/bigmelonDec';let _0x689748=_0xe337('‫126','7O56')+this[_0xe337('‫127','D92M')][_0xe337('‮128','kwSW')]+'&points=2';let _0x585e9d='44';let _0x22fdb3=_0x4a671d[_0xe337('‫129','fcwW')](populateUrlObject1,_0x21d160,_0x585e9d,_0x689748);await httpRequest(_0xe337('‫12a','F]W*'),_0x22fdb3);let _0x3b5a38=httpResult;if(!_0x3b5a38)return;if(_0x4a671d['hdVQR'](_0x3b5a38['status'],0x1)){$[_0xe337('‮12b','m2pD')]('账号['+this[_0xe337('‮e2','ZpXi')]+']会员互动玩游戏\x20'+_0x3b5a38[_0xe337('‮12c','7O56')]);await $[_0xe337('‮12d','Y&1a')](0xbb8);this[_0xe337('‮12e','b9EN')]=0x4;await this[_0xe337('‮12f','W30$')]();}else{$[_0xe337('‫130','RSPx')](_0xe337('‫131','kwSW')+this['name']+']'+_0x3b5a38[_0xe337('‫106','iOLC')]);}}catch(_0x1cbe64){if(_0x4a671d[_0xe337('‮132','2qMt')]===_0x4a671d['bDKQw']){return Promise[_0xe337('‮133','2*(1')](0x1);}else{console[_0xe337('‮134','Lb4P')](_0x1cbe64);}}finally{return Promise[_0xe337('‮135','shWt')](0x1);}}async[_0xe337('‮136','d[B$')](){var _0x3aabd7={'iWTmI':_0xe337('‮137','5U^y'),'iLsue':_0xe337('‮138','yGBa'),'UWuAC':_0xe337('‫139','no)$'),'nQOfx':function(_0xd9e30f,_0x412e60){return _0xd9e30f===_0x412e60;},'KIVFg':'ZeoAY','ELQSC':function(_0x22fbd8,_0x252cbc,_0x2dc154,_0x3a20a7){return _0x22fbd8(_0x252cbc,_0x2dc154,_0x3a20a7);},'uwdoT':function(_0xe1db29,_0x1d4f96,_0x4f7af2){return _0xe1db29(_0x1d4f96,_0x4f7af2);},'xAJqT':function(_0x53f3a9,_0x3bb4ba){return _0x53f3a9==_0x3bb4ba;},'rUAFo':_0xe337('‫13a',']A^s'),'OdDvI':function(_0x9d8b62,_0x8d1559){return _0x9d8b62===_0x8d1559;},'HKWJU':_0xe337('‮13b','dqGA')};try{if(_0x3aabd7[_0xe337('‮13c','7O56')](_0x3aabd7['KIVFg'],_0xe337('‫13d','m2pD'))){$['logAndNotify'](_0xe337('‮13e','h!MB')+this['name']+']'+result[_0xe337('‮13f','b9EN')]+'\x20请检查卡密或在TG机器人\x20@CGKEYBot\x20处获取卡密');}else{let _0x2911e3='https://ssl.meco.chinaxpp.com/api/mecoSign/sign';let _0x1881c0=_0xe337('‮140','shWt')+this['param'][_0xe337('‮141','dqGA')];let _0xe91525='35';let _0x2ffdca=_0x3aabd7['ELQSC'](populateUrlObject1,_0x2911e3,_0xe91525,_0x1881c0);await _0x3aabd7[_0xe337('‫142','2qMt')](httpRequest,_0xe337('‮143','9RN*'),_0x2ffdca);let _0x3ca20f=httpResult;if(!_0x3ca20f)return;if(_0x3aabd7[_0xe337('‮144','v*iO')](_0x3ca20f[_0xe337('‫145','W30$')],0x1)){$['logAndNotify']('账号['+this[_0xe337('‮13','i1$k')]+_0xe337('‮146','Lb4P')+_0x3ca20f[_0xe337('‮147','b9EN')]+'积分');}else{$[_0xe337('‫148','Hfvs')]('账号['+this[_0xe337('‫149','Fn7o')]+']'+_0x3ca20f['message']);}}}catch(_0x3b6914){if(_0x3aabd7['rUAFo']===_0x3aabd7[_0xe337('‮14a','F]W*')]){console['log'](_0x3b6914);}else{$[_0xe337('‮115','Lb4P')](_0xe337('‫14b','D92M')+this[_0xe337('‫149','Fn7o')]+']'+result[_0xe337('‮14c','5U^y')]);}}finally{if(_0x3aabd7['OdDvI'](_0x3aabd7['HKWJU'],_0xe337('‫14d','!VZM'))){let _0x2e3de8=url[_0xe337('‮14e','!1U5')]('//','/')[_0xe337('‫14f','ZpXi')]('/')[0x1];let _0x53d6dd={'url':url,'headers':{'Host':_0x2e3de8,'User-Agent':defaultUA},'timeout':0x1388};if(body){_0x53d6dd[_0xe337('‫150','chHS')]=body;_0x53d6dd['headers'][_0x3aabd7['iWTmI']]=_0x3aabd7[_0xe337('‫151','ZpXi')];_0x53d6dd[_0xe337('‫152','1I7U')][_0x3aabd7['UWuAC']]=_0x53d6dd['body']?_0x53d6dd[_0xe337('‮153','wdzQ')][_0xe337('‫154','b9EN')]:0x0;}return _0x53d6dd;}else{return Promise['resolve'](0x1);}}}async['receive'](){var _0x2178a8={'lSDdz':_0xe337('‫155','b9EN'),'BRXfH':function(_0x4c5151,_0x30ed00){return _0x4c5151===_0x30ed00;},'ZCUIB':function(_0x77b1b2,_0x8c418,_0x514445){return _0x77b1b2(_0x8c418,_0x514445);},'KtcWh':_0xe337('‫156','shWt'),'bAWgl':function(_0x4c0604,_0x861e2c){return _0x4c0604==_0x861e2c;},'oXxen':function(_0x38f662,_0x4bd54c){return _0x38f662!==_0x4bd54c;},'nlbyU':_0xe337('‫157','9RN*'),'Auyjz':'vSCYj'};try{if(_0x2178a8[_0xe337('‮158','F]W*')](_0xe337('‫159','iOLC'),_0xe337('‫15a','iOLC'))){console['log'](_0x2178a8[_0xe337('‫15b','iOLC')]);return;}else{let _0x287cfc='https://xpph7.happydoit.com:8090/farmApi/receive?unionid='+this[_0xe337('‫15c','m2pD')][_0xe337('‫15d','yGBa')]+'&type='+this[_0xe337('‫15e','kIuj')];let _0x388c7e='';let _0x567542=populateUrlObject(_0x287cfc,_0x388c7e);await _0x2178a8['ZCUIB'](httpRequest,_0x2178a8['KtcWh'],_0x567542);let _0x41a87d=httpResult;if(!_0x41a87d)return;if(_0x2178a8['bAWgl'](_0x41a87d['status'],0x1)){$[_0xe337('‫c2','1I7U')](_0xe337('‫6e','Lb4P')+this[_0xe337('‫15f','gIM1')]+']'+_0x41a87d['message']);}else{if(_0x2178a8['oXxen'](_0x2178a8[_0xe337('‫160','v*iO')],_0x2178a8[_0xe337('‮161','Y&1a')])){$[_0xe337('‫162','%fIe')](_0xe337('‫163','tRha')+this['name']+']会员互动任务已完成');}else{$['logAndNotify'](_0xe337('‫164','d[B$')+this[_0xe337('‫e7','Lb4P')]+']'+_0x41a87d[_0xe337('‫165','jzSn')]);}}}}catch(_0x168b98){}finally{if(_0x2178a8[_0xe337('‮166','Y&1a')](_0x2178a8['Auyjz'],_0x2178a8[_0xe337('‫167','tRha')])){if(userCookies)userList[_0xe337('‮168','d[B$')](new UserInfo(userCookies));}else{return Promise[_0xe337('‫169','no)$')](0x1);}}}async[_0xe337('‫16a','2qMt')](){var _0x49d60e={'TNFgn':function(_0x112390,_0x3b28fe,_0x2cb264){return _0x112390(_0x3b28fe,_0x2cb264);},'FtCVc':function(_0x583edb,_0x336c9c){return _0x583edb==_0x336c9c;}};try{let _0x42c5d3=_0xe337('‫16b','b9EN')+this[_0xe337('‫16c','RSPx')][_0xe337('‮16d',']A^s')]+_0xe337('‮16e','RSPx')+this[_0xe337('‫16f','W30$')][_0xe337('‮170','F]W*')]+'&addtime='+ts;let _0x5c7abb='';let _0x10613a=_0x49d60e['TNFgn'](populateUrlObject,_0x42c5d3,_0x5c7abb);await _0x49d60e['TNFgn'](httpRequest,'post',_0x10613a);let _0x695e38=httpResult;if(!_0x695e38)return;if(_0x49d60e['FtCVc'](_0x695e38[_0xe337('‫8c','d[B$')],0x1)){$[_0xe337('‮171','shWt')](_0xe337('‫131','kwSW')+this[_0xe337('‮7d','Y&1a')]+']'+_0x695e38[_0xe337('‫172','1a1B')]);}else{$[_0xe337('‮fb','Qf0#')](_0xe337('‮173','F]W*')+this[_0xe337('‫174','5U^y')]+']'+_0x695e38['message']);}}catch(_0x4d47bd){}finally{return Promise[_0xe337('‮133','2*(1')](0x1);}}async[_0xe337('‮175','7v3n')](){var _0x26d15e={'oVFpW':function(_0x3e1922,_0xb67930,_0x33d792){return _0x3e1922(_0xb67930,_0x33d792);},'MjFPJ':function(_0x206542,_0x2e9b2f,_0x34da4f){return _0x206542(_0x2e9b2f,_0x34da4f);},'phDhA':function(_0x57c9f3,_0x500d20){return _0x57c9f3===_0x500d20;},'eHMQu':_0xe337('‮176','shWt'),'VScIq':_0xe337('‫177','i!dM'),'bgyWA':_0xe337('‫178','b9EN'),'begRb':'hhHoo','jdAIV':'HxKrG'};try{let _0x379c85=_0xe337('‫179','yGBa')+hpid+_0xe337('‫17a','2*(1')+this['param'][_0xe337('‮17b','Qf0#')];let _0x5ac55d='';let _0x4ef83c=_0x26d15e['oVFpW'](populateUrlObject,_0x379c85,_0x5ac55d);await _0x26d15e[_0xe337('‮17c','yGBa')](httpRequest,_0xe337('‫17d','!VZM'),_0x4ef83c);let _0x39f1e2=httpResult;if(!_0x39f1e2)return;if(_0x39f1e2['status']==0x1){if(_0x26d15e[_0xe337('‮17e','dqGA')](_0x26d15e['eHMQu'],_0x26d15e[_0xe337('‫17f','D92M')])){$[_0xe337('‮fb','Qf0#')](_0xe337('‮fc','kIuj')+this[_0xe337('‮180','kIuj')]+_0xe337('‮181','2qMt'));}else{$['logAndNotify'](_0xe337('‫6e','Lb4P')+this['name']+']'+_0x39f1e2[_0xe337('‮182','F]W*')]);}}else{if(_0x26d15e['bgyWA']!=='tYMor'){$['logAndNotify'](_0xe337('‮af','dqGA')+this[_0xe337('‫d7','!VZM')]+']'+_0x39f1e2[_0xe337('‮93','Y&1a')]);}else{httpResult=resp[_0xe337('‮183','Qf0#')];}}}catch(_0x108442){}finally{if(_0x26d15e[_0xe337('‫184','tRha')](_0x26d15e[_0xe337('‮185','shWt')],_0x26d15e[_0xe337('‮186','1I7U')])){return Promise[_0xe337('‫187','i1$k')](0x1);}else{return Promise[_0xe337('‫188','v*iO')](0x1);}}}async[_0xe337('‫189','no)$')](){var _0x56bce3={'uZwwQ':function(_0xeb9706,_0x4d0a28){return _0xeb9706===_0x4d0a28;},'GdosY':_0xe337('‫18a','RSPx'),'QIstj':function(_0x5c1260,_0x4f9b71,_0x177481){return _0x5c1260(_0x4f9b71,_0x177481);},'GtHtQ':_0xe337('‮18b','2qMt'),'yrxZD':function(_0x2a0b59,_0x5ab8a6){return _0x2a0b59==_0x5ab8a6;}};try{if(_0x56bce3['uZwwQ'](_0x56bce3[_0xe337('‮18c','i1$k')],_0x56bce3[_0xe337('‫18d','!1U5')])){let _0x14c1ae=_0xe337('‫18e','ZpXi')+this[_0xe337('‮18f','wcoX')][_0xe337('‮190','5U^y')];let _0x1f96bd='';let _0x2544be=_0x56bce3[_0xe337('‮191','7v3n')](populateUrlObject,_0x14c1ae,_0x1f96bd);await _0x56bce3[_0xe337('‫192','v*iO')](httpRequest,_0x56bce3[_0xe337('‮193','pP9h')],_0x2544be);let _0x1555de=httpResult;if(!_0x1555de)return;if(_0x56bce3[_0xe337('‮194','v*iO')](_0x1555de['status'],0x1)){$[_0xe337('‮195','fcwW')](_0xe337('‫7c','1I7U')+this['name']+']'+_0x1555de[_0xe337('‫d3','1a1B')][0x0][_0xe337('‮196','1I7U')]+'\x20\x20'+_0x1555de['data'][0x0]['NAME']+_0xe337('‫197','1I7U')+_0x1555de['data'][0x0]['progress']);}}else{return Promise[_0xe337('‮198','9RN*')](0x1);}}catch(_0x25b093){}finally{return Promise[_0xe337('‮135','shWt')](0x1);}}async['saveUserEnergy'](){var _0x242b89={'NSCvk':function(_0x1d2bb4,_0x56ddc4){return _0x1d2bb4!==_0x56ddc4;},'VVKfx':_0xe337('‮199','wdzQ'),'vnNqM':function(_0x61fac4,_0x356a9a,_0x11df0c){return _0x61fac4(_0x356a9a,_0x11df0c);},'rXppw':'post','aIKTu':function(_0x131acf,_0x39f03d){return _0x131acf==_0x39f03d;},'zCZRa':function(_0x4a3b4d,_0x4e174a){return _0x4a3b4d===_0x4e174a;},'TmzZr':'YFRBY','GyOKI':_0xe337('‫19a','fcwW')};try{if(_0x242b89[_0xe337('‫19b','2*(1')](_0xe337('‫19c','h!MB'),_0x242b89['VVKfx'])){$[_0xe337('‫19d','d[B$')]('账号['+this[_0xe337('‫19e','chHS')]+_0xe337('‫19f','Y&1a'));}else{let _0x25acc2='https://xpph7.happydoit.com:8090/farmApi/saveUserEnergy?unionid='+this['param']['unionid'];let _0x4a3cff='';let _0x25d949=_0x242b89['vnNqM'](populateUrlObject,_0x25acc2,_0x4a3cff);await _0x242b89['vnNqM'](httpRequest,_0x242b89[_0xe337('‫1a0','cmLq')],_0x25d949);let _0x258866=httpResult;if(!_0x258866)return;if(_0x242b89['aIKTu'](_0x258866['status'],0x1)){$['logAndNotify'](_0xe337('‮1a1','Qf0#')+this['name']+']'+_0x258866[_0xe337('‫1a2','i1$k')]);await $['wait'](0x1388);await this[_0xe337('‮1a3','Lb4P')]();}else{$[_0xe337('‮1a4','F]W*')](_0xe337('‮1a5','wcoX')+this[_0xe337('‮1a6','1I7U')]+']'+_0x258866[_0xe337('‮1a7','no)$')]);}}}catch(_0x230fbe){}finally{if(_0x242b89[_0xe337('‫1a8','gIM1')](_0x242b89[_0xe337('‮1a9','7O56')],_0x242b89['GyOKI'])){httpResult=resp[_0xe337('‮1aa','fcwW')];}else{return Promise[_0xe337('‮47','d[B$')](0x1);}}}}!(async()=>{var _0x421f1f={'XPNjU':_0xe337('‫1ab','wdzQ'),'GEQYx':function(_0x32e740){return _0x32e740();},'nzyqJ':function(_0x338af0,_0x548ed8){return _0x338af0>_0x548ed8;},'aqSkw':_0xe337('‫1ac','shWt'),'gxCmL':function(_0x50093f,_0x34a4b4){return _0x50093f>_0x34a4b4;},'TbbvY':_0xe337('‮1ad','iOLC'),'iBpbl':'egSDz','nZOdC':'iwnmb'};if(typeof $request!==_0x421f1f['XPNjU']){}else{if(!(await _0x421f1f['GEQYx'](checkEnv)))return;let _0x4b6c18=[];let _0x15139c=userList[_0xe337('‮1ae','b9EN')](_0x46fc23=>_0x46fc23[_0xe337('‫10','2*(1')]);if(_0x421f1f['nzyqJ'](_0x15139c[_0xe337('‮39','chHS')],0x0)){$[_0xe337('‮171','shWt')](_0x421f1f[_0xe337('‫1af','cmLq')]);_0x4b6c18=[];for(let _0x381564 of _0x15139c){_0x4b6c18[_0xe337('‫1b0','Lb4P')](_0x381564['km']());}await Promise['all'](_0x4b6c18);_0x15139c=_0x15139c['filter'](_0x2eb095=>_0x2eb095[_0xe337('‮1b1','chHS')]);if(_0x421f1f['gxCmL'](_0x15139c['length'],0x0)){$[_0xe337('‫1b2','!VZM')](_0x421f1f[_0xe337('‮1b3','kIuj')]);_0x4b6c18=[];for(let _0x3ed58e of _0x15139c['filter'](_0x15d6af=>_0x15d6af[_0xe337('‮1b4','Fn7o')])){var _0x4b1d25=_0xe337('‫1b5','7v3n')[_0xe337('‮1b6','h!MB')]('|'),_0x530dde=0x0;while(!![]){switch(_0x4b1d25[_0x530dde++]){case'0':await $[_0xe337('‮1b7','i!dM')](0x1388);continue;case'1':_0x4b6c18[_0xe337('‮1b8','7v3n')](_0x3ed58e[_0xe337('‮1b9','afZh')]());continue;case'2':await $[_0xe337('‫1ba','m2pD')](0x1388);continue;case'3':_0x4b6c18[_0xe337('‫1bb','chHS')](_0x3ed58e[_0xe337('‮1bc','i!dM')]());continue;case'4':_0x4b6c18[_0xe337('‮1bd','no)$')](_0x3ed58e[_0xe337('‮1be','wdzQ')]());continue;case'5':_0x4b6c18[_0xe337('‫1bf','!1U5')](_0x3ed58e['fhelp']());continue;case'6':_0x4b6c18[_0xe337('‫1c0','cmLq')](_0x3ed58e[_0xe337('‫1c1','m2pD')]());continue;case'7':await $[_0xe337('‫101','kwSW')](0x1388);continue;case'8':_0x4b6c18[_0xe337('‫1c2','9RN*')](_0x3ed58e['getTaskList']());continue;case'9':_0x4b6c18['push'](_0x3ed58e[_0xe337('‫1c3','#(^(')]());continue;case'10':await $[_0xe337('‫1c4','shWt')](0x1f40);continue;case'11':await $[_0xe337('‮6c','Hfvs')](0x1388);continue;case'12':_0x4b6c18['push'](_0x3ed58e[_0xe337('‮1c5','1I7U')]());continue;case'13':await $[_0xe337('‫1c6','9RN*')](0x1388);continue;case'14':_0x4b6c18[_0xe337('‮1c7','1a1B')](_0x3ed58e['dl']());continue;case'15':await $[_0xe337('‫1c8','no)$')](0x1388);continue;}break;}}await Promise[_0xe337('‮1c9','5U^y')](_0x4b6c18);$[_0xe337('‫1ca','kwSW')](_0xe337('‫1cb','D92M'));_0x4b6c18=[];for(let _0x571265 of _0x15139c){if(_0x421f1f['iBpbl']!==_0x421f1f[_0xe337('‮1cc','2*(1')]){_0x4b6c18[_0xe337('‮1cd','1I7U')](_0x571265['findByUnionid']());await $[_0xe337('‮12d','Y&1a')](0xbb8);_0x4b6c18[_0xe337('‫1c2','9RN*')](_0x571265[_0xe337('‮1ce','!1U5')]());}else{return Promise[_0xe337('‫1cf','#(^(')](0x1);}}await Promise[_0xe337('‫1d0','Qf0#')](_0x4b6c18);}}await $[_0xe337('‫1d1','chHS')]();}})()[_0xe337('‫1d2','ZpXi')](_0x1cd08e=>console['log'](_0x1cd08e))[_0xe337('‫1d3','5U^y')](()=>$['done']());async function checkEnv(){var _0x2c44a9={'hDwSC':function(_0x105cad,_0x337437){return _0x105cad!==_0x337437;},'vyusr':_0xe337('‮1d4','pP9h'),'wbFpI':function(_0x2e1d88,_0x1876fa){return _0x2e1d88>_0x1876fa;},'VrhVx':function(_0x63f0fe,_0xcb87c1){return _0x63f0fe===_0xcb87c1;},'eglvW':_0xe337('‫1d5','fcwW'),'YUuBx':_0xe337('‮1d6','no)$')};if(userCookie){if(_0x2c44a9['hDwSC'](_0x2c44a9[_0xe337('‮1d7','Hfvs')],'BIUfU')){return Promise[_0xe337('‫1d8','afZh')](0x1);}else{let _0x1f1f95=envSplitor[0x0];for(let _0x2cee5b of envSplitor){if(_0x2c44a9[_0xe337('‫1d9','JI6J')](userCookie['indexOf'](_0x2cee5b),-0x1)){_0x1f1f95=_0x2cee5b;break;}}for(let _0x25033d of userCookie[_0xe337('‮1da','%fIe')](_0x1f1f95)){if(_0x25033d)userList[_0xe337('‫1db','Qf0#')](new UserInfo(_0x25033d));}userCount=userList[_0xe337('‫1dc','5U^y')];}}else{if(_0x2c44a9[_0xe337('‫1dd','RSPx')](_0x2c44a9[_0xe337('‮1de','jzSn')],_0xe337('‫1df','!1U5'))){console[_0xe337('‮1e0','chHS')](_0x2c44a9[_0xe337('‫1e1','iOLC')]);return;}else{$['logAndNotify'](_0xe337('‫12','chHS')+this[_0xe337('‫d7','!VZM')]+_0xe337('‮1e2','kwSW')+result[_0xe337('‫d3','1a1B')][0x3][_0xe337('‫1e3','no)$')]+'人助力奖励');}}console[_0xe337('‮1e4','no)$')]('共找到'+userCount+_0xe337('‫1e5','v*iO'));return!![];}function populateUrlObject(_0x3ac3aa,_0x61f73b=''){var _0x41dbb={'TvlPN':function(_0x4cf423,_0x28c716){return _0x4cf423!==_0x28c716;},'qqXLp':'VPMXo','wgQxk':_0xe337('‫1e6','i1$k'),'RjQqx':_0xe337('‫1e7','kwSW')};let _0x5f2fd0=_0x3ac3aa[_0xe337('‫1e8','Hfvs')]('//','/')[_0xe337('‫1e9','WS8&')]('/')[0x1];let _0x181eb0={'url':_0x3ac3aa,'headers':{'Host':_0x5f2fd0,'User-Agent':defaultUA},'timeout':0x1388};if(_0x61f73b){if(_0x41dbb[_0xe337('‮1ea','2qMt')](_0x41dbb['qqXLp'],_0x41dbb['qqXLp'])){$[_0xe337('‮91','7O56')]('账号['+this[_0xe337('‮1eb','Zvm0')]+']'+result['msg']+'\x20请勿多处使用or重装环境造成请联系作者解除');}else{_0x181eb0[_0xe337('‮1ec','m2pD')]=_0x61f73b;_0x181eb0['headers'][_0xe337('‮1ed','2qMt')]=_0x41dbb[_0xe337('‫1ee','D92M')];_0x181eb0['headers'][_0x41dbb[_0xe337('‫1ef','2*(1')]]=_0x181eb0['body']?_0x181eb0['body'][_0xe337('‮1f0','WS8&')]:0x0;}}return _0x181eb0;}function populateUrlObject1(_0x5263e5,_0x1c2f13,_0x1b4d03=''){var _0x2ba351={'OxAxK':_0xe337('‮1f1','7O56'),'ZmfKd':'Content-Type'};let _0x1f0aa8=_0x5263e5[_0xe337('‮1f2','afZh')]('//','/')[_0xe337('‮1f3','d[B$')]('/')[0x1];let _0x5f1f94={'url':_0x5263e5,'headers':{'Host':_0x1f0aa8,'Content-Length':_0x1c2f13,'content-type':_0x2ba351['OxAxK'],'User-Agent':defaultUA},'timeout':0x1388};if(_0x1b4d03){_0x5f1f94[_0xe337('‫1f4','5U^y')]=_0x1b4d03;_0x5f1f94[_0xe337('‫1f5','d[B$')][_0x2ba351[_0xe337('‫1f6','Hfvs')]]=_0x2ba351['OxAxK'];_0x5f1f94[_0xe337('‮1f7','7v3n')]['Content-Length']=_0x5f1f94[_0xe337('‫11d','Fn7o')]?_0x5f1f94[_0xe337('‫1f8','h!MB')]['length']:0x0;}return _0x5f1f94;}async function httpRequest(_0x244212,_0x3530f2){var _0x334f44={'FUuiz':function(_0x31b788,_0x2cccb2){return _0x31b788!==_0x2cccb2;},'GNGKN':'yjRZr','YPRiM':_0xe337('‮1f9','kIuj'),'AVRWK':function(_0x4cd509,_0x411207){return _0x4cd509==_0x411207;},'dLQtm':_0xe337('‫1fa','wcoX'),'RauvX':function(_0x3772fa,_0x3c8551){return _0x3772fa===_0x3c8551;},'iOppK':_0xe337('‫1fb','7O56'),'jevna':'VNzvw','kPdTX':function(_0x17bbe8){return _0x17bbe8();}};httpResult=null,httpReq=null,httpResp=null;return new Promise(_0x4caee6=>{$[_0xe337('‮1fc','pP9h')](_0x244212,_0x3530f2,async(_0x1edb2f,_0x2cf3f5,_0x1cdc82)=>{try{if(_0x334f44[_0xe337('‫1fd','!1U5')](_0x334f44[_0xe337('‫1fe','chHS')],_0x334f44[_0xe337('‮1ff','2qMt')])){httpReq=_0x2cf3f5;httpResp=_0x1cdc82;if(_0x1edb2f){console[_0xe337('‫200','Y&1a')](_0x244212+_0xe337('‮201','Zvm0'));console['log'](JSON[_0xe337('‫202','9RN*')](_0x1edb2f));}else{if(_0x1cdc82[_0xe337('‮1ec','m2pD')]){if(_0x334f44['AVRWK'](typeof _0x1cdc82[_0xe337('‫203','jzSn')],_0x334f44[_0xe337('‫204','pP9h')])){if(_0x334f44[_0xe337('‫205','Fn7o')](_0x334f44[_0xe337('‫206','9RN*')],_0x334f44[_0xe337('‮207','afZh')])){httpResult=_0x1cdc82['body'];}else{$['logAndNotify']('账号['+this[_0xe337('‮116','shWt')]+']'+result[_0xe337('‫208','i!dM')]);}}else{try{httpResult=JSON['parse'](_0x1cdc82[_0xe337('‮209','shWt')]);}catch(_0x2b5f1a){if(_0x334f44[_0xe337('‮20a','wdzQ')](_0x334f44[_0xe337('‮20b','wdzQ')],_0x334f44[_0xe337('‫20c','v*iO')])){httpResult=_0x1cdc82[_0xe337('‮20d','JI6J')];}else{this[_0xe337('‮20e','wdzQ')]=$[_0xe337('‮20f','d[B$')](str);this[_0xe337('‮210','fcwW')]=!![];}}}}}}else{console['log'](e);}}catch(_0x2480b6){console['log'](_0x2480b6);}finally{_0x334f44[_0xe337('‮211','W30$')](_0x4caee6);}});});};_0xodC='jsjiami.com.v6';
////////////////////////////////////////////////////////////////////
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