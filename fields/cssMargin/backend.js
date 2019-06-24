module.exports = function(broccoli){
	var utils79 = require('utils79');

	/**
	 * データをバインドする
	 */
	this.bind = function( fieldData, mode, mod, callback ){
		var rtn = '';
		if( typeof(fieldData)===typeof({}) ){
			if( typeof(fieldData.top)===typeof('') ){
				rtn += 'margin-top:'+utils79.toStr(fieldData.top)+';';
			}
			if( typeof(fieldData.right)===typeof('') ){
				rtn += 'margin-right:'+utils79.toStr(fieldData.right)+';';
			}
			if( typeof(fieldData.bottom)===typeof('') ){
				rtn += 'margin-bottom:'+utils79.toStr(fieldData.bottom)+';';
			}
			if( typeof(fieldData.left)===typeof('') ){
				rtn += 'margin-left:'+utils79.toStr(fieldData.left)+';';
			}
		}

		// setTimeout(function(){
			callback(rtn);
		// }, 0);
		return;
	}

}
