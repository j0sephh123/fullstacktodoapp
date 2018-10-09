<template>
<div>
<div class="title is-size-2">{{item.name}}</div><hr>
<div>
  <button 
    class="button"
    @click="showEdit = !showEdit"
    >Show/Hide edit form
  </button> 
  
  <div v-show="showEdit">
    <div class="column is-4">
      name<input type="text" class="input" v-model="name"><br>
      url<input type="text" class="input" v-model="url"><br>
      description<input type="text" class="input" v-model="description">
      <button
        @click="editItem({id: item._id, name, url, description})"
        class="button">Click</button>
    </div>
  </div> 
</div><hr> <!-- edit form -->

<div>
  <button
    class="button"
    @click="showComments = !showComments">
    Show/Hide comments
  </button>

  <div v-show="showComments">

    <div v-for="comment in item.comments" :key="comment._id">
      {{comment.comment}}
      <router-link 
        tag="button"
        class="button"
        :to="{path: '/comments/' + comment._id + '/edit'}">Edit
      </router-link> <!-- edit link -->

      <button
        class="button"
        @click="deleteComment({id: comment._id})">
        Delete comment
      </button> <!-- delete comment -->
    </div>

    <div class="column is-6">
      <div class="control">
        <textarea type="text" class="textarea" v-model="comment"></textarea>
      </div>
      <button
        class="button"
        @click="postComment({comment})"
        >Add a comment</button>
    </div><hr> <!-- add a comment -->
  </div>
</div>
  
</div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  data() {
    return {
      showEdit: false,
      showComments: true,
      showEditComment: false,
      name: '',
      url: '',
      description: '',
      comment: '',
    }
  },
  methods: {
    ...mapActions({
      editItem: 'items/editItem',
      postComment: 'items/postComment',
      deleteComment: 'items/deleteComment',
    })
  },
  computed: {
    ...mapGetters({
      item: 'items/oneItem',
    })
  },
  async mounted(){
    await this.$store.dispatch('items/getOneItem', {id: this.$route.params.id});

  },
  watch: {
    
  }
}
</script>
