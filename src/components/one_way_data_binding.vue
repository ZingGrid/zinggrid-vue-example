<template>
  <div>
    <zing-grid
      ref="oneWayGrid"
      :caption="captionText"
      :data="stringData"
      :pager="pagerOn"
      :theme="theme"
      page-size=5
      page-size-options="2,5,15,25,50">
    </zing-grid>

    <br>

    <h3>Stored Data</h3>
    <p>Paste your JSON data here</p>
    <textarea name="ds" cols="50" rows="8" v-model="stringData"></textarea>
    <br>

    <label for="pager-toggle">Toggle Pager</label>
    <input id="pager-toggle" type="checkbox" v-model="pagerOn">

    <br>
    <label>Change Data</label>
    <button id="cdBtn" @click="changeData">Toggle Datasets</button>
    <br>

    <label for="caption-text">Change Caption</label>
    <input id="caption-text" type="text" placeholder="Caption" v-model="captionText">

    <br>
    <label for="theme-text">Change Theme</label>
    <select id="theme-text" v-model="theme">
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
      // model for text
      captionText: 'Change Me Please!',
      // model for pager
      pagerOn: true, 
      // either 1 or 0
      dataIndex: 1, 
      // array of datasets
      dataset: [],
      // stringified data
      stringData: '',
      // model for theme
      theme: 'default', 
    }
  },
  mounted() {
    // assign dataset on mount to trigger watch change
    this.dataset = [
      // dataset 1
      [
        [1,2,3], 
        [4,5,6]
      ],
      // dataset 2
      [
        { "breed": "Chow Chow", "name": "Butter"},
        { "breed": "Dachshund", "name": "Sousage"},
        { "breed": "Pug", "name": "Potat"},
        { "breed": "Corgi", "name": "Plop"},
        { "breed": "Pomeranian", "name": "Floof"}
      ]
    ];
  },
  methods: {
    changeData(e) {
      // toggle dataset variable and trigger watch change for grid data
      if (this.dataIndex === 0) this.dataIndex = 1;
      else this.dataIndex = 0;
    },
  },
  watch: {
    dataset: function(val) {
      // must stringify data for component/HTML attributes
      this.stringData = JSON.stringify(this.dataset[this.dataIndex]);
    },
    dataIndex: function(val) {
      // dataIndex is changed when we toggle the datasets in the method changeData
      this.stringData = JSON.stringify(this.dataset[val]);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
