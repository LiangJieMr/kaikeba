<template>
  <div>
    <kform :model="model" :rules="rules" ref="loginfrom">
      <kformitem label="用户名" prop="username">
        <Kinput v-model.number="model.username"></Kinput>
      </kformitem>
      <Kformitem label="密码" prop="password">
        <Kinput v-model="model.password" type="password"></Kinput>
      </Kformitem>
      <Kformitem>
        <button @click="onLogin">登录</button>
      </Kformitem>
    </kform>
  </div>
</template>

<script>
import Kinput from "./Kinput.vue";
import Kformitem from "./Kformitem.vue";
import Kform from "./Kform.vue";
export default {
  data() {
    return {
      model: {
        username: "tom",
        password: "",
      },
      rules: {
        username: [
          { required: true, message: "用户名必填" },
          { type: "number", message: "请填写为数字" },
        ],
        password: [{ required: true, message: "密码必填" }],
      },
    };
  },
  methods: {
      onLogin() {
            this.$refs.loginfrom.validate((isValid) => {
                if (isValid) {
                    alert('登录、、、')
                } else {
                    alert('有错、、、')
                }
            })
      }
  },
  components: {
    Kinput,
    Kformitem,
    Kform,
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
};
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>