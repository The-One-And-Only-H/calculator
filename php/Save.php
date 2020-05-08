<?php
  if( !$_POST["result"] ) {
    die ("no result");
  }
  $row = array (
    $_POST['result'], $_SERVER['REMOTE_ADDR'], date("Y-m-d h:i:sa"), $_SERVER['HTTP_USER_AGENT']
  );

  $fp = fopen('results.csv', 'a');
  fputcsv($fp, $row);
  fclose($fp);

  echo "Saved ${_POST['result']}";
?>