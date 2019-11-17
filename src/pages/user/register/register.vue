<template>
    <div class="container">
        <div class="content">
            <Form>
                <FormItem>
                    <div style="text-align: center">
                        <h2>用户注册</h2>
                    </div>
                </FormItem>
            </Form>

            <Form :label-width="80">

                <FormItem label="用户名：">
                    <Input v-model="username" placeholder="电话号码"/>
                </FormItem>
                <FormItem label="密码：">
                    <Input v-model="password" placeholder="登录密码"/>
                </FormItem>
                <FormItem label="确认密码：">
                    <Input v-model="password2" placeholder="再次确认登录密码"/>
                </FormItem>
                <FormItem label="姓名：">
                    <Input v-model="realName" placeholder="请输入您的真实姓名"/>
                </FormItem>
                <FormItem>
                    <Button type="primary" @click="onRegister">注册</Button>
                    <Button type="text" style="margin-left: 20px" @click="gotoLogin">登录</Button>
                </FormItem>
            </Form>
        </div>
    </div>
</template>

<script>
    import {apiRegister} from "@/api/api";

    export default {
        name: "register",
        data() {
            return {
                username: '',
                password: '',
                password2: '',
                realName: ''
            }
        },
        methods: {
            gotoLogin() {
                this.$router.push({
                    name: 'login'
                })
            },
            onRegister() {
                if (!this.username) {
                    this.$Message.error('请输入正确的电话号码')
                    return
                }
                if (this.password !== this.password2) {
                    this.$Message.error('两次输入的密码不一致')
                    return
                }
                let params = {
                    phone: this.username,
                    password: this.password,
                    username: this.realName
                }
                apiRegister(params).then((response) => {
                    if (response.data.code === 0) {
                        this.$Message.success('注册成功')
                    } else {
                        this.$Message.error('注册失败')
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
