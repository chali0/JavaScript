import os
import json
import time
import httpx
import base64
import hashlib
import sys

def printf(text):
    print(text)
    sys.stdout.flush()
    
def sort_dict_by_keys(d):
    keys = list(d.keys())
    keys.sort()
    return dict([(key,d[key]) for key in keys])

def dict2str(dict):
    str=''
    str1=''
    for key,value in dict.items():
        str1=("%s%s"%(key,value))
        str+=str1
    return str


def gettimestamp():
    return str(round(time.time()))


def getsign(timestamp,token,json):
    salt='rf458d439ffb1548ae29e6e9f3c995739908'
    timestamp = str(timestamp).encode()
    timestamp = str(base64.b64encode(timestamp),encoding = "utf-8")
    json=sort_dict_by_keys(json)
    json=dict2str(json)
    data=timestamp+token+salt+json
    m=hashlib.md5()
    m.update(data.encode('utf-8'))
    sign=m.hexdigest().lower()
    return sign


def campaigninfo():
    global campaignId,customerId,remianedwatertimes,itemId,activityId
    campaignId=''
    customerId=''
    itemId=''
    remianedwatertimes=0
    url='https://qaf.feierlaiedu.com/knowledge-app-farm/api/v1/activity/campaign/info'
    timestamp=gettimestamp()
    json={}
    sign=getsign(timestamp,eytoken,json)
    headers={
        "Accept-Encoding": "gzip,compress,br,deflate",
        "Connection": "keep-alive",
        "Host": "qaf.feierlaiedu.com",
        "Referer": "https://servicewechat.com/wxa09d715917c58498/6/page-frame.html",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.25 NetType/WIFI Language/zh_CN",
        "content-type": "application/json; charset=UTF-8",
        "miniAppVer": "v1.0.0",
        "signature": sign,
        "timestamp": timestamp,
        "token": eytoken
    }
    try:
        res=httpx.post(url=url,headers=headers,json=json).json()
        customerId=res['data']['customerId']
        activityId=campaignId=res['data']['account']['campaignId']
        remianedwatertimes=int(res['data']['account']['amount']/10)
        itemId=res['data']['itemId']
    except:
        printf('没有拿到customerId无法继续执行')
        os._exit(0)


def exchangeWaterPrize():
    url='https://qaf.feierlaiedu.com/knowledge-app-farm/api/v1/water/exchangeWaterPrize'
    timestamp=gettimestamp()
    json={"customerId":customerId,"campaignId":campaignId,"rewardWaterType":7}
    sign=getsign(timestamp,eytoken,json)
    headers={
        "Accept-Encoding": "gzip,compress,br,deflate",
        "Connection": "keep-alive",
        "Host": "qaf.feierlaiedu.com",
        "Referer": "https://servicewechat.com/wxa09d715917c58498/6/page-frame.html",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.25 NetType/WIFI Language/zh_CN",
        "content-type": "application/json; charset=UTF-8",
        "miniAppVer": "v1.0.0",
        "signature": sign,
        "timestamp": timestamp,
        "token": eytoken
    }
    try:
        res=httpx.post(url=url,headers=headers,json=json).json()
        if res['code']==0:
            printf('领取每日水滴成功')
        else:
            printf(res['message'])
    except:
        printf('领取每日水滴出错')
    finally:
        time.sleep(1)


def doClockSignin():
    url='https://qaf.feierlaiedu.com/knowledge-app-farm/api/v1/clock/doClockSign'
    timestamp=gettimestamp()
    json={"customerId":customerId,"campaignId":campaignId,"rewardWaterType":8}
    sign=getsign(timestamp,eytoken,json)
    headers={
        "Accept-Encoding": "gzip,compress,br,deflate",
        "Connection": "keep-alive",
        "Host": "qaf.feierlaiedu.com",
        "Referer": "https://servicewechat.com/wxa09d715917c58498/6/page-frame.html",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.25 NetType/WIFI Language/zh_CN",
        "content-type": "application/json; charset=UTF-8",
        "miniAppVer": "v1.0.0",
        "signature": sign,
        "timestamp": timestamp,
        "token": eytoken
    }
    try:
        res=httpx.post(url=url,headers=headers,json=json).json()
        if res['code']==0:
            printf('签到成功，获得：'+res['data']['rewardValue']+'滴水')
        else:
            printf(res['message'])
    except:
        printf('签到出错')
    finally:
        time.sleep(1)


