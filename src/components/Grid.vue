<template>
	<div id="grid">
		<kendo-datasource
            ref="datasource"
            :pageSize="15"
            :transportRead="'/static/api/color.json'"
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
	Vue.use(KendoGridInstaller)
	Vue.use(KendoDataSourceInstaller)
	export default {
		  data () {
		    return {
		      schema:{
		        model:{
		            fields: {
		                age: { type: "number" },
		                status: {type: "string"}
		            }
		        }
		    },
		      filterable: {
		          mode: "row"
		      },
		      columns: [
		            { field: "name", title: "Name", filterable: {
		            cell: {
		                enabled: true,
		                delay: 1500,
		            }
		        } },
		            { field: "age", title: "Age", filterable: {
		            cell: {
		                enabled: true,
		                delay: 1500,
		                showOperators: false,
		            }
		        } },
		            { field: "desc", title:"Desc", filterable: {
		            cell: {
		                enabled: true,
		                delay: 1500,
		                // inputWidth: '300',
		                suggestionOperator: "contains",
		                showOperators: false,
		                operator: "contains",
		                minLength: 3
		            }
		        } },
		            { field: "country", width: "Country", filterable: {
		            cell: {
		                enabled: false,
		                delay: 1500,
		                filterable: {
		                    showOperators: false,
		                    // search: true,
		                    // checkAll: false
		                }
		            }
		        } },
		        { field: "status", width: "Status", filterable: {
		            cell: {
		                enabled: true,
		                delay: 1500,
		                filterable: {
		                    multi: true,
		                    dataSource: [{status: "true"},{status: "false"}]
		                }
		            }
		        } },        
		        ],
		    }
		  }
	}
</script>