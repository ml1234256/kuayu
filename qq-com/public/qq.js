console.log('qq.js')
const request = new XMLHttpRequest()
request.open('GET', 'http://qq.com:8889/friends.json')
request.onreadystatechange = () => {
    if(request.readyState === 4 && request.status === 200) {
        console.log(request.response)
    }
}
request.send()