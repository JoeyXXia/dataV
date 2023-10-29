<template>
  <div class="retangle">
    <canvas
      height="600"
      width="600"
      ref="retangle"
      class="canvas-rectangle"
    ></canvas>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const retangle = ref();

onMounted(() => {
  const ctx = retangle.value.getContext("2d");
  ctx.fillStyle = "red";
  ctx.fillRect(0, 0, 100, 50);

  ctx.strokeRect(100, 100, 100, 50);
});
</script>

<style scoped>
.retangle {
  margin: 0;
  padding: 0;
  background-image: url(../assets/canvas/img/grid.png);
}

.canvas-rectangle {
  background-color: rgba(255, 0, 0, 0.1);
}
</style>
