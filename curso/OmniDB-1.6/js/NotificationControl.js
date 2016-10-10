/*
Copyright 2016 The OmniDB Team

This file is part of OmniDB.

OmniDB is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

OmniDB is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with OmniDB. If not, see http://www.gnu.org/licenses/.
*/

function checkSessionMessage() {
	execAjax('Connections.aspx/CheckSessionMessage',
        null,
        function(p_return) {
          if (p_return.v_data!='')
          	showAlert(p_return.v_data);
        },
        null,
    'box');

}

function showError(p_message) {
	document.getElementById('div_error_msg').innerHTML = '<img src="images/error.png"/ style="display: block; margin-left: auto; margin-right: auto;"><br/>' + p_message;
	$('#div_error').show();
}

function hideError() {
	$('#div_error').hide();
	document.getElementById('div_error_msg').innerHTML = '';
}


function showAlert(p_info)
{
	var v_div_text = document.createElement('div');
	v_div_text.className = 'div_alert_text';
	v_div_text.innerHTML = p_info;

	var v_div_buttons = document.createElement('div');
	v_div_buttons.className = 'div_alert_buttons';

	var v_button = document.createElement('button');
	v_button.innerHTML = 'Ok';
	v_button.onclick = function() {
		document.getElementById('div_alert_content').innerHTML = '';
		$('#div_alert').hide();
	};

	v_div_buttons.appendChild(v_button);

	document.getElementById('div_alert_content').innerHTML = '';

	document.getElementById('div_alert_content').appendChild(v_div_text);
	document.getElementById('div_alert_content').appendChild(v_div_buttons);

	$('#div_alert').show();

	v_button.focus();
}


function clickConfirmCancel() {

        $('#div_alert').hide();

}

function showConfirm(p_info,p_funcYes)
{

	var v_div_text = document.createElement('div');
	v_div_text.className = 'div_alert_text';
	v_div_text.innerHTML = p_info;

	var v_div_buttons = document.createElement('div');
	v_div_buttons.className = 'div_alert_buttons';

	var v_button = document.createElement('button');
	v_button.innerHTML = 'Ok';
	v_button.onclick = function() {
		clickConfirmCancel();
		p_funcYes();
	};
	v_div_buttons.appendChild(v_button);

	v_button = document.createElement('button');
	v_button.innerHTML = 'Cancel';
	v_button.onclick = function() {
		clickConfirmCancel();
	};
	v_div_buttons.appendChild(v_button);

	document.getElementById('div_alert_content').innerHTML = '';

	document.getElementById('div_alert_content').appendChild(v_div_text);
	document.getElementById('div_alert_content').appendChild(v_div_buttons);

	$('#div_alert').show();

	v_button.focus();

}

function showConfirm2(p_info,p_funcYes,p_funcNo)
{

	var v_div_text = document.createElement('div');
	v_div_text.className = 'div_alert_text';
	v_div_text.innerHTML = p_info;

	var v_div_buttons = document.createElement('div');
	v_div_buttons.className = 'div_alert_buttons';

	var v_button = document.createElement('button');
	v_button.innerHTML = 'Yes';
	v_button.onclick = function() {
		clickConfirmCancel();
		p_funcYes();
	};
	v_div_buttons.appendChild(v_button);

	v_button = document.createElement('button');
	v_button.innerHTML = 'No';
	v_button.onclick = function() {
		clickConfirmCancel();
		p_funcNo();
	};
	v_div_buttons.appendChild(v_button);

	v_button = document.createElement('button');
	v_button.innerHTML = 'Cancel';
	v_button.onclick = function() {
		clickConfirmCancel();
	};
	v_div_buttons.appendChild(v_button);

	document.getElementById('div_alert_content').innerHTML = '';

	document.getElementById('div_alert_content').appendChild(v_div_text);
	document.getElementById('div_alert_content').appendChild(v_div_buttons);

	$('#div_alert').show();


}
