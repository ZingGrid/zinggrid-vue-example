<template>
  <div>
    <p>Click around on the grid to trigger events in the console. Read more about ZingGrid events <a href="https://www.zinggrid.com/docs/api-events" target="_blank">here.</a></p>
    <zing-grid 
      ref="eventGrid"
      caption="Events" 
      :data="stringData"
      pager 
      page-size="3">
    </zing-grid>
    <br>

    <h3>Event Log</h3>
    <div id="eventLog" class="wordwrap">{{eventText}}</div>

  </div>
</template>

<script>
import ZingGrid from 'zinggrid';
export default {
  data () {
    return {
      datastore: [
        {"name": "Kevin", "age": "22"},
        {"name": "Joe", "age": "40"},
        {"name": "Liz", "age": "25"},
        {"name": "Tim", "age": "24"},
        {"name": "Ron", "age": "30"},
        {"name": "Jane", "age": "31"}
      ],
      stringData: [],
      events: ['grid:ready', 'cell:click', 'header:click', 'grid:pagechange'],
      eventText: ''
    }
  },

  beforeDestroy() {
    // remove events
    for (var i = 0; i < this.events.length; i++) {
      this.$refs.eventGrid.removeEventListener(this.events[i], this.logEvent.bind(this));
    }
  },

  mounted() {
    // must stringify data for component/HTML attributes
    this.stringData = JSON.stringify(this.datastore);

    // add events
    for (var i = 0; i < this.events.length; i++) {
      this.$refs.eventGrid.addEventListener(this.events[i], this.logEvent.bind(this));
    }

  },
  methods: {
    logEvent(event) {
      console.log(event);
      const NEWLINE = '\n';
      if (event.detail.ZGTarget && event.detail.ZGData) {
        console.log(event.type + ' from ' + event.detail.ZGTarget.localName);
        this.eventText += `${event.type} from ${event.detail.ZGTarget.localName}${NEWLINE}`;
        this.eventText += `${JSON.stringify(event.detail.ZGData)}${NEWLINE.repeat(2)}`;
      }
      else if (event.detail.ZGData) {
        this.eventText += `${event.type} from zing-grid ${NEWLINE}`;
        this.eventText += `${JSON.stringify(event.detail.ZGData)}${NEWLINE.repeat(2)}`;
      }
      else {
        console.log(event.type + ' from zing-grid');
        this.eventText += `${event.type} from zing-grid ${NEWLINE.repeat(2)}`;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#eventLog {
    background: black;
    color: white;
    width: 90%;
    min-height: 225px;
    padding: 10px;
    margin: 20px auto;
    font-family: monospace;
    line-height: 1.5;
    text-align: left;
}

.wordwrap { 
    white-space: pre-wrap;      /* CSS3 */   
    white-space: -moz-pre-wrap; /* Firefox */    
    white-space: -pre-wrap;     /* Opera <7 */   
    white-space: -o-pre-wrap;   /* Opera 7 */    
    word-wrap: break-word;      /* IE */
 }
</style>
