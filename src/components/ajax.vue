<template>
  <div>
    <!-- 
      adding loading attribute before grid load is a native way to style the grid
      in a loading state. This is useful if you know the data is being fetched. -->
    <zing-grid 
      ref="ajaxGrid" 
      caption="Shows" 
      editor
      loading>
    </zing-grid>

  </div>
</template>

<script>
import ZingGrid from 'zinggrid';
export default {
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
        console.log(gridData);
        // purposely timeout so the loading screen displays longer
        setTimeout(() => {
          _this.$refs.ajaxGrid.setData(gridData.shows);
        }, 2000);
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
  /*  while the grid is in a loading state give it a default height to prevent screen jank */
  zing-grid[loading] {
    height:500px;
  }
</style>
