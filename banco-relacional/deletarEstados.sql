INSERT INTO estados (id, nome, sigla, regiao, populacao)
VALUES (1000, 'Novo', 'NV', 'SUL', 2.54);

DELETE FROM estados 
WHERE sigla = "NV";

DELETE FROM estados 
WHERE id >= 1000;