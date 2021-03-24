ALTER TABLE empresas MODIFY cnpj VARCHAR(14);

INSERT INTO empresas 
    (nome, cnpj)
VALUES
    ('Bradesco', '95694186000132'),
    ('Vale', '27887148000146'),
    ('Cielo', '01598317000134');

SELECT * FROM empresas;
DESC empresas;
UPDATE empresas SET cnpj = '01598317000134' WHERE id = 3; 

INSERT INTO empresas_unidades 
    (empresa_id, cidade_id, sede)
VALUES
    (1, 1, 1),
    (1, 2, 1),
    (2, 1, 0),
    (2, 2, 1);

SELECT * FROM empresas_unidades;