def share():
    url='https://qaf.feierlaiedu.com/knowledge-app-farm/api/v1/activity/reward/share'
    timestamp=gettimestamp()
    json={"campaignId":campaignId}
    sign=getsign(timestamp,eytoken,json)
    headers={
        "Accept-Encoding": "gzip,compress,br,deflate",
        "Connection": "keep-alive",
        "Host": "qaf.feierlaiedu.com",
        "Referer": "https://servicewechat.com/wxa09d715917c58498/6/page-frame.html",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.25 NetType/WIFI Language/zh_CN",
        "content-type": "application/json; charset=UTF-8",
        "miniAppVer": "v1.0.0",
        "signature": sign,
        "timestamp": timestamp,
        "token": eytoken
    }
    for i in range(2):
        try:
            res=httpx.post(url=url,headers=headers,json=json).json()
            if res['code']==0:
                printf('分享成功')
            else:
                printf(res['message'])
        except:
            printf('分享出错')
        finally:
            time.sleep(1)


def taskListQuery():
    global tasklist,JoinGroupStatus,shareStatus
    tasklist=[]
    JoinGroupStatus=shareStatus=False
    url='https://qaf.feierlaiedu.com/knowledge-app-farm/api/v1/task/taskListQuery'
    timestamp=gettimestamp()
    json={"activityId":activityId,"customerId":customerId}
    sign=getsign(timestamp,eytoken,json)
    headers={
        "Accept-Encoding": "gzip,compress,br,deflate",
        "Connection": "keep-alive",
        "Host": "qaf.feierlaiedu.com",
        "Referer": "https://servicewechat.com/wxa09d715917c58498/6/page-frame.html",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.25 NetType/WIFI Language/zh_CN",
        "content-type": "application/json; charset=UTF-8",
        "miniAppVer": "v1.0.0",
        "signature": sign,
        "timestamp": timestamp,
        "token": eytoken
    }
    try:
        res=httpx.post(url=url,headers=headers,json=json).json()
        for i in range(len(res['data'])):
            if res['data'][i]['taskStatus']==0 and res['data'][i]['id'] is not None:
                tasklist.append(res['data'][i]['id'])
            if res['data'][i]['taskStatus']==1 and res['data'][i]['taskName']=='学习理财课程':
                JoinGroupStatus=True
            if res['data'][i]['completeNUm']==2 and res['data'][i]['taskName']=='分享':
                shareStatus=True
    except:
        printf('获取任务列表出错')


def completeTask(task):
    url='https://qaf.feierlaiedu.com/knowledge-app-farm/api/v1/task/completeTask'
    timestamp=gettimestamp()
    json={"taskId":task,"taskType":""}
    sign=getsign(timestamp,eytoken,json)
    headers={
        "Accept-Encoding": "gzip,compress,br,deflate",
        "Connection": "keep-alive",
        "Host": "qaf.feierlaiedu.com",
        "Referer": "https://servicewechat.com/wxa09d715917c58498/6/page-frame.html",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.25 NetType/WIFI Language/zh_CN",
        "content-type": "application/json; charset=UTF-8",
        "miniAppVer": "v1.0.0",
        "signature": sign,
        "timestamp": timestamp,
        "token": eytoken
    }
    try:
        res=httpx.post(url=url,headers=headers,json=json).json()
        if res['code']==0:
            printf('成功完成任务')
        else:
            printf(res['message'])
    except:
        printf('完成任务失败')
    finally:
        time.sleep(1)


def exchangeWaterByJoinGroup():
    url='https://qaf.feierlaiedu.com/knowledge-app-farm/api/v1/customer/exchangeWaterByJoinGroup'
    timestamp=gettimestamp()
    json={"campaignId":campaignId}
    sign=getsign(timestamp,eytoken,json)
    headers={
        "Accept-Encoding": "gzip,compress,br,deflate",
        "Connection": "keep-alive",
        "Host": "qaf.feierlaiedu.com",
        "Referer": "https://servicewechat.com/wxa09d715917c58498/6/page-frame.html",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.25 NetType/WIFI Language/zh_CN",
        "content-type": "application/json; charset=UTF-8",
        "miniAppVer": "v1.0.0",
        "signature": sign,
        "timestamp": timestamp,
        "token": eytoken
    }
    try:
        res=httpx.post(url=url,headers=headers,json=json).json()
        if res['code']==0:
            printf('模拟加群成功，获得100滴水')
        else:
            printf(res['message'])
    except:
        printf('模拟完成加群失败')
    finally:
        time.sleep(1)


