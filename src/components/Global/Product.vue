<template>
  <div>
    <div class="card">
      <img
        class="card-product-image"
        :src="urlImage"
      >
      <div class="card-text">
        <p>{{ nameItem }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: [ 'nameItem', 'urlImage']
}
</script>
<style lang="scss" scoped>
.card {
  max-width: 100%;
  height: auto;
  margin: 0px 0px 5px 0px;
  border-radius: 4px;
  position: relative;
}
.card-product-image {
  width: 100%;
  border-radius: 4px;
}
.card-text {
  background: #00000085;
  color: white;
  text-align: center;
  bottom: 4px;
  left: 0;
  right: 0;
  position: absolute;
  border-radius: 4px;
}
.price {
  margin: auto;
  width: 100%;
  font-size: xx-large;
  border-radius: 4px;
}
</style>

