window.broccoliFieldLpCssPadding = function(broccoli){
	var $ = require('jquery');

	/**
	 * データを正規化する (Client Side)
	 * このメソッドは、同期的に振る舞います。
	 */
	this.normalizeData = function( fieldData, mode ){
		// 編集画面用にデータを初期化。
		var rtn = fieldData;
		if(!rtn || typeof(rtn) != typeof({})){
			rtn = {};
		}
		if(typeof(rtn.top) != typeof('')){
			rtn.top = '';
		}
		if(typeof(rtn.right) != typeof('')){
			rtn.right = '';
		}
		if(typeof(rtn.bottom) != typeof('')){
			rtn.bottom = '';
		}
		if(typeof(rtn.left) != typeof('')){
			rtn.left = '';
		}
		return rtn;
	}

	/**
	 * プレビュー用の簡易なHTMLを生成する (Client Side)
	 * InstanceTreeViewで利用する。
	 */
	this.mkPreviewHtml = function( fieldData, mod, callback ){
		var rtn = '';
		new Promise(function(rlv){rlv();})
			.then(function(){ return new Promise(function(rlv, rjt){
				// サーバーサイドの bind() に相当する処理
				if(typeof(fieldData) == typeof({})){
					rtn += fieldData.top;
					rtn += ' '+fieldData.right;
					rtn += ' '+fieldData.bottom;
					rtn += ' '+fieldData.left;
				}else{
					rtn = 'no data';
				}
				rlv();

			}); })
			.then(function(){ return new Promise(function(rlv, rjt){
				callback( rtn );
			}); })
		;
		return this;
	}

	/**
	 * エディタUIを生成 (Client Side)
	 */
	this.mkEditor = function( mod, data, elm, callback ){
		if(!data || typeof(data) != typeof({})){
			data = {};
		}
		if(typeof(data.top) != typeof('')){
			data.top = '';
		}
		if(typeof(data.right) != typeof('')){
			data.right = '';
		}
		if(typeof(data.bottom) != typeof('')){
			data.bottom = '';
		}
		if(typeof(data.left) != typeof('')){
			data.left = '';
		}
		var $rtn = $('<div>');
		$rtn
			.append( $('<input class="form-control">')
				.attr({
					"name": mod.name+'__top'
				})
				.val(data.top || '')
				.css({'width':'5em'})
			)
			.append( $('<input class="form-control">')
				.attr({
					"name": mod.name+'__right'
				})
				.val(data.right || '')
				.css({'width':'5em'})
			)
			.append( $('<input class="form-control">')
				.attr({
					"name": mod.name+'__bottom'
				})
				.val(data.bottom || '')
				.css({'width':'5em'})
			)
			.append( $('<input class="form-control">')
				.attr({
					"name": mod.name+'__left'
				})
				.val(data.left || '')
				.css({'width':'5em'})
			)
		;
		$(elm).html($rtn);

		new Promise(function(rlv){rlv();}).then(function(){ return new Promise(function(rlv, rjt){
			callback();
		}); });
		return this;
	}

	/**
	 * エディタUIで編集した内容を検証する (Client Side)
	 */
	this.validateEditorContent = function( elm, mod, callback ){
		var errorMsgs = [];
		// errorMsgs.push('エラーがあります。');
		new Promise(function(rlv){rlv();}).then(function(){ return new Promise(function(rlv, rjt){
			callback( errorMsgs );
		}); });
		return this;
	}

	/**
	 * エディタUIで編集した内容を保存 (Client Side)
	 */
	this.saveEditorContent = function( elm, data, mod, callback, options ){
		options = options || {};
		options.message = options.message || function(msg){};//ユーザーへのメッセージテキストを送信
		var $dom = $(elm);
		var rtn = {};
		rtn.top = $dom.find('input[name='+mod.name+'__top]').val();
		rtn.right = $dom.find('input[name='+mod.name+'__right]').val();
		rtn.bottom = $dom.find('input[name='+mod.name+'__bottom]').val();
		rtn.left = $dom.find('input[name='+mod.name+'__left]').val();
		rtn = JSON.parse( JSON.stringify(rtn) );

		new Promise(function(rlv){rlv();}).then(function(){ return new Promise(function(rlv, rjt){
			callback(rtn);
		}); });
		return this;
	}

}
