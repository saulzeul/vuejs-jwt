<template>
  <div>
    <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="collapse" :router="true">
      <el-submenu :index="`${module.id}`" v-for="(module, indexModule) in modules" :key="indexModule+1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">{{ module.name}}</span>
        </template>
        <div v-for="(submodule, indexsubModule) in module.submodules" :key="indexsubModule">
          <el-menu-item :route="submodule.path" :index="`${submodule.id}`">{{ submodule.name}}</el-menu-item>
        </div>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      modules: [
        {
          id: 1,
          name: "Home",
          path: "/home",
          submodules: [
            { id: 1, name: "Eventos", path: "/home/events" },
            { id: 2, name: "Proyectos", path: "/home/proyects" },
            { id: 3, name: "BPM", path: "/home/bpm" }
          ]
        },
        {
          id: 2,
          name: "Configuration",
          path: "/home",
          submodules: [
            { id: 4, name: "Profile", path: "/home/events" },
            { id: 5, name: "Users", path: "/home/proyects" },
          ]
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["collapse"])
  }
};
</script>
<style lang="scss" scoped>
div {
  ::-webkit-scrollbar {
    width: 8px; /* Tamaño del scroll en vertical */
    height: 8px; /* Tamaño del scroll en horizontal */
    display: none; /* Ocultar scroll */
  }
}
.el-menu {
  border-right: none;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
