CREATE SCHEMA primerEntrega;

USE primerEntrega;

CREATE TABLE usuarios(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
email VARCHAR(255) UNIQUE NOT NULL,
password VARCHAR(255) NOT NULL,
nombre_usuario VARCHAR(50) UNIQUE NOT NULL,
foto_perfil VARCHAR(255) NOT NULL,
fecha DATE NOT NULL,
dni INT UNIQUE NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP NULL
);

CREATE TABLE productos(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
nombre VARCHAR(50) NOT NULL,
descripcion TEXT NOT NULL,
usuario_id INT UNSIGNED NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP NULL,
FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

CREATE TABLE comentarios(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
producto_id INT UNSIGNED NOT NULL,
usuario_id INT UNSIGNED NOT NULL,
comentario TEXT NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP NULL,
FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
FOREIGN KEY (producto_id) REFERENCES productos(id)
);

INSERT INTO usuarios (id, email, password, nombre_usuario, foto_perfil, fecha, dni)
VALUES (DEFAULT, 'lmessi@gmail.com', 'arg2022', 'leom', '/images/perfil1.png', '2018-09-20', 45203270),
(DEFAULT, 'bremondino@gmail.com', 'bauticapo', 'bremondino', '/images/perfil2.png', '2020-12-29', 44233370),
(DEFAULT, 'smignaquy@gmail.com', 'messicapo', 'smignaquy', '/images/perfil3.png', '2022-01-12', 43766908),
(DEFAULT, 'mzimm@gmail.com', 'udesa123', 'mzim', '/images/perfil1.png', '2021-09-13', 44357890),
(DEFAULT, 'rdepaul@udesa.com', 'qatar2022', 'rodridp', '/images/perfil2.png', '2023-02-23', 33498002),
(DEFAULT, 'kmbappe@gmail.com', 'aguantepsg', 'kmbappe','/images/perfil3.png', '2019-04-23', 23465667);

INSERT INTO productos (id, nombre, descripcion, usuario_id)
VALUES (DEFAULT, 'Bola de lomo', 'Se caracteriza por ser un corte tierno y económico, su uso mas popular es para milanesas.', 1),
(DEFAULT, 'Chorizo', 'El chorizo se elabora con carne picada y grasa de cerdo, condimentada con pimentón y ajo, todo ello embutido en tripa natural.', 1),
(DEFAULT, 'Entraña', 'La entraña es una pieza procedente de la parte interna de los costillares de nuestras terneras, para entendernos mejor, sería el músculo del diafragma, por lo que de cada ternera podrán sacarse como mucho dos piezas de esta fabulosa carne', 3),
(DEFAULT, 'Picaña', 'La picaña tiene forma triangular y se corta en filetes o en dados. Está cubierta por una capa de grasa blanca -también posee alguna infiltración- que es responsable, en parte, del sabor, la terneza y la jugosidad únicos que posee esta preciada pieza', 4),
(DEFAULT, 'Tira de Asado', 'La tira de asado se obtiene con el corte transversal del costillar de la res. Se encuentra en medio de otros dos clásicos cortes: las costillas, del lado más cercano a la columna vertebral, y la popular falda, que utilizamos para deshebrar, y se ubica del lado más lejano.', 6),
(DEFAULT, 'Morcilla', 'La morcilla es un embutido sin carne, relleno principalmente con sangre coagulada, en su mayoría de cerdo. Es de color oscuro característico.', 2),
(DEFAULT, 'Bife de Chorizo', 'El bife de chorizo es la costeleta sin hueso ubicada en la cara externa del lomo del animal. Al ser separado del hueso, antes de cortarse en bifes, tiene forma triangular y cilíndrica.', 3),
(DEFAULT, 'Vacio', 'El vacio se obtiene de la parte lateral del vacuno, junto a las costillas. Entre sus características, podemos decir que es una carne un poco más fibrosa que el resto de piezas. Debido a ello, su sabor es muy sabroso.', 4),
(DEFAULT, 'Matambre', 'El matambre es una capa de carne que se saca de entre el cuero y el costillar de vacunos. Es una carne plana con grasa en una de las caras.', 5),
(DEFAULT, 'Bondiola', 'La bondiola es un corte de carne de vaca situado entre la espalda y la pechuga. Se caracteriza por su sabor único y su textura tierna.', 4);

INSERT INTO comentarios (id, producto_id, usuario_id, comentario)
VALUES (DEFAULT, 1, 1, 'Buena calidad de la carne'),
(DEFAULT, 1, 2, 'Excelente'),
(DEFAULT, 1, 3, 'Muy jugosa'),
(DEFAULT, 1, 4, 'Excelente, muy recomendable'),
(DEFAULT, 2, 5, 'Buena calidad de la carne'),
(DEFAULT, 2, 6, 'Excelente'),
(DEFAULT, 2, 3, 'Muy jugosa'),
(DEFAULT, 2, 4, 'Excelente, muy recomendable'),
(DEFAULT, 3, 1, 'Buena calidad de la carne'),
(DEFAULT, 3, 2, 'Excelente'),
(DEFAULT, 3, 3, 'Muy jugosa'),
(DEFAULT, 3, 6, 'Excelente, muy recomendable'),
(DEFAULT, 4, 1, 'Buena calidad de la carne'),
(DEFAULT, 4, 5, 'Excelente'),
(DEFAULT, 4, 3, 'Muy jugosa'),
(DEFAULT, 4, 4, 'Excelente, muy recomendable'),
(DEFAULT, 5, 1, 'Buena calidad de la carne'),
(DEFAULT, 5, 2, 'Excelente'),
(DEFAULT, 5, 5, 'Muy jugosa'),
(DEFAULT, 5, 4, 'Excelente, muy recomendable'),
(DEFAULT, 6, 1, 'Buena calidad de la carne'),
(DEFAULT, 6, 3, 'Excelente'),
(DEFAULT, 6, 3, 'Muy jugosa'),
(DEFAULT, 6, 5, 'Excelente, muy recomendable'),
(DEFAULT, 7, 1, 'Buena calidad de la carne'),
(DEFAULT, 7, 2, 'Excelente'),
(DEFAULT, 7, 3, 'Muy jugosa'),
(DEFAULT, 7, 4, 'Excelente, muy recomendable'),
(DEFAULT, 8, 6, 'Buena calidad de la carne'),
(DEFAULT, 8, 2, 'Excelente'),
(DEFAULT, 8, 3, 'Muy jugosa'),
(DEFAULT, 8, 5, 'Excelente, muy recomendable'),
(DEFAULT, 9, 1, 'Buena calidad de la carne'),
(DEFAULT, 9, 2, 'Excelente'),
(DEFAULT, 9, 6, 'Muy jugosa'),
(DEFAULT, 9, 4, 'Excelente, muy recomendable'),
(DEFAULT, 10, 5, 'Buena calidad de la carne'),
(DEFAULT, 10, 2, 'Excelente'),
(DEFAULT, 10, 3, 'Muy jugosa'),
(DEFAULT, 10, 4, 'Excelente, muy recomendable');