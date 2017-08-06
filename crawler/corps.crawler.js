var fs = require('fs');
var request = require('request');


var header = {
    'Host': 'www.wdzj.com',
    'Content-Length': 132,
    'Accept': 'application/json, text/javascript, */*; q=0.01',
    'Origin': 'http://www.wdzj.com',
    'X-Requested-With': 'XMLHttpRequest',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36',
    'Content-Type ': 'application/x-www-form-urlencoded; charset=UTF-8',
    'Referer': 'http://www.wdzj.com/dangan/',
    'Accept-Encoding': 'gzip, deflate',
    'Accept-Language': 'zh-CN,zh;q=0.8,en;q=0.6,vi;q=0.4',
    //  'Cookie': '__jsluid=688747c63f4bd6ba6c3bde71c96a7e7e; UM_distinctid=15d9db4963e6f8-0b491b7affdded-30677808-fa000-15d9db4963f44a; gr_user_id=d3e36a7b-2a66-4b56-a81f-e511dbb46370; advidadcolumn47=0; advidadcolumn50=0; advidadcolumn53=0; advidadcolumn56=0; JSESSIONID=5BF93BA96CAB811DE6E0AB217A8272B1; route=6aaa8bf2b022e20061c8852c36e18654; _pk_ref.1.b30f=%5B%22%22%2C%22%22%2C1501646071%2C%22https%3A%2F%2Fwww.baidu.com%2Flink%3Furl%3DBjuNaXkJ6g-KIY7VrCKTE6C3zghZIqLMuFQaIFYerb3%26wd%3D%26eqid%3Da3c13f6b000295c50000000259814cec%22%5D; PHPSESSID=aoemu2avse2nujqt5mcgqnlg10; CNZZDATA5008302=cnzz_eid%3D1647039885-1501587032-null%26ntime%3D1501641037; _pk_id.1.b30f=7bd36cd712137ae2.1501589444.2.1501646204.1501646071.; _pk_ses.1.b30f=*; _ga=GA1.2.6430368.1501589444; _gid=GA1.2.762691315.1501589444; Hm_lvt_9e837711961994d9830dcd3f4b45f0b3=1501589444,1501646071; Hm_lpvt_9e837711961994d9830dcd3f4b45f0b3=1501646204; WDZJptlbs=1; gr_session_id_1931ea22324b4036a653ff1d3a0b4693=7ba213d4-130d-42cc-a412-c9581f132645',
};

// var fs = require('fs');
// var request = require('request');
var list = [];
var HttpsProxyAgent = require('https-proxy-agent');
var proxy = 'http://127.0.0.1:3128';
var agent = new HttpsProxyAgent(proxy);


function start(index) {
    var options = {
        url: 'http://www.wdzj.com/front_select-plat',
        headers: header,
        agent: agent,
        // 'proxy': 'http://192.168.8.125:8087',
        form: {
            'params': '',
            'sort': 'grade',
            'currPage': index
        },
    };
    request.post(options, function(err, response, body) {
        if (!err && response.statusCode == 200) {
            body = JSON.parse(body);
            list.push(body.list);
            index++
            start(index);
        } else {
            fs.writeFile('crops.json', JSON.stringify(list), function(err) {

            })
        }
    });
}

start(0);