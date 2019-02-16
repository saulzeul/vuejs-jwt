<template>
  <div id="login">
    <div class="container">
      <el-card shadow="never">
        <center>
          <div style="width:120px;height:120px;background-color:#efefef;border-radius:100px;"></div>
        </center>
        <el-form ref="form">
                  <div style="margin-top: 15px;">
          <el-input v-model="user" placeholder="Usuario"></el-input>
        </div>
        <div style="margin-top: 15px;">
          <el-input v-model="password" type="password" placeholder="Contraseña"></el-input>
        </div>
        <div style="margin-top: 15px;">
          <el-select v-model="value" placeholder="EMPRESA">
            <el-option
              v-for="enterprice in enterprises"
              :key="enterprice.value"
              :label="enterprice.label"
              :value="enterprice.value"
            ></el-option>
          </el-select>
        </div>
        <div style="margin-top: 15px;">
          <el-button type="primary" :disabled="enableLogin">INICIAR SESION</el-button>
        </div>
        <div v-if="passwordError" style="margin-top: 15px;">
          <el-button type="danger" plain>RECUPERAR CONTRASEÑA</el-button>
        </div>
        </el-form>
      </el-card>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      enterprises: [],
      user: "",
      password: "",
      value: "",
      passwordError: false
    };
  },
  computed: {
    enableLogin: function() {
      if ((this.user, this.password, this.value)) {
        return false;
      } else {
        return true;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.el-select {
  width: 100%;
}
.el-card {
  border: 1px solid #d8dce5;
}
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 5%;
}
.container > div {
  margin: 10px;
  width: 300px;
}
button {
  width: 100%;
}
</style>