<template>
  <div>
    <div class="form-group"  >
      <label>{{items.name}}</label><i :class="validClass"></i>
      <input type="text"
             class="form-control"
             :value="items.value"
             @input="inputvalue"

      >
    </div>
  </div>
</template>

<script>
    export default {
      props: ['items'],
      data(){
        return {


        }
      },
      updated(){
        this.$emit('changevalid', this.isValid)
      },
      methods: {
        inputvalue(e){

          this.$emit('changedata', e.target.value);
        }
      },
      computed: {
        isValid(){
          return this.items.pattern.test(this.items.value)
        },
        validClass(){
          if(this.items.isCheked){
            return this.items.isValid?
              'fa fa-check-circle' :
              'fa fa-exclamation-triangle';
          }

        }
      },


    }


</script>

<style scoped>
.fa-check-circle{
  color: green;
  margin-left: 5px;
}

.fa-exclamation-triangle{
  color: red;
  margin-left: 5px;
}
</style>
