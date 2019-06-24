<?php
namespace tomk79\broccoliFieldLp\fields;
class cssPadding extends \broccoliHtmlEditor\fieldBase{

	private $broccoli;

    /**
     * constructor
     */
    public function __construct($broccoli){
        $this->broccoli = $broccoli;
        parent::__construct($broccoli);
    }

	/**
	 * データをバインドする (Server Side)
	 */
	public function bind( $fieldData, $mode, $mod ){
		$rtn = '';
		if( is_array($fieldData) ){
			if( is_string(@$fieldData['top']) && strlen(@$fieldData['top']) ){
				$rtn .= 'padding-top:'.trim($fieldData['top']).';';
			}
			if( is_string(@$fieldData['right']) && strlen(@$fieldData['right']) ){
				$rtn .= 'padding-right:'.trim($fieldData['right']).';';
			}
			if( is_string(@$fieldData['bottom']) && strlen(@$fieldData['bottom']) ){
				$rtn .= 'padding-bottom:'.trim($fieldData['bottom']).';';
			}
			if( is_string(@$fieldData['left']) && strlen(@$fieldData['left']) ){
				$rtn .= 'padding-left:'.trim($fieldData['left']).';';
			}
		}
		return $rtn;
	}

}