<template>
  <div>
    <zing-grid
      caption="Hello World"
      :data="stringData"
      :theme="theme">
      <zg-colgroup>
        <zg-column index="0" header="Column 1"></zg-column>
        <zg-column index="1" header="Column 2"></zg-column>
        <zg-column index="2" header="Column 3"></zg-column>
      </zg-colgroup>
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
import ZingGrid from 'zinggrid';

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
