import request from '@/request.js'

export function Login(data) {
    return request({
        url: 'practice/login',
        method: 'POST',
        data
    })
}