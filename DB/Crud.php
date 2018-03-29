<?php
require_once 'Conexao.php';
abstract class Crud extends Conexao
{
	protected $tabela = 'records';
	abstract public function gravar();
//	abstract public function atualizar($id);
//	abstract public function deletar($id);

	public function ListarPor($id)
	{
		$sql = "SELECT * FROM $this->tabela WHERE id = :id";
		$stmt = Conexao::prepare($sql);
		$stmt->bindParam(':id', $id, PDO::PARAM_INT);
		$stmt->execute();
		return $stmt->fetch();
	}
	public function ListarTodos()
	{
		$sql = "SELECT * FROM $this->tabela order by caractere, caracPorSeg";
		$stmt = Conexao::prepare($sql);
		$stmt->execute();
		return $stmt->fetchAll();
	}
	
}