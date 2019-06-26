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
  background: white;
  margin: 0px;
  border-radius: 4px;
  position: relative;
}
.card-product-image {
  width: 100%;
}
.card-text {
  background: #00000085;
  color: white;
  text-align: center;
  bottom: 3px;
  left: 0;
  right: 0;
  position: absolute;
}
.price {
  margin: auto;
  width: 100%;
  font-size: xx-large;
}
</style>

