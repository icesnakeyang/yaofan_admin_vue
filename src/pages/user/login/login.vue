<template>
    <div class="container">
        <div class="content">
            <Form>
                <FormItem>
                    <div style="text-align: center">
                        <h2>用户登录</h2>
                    </div>
                </FormItem>
            </Form>
            <Form :label-width="80">
                <FormItem label="用户名：">
                    <Input v-model="phone" placeholder="登录名"/>
                </FormItem>
                <FormItem label="密码：">
                    <Input v-model="password" placeholder="登录密码"/>
                </FormItem>
                <FormItem>
                    <div v-show="isLoading">
                        <Spin fix style="margin-top: 20px">
                            <Icon type="ios-loading" size=18 class="gogo_spin"></Icon>
                            <div>登录中...</div>
                        </Spin>
                    </div>
                    <div v-show="!isLoading">
                        <Button type="primary" @click="onLogin">登录</Button>
                        <Button type="text" style="margin-left: 20px" @click="gotoRegister">注册</Button>
                    </div>
                </FormItem>
            </Form>
        </div>
    </div>
</template>

<script>
    import {apiAdminLogin} from "../../../api/api";

    export default {
        name: "login",
        data() {
            return {
                phone: '',
                password: '',
                isLoading: false
            }
        },
        methods: {
            gotoRegister() {
                this.$router.push({
                    name: 'register'
                })
            },
            onLogin() {
                if (!this.phone) {
                    this.$Message.error('请输入正确的电话号码')
                    return
                }
                if (!this.password) {
                    this.$Message.error('请输入密码')
                    return
                }

                this.isLoading = true
                let params = {
                    loginName: this.phone,
                    password: this.password
                }
                apiAdminLogin(params).then((response) => {
                    window.console.log(response)
                    if (response.data.code === 0) {
                        this.$Message.success('登录成功')
                        let token = response.data.data.adminInfo.token
                        this.$store.dispatch('saveToken', token)
                        this.isLoading = false
                        this.$router.push({
                            name: 'dashboard'
                        })
                    } else {
                        this.$Message.error('登录失败')
                        this.isLoading = false
                    }
                })
            }
        }
    }
</script>

<style scoped>
    @import "../../../assets/gogoStyle.css";

    .container {
        height: 100%;
    }

    .content {
        width: 400px;
        height: 400px;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        margin: auto;
    }
</style>
