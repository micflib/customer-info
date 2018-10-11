<?php
$app->get ( '/', function () {
} );

$app->post ( '/insertCustomerInfo', function () use($app) {
	$data = json_decode ( $app->request->getBody () );
	$fname = $data->fname;
	$lname = $data->lname;
	$telNo = $data->telNo;
	$view = $data->view;
	try {
		$db = getDB ();
		$stmt = $db->prepare ( "INSERT INTO trx_customer (
			FD_FNAME
			, FD_LNAME
			, FD_TEL_NO
			, FD_VIEW
			, FD_UPD_DATE) 
			VALUES(
			:fname
			, :lname
			, :telNo
			, :view
			, NOW())");
		$stmt->bindParam ( ':fname', $fname, PDO::PARAM_STR );
		$stmt->bindParam ( ':lname', $lname, PDO::PARAM_STR );
		$stmt->bindParam ( ':telNo', $telNo, PDO::PARAM_INT );
		$stmt->bindParam ( ':view', $view, PDO::PARAM_INT );
		$stmt->execute ();
		$id = $db->lastInsertId();
		$app->response->setStatus ( ResponseModel::STATUS_OK );
		setHeadersForPC();
		echo json_encode ( new ResponseModel ( $id ) );
	} catch ( PDOException $e ) {
		$app->response->setStatus ( ResponseModel::STATUS_OK );
		echo json_encode ( new ResponseModel ( null, ResponseModel::STATUS_INTERNAL_SERVER_ERROR, $e->getMessage ()) );
	}
} );

$app->post ( '/updateCustomerInfo', function () use($app) {
	$data = json_decode ( $app->request->getBody () );
	$fname = $data->fname;
	$lname = $data->lname;
	$telNo = $data->telNo;
	$view = $data->view;
	$iban = $data->iban;	
	$streetNo = $data->streetNo;
	$houseNo = $data->houseNo;
	$zipCode = $data->zipCode;
	$city = $data->city;
	$accountOwner = $data->accountOwner; 	 
	$customerId = $data->customerId;
	$paymentDataId = $data->paymentDataId;
	
	try {
		$db = getDB ();

		$qry = 'UPDATE trx_customer SET FD_UPD_DATE = NOW()';
		
		if($iban != "" && $iban != null) {
			$qry  .= ', FD_IBAN = :iban';
		}
		if($fname != "" && $fname != null) {
			$qry  .= ' , FD_FNAME = :fname';
		}
		if($lname != "" && $lname != null) {
			$qry  .=' , FD_LNAME = :lname';
		}
		if($telNo != "" && $telNo != null) {
			$qry  .=' , FD_TEL_NO = :telNo';
		}
		if($streetNo != "" && $streetNo != null) {
			$qry  .=' , FD_STREET_NO = :streetNo';
		}
		if($houseNo != "" && $houseNo != null) {
			$qry  .=' , FD_HOUSE_NO = :houseNo';
		}
		if($zipCode != "" && $zipCode != null) {
			$qry  .=' , FD_ZIP_CODE = :zipCode';
		}
		if($city != "" && $city != null) {
			$qry  .=' , FD_CITY = :city';
		}
		if($view != "" && $view != null) {
			$qry  .=' , FD_VIEW = :view';
		}
		if($accountOwner != "" && $accountOwner != null) {
			$qry  .=' , FD_ACCNT_OWNER = :accountOwner' ;
		}
		if($paymentDataId != "" && $paymentDataId != null) {
			$qry  .=' , FD_PAYMENT_DATA_ID = :paymentDataId' ;
		}
		$qry  .=' WHERE FD_CUSTOMER_ID = :customerId';

		$stmt   = $db->prepare ( $qry );
		$stmt->bindParam ( ':customerId', $customerId, PDO::PARAM_INT );
		
		if($iban != "" && $iban != null) {
			$stmt->bindParam ( ':iban', $iban, PDO::PARAM_STR );
		}
		if($fname != "" && $fname != null) {
			$stmt->bindParam ( ':fname', $fname, PDO::PARAM_STR );
		}
		if($lname != "" && $lname != null) {
			$stmt->bindParam ( ':lname', $lname, PDO::PARAM_STR );
		}
		if($telNo != "" && $telNo != null) {
			$stmt->bindParam ( ':telNo', $telNo, PDO::PARAM_INT );
		}
		if($streetNo != "" && $streetNo != null) {
			$stmt->bindParam ( ':streetNo', $streetNo, PDO::PARAM_STR );
		}
		if($houseNo != "" && $houseNo != null) {
			$stmt->bindParam ( ':houseNo', $houseNo, PDO::PARAM_INT );
		}
		if($zipCode != "" && $zipCode != null) {
			$stmt->bindParam ( ':zipCode', $zipCode, PDO::PARAM_INT );
		}
		if($city != "" && $city != null) {
			$stmt->bindParam ( ':city', $city, PDO::PARAM_STR );
		}
		if($view != "" && $view != null) {
			$stmt->bindParam ( ':view', $view, PDO::PARAM_INT );
		}
		if($accountOwner != "" && $accountOwner != null) {
			$stmt->bindParam ( ':accountOwner', $accountOwner, PDO::PARAM_STR );
		}
		if($paymentDataId != "" && $paymentDataId != null) {
			$stmt->bindParam ( ':paymentDataId', $paymentDataId, PDO::PARAM_STR );
		}
		
		$stmt->execute ();
		$id = $db->lastInsertId();
		$app->response->setStatus ( ResponseModel::STATUS_OK );
		setHeadersForPC();
		echo json_encode ( new ResponseModel ( $id ) );
	} catch ( PDOException $e ) {
		$app->response->setStatus ( ResponseModel::STATUS_OK );
		echo json_encode ( new ResponseModel ( null, ResponseModel::STATUS_INTERNAL_SERVER_ERROR, $e->getMessage () ) );
	}
} );

