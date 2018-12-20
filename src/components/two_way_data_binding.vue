<template>
  <div>
    <zing-grid
      ref="twoWayGrid"
      :caption="captionText"
      :data="stringData"
      :pager="pagerOn"
      editor>
    </zing-grid>

    <br>

    <h3>Stored Data</h3>
    <textarea name="ds" cols="50" rows="8" v-model="stringData"></textarea>
    <br>

    <label for="pager-toggle">Toggle Pager</label>
    <input id="pager-toggle" type="checkbox" v-model="pagerOn">

    <br>
    <label>Change Data</label>
    <button id="cdBtn" @click="changeData">Change Data</button>
    <br>

    <label for="caption-text">Change Caption</label>
    <input id="caption-text" type="text" placeholder="Caption" v-model="captionText">


  </div>
</template>

<script>
import ZingGrid from 'zinggrid';
export default {
  data () {
    return {
      captionText: 'Double Click On A Cell To Edit',
      pagerOn: true,
      dataIndex: 0,
      dataset: [],
      stringData: ''
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
    // assign editor callback to catch data updates
    this.$refs.twoWayGrid.addEventListener('data:cellchange', this.dataChanged.bind(this));
  },
  methods: {
    changeData(e) {
      // toggle dataset variable and trigger watch change for grid data
      if (this.dataIndex === 0) this.dataIndex = 1;
      else this.dataIndex = 0;
    },
    dataChanged(e) {
      let oldValue = e.detail.ZGData.oldValue;
      let newValue = e.detail.ZGData.newValue;
      let rowIndex = e.detail.ZGData.rowIndex;
      let fieldIndex = e.detail.ZGData.fieldIndex;
      console.log(`
        --- data cell changed fired --- 
        oldValue: ${oldValue}  
        newValue ${newValue}
        index: ${fieldIndex}
      `, e.detail);
      
      // grab a reference to the current dataset (typically you only have)
      let currentDataSet = this.dataset[this.dataIndex];

      // update the dataset
      // eg) currentDataSet[4][Floof]
      // eg) currentDataSet[0][2]
      this.$set(currentDataSet[rowIndex], fieldIndex, newValue);
      // @todo object assign
    }
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
