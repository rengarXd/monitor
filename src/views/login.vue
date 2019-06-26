

<template>
  <div class="bg">
    <div class="middle-box ">
      <h1 class="logo-name">大屏监控登录界面</h1>
      <h4 class="logo-content">欢迎使用</h4>
      <el-form
        :model="ruleForm2"
        :rules="rules2"
        ref="ruleForm2"
        label-width="80px"
        class="demo-ruleForm"
      >
        <el-form-item
          label="登录名"
          prop="texts"
        >
          <el-input
            type="text"
            v-model="ruleForm2.texts"
            auto-complete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="显示比例">
          <el-select
            style="width:100%"
            v-model="ruleForm2.size"
            placeholder="请选择"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            style="width:100%"
            @click="loginHandler"
          >登&nbsp;&nbsp;录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { ILogin, SLogin } from "@/types/loginP";
import { loginApi } from "@/api/index";
// import { Vue } from "vue-property-decorator";
const validatePass = (rule: any, value: any, callback: any) => {
  // console.log(rule);
  if (!value) {
    callback(new Error("代码不能为空！"));
  } else {
    callback();
  }
};
const checkAge = (rule: any, value: number, callback: any) => {
  if (!value) {
    return callback(new Error("显示比例不能为空"));
  }
  setTimeout(() => {
    if (!Number.isFinite(value)) {
      callback(new Error("请输入正确的数字"));
    } else {
      if (value > 2 || value <= 1) {
        callback(new Error("必须是大于等于1小于2的数值"));
      } else {
        return callback();
      }
    }
  }, 500);
};

@Component
export default class Login extends Vue {
  private ruleForm2: any = {
    texts: "",
    size: 1
  };
  private rules2: any = {
    texts: [{ validator: validatePass, trigger: "blur" }],
    size: [{ validator: checkAge, trigger: "change" }]
  };
  private options: any[] = [
    {
      value: 0.8,
      label: "小"
    },
    {
      value: 1,
      label: "默认"
    },
    {
      value: 1.3,
      label: "中"
    },
    {
      value: 1.5,
      label: "大"
    }
  ];
  // lifecycle hook
  private mounted() {}
  loginHandler(): void {
    // let el: any = this.$refs["ruleForm2"];
    // el.validate()
    (this as any).$refs["ruleForm2"].validate((valid: any) => {
      if (valid) {
        loginApi(this.ruleForm2.texts)
          .then((res: SLogin) => {
            this.$message.success(res.msg);
            let logindata: ILogin = {
              data: res.content,
              code: this.ruleForm2.texts,
              size: this.ruleForm2.size
            };
            sessionStorage.setItem("loginData", JSON.stringify(logindata));
            (this as any).$router.push({
              name: "Monitor",
              params: logindata
            });
          })
          .catch((err: any) => {
            this.$message(err.msg);
            let logindata: ILogin = {
              data: [],
              code: this.ruleForm2.texts,
              size: this.ruleForm2.size
            };
            sessionStorage.setItem("loginData", JSON.stringify(logindata));
            (this as any).$router.push({
              name: "Monitor",
              params: logindata
            });
          });
      } else {
        this.$message({
          type: "warning",
          message: "登录验证未通过！"
        });
        return false;
      }
    });
  }
}
</script>

<style scoped>
.bg {
  background: #f5f5f5;
  width: 99%;
  height: 98%;
  overflow: hidden;
  position: absolute;
}
.middle-box {
  max-width: 400px;
  z-index: 100;
  margin: 0 auto;
  padding-top: 40px;
}
.loginscreen {
  width: 300px;
}
.form-group {
  margin-bottom: 25px;
  text-align: center;
}
.form-control,
.single-line {
  background-color: #fff;
  background-image: none;
  border: 1px solid #e5e6e7;
  border-radius: 1px;
  color: inherit;
  display: block;
  padding: 6px 12px;
  /* -webkit-transition: border-color 0.15s ease-in-out 0s,
    box-shadow 0.15s ease-in-out 0s; */
  transition: border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;
  width: 100%;
  font-size: 14px;
}
.btn {
  display: inline-block;
  padding: 6px 12px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  /* -ms-touch-action: manipulation; */
  touch-action: manipulation;
  cursor: pointer;
  /* -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none; */
  user-select: none;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
}
.btn-primary {
  background-color: #1ab394;
  border-color: #1ab394;
  color: #fff;
  display: block;
}

.m-t {
  margin-top: 15px;
}

.m-b {
  margin-bottom: 15px;
}

.full-width {
  width: 100% !important;
}

.content {
  position: absolute;
  /* top: 30%;
  left: 30%; */
  transform: translateY(-50%);
}
.logo-name {
  color: #999;
  font-size: 50px;
  font-weight: 800;
  /* letter-spacing: -10px; */
  margin-bottom: 0;
}
.logo-content {
  font-size: 14px;
  color: #e6e6e6;
  text-align: center;
}
</style>