-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 11/09/2026 às 01:16
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `lista_alunos_camiseta`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `alunos`
--

CREATE TABLE `alunos` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `cor` int(11) NOT NULL,
  `tamanho` int(11) NOT NULL,
  `malha` int(11) NOT NULL,
  `preco` float NOT NULL,
  `pagamento` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `alunos`
--

INSERT INTO `alunos` (`id`, `nome`, `cor`, `tamanho`, `malha`, `preco`, `pagamento`) VALUES
(4, 'Edilaine Vernes', 1, 1, 1, 60, 0),
(6, 'Margarete', 1, 3, 1, 60, 1),
(7, 'Nathalia', 1, 3, 1, 60, 0),
(8, 'Franciele Oliveira', 0, 2, 1, 60, 0),
(9, 'Auta (Autinha)', 1, 1, 0, 50, 0),
(10, 'Bethi', 1, 3, 0, 50, 1),
(11, 'Bia', 1, 2, 0, 50, 1),
(12, 'Viviane Rodrigues', 1, 2, 1, 60, 0),
(13, 'Andressa Lencina', 2, 1, 1, 60, 1),
(14, 'Brenda Cardoso', 1, 1, 1, 60, 0),
(15, 'Cássia Vargas Padilha', 1, 3, 1, 60, 1),
(16, 'Raquel Mathias', 1, 3, 1, 60, 0),
(17, 'Kanandra', 2, 3, 1, 60, 1),
(18, 'Marli', 0, 3, 0, 50, 0),
(19, 'Saléte', 1, 2, 0, 50, 1),
(20, 'Nicolas Gabriel Werner', 2, 2, 0, 50, 1),
(21, 'Viviane Blehm', 1, 1, 1, 60, 1),
(22, 'Gislaine Macedo', 1, 4, 0, 50, 0),
(23, 'Iria borges', 1, 2, 0, 50, 0),
(24, 'Tainá', 1, 1, 1, 60, 0),
(25, 'Marina', 1, 1, 0, 50, 0),
(26, 'Cibele', 1, 3, 0, 50, 1),
(27, 'Luíza', 1, 3, 0, 50, 0),
(28, 'Irene Becker', 1, 1, 0, 50, 1),
(29, 'Fátima', 1, 2, 0, 50, 0),
(30, 'Rejane da Silva Salaberry', 1, 1, 1, 60, 0),
(31, 'Rosangela Gomes', 1, 3, 0, 50, 0),
(32, 'Fabiana', 1, 2, 1, 60, 0);

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `alunos`
--
ALTER TABLE `alunos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `alunos`
--
ALTER TABLE `alunos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
