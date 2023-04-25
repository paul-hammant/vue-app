<script>

    export default {
      
        name: 'A B C',
        props: {
            msg: String,
        },
        directives: {},
        data() {
            return {
                aaOptions: [
                    { label: '1.5', value: 1.5, id: 'OnePointFive' },
                    { label: '2', value: 2, id: 'Two' },
                    { label: '10', value: 10, id: 'Ten' },
                    { label: 'RT', value: 'realtime', id: 'RT' },
                ],
                bbOptions: [
                    { label: '.1', value: 0.1, id: 'scalep1' },
                    { label: '.5', value: 0.5, id: 'scalep5' },
                    { label: '1', value: 1, id: 'scale1' },
                    { label: '5', value: 5, id: 'scale5' },
                    { label: '10', value: 10, id: 'scale10' },
                    { label: '50', value: 50, id: 'scale50' },
                    { label: '100', value: 100, id: 'scale100' },
                ],
                aa: 1.5,
                bb: 1,
                cc: 'hello',
            }
        },
        computed: {
            query() {
                return {
                    bb: this.bb,
                    aa: this.aa,
                    cc: this.cc,
                }
            },
        },
        mounted() {
          this.updateDataFromUrlQueryParams()
          
          //when change query params update data
          this.$router.afterEach((to, from) => {
            this.updateDataFromUrlQueryParams()
          }); 
        },
        methods: {
            updateDataFromUrlQueryParams(){
              //update data when component mount checking the route query
              this.aa = this.$route.query.aa || 1.5
              this.bb = this.$route.query.bb || 1
              this.cc = this.$route.query.cc || 'hello'
            },
            async updateUrl() {
              return this.$router.push({
                  path: '/',
                  query: {
                      bb: this.bb,
                      aa: this.aa,
                      cc: this.cc,
                  },
              })
            },
            updateAA(value){
              this.aa = value
              this.updateUrl()
            },
            updateBB(value){
              this.bb = value
              this.updateUrl()
            }
        },
    }
</script>

<template>
    <div>
        <span>Field AA:</span>&nbsp;&nbsp;
        <div class="input" v-for="(input, i) in aaOptions" :key="'aa' + i">
          <input :id="input.id" type="radio" name="aaoption" :value="input.value" @click="updateAA(input.value)" :checked="input.value == aa"/>
          <label :for="input.id">{{ input.label }}</label>
          &nbsp;&nbsp;
        </div>
        <br />
        <span>Scale Factor:</span>&nbsp;&nbsp;
        <div class="input" v-for="(input, i) in bbOptions" :key="'bb' + i">
          <input :id="input.id" type="radio" name="bboption" :value="input.value" @click="updateBB(input.value)" :checked="input.value == bb"/>
          <label :for="input.id">{{ input.label }}</label>
          &nbsp;&nbsp;
        </div>
    </div>
    <br />

    <div>
        <pre>
          data:
          {{ JSON.stringify(query, null, 3) }}
    </pre
        >
    </div>
</template>

<style scoped>
  .input{
    display: inline-block;
  }
</style>
