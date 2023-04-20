<script>

export default {
  name: 'A B C',
  props: {
    msg: String
  },
  directives: {},
  data() {
    let ddata = {
      aa: "1.5",
      bb: 1,
      cc: "hello",
    };if (this.$route.query.cc) {
      ddata.cc = this.$route.query.cc;
    }
    if (this.$route.query.ws) {
      ddata.aa = this.$route.query.ws;
    }
    if (this.$route.query.sf) {
      ddata.bb = this.$route.query.sf;
    }
    return ddata;
  },
  computed: {
  },
  mounted() {
  },
  watch: {
      cc(a, b) {
          this.updateUrl();
      },
      bb(a, b) {
          this.updateUrl();
      },
      aa(a, b) {
          this.updateUrl();
      }
  },
  methods: {
      updateUrl() {
          router.push({
              path: '/',
              query: {
                  bb: this.bb,
                  aa: this.aa,
                  cc: this.cc
              }
          })
      },
    allData() {
      return this;
    },
  }
}
</script>

<template>
  <div>
    <span>Field AA:</span>&nbsp;&nbsp;
    <input id="OnePointFive" type="radio" :value="1.5" v-model="aa">
    <label for="OnePointFive">1.5</label>
    &nbsp;&nbsp;
    <input id="Two" type="radio" :value="2" v-model="aa">
    <label for="Two">2</label>
    &nbsp;&nbsp;
    <input id="Ten" type="radio" :value="10" v-model="aa">
    <label for="Ten">10</label>
    &nbsp;&nbsp;
    <input id="RT" type="radio" :value="'realtime'" v-model="aa">
    <label for="RT">RT</label>
    <br>
    <span>Scale Factor:</span>&nbsp;&nbsp;
    <input id="scalep1" type="radio" :value=".1" v-model="bb">
    <label for="scalep1">.1</label>
    &nbsp;&nbsp;
    <input id="scalep5" type="radio" :value=".5" v-model="bb">
    <label for="scalep5">.5</label>
    &nbsp;&nbsp;
    <input id="scale1" type="radio" :value="1" v-model="bb">
    <label for="scale1">1</label>
    &nbsp;&nbsp;
    <input id="scale5" type="radio" :value="5" v-model="bb">
    <label for="scale5">5</label>
    &nbsp;&nbsp;
    <input id="scale10" type="radio" :value="10" v-model="bb">
    <label for="scale10">10</label>
    &nbsp;&nbsp;
    <input id="scale50" type="radio" :value="50" v-model="bb">
    <label for="scale50">50</label>
    &nbsp;&nbsp;
    <input id="scale100" type="radio" :value="100" v-model="bb">
    <label for="scale100">100</label>
  </div>

  <br>

  <div>
    <pre>
          data:
          {{ JSON.stringify(allData(), null, 3) }}
    </pre>
  </div>
</template>

<style scoped>
</style>