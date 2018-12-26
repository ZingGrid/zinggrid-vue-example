<template>
  <div>
    <zing-grid
      ref="twoWayGrid"
      :data="stringData"
      caption="Edit Cells in Grid OR update data in input field"
      editor-controls>
    </zing-grid>

    <br>

    <h3>Stored Data</h3>
    <textarea name="ds" cols="50" rows="8" v-model="stringData"></textarea>
    <br>

  </div>
</template>

<script>
import ZingGrid from 'zinggrid';
export default {
  data: function() {
    return {
      // model for binding theme attribute grid
      theme: 'default',
      
      // fake datastore
      datastore : [
          { "breed": "Cane Corso", "name": "Ziva"},
          { "breed": "Dachshund", "name": "Rick"},
          { "breed": "Corgi", "name": "Phillis"},
          { "breed": "Pomeranian", "name": "Koda"}
      ],
      
      // model for binding data attribute to grid
      stringData: "",
    }
  },
  
  mounted() {
    this.stringifyData();
    // assign editor callback to catch data updates
    // full row edit 
    this.$refs.twoWayGrid.addEventListener('data:recordchange', this.dataChanged.bind(this));
    // single cell change (double click cell)
    this.$refs.twoWayGrid.addEventListener('data:cellchange', this.dataChanged.bind(this));
    // row insert
    this.$refs.twoWayGrid.addEventListener('data:recordinsert', this.dataInsert.bind(this));
    // row delete
    this.$refs.twoWayGrid.addEventListener('data:recorddelete', this.dataDelete.bind(this));
  },
  
  methods: {
    
    // manager store updates
    dataChanged(e) {
      console.log(`--- data:changed fired ---`, e.detail);
      
      let rowIndex = e.detail.ZGData.rowIndex;
      let newValues = {
        breed: e.detail.ZGData.data.breed,
        name: e.detail.ZGData.data.name
      };
      
      // update the object in datastore at the correct
      // array position
      // eg) currentDataSet['name'] = 'new value'
      this.datastore[rowIndex] = newValues;
      this.stringifyData();
    },

    // manage inserting rows to store
    dataInsert(e) {        
      console.log(`--- data:insert fired ---`, e.detail);
      let newValues = {
        breed: e.detail.ZGData.data.breed,
        name: e.detail.ZGData.data.name,
      };
      // push record to our array
      this.datastore.push(newValues);
      this.stringifyData();
    },
    
    // manage deleting rows to store
    dataDelete(e) {        
      console.log(`--- data:delete fired ---`, e);
      let recordIndex = e.detail.ZGData.data.nOriginalIndex;
      // filter deleted row from datastore containing array of objects
      this.datastore = this.datastore.filter((ele, index) => index != recordIndex);
      this.stringifyData();
    },
    
    // update store data for textarea input and grid
    stringifyData(val) {
      // must stringify data for component/HTML attributes
      this.stringData = JSON.stringify(this.datastore);
      // alternatively can use API to set data. We chose
      // to show off attribute binding first
      // this.$refs.demoGrid.setData(this.datastore);
    },
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
