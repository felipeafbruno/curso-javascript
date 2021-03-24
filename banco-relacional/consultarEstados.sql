SELECT * FROM estados;

SELECT sigla AS 'Siglas', nome AS 'Nome do Estado' FROM estados WHERE regiao = 'SUL';

SELECT nome, regiao, populacao FROM estados WHERE populacao >= 10 ORDER BY populacao DESC; 