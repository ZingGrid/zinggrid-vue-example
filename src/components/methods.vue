<template>
  <div>
    <p>Read more about ZingGrid methods <a href="https://www.zinggrid.com/docs/api-methods" target="_blank">here.</a></p>
  <zing-grid 
    ref="methodGrid"></zing-grid>

  <br>

  <label for="pager-toggle">Toggle Pager</label>
  <input id="pager-toggle" type="checkbox" @change="setPager" v-model="pagerOn">

  <br>
  <input type="text" placeholder="Caption" v-model="captionText">
  <button @click="setCaption">Set Caption</button>
  
  <br>
  <textarea name="ds" cols="50" rows="8" v-model="stringData"></textarea><br>

  </div>
</template>

<script>
import ZingGrid from 'zinggrid';
export default {
  data () {
    return {
      dataset: [
        { "breed": "Chow Chow", "name": "Butter"},
        { "breed": "Dachshund", "name": "Sousage"},
        { "breed": "Pug", "name": "Potat"},
        { "breed": "Corgi", "name": "Plop"},
        { "breed": "Pomeranian", "name": "Floof"}
      ],
      stringData: '',
      pagerOn: false,
      captionText: '',
      eventText: ''
    }
  },
  mounted() {
    // must stringify data for component/HTML attributes
    this.stringData = JSON.stringify(this.dataset);
  },
  methods: {
    setPager(e) {
      this.$refs.methodGrid.setPager(this.pagerOn);
    },
    setCaption(e) {
      this.$refs.methodGrid.setCaption(this.captionText);
    }
  },
  watch: {
    stringData: function(val) {
      this.$refs.methodGrid.setData(val);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
