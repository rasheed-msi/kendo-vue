<template>
	<div id="form">
		<form id="ticketsForm" ref="myForm" v-kendo-validator @submit.prevent="onSubmit">
        <div class="form-group col-xs-10 col-sm-4 col-md-4 col-lg-4">
            <label for="email">Email address</label>
            <input type="email" class="form-control k-textbox" id="email" name="email" required validationMessage="Email is required" placeholder="Enter email" />
            <span class="k-invalid-msg" data-for="email"></span>
        </div>
        <div class="form-group col-xs-10 col-sm-4 col-md-4 col-lg-4">
            <label for="name">Name</label>
            <input type="text" class="form-control k-textbox" id="name" name="name" required validationMessage="Name is required" placeholder="Enter Name" />
            <span class="k-invalid-msg" data-for="name"></span>
        </div>
        <div class="clearfix"></div>
        <div class="form-group col-xs-10 col-sm-4 col-md-4 col-lg-4">
            <label for="password">Password</label>
            <input type="password" class="form-control k-textbox" id="password" name="password" required autocomplete placeholder="Password" />
            <span class="k-invalid-msg" data-for="password"></span>
        </div>
        <div class="form-group col-xs-10 col-sm-4 col-md-4 col-lg-4">
            <label for="confirm_password">Confirm Password</label>
            <input type="password" class="form-control k-textbox" id="confirm_password" name="confirm_password" required autocomplete  placeholder="Confirm Password" />
            <span class="k-invalid-msg" data-for="confirm_password"></span>
        </div>
        <div class="clearfix"></div>
        <div class="form-group col-xs-10 col-sm-10 col-md-4 col-lg-4">
            <label for="exampleInputFile">File input</label>
            <kendo-upload
		    	:async-save-url="'http://localhost/kendoui-vue/src/uploads/upload.php'"
		    	:async-remove-url="'http://localhost/kendoui-vue/src/uploads/remove.php'"
		    	:async-auto-upload="true"
		    	:async-with-credentials="false">
			</kendo-upload>
            <p class="help-block">Upload files</p>
        </div>
        <div class="col-xs-10 col-sm-10 col-md-4 col-lg-4">
            <label for="gender">
                <input type="radio" name="gender" />&nbsp;Male&nbsp;
                <input type="radio" name="gender" />&nbsp;Female&nbsp;
                <input type="radio" name="gender" />&nbsp;Other&nbsp;
            </label>
        </div>
        <div class="clearfix"></div>
        <div class="col-xs-10 col-sm-4 col-md-4 col-lg-4">
            <button class="k-button k-primary" type="submit">Submit</button>
        </div>
    </form>
    <div class="clearfix"></div>
	</div>
</template>
<script>
	import Vue from 'vue'
	import { Validator, ValidatorInstaller } from '@progress/kendo-validator-vue-wrapper'
	Vue.use(ValidatorInstaller)
	export default {
		methods: {
			onSubmit: function (ev) {
	            var validator = this.kendoValidator
	            var status = kendo.jQuery('.status')
	            if (validator.validate()) {
	                status.text('Hooray! Your tickets has been booked!')
	                  .removeClass('invalid')
	                  .addClass('valid')
	            } else {
	                status.text('Oops! There is invalid data in the form.')
	                  .removeClass('valid')
	                  .addClass('invalid')
	            }
	        }
		}
	}
</script>

<style>
    .confirm {
        padding-top: 1em;
    }

    .valid {
        color: green;
    }

    .invalid {
        color: red;
    }

    .k-tooltip-validation .k-warning {
        display: none;
    }
</style>