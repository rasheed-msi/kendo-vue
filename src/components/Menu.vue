<template>
	<div id="menu-sidebar">
		<kendo-menu 
		 @select="onSelect"
		 :orientation="'vertical'">
		    <li :class="{'k-state-selected': isGrid}">Grid</li>
		    <li :class="{'k-state-selected': isForm}">Form</li>
		    <li :class="{'k-state-selected': isCustom}">Custom</li>
		    <li :class="{'k-state-selected': isCN}">Case Notes</li>
		    <li :class="{'k-state-selected': isCL}">Client List</li>
		    <li :class="{'k-state-selected': isMessage}">Messages</li>
		</kendo-menu>
	</div>
</template>
<script>
	import Vue from 'vue'
	import kendo from '@progress/kendo-ui';
	import { Menu, MenuItem, ContextMenu, PanelBar, PanelBarItem, TabStrip, Splitter, SplitterPane, LayoutInstaller } from '@progress/kendo-layout-vue-wrapper';
	Vue.use(LayoutInstaller)
	export default {
		data(){
			return {
				isGrid: false,
				isForm: false,
				isCustom: false,
				isCN: false,
				isCL: false,
				isMessage: false
			};
			
		},
		created(){
			var slug = this.$route.path;
			this.configureClass(slug)

		},
		methods: {
	     	onSelect: function (e) {

	     		var childObj = jQuery(e.item.firstChild);
	            var currentItemText = childObj.text().trim();
	            var slug = currentItemText.replace(/\s+/g, '-').toLowerCase();
	            this.configureClass(slug)
	            jQuery(e.item).parent().find(".k-state-selected").removeClass('k-state-selected');
	            childObj.addClass('k-state-selected');
	            router.push({ path: slug })
	        },
	        configureClass: function (slug){
				switch(slug){
					case '/':
					  this.isGrid = true
					break
					case '/grid':
					  this.isGrid = true
					break
					case '/form':
					  this.isForm = true
					break
					case '/custom':
					  this.isCustom = true
					break
					case '/case-notes':
						this.isCN = true
					break
					case '/client-list':
						this.isCL = true
					break				
					case '/add-casenote':
						this.isCL = true
					break	
					case '/messages':
						this.isMessage = true
					break	
				}
	        }
		}
	}
</script>