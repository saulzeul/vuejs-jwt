<template>
  <div class="listItem container-grid">
    <div class="nameProduct">{{nameProduct}}</div>
    <div class="price">${{price}}</div>
    <div class="option">
      <el-button-group>
        <el-button @click="editItem" type="primary" size="mini">
          <icon icon="pencil-alt"/>
        </el-button>
        <el-button type="warning" size="mini">
          <icon icon="clone"/>
        </el-button>
        <el-button type="danger" size="mini">
          <icon icon="trash-alt"/>
        </el-button>
      </el-button-group>
    </div>
    <div class="option-dropdown">
      <el-dropdown>
        <el-button type="primary" size="mini">
          <icon icon="ellipsis-v"/>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item><div @click="editItem">Editar</div></el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
export default {
  props: ["nameProduct", "price", "description"],
  methods: {
    editItem () {
      alert('Holamundo')
    }
  },
};
</script>
<style lang="scss" scoped>
.listItem {
  background-color: #f0f2f5;
  width: 100%;
  height: auto;
  border-radius: 4px;
}
.container-grid {
  display: grid;
  grid-template-areas: "nameProduct price option";
  grid-template-rows: auto;
  grid-template-columns: 50% 15% 35%;
  padding: 10px 10px 10px 0px;
}
.nameProduct {
  grid-area: nameProduct;
  justify-self: center;
  align-self: center;
  font-size: smaller;
  font-weight: 600;
}
.price {
  grid-area: price;
  justify-self: center;
  align-self: center;
  font-size: large;
  font-weight: 600;
  width: 100%;
  height: 100%;
  background: white;
  padding: 5px 0px 0px 0px;
  border-radius: 4px;
  text-align: center;
}
.option {
  grid-area: option;
  justify-self: right;
  align-self: center;
}
.icon-menu {
  width: 20px;
  height: 20px;
  background: #409eff;
  color: white;
  padding: 5px;
  border-radius: 20px;
}

@media screen and (min-width: 668px) {
  .option-dropdown {
    display: none;
  }
}
@media screen and (max-width: 667px) {
  .container-grid {
    display: grid;
    grid-template-areas: "nameProduct price option";
    grid-template-rows: auto;
    grid-template-columns: 65% 15% 20%;
    padding: 10px 10px 10px 0px;
  }
  .option {
    display: none;
  }
  .option-dropdown {
    grid-area: option;
    justify-self: right;
    align-self: center;
  }
}
</style>

