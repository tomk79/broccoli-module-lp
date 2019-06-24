module.exports = function(broccoli){
	var utils79 = require('utils79');

	/**
	 * データをバインドする
	 */
	this.bind = function( fieldData, mode, mod, callback ){
		var rtn = '';
		if( typeof(fieldData)===typeof({}) ){
			if( typeof(fieldData.top)===typeof('') ){
				rtn += 'padding-top:'+utils79.toStr(fieldData.top)+';';
			}
			if( typeof(fieldData.right)===typeof('') ){
				rtn += 'padding-right:'+utils79.toStr(fieldData.right)+';';
			}
			if( typeof(fieldData.bottom)===typeof('') ){
				rtn += 'padding-bottom:'+utils79.toStr(fieldData.bottom)+';';
			}
			if( typeof(fieldData.left)===typeof('') ){
				rtn += 'padding-left:'+utils79.toStr(fieldData.left)+';';
			}
		}

		// setTimeout(function(){
			callback(rtn);
		// }, 0);
		return;
	}

}
