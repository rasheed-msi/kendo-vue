<template>
	<div id="add-message">
		<h3>{{AddMessageHeading}}</h3>
		<!-- <kendo-toolbar @click="onSubmit">
			<kendo-toolbar-item type="button" text="Compose"></kendo-toolbar-item>
		</kendo-toolbar> -->
		<form id="AddMessageForm" ref="AddMessageForm" v-kendo-validator @submit.prevent="onSubmit">
			<div class="form-group col-lg-10">
	            <label for="from"></label>
	            <input type="from" class="form-control k-textbox" id="from" name="from" required validationMessage="From Address is required" placeholder="Enter From Address" />
	            <span class="k-invalid-msg" data-for="from"></span>
	        </div>
			<div class="form-group col-lg-10">
	            <label for="to"></label>
	            <input type="to" class="form-control k-textbox" id="to" name="to" required validationMessage="To Address is required" placeholder="Enter To Address" />
	            <span class="k-invalid-msg" data-for="to"></span>
	        </div>
			<div class="form-group col-lg-10">
	            <label for="cc"></label>
	            <input type="cc" class="form-control k-textbox" id="cc" name="cc" required validationMessage="CC is required" placeholder="Enter CC" />
	            <span class="k-invalid-msg" data-for="cc"></span>
	        </div>
	        <div class="form-group col-lg-10">
	            <label for="bcc"></label>
	            <input type="bcc" class="form-control k-textbox" id="bcc" name="bcc" required validationMessage="BCC is required" placeholder="Enter BCC" />
	            <span class="k-invalid-msg" data-for="bcc"></span>
	        </div>
			<div class="form-group col-lg-10">
	            <label for="subject"></label>
	            <input type="subject" class="form-control k-textbox" id="subject" name="subject" required validationMessage="Subject is required" placeholder="Enter Subject" />
	            <span class="k-invalid-msg" data-for="subject"></span>
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

<!-- 	        <div class="form-group col-xs-10 col-sm-10 col-md-4 col-lg-4">
            <label for="exampleInputFile">File input</label>
            <kendo-upload
		    	:async-save-url="'http://localhost/kendoui-vue/src/uploads/upload.php'"
		    	:async-remove-url="'http://localhost/kendoui-vue/src/uploads/remove.php'"
		    	:async-auto-upload="true"
		    	:async-with-credentials="false">
			</kendo-upload>
            <p class="help-block">Upload files</p>
        </div> -->
        <div class="col-xs-10 col-sm-4 col-md-4 col-lg-4">
            <button class="k-button k-primary" type="submit">Compose</button>
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

	export default {
		data(){
			return {
				AddMessageHeading: "Add Message"
			}
		},
		methods:{
			onSubmit: function(){
				console.log("message form submitted")
			},
			tbSubmit: function(){
				document.getElementById('AddMessageForm').submit();
			}
		},
		components: {
		    Editor
		 }
	}	
</script>
