SELECT e.nome AS Estado, c.nome AS Cidade, regiao FROM estados e, cidades c WHERE e.id = c.estado_id;

SELECT e.nome AS Estado, c.nome AS Cidade, regiao FROM estados e 
INNER JOIN cidades c 
ON e.id = c.estado_id;