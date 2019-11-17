<template>
    <div>
        <Form :model="formItem" :label-width="80">
            <FormItem label="Input">
                <Input v-model="formItem.input" placeholder="Enter something..."/>
            </FormItem>
            <FormItem>
                <Button type="primary">Submit</Button>
                <Button style="margin-left: 8px">Cancel</Button>
            </FormItem>
        </Form>
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

</style>