$app->post ( '/getPaymentData', function () use($app) {
	$data = json_decode ( $app->request->getBody () );
	$customerId = $data->customerId;
	$iban = $data->iban;
	$accountOwner = $data->accountOwner;
	try {
		
		$url = 'https://37f32cl571.execute-api.eu-central-1.amazonaws.com/default/wunderfleet-recruiting-backend-dev-save-payment-data';
		
		$data = array(
			'customerId' => $customerId,
			'iban' => $iban,
			'owner' => $accountOwner,
		);
		
		$options = array(
			CURLOPT_POST => 1,
			CURLOPT_POSTFIELDS => json_encode($data),
			CURLOPT_RETURNTRANSFER => true,    
			CURLOPT_HEADER         => false,   
			CURLOPT_FOLLOWLOCATION => true,    
			CURLOPT_ENCODING       => "",      
			CURLOPT_USERAGENT      => "",
			CURLOPT_AUTOREFERER    => true,    
			CURLOPT_CONNECTTIMEOUT => 120,     
			CURLOPT_TIMEOUT        => 120,     
			CURLOPT_MAXREDIRS      => 10,      
			CURLOPT_SSL_VERIFYPEER => false    
		);
	
		$ch      = curl_init( $url );
		curl_setopt_array( $ch, $options );
		$content = curl_exec( $ch );
		$err     = curl_errno( $ch );
		$errmsg  = curl_error( $ch );
		$header  = curl_getinfo( $ch );
		curl_close( $ch );

		$responseData = json_decode($content ,true);
		echo json_encode (  new ResponseModel ( $responseData  ));

	} catch ( PDOException $e ) {
		$app->response->setStatus ( ResponseModel::STATUS_OK );
		echo json_encode ( new ResponseModel ( null, ResponseModel::STATUS_INTERNAL_SERVER_ERROR, $e->getMessage ()) );
	}
} );