<template>
<div class="column is-6">
  <div class="title">{{oneComment.comment}}</div>
  <textarea class="textarea" v-model="comment"></textarea>
  <button 
    @click="editComment({id: oneComment._id, comment})"
    class="button">Edit
  </button>
</div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  data() {
    return {
      comment: '',
    }
  },
  methods: {
    ...mapActions({
      editComment: 'items/editComment',
    })
  },
  computed: {
    ...mapGetters({
      oneComment: 'items/oneComment',
    })
  },
  async mounted(){
    await this.$store.dispatch('items/getOneComment', {id: this.$route.params.id});
  },
  watch: {
    
  }
}
</script>
