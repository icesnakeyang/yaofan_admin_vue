<template>
    <div class="container">
        <div class="content">
            <Form :model="formItem" :label-width="80">
                <FormItem label="用户名：">
                    <Input v-model="formItem.input" placeholder="电话号码"/>
                </FormItem>
                <FormItem label="密码：">
                    <Input v-model="formItem.input" placeholder="登录密码"/>
                </FormItem>
                <FormItem>
                    <Button type="primary">注册</Button>
                    <Button type="text" style="margin-left: 20px">登录</Button>
                </FormItem>
            </Form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "register",
        data() {
            return {
                formItem: {
                    input: '',
                    select: '',
                    radio: 'male',
                    checkbox: [],
                    switch: true,
                    date: '',
                    time: '',
                    slider: [20, 50],
                    textarea: ''
                }
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
