<template>
	<div id="custom">
		<div class="row">
					<!--tree-->
					<div class="col-md-12">
					    <!--Section heading-->
					    <h3 class="py-5 font-weight-bold">{{treeLabel}}</h3>
					    <!--Section description-->
					    <p class="px-5 mb-5 pb-3 lead grey-text">{{treeDesc}}</p>
			           <kendo-treeview :dataSource="dataSource"></kendo-treeview>
					</div>
					<!--tree-->
		</div>
		<div class="row">
					<!--tree-->
					<div class="col-md-12">
					    <!--Section heading-->
					    <h3 class="py-5 font-weight-bold">{{treeListLabel}}</h3>
					    <!--Section description-->
					    <p class="px-5 mb-5 pb-3 lead grey-text">{{treeListDesc}}</p>
			           <kendo-treelist :data-source="localData"
	                    :filterable="true"
	                    :sortable="true">
				        <kendo-treelist-column :field="'id'" :width="50"></kendo-treelist-column>
				        <kendo-treelist-column :field="'Name'" :width="140"></kendo-treelist-column>
				        <kendo-treelist-column :field="'Position'" :width="140"></kendo-treelist-column>
				    </kendo-treelist>
					</div>
					<!--tree-->
		</div>
		<div class="row">
			<!--datepicker-->
			<div class="col-md-6">
			    <!--Section heading-->
			    <h3 class="py-5 font-weight-bold">{{datePickerLabel}}</h3>
			    <!--Section description-->
			    <p class="px-5 mb-5 pb-3 lead grey-text">{{datePickerDesc}}</p>
			    <kendo-datepicker
					:min="minDate"
					:max="maxDate"
					:value="currentDate"
					:format="'MM/dd/yyyy'">
				</kendo-datepicker>
			</div>
			<!--datepicker-->
			<!--file upload-->
			<div class="col-md-6">
			    <!--Section heading-->
			    <h3 class="py-5 font-weight-bold">{{uploadLabel}}</h3>
			    <!--Section description-->
			    <p class="px-5 mb-5 pb-3 lead grey-text">{{uploadDesc}}</p>
			    <kendo-upload
			    	:async-save-url="'http://localhost/kendoui-vue/src/uploads/upload.php'"
			    	:async-remove-url="'http://localhost/kendoui-vue/src/uploads/remove.php'"
			    	:async-auto-upload="true"
			    	:async-with-credentials="false">
				</kendo-upload>
			</div>
			<!--file upload-->
		</div>
	</div>
</template>
<script>
	import Vue from 'vue'
	// import '@progress/kendo-theme-default/dist/all.css'
	import {Datepicker, DateinputsInstaller} from '@progress/kendo-dateinputs-vue-wrapper'
	import {Upload, UploadInstaller} from '@progress/kendo-upload-vue-wrapper'
	import { DataSource, HierarchicalDataSource, GanttDataSource, GanttDependencyDataSource, PivotDataSource, SchedulerDataSource, TreeListDataSource, DataSourceInstaller } from '@progress/kendo-datasource-vue-wrapper';
	import { TreeView, TreeViewInstaller } from '@progress/kendo-treeview-vue-wrapper';
	import { TreeList, TreeListInstaller } from '@progress/kendo-treelist-vue-wrapper';

	Vue.use(DateinputsInstaller)
	Vue.use(UploadInstaller)
	Vue.use(DataSourceInstaller)
	Vue.use(TreeViewInstaller)
	Vue.use(TreeListInstaller)

	export default {
		data(){
			return {
				treeLabel : 'Tree view',
				treeListLabel : 'Tree List',
				datePickerLabel : 'Date Picker',
				minDate: new Date(1900,1,1),
				maxDate: new Date(2019,12,31),
				currentDate: new Date(2018,2,22),
				uploadLabel: 'Upload file(s)',
				treeListDesc : 'Tree List',
				treeDesc : 'Tree view',
				datePickerDesc : 'Date Picker',
				uploadDesc: 'Upload file(s)',
				localData: [
	                { id: 1, parentId: null, Name: "Jane Smith", Position: "CEO" },
	                { id: 2, parentId: 1,    Name: "Alex Sells", Position: "EVP Sales" },
	                { id: 3, parentId: 1,    Name: "Bob Price",  Position: "EVP Marketing" }
	            ],
	            dataSource: [
		            {
		                text: "Item 1",
		                items: [
		                    { text: "Item 1.1" },
		                    { text: "Item 1.2" }
		                ]
		            },
		            { text: "Item 2" }
		        ]
			}
		},
		created(){

		},
		methods: {

		}
	}
</script>