def stealWaterInfoDTO():
    global friendslist
    friendslist=[]
    url='https://qaf.feierlaiedu.com/knowledge-app-farm/api/v1/customer/friends'
    timestamp=gettimestamp()
    json={"customerId":customerId}
    sign=getsign(timestamp,eytoken,json)
    headers={
        "Accept-Encoding": "gzip,compress,br,deflate",
        "Connection": "keep-alive",
        "Host": "qaf.feierlaiedu.com",
        "Referer": "https://servicewechat.com/wxa09d715917c58498/6/page-frame.html",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.25 NetType/WIFI Language/zh_CN",
        "content-type": "application/json; charset=UTF-8",
        "miniAppVer": "v1.0.0",
        "signature": sign,
        "timestamp": timestamp,
        "token": eytoken
    }
    try:
        res=httpx.post(url=url,headers=headers,json=json).json()
        for i in range(len(res['data'])):
            if res['data'][i]['stealWaterInfoDTO']['coolDownTime']=='0':
                friendslist.append(res['data'][i]['stealWaterInfoDTO']['relationCustomerId'])
    except:
        printf('获取好友列表失败')


def stealWater(friend):
    url='https://qaf.feierlaiedu.com/knowledge-app-farm/api/v1/water/exchangeWaterPrize'
    timestamp=gettimestamp()
    json={"customerId":customerId,"campaignId":campaignId,"rewardWaterType":6,"relationIds":friend}
    sign=getsign(timestamp,eytoken,json)
    headers={
        "Accept-Encoding": "gzip,compress,br,deflate",
        "Connection": "keep-alive",
        "Host": "qaf.feierlaiedu.com",
        "Referer": "https://servicewechat.com/wxa09d715917c58498/6/page-frame.html",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.25 NetType/WIFI Language/zh_CN",
        "content-type": "application/json; charset=UTF-8",
        "miniAppVer": "v1.0.0",
        "signature": sign,
        "timestamp": timestamp,
        "token": eytoken
    }
    try:
        res=httpx.post(url=url,headers=headers,json=json).json()
        if res['code']==0:
            printf('领取好友水滴成功')
        else:
            printf(res['message'])
    except:
        printf('领取好友水滴出错')
    finally:
        time.sleep(1)


def feed():
    url='https://qaf.feierlaiedu.com/knowledge-app-farm/api/v1/activity/feed'
    timestamp=gettimestamp()
    json={"activityId":activityId,"itemId":itemId,"campaignId":campaignId,"num":10}
    sign=getsign(timestamp,eytoken,json)
    headers={
        "Accept-Encoding": "gzip,compress,br,deflate",
        "Connection": "keep-alive",
        "Host": "qaf.feierlaiedu.com",
        "Referer": "https://servicewechat.com/wxa09d715917c58498/6/page-frame.html",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.25 NetType/WIFI Language/zh_CN",
        "content-type": "application/json; charset=UTF-8",
        "miniAppVer": "v1.0.0",
        "signature": sign,
        "timestamp": timestamp,
        "token": eytoken
    }
    try:
        res=httpx.post(url=url,headers=headers,json=json).json()
        if res['code']==0:
            printf('浇水成功')
        else:
            printf(res['message'])
    except:
        printf('浇水出错了')
    time.sleep(1)





            
eytokenlist = os.environ["eytokenlist"].split("\n")
intseq=0
for eytoken in eytokenlist:
    intseq=intseq+1
    printf('==========开始执行第'+str(intseq)+'个账号==========')
    campaigninfo()
    exchangeWaterPrize()
    doClockSignin()

    stealWaterInfoDTO()
    for friend in friendslist:
        stealWater(friend)


    taskListQuery()
    if not shareStatus:
        share()
    if not JoinGroupStatus:
        exchangeWaterByJoinGroup()
    for task in tasklist:
        completeTask(task)

    for i in range(2):
        campaigninfo()
        if remianedwatertimes>0:
            printf('==========当前可以浇水'+str(remianedwatertimes)+'次，接下来开始浇水==========')
            for i in range(remianedwatertimes):
                feed()
