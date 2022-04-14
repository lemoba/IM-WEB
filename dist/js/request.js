function request(url = '', type = 'get', data = '')
{
    return new Promise(function(resolve, reject) {
        var baseUrl = 'http://127.0.0.1:8787/api/v1/'
        var token = localStorage.getItem('ACCESS_TOKEN');
        $.ajax({
            url: baseUrl + url,
            type: type,
            dataType: 'json',
            headers : {'Authorization': 'Bearer ' + token},
            data: data,
            success:function(res){
                resolve(res)
            },
            error:function(res) {
                reject(res)
            }
        });
    })       
} 