/*
网易严选 vx小程序

变量：捉包https://miniapp.you.163.com/orchard/game 找到headers中的wx-pin-session或X-WX-3RD-Session的值 填变量wygy里多账号@隔开

格式：export wygy="session=xxxxx@session=xxxx"
CGkey: 脚本卡密   电报机器人 @CGKEYBot 处获取 (所有脚本通用)
格式：export CGkey="xxxxxxxx"

*/

const $ = new Env("网易严选果园");
let envSplitor = ['@']  //多账号隔开方式
let defaultUA = 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.23(0x18001729) NetType/WIFI Language/zh_CN'



var _0xodc='jsjiami.com.v6',_0xodc_=['‮_0xodc'],_0x31b5=[_0xodc,'wq86w4wxTA==','wqINwrRnw7s3XsObwqhfCMKe','6Lei5Y+uPQ==','Lea2hOilreiPnOW8ig==','wqsxw5MMZUU=','NMKfw7NDRw==','5ruQ5rCO8KGSkw==','6Lay5Yyjw6A=','w6PmrLLkurHliYTlt4nlr4nmiZc=','wozCmkceZQ==','wqUiwo4owp8=','wpM0w7kSwpwbFyIDwqAxwpY=','6LSU5Y6UWg==','wqp4C28=','wpIow7k=','VcOtGWrDrWYSwpLCtsKbERU=','6LWp5Yy1w6g=','asOoE0DDgQ==','McKbw7RJWSsb','wpzDpsOqfA==','CCvDuSxpIg==','CMO9w7rDvMK7','wqNgDQNM','wrHCrVkkRFhQd8K7w4ZTVsOYwqHDgsKVFwLCscK4IMOtakY6w5TCvsKmwqTCuQbDoMOhHCHClxTDgznCpgt1S8ObWMKlScOZwqoCdSsSwrUmGgvDnzHDugbDpMOFwr/CsFzDlMOlY8KkIcKUEsOMAsK0wrLDpk/Ck8KfwocELMOFEA7DkADCp2AWw6gBwolcw4/CiMKhRVrDmlzDk8KIwozCsA==','VFsKVcO9','w412OcKWUiop','AcK1w6NzRw==','w6DDssOb','KMOnD1U=','5rq75rO28LOhgg==','esOPwp5iw7g=','JMKbw5ciw7U=','w6Qgw7F1AcK0cw==','w6skw4BVA8K5WcOTWz0gQw==','w7HDg8Ky5qGj5b6p6ZSo6KyB','w7jCu8OcwoJMwonCvCZzw4LDr3c=','w5XDksKewrc=','w6vDv8KDIsOtaw==','OijCj0si','XsOVwoZ5eg==','FQjDgDhX','w7bCu8Ofwro=','wpocwqgXwq/Dh2bCsDpiwqEnw6vDr0nCkMODwpbCucKawqgBMGfCosOaw69/wrrDkMOEw4TCnMOjOWREw7rDgMOZw6zCh8OAwqDDrgLClkJAO8OYLcO0w6DDosOxw71Lw7rDt3x0VMKsKUgBw5zCksOBw4bDssKRwqE/fXLCkULDlykNwqxXwrRYw7gOBcK0wpAIRsOlwrRuw5cxwqo=','OFLDhsK/P8O3wqY=','w7PDssOmwpfDgg==','wonCiE0oTsO9woRZw6Ycd8Ki','RsOEwqRg','w5NyMsKyWjEifA==','6LSf5Y21JQ==','wpVHJT8=','KsKww4HCqMOMMQ==','wpnCrCnCsg==','wo3DpcOecw0=','woxwLi9T','w4E4cMOGw6R4JGsxesKxw5HDrR8xOVbCky/DqsKrQcKDP8OyPQ5Dw5dCTR5hwqVdwqbCkEI1w6nDvMKEXcKwWmEjwp1tHRw/KGHDuUY=','XsOnCg==','HnXCgQFN','GsK1w4fCg8OZ','Fua1jeikveS6nOWKiuW0huWvmOaLsg==','wpLDpsOpRATDpB91wpfDncKHYw==','wpPCvyvCpw==','w7Uuw5RhAcKp','wqjCi8OdIcO5wqguSBnCpQg=','w54tbcOC','LhnCiGIC','R1UcUQ==','w4rDtMKwwrPClw==','wrgIw60iwro=','L3jDsGI4','6Led5Y+REw==','w7rCtcOWwqY=','wpnmsK3mupLkuIfot7LCqeWDveashei9n+ijhg==','ZsO2MsOMHBnCig==','K8O4w6bDisKx','6Le/5Yyudg==','w48nwq0vw4YDaDFF','wrdpCmM1','R1sWZsO1HHs=','W8O5wqpLc8KQwpc=','IMKVw5FHWTQa','w5fDnMKUwpPCu8KjKjgVWsOHwpw=','6Lep5Y6XfA==','NmbDtUsx','ZlXDmuahk+W+qOmVi+iuhw==','w6LDosKvw5Rz','wrvCvkZ4wo4=','w5EcfcO+B2xj','Ww0xJcOW','wrnClgLCocKb','wq3CtRHCoMKM','w4x2OcKKVzMi','J8K2w4fClcOMbMOIb8OREBYMNx54cXJKwrzDssOBwqF+UTsUL1wUHmjDq8KGwqHDv8O7GCEtw6QKw7TCq8KXdXxxw7YVCRHDpsO4wpNzW8KPw4fCg8OgwpbCkMK7wpAa','A8Kuw5YYw7Q9w5k=','LFLDgQ==','VcOACcOJIw==','IQTCjmA=','6LeZ5Y6sw4U=','SXPDohrDiyY=','J1LDg8KpOsOcwq3CtV4=','COWLjOS+kA==','ZsO2MsOWHBs=','J2fCkxNqwpk7wpcpwpE=','KAjCjkMM','WABlw4PCoA==','w5PkuoTpp6Hoj5jlvIk=','OWfChhJHwoA=','T8OzwohPbQ==','5rq/5rK88KWilw==','wrElTzXCk8Ks','NTnCsH8H','EyXDqg==','woHDnmYcMg==','MsK/w5EHMsOUw55+AMKswrxRDsKww4gr5Y+E5a2d6aib6K2+H8K5ESfCnsKvwpHDusO2wrDCv8KHw7DDnyE=','VSXCvANkw49ubzXCsA9ow6IvwoFh5q6T5per5Lid5YuADcKlw5IBwrjDr8KdwrhAWsKPw6HDpMKmw6k=','RcOvwp7DiMKSe8OKbcKRVFVIe0Mlf+enhuakqOi8kuW5usOQwrpgUnVWb15WQSbCrsOKw77Ctg==','w5bCrcOWwrJK','wo/DqFs4wqE=','w77DgcKFwp7Cpw==','wpwPTRPCpQ==','HCHDmyh3eA8=','w5nDucKSGMON','J1LDm8KrIsOw','w7jDsMKRHsOR','wrHCo3IOTw==','wp58wqsBdA==','wp7Cq1BCwr0=','w6TCocOIwqs=','IsKSw6s=','w73DrcKnw5hv','SF8WU8OkFQ==','b1DDqQXDpQ==','w7PCpcKLAMOiw5PDpg==','w77Dh8KOwrPCoEXChcKfaxdOw4A=','wrI+UQzChcK5','egfDicO1KsKqwrTDsUE4woURwpoqw7nDhsKuwrFkwqMjdsOYw6PDiXdKw7UMdB17V0g=','w7LCsMKUBsO6','V8Ogwp9CfsKLwpdi','RQJow7E=','woIdwq8P','w7HDgMKMwpHCpWjCpQ==','Y8OyNcOGAl0=','wpTDoF4g','w6XDicKAwoY=','wr5swrwK','AMK+w5YD','w54tcMOTw6Vz','O8O9GFg=','w73DmsKKwprCr1PCr8KlbBtaw7c2w6gtD0M=','O3rDvl4=','wr3Cqll5','w6PCtcOPwqZQw5k=','WMOuEg==','wqJ2wqgjTznDqcKOw6V+wosE','wrfDncO2ci0=','wpXCklkB','wr0tw44YZFjDlw==','wqzCgsOGM8Omwpok','cw8SC8OtwpTDl3rCq8Oyw5hx','6LSO5Y2SwpI=','VsOzwpFP','XmTDoyLDlDU=','WHfDpQzDjw==','M2fDtg==','wrYVwpRUw5w=','LSnDryhN','TMOcwqNDw6c=','wpHCmxPCsMKf','VMKiPXjDoA==','w4TDg8Kvw6tY','w63Cr8KfLsOgw4HDjSxpw6XCq8K/','6LWr5Y62wr4=','w4LDocKUOg==','wq/nrJbli6zkupzlib3ltI/lr4Xmio8=','wqPDklgJNA==','IlnDkcKpLsOXwq4=','wqcnURHClA==','O0LDhsKk','w7jCscOVwqRWwoU=','wo/CvksRQA==','5p6+5oqq5YqLwoBpw43orIXpmYzor7zohrHmnqXor7rmmKc=','wpLDpsOp','5YeY5oiy5Yi0','5Lmh6Lau5Y6c','wq8SwqNKw7wwccOAwrVZAMOIwr7ClQLDlw==','w47DpsOfwonDlQ==','IsKOw7dKXD4fwprCr8KESzYHw6PCoMObXQpWKlvCpMOawoIDKR9mw5zDsMOP','w6AWYMOlDnRyw4R9dh04EFE=','w5DDrsKYwpzCuQ==','D8Ojw53DoMKD','wrPDlGYG','JSTChMODW8K8w6c=','w6rDkcKvPcOD','QRNMw7zCkQ==','Kg7Ci2EvworCkA==','w5wqY8ODw5E=','w6nDo8Kvw4g=','LcKtw5fCnA==','SFUf','ccO7Dl3DoQ==','bcOKwqlSdA==','w4/CqMKVCsOX','w7LDo8KQwpvCow==','wpA5w7Q2wpEL','woR9wpUOTQ==','GxHCncOEdg==','w4sNw6tZOg==','QFEaWcO4','VMOmM0LDqg==','MQ7ChGE=','worDgcO3bBo=','wojDvWEHIA==','w5jDpcKtwoXClg==','w6skw4A=','6K+15rKY5aWE6LSc','w6vDuMOI','asO0wpdQcw==','KcOnD0k=','wrZQDzR7','dMO0OUXDkw==','dFQxUcOd','w7DDh8KNwos=','w47Dr8KdJg==','wpFhFEAT','6Lat5Y27wpA=','wpDDqMOjYA==','woYSajnCssKPwr9jWQXDq8K3QHHDhA==','ICDCncOwX8K6w7Fb','wodSwoQpVg==','O8OpGUNH','IcKRw6Nf','wqEBSgU=','wqbmsJLmurzkuZfotpg85YCc5qyt6LyK6KCW','wqkhw5MR','wrg4WjnCjsKvwq5YYiHDgsKc','w6bCscOIwrZOwpk=','5rit5rGg8LeTng==','J23Ckg==','CsK1w4xtQg==','woMkwrAgwp4=','wqPClmE2WQ==','wojCg2cASQ==','woLovLTnuYTmtIPmsr/ku6DlparojpDlv7s=','OMKjw4fCgMON','5ri55rOr8JWytg==','wqoSVS3CpxQ=','dhM7JcOnwpU=','w6XDkcKOwos=','X8Ocwq58','a8KpO1bDpsK+','wrw6w5Y=','w5fCk8OQwqZb','eFHDugrDng==','wo3DrlMxw6XDslADwr/Cn03Co8O4T8K+','wpfDqVI6','C2zDh0oM','wpJILD9T','V8Kxw5PChw==','wrgDwr9Pw7E=','w45yOMKEVg==','w5rDqcKnC8Ob','wr7DmUgSBQ==','6LWt5Y2/MA==','wp7CtRDCo8KVOhU=','IS7CgsOmUMKqw5pGw5dDUcO2','dg4RL8O7','w746ReaireW9pOmUg+ivqQ==','w5HCusKSCsOl','wpc1w5Y9Tg==','e8O3CGbDrA==','w41cIMKrSA==','JMKvAFDDpsOm','Kg/DtRpp','w77DrsKCw5Ba','w518LsKA','T8OKwpNsw5c=','wr7Cvlx0wq/CmsK7wrvCjGPChnZHEw==','wrN4D34=','w5rDocKVNsOC','E8Kqw4s5w7gzw5M=','w50lacOTwqY=','A8K7w7wfw7Y=','wq09w40c','wqNqwqg=','w6LDosKWLsOwaMOnwpvDqMOSbcKt','6LaP5Y67Xw==','wro2UB0=','FuWNluWts+mpgOiul+aKiOWJl8Om5py05pWA5p+m6IeW','wqwPQwU=','d8OfI8OmAw==','w6LCr8KcCg==','wrkVwqlPw6M=','wpEHwrgC','TcO0FcORHw==','wq9sNFgq','6Leb5YypHQ==','VXfDvAo=','6Lan5Yy3wqM=','w7zDicKEwpc=','a+itv+aiq+afleWNg+Wuj+aKi+Weh8Kxw6HmnZzlm7DkuJZfw5J3GsKEIcKow7jCjxHDv+WktOiMr+WNiOWNguWujQ==','worCqTzCq8KP','Xgxmw4TCiMK1fMKDw6fClMKhSg==','6Lah5Y68w7w=','SlsVUQ==','w7/Dm8KO','w67orpXliKzlpLzlppHkvKznlLjDm8Ku6Ye76KKr542I5aGX6YOG5om96K2O6IKq57KR5L6I6IOQ6Ke46Zux','w6vDuMOIwrHDjwJWw7/CssO5QsOk','6LeD5YyQcQ==','w6XDrcKmw5Q=','bQUGJcOvwobDvA==','wrbCq048VhAbDcKlw4pPccOWwqXDm8OYCw==','ZcK/AQ==','F8KYw7rCqcOT','P8Kjw4HChMOS','wqogw5JLY0LDm8Ky','wrzCgcO/JcOnwoAn','UcKkw4rCksO8DcKfwpjCrsKmwqfCsnVQaAsDwpvDt0gHw5fClcOaIAzDjcKYw7gJOcORFUHDiDjDrBopdcO2wpDDsMKfw4XCmwLCqRPColfCu1bCuVzClcOVMHQbwrs3RDsSCkLCu1BwTsK9B8KDKXJww6wkCcOxw7XCk3XDmcONw6d/wqg=','ScOjDErDrg==','wofDsWAZMQ==','wp7Cn2c/QQ==','wpTClTbCiMKw','w5LDuMKDwpjCnA==','6Le55Yydw7I=','w77lhLTotLfpoJfmsZ/ku5Dml6PltJvlrr3miIM=','S8K1w43CjcOjQcOV','w6fDpcK4w4U6','EcO3w53Dg8K0','wrbDq8O3RyA=','DA/DgTxC','worDvsOsTCc=','asKuAUnDscOhwojDrsKQw44TJXnCg2tGwrrCrG1WwozDhcOXe8K3w6rDmkNfw7wxQR0kC8OnOWBbw7nCtMKKwp9vw5PCoEUBw4HDjw==','wo3CvzTCo8KU','SsK1w43CkcOmWMOe','w4wKU8O7w54=','JMKbw7M=','wrM4w4wvZw==','UQxlw6A=','bsK1EnjDrMK/w6nCrsKJw44bNQ==','6Le35Y2MWQ==','woPCkH5YwqzCrcKBwp3CpFfCi0V5MGg=','5Y6k6I615b2iRw==','w5spd8ODw7s2','w5zDp8K9wrvCiHjClMKkUDNnw6sLw5MT','wqM2SR3Ckg==','5rmX5rGN8Jywtg==','TsKxw5fClg==','w6LDj8KtFsOgaA==','wo3CqzXCqg==','wpHCpcO9DcONwrA=','wqUZUBDCnA==','Whd1w7XClcOrHcODw77ClMKpWiLCucOwSV7DvsOLwq4ww5LChmEdYMKuwr9mNnMJw43DoivCu8KbwoDDnFpfw63CvcKfMzjDhcOmHivDi2jCmAZbwrEow7FOMg4Iwpx5Zg0qVcOqb2RKZ2bCgRTCi0Y=','w7jDqcK4w4Jiw7zDqA==','SsO3wo9fc8KN','w4DDr8KeHsOIVcKgwp9nw597Cw==','w6kqw4px','X8OEwr1gw6A=','5rmg5rOg8LGhpA==','M2fDtm8nwoYNLWzDtEQ8','6LWk5Y6cwrE=','wpIwRy3CiQ==','cMK/BlbDrsKtw4I=','d8O7JMOAGybCgQ==','IcO3w5k=','wqLCim8Ibw==','J8K2w4fClcOMbMOIb8OREBYMNx54cXJKwrzDssOBwqF+UTsUL1waD3/CrMKKwrzDtcKxBm8jw6lAw6DCocKqfiEIwqxUDhzDu8K0wpxDW8OAw4DCmcOsw5Y=','wq/Ci8ObJcOm','Zi5Mw5zCrw==','wovCoFA7VA==','w60HRcOFw5E=','wpLChkMd','wqbDmnYaFQ==','w5tCAcKBeQ==','UMO9woJXw6I=','wp45w6UYRg==','wpdJLxtFeA4gwq4zwqTDiw==','6Lad5Y2Ewqg=','wovChkcM','HueugOWKt+S7neWKlOW2r+WvsuaLvg==','wrZ8FWUtw7/DhA==','Q18M','wpoQaC/Ckg==','O1bDh8KtOw==','wovDg0A3wp8=','w7HDocOKwp/Dqg==','wpnCtTHCpsKa','w5/DmMKEwrbCtg==','SFUfdcO+GVFdMcKHdEE=','6LWg5Y2lw7Y=','bMK7GFw=','Lemhjeevm+WJm+iMquW/hQ==','w4nDlsKAwqfCucKz','wog6w6o2woA=','5ruP5rCi8LuDiA==','wrrCvkNl','6LSC5Y+NIw==','ESvDoCw=','wqHliqnkvqE=','wqJ8wqkWYDDDiMKUw79j','5rq35rOK8L6igQ==','w5nDj8KPwrzCnw==','H8OFBXt6','6LaF5Y6OVQ==','wo3DoFox','VxFzw4jClcK2','wqYyThfCjMK9woU=','w4wLbcO5Cmhiw5g=','wpLDlGwLAgkZcm8JwrIn','w7jDnMKdwqbCsMKpEHotVsOPwoIjJw==','wrI+w58iwrE=','wqXCq15hwpnDjsOxw6bChnPCqn5KD09GWFfCiCoFfcOFwqspY2DCtTzDrMOpw5/DpV9gEUYww5AbwrsXPsKofsOhwqTDoHYIw4TDtyzClcOWcMK9woJTZSDDrQrDjMKxwpvCvMOJw6Ubw5BDHUBSf8OFwoRRwqTCqMKaesKgGBzDv8KcwoDDiwfDtSdmwqsHdsK9WcOmwqfCsMOqw7fDnsOfcsO1bcKDNQXCo8KfwonDig==','wobDq8OdQig=','wpjCixLCj8Ko','w6DDjcKawofColU=','J1jDkg==','6K+F5rCh5aSw6Lag','w7jDuMK5w5hlw7TDryrCig==','LgTCjUQkwpzCrR8hw7TDocOC','wpLChl4MUg==','5ril5rKP8J+zmA==','GsKXw7fCqcO4','w4DDqsK4DcOx','w77DgsKowqDCmQ==','w5rDuMKCLcOO','w4Umw79XCg==','wpc+w783wpcNKg==','KEfCsxBp','WXnDtRY=','KW3CkR4=','w7HovZ7nuJTmtJjmspLlpafliZ/ltILpopXljaA=','PyTClsOIUsK4w7E=','wrrCvl50wpjDhQ==','eHnDvxvDgjwcI8KPw7tiKw==','w5fCu8OVwrdHwoPChmRLw47Dp2ldGw==','XsK1w4o=','NcOaw7/DisK7','wrnDj3YPFF1CcFYZwqwrw6d8RTjClsOqwqPDusOIwpHCt8OFwofCmMOUw4d2w77Cl8OJw6TCu8KFw5LCi8O3G8K5w6/DvsKKw6B0IFVOeWrDrjkNwoDDhMKqE8OCwqnCjcO5wp8Ww43CrTctUD8YXDtGwq0feXRmeBZZwpvCkMKQM8OoKQIcci7Cgh3DpcOVN8OMwq8WPzjCicKCwrQb','w77DrMKDDsOz','HgPDnxpc','LgvDlARV','ZcKOAmnDtg==','LeWGhui2nOmjreayqQ==','wrgBUwXCpg==','B8Kqw4wf','w7nDrMKFCsOsPQ==','6Ler5YyocQ==','ZOWHj+i1h+mireayt+S7iOaWueW0j+WtjuaLog==','w5pWLcKBdQ==','w7DCjcKCFcO/','AFPCoz5g','woLDsUc4wqHDvFAUwr7CmU3DqcK/VcK1fg==','wp/CsSLCuw==','K8Kbw6ZCUC8N','WMKgw47CjsOmVMORw4PCqsKgwqfDtH5Td0tBw5TDoQ5XwpPDlcKRN17DlcODw79HdQ==','wqYHwrJCw7AhYw==','VMKaw5LCsMOC','w6Ukw4Nt','wq/CsE5o','M23Dv0k9woo=','NQrCnmA4w4o=','dTNMw7PCqg==','wrDDsHAXwps=','KiTCkQ==','wosBbgnCpA==','wqPDnnEKCxM=','PyTClsOSUsK6','wr/DgsOEQiQ=','Ujsjiawmi.nWcZxomnV.rvq6nbyGOB=='];if(function(_0x24f475,_0x32193e,_0x16697a){function _0x321d03(_0x166631,_0x4c9a19,_0x54fef6,_0xf827a4,_0x5ae73d,_0x14a100){_0x4c9a19=_0x4c9a19>>0x8,_0x5ae73d='po';var _0xde9976='shift',_0x4913a9='push',_0x14a100='‮';if(_0x4c9a19<_0x166631){while(--_0x166631){_0xf827a4=_0x24f475[_0xde9976]();if(_0x4c9a19===_0x166631&&_0x14a100==='‮'&&_0x14a100['length']===0x1){_0x4c9a19=_0xf827a4,_0x54fef6=_0x24f475[_0x5ae73d+'p']();}else if(_0x4c9a19&&_0x54fef6['replace'](/[UwnWZxnVrqnbyGOB=]/g,'')===_0x4c9a19){_0x24f475[_0x4913a9](_0xf827a4);}}_0x24f475[_0x4913a9](_0x24f475[_0xde9976]());}return 0x110bfa;};return _0x321d03(++_0x32193e,_0x16697a)>>_0x32193e^_0x16697a;}(_0x31b5,0xf5,0xf500),_0x31b5){_0xodc_=_0x31b5['length']^0xf5;};function _0x5392(_0x1b97c9,_0x4574f3){_0x1b97c9=~~'0x'['concat'](_0x1b97c9['slice'](0x1));var _0x2f5ff7=_0x31b5[_0x1b97c9];if(_0x5392['VhrUAp']===undefined){(function(){var _0x5ebe96=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x2a245b='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x5ebe96['atob']||(_0x5ebe96['atob']=function(_0x529392){var _0x2567ed=String(_0x529392)['replace'](/=+$/,'');for(var _0x459acd=0x0,_0xacb328,_0x5ddf78,_0x3c25c4=0x0,_0x163594='';_0x5ddf78=_0x2567ed['charAt'](_0x3c25c4++);~_0x5ddf78&&(_0xacb328=_0x459acd%0x4?_0xacb328*0x40+_0x5ddf78:_0x5ddf78,_0x459acd++%0x4)?_0x163594+=String['fromCharCode'](0xff&_0xacb328>>(-0x2*_0x459acd&0x6)):0x0){_0x5ddf78=_0x2a245b['indexOf'](_0x5ddf78);}return _0x163594;});}());function _0x329076(_0x44c626,_0x4574f3){var _0x4d08e9=[],_0x1612c4=0x0,_0x2a96ba,_0x43654a='',_0xc5ce74='';_0x44c626=atob(_0x44c626);for(var _0x37c7a1=0x0,_0x3168be=_0x44c626['length'];_0x37c7a1<_0x3168be;_0x37c7a1++){_0xc5ce74+='%'+('00'+_0x44c626['charCodeAt'](_0x37c7a1)['toString'](0x10))['slice'](-0x2);}_0x44c626=decodeURIComponent(_0xc5ce74);for(var _0x42896b=0x0;_0x42896b<0x100;_0x42896b++){_0x4d08e9[_0x42896b]=_0x42896b;}for(_0x42896b=0x0;_0x42896b<0x100;_0x42896b++){_0x1612c4=(_0x1612c4+_0x4d08e9[_0x42896b]+_0x4574f3['charCodeAt'](_0x42896b%_0x4574f3['length']))%0x100;_0x2a96ba=_0x4d08e9[_0x42896b];_0x4d08e9[_0x42896b]=_0x4d08e9[_0x1612c4];_0x4d08e9[_0x1612c4]=_0x2a96ba;}_0x42896b=0x0;_0x1612c4=0x0;for(var _0x251efa=0x0;_0x251efa<_0x44c626['length'];_0x251efa++){_0x42896b=(_0x42896b+0x1)%0x100;_0x1612c4=(_0x1612c4+_0x4d08e9[_0x42896b])%0x100;_0x2a96ba=_0x4d08e9[_0x42896b];_0x4d08e9[_0x42896b]=_0x4d08e9[_0x1612c4];_0x4d08e9[_0x1612c4]=_0x2a96ba;_0x43654a+=String['fromCharCode'](_0x44c626['charCodeAt'](_0x251efa)^_0x4d08e9[(_0x4d08e9[_0x42896b]+_0x4d08e9[_0x1612c4])%0x100]);}return _0x43654a;}_0x5392['ZHIJli']=_0x329076;_0x5392['iwQVXv']={};_0x5392['VhrUAp']=!![];}var _0x5dad7c=_0x5392['iwQVXv'][_0x1b97c9];if(_0x5dad7c===undefined){if(_0x5392['bgQqUh']===undefined){_0x5392['bgQqUh']=!![];}_0x2f5ff7=_0x5392['ZHIJli'](_0x2f5ff7,_0x4574f3);_0x5392['iwQVXv'][_0x1b97c9]=_0x2f5ff7;}else{_0x2f5ff7=_0x5dad7c;}return _0x2f5ff7;};let httpResult,httpReq,httpResp;let userCookie=($[_0x5392('‫0','d^$&')]()?process['env'][_0x5392('‮1','L)Ls')]:$['getdata'](_0x5392('‮2','R1t9')))||'';let userCGkey=($[_0x5392('‮3','H5j3')]()?process[_0x5392('‫4',')p^6')][_0x5392('‫5','$dtv')]:$['getdata'](_0x5392('‮6','^7#9')))||'';let userList=[];let userIdx=0x0;let userCount=0x0;let ts=getNowFormatDate();const {machineId,machineIdSync}=require(_0x5392('‮7','gg5a'));machineId()[_0x5392('‫8','gg5a')](_0x368db0=>{});let uuid=machineIdSync();class UserInfo{constructor(_0x3334e9){var _0x2c8209={'obJmb':_0x5392('‮9','lyN7')};this[_0x5392('‫a','jl2E')]=++userIdx;this[_0x5392('‫b','qYvs')]=this['index'];this[_0x5392('‫c','J6qO')]=![];this['canRead']=![];try{this[_0x5392('‫d','hqVo')]=$['str2json'](_0x3334e9);this['ckValid']=!![];}catch(_0x50a997){if(_0x5392('‫e',')GP]')!==_0x2c8209[_0x5392('‫f','Lm%7')]){$['logAndNotify'](_0x5392('‮10','V*F)')+this['name']+']连续浇水奖励已领取');}else{this[_0x5392('‮11','ox0N')]=![];$[_0x5392('‫12','PUAy')]('账号['+this[_0x5392('‮13','d^$&')]+_0x5392('‮14','KXll'));}}}async['km'](){var _0x44db09={'srKle':function(_0x5b471f,_0x146b5e,_0xe39a03){return _0x5b471f(_0x146b5e,_0xe39a03);},'UExSr':'get','ubIaQ':function(_0x47d9bd,_0x1222ee){return _0x47d9bd==_0x1222ee;},'goZiE':'5|4|6|2|3|1|0','spYtk':function(_0x4cc521,_0x59df76){return _0x4cc521(_0x59df76);},'cLbEs':function(_0x8f1f75,_0x5d0b1d){return _0x8f1f75==_0x5d0b1d;},'wwziv':function(_0x4de8f1,_0x591865){return _0x4de8f1==_0x591865;},'YgTro':function(_0x224536,_0x37eded){return _0x224536===_0x37eded;},'kuRRk':_0x5392('‮15','k(5!'),'IXcQd':_0x5392('‫16',')p^6'),'HZOiF':function(_0x466920,_0x490bc6){return _0x466920===_0x490bc6;},'ZfAzU':_0x5392('‮17','x@(P')};try{if(_0x5392('‫18','hqVo')!=='gACLW'){let _0x16dac8='http://km.meetclover.ml/api.php?act=km_logon&app=10001&kami='+userCGkey+_0x5392('‫19','H5j3')+uuid;let _0x45b634='';let _0x382593=_0x44db09['srKle'](populateUrlObject,_0x16dac8,_0x45b634);await httpRequest(_0x44db09[_0x5392('‫1a','O@%G')],_0x382593);let _0x4daf18=httpResult;if(!_0x4daf18)return;if(_0x44db09[_0x5392('‫1b','bdK*')](_0x4daf18[_0x5392('‫1c','hqVo')],0xc8)){var _0x14bcd2=_0x44db09[_0x5392('‫1d','R1t9')]['split']('|'),_0x3f913b=0x0;while(!![]){switch(_0x14bcd2[_0x3f913b++]){case'0':await this[_0x5392('‫1e','JuEI')]();continue;case'1':await $[_0x5392('‫1f','@f5T')](0xbb8);continue;case'2':this[_0x5392('‫20','wTtW')]=!![];continue;case'3':this[_0x5392('‫21','nMG$')]=!![];continue;case'4':this[_0x5392('‮22','fE]K')]=_0x44db09[_0x5392('‮23','nMG$')](timestampToTime,this[_0x5392('‮24',')p^6')]);continue;case'5':this['time']=_0x4daf18[_0x5392('‮25','F6ns')]['vip'];continue;case'6':$[_0x5392('‫26',')GP]')](_0x5392('‫27','fE]K')+this[_0x5392('‫28','n03v')]+_0x5392('‫29','T1yu')+this['time1']);continue;}break;}}if(_0x4daf18[_0x5392('‫2a','QlJf')]==0x95||_0x44db09[_0x5392('‮2b','xg$[')](_0x4daf18[_0x5392('‮2c','k(5!')],0x94)||_0x44db09[_0x5392('‮2d','J6qO')](_0x4daf18[_0x5392('‮2e','eQ(p')],0x70)){if(_0x44db09[_0x5392('‫2f','xg$[')](_0x44db09[_0x5392('‮30','@f5T')],_0x44db09['IXcQd'])){$['logAndNotify'](_0x5392('‫31','ox0N')+this[_0x5392('‫32','^7#9')]+']'+_0x4daf18['errMsg']);}else{$['logAndNotify'](_0x5392('‮33','k(5!')+this[_0x5392('‮34','L)Ls')]+']'+_0x4daf18['msg']+_0x5392('‫35','V*F)'));}}if(_0x44db09[_0x5392('‫36','ox0N')](_0x4daf18['code'],0x192)){if(_0x44db09['HZOiF']('BuvMo',_0x44db09['ZfAzU'])){$[_0x5392('‫37','gs56')](_0x5392('‮38','@Shd')+this[_0x5392('‫39','JCif')]+']'+_0x4daf18[_0x5392('‫3a','L)Ls')]+_0x5392('‮3b','J6qO'));}else{$[_0x5392('‫3c','CTrm')](_0x5392('‫3d','&mat')+this[_0x5392('‮3e','bdK*')]+']'+_0x4daf18['errMsg']);}}}else{return Promise['resolve'](0x1);}}catch(_0x5115d7){}finally{return Promise[_0x5392('‮3f','d^$&')](0x1);}}async[_0x5392('‫40','NSQS')](){var _0x202bdd={'sepAE':'XZILl','zlygP':function(_0x620c8d,_0x661094,_0x6dc603,_0x497789){return _0x620c8d(_0x661094,_0x6dc603,_0x497789);},'VJbfV':_0x5392('‮41','H5j3'),'GFJkv':function(_0x57f1b1,_0xb4d617){return _0x57f1b1==_0xb4d617;},'iKpJI':'tzuob'};try{if(_0x202bdd['sepAE']!==_0x5392('‫42','cN@c')){this[_0x5392('‫43','cN@c')]=$[_0x5392('‮44',')p^6')](str);this[_0x5392('‮45','8y0r')]=!![];}else{let _0x309724=_0x5392('‫46','qYvs');let _0x200d63='';let _0x2eb327=''+this[_0x5392('‮47','x@(P')]['session'];let _0x4f8001=_0x202bdd['zlygP'](populateUrlObject,_0x309724,_0x2eb327,_0x200d63);await httpRequest(_0x202bdd[_0x5392('‮48','Lm%7')],_0x4f8001);let _0x2d4dea=httpResult;if(!_0x2d4dea)return;if(_0x202bdd[_0x5392('‫49','NSQS')](_0x2d4dea['code'],0xc8)){if(_0x202bdd[_0x5392('‮4a','ox0N')]!==_0x202bdd[_0x5392('‮4b','(dum')]){$['logAndNotify'](_0x5392('‫4c','8y0r')+this[_0x5392('‫b','qYvs')]+_0x5392('‫4d','KXll'));}else{await $['wait'](0xbb8);await this['list1']();}}}}catch(_0x4f3bb3){}finally{return Promise[_0x5392('‮4e','qYvs')](0x1);}}async[_0x5392('‮4f','bdK*')](){var _0xfd398d={'HbyBJ':function(_0x5b2cdf,_0x2c0cc4){return _0x5b2cdf!==_0x2c0cc4;},'sELuY':'zMxuW','twbIM':_0x5392('‫50','2FeW'),'eFWMI':function(_0x4d127b,_0xce608b,_0x38b317,_0x4c0ac3){return _0x4d127b(_0xce608b,_0x38b317,_0x4c0ac3);},'jllVn':function(_0xd9d489,_0x5b7ac1){return _0xd9d489==_0x5b7ac1;}};try{if(_0xfd398d[_0x5392('‫51','ay$3')](_0xfd398d[_0x5392('‮52','O@%G')],_0xfd398d[_0x5392('‮53','ay$3')])){let _0x80a344=_0x5392('‮54','H5j3');let _0x14f674='';let _0x188707=''+this[_0x5392('‫55','ox0N')][_0x5392('‮56','qYvs')];let _0x23bace=_0xfd398d[_0x5392('‫57','fE]K')](populateUrlObject,_0x80a344,_0x188707,_0x14f674);await httpRequest(_0x5392('‫58','k8m]'),_0x23bace);let _0x30ce17=httpResult;if(!_0x30ce17)return;if(_0xfd398d[_0x5392('‮59',')p^6')](_0x30ce17[_0x5392('‮5a','gs56')],0xc8)){$[_0x5392('‫5b','H5j3')](_0x5392('‫5c','Lm%7')+this['name']+']'+_0x30ce17['result'][_0x5392('‫5d','JuEI')]['desc']+_0x5392('‮5e','Uvwt')+_0x30ce17[_0x5392('‮5f','fE]K')][_0x5392('‫60','L)Ls')][_0x5392('‫61','n03v')]+_0x5392('‫62','KXll'));await $[_0x5392('‫63','qYvs')](0xbb8);await this[_0x5392('‫64','wTtW')]();}}else{taskall[_0x5392('‫65','ox0N')](user['km']());}}catch(_0x4b4d86){}finally{return Promise['resolve'](0x1);}}async[_0x5392('‫66','8y0r')](){var _0x56a6a4={'HEhWF':function(_0x1cfed9,_0x2bf582,_0x116b65,_0x4795df){return _0x1cfed9(_0x2bf582,_0x116b65,_0x4795df);},'eNZXb':'get','FgzUi':function(_0xb3e64,_0x231710){return _0xb3e64!==_0x231710;},'ybzye':'uVXLV','bEyCE':_0x5392('‮67','QlJf')};try{let _0x44a697=_0x5392('‮68','gs56');let _0x6d2699='';let _0x23fa7b=''+this['param'][_0x5392('‫69','bdK*')];let _0x39df1d=_0x56a6a4['HEhWF'](populateUrlObject,_0x44a697,_0x23fa7b,_0x6d2699);await httpRequest(_0x56a6a4['eNZXb'],_0x39df1d);let _0x1b8c0b=httpResult;if(!_0x1b8c0b)return;if(_0x1b8c0b[_0x5392('‫6a','zxqk')]['result']==0x1){$[_0x5392('‮6b','wTtW')]('账号[开启通知获得'+this[_0x5392('‮6c','@Shd')]+']'+_0x1b8c0b['result'][_0x5392('‮6d','R1t9')]+_0x5392('‫6e','$dtv'));}else{$[_0x5392('‫6f','lyN7')](_0x5392('‮70','HaMo')+this[_0x5392('‫32','^7#9')]+']次任务已完成');}}catch(_0x55d4be){}finally{if(_0x56a6a4[_0x5392('‮71','n03v')](_0x56a6a4['ybzye'],_0x56a6a4['bEyCE'])){return Promise[_0x5392('‮72','H5j3')](0x1);}else{return Promise['resolve'](0x1);}}}async[_0x5392('‮73','xg$[')](){var _0x43af4d={'TMMYI':function(_0xd1eb91,_0x22d650,_0x498735,_0x1bdce3){return _0xd1eb91(_0x22d650,_0x498735,_0x1bdce3);},'kfAlr':function(_0x2be6c2,_0x54bf31,_0x5757d2){return _0x2be6c2(_0x54bf31,_0x5757d2);},'nGzRt':_0x5392('‮74','2FeW'),'DKAsF':function(_0xf82b3e,_0x473c2c){return _0xf82b3e==_0x473c2c;},'eQKdB':function(_0x95c58b,_0x36c4ff){return _0x95c58b===_0x36c4ff;},'xXKRp':_0x5392('‫75','&mat')};try{let _0x7275cf=_0x5392('‮76','cN@c');let _0x3dcebc='';let _0x523f78=''+this[_0x5392('‮77','8y0r')]['session'];let _0x45f36e=_0x43af4d[_0x5392('‫78','gs56')](populateUrlObject,_0x7275cf,_0x523f78,_0x3dcebc);await _0x43af4d['kfAlr'](httpRequest,_0x43af4d[_0x5392('‫79','&mat')],_0x45f36e);let _0xbe40ba=httpResult;if(!_0xbe40ba)return;if(_0x43af4d[_0x5392('‮7a','fE]K')](_0xbe40ba['code'],0xc8)){await $[_0x5392('‮7b','&mat')](0xbb8);await this[_0x5392('‫7c','Lm%7')]();}else{if(_0x43af4d[_0x5392('‫7d','hqVo')](_0x43af4d[_0x5392('‫7e','R1t9')],_0x5392('‮7f',')p^6'))){$[_0x5392('‮80','jl2E')](_0x5392('‮81','(dum')+this[_0x5392('‫82','&mat')]+_0x5392('‫83','k8m]'));}else{httpResult=resp['body'];}}}catch(_0x2fcd17){}finally{return Promise[_0x5392('‮84','@f5T')](0x1);}}async['water'](){var _0x8adba4={'hBwcW':_0x5392('‮85','JCif'),'vveoK':function(_0x52439a,_0x3e143a){return _0x52439a===_0x3e143a;},'dkwdc':'TqoVP','KgfNQ':_0x5392('‮86','n03v')};try{let _0x21d355='https://miniapp.you.163.com/orchard/task/water/get.json?taskId=GARDEN_CHECK_IN_MUTUAL_GUIDE&&subTaskId=';let _0xcc5c06='';let _0x5b2dcf=''+this[_0x5392('‫87','T1yu')]['session'];let _0x322358=populateUrlObject(_0x21d355,_0x5b2dcf,_0xcc5c06);await httpRequest(_0x8adba4[_0x5392('‫88','gg5a')],_0x322358);let _0x93819e=httpResult;if(!_0x93819e)return;if(_0x93819e['code']==0xc8){if(_0x8adba4[_0x5392('‫89','CTrm')](_0x8adba4[_0x5392('‫8a','ox0N')],_0x8adba4[_0x5392('‮8b','(dum')])){$[_0x5392('‮8c','JCif')](_0x5392('‫8d','2FeW')+this[_0x5392('‮8e','H5j3')]+_0x5392('‮8f','nMG$')+_0x93819e[_0x5392('‮90','(dum')][_0x5392('‫91','@Rf4')]+_0x5392('‮92','^7#9'));await $[_0x5392('‮93','JuEI')](0xbb8);await this['list']();}else{$['logAndNotify'](_0x5392('‮94','JCif')+this[_0x5392('‫95','O@%G')]+']'+_0x93819e['result']['levelDesc']+_0x5392('‫96','k(5!')+_0x93819e['result'][_0x5392('‮97','F6ns')]+_0x5392('‫98','k8m]'));}}else{if(_0x8adba4[_0x5392('‫99','L)Ls')]===_0x5392('‫9a','V*F)')){return Promise[_0x5392('‮3f','d^$&')](0x1);}else{$[_0x5392('‫5b','H5j3')](_0x5392('‫9b','KXll')+this[_0x5392('‮9c','gg5a')]+']'+_0x93819e[_0x5392('‮9d','gs56')]);}}}catch(_0x24e267){}finally{return Promise[_0x5392('‮9e','n03v')](0x1);}}async[_0x5392('‮9f','KXll')](){var _0x56e43a={'TusBP':_0x5392('‫a0','Lm%7'),'BmXCg':'application/json;\x20charset=utf-8','cEFwB':_0x5392('‮a1','(dum'),'xbSGB':function(_0x66b78a,_0x395b5c,_0x476961){return _0x66b78a(_0x395b5c,_0x476961);},'eUTMQ':function(_0x3c35e6,_0x33e83c){return _0x3c35e6==_0x33e83c;},'KLdeu':_0x5392('‫a2','@Rf4'),'UUDLG':function(_0xae0f17,_0x28bd57){return _0xae0f17!==_0x28bd57;},'ljARW':'aaRtx'};try{let _0x159ab3=_0x5392('‫a3','JuEI');let _0x5d3d75='';let _0x1d38ec=''+this['param'][_0x5392('‮56','qYvs')];let _0x427cb1=populateUrlObject(_0x159ab3,_0x1d38ec,_0x5d3d75);await _0x56e43a[_0x5392('‮a4','ay$3')](httpRequest,'get',_0x427cb1);let _0x1aa2ac=httpResult;if(!_0x1aa2ac)return;if(_0x56e43a[_0x5392('‫a5','ox0N')](_0x1aa2ac[_0x5392('‮a6','L)Ls')]['result'],0x1)){if(_0x56e43a['KLdeu']!==_0x56e43a['KLdeu']){console[_0x5392('‫a7','T1yu')](method+_0x5392('‫a8','gs56'));console['log'](JSON[_0x5392('‫a9','bdK*')](err));}else{$[_0x5392('‮aa','HaMo')]('账号['+this['name']+']连续浇水三天获得'+_0x1aa2ac['result'][_0x5392('‮ab','&mat')]+_0x5392('‫ac','Lm%7'));}}else{if(_0x56e43a[_0x5392('‮ad','cN@c')](_0x56e43a[_0x5392('‫ae','wTtW')],_0x56e43a[_0x5392('‮af','L)Ls')])){_0x427cb1['body']=_0x5d3d75;_0x427cb1['headers'][_0x56e43a[_0x5392('‫b0',')GP]')]]=_0x56e43a[_0x5392('‫b1','@Shd')];_0x427cb1[_0x5392('‫b2','@Rf4')][_0x56e43a[_0x5392('‫b3','Uvwt')]]=_0x427cb1[_0x5392('‫b4','^7#9')]?_0x427cb1[_0x5392('‫b5','Uvwt')]['length']:0x0;}else{$['logAndNotify']('账号['+this['name']+_0x5392('‮b6','wTtW'));}}}catch(_0x1762f3){}finally{return Promise[_0x5392('‫b7','PUAy')](0x1);}}async[_0x5392('‮b8','JuEI')](){var _0x2ff889={'WeiQg':_0x5392('‫b9','^7#9'),'mJlRM':_0x5392('‮ba','$dtv'),'aIRSG':function(_0x34623e,_0x2b5cab,_0x1d41cb){return _0x34623e(_0x2b5cab,_0x1d41cb);},'QAYMN':_0x5392('‮bb','qYvs'),'gTwPt':function(_0xa915d7,_0x19761f){return _0xa915d7==_0x19761f;},'dEgdN':function(_0x41c2c8,_0x2b5a3e){return _0x41c2c8!==_0x2b5a3e;},'KQVYK':_0x5392('‮bc','2FeW')};try{let _0x4fb358=_0x5392('‮bd','Lm%7');let _0x332877='';let _0x9edd04=''+this[_0x5392('‫be',')GP]')]['session'];let _0x183b31=populateUrlObject(_0x4fb358,_0x9edd04,_0x332877);await _0x2ff889[_0x5392('‮bf','O@%G')](httpRequest,_0x2ff889[_0x5392('‫c0','O@%G')],_0x183b31);let _0x350a9c=httpResult;if(!_0x350a9c)return;if(_0x2ff889[_0x5392('‫c1','H5j3')](_0x350a9c['result']['result'],0x1)){$['logAndNotify'](_0x5392('‫9b','KXll')+this[_0x5392('‮3e','bdK*')]+_0x5392('‫c2','nMG$')+_0x350a9c[_0x5392('‫6a','zxqk')][_0x5392('‫c3','QlJf')]+'滴水💧');await $[_0x5392('‮c4','nMG$')](0x80e8);await this[_0x5392('‫c5',')GP]')]();}else{$[_0x5392('‫26',')GP]')](_0x5392('‮c6','JuEI')+this['name']+_0x5392('‫c7','x@(P'));}}catch(_0x789df4){}finally{if(_0x2ff889[_0x5392('‫c8','hqVo')](_0x5392('‮c9','k(5!'),_0x2ff889[_0x5392('‫ca','Uvwt')])){return Promise[_0x5392('‮4e','qYvs')](0x1);}else{let _0x500da8=url['replace']('//','/')['split']('/')[0x1];let _0x3b0087={'url':url,'headers':{'Host':_0x500da8,'X-WX-3RD-Session':ck,'Content-Type':_0x5392('‮cb','gg5a')},'timeout':0x1388};if(body){_0x3b0087[_0x5392('‫cc','ox0N')]=body;_0x3b0087[_0x5392('‫cd','k8m]')][_0x2ff889['WeiQg']]=_0x5392('‮ce','qYvs');_0x3b0087[_0x5392('‮cf','J6qO')][_0x2ff889[_0x5392('‫d0','qYvs')]]=_0x3b0087[_0x5392('‮d1','@Shd')]?_0x3b0087[_0x5392('‮d2','JuEI')][_0x5392('‫d3','lyN7')]:0x0;}return _0x3b0087;}}}async[_0x5392('‫d4','HaMo')](){var _0x55e096={'rmSvH':function(_0x5e8b86,_0x545f7,_0x1601b9,_0x33ae5a){return _0x5e8b86(_0x545f7,_0x1601b9,_0x33ae5a);},'SqGCS':function(_0x37f61c,_0xcdcb96,_0x3c915a){return _0x37f61c(_0xcdcb96,_0x3c915a);},'DaIip':function(_0x13c156,_0x3fae9d){return _0x13c156==_0x3fae9d;},'isNfO':function(_0x29cc7a,_0x2cad4a){return _0x29cc7a!==_0x2cad4a;},'UCjJR':'PuRRY','WJROC':_0x5392('‫d5','gs56'),'SjmkB':function(_0x34a219,_0x160f20){return _0x34a219===_0x160f20;},'URbSG':'PcDUp'};try{let _0x378f83='https://miniapp.you.163.com/orchard/task/finish.json?taskId=VISIT_ITEM&taskRecordId=0';let _0x50c8a2='';let _0x1b41f7=''+this['param']['session'];let _0xdcf6fa=_0x55e096['rmSvH'](populateUrlObject,_0x378f83,_0x1b41f7,_0x50c8a2);await _0x55e096[_0x5392('‫d6','gg5a')](httpRequest,_0x5392('‫d7','PUAy'),_0xdcf6fa);let _0x4caf87=httpResult;if(!_0x4caf87)return;if(_0x55e096[_0x5392('‮d8','QlJf')](_0x4caf87[_0x5392('‮d9','Lm%7')][_0x5392('‮da','PUAy')],0x1)){if(_0x55e096['isNfO'](_0x5392('‮db','ay$3'),_0x5392('‫dc',')p^6'))){$[_0x5392('‮dd','J6qO')](_0x5392('‮de','@f5T')+this[_0x5392('‮3e','bdK*')]+_0x5392('‫df','nMG$')+_0x4caf87[_0x5392('‮e0',')p^6')][_0x5392('‫e1','k8m]')]+_0x5392('‮e2','JCif'));}else{$['logAndNotify'](_0x5392('‫e3','$dtv')+this['name']+_0x5392('‫e4','hqVo'));}}else{if(_0x55e096[_0x5392('‮e5','NSQS')]===_0x55e096[_0x5392('‫e6','eQ(p')]){$[_0x5392('‮e7','@Rf4')](_0x5392('‮e8','gs56')+this[_0x5392('‮e9','@f5T')]+']'+_0x4caf87[_0x5392('‮ea','@Rf4')]+'\x20请勿多处使用or重装环境造成请联系作者解除');}else{$[_0x5392('‮eb','x@(P')](_0x5392('‫ec','cN@c')+this['name']+']浏览任务已完成');}}}catch(_0x5a11fc){}finally{if(_0x55e096[_0x5392('‫ed','x@(P')](_0x55e096['URbSG'],'PcDUp')){return Promise[_0x5392('‫ee','k8m]')](0x1);}else{httpResult=resp[_0x5392('‮ef','ay$3')];}}}async[_0x5392('‫f0','O@%G')](){var _0x2b0bcf={'EwpsF':function(_0x7022bb,_0x27b771){return _0x7022bb!==_0x27b771;},'XFEYg':_0x5392('‮f1','2FeW'),'BKdUr':function(_0x12be31,_0x190ab1,_0x868169,_0x98407a){return _0x12be31(_0x190ab1,_0x868169,_0x98407a);},'FzTRe':function(_0x1bb08d,_0x3fd6a1,_0x30c6a2){return _0x1bb08d(_0x3fd6a1,_0x30c6a2);},'QgHmR':function(_0x8db0e3,_0x48e834){return _0x8db0e3==_0x48e834;},'eTtzx':function(_0xd4b511,_0x5696c6){return _0xd4b511!==_0x5696c6;},'RjWgj':'TPrIh'};try{if(_0x2b0bcf['EwpsF'](_0x2b0bcf[_0x5392('‫f2','jl2E')],_0x2b0bcf['XFEYg'])){return Promise['resolve'](0x1);}else{let _0xd5ab71=_0x5392('‮f3','NSQS');let _0x194a6a='';let _0x58b700=''+this[_0x5392('‮f4','JCif')][_0x5392('‫f5','hqVo')];let _0x4d9ff0=_0x2b0bcf[_0x5392('‫f6','k8m]')](populateUrlObject,_0xd5ab71,_0x58b700,_0x194a6a);await _0x2b0bcf['FzTRe'](httpRequest,_0x5392('‮f7','CTrm'),_0x4d9ff0);let _0x4af531=httpResult;if(!_0x4af531)return;if(_0x2b0bcf['QgHmR'](_0x4af531[_0x5392('‮f8','V*F)')],0xc8)){$['logAndNotify'](_0x5392('‫5c','Lm%7')+this['name']+']三餐获得'+_0x4af531[_0x5392('‮a6','L)Ls')][_0x5392('‮6d','R1t9')]+_0x5392('‮f9','cN@c'));}else{if(_0x2b0bcf['eTtzx'](_0x2b0bcf[_0x5392('‫fa','R1t9')],_0x5392('‫fb','nMG$'))){this[_0x5392('‮fc','@Shd')]=![];$[_0x5392('‫fd','@Shd')](_0x5392('‮70','HaMo')+this['index']+_0x5392('‮fe','wTtW'));}else{$[_0x5392('‮ff','$dtv')](_0x5392('‮38','@Shd')+this[_0x5392('‮100','(dum')]+']'+_0x4af531[_0x5392('‫101',')GP]')]);}}}}catch(_0x3332c1){}finally{return Promise['resolve'](0x1);}}async['water4'](){var _0x4add77={'xCeNh':function(_0x517bd9,_0x17335e){return _0x517bd9!==_0x17335e;},'fGzSe':'jBMqL','teIgc':'get'};try{if(_0x4add77[_0x5392('‮102','HaMo')](_0x4add77[_0x5392('‮103','zxqk')],_0x5392('‮104','O@%G'))){try{httpResult=JSON['parse'](resp[_0x5392('‫105','$dtv')]);}catch(_0xc39462){httpResult=resp[_0x5392('‮d2','JuEI')];}}else{let _0x1296ea=_0x5392('‫106','eQ(p');let _0x24060f='';let _0x30116f=''+this['param'][_0x5392('‫107','T1yu')];let _0x1375d9=populateUrlObject(_0x1296ea,_0x30116f,_0x24060f);await httpRequest(_0x4add77[_0x5392('‫108','CTrm')],_0x1375d9);let _0x5dc6e4=httpResult;if(!_0x5dc6e4)return;if(_0x5dc6e4['code']==0xc8){$[_0x5392('‮109','&mat')]('账号['+this[_0x5392('‫10a','R1t9')]+']收水瓶获得'+_0x5dc6e4[_0x5392('‮a6','L)Ls')]['REWARD_TOMORROW'][_0x5392('‮10b','hqVo')]+_0x5392('‮e2','JCif'));}else{$[_0x5392('‮e7','@Rf4')](_0x5392('‮10c','x@(P')+this[_0x5392('‫10d','jl2E')]+']'+_0x5dc6e4[_0x5392('‫10e','cN@c')]);}}}catch(_0x3d2cdd){}finally{return Promise['resolve'](0x1);}}async[_0x5392('‮10f','ox0N')](){var _0x316c61={'iAHoI':function(_0x28a654,_0x1a92f4){return _0x28a654==_0x1a92f4;},'qGCaB':function(_0x6ff478,_0x521961){return _0x6ff478!==_0x521961;},'Uwtff':_0x5392('‫110','ay$3'),'lrbgH':function(_0x137dee,_0x2ed0cd){return _0x137dee==_0x2ed0cd;},'GSsqH':'wBuSM','mjKSF':_0x5392('‫111','jl2E')};try{let _0x38f69a=_0x5392('‮112','fE]K');let _0x172716='';let _0xc3cadd=''+this['param']['session'];let _0x544836=populateUrlObject(_0x38f69a,_0xc3cadd,_0x172716);await httpRequest(_0x5392('‫113','x@(P'),_0x544836);let _0x241b69=httpResult;if(!_0x241b69)return;if(_0x316c61['iAHoI'](_0x241b69['code'],0xc8)){if(_0x316c61['qGCaB'](_0x316c61[_0x5392('‮114','Uvwt')],_0x316c61[_0x5392('‫115','cN@c')])){$[_0x5392('‫5b','H5j3')]('账号['+this[_0x5392('‫10a','R1t9')]+_0x5392('‮116','Uvwt'));}else{$[_0x5392('‮117','ay$3')]('账号['+this[_0x5392('‫118','ox0N')]+']浇水\x20剩余'+_0x241b69[_0x5392('‮119','@Shd')][_0x5392('‫11a','8y0r')]+'滴水💧');await $[_0x5392('‫11b','fE]K')](0x1388);await this['drop']();}}if(_0x316c61[_0x5392('‮11c','HaMo')](_0x241b69[_0x5392('‮11d','JCif')],0x1f4)){if(_0x316c61[_0x5392('‮11e','(dum')](_0x316c61[_0x5392('‮11f','@Rf4')],_0x5392('‮120','lyN7'))){$['logAndNotify'](_0x5392('‫121','jl2E')+this[_0x5392('‮122','$dtv')]+_0x5392('‮123','@f5T'));}else{return Promise[_0x5392('‮124','xg$[')](0x1);}}else{if('wVfux'===_0x316c61[_0x5392('‫125','2FeW')]){$['logAndNotify'](_0x5392('‮126','NSQS')+this['name']+']'+_0x241b69['errMsg']);}else{var _0x55dc41=_0x5392('‮127','@Rf4')[_0x5392('‮128','@f5T')]('|'),_0x3476d6=0x0;while(!![]){switch(_0x55dc41[_0x3476d6++]){case'0':this['index']=++userIdx;continue;case'1':this[_0x5392('‮129','JCif')]=![];continue;case'2':try{this[_0x5392('‫43','cN@c')]=$['str2json'](str);this[_0x5392('‮12a','zxqk')]=!![];}catch(_0x3d90fc){this[_0x5392('‮12b','k8m]')]=![];$[_0x5392('‫12c','(dum')](_0x5392('‮12d','QlJf')+this[_0x5392('‫12e','lyN7')]+_0x5392('‮12f','^7#9'));}continue;case'3':this['name']=this[_0x5392('‮130','bdK*')];continue;case'4':this[_0x5392('‫131','JuEI')]=![];continue;}break;}}}}catch(_0x17b7b7){}finally{return Promise[_0x5392('‮132','KXll')](0x1);}}async['dynamic'](){var _0x207b53={'DHDcb':'fWoil','uvWIF':function(_0x471152,_0x45d2a8,_0x4f0320){return _0x471152(_0x45d2a8,_0x4f0320);},'ASHjS':function(_0x18a2fb,_0x18d5db){return _0x18a2fb==_0x18d5db;},'bTdip':function(_0x4408b4,_0x5511c1){return _0x4408b4!==_0x5511c1;},'jcdFF':_0x5392('‫133','d^$&'),'HKFtp':function(_0x952432,_0x41150d){return _0x952432!==_0x41150d;},'wRZzM':'rCdQb'};try{if(_0x207b53[_0x5392('‮134','ox0N')]===_0x5392('‮135','ox0N')){return Promise[_0x5392('‫136','hqVo')](0x1);}else{let _0x1297c2=_0x5392('‮137','cN@c');let _0xa0e44='';let _0x101894=''+this['param'][_0x5392('‮138','nMG$')];let _0xd25bf6=populateUrlObject(_0x1297c2,_0x101894,_0xa0e44);await _0x207b53['uvWIF'](httpRequest,_0x5392('‫139','T1yu'),_0xd25bf6);let _0x5a6c8f=httpResult;if(!_0x5a6c8f)return;if(_0x207b53[_0x5392('‫13a','xg$[')](_0x5a6c8f[_0x5392('‮13b','HaMo')],0xc8)){$['logAndNotify'](_0x5392('‫13c','@Rf4')+this['name']+']'+_0x5a6c8f[_0x5392('‮13d','^7#9')][_0x5392('‮13e','T1yu')]+_0x5392('‫13f','R1t9')+_0x5a6c8f[_0x5392('‮140','xg$[')][_0x5392('‮141','Uvwt')]+'滴水💧');}else{if(_0x207b53['bTdip'](_0x207b53[_0x5392('‮142','HaMo')],_0x207b53[_0x5392('‮143','gs56')])){$['logAndNotify'](_0x5392('‮81','(dum')+this[_0x5392('‫b','qYvs')]+_0x5392('‫144',')GP]')+_0x5a6c8f[_0x5392('‮145','Uvwt')][_0x5392('‮146','zxqk')]+_0x5392('‫147','V*F)'));}else{$['logAndNotify']('账号['+this[_0x5392('‫28','n03v')]+']'+_0x5a6c8f[_0x5392('‫148','n03v')]);}}}}catch(_0x200383){}finally{if(_0x207b53['HKFtp'](_0x207b53[_0x5392('‮149','HaMo')],_0x207b53['wRZzM'])){console[_0x5392('‫14a','O@%G')]('未找到CK\x20请阅读脚本说明');return;}else{return Promise['resolve'](0x1);}}}}!(async()=>{var _0x1c7995={'Bymqh':function(_0x48babc,_0x32bd6f){return _0x48babc!==_0x32bd6f;},'vnYYF':function(_0x1a4eec,_0x54b739){return _0x1a4eec===_0x54b739;},'Sojsq':function(_0xf6db51){return _0xf6db51();},'uykGk':function(_0x3f6690,_0x38eda5){return _0x3f6690>_0x38eda5;},'TphAw':function(_0x1aeec7,_0x591bce){return _0x1aeec7===_0x591bce;},'TDXgo':_0x5392('‮14b','Lm%7'),'StzSW':_0x5392('‫14c','zxqk'),'wYmwr':_0x5392('‮14d','lyN7'),'ITxwG':_0x5392('‮14e','cN@c')};if(_0x1c7995[_0x5392('‮14f','$dtv')](typeof $request,'undefined')){}else{if(_0x1c7995['vnYYF'](_0x5392('‮150','gg5a'),_0x5392('‫151','L)Ls'))){if(!(await _0x1c7995[_0x5392('‫152','QlJf')](checkEnv)))return;let _0x19451f=[];let _0x33ac01=userList['filter'](_0x28d8d9=>_0x28d8d9[_0x5392('‮153','O@%G')]);if(_0x1c7995[_0x5392('‮154','wTtW')](_0x33ac01[_0x5392('‮155','T1yu')],0x0)){if(_0x1c7995[_0x5392('‫156','wTtW')](_0x1c7995[_0x5392('‫157','&mat')],_0x5392('‮158','F6ns'))){$[_0x5392('‮6b','wTtW')](_0x1c7995[_0x5392('‫159','JuEI')]);_0x19451f=[];for(let _0x462d41 of _0x33ac01){_0x19451f[_0x5392('‫15a','$dtv')](_0x462d41['km']());}await Promise[_0x5392('‫15b','k8m]')](_0x19451f);_0x33ac01=_0x33ac01['filter'](_0x24937d=>_0x24937d[_0x5392('‫15c','bdK*')]);if(_0x33ac01[_0x5392('‫15d','JCif')]>0x0){if(_0x5392('‫15e','^7#9')==='gopfW'){return Promise[_0x5392('‫15f','k(5!')](0x1);}else{$[_0x5392('‫160','L)Ls')](_0x1c7995['wYmwr']);_0x19451f=[];for(let _0x295f12 of _0x33ac01[_0x5392('‫161','n03v')](_0x2d16fc=>_0x2d16fc['canRead'])){var _0x19620c=_0x5392('‮162','T1yu')[_0x5392('‮163','k(5!')]('|'),_0x377cbc=0x0;while(!![]){switch(_0x19620c[_0x377cbc++]){case'0':_0x19451f['push'](_0x295f12[_0x5392('‮164','zxqk')]());continue;case'1':await $[_0x5392('‫165','gs56')](0x1388);continue;case'2':_0x19451f[_0x5392('‮166','eQ(p')](_0x295f12[_0x5392('‫167','L)Ls')]());continue;case'3':_0x19451f['push'](_0x295f12[_0x5392('‮168','xg$[')]());continue;case'4':await $[_0x5392('‮169','gg5a')](0x1388);continue;case'5':await $[_0x5392('‮16a','L)Ls')](0x1388);continue;case'6':_0x19451f[_0x5392('‫16b','F6ns')](_0x295f12['water3']());continue;case'7':await $[_0x5392('‮c4','nMG$')](0x1388);continue;case'8':_0x19451f[_0x5392('‫16c','nMG$')](_0x295f12[_0x5392('‮16d','fE]K')]());continue;case'9':await $['wait'](0x1388);continue;case'10':_0x19451f[_0x5392('‮16e','V*F)')](_0x295f12[_0x5392('‫16f','L)Ls')]());continue;case'11':await $[_0x5392('‮93','JuEI')](0x1388);continue;case'12':_0x19451f['push'](_0x295f12[_0x5392('‫170','lyN7')]());continue;case'13':await $['wait'](0x1388);continue;case'14':_0x19451f[_0x5392('‮171','JuEI')](_0x295f12[_0x5392('‫172','$dtv')]());continue;}break;}}await Promise[_0x5392('‫173','x@(P')](_0x19451f);$[_0x5392('‫174','F6ns')](_0x1c7995[_0x5392('‫175','ay$3')]);_0x19451f=[];for(let _0x118f54 of _0x33ac01){_0x19451f[_0x5392('‫176','&mat')](_0x118f54[_0x5392('‮177',')p^6')]());}await Promise['all'](_0x19451f);}}}else{return Promise['resolve'](0x1);}}await $[_0x5392('‫178','8y0r')]();}else{$[_0x5392('‫179','d^$&')](_0x5392('‫17a','R1t9')+this[_0x5392('‫17b','zxqk')]+']'+result[_0x5392('‮17c','^7#9')]);}}})()[_0x5392('‮17d','^7#9')](_0x288f9e=>console[_0x5392('‮17e','lyN7')](_0x288f9e))['finally'](()=>$['done']());async function checkEnv(){var _0x66da75={'lEUrf':function(_0x5092ea,_0x261762){return _0x5092ea===_0x261762;},'VxHAb':_0x5392('‮17f','J6qO'),'OOdZS':_0x5392('‮180','O@%G'),'riZvS':function(_0x4c693b,_0x4d7e3e){return _0x4c693b>_0x4d7e3e;},'VgfEw':_0x5392('‫181','R1t9')};if(userCookie){if(_0x66da75[_0x5392('‫182','ox0N')](_0x66da75[_0x5392('‫183','H5j3')],_0x66da75[_0x5392('‮184','bdK*')])){$[_0x5392('‫185','k(5!')](_0x5392('‫186','PUAy')+this[_0x5392('‮187','wTtW')]+_0x5392('‫188','eQ(p'));}else{let _0x330537=envSplitor[0x0];for(let _0x104b64 of envSplitor){if(_0x66da75[_0x5392('‫189','Lm%7')](userCookie[_0x5392('‮18a','T1yu')](_0x104b64),-0x1)){_0x330537=_0x104b64;break;}}for(let _0x16ed9b of userCookie[_0x5392('‮18b','n03v')](_0x330537)){if(_0x16ed9b)userList[_0x5392('‫18c','T1yu')](new UserInfo(_0x16ed9b));}userCount=userList[_0x5392('‮18d','$dtv')];}}else{if(_0x66da75['VgfEw']!==_0x66da75[_0x5392('‫18e','NSQS')]){return Promise[_0x5392('‮124','xg$[')](0x1);}else{console['log'](_0x5392('‫18f','$dtv'));return;}}console[_0x5392('‫190','ay$3')](_0x5392('‫191','fE]K')+userCount+_0x5392('‮192','V*F)'));return!![];}function populateUrlObject(_0x1a9a19,_0x23f38f,_0x2135d7=''){var _0x30b37c={'BFqnw':_0x5392('‫193','J6qO'),'igusJ':_0x5392('‮194','CTrm'),'FQVbe':'Content-Type','spMyw':_0x5392('‮195','k8m]'),'ufguF':_0x5392('‮196','KXll')};let _0x27aa23=_0x1a9a19['replace']('//','/')['split']('/')[0x1];let _0xe42339={'url':_0x1a9a19,'headers':{'Host':_0x27aa23,'X-WX-3RD-Session':_0x23f38f,'Content-Type':_0x30b37c[_0x5392('‫197','L)Ls')]},'timeout':0x1388};if(_0x2135d7){if(_0x5392('‮198','2FeW')===_0x30b37c['igusJ']){_0xe42339[_0x5392('‫199','Lm%7')]=_0x2135d7;_0xe42339[_0x5392('‫19a','PUAy')][_0x30b37c[_0x5392('‮19b','wTtW')]]=_0x30b37c[_0x5392('‫19c','gs56')];_0xe42339[_0x5392('‫19d','HaMo')][_0x30b37c[_0x5392('‫19e','fE]K')]]=_0xe42339[_0x5392('‮19f','bdK*')]?_0xe42339[_0x5392('‮1a0','cN@c')]['length']:0x0;}else{console[_0x5392('‫1a1','JCif')](e);}}return _0xe42339;}async function httpRequest(_0x16e18d,_0x3f6ba0){var _0x5e297c={'tHyip':function(_0x4cdcf4,_0x46e312){return _0x4cdcf4!==_0x46e312;},'uPoEY':'hKYTY','KutRW':_0x5392('‫1a2','x@(P'),'YFcxG':function(_0x42932d,_0x525010){return _0x42932d!==_0x525010;},'JMDwX':_0x5392('‫1a3','zxqk'),'Rfkzl':_0x5392('‮1a4','k(5!'),'MvGnP':_0x5392('‫1a5','(dum'),'PnIeM':function(_0x473a05,_0x1202fd){return _0x473a05==_0x1202fd;},'CpyUN':_0x5392('‮1a6','@Rf4'),'KyGmv':_0x5392('‫1a7','F6ns'),'UxrJR':'BgFIR','IKKKw':function(_0x35f221,_0x1dfde6){return _0x35f221!==_0x1dfde6;},'JzrgF':_0x5392('‮1a8','PUAy'),'ZaZmX':_0x5392('‫1a9','@Shd'),'fwEmA':function(_0xef455c,_0x5c823d){return _0xef455c===_0x5c823d;},'HLvLv':_0x5392('‮1aa','JCif'),'zOLbn':'ZTIoF','mdMii':function(_0x229d45){return _0x229d45();}};httpResult=null,httpReq=null,httpResp=null;return new Promise(_0x51b78f=>{var _0x132378={'rOGUt':function(_0x1faee9){return _0x5e297c[_0x5392('‮1ab','x@(P')](_0x1faee9);}};$[_0x5392('‫1ac','HaMo')](_0x16e18d,_0x3f6ba0,async(_0x1e0bae,_0x5df649,_0x7bc038)=>{if(_0x5e297c[_0x5392('‫1ad','ay$3')](_0x5e297c['uPoEY'],_0x5e297c['KutRW'])){try{if(_0x5e297c[_0x5392('‮1ae','Lm%7')](_0x5e297c[_0x5392('‮1af','L)Ls')],_0x5e297c['JMDwX'])){_0x132378['rOGUt'](_0x51b78f);}else{httpReq=_0x5df649;httpResp=_0x7bc038;if(_0x1e0bae){console[_0x5392('‫1b0','@Shd')](_0x16e18d+_0x5392('‮1b1','H5j3'));console[_0x5392('‮1b2','CTrm')](JSON['stringify'](_0x1e0bae));}else{if(_0x5e297c['YFcxG']('GnnGU',_0x5e297c[_0x5392('‫1b3','zxqk')])){if(_0x7bc038[_0x5392('‮1b4','V*F)')]){if(_0x5e297c[_0x5392('‮1b5','jl2E')]===_0x5e297c[_0x5392('‮1b6','x@(P')]){if(_0x5e297c[_0x5392('‮1b7','JCif')](typeof _0x7bc038[_0x5392('‮1b8','L)Ls')],_0x5e297c['CpyUN'])){httpResult=_0x7bc038[_0x5392('‮1b9','wTtW')];}else{if(_0x5e297c['KyGmv']===_0x5e297c[_0x5392('‫1ba','@f5T')]){$['logAndNotify'](_0x5392('‫1bb','bdK*')+this[_0x5392('‮1bc','ay$3')]+']收水瓶获得'+result['result'][_0x5392('‮1bd','n03v')][_0x5392('‫1be','PUAy')]+_0x5392('‫98','k8m]'));}else{try{if(_0x5e297c[_0x5392('‮1bf','F6ns')](_0x5e297c['JzrgF'],_0x5e297c['ZaZmX'])){httpResult=JSON[_0x5392('‫1c0','V*F)')](_0x7bc038[_0x5392('‫1c1','k8m]')]);}else{$[_0x5392('‮eb','x@(P')]('账号['+this[_0x5392('‮1c2','QlJf')]+_0x5392('‮1c3','jl2E'));}}catch(_0x5aef81){httpResult=_0x7bc038['body'];}}}}else{taskall[_0x5392('‫1c4',')p^6')](user['dynamic']());}}}else{$[_0x5392('‮1c5','n03v')]('账号[开启通知获得'+this['name']+']'+result[_0x5392('‫1c6','$dtv')]['water']+_0x5392('‮1c7',')p^6'));}}}}catch(_0x20f58e){if(_0x5e297c['fwEmA'](_0x5e297c['HLvLv'],_0x5e297c['HLvLv'])){console[_0x5392('‫1c8','Uvwt')](_0x20f58e);}else{return Promise['resolve'](0x1);}}finally{if(_0x5e297c[_0x5392('‮1c9','k8m]')](_0x5392('‮1ca','eQ(p'),_0x5e297c[_0x5392('‮1cb','NSQS')])){_0x5e297c[_0x5392('‮1cc','&mat')](_0x51b78f);}else{$[_0x5392('‫3c','CTrm')]('账号['+this[_0x5392('‮3e','bdK*')]+_0x5392('‫1cd','8y0r')+result['result'][_0x5392('‫1ce','cN@c')]+_0x5392('‫1cf','JuEI'));}}}else{$[_0x5392('‫174','F6ns')]('账号['+this['name']+']'+result[_0x5392('‫1d0','QlJf')]);}});});};_0xodc='jsjiami.com.v6';
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