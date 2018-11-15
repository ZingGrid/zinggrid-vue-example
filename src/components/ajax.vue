<template>
  <div>
    <zing-grid 
      ref="ajaxGrid" 
      caption="Shows" 
      :data="datastore" 
      editor>
    </zing-grid>

  </div>
</template>

<script>
export default {
  data () {
    return {
      datastore: [],
    }
  },
  mounted() {
    const _this = this;
    // must stringify data for component/HTML attributes
    fetch('/static/shows.json', {
      headers: new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    }).then(res => {
        if (res.status !== 200) {
          throw new Error('Status was not 200');
        }

        // return a promise converting to json
        return res.json();
      })
      .then(gridData => {
        // if we made it here great news
        console.log(gridData)
        _this.datastore = JSON.stringify(gridData.shows);
      })
      .catch(err => {
        console.log(err)
      })
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#eventLog {
    background: black;
    color: white;
    width: 370px;
    min-height: 225px;
    padding: 10px;
    margin-top: 20px;
    font-family: monospace;
    line-height: 1.5;
}

.wordwrap { 
    white-space: pre-wrap;      /* CSS3 */   
    white-space: -moz-pre-wrap; /* Firefox */    
    white-space: -pre-wrap;     /* Opera <7 */   
    white-space: -o-pre-wrap;   /* Opera 7 */    
    word-wrap: break-word;      /* IE */
 }
</style>
