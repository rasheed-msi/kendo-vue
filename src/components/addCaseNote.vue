<template>
	<div id="add-case-note">
		<h3>{{AddCaseNoteHeading}}</h3>
		<!-- <kendo-toolbar  @click="onSubmit">
			<kendo-toolbar-item type="button" text="Save"></kendo-toolbar-item>
		</kendo-toolbar> -->
		<form id="addCaseNoteForm" ref="addCaseNoteForm" v-kendo-validator @submit.prevent="onSubmit">
			<div class="form-group col-lg-10">
	            <label for="title"></label>
	            <input type="title" class="form-control k-textbox" id="title" name="title" required validationMessage="Title is required" placeholder="Enter title" />
	            <span class="k-invalid-msg" data-for="title"></span>
	        </div>
			<div class="form-group col-lg-10">
				<label for="contnet"></label>
	            <kendo-editor :resizable-content="true" id="content" required
	            validationMessage="Content is required"
	            placeholder="Enter Content"
                 :resizable-toolbar="true"
                 style="height:280px"
                 rows="10"
                 cols="30">
			    </kendo-editor>
	            <span class="k-invalid-msg" data-for="content"></span>
                 <!-- :value="htmlText" -->
	        </div>

	        <div class="form-group col-lg-10">
            <label for="exampleInputFile">File input</label>
            <kendo-upload
            	id="upload" required
            	validationMessage="Upload is required"
		    	:async-save-url="'http://localhost/kendoui-vue/src/uploads/upload.php'"
		    	:async-remove-url="'http://localhost/kendoui-vue/src/uploads/remove.php'"
		    	:async-auto-upload="true"
		    	:async-with-credentials="false">
			</kendo-upload>
            <p class="help-block">Upload files</p>
            <span class="k-invalid-msg" data-for="upload"></span>
        </div>
        <div class="form-group col-lg-10">
            <button class="k-button k-primary" type="submit">Submit</button>
        </div>
		</form>
	</div>
</template>
<script>

import Vue from 'vue'
import { Validator, ValidatorInstaller } from '@progress/kendo-validator-vue-wrapper'
import '@progress/kendo-ui'
// import '@progress/kendo-theme-default/dist/all.css'

import { Editor } from '@progress/kendo-editor-vue-wrapper'
import { EditorTool } from '@progress/kendo-editor-vue-wrapper'
import { EditorInstaller } from '@progress/kendo-editor-vue-wrapper'

Vue.use(ValidatorInstaller)
Vue.use(EditorInstaller)

Vue.use(EditorInstaller)

	export default {
		data(){
			return {
				AddCaseNoteHeading: "Add Case Note"
			}
		},
		methods:{
			onSubmit: function(){
				console.log("case note form submitted")
			}
		},
		components: {
		    Editor
		 }
	}	
</script>
