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
    <form method="get" action="salvaRecord.php">
    <div class="form-group">
    <label for="jogador">Jogador</label>
    <input type="text"  class="form-control" name="jogador" placeholder="nome do Jogador">
    <input type="hidden" name="char" value="<?php echo $_GET['char']; ?>">
    <input type="hidden" name="word" value="<?php echo $_GET['word']; ?>">
    <input type="hidden" name="cps" value="<?php echo $_GET['cps']; ?>">
    <input type="hidden" name="pps" value="<?php echo $_GET['pps']; ?>">
    
  </div>
  <button type="submit" class="btn btn-success">Gravar</button>
  <button type="button" class="btn btn-success" onclick="history.back(1)">Cancelar</button>
   
    
</form>

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