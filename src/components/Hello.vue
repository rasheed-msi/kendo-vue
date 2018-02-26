<template>
  <div class="hello">
  <!-- <kendo-buttongroup>
    <kendo-buttongroup-button>Button 1</kendo-buttongroup-button>
    <kendo-buttongroup-button>Button 2</kendo-buttongroup-button>
    <kendo-buttongroup-button>Button 3</kendo-buttongroup-button>
  </kendo-buttongroup>    -->

  <div class="row">
      <div class="col-md-9">
          <kendo-datasource
            ref="datasource"
            :pageSize="15"
            :transportRead="'/static/color.json'"
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
      <div class="form">
        
      </div>
  </div>
  </div>
</template>

<script>
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
        menuOptions: {
        orientation: "vertical"
    }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
