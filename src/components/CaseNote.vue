<template>
	<div id="case-note">
		<h3>{{caseNoteHeading}}</h3>
		<kendo-toolbar  @click="AddCaseNote('/add-casenote')">
			<kendo-toolbar-item type="button" text="Add Case Note"></kendo-toolbar-item>
		</kendo-toolbar>
		<kendo-datasource
            ref="datasource"
            :pageSize="15"
            :transportRead="'/static/api/casenotelist.json'"
            :schema="schema">      
        </kendo-datasource>
        <kendo-grid
            :height="900"
            :dataSourceRef="'datasource'"
            :groupable='true'
            :sortable='true'
            :selectable='true'
            :editable='true'
            :pageable-refresh='true'
            :filterable='filterable'
            :columns='columns'
            :pageable-button-count="5">
        </kendo-grid> 
	</div>
</template>
<script>
	import Vue from 'vue'
	import kendo from '@progress/kendo-ui';
	import { KendoGridColumn, KendoGrid, KendoGridInstaller } from '@progress/kendo-grid-vue-wrapper'
	import { KendoDataSource, KendoDataSourceInstaller } from '@progress/kendo-datasource-vue-wrapper'
	import { KendoButtonGroup, KendoButtonsInstaller } from '@progress/kendo-buttons-vue-wrapper'
	Vue.use(KendoGridInstaller)
	Vue.use(KendoDataSourceInstaller)
	Vue.use(KendoButtonsInstaller)
	export default {
		  data () {
		    return {
	    	  caseNoteHeading: "Case Note List",
		      schema:{
		      	data: "data",
		        model:{
		            fields: {
		                type : { type: 'string'},
						from : { type: 'string'},
						subject : { type: 'string'},
						recieved : { type: 'string'},
						indent : { type: 'string'},
						priority : { type: 'string'},
						file_tag : { type: 'string'},
		            }
		        }
		    },
		    filterable: {
		        mode: "row"
		    },
		      columns: [
				{ field: "type", title: "Type", filterable: {
				    cell: {
				        enabled: true,
				        delay: 1500,
				    }
				} },
				{ field: "from", title: "From", filterable: {
				    cell: {
				        enabled: true,
				        delay: 1500,
				        showOperators: false,
				    }
				} },
				{ field: "subject", title: "Subject", filterable: {
				    cell: {
				        enabled: true,
				        delay: 1500,
				    }
				} },
				{ field: "recieved", title: "Recieved", filterable: {
				    cell: {
				        enabled: true,
				        delay: 1500,
				        showOperators: false,
				    }
				} },
				{ field: "indent", title: "Indent", filterable: {
				    cell: {
				        enabled: true,
				        delay: 1500,
				    }
				} },
				{ field: "priority", title: "Priority", filterable: {
				    cell: {
				        enabled: true,
				        delay: 1500,
				        showOperators: false,
				    }
				} },
				{ field: "file_tag", title: "File Tag", filterable: {
				    cell: {
				        enabled: true,
				        delay: 1500,
				    }
				} }]
		    }
		  },
		  methods:{
		  	AddCaseNote:function(slug){
		  		router.push({ path: slug })
		  	}
		  }
	}
</script>