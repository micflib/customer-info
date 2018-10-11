<?php
class ResponseModel {
	const STATUS_OK = 200;
	const STATUS_INTERNAL_SERVER_ERROR = 500;
	public $data;
	public $status;
	public $message;
	function __construct($data = null, $status = ResponseModel::STATUS_OK, $message = null) {
		$this->data = $data;
		$this->status = $status;
		$this->message = $message;
	}
}