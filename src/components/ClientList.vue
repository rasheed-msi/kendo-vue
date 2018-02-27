<template>
	<div id="client-list">
		<h3>{{clientListHeading}}</h3>
        <kendo-datasource
            ref="datasource"
            :page-size="15"
            :transport-read-url="'/static/api/clientlisting.json'"
            :transport-read-data-type="'json'"
            :type="'json'"
            :batch='true'
            :schema="schema">      
        </kendo-datasource>
        <kendo-grid
            :height="900"
            :dataSourceRef="'datasource'"
            :groupable='true'
            :sortable='true'
            :selectable='true'
            :editable='true'
            :pageable='true'
            :filterable='filterable'
            :columns='columns'>
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
	    	  clientListHeading: "Client List",
		      schema:{
		      	data: 'data',
		      	total: function(response) {
			        return response.data.length;
			    },
		        model:{
		            fields: {
		            	DisplayName: {type: 'string'},
		            	type_long: {type: 'string'},
		                last_login: {type: "string"},
		                datejoined: {type: 'string'},
		                status: {type: "string"},
		                datejoined: {type: "string"},
		                username: {type: 'string'},
		            }
		        }
		    },
		      filterable: {
		          mode: "row"
		      },
		      columns: [
	      			{ field: "DisplayName", title: "Client Name", width: "350px", encoded: false, filterable: {
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
					{ field: "type_long", title: "Type", filterable: {
		            cell: {
		                enabled: true,
		                delay: 1500,
		                showOperators: false,
		            }
		        } },
					{ field: "last_login", title: "Last Login", template: "#= last_login !== '' ? kendo.toString(new Date(Date.parse( last_login.replace(/[ap]m$/i, ''))), 'MM-dd-yyyy') : '' #", filterable: {
		            cell: {
		                enabled: true,
		                delay: 1500,
		                type: "date",
		                showOperators: false
		            }
		        } },
					{ field: "datejoined", title: "Registration Date", template: "#= datejoined !== '' ? kendo.toString(new Date(Date.parse( datejoined.replace(/[ap]m$/i, ''))), 'MM-dd-yyyy') : '' #",  filterable: {
		            cell: {
		                enabled: true,
		                delay: 1500,
		                type: "date",
		                showOperators: false,
		            }
		        } },		        
		        //     { field: "agency_group", title:"Age Group", filterable: {
		        //     cell: {
		        //         enabled: true,
		        //         delay: 1500,
		        //         showOperators: false,
		        //     }
		        // } },
		        	{ field: "status", title: "Login Status", filterable: {
		            cell: {
		                enabled: true,
		                delay: 1500,
		                filterable: {
		                    multi: true,
		                    dataSource: [{status: "Active"},{status: "Inactive"},{status: ""}]
		                }
		            }
		        } }, 
	            	{ field: "username", title: "Login Name", filterable: {
		            cell: {
		                enabled: true,
		                delay: 1500,
		            }
		        } },       
		        ],
		    }
		  }
	}
</script>




