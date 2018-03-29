<?php

require_once '../DB/Record.php';
require_once '../DB/RecordDAO.php';

if (isset($_GET['jogador'])){$jogador = $_GET['jogador'];}
if (isset($_GET['char'])){$char = $_GET['char'];}
if (isset($_GET['word'])){$word = $_GET['word'];}
if (isset($_GET['cps'])){$cps = $_GET['cps'];}
if (isset($_GET['pps'])){$pps = $_GET['pps'];}


$record = new Record();
$record->setJogador($jogador);
$record->setChar($char);
$record->setWord($word);
$record->setCPS($cps);
$record->setPPS($pps);


$dao = new RecordDAO();
$dao->gravar();
header('Location: listaRecords.php');
