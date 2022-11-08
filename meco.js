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

var _0xod8='jsjiami.com.v6',_0xod8_=['‮_0xod8'],_0x47f0=[_0xod8,'w7V4RcK9w5dK','ZTDDjMKRHQ==','w6TDk8OtwrbCqQ==','wq3ConTDtgY=','EOmgoeWOo+aJmeWmlOWmjOWIsg==','KQxMcA/Dng==','wr0Rw5t4wo7Dr8O7','w5wgXMKaNA==','SMORRsKd','T3PDij4=','CjLCkgo=','UHfDjzo=','w5XDnhFNw58ow4IpI8Kqfhg=','V8KZw7TCrw==','bDPDnsK8NA==','wrXCrMO2w4s=','w50SFX0=','wpjDocKNHg==','wosUwq4A','LcKNw5Y2wqXCmCPCjsO8WifCuA==','FMK9LzU=','wrTDnnHCmw==','XMKfwpPDkcKYwrTDn3dBJcOmw50=','wq3DmVnCtcO9w7PDpXHCjMKew7TCvlLCjhbDleellualqOi8keW4m8O8w4fCusOlH8KYMsO9csOyYlpewrbCoQ==','CzrCqBfCvw==','bQPDgsKULA==','w5Z6X1Eq','wpQ5IMO6','LgBWw48IGS51fDEeG8Oc','wrPDimvChw==','bg5aNw==','wqHDpcKkwpPDtiXDrcOXw5zCpC/CucOzwrM=','w7Fywrs=','cA/DhDkhLMKx','w5fDmMO6wozCtg==','YGLCv8KWHsOLw4U=','LAZWw44=','ZBbDiSDCtw==','McKtPDsX','5p+/5oiO5YmRw4zDh0Xor4npmrHorbHoh6Xmnr7orbTmmKE=','cBBsDx8=','w7XCpMKFCsKgdGo=','w7zDp0ZYwqM=','wobCpzsxw44=','wps6wr1y','6Lay5Y+rdg==','G+isjeWImOWmn+WnveS+uOeWnFRa6Yab6KGX542B5aO36YGJ5oqP6KyK6ICg57OD5Lyf6IKJ6KeP6Zu1','wqjDhGU=','wojDrcKewqI2','w7DCpcKG','5Yei5omv5YiZ','w5B+R8K9w5dWwoIJYnhHNQ==','wqsNFsOiH3Y3wqZSw7/DmsK1w4kcQwU/ETPDhFzCuzTDksODwp/CmsKOw53CrcO1','CcKHw4wWwqHChTzDr8OZTD3DrcKrw5E=','bQtFNiA=','AMOgw7QM','wookwpFewq8fSg==','w7fDhnBhwqE=','KMKHw4Yb','HCPCixLCkcOuYF/CoCbCj8KVw4jColZowpNcQCACMMK5woUewq3DhsKBIsOHR17Dug==','ScK7w4/CsXw=','wqjCthHComY=','cQLDmyItPMKz','w6dsQXk/','dVnCgMKxPQ==','wqLDpcKgwoXDhg==','w4gcGHA=','wqrCi2LDnA==','wqvDu8KQAlQnwoPDuQXCl8KLw7o=','d8OiX8K7BA==','wqDCgWfDgSbDqsKz','UWrDgAvDqA==','wrPChhAh','w790R8Kuw4ZQ','w7fChcO1wpooHMK+eHjCpsK0NQ==','wqAjAsOVwpw=','wo/Ci8OVw47Duw==','XcKTwqbDqsKx','AcOOJ8Kowow=','OCtNVT0=','w6nCp8K4wobDmA==','woHDgsKSMkY=','Xm92Y0I=','EsK3NS8d','ZhnDqDrCiQ==','PsOCG8KA','GhxnXgY=','w5slZMKyOg==','biPDrRrCtg==','wpfmlp3pg6borbnlpKDliqTljrnpoZTlj60=','wqXCmBYzw6E=','w5hawpE0wow=','U8OfSA==','6KyV5rCD5aeB6LSf','w4vCmxM=','w73DjGBO','wpkQAMONIA==','w7JxwrM0','ZTnDkcK1J8OI','woHDtcKTLMKn','wpLDrHXCtmU=','6Le35YyeLw==','w7fltoHpo7rlj58=','w5gEP2YKwpbCrQ==','5LiO5YmD5YiA5aa45Yu8','w5fClQbDq8K1','worDu8KaDw==','RcKDw6PCvg==','6LaU5Y2MPg==','w5nCj8Oowp0sFcKv','RCjDjgIl','OzpNw4o=','w6fCr8KQwoDDuVHCuw==','wpckwqojUA==','w5XDicO+woPCty9Vw4fCksKiA1ZXDMOHw6nClEbDhjnCv8KCEcORPMOjaxvDmMOkRcO7bA==','C8K5JyUgw4V7','wqfCtsOhw5o=','w4vCkRrDv8KkwrY=','ETzCnA==','w6pGbsKzw7o=','XsKUwpE=','w7LDhmdY','FCDCtRHCnMOo','fMO3RMKMPg==','wo/DscKKElA9wpY=','w4zCjcKawoHDpQ==','w7LCpcKFCsO1Vm0Gw4rDp27DpcK+OcK9','w54bGWc=','wrDCmQQ0w4zDs8K0wptiK15ABB7CnGrDtzFkw6zCo8KhInfCocKnfxrCr2HDsA==','wqMRwpADSg==','wqzCt8Ohw4bDuw==','wp0uwqJzZQ==','W3PDjRjDnMODbg==','w5fClQbDucK9','XlJ8FERfw5Ih','egVWw77Cvg==','w6zDicODwoTCkg==','woLCgxl5X8KCacOOfcKkwrrDpg==','6LSL5Y+RVQ==','wqfCshTCqE8=','AcKzIjg=','CsOqw7ERw50eVQ==','Pwt1Zg4=','woMqwq9+ZBxs','HzzCnwc=','fBRNJg==','wpMiDMObw4k=','w7R0XQ==','fcObQcKYw7PCpsKwwpjDmw==','LMKDw5U1wqU=','wrzDj8K4wrTDhA==','w7lkY8K6w6c=','w7NLa1QN','wo7CtmvDsQY=','wqbCqATCvQ3Ci8OSw4nCuU0Owq4wwrLDlhXCgRNtw5N+OsKzw7k7bcO7BsO5GX4Yw5LDtsO6ecKFYsOrw4Quwqs6w6h5AX3ChMKpfcKNwrXCphvDhRAnw4ZVJA==','QwrDjBnCsA==','HjzCnxs=','wowmGcO6w6E=','LzxZ','w4YcG0gRwpzCl8KPYyfDuk8=','NzREw5Y=','wrnljK3lrpXpqJ7orLDmiYfliqfDj+ach+aVveafr+iHng==','PcKJw4sW','w6vDimlSw74=','wpIowqcLTA==','XMOHWMK5AQ==','LApEYQ==','w5HDlAF8','MsK5wrQRYg==','QUlpZ0BIw7Mgw5s6wp7Cpw==','6LaS5Y2Ow5U=','Q0djQw==','wqYSAcOPGHEYwr1Pw7nDksOj','w7HDgmlS','YRLDrA==','GOivpeaho+aer+WPmOWtpOaInOWcpsOJwoHmnbjlm6Dku6JNUzPDqUnCvMKhIy1HwrPlpZ/ojrTlj7PljILlr5k=','W2XDlBrDvw==','w5fChcO/wos=','V17CpsKtBA==','V8OlWsK7NQ==','w6XCsMKnDMKR','6LWs5Yyfw7k=','w6HCq8KcwoE=','w5zDsA9bw5k=','woPDnnrCl3s=','bwjDjA8iO8KYTwXDrMOhw7k=','6LeN5Y64wpU=','w5rDmMOjwoo=','w4bCkBDDiMK/wrfCpijDkg==','w6BwX8Ksw7dWwpNWUXh1McKtw6k=','w6/DjHdD','HARYw4HChQ==','woY6IcOrBQ==','IsKcw5YSwrfDkWfDrcOtWSPDosOowpdDX23CmkzCsMOvJ2Mpw43DrMKHRMO7wrx5wp/DmQlrw4FnPsOzIEzDuD9/EzNiw67DpVbCoAPDkjrDkMOiwqdTw4xGwoUMwrLDmg==','wqURE8Ouw6E=','JMKgwqouSknCiQ==','V8KIw6zCj2g=','Ox1Zw58/Ew==','S2bDgj7DjMOR','wq/CvhzChlU=','TMOETsKdMsK7','wp8qP8OsOA==','SMKOwobDscKMwrQ=','woHDunPCgWc=','SxxRw7XClw==','w57DlAJYw5A/w6cKPsKwbFA=','wrzCjAcrw4TDt8Kw','AMK9KBMgw5Zs','JsKHw4UjwqrCjwbCrcOhQDXDsw==','w7tOWFIR','QsKmw6HChVs=','woTDu8KZN18twrnCuyXCh8Kdw6Y=','wrnDk8KJDA==','woYqwr1pYAl6','w4bCj8OowoEhBMKv','wqLCvMOxw7fDosOLCA7DjB7Csg==','JMK+FjEj','woMpJw==','w4NoT8Kew78=','wqo4wpwARA==','wq3CrcOxw5PDsMKCTG3DnR3Ctg1Yw6XCucOOwqvClMO1E3pBAwYTJRnDu8KYw75/w6rDrTsZMsKgOcKcw5zCjnoTOsK9QwIqwpduwpkhT2rDs8K3w69+w7TDpsOg','dmrCo8KWHw==','wqsew5xFwoXDp8O7','KARTSDs=','GBdZw6fCjg==','YCzDvAo0','5p+k5oqi5YmAwo58woTorIrpmqforK/ohbnmnY/orL/mmZs=','w6vCq8KFwoU=','TybDgQsl','AwB/w4DCvQ==','GjbCjyvCi8Ooc2/CqD3ChA==','ZjTDnMKRKsOYPF/DlcOJwrAA','VnPDji8=','w7HCr8KSHMK5XGk=','PcKhwqQASkTCo8OKWVjDksKV','w7p9QHU=','wrnmroPmlrbnr6zli4HkuqzlipnltJ3lroLmiKU=','w7fCq1RdwqzCtcOu','w5YwZ8Ouw4ArCMKTPQ==','w6N+WsK9','w4DCo3Fdwqs=','w5rDjxFpw41hwoZKMsKpekFeWsKQw4zDksObw6/Ct3vClnpdMMK6EMOKwo7Ck8KkwqvCncK5Q8OKQxrCjxw7wqNawp9wW8O2w53ChMOlw7J0OEAGJGw/HzFywoDDlMOkwpY=','OsKJw5ADwqk=','wpcvwplVwqQEXQ==','w5pmXsKxw7Y=','ezd7GhA=','wpzDrcKHwrPDhw==','w4vCmxPDmcK+wrrChjPDlcOawr/Dqg==','wpUAwrAN','IgBTdwvDi8KO','wqLCpXzDjhs=','CcKdPCod','PsOXGcKNwrY=','w7/Cq8KPPcK9Wmg=','wo0iN8O3wok=','w6zDl3YFwqXDgsOLcw==','KwJuw4omCR8=','wrLCgiI5w4nDucKx','6LeE5Y62wqs=','ScKNw6rCog==','FD3CnxvCgA==','w40WCF0ewovCssKsfj3DqAc=','KABU','wr8LIMOUJw==','wpPDusKRwqkA','PwRSZQc=','wp4hwqd1bwd7','wqjCqhnCrFk=','woYaNcOFwro=','wpjCpUnDlzY=','wqDDinbCkg==','VMKYw6bCs2jDuA==','SVRvUQ==','wrbDiMK0wq0X','wqHCgSwgw6s=','6LWp5Y6Sew==','wqvCuMOow4Y=','DsKvIQ==','V8KVwoDDhMKXwqPDulRcP8O0wpc=','wpjmrJbmlaDmiJ7lp5XkuYPli4LltrDlrKnmib0=','ZHHCmcK4EQ==','wrg5LcOlw40=','cxLDmCY=','wowqwrpOYB10YcOdFSXDtQ==','wpnDksK2wpPDjQ==','w6keMXg1','w5o+WcKcLlsC','w71FeWgI','w48qMn8S','wqcHIsOgw7kLSg==','wqrCjWHDiCbDtMKvw7bClUTDrQ==','6LaB5YyDLw==','ZCdOw7o=','wogjNMOTwp8zdsKAelzCllQ=','aGrCvMKS','wrvDhsKjwpMiwqrDjMKMwr7Dp8OAeA==','woPCrMO9w4LDgA==','DcO2w4Idw5A=','wp/DisKSwqQq','w7HDkiB6w5c=','w6fCvsKFwpTDrxnDp8Ocw7zCisO7w41mwq3ClxjDhH7DrE/ClDDCn2vDpG5Ww5zDnirCiMODGsOJwqxyXkEPw6YRPcKaw47Cuh/DlcKYwpLCnsK8woMzw5LCq8OUwpV+TMONwp8=','wqAeCMOgw6IMWg==','wqvDg8Kcwr/DqQ==','Ki99w6kD','w7dwXcKo','PBFBcB/Dnw==','X0NtQ0daw5g=','wr3ChhMZw4vDtMKbwoB/LVYW','6La65Yy9wro=','DMOuw70Q','YuW1gumiqeWMvw==','w4PClQDDuQ==','ScKNwqTDqsKMwqnDgA==','5Li/5Ymn5Yq85aWk5Ymx','wqcVEsOgw6ATWw==','AcKtwosvcw==','wpUrwqkwbg==','wq0gw69gwo8=','w6zDh1xbwp8=','wrzDpcK/wpM=','MSFdw4PCvz3CqwrCkMOaJ8OKMcOSw7hvY8KuWkXCsFp4D8KnBC/DhcKuIEkVA8KKw65nWnDCmsKSwo/CiB3CjMO/wrsAKVfDqSHCusOpLVDCuEgKw7nDkAg=','wqfDqsK7wpnDjT/DrA==','ZsODSMK5AA==','w7d7wqM=','w5TCgBXDrMKlwq0=','wrLCtlzDowY=','wpLDhsKkMHQ=','w5DDmMO6wo4=','S8OJX8KM','wrgYBcOrH2Mz','6LSs5Y6sw6A=','w75/wroo','fgTDuADCvcKhw5s=','OMKNw5ENwqjCnS0=','w7PDjGM=','bT7Dj8KFN8OZAHTDgMOUwrM=','fwtZMz3DsQs1W8KLJQnCrSQHwrFjCzDDpMOPAsO0ORIrOytHwpTDlMOLZQ==','w6TCmxrDrMK1wrDCvHHDrcOWwrfDtAvDiw==','EcK0CTYg','w71rZH8O','esKYwqTDrcKb','bn/CpcKHAcKdwpMlBMOnwrsWwqTDg3TCosKKAMOvwq43w4zCr3bDpQ/CkMKjK8Kew5U5w4XDnsKXw7dPAsO/wqjDi8K4O8KKw7FtwqBtBFzDnMKqw5lWwoLDqU7CiAINdg==','OMOJHMKLwqzCs8On','Pwpyw4wj','cBPDijo5LA==','wrfCigPCi2Q=','woUmDMOow4c=','DzvCtAnCnQ==','wrgYFsOiF3Yz','wqTDgsKIAMKY','wognLMOLNA==','wqbDhGbCig==','wqzDjmPCl0vCr8OI','w77Cp8KDB8K5','w4IWHW0aworCqg==','wpzCk0fDrA4=','WcKVwoPDvA==','wo4kwp5dwr4F','wqnCtsOiw6LDrcOcLS3DkQTCoBw=','JMKJw48H','w47nra/liJnmi5nliK0=','F8KlNiQ=','wqcVAsOqw6UTWw==','wrDDjMKwwoYtwr3DqcKvwqPDvcOSMg==','wrsRDMOq','w73Cm8K2PMKR','wr7ChWrDjCc=','aSdNw43CosO4Kg==','X0N9SUJaw5g=','wo89wq9t','Z0lkSmU=','w5AwZsOuw4ErC8KTPEnDgQ==','wqkIw5xOw5Y=','fT5Kw7s=','w50SwrIddMKGHcKuZWUDwohow4vCjBTDkVNLXXtiw4zCqFvCmFMCwrI=','wqM/wpRfaA==','XsKVw6rCsms=','KTpaw4c=','w6DCm8K+wrbDjA==','wpQhJcOCw7o=','wrIfw5JrwoXDqsORw7trNsOrLg==','6LSB5Yybw5w=','ZeavneaVhuaLt+Wnr+S5meWKq+W3vOWskeaLlg==','MsK+w7Uowow=','EcO/w7wcw4w=','wpwEwqk4acKMFsOnMFsJwoJfw4PCmwo=','w501U8KWKUQD','w7hzSlElwqPCrsKJYRPDvAM=','6LSl5Y6Qw7A=','w4nmiqHlpbvojqflv5w=','wp8AwqkJ','w7/CuMKUwpfDuU3CvMK9w6XCl8Ou','wo8uwrp7','amTCtsK2HMODw7JlCMO+wq0H','6La55Y2UXw==','a27CosKEE8OAw5k=','HsKpw7gGwq0=','wozCth1bfw==','w5fCmwfDrA==','wpfCmjkqw6c=','wrImEcOrw4Y=','wpjChUTDiA8=','w5/DnhZqw588w4w=','w4XDgwx9woM=','V8KNw7XCpnA=','FMKkLyU=','w7TDtMKgwpPDkDPDpsORw5jCri7CucOdwq7DpA==','E8Osw5www6g=','RjXDuwvCpg==','VH3DhAvDl8OGRGHDqcKvJMOx','6Les5Y6KPQ==','wrLDgsK6wqI=','eumhquWNkeaJuuWli+WnneWKqA==','w7bCvGBWwoY=','w7bCugXDicKn','wrMVw4ZZworDqcO6','w4DDnhZ2w5Itw4w=','w501Q8KcLEQD','wpTDtsK7wqAz','w7tmwp0swrY=','PAXCiCnCvg==','YmXDgT7DvQ==','w4TCrEVzwrU=','WcOoX8KACA==','w4cXcsKeNA==','KgZcw5I=','w6/DgnZWwqI=','aXvCtMKZG8OD','KhHDpAbCv8Kjw43DiWY=','wrLCng0Sw58=','w5wkUcKHNUE=','Bztqw6kz','IwpHRQTDiMKlOcOCwqnDs30=','6LWE5Y24w4s=','UeS9u+WTk+S7veWJueeNvua6huaLu3Q=','wqjCvMO2w5DDosOfBg==','wpkqwr11bRh6','wrbCgBhZWQ==','6Led5Y6WwoY=','w4ExXcKW','6Lex5Y2Fwr8=','w48REUYx','wrnDgcK6wogN','eCNQw7DCq8OvKw==','IwpH','acKPwqrDssK6','wrzCuQPColvDksKY','w4fCg8O8woA=','PhhPw4PCmg==','wq3CrcOxw5PDsMKCTG3Dlh7CqksCwq7CssOAw7XCh8OkHntJD1gAZBfCrsONw6EnwqrCq3IVJcKuF8K/w5zDhnNZPcKARR8=','SMKcw6LCqXTDryQ=','w7xhTMKnw5tc','ccOVRMK4CQ==','ScKOwrXDiMKe','B8OOMsKqwps=','wr8kw7Zlwqo=','FsObw5Q2w5s=','bB5aMDjDpA8=','6Leo5YyrKw==','wqQcC8Or','wpPmrJPmlpXnrrPliIfojJPlvao=','w6TCqkNiwq/CqsOlIEs=','S8KDw6DChnPDr1cdXQnDrcOo','EzLClhs=','w5nDnMO9wpzCvytR','wrvCpVDDsA8=','w5jCi8OYwqc/','w4gdVsKDFg==','wqLCsxc=','w63DhndYwqPDh8OB','a3bDjifDvg==','HMK9wo44dA==','wrEvAMOjwpc=','IcK1Bwg9','DQxhTRI=','bn/CpcKHAcKdwpMlBMOnwrsWwqTDg3TCosKKAMOvwq43w4zCr3bDpQ/CkMKjK8Kew5U5w4XDnsKXw7dPAsO/wqjDi8KtO8Kdw4F3wrN6f0jDhsKmwolNwoXDpBw=','XUd8R0M=','w6Vwwr4iwo3Cjy8=','w4Q1wolKwq9Q','w5PCjQTDvQ==','NcKAwqElcg==','fTzDncK9PA==','w6fCrUF7wq8=','Pi9Rw7kC','RGjChsKxNQ==','w6YdC1oI','wqLDpcKgwpfDjg==','bQ9bbT7DoQUv','w6bCpXFTwqzCqsOv','IcOIEsKlwqzCvsONwovCnV0NPg==','w7LDhndEwq7DlsOB','wqjDhGXCskDCucO1wrx+Y3DCvA==','wokEwq0EZ8KGHQ==','cBfDhyc4','wqrDosKlwpzDig==','w6bCmxDDicKq','RUNvQktew44=','w6vCmMKdwpTDtQ==','w5lvYGkb','woEmwqhtSg==','EMOqw6Maw5QaQw==','I8KrwrAuSFbCiA==','wosOwq4c','wrXCuMO3w4LDrg==','w5LCmh3Dt8K+wrfCrA==','bhpbPjk=','QlZrSEdI','w47DtcKaEkUgwprCsWw=','wqPCkMOzw4LDrA==','w63Cu8KlKcKS','IQRNYQ==','UsOVXMKaJsKvw4w=','w71wRMKs','w4nCosKkwo7Dhg==','wq7DhsKkwqgvwq/Dgg==','V8OVQ8KZ','wrjDpsK4wosn','ThdwKDA=','RD5lw6XCqQ==','A8OfM8Kewqw=','OAhKw4on','cQtMMT3Dtg==','UHHCpMK0IQ==','T8OfXMKd','wrHCpmvDkwA=','wpc4MsOmwoQk','wrvDncKDKMKCasO1wqXDscK9w4XCvQ==','6Lez5Y6HOg==','w4nClRnDvQ==','wo8kwoNJwqsKXA==','6Le65Y2Uwow=','woPCiQ1LUMKBQg==','dG7CosKYHsORw5k=','w7V4R8Ktw7BBwqNKX25ZOcKl','woDDvsKsOcKL','w4TDlsO9wps=','wq0GBcOZw4k=','wrnCoDZoVg==','wrTDh8KFwrvDlQ==','wqLCsxfCjFnDgMKzw43CoAoFwrI=','6LSZ5Y2HdA==','bsOqXsKiDA==','w6w4FVEx','ETzCnD/ClsOpT0TCvSDCh8OD','ehpdPg==','w67DvOW8o+WKgOetvue4g+i8puW4hA==','LsKJw5YD','w6zCuMKOCMKqXn8W','wrfCvMO2w4zDr8OOBg==','wq/DgsKhwqIWwqrDgsKywpLDusOROcKkAw==','wp7Cgw1M','wowrwrVzwq8=','wqzDn3bCg13Dp8KUw7xyembCrQHCi8K6RcObCMKmw4TCr8K7wp0TwpfDsw56XsKww5kZRsKuwoHChMKNwpArKcOXw6vCnjfCkTTDkXLDh0fDlsK6wpwqw67DgzlQdsK4wqDDnxMc','w58xQsKSLQ==','wp3DusKXGV8gwpM=','YGNDcV0=','woDDlsKcE18=','wpE1wpFOwr8e','wrkfBsOOw6IBcMObw77ClsO0w7k=','6LSe5Y+lw7g=','w4QSEWw=','wqPCuQPCvlbDg8KY','OsOGHMKQ','eTrDjcK1EcOPF0LDpMOOwrMLwo7Dlg==','wo4uwpd7wqQJd8O6csOrw53Cnw==','woXDscKNBVAuwpI=','EcK5NS4pw4Ft','fzXDn8K1IsOVHFXDhQ==','w6TDkBBtw6s=','wq/DnzUHwrPCgMKQYcOgR8O5VEvClsORLRnCuMOoCsOiAXDCnVdPwqtgOCBZw5PCiHfDsMOTMg==','wqPDs3vCt0Y=','wrY6LMO4w4Y=','VVvCl8KHOw==','w7d3e3Enwq7ChA==','Zj7DlcK3MMOU','wr7ClMKjw4LDs2EZwp7DlsOgQFQCDMKdwr7ljoLlrq3pqKzorpfDrcOCEcKJY8KiI1jClsKmDMKzJVZb','GcKMFzst','w47DusOdwo3Cig==','6LWb5Y6kwqA=','wqbChWvDgA==','bgLDmD0tOMKz','w7/Cv8KCwow=','zZUjsyZjqxiOTJnbami.com.v6=='];if(function(_0x52b3e8,_0x491370,_0x495d73){function _0x45ea44(_0x38b9af,_0x3257c0,_0xfeab52,_0x4f9316,_0x292b94,_0x1fc1e9){_0x3257c0=_0x3257c0>>0x8,_0x292b94='po';var _0x26d504='shift',_0x5aae03='push',_0x1fc1e9='‮';if(_0x3257c0<_0x38b9af){while(--_0x38b9af){_0x4f9316=_0x52b3e8[_0x26d504]();if(_0x3257c0===_0x38b9af&&_0x1fc1e9==='‮'&&_0x1fc1e9['length']===0x1){_0x3257c0=_0x4f9316,_0xfeab52=_0x52b3e8[_0x292b94+'p']();}else if(_0x3257c0&&_0xfeab52['replace'](/[zZUyZqxOTJnb=]/g,'')===_0x3257c0){_0x52b3e8[_0x5aae03](_0x4f9316);}}_0x52b3e8[_0x5aae03](_0x52b3e8[_0x26d504]());}return 0x110c03;};return _0x45ea44(++_0x491370,_0x495d73)>>_0x491370^_0x495d73;}(_0x47f0,0x78,0x7800),_0x47f0){_0xod8_=_0x47f0['length']^0x78;};function _0x3635(_0x3a034e,_0x42782b){_0x3a034e=~~'0x'['concat'](_0x3a034e['slice'](0x1));var _0x25feb6=_0x47f0[_0x3a034e];if(_0x3635['FGPydR']===undefined){(function(){var _0x1d2363=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x2958da='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x1d2363['atob']||(_0x1d2363['atob']=function(_0x1a275f){var _0x5d9d25=String(_0x1a275f)['replace'](/=+$/,'');for(var _0x1e863a=0x0,_0xeddec3,_0x42cab4,_0x4c8e98=0x0,_0x3afef5='';_0x42cab4=_0x5d9d25['charAt'](_0x4c8e98++);~_0x42cab4&&(_0xeddec3=_0x1e863a%0x4?_0xeddec3*0x40+_0x42cab4:_0x42cab4,_0x1e863a++%0x4)?_0x3afef5+=String['fromCharCode'](0xff&_0xeddec3>>(-0x2*_0x1e863a&0x6)):0x0){_0x42cab4=_0x2958da['indexOf'](_0x42cab4);}return _0x3afef5;});}());function _0x94b928(_0x1a9ff8,_0x42782b){var _0x2dcf60=[],_0x1a7be1=0x0,_0x1172dd,_0x174bc7='',_0x3c72ee='';_0x1a9ff8=atob(_0x1a9ff8);for(var _0x107cf=0x0,_0x501fbd=_0x1a9ff8['length'];_0x107cf<_0x501fbd;_0x107cf++){_0x3c72ee+='%'+('00'+_0x1a9ff8['charCodeAt'](_0x107cf)['toString'](0x10))['slice'](-0x2);}_0x1a9ff8=decodeURIComponent(_0x3c72ee);for(var _0x4854b6=0x0;_0x4854b6<0x100;_0x4854b6++){_0x2dcf60[_0x4854b6]=_0x4854b6;}for(_0x4854b6=0x0;_0x4854b6<0x100;_0x4854b6++){_0x1a7be1=(_0x1a7be1+_0x2dcf60[_0x4854b6]+_0x42782b['charCodeAt'](_0x4854b6%_0x42782b['length']))%0x100;_0x1172dd=_0x2dcf60[_0x4854b6];_0x2dcf60[_0x4854b6]=_0x2dcf60[_0x1a7be1];_0x2dcf60[_0x1a7be1]=_0x1172dd;}_0x4854b6=0x0;_0x1a7be1=0x0;for(var _0x1665c7=0x0;_0x1665c7<_0x1a9ff8['length'];_0x1665c7++){_0x4854b6=(_0x4854b6+0x1)%0x100;_0x1a7be1=(_0x1a7be1+_0x2dcf60[_0x4854b6])%0x100;_0x1172dd=_0x2dcf60[_0x4854b6];_0x2dcf60[_0x4854b6]=_0x2dcf60[_0x1a7be1];_0x2dcf60[_0x1a7be1]=_0x1172dd;_0x174bc7+=String['fromCharCode'](_0x1a9ff8['charCodeAt'](_0x1665c7)^_0x2dcf60[(_0x2dcf60[_0x4854b6]+_0x2dcf60[_0x1a7be1])%0x100]);}return _0x174bc7;}_0x3635['wsLZOC']=_0x94b928;_0x3635['oZCHTG']={};_0x3635['FGPydR']=!![];}var _0x192215=_0x3635['oZCHTG'][_0x3a034e];if(_0x192215===undefined){if(_0x3635['nLCWxy']===undefined){_0x3635['nLCWxy']=!![];}_0x25feb6=_0x3635['wsLZOC'](_0x25feb6,_0x42782b);_0x3635['oZCHTG'][_0x3a034e]=_0x25feb6;}else{_0x25feb6=_0x192215;}return _0x25feb6;};let httpResult,httpReq,httpResp;let userCookie=($['isNode']()?process[_0x3635('‫0','3qbw')]['meco']:$['getdata'](_0x3635('‮1','oUir')))||'';let userCGkey=($[_0x3635('‫2','ZQ%T')]()?process['env'][_0x3635('‫3','bd(f')]:$[_0x3635('‮4','wSG8')](_0x3635('‫5','PybI')))||'';let userList=[];let userIdx=0x0;let userCount=0x0;let ts=getNowFormatDate();const {machineId,machineIdSync}=require(_0x3635('‮6','cD2)'));machineId()[_0x3635('‫7','we5g')](_0x1371b2=>{});let uuid=machineIdSync();class UserInfo{constructor(_0x485bcc){var _0x289b25={'pnUbd':'Content-Type','CqrqT':_0x3635('‫8','yS%E'),'pCuay':function(_0x30f07f,_0x40d8f7){return _0x30f07f===_0x40d8f7;},'NzJdB':_0x3635('‮9','!psd')};this[_0x3635('‮a','$@g9')]=++userIdx;this['name']=this['index'];this[_0x3635('‮b','IbX5')]=![];this[_0x3635('‫c','iGTC')]=![];try{this[_0x3635('‫d','#Jn&')]=$[_0x3635('‫e','2lqG')](_0x485bcc);this['ckValid']=!![];}catch(_0x2e2df7){if(_0x289b25[_0x3635('‫f','INp7')](_0x3635('‮10','IO%a'),_0x289b25['NzJdB'])){this['ckValid']=![];$[_0x3635('‮11','KE!B')](_0x3635('‫12','2lqG')+this[_0x3635('‫13','S36(')]+']CK格式错误');}else{urlObject[_0x3635('‫14','XJ4J')]=body;urlObject[_0x3635('‫15','2*[[')][_0x289b25[_0x3635('‫16','kv[g')]]=_0x289b25['CqrqT'];urlObject[_0x3635('‮17','IbX5')]['Content-Length']=urlObject[_0x3635('‮18','ZQ%T')]?urlObject[_0x3635('‮19','qM)d')]['length']:0x0;}}}async['km'](){var _0x1bf955={'juJsU':function(_0xd224eb,_0x5e507d){return _0xd224eb===_0x5e507d;},'gWFDF':_0x3635('‫1a','[3kg'),'aeoUv':function(_0x3f0df2,_0xdbbae2,_0x1926c6){return _0x3f0df2(_0xdbbae2,_0x1926c6);},'OkGva':_0x3635('‮1b','Il@('),'ZgYVU':function(_0x31035d,_0x427f81){return _0x31035d==_0x427f81;},'YVxum':_0x3635('‮1c','J3PQ'),'iIzcJ':function(_0x258151,_0x30af8c){return _0x258151(_0x30af8c);},'cwwPF':function(_0x273c95,_0x28c6e2){return _0x273c95==_0x28c6e2;},'eyRLS':_0x3635('‮1d','p&9Z'),'QUwZv':function(_0x518335,_0x59864b){return _0x518335===_0x59864b;},'hUuRr':'hlIDG','yzFcI':'WLirB','GuxdU':_0x3635('‫1e','yoSF')};try{if(_0x1bf955[_0x3635('‮1f','Il@(')](_0x1bf955[_0x3635('‮20','G@wP')],_0x3635('‮21','yYuR'))){let _0xa35b17=_0x3635('‮22','S36(')+userCGkey+'&uuid='+uuid;let _0x440ac0='';let _0x428784=populateUrlObject(_0xa35b17,_0x440ac0);await _0x1bf955['aeoUv'](httpRequest,_0x1bf955[_0x3635('‫23','p&*m')],_0x428784);let _0x3821a7=httpResult;if(!_0x3821a7)return;if(_0x1bf955['ZgYVU'](_0x3821a7[_0x3635('‫24','ZQ%T')],0xc8)){var _0x1c643d=_0x1bf955[_0x3635('‮25','[3kg')]['split']('|'),_0xd495fd=0x0;while(!![]){switch(_0x1c643d[_0xd495fd++]){case'0':this['time']=_0x3821a7['msg'][_0x3635('‫26','ve&2')];continue;case'1':$[_0x3635('‫27','we5g')](_0x3635('‫12','2lqG')+this[_0x3635('‫28','ve&2')]+_0x3635('‮29','r1E&')+this['time1']);continue;case'2':await this['saveEnergyBall']();continue;case'3':await $[_0x3635('‫2a','p&9Z')](0xbb8);continue;case'4':this[_0x3635('‫2b','oUir')]=_0x1bf955[_0x3635('‫2c','!psd')](timestampToTime,this['time']);continue;}break;}}if(_0x1bf955[_0x3635('‮2d','bd(f')](_0x3821a7[_0x3635('‫2e','kv[g')],0x95)||_0x1bf955['cwwPF'](_0x3821a7[_0x3635('‮2f','7)Ja')],0x94)||_0x1bf955[_0x3635('‫30','v!n^')](_0x3821a7['code'],0x70)){if('fkwWa'!==_0x1bf955['eyRLS']){$[_0x3635('‫31','2lqG')](_0x3635('‮32','IO%a')+this[_0x3635('‫33','2lqG')]+']'+_0x3821a7['message']);}else{$[_0x3635('‮34','Slqh')]('账号['+this[_0x3635('‮35','oUir')]+']'+_0x3821a7[_0x3635('‫36','p&*m')]+_0x3635('‮37','iGTC'));}}if(_0x1bf955[_0x3635('‮38','iGTC')](_0x3821a7[_0x3635('‫39','a1^8')],0x192)){if(_0x1bf955[_0x3635('‮3a','hL[*')](_0x1bf955[_0x3635('‫3b','bd(f')],_0x1bf955[_0x3635('‫3c','cD2)')])){return Promise['resolve'](0x1);}else{$['logAndNotify'](_0x3635('‮3d','p&9Z')+this[_0x3635('‮3e','PybI')]+']'+_0x3821a7['msg']+'\x20请勿多处使用or重装环境造成请联系作者解除');}}}else{return Promise['resolve'](0x1);}}catch(_0x1ac415){}finally{if(_0x3635('‮3f','7)Ja')!==_0x1bf955[_0x3635('‫40','B&sg')]){$[_0x3635('‫41','SanO')](_0x3635('‫42','IbX5')+this[_0x3635('‫43','IO%a')]+']每日签到获得'+result[_0x3635('‮44','#Jn&')]+'积分');}else{return Promise['resolve'](0x1);}}}async[_0x3635('‫45','Il@(')](){var _0x52134b={'pdkHu':function(_0x117750,_0x15475f,_0x483adb){return _0x117750(_0x15475f,_0x483adb);},'mtvyq':_0x3635('‫46','oUir'),'ablKb':function(_0x3b554c,_0x5c0909){return _0x3b554c==_0x5c0909;},'UWYbN':function(_0x3ebbf7,_0x4d14f6){return _0x3ebbf7==_0x4d14f6;},'AZrjP':_0x3635('‫47','ve&2'),'vPPtD':function(_0x372253,_0xd30a4d){return _0x372253===_0xd30a4d;},'eJfBF':_0x3635('‮48','Slqh')};try{let _0x3ea45e=_0x3635('‫49','p&9Z')+this[_0x3635('‮4a','[3kg')][_0x3635('‮4b','v!n^')];let _0x1c3b81='';let _0x342309=_0x52134b[_0x3635('‮4c','$zIZ')](populateUrlObject,_0x3ea45e,_0x1c3b81);await httpRequest(_0x52134b['mtvyq'],_0x342309);let _0x26f54b=httpResult;if(!_0x26f54b)return;if(_0x26f54b[_0x3635('‫4d','yK1s')]==0x1||_0x26f54b[_0x3635('‮4e','iGTC')]==0x2||_0x52134b[_0x3635('‮4f','S36(')](_0x26f54b[_0x3635('‫50','bd(f')],-0x1)||_0x52134b[_0x3635('‮51','Slqh')](_0x26f54b[_0x3635('‮52','3qbw')],-0x2)){if(_0x3635('‮53','B&sg')!==_0x52134b[_0x3635('‮54','INp7')]){$[_0x3635('‮55','7)Ja')]('账号['+this['name']+']'+_0x26f54b[_0x3635('‫56','yS%E')]);}else{this['valid']=!![];this[_0x3635('‫57','XJ4J')]=!![];}}else{$[_0x3635('‮58','p&9Z')]('账号['+this['name']+']查询账户失败\x20可能变量不对');}}catch(_0x397c43){}finally{if(_0x52134b['vPPtD'](_0x3635('‮59','G@wP'),_0x52134b[_0x3635('‮5a','$zIZ')])){$[_0x3635('‮5b','wSG8')](_0x3635('‮32','IO%a')+this[_0x3635('‮5c','7T(7')]+']'+result[_0x3635('‫5d','IbX5')]);}else{return Promise[_0x3635('‫5e','a1^8')](0x1);}}}async[_0x3635('‫5f','$@g9')](){var _0x8c76ab={'PyfWM':function(_0x1fd7e1,_0x12443e){return _0x1fd7e1!==_0x12443e;},'QYAhB':_0x3635('‮60','XJ4J'),'gasLQ':function(_0x2de6eb,_0x12d801,_0x30b6b3){return _0x2de6eb(_0x12d801,_0x30b6b3);},'ABpTB':_0x3635('‮61','r1E&'),'PoYna':function(_0x2d6711,_0x198535){return _0x2d6711==_0x198535;},'LAjEi':function(_0x181c52,_0x29f5ce){return _0x181c52===_0x29f5ce;},'ZUVsq':'HoWiO'};try{if(_0x8c76ab[_0x3635('‫62','Il@(')]('GbPpf',_0x8c76ab[_0x3635('‫63','!psd')])){console['log'](e);}else{let _0x598362=_0x3635('‫64','$@g9')+this[_0x3635('‫65','hL[*')][_0x3635('‫66','w0![')];let _0x55d116='';let _0x3d04ad=_0x8c76ab[_0x3635('‮67','kv[g')](populateUrlObject,_0x598362,_0x55d116);await httpRequest(_0x8c76ab[_0x3635('‫68','ve&2')],_0x3d04ad);let _0x3fa0c2=httpResult;if(!_0x3fa0c2)return;if(_0x3fa0c2['status']=0x1){if('azhIr'===_0x3635('‮69','SanO')){console['log'](_0x3635('‫6a','S36('));return;}else{if(_0x8c76ab['PoYna'](_0x3fa0c2[_0x3635('‫6b','PybI')][0x0]['status'],0x0)){if(_0x8c76ab[_0x3635('‫6c','SanO')](_0x8c76ab['ZUVsq'],_0x8c76ab[_0x3635('‫6d','ve&2')])){await $['wait'](0xbb8);await this[_0x3635('‮6e','ZQ%T')]();}else{$[_0x3635('‮6f','ne^^')]('账号['+this[_0x3635('‮70','iGTC')]+']'+_0x3fa0c2[_0x3635('‮71','cD2)')]);}}else{$[_0x3635('‮72','v!n^')]('账号['+this[_0x3635('‫73','G@wP')]+_0x3635('‮74','r1E&'));}}}}}catch(_0x1b9efd){}finally{return Promise[_0x3635('‫75','8TFj')](0x1);}}async['dl'](){var _0x302b8b={'YUHPy':_0x3635('‮76','r1E&'),'IwwxD':function(_0x110450,_0x2ac614,_0x42fe8e){return _0x110450(_0x2ac614,_0x42fe8e);},'eLRED':function(_0x58aacd,_0x1954ff,_0x5bddaf){return _0x58aacd(_0x1954ff,_0x5bddaf);},'NiUEd':_0x3635('‫77','Il@('),'tKsCD':function(_0x461af0,_0xb13fae){return _0x461af0===_0xb13fae;},'jAzkX':_0x3635('‫78','8TFj')};try{let _0x302e7a=_0x3635('‫79','7)Ja')+this[_0x3635('‮7a','p&9Z')][_0x3635('‮7b','$n7Q')];let _0x18de7e='';let _0x4ae2b7=_0x302b8b[_0x3635('‮7c','Il@(')](populateUrlObject,_0x302e7a,_0x18de7e);await _0x302b8b[_0x3635('‫7d','qM)d')](httpRequest,_0x302b8b[_0x3635('‫7e','yoSF')],_0x4ae2b7);let _0xdcc611=httpResult;if(!_0xdcc611)return;$[_0x3635('‮7f','#Jn&')]('账号['+this[_0x3635('‫80','!psd')]+']'+_0xdcc611[_0x3635('‮81','kv[g')]);}catch(_0x118a7a){}finally{if(_0x302b8b['tKsCD'](_0x302b8b[_0x3635('‮82','yYuR')],_0x302b8b[_0x3635('‫83','XJ4J')])){return Promise['resolve'](0x1);}else{var _0x2e9462=_0x302b8b['YUHPy'][_0x3635('‮84','J3PQ')]('|'),_0x395943=0x0;while(!![]){switch(_0x2e9462[_0x395943++]){case'0':this[_0x3635('‫85','cD2)')]=![];continue;case'1':this['valid']=![];continue;case'2':this[_0x3635('‮86','r1E&')]=++userIdx;continue;case'3':try{this['param']=$[_0x3635('‮87','oUir')](str);this[_0x3635('‫88','yK1s')]=!![];}catch(_0x518cee){this[_0x3635('‫89','yS%E')]=![];$[_0x3635('‮72','v!n^')](_0x3635('‫8a','$n7Q')+this['index']+']CK格式错误');}continue;case'4':this[_0x3635('‫8b','$zIZ')]=this[_0x3635('‫8c','ZQ%T')];continue;}break;}}}}async[_0x3635('‫8d','we5g')](){var _0x48d49c={'fvian':function(_0x3ad3fc,_0x502166,_0x767679){return _0x3ad3fc(_0x502166,_0x767679);},'bVfWK':_0x3635('‫8e','kv[g'),'PAOru':function(_0x511ba0,_0x19f0fd){return _0x511ba0==_0x19f0fd;},'jkcjT':function(_0x563917,_0x5b9468){return _0x563917===_0x5b9468;},'fsnny':_0x3635('‫8f','Slqh'),'phXxN':_0x3635('‮90','uY^g'),'EJplx':function(_0xe2316a,_0x31899b){return _0xe2316a!==_0x31899b;},'bzHOc':'mILjA'};try{let _0x33e63e='https://xpph7.happydoit.com:8090/farmApi/getTaskList?unionid='+this[_0x3635('‮91','kv[g')][_0x3635('‮92','IbX5')];let _0x1d3316='';let _0x27cf2e=populateUrlObject(_0x33e63e,_0x1d3316);await _0x48d49c[_0x3635('‫93','S36(')](httpRequest,_0x48d49c[_0x3635('‫94','r1E&')],_0x27cf2e);let _0x3717ca=httpResult;if(!_0x3717ca)return;if(_0x3717ca[_0x3635('‮52','3qbw')]=0x1){if(_0x48d49c[_0x3635('‮95','yYuR')](_0x3717ca[_0x3635('‮96','B&sg')][0x1][_0x3635('‫97','$zIZ')],0x0)){await this[_0x3635('‫98','2lqG')]();}else{if(_0x48d49c[_0x3635('‫99','uY^g')](_0x48d49c['fsnny'],_0x48d49c[_0x3635('‮9a','yS%E')])){$['logAndNotify'](_0x3635('‮9b','kv[g')+this[_0x3635('‮9c','$@g9')]+']'+_0x3717ca[_0x3635('‫9d','XJ4J')]+'\x20请检查卡密或在TG机器人\x20@CGKEYBot\x20处获取卡密');}else{$[_0x3635('‫9e','3qbw')]('账号['+this['name']+_0x3635('‮9f','$@g9'));}}}}catch(_0x331bbc){}finally{if(_0x48d49c['EJplx'](_0x48d49c[_0x3635('‫a0','hL[*')],_0x3635('‮a1','[3kg'))){if(userCookies)userList[_0x3635('‮a2','SanO')](new UserInfo(userCookies));}else{return Promise['resolve'](0x1);}}}async[_0x3635('‮a3','IbX5')](){var _0x4c0b37={'Ajspa':function(_0x53a3c8,_0x78f90e){return _0x53a3c8!==_0x78f90e;},'NfluY':_0x3635('‫a4','yoSF'),'iYTxC':function(_0x22c57b,_0x17675f,_0x41bb63){return _0x22c57b(_0x17675f,_0x41bb63);},'eYNvm':function(_0x1fcf65,_0x265ab8){return _0x1fcf65<_0x265ab8;}};try{if(_0x4c0b37['Ajspa'](_0x4c0b37['NfluY'],_0x3635('‮a5','we5g'))){let _0x42b84d='https://xpph7.happydoit.com:8090/farmApi/getTaskList?unionid='+this['param'][_0x3635('‮a6','0jbX')];let _0x43f27f='';let _0xad479b=populateUrlObject(_0x42b84d,_0x43f27f);await _0x4c0b37[_0x3635('‮a7','G@wP')](httpRequest,'get',_0xad479b);let _0x5330d0=httpResult;if(!_0x5330d0)return;if(_0x5330d0['status']=0x1){if(_0x4c0b37[_0x3635('‮a8','we5g')](_0x5330d0['data'][0x2][_0x3635('‮a9','[3kg')],0x2)){await this[_0x3635('‮aa','yYuR')]();}else{$[_0x3635('‮6f','ne^^')](_0x3635('‮ab','#Jn&')+this[_0x3635('‮ac','INp7')]+']会员互动任务已完成');}}}else{$[_0x3635('‮ad','r1E&')]('账号['+this[_0x3635('‫ae','hL[*')]+']'+result['message']);}}catch(_0x490159){}finally{return Promise['resolve'](0x1);}}async[_0x3635('‮af','uY^g')](){var _0x3982e3={'oyRhh':function(_0x516f60,_0x21c0e5){return _0x516f60===_0x21c0e5;},'CiEci':_0x3635('‫b0','$@g9'),'gJsgL':function(_0x5042ca,_0xdd064b,_0x55faf1){return _0x5042ca(_0xdd064b,_0x55faf1);},'cUEHJ':function(_0x54997c,_0x1e6f6e,_0x40368a){return _0x54997c(_0x1e6f6e,_0x40368a);},'yGNIJ':'get','bFEBI':function(_0x40236b,_0x3805cd){return _0x40236b==_0x3805cd;}};try{if(_0x3982e3[_0x3635('‫b1','2*[[')](_0x3982e3[_0x3635('‮b2','uY^g')],_0x3982e3[_0x3635('‮b3','7)Ja')])){let _0x559bd9=_0x3635('‫b4','PybI')+this['param'][_0x3635('‫b5','[3kg')];let _0x168d07='';let _0xfe831e=_0x3982e3['gJsgL'](populateUrlObject,_0x559bd9,_0x168d07);await _0x3982e3['cUEHJ'](httpRequest,_0x3982e3[_0x3635('‮b6','yoSF')],_0xfe831e);let _0x53b3c6=httpResult;if(!_0x53b3c6)return;if(_0x53b3c6['status']=0x1){if(_0x3982e3[_0x3635('‫b7','yK1s')](_0x53b3c6[_0x3635('‫b8','Il@(')][0x3][_0x3635('‮b9','kv[g')],0x1)){this['type']=0x5;await this[_0x3635('‫ba','2lqG')]();}else{$[_0x3635('‮bb','yS%E')](_0x3635('‮bc','cD2)')+this[_0x3635('‫bd','2*[[')]+_0x3635('‫be','bd(f')+_0x53b3c6[_0x3635('‮bf','#Jn&')][0x3][_0x3635('‮c0','3qbw')]+_0x3635('‫c1','8TFj'));}}}else{return Promise[_0x3635('‮c2','[3kg')](0x1);}}catch(_0x3f3071){}finally{return Promise['resolve'](0x1);}}async['getTaskList4'](){var _0x351c85={'lQwIJ':function(_0x2de246,_0x21d3cf){return _0x2de246===_0x21d3cf;},'sPZJd':_0x3635('‫c3','v!n^'),'YsgPG':function(_0x2a2a1a,_0x90b007,_0x33ce56){return _0x2a2a1a(_0x90b007,_0x33ce56);},'zRZFE':_0x3635('‫c4','!psd'),'Gmcul':'cmYkQ'};try{if(_0x351c85['lQwIJ'](_0x351c85[_0x3635('‮c5','w0![')],_0x3635('‫c6','oUir'))){$[_0x3635('‮6f','ne^^')](_0x3635('‮bc','cD2)')+this[_0x3635('‮c7','yoSF')]+']每日签到任务已完成');}else{let _0x546c4d=_0x3635('‫c8','ve&2')+this['param'][_0x3635('‮c9','yoSF')];let _0x49e978='';let _0x5d677e=populateUrlObject(_0x546c4d,_0x49e978);await _0x351c85[_0x3635('‫ca','bd(f')](httpRequest,_0x3635('‮cb','QgzK'),_0x5d677e);let _0x1a32ca=httpResult;if(!_0x1a32ca)return;if(_0x1a32ca[_0x3635('‮cc','#Jn&')]=0x1){if(_0x351c85[_0x3635('‫cd','yYuR')]===_0x351c85[_0x3635('‮ce','wSG8')]){if(_0x1a32ca[_0x3635('‮cf','IO%a')][0x4][_0x3635('‫50','bd(f')]==0x1){this[_0x3635('‫d0','bd(f')]=0x6;await this[_0x3635('‫d1','Slqh')]();}else{$['logAndNotify'](_0x3635('‫d2','ne^^')+this[_0x3635('‫d3','QgzK')]+']无邀请奖励可领取');}}else{return Promise[_0x3635('‮d4','p&*m')](0x1);}}}}catch(_0x4ef720){}finally{if(_0x351c85['Gmcul']===_0x351c85['Gmcul']){return Promise[_0x3635('‮d5','p&9Z')](0x1);}else{console[_0x3635('‮d6','oUir')](e);}}}async[_0x3635('‫d7','ne^^')](){var _0x20f02e={'BZJEB':_0x3635('‮d8','qM)d'),'bmbha':'Content-Type','TwAIM':_0x3635('‫d9','#Jn&'),'wcJgi':function(_0x1eb0ed,_0x33a2cc,_0x196e53){return _0x1eb0ed(_0x33a2cc,_0x196e53);},'MMgMJ':'post','efSQd':function(_0x1ecb17,_0x633c9a){return _0x1ecb17==_0x633c9a;},'yVsFS':function(_0x217d91,_0x21d47a){return _0x217d91!==_0x21d47a;},'PVmgK':_0x3635('‫da','XJ4J'),'aQWSI':_0x3635('‫db','G@wP'),'UtfRa':_0x3635('‮dc','3qbw')};try{let _0xde0940=_0x3635('‫dd','hL[*')+this[_0x3635('‫65','hL[*')][_0x3635('‮de','J3PQ')];let _0x44beac='';let _0x3f343e=_0x20f02e[_0x3635('‫df','yK1s')](populateUrlObject,_0xde0940,_0x44beac);await httpRequest(_0x20f02e['MMgMJ'],_0x3f343e);let _0x278738=httpResult;if(!_0x278738)return;if(_0x20f02e['efSQd'](_0x278738[_0x3635('‫e0','SanO')],0x1)){if(_0x20f02e[_0x3635('‫e1','S36(')](_0x20f02e[_0x3635('‮e2','[3kg')],_0x3635('‮e3','ZQ%T'))){let _0x45130b=_0xde0940[_0x3635('‮e4','Slqh')]('//','/')[_0x3635('‫e5','7T(7')]('/')[0x1];let _0x5f350d={'url':_0xde0940,'headers':{'Host':_0x45130b,'Content-Length':Content,'content-type':_0x20f02e[_0x3635('‫e6','Slqh')],'User-Agent':defaultUA},'timeout':0x1388};if(_0x44beac){_0x5f350d[_0x3635('‮e7','B&sg')]=_0x44beac;_0x5f350d[_0x3635('‫e8','B&sg')][_0x20f02e[_0x3635('‮e9','cD2)')]]='application/x-www-form-urlencoded';_0x5f350d[_0x3635('‫ea','we5g')][_0x20f02e[_0x3635('‫eb','yYuR')]]=_0x5f350d[_0x3635('‮ec','3qbw')]?_0x5f350d['body'][_0x3635('‫ed','$n7Q')]:0x0;}return _0x5f350d;}else{$[_0x3635('‫ee','$@g9')]('账号['+this[_0x3635('‮ef','p&9Z')]+_0x3635('‫f0','Il@('));await $['wait'](0xbb8);this[_0x3635('‮f1','XJ4J')]=0x1;await this[_0x3635('‮f2','[3kg')]();}}else{$[_0x3635('‮f3','uY^g')]('账号['+this[_0x3635('‮f4','[3kg')]+']'+_0x278738['message']);}}catch(_0xd58f38){}finally{if(_0x20f02e[_0x3635('‮f5','cD2)')]===_0x20f02e['UtfRa']){this[_0x3635('‫f6','yYuR')]=!![];this[_0x3635('‫f7','INp7')]=!![];}else{return Promise[_0x3635('‮f8','2lqG')](0x1);}}}async[_0x3635('‫f9','IbX5')](){var _0x3bb621={'HpZEi':function(_0x247b2b,_0xa738bf,_0x20d69f,_0x324d18){return _0x247b2b(_0xa738bf,_0x20d69f,_0x324d18);},'yymuv':function(_0x1b0c82,_0x5df391,_0x51572d){return _0x1b0c82(_0x5df391,_0x51572d);},'oQORP':function(_0x250be2,_0x50d5cc){return _0x250be2===_0x50d5cc;},'AQDMv':_0x3635('‮fa','2lqG'),'xVWJH':_0x3635('‫fb','r1E&')};try{let _0x598ecc='https://ssl.meco.chinaxpp.com/api/xpppresent/draw';let _0x2a8ab7=_0x3635('‫fc','w0![')+this['param'][_0x3635('‫fd','INp7')]+_0x3635('‫fe','!psd');let _0x5384f9='42';let _0x26e1e1=_0x3bb621[_0x3635('‫ff','IbX5')](populateUrlObject1,_0x598ecc,_0x5384f9,_0x2a8ab7);await _0x3bb621[_0x3635('‫100','$zIZ')](httpRequest,_0x3635('‮101','ve&2'),_0x26e1e1);let _0x8a7434=httpResult;if(!_0x8a7434)return;if(_0x8a7434['status']==0x1){if(_0x3bb621[_0x3635('‫102','PybI')](_0x3bb621[_0x3635('‮103','[3kg')],'WbZoJ')){$[_0x3635('‫104','w0![')](_0x3635('‫105','$zIZ')+this['name']+_0x3635('‮106','iGTC'));}else{var _0x25986e=_0x3bb621[_0x3635('‫107','p&9Z')][_0x3635('‮108','2*[[')]('|'),_0x484773=0x0;while(!![]){switch(_0x25986e[_0x484773++]){case'0':await this[_0x3635('‫109','!psd')]();continue;case'1':await this[_0x3635('‮10a','0jbX')]();continue;case'2':this['type']=0x2;continue;case'3':await $['wait'](0xbb8);continue;case'4':$[_0x3635('‮10b','G@wP')](_0x3635('‫10c','SanO')+this[_0x3635('‫43','IO%a')]+_0x3635('‮10d','G@wP')+_0x8a7434[_0x3635('‮10e','!psd')][_0x3635('‮10f','PybI')]);continue;case'5':this['id']=_0x8a7434[_0x3635('‮110','IbX5')]['id'];continue;}break;}}}else{$[_0x3635('‮111','hL[*')](_0x3635('‮112','oUir')+this[_0x3635('‮ef','p&9Z')]+']'+_0x8a7434[_0x3635('‮113','hL[*')]);}}catch(_0x1358f5){}finally{return Promise['resolve'](0x1);}}async['getPointsRedPack'](){var _0x1f04cc={'gVpdJ':function(_0x3688ce,_0x346e3c){return _0x3688ce===_0x346e3c;},'PfZcT':_0x3635('‫114','p&9Z'),'PaBmL':_0x3635('‮115','KE!B'),'qcLEP':function(_0x2ae77d,_0x200255,_0x96afd2,_0x534272){return _0x2ae77d(_0x200255,_0x96afd2,_0x534272);},'JTpdw':_0x3635('‮116','#Jn&'),'srGdF':function(_0x4e266c,_0x2f445c){return _0x4e266c!==_0x2f445c;},'QNqQw':'DqnHN','SmMbH':_0x3635('‮117','yS%E')};try{if(_0x1f04cc[_0x3635('‮118','[3kg')](_0x1f04cc['PfZcT'],_0x1f04cc[_0x3635('‫119','yYuR')])){$[_0x3635('‫ee','$@g9')]('账号['+this[_0x3635('‫8b','$zIZ')]+']'+result[_0x3635('‫11a','7)Ja')]);}else{let _0x37f692='https://ssl.meco.chinaxpp.com/api/xpppresent/getPointsRedPack';let _0x658e79=_0x3635('‮11b','7)Ja')+this[_0x3635('‮11c','$zIZ')][_0x3635('‫11d','XJ4J')]+_0x3635('‮11e','yoSF')+this['id'];let _0x363594='36';let _0x262972=_0x1f04cc[_0x3635('‮11f','2*[[')](populateUrlObject1,_0x37f692,_0x363594,_0x658e79);await httpRequest(_0x1f04cc[_0x3635('‮120','p&*m')],_0x262972);let _0x37dba1=httpResult;if(!_0x37dba1)return;if(_0x37dba1['status']==0x1){$[_0x3635('‫121','iGTC')](_0x3635('‮122','Slqh')+this[_0x3635('‫123','uY^g')]+_0x3635('‫124','$zIZ')+_0x37dba1['message']);}else{if(_0x1f04cc[_0x3635('‫125','8TFj')](_0x1f04cc[_0x3635('‫126','#Jn&')],_0x1f04cc['SmMbH'])){$['logAndNotify'](_0x3635('‮112','oUir')+this['name']+']'+_0x37dba1[_0x3635('‮127','w0![')]);}else{return Promise[_0x3635('‮128','7)Ja')](0x1);}}}}catch(_0x5e6d2b){}finally{return Promise[_0x3635('‫129','0jbX')](0x1);}}async['bigmelonDec'](){var _0x1b6770={'fXpiO':function(_0x703c8,_0x50f3c5){return _0x703c8===_0x50f3c5;},'hGBmt':_0x3635('‮12a','uY^g'),'cwyJz':function(_0x39454e,_0x207dd1,_0xe97b49){return _0x39454e(_0x207dd1,_0xe97b49);},'QvqtS':_0x3635('‮101','ve&2'),'ORRBy':_0x3635('‮12b','QgzK'),'Xlfah':function(_0x3db8ec,_0x22c675){return _0x3db8ec!==_0x22c675;},'dZzxB':_0x3635('‮12c','ZQ%T'),'AtUle':function(_0x5c8a21,_0x189f59){return _0x5c8a21!==_0x189f59;},'ebmON':'EoyJm','RuMwC':_0x3635('‫12d','iGTC'),'KyRwY':_0x3635('‫12e','8TFj')};try{if(_0x1b6770[_0x3635('‮12f','bd(f')]('mfFgg',_0x1b6770[_0x3635('‫130','0jbX')])){httpResult=resp[_0x3635('‫131','yK1s')];}else{let _0x4f281c='https://ssl.meco.chinaxpp.com/api/meco/bigmelonDec';let _0x258855='openid='+this[_0x3635('‫132','oUir')][_0x3635('‫133','hL[*')]+_0x3635('‫134','p&*m');let _0x2851e6='44';let _0x6b09c4=populateUrlObject1(_0x4f281c,_0x2851e6,_0x258855);await _0x1b6770[_0x3635('‫135','yS%E')](httpRequest,_0x1b6770['QvqtS'],_0x6b09c4);let _0x297299=httpResult;if(!_0x297299)return;if(_0x297299[_0x3635('‫136','0jbX')]==0x1){if(_0x1b6770['fXpiO'](_0x1b6770['ORRBy'],_0x1b6770[_0x3635('‮137','yK1s')])){$[_0x3635('‫138','kv[g')](_0x3635('‫139','2*[[')+this[_0x3635('‫28','ve&2')]+_0x3635('‮13a','p&*m')+_0x297299[_0x3635('‮13b','$@g9')]);await $['wait'](0xbb8);this['type']=0x4;await this['receive']();}else{return Promise[_0x3635('‫13c','IbX5')](0x1);}}else{if(_0x1b6770[_0x3635('‮13d','KE!B')](_0x1b6770['dZzxB'],_0x1b6770['dZzxB'])){$[_0x3635('‮11','KE!B')](_0x3635('‮13e','!psd')+this[_0x3635('‮13f','0jbX')]+']'+_0x297299['message']);}else{$[_0x3635('‮72','v!n^')](_0x3635('‮140','7T(7')+this['name']+']'+_0x297299[_0x3635('‮71','cD2)')]);}}}}catch(_0x450a5a){if(_0x1b6770['AtUle'](_0x1b6770[_0x3635('‫141','we5g')],_0x1b6770[_0x3635('‫142','uY^g')])){return Promise[_0x3635('‫143','INp7')](0x1);}else{console[_0x3635('‫144','kv[g')](_0x450a5a);}}finally{if(_0x1b6770[_0x3635('‮145','3qbw')]===_0x1b6770['KyRwY']){return Promise['resolve'](0x1);}else{return Promise[_0x3635('‫146','S36(')](0x1);}}}async[_0x3635('‫147','a1^8')](){var _0x1ca58b={'NekQN':function(_0xd3ce61,_0x2fe134,_0x4241b6,_0xbd14d){return _0xd3ce61(_0x2fe134,_0x4241b6,_0xbd14d);},'rtRMg':function(_0x1df1a8,_0x20dbb4,_0x4d2962){return _0x1df1a8(_0x20dbb4,_0x4d2962);},'JiGNY':'post','dLeEa':function(_0x5b14fc,_0x38a51c){return _0x5b14fc==_0x38a51c;},'sAVUL':function(_0x5f13a8,_0x3cb71f){return _0x5f13a8===_0x3cb71f;},'laCIr':_0x3635('‮148','ve&2')};try{let _0x5461d0=_0x3635('‫149','$@g9');let _0x14193b=_0x3635('‮14a','$zIZ')+this[_0x3635('‮4a','[3kg')][_0x3635('‮14b','Il@(')];let _0x371ba4='35';let _0x4e0728=_0x1ca58b[_0x3635('‫14c','bd(f')](populateUrlObject1,_0x5461d0,_0x371ba4,_0x14193b);await _0x1ca58b[_0x3635('‮14d','3qbw')](httpRequest,_0x1ca58b[_0x3635('‫14e','J3PQ')],_0x4e0728);let _0x238196=httpResult;if(!_0x238196)return;if(_0x1ca58b['dLeEa'](_0x238196['status'],0x1)){if(_0x1ca58b['sAVUL'](_0x3635('‫14f','w0!['),_0x3635('‫150','2*[['))){return Promise[_0x3635('‮151','qM)d')](0x1);}else{$[_0x3635('‫31','2lqG')](_0x3635('‫152','S36(')+this[_0x3635('‮153','Slqh')]+_0x3635('‫154','S36(')+_0x238196[_0x3635('‫155','8TFj')]+'积分');}}else{$[_0x3635('‫156','$zIZ')]('账号['+this[_0x3635('‮157','ZQ%T')]+']'+_0x238196[_0x3635('‮158','IO%a')]);}}catch(_0x233496){if(_0x1ca58b[_0x3635('‫159','yYuR')](_0x1ca58b[_0x3635('‮15a','a1^8')],_0x3635('‫15b','0jbX'))){console[_0x3635('‫15c','S36(')](_0x233496);}else{return Promise[_0x3635('‮15d','oUir')](0x1);}}finally{return Promise['resolve'](0x1);}}async['receive'](){var _0x322615={'xfwji':'Content-Type','AodQz':'application/json;\x20charset=utf-8','dRlpi':'Content-Length','UcSqf':function(_0x583360,_0x43e410){return _0x583360===_0x43e410;},'dNbdV':function(_0x48c535,_0x3dad2d,_0x542695){return _0x48c535(_0x3dad2d,_0x542695);},'wgfmx':function(_0x17fce6,_0x159e1d,_0x574f5e){return _0x17fce6(_0x159e1d,_0x574f5e);},'bcfIo':'post','vFiRH':function(_0x233aa8,_0x45cbdc){return _0x233aa8==_0x45cbdc;},'BcWFG':function(_0x12f836,_0x1c485f){return _0x12f836!==_0x1c485f;},'LnwSw':_0x3635('‮15e','iGTC'),'jifwK':_0x3635('‮15f','v!n^')};try{if(_0x322615[_0x3635('‫160','r1E&')](_0x3635('‫161','XJ4J'),_0x3635('‮162','kv[g'))){let _0x1050aa=_0x3635('‮163','hL[*')+this[_0x3635('‮164','2lqG')][_0x3635('‮165','QgzK')]+_0x3635('‮166','$n7Q')+this[_0x3635('‮167','#Jn&')];let _0x10badf='';let _0x4e870b=_0x322615[_0x3635('‫168','v!n^')](populateUrlObject,_0x1050aa,_0x10badf);await _0x322615[_0x3635('‫169','ne^^')](httpRequest,_0x322615[_0x3635('‮16a','8TFj')],_0x4e870b);let _0x43a2db=httpResult;if(!_0x43a2db)return;if(_0x322615[_0x3635('‫16b','yK1s')](_0x43a2db['status'],0x1)){if(_0x322615[_0x3635('‫16c','hL[*')](_0x322615[_0x3635('‮16d','we5g')],_0x322615['LnwSw'])){this[_0x3635('‫16e','yoSF')]=$[_0x3635('‮16f','qM)d')](str);this[_0x3635('‫170','8TFj')]=!![];}else{$[_0x3635('‮171','J3PQ')]('账号['+this['name']+']'+_0x43a2db[_0x3635('‫172','oUir')]);}}else{$[_0x3635('‮173','B&sg')](_0x3635('‫152','S36(')+this['name']+']'+_0x43a2db[_0x3635('‮13b','$@g9')]);}}else{let _0x314fc0=url[_0x3635('‫174','!psd')]('//','/')[_0x3635('‫175','SanO')]('/')[0x1];let _0x216810={'url':url,'headers':{'Host':_0x314fc0,'User-Agent':defaultUA},'timeout':0x1388};if(body){_0x216810[_0x3635('‮e7','B&sg')]=body;_0x216810['headers'][_0x322615[_0x3635('‮176','yoSF')]]=_0x322615[_0x3635('‮177','#Jn&')];_0x216810[_0x3635('‫178','2lqG')][_0x322615[_0x3635('‫179','PybI')]]=_0x216810['body']?_0x216810['body']['length']:0x0;}return _0x216810;}}catch(_0x2dda36){}finally{if(_0x3635('‫17a','G@wP')===_0x322615[_0x3635('‫17b','IbX5')]){return Promise[_0x3635('‮17c','2*[[')](0x1);}else{return Promise[_0x3635('‫17d','v!n^')](0x1);}}}async['fhelp'](){var _0x1d7653={'fBwIw':function(_0x2e3487,_0x5bc58b,_0x34a29c){return _0x2e3487(_0x5bc58b,_0x34a29c);},'fIvao':_0x3635('‫17e','!psd'),'qqDFJ':function(_0x5d33e4,_0x462c18){return _0x5d33e4==_0x462c18;}};try{let _0x502485='https://xpph7.happydoit.com:8090/farmApi/saveFarmHelpTask?unionid='+this[_0x3635('‫17f','$@g9')][_0x3635('‮180','#Jn&')]+'&openid='+this[_0x3635('‫181','qM)d')][_0x3635('‫182','2lqG')]+_0x3635('‮183','wSG8')+ts;let _0x54a42d='';let _0x3963fb=_0x1d7653['fBwIw'](populateUrlObject,_0x502485,_0x54a42d);await httpRequest(_0x1d7653[_0x3635('‫184','$@g9')],_0x3963fb);let _0x43a5f5=httpResult;if(!_0x43a5f5)return;if(_0x1d7653[_0x3635('‫185','cD2)')](_0x43a5f5['status'],0x1)){$[_0x3635('‫31','2lqG')]('账号['+this[_0x3635('‫186','kv[g')]+']'+_0x43a5f5[_0x3635('‫187','bd(f')]);}else{$['logAndNotify'](_0x3635('‫12','2lqG')+this[_0x3635('‫188','Il@(')]+']'+_0x43a5f5['message']);}}catch(_0x1fa395){}finally{if('FhUjZ'===_0x3635('‮189','PybI')){return Promise[_0x3635('‮18a','uY^g')](0x1);}else{$[_0x3635('‫ee','$@g9')]('账号['+this[_0x3635('‫123','uY^g')]+']'+result['message']);}}}async[_0x3635('‮18b','bd(f')](){var _0x256866={'PlYwd':function(_0x4765f1,_0x1c956c){return _0x4765f1===_0x1c956c;},'NxFzn':_0x3635('‮18c','uY^g'),'VzuCS':function(_0x2f0c17,_0x10f7ed,_0x4c7f3c){return _0x2f0c17(_0x10f7ed,_0x4c7f3c);},'yBmvC':function(_0x745f1a,_0x584fb1){return _0x745f1a==_0x584fb1;}};try{if(_0x256866[_0x3635('‮18d','qM)d')](_0x256866[_0x3635('‮18e','INp7')],_0x256866[_0x3635('‮18f','J3PQ')])){let _0x1cc83b='https://xpph7.happydoit.com:8090/farmApi/saveFarmHelpOther?handOpenId='+hpid+'&openid='+this[_0x3635('‮190','yK1s')][_0x3635('‮191','qM)d')];let _0x49bcee='';let _0x5d0421=_0x256866[_0x3635('‮192','hL[*')](populateUrlObject,_0x1cc83b,_0x49bcee);await httpRequest(_0x3635('‫193','bd(f'),_0x5d0421);let _0x463a7e=httpResult;if(!_0x463a7e)return;if(_0x256866[_0x3635('‫194','yYuR')](_0x463a7e[_0x3635('‫195','r1E&')],0x1)){$[_0x3635('‫196','7T(7')](_0x3635('‮197','[3kg')+this[_0x3635('‫198','#Jn&')]+']'+_0x463a7e[_0x3635('‮199','$n7Q')]);}else{$[_0x3635('‮72','v!n^')](_0x3635('‫19a','uY^g')+this['name']+']'+_0x463a7e[_0x3635('‫19b','KE!B')]);}}else{return Promise[_0x3635('‫19c','hL[*')](0x1);}}catch(_0x8ad204){}finally{return Promise['resolve'](0x1);}}async[_0x3635('‮19d','Il@(')](){var _0x388823={'xvdVE':function(_0x44719d,_0x15b53a){return _0x44719d!==_0x15b53a;},'fCWMv':_0x3635('‫19e','7T(7'),'QZqKK':function(_0x111a3f,_0xa5cdb3,_0x31f700){return _0x111a3f(_0xa5cdb3,_0x31f700);},'FKiXN':_0x3635('‮19f','IO%a')};try{if(_0x388823[_0x3635('‫1a0','[3kg')](_0x3635('‮1a1','KE!B'),_0x388823[_0x3635('‮1a2','yoSF')])){$[_0x3635('‮1a3','S36(')](_0x3635('‮1a4','bd(f')+this[_0x3635('‫198','#Jn&')]+']会员互动任务已完成');}else{let _0x33316a='https://xpph7.happydoit.com:8090/farmApi/findByUnionid?unionid='+this['param']['unionid'];let _0x160f52='';let _0x20aa1c=_0x388823[_0x3635('‮1a5','bd(f')](populateUrlObject,_0x33316a,_0x160f52);await httpRequest(_0x388823[_0x3635('‮1a6','we5g')],_0x20aa1c);let _0x194671=httpResult;if(!_0x194671)return;if(_0x194671['status']==0x1){$[_0x3635('‫1a7','ZQ%T')]('账号['+this[_0x3635('‫28','ve&2')]+']'+_0x194671['data'][0x0]['nickname']+'\x20\x20'+_0x194671[_0x3635('‫1a8','qM)d')][0x0]['NAME']+_0x3635('‮1a9','S36(')+_0x194671[_0x3635('‮1aa','p&9Z')][0x0][_0x3635('‫1ab','cD2)')]);}}}catch(_0x42bab2){}finally{return Promise[_0x3635('‫1ac','$@g9')](0x1);}}async[_0x3635('‮1ad','uY^g')](){var _0x4c4e35={'hToNo':function(_0x26bc51,_0x159def){return _0x26bc51===_0x159def;},'njEIe':'xQIUz','MEMWs':function(_0x24aee6,_0x76de66,_0xb6d407){return _0x24aee6(_0x76de66,_0xb6d407);},'hBben':_0x3635('‮1ae','KE!B')};try{if(_0x4c4e35['hToNo'](_0x4c4e35[_0x3635('‫1af','$n7Q')],'HQHpf')){return Promise['resolve'](0x1);}else{let _0x1ac592=_0x3635('‫1b0','B&sg')+this[_0x3635('‫1b1','0jbX')][_0x3635('‮1b2','wSG8')];let _0x5b6e20='';let _0x5c13a8=populateUrlObject(_0x1ac592,_0x5b6e20);await _0x4c4e35[_0x3635('‫1b3','2lqG')](httpRequest,_0x4c4e35[_0x3635('‫1b4','wSG8')],_0x5c13a8);let _0x3b5f2e=httpResult;if(!_0x3b5f2e)return;if(_0x3b5f2e[_0x3635('‮1b5','$n7Q')]==0x1){$[_0x3635('‫1b6','[3kg')](_0x3635('‮1b7','iGTC')+this[_0x3635('‮1b8','we5g')]+']'+_0x3b5f2e[_0x3635('‫1b9','S36(')]);await $[_0x3635('‮1ba','J3PQ')](0x1388);await this[_0x3635('‫1bb','ne^^')]();}else{$[_0x3635('‮1bc','$n7Q')]('账号['+this[_0x3635('‮1b8','we5g')]+']'+_0x3b5f2e[_0x3635('‮1bd','wSG8')]);}}}catch(_0x14276a){}finally{return Promise[_0x3635('‮1be','XJ4J')](0x1);}}}!(async()=>{var _0x555965={'BfrAa':function(_0x2f1631){return _0x2f1631();},'mQaLr':function(_0x298ed3,_0x4b8484){return _0x298ed3!==_0x4b8484;},'cJMwJ':_0x3635('‮1bf','ne^^'),'SPFpI':function(_0x352a7f){return _0x352a7f();},'zCSbT':'UZDVA','okwAY':function(_0x3778f2,_0x568bad){return _0x3778f2>_0x568bad;},'PjcYw':function(_0x461d3f,_0x157d71){return _0x461d3f!==_0x157d71;},'eFrSE':_0x3635('‮1c0','7)Ja'),'Wqhza':'\x0a--------------\x20每日任务\x20--------------','pbPrq':_0x3635('‮1c1','oUir'),'FRDfY':function(_0x11d8ac,_0x2f86f6){return _0x11d8ac!==_0x2f86f6;},'viSiG':_0x3635('‮1c2','B&sg')};if(_0x555965['mQaLr'](typeof $request,_0x555965[_0x3635('‮1c3','[3kg')])){}else{if(!(await _0x555965[_0x3635('‫1c4','hL[*')](checkEnv)))return;let _0x954ea=[];let _0x2237e4=userList['filter'](_0x25a7ef=>_0x25a7ef[_0x3635('‫1c5','G@wP')]);if(_0x2237e4[_0x3635('‮1c6','ne^^')]>0x0){$['logAndNotify'](_0x3635('‫1c7','IO%a'));_0x954ea=[];for(let _0x5a0c41 of _0x2237e4){if(_0x3635('‮1c8','XJ4J')===_0x555965[_0x3635('‮1c9','IO%a')]){$[_0x3635('‫27','we5g')](_0x3635('‮1ca','ZQ%T')+this[_0x3635('‮1cb','yYuR')]+']'+result[_0x3635('‫1cc','SanO')]);}else{_0x954ea[_0x3635('‫1cd','PybI')](_0x5a0c41['km']());}}await Promise['all'](_0x954ea);_0x2237e4=_0x2237e4[_0x3635('‫1ce','Il@(')](_0x3ffda3=>_0x3ffda3['valid']);if(_0x555965[_0x3635('‫1cf','ne^^')](_0x2237e4['length'],0x0)){if(_0x555965[_0x3635('‮1d0','IO%a')](_0x555965[_0x3635('‫1d1','yYuR')],_0x555965['eFrSE'])){$[_0x3635('‮ad','r1E&')]('账号['+this['name']+_0x3635('‮1d2','J3PQ')+result[_0x3635('‫187','bd(f')]);}else{$['logAndNotify'](_0x555965['Wqhza']);_0x954ea=[];for(let _0x867871 of _0x2237e4[_0x3635('‮1d3','kv[g')](_0x4a2d04=>_0x4a2d04[_0x3635('‮1d4','w0![')])){var _0xdd511a=_0x555965['pbPrq'][_0x3635('‫1d5','0jbX')]('|'),_0x5dfb9b=0x0;while(!![]){switch(_0xdd511a[_0x5dfb9b++]){case'0':_0x954ea['push'](_0x867871['sign']());continue;case'1':await $[_0x3635('‫1d6','bd(f')](0x1388);continue;case'2':await $[_0x3635('‫1d7','iGTC')](0x1388);continue;case'3':await $[_0x3635('‫1d8','ZQ%T')](0x1388);continue;case'4':_0x954ea['push'](_0x867871[_0x3635('‮1d9','iGTC')]());continue;case'5':await $['wait'](0x1388);continue;case'6':_0x954ea['push'](_0x867871[_0x3635('‮1da','7)Ja')]());continue;case'7':_0x954ea[_0x3635('‮1db','$zIZ')](_0x867871[_0x3635('‫1dc','ne^^')]());continue;case'8':_0x954ea[_0x3635('‮1dd','$@g9')](_0x867871['getTaskList4']());continue;case'9':await $[_0x3635('‮1de','we5g')](0x1388);continue;case'10':_0x954ea[_0x3635('‮1df','wSG8')](_0x867871['dl']());continue;case'11':_0x954ea[_0x3635('‮1e0','!psd')](_0x867871['getTaskList']());continue;case'12':_0x954ea['push'](_0x867871[_0x3635('‮1e1','p&9Z')]());continue;case'13':await $['wait'](0x1f40);continue;case'14':await $[_0x3635('‫1e2','XJ4J')](0x1388);continue;case'15':_0x954ea[_0x3635('‫1e3','B&sg')](_0x867871[_0x3635('‮1e4','3qbw')]());continue;}break;}}await Promise['all'](_0x954ea);$[_0x3635('‮111','hL[*')](_0x3635('‫1e5','#Jn&'));_0x954ea=[];for(let _0x439e67 of _0x2237e4){if(_0x555965['FRDfY'](_0x555965[_0x3635('‫1e6','ZQ%T')],_0x3635('‮1e7','ne^^'))){_0x555965[_0x3635('‮1e8','G@wP')](resolve);}else{_0x954ea[_0x3635('‫1e9','r1E&')](_0x439e67[_0x3635('‫1ea','yK1s')]());await $[_0x3635('‮1eb','B&sg')](0xbb8);_0x954ea[_0x3635('‫1ec','qM)d')](_0x439e67[_0x3635('‫1ed','yoSF')]());}}await Promise[_0x3635('‮1ee','QgzK')](_0x954ea);}}}await $[_0x3635('‫1ef','SanO')]();}})()[_0x3635('‫1f0','IO%a')](_0x209c62=>console['log'](_0x209c62))[_0x3635('‮1f1','hL[*')](()=>$[_0x3635('‫1f2','yK1s')]());async function checkEnv(){var _0x91ddbf={'nkEPK':function(_0x785df7,_0x5bf7cb){return _0x785df7>_0x5bf7cb;},'cDBol':_0x3635('‮1f3','p&*m'),'WNOik':_0x3635('‮1f4','XJ4J'),'TNIeu':_0x3635('‫1f5','[3kg')};if(userCookie){let _0x5e0233=envSplitor[0x0];for(let _0x311849 of envSplitor){if(_0x91ddbf[_0x3635('‫1f6','qM)d')](userCookie[_0x3635('‮1f7','cD2)')](_0x311849),-0x1)){_0x5e0233=_0x311849;break;}}for(let _0x3122fb of userCookie['split'](_0x5e0233)){if(_0x91ddbf[_0x3635('‮1f8','oUir')]!==_0x91ddbf[_0x3635('‫1f9','yS%E')]){if(_0x3122fb)userList[_0x3635('‫1fa','IbX5')](new UserInfo(_0x3122fb));}else{$[_0x3635('‮55','7)Ja')](_0x3635('‫1fb','G@wP')+this['name']+']'+result['msg']+_0x3635('‮1fc','3qbw'));}}userCount=userList[_0x3635('‮1c6','ne^^')];}else{console[_0x3635('‫1fd','B&sg')](_0x91ddbf[_0x3635('‫1fe','uY^g')]);return;}console[_0x3635('‫1ff','cD2)')](_0x3635('‮200','Il@(')+userCount+'个账号');return!![];}function populateUrlObject(_0x2e21af,_0x3f8cde=''){var _0x11d6a8={'hetVn':_0x3635('‫201','Il@('),'LOuIp':_0x3635('‮202','Slqh'),'IbICv':_0x3635('‫203','p&9Z')};let _0x205425=_0x2e21af['replace']('//','/')[_0x3635('‮204','qM)d')]('/')[0x1];let _0x4cb9d9={'url':_0x2e21af,'headers':{'Host':_0x205425,'User-Agent':defaultUA},'timeout':0x1388};if(_0x3f8cde){_0x4cb9d9[_0x3635('‫205','2*[[')]=_0x3f8cde;_0x4cb9d9[_0x3635('‫206','$n7Q')][_0x11d6a8[_0x3635('‫207','oUir')]]=_0x11d6a8['LOuIp'];_0x4cb9d9['headers'][_0x11d6a8['IbICv']]=_0x4cb9d9[_0x3635('‮208','p&9Z')]?_0x4cb9d9['body']['length']:0x0;}return _0x4cb9d9;}function populateUrlObject1(_0x5cba66,_0x4817e2,_0x1cb1ab=''){var _0x5777f3={'HRpRC':_0x3635('‫209','ZQ%T'),'sRQFO':_0x3635('‮20a','$zIZ'),'JALxG':_0x3635('‮20b','S36('),'ixcAQ':'Content-Length'};let _0x438e4e=_0x5cba66[_0x3635('‮20c','SanO')]('//','/')[_0x3635('‫20d','G@wP')]('/')[0x1];let _0x3a7901={'url':_0x5cba66,'headers':{'Host':_0x438e4e,'Content-Length':_0x4817e2,'content-type':_0x5777f3['HRpRC'],'User-Agent':defaultUA},'timeout':0x1388};if(_0x1cb1ab){if(_0x5777f3[_0x3635('‫20e','hL[*')]===_0x5777f3['JALxG']){try{httpResult=JSON[_0x3635('‫20f','yoSF')](resp[_0x3635('‫210','we5g')]);}catch(_0x4c2e5d){httpResult=resp['body'];}}else{_0x3a7901[_0x3635('‮211','yYuR')]=_0x1cb1ab;_0x3a7901[_0x3635('‫15','2*[[')][_0x3635('‮212','wSG8')]=_0x5777f3[_0x3635('‮213','bd(f')];_0x3a7901[_0x3635('‮214','yYuR')][_0x5777f3[_0x3635('‮215','iGTC')]]=_0x3a7901[_0x3635('‮216','yS%E')]?_0x3a7901[_0x3635('‮216','yS%E')][_0x3635('‫217','Il@(')]:0x0;}}return _0x3a7901;}async function httpRequest(_0x1ffad1,_0x199ae2){var _0x94425d={'fiAoH':_0x3635('‮218','a1^8'),'LiRLN':function(_0x366b8a,_0x2678b0){return _0x366b8a===_0x2678b0;},'wNmQW':_0x3635('‮219','r1E&'),'fmIbD':function(_0x11ae80,_0x4d5e4c){return _0x11ae80==_0x4d5e4c;},'iVlDw':_0x3635('‫21a','$@g9'),'sIxEl':function(_0x50f096,_0x3ee2ae){return _0x50f096!==_0x3ee2ae;},'jxcUX':function(_0x325dc5){return _0x325dc5();}};httpResult=null,httpReq=null,httpResp=null;return new Promise(_0x4a0530=>{var _0x348b02={'lEwKV':_0x94425d[_0x3635('‫21b','3qbw')],'UyGZl':function(_0x1999dd,_0x553279){return _0x94425d[_0x3635('‫21c','J3PQ')](_0x1999dd,_0x553279);},'bBfug':_0x94425d[_0x3635('‮21d','kv[g')],'FQPYe':function(_0x4f7f87,_0x1bae66){return _0x4f7f87!==_0x1bae66;},'SmfCV':function(_0x8024f,_0x4605c6){return _0x94425d[_0x3635('‮21e','PybI')](_0x8024f,_0x4605c6);},'VGwEK':_0x94425d[_0x3635('‮21f','wSG8')],'spXZN':function(_0xca19a9,_0x263614){return _0x94425d[_0x3635('‮220','2lqG')](_0xca19a9,_0x263614);},'GOeLi':_0x3635('‫221','XJ4J'),'yWGzH':function(_0xa338ac){return _0x94425d[_0x3635('‫222','p&*m')](_0xa338ac);}};$[_0x3635('‫223','J3PQ')](_0x1ffad1,_0x199ae2,async(_0x48efd8,_0x2b5b5e,_0x53d9ac)=>{if(_0x348b02[_0x3635('‮224','kv[g')](_0x3635('‮225','0jbX'),_0x348b02[_0x3635('‫226','p&*m')])){$['logAndNotify'](_0x3635('‫19a','uY^g')+this['name']+_0x3635('‮227','Slqh'));}else{try{if(_0x348b02['FQPYe'](_0x3635('‮228','yS%E'),_0x3635('‫229','QgzK'))){httpReq=_0x2b5b5e;httpResp=_0x53d9ac;if(_0x48efd8){console[_0x3635('‮22a','bd(f')](_0x1ffad1+_0x3635('‮22b','$n7Q'));console[_0x3635('‮22c','#Jn&')](JSON['stringify'](_0x48efd8));}else{if(_0x53d9ac[_0x3635('‮22d','oUir')]){if(_0x348b02[_0x3635('‮22e','Slqh')](typeof _0x53d9ac[_0x3635('‮22f','QgzK')],_0x3635('‮230','ne^^'))){if(_0x348b02[_0x3635('‮231','7T(7')]!==_0x348b02[_0x3635('‮232','B&sg')]){$[_0x3635('‮5b','wSG8')](_0x3635('‫233','yS%E')+this[_0x3635('‫ae','hL[*')]+_0x3635('‫234','we5g')+result['data'][0x3][_0x3635('‫235','we5g')]+_0x3635('‫236','a1^8'));}else{httpResult=_0x53d9ac['body'];}}else{try{httpResult=JSON[_0x3635('‫237','#Jn&')](_0x53d9ac[_0x3635('‮238','wSG8')]);}catch(_0x4bfa9a){httpResult=_0x53d9ac[_0x3635('‫239','$zIZ')];}}}}}else{$[_0x3635('‮171','J3PQ')](_0x3635('‫23a','7)Ja')+this[_0x3635('‮1b8','we5g')]+']'+result[_0x3635('‮23b','a1^8')]);}}catch(_0x54a26c){if(_0x348b02['spXZN'](_0x348b02['GOeLi'],_0x348b02[_0x3635('‫23c','SanO')])){urlObject[_0x3635('‮23d','ve&2')]=body;urlObject[_0x3635('‫23e','PybI')][_0x348b02[_0x3635('‮23f','!psd')]]=_0x3635('‫240','IO%a');urlObject[_0x3635('‫241','XJ4J')]['Content-Length']=urlObject['body']?urlObject[_0x3635('‮242','$@g9')][_0x3635('‫243','#Jn&')]:0x0;}else{console[_0x3635('‫244','ZQ%T')](_0x54a26c);}}finally{_0x348b02[_0x3635('‫245','Il@(')](_0x4a0530);}}});});};_0xod8='jsjiami.com.v6';
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