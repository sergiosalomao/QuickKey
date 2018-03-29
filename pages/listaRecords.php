<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>QuickKey - 1.0</title>

  <!-- Bootstrap core CSS -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
    crossorigin="anonymous"> 
    <link href="https://fonts.googleapis.com/css?family=Playfair+Display:700,900" rel="stylesheet">
    <link href="../css/estilos.css" rel="stylesheet">
</head>
<body>

 <div class="container">
 
 
 
 <div class="centralizaHorizontal">
 <img src="../img/logo.png" class="centralizado" width="25%" height="25%">
      <br>
      <br>
    </div>
    <h1 class="display-4 centralizaHorizontal">Ranking </h1>
    <table class="table table-sm">
  <thead>
    <tr>
      
      <th scope="col">#</th>
      <th scope="col">Jogador</th>
      <th scope="col">Caracteres Digitados</th>
      <th scope="col">Palavras Digitadas</th>
      <th scope="col">CPS</th>
      <th scope="col">PPS</th>

    </tr>
  </thead>
  <?php 
  require_once '../DB/RecordDAO.php';

$dao = new RecordDAO();

foreach ($dao->ListarTodos() as $key => $value) : ?>
    
 
  <tbody>
    <tr>
    <td><?php echo $value->idrecords?></td>
      <td><?php echo $value->jogador?></td>
      <td><?php echo $value->caractere ?></td>
      <td><?php echo $value->palavras ?></td>
      <td><?php echo $value->caracPorSeg ?></td>
      <td><?php echo $value->palavraPorSeg ?></td>
    </tr>
   
  

<?php endforeach;?>


</tbody>
</table>
<button type="button" class="btn btn-success" onclick="window.location='../index.html'">Voltar</button>

 
    <footer class="blog-footer rodape">
      <p>Developer
        <a href="https://github.com/sergiosalomao">Sergio Salomão</a>.</p>
    </footer>
  </div>
  <!-- arquivos Boootstrap -->
  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</body>
</html>