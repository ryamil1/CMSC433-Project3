<?php
/*Ryan Miller and Kyle Castle*/
$dbname = "rmkc_proj3";

$pdo = new PDO("mysql:host=localhost", "root", "");
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$pdo->query("CREATE DATABASE IF NOT EXISTS $dbname");
$pdo->query("use $dbname");

if (!tableExists($pdo, "high_scores")) {
	$tablename = "high_scores";
	$sql = "
	CREATE TABLE IF NOT EXISTS $tablename (`Name` varchar(30), `Score` int, `ID` INT AUTO_INCREMENT PRIMARY KEY);
	INSERT INTO `high_scores` (`Name`, `Score`, `ID`) VALUES ('Player 1', '2344', NULL);
	INSERT INTO `high_scores` (`Name`, `Score`, `ID`) VALUES ('Player 2', '5452', NULL);
	INSERT INTO `high_scores` (`Name`, `Score`, `ID`) VALUES ('Player 3', '3423', NULL);
	INSERT INTO `high_scores` (`Name`, `Score`, `ID`) VALUES ('Player 4', '5433', NULL);
	INSERT INTO `high_scores` (`Name`, `Score`, `ID`) VALUES ('Player 5', '1233', NULL);
	INSERT INTO `high_scores` (`Name`, `Score`, `ID`) VALUES ('Player 6', '3456', NULL);
	INSERT INTO `high_scores` (`Name`, `Score`, `ID`) VALUES ('Player 7', '1354', NULL);
	INSERT INTO `high_scores` (`Name`, `Score`, `ID`) VALUES ('Player 8', '7593', NULL);
	INSERT INTO `high_scores` (`Name`, `Score`, `ID`) VALUES ('Player 9', '6700', NULL);
	INSERT INTO `high_scores` (`Name`, `Score`, `ID`) VALUES ('Player 10', '5039', NULL);
	";

	try {
		$pdo->exec($sql);
	}
	catch (PDOException $e)
	{
		echo $e->getMessage();
		die();
	}
} 

$sql = "INSERT INTO `high_scores` (`Name`, `Score`, `ID`) VALUES ('".$_POST["name"]."', '".$_POST["score"]."', NULL);";
try {
	$pdo->exec($sql);
}
catch (PDOException $e)
{
	echo $e->getMessage();
	die();
}


function tableExists($pdo, $table) {

    // Try a select statement against the table
    // Run it in try/catch in case PDO is in ERRMODE_EXCEPTION.
    try {
        $result = $pdo->query("SELECT 1 FROM $table LIMIT 1");
    } catch (Exception $e) {
        // We got an exception == table not found
        return FALSE;
    }
    // Result is either boolean FALSE (no table found) or PDOStatement Object (table found)
    return $result !== FALSE;
}

?>