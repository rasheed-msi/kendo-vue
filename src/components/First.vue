<template>
	<div id="first">
		<h2>{{title}}</h2>
		<!-- <form action=""> -->
			<p v-for="input in inputs">
				<label :for="input.field">{{input.field | capitalize}}
					<input :type="input.type" :name="input.field" v-model="input.model" />
				</label>
			</p>
			<p><button v-on:click="formSubmit">Submit</button></p>
		<!-- </form> -->
	</div>
</template>
<script>
export default {
  name: 'First',
  data () {
    return {
      title: 'User Submission',
      inputs: [                 
        {
          type: 'text',
          field: 'name',
          model: 'Rasheed'
        },
        {
          type: 'number',
          field: 'age',
          model: 28
        },
        {
          type: 'email',
          field: 'email',
          model: 'rasheed@cloudiumtech.in'
        },
        {
          type: 'password',
          field: 'password',
          model: 'password'
        }
      ]
    }
  },
  methods: {
    formSubmit: function () {
      alert('here i am')
    }
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
}
</script>