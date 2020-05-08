<?php
  $rows = array();
	if (($handle = fopen("results.csv", "r")) !== FALSE) {
		while (($row = fgetcsv($handle, 1000, ",")) !== FALSE) {
			array_push($rows, $row);
		}
  	fclose($handle);
	}
	$rows = array_reverse($rows);
	$nrows = count($rows);

	echo "<table>";
	echo "<tr><th>Results</th><th>IP Address</th><th>Date</th><th>Browser</th></tr>";
	for ($r = 0; $r < $nrows; $r++) {
		$row = $rows[$r];
		$ncols = count($row);
		echo "<tr>";
		for ($c=0; $c < $ncols; $c++) {
			echo "<td>$row[$c]</td>";
		}
		echo "</tr>";
	}
	echo "</table>";
?>