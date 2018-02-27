<template>
	<div id="message">
		<h3>{{messageHeading}}</h3>
		<kendo-toolbar  @click="AddMessage('/add-message')">
			<kendo-toolbar-item type="button" text="Compose"></kendo-toolbar-item>
		</kendo-toolbar>
		<kendo-datasource
            ref="datasource"
            :pageSize="15"
            :transportRead="'/static/api/message.json'"
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
	    	  messageHeading: "Message List",
		      schema:{
		      	data: "data",
		        model:{
		            fields: {
		                from : { type: 'string'},
						to : { type: 'string'},
						dateSend : { type: 'string'},
		            }
		        }
		    },
		    filterable: {
		        mode: "row"
		    },
		      columns: [
				{ field: "from", title: "From", filterable: {
				    cell: {
				        enabled: true,
				        delay: 1500,
				    }
				} },
				{ field: "to", title: "To", filterable: {
				    cell: {
				        enabled: true,
				        delay: 1500,
				        showOperators: false,
				    }
				} },
				{ field: "dateSend", title: "Date send", filterable: {
				    cell: {
				        enabled: true,
				        delay: 1500,
				    }
				} }]
		    }
		  },
		  methods:{
		  	AddMessage:function(slug){
		  		router.push({ path: slug })
		  	}
		  }
	}
</script>