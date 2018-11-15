<template>
  <div>
    <zing-grid
      caption="Hello World"
      :data="stringData"
      :theme="theme">
    </zing-grid>

    <br>
    <hr>
    <select @change="updateGridTheme">
      <option value="default">Default</option>
      <option value="android">Android</option>
      <option value="ios">IOS</option>
      <option value="dark">Dark</option>
      <option value="black">Black</option>
    </select>
  </div>
</template>

<script>
export default {
  data () {
    return {
      theme: 'default',
      datastore: [
        [1,2,3], 
        [4,5,6]
      ],
      stringData: [],
    }
  },
  mounted() {
    // must stringify data for component/HTML attributes
    this.stringData = JSON.stringify(this.datastore);
  },
  methods: {
    updateGridTheme(e) {
      let newThemeValue = e.target.value;
      this.theme = newThemeValue;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
