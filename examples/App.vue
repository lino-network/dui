<template>
  <div>
    <colorPicker v-model="color" v-on:change="headleChangeColor"></colorPicker>
    <d-input type="textarea"></d-input>
    <!-- <iframe
      src="https://dlive.tv/embed/livestream/mo1"
      width="500"
      height="300"
    >
    </iframe> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      color: "#ff0000",
    };
  },
  methods: {
    headleChangeColor() {
      console.log("颜色改变");
    },
  },
};
</script>
