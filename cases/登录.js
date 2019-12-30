const assert = require('assert')

describe('登录', function () {
    describe('登录成功', function () {
        it('匹配的用户名和密码', function () {
            allure.description('前提：用户存在')
            allure.createStep('输入用户名abc', () => {})()
            allure.createStep('输入密码872878', () => {})()
            allure.createStep('点击登录按钮', () => {})()

            assert.ok(true)
        })
        it('已登录 App 扫码', function () {
            assert.fail('提示服务端报错，错误码 1001')
        })
    })
    
    describe('登录失败', function () {
        it('不匹配的用户名和密码', function () {
            assert.ok(true)
        })
    })

})
