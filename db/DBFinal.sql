-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:8889
-- Tiempo de generación: 17-06-2023 a las 01:01:42
-- Versión del servidor: 5.7.39
-- Versión de PHP: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `primerEntrega`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentarios`
--

CREATE TABLE `comentarios` (
  `id` int(10) UNSIGNED NOT NULL,
  `producto_id` int(10) UNSIGNED NOT NULL,
  `usuario_id` int(10) UNSIGNED NOT NULL,
  `comentario` text NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `comentarios`
--

INSERT INTO `comentarios` (`id`, `producto_id`, `usuario_id`, `comentario`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 1, 1, 'Buena calidad de la carne', '2023-05-22 14:54:16', '2023-05-22 14:54:16', NULL),
(2, 1, 2, 'Excelente', '2023-05-22 14:54:16', '2023-05-22 14:54:16', NULL),
(3, 1, 3, 'Muy jugosa', '2023-05-22 14:54:16', '2023-05-22 14:54:16', NULL),
(4, 1, 4, 'Excelente, muy recomendable', '2023-05-22 14:54:16', '2023-05-22 14:54:16', NULL),
(5, 2, 5, 'Buena calidad de la carne', '2023-05-22 14:54:16', '2023-05-22 14:54:16', NULL),
(6, 2, 6, 'Excelente', '2023-05-22 14:54:16', '2023-05-22 14:54:16', NULL),
(7, 2, 3, 'Muy jugosa', '2023-05-22 14:54:16', '2023-05-22 14:54:16', NULL),
(8, 2, 4, 'Excelente, muy recomendable', '2023-05-22 14:54:16', '2023-05-22 14:54:16', NULL),
(9, 3, 1, 'Buena calidad de la carne', '2023-05-22 14:54:16', '2023-05-22 14:54:16', NULL),
(10, 3, 2, 'Excelente', '2023-05-22 14:54:16', '2023-05-22 14:54:16', NULL),
(11, 3, 3, 'Muy jugosa', '2023-05-22 14:54:16', '2023-05-22 14:54:16', NULL),
(12, 3, 6, 'Excelente, muy recomendable', '2023-05-22 14:54:16', '2023-05-22 14:54:16', NULL),
(13, 4, 1, 'Buena calidad de la carne', '2023-05-22 14:54:16', '2023-05-22 14:54:16', NULL),
(14, 4, 5, 'Excelente', '2023-05-22 14:54:16', '2023-05-22 14:54:16', NULL),
(15, 4, 3, 'Muy jugosa', '2023-05-22 14:54:16', '2023-05-22 14:54:16', NULL),
(16, 4, 4, 'Excelente, muy recomendable', '2023-05-22 14:54:16', '2023-05-22 14:54:16', NULL),
(17, 5, 1, 'Buena calidad de la carne', '2023-05-22 14:54:16', '2023-05-22 14:54:16', NULL),
(18, 5, 2, 'Excelente', '2023-05-22 14:54:16', '2023-05-22 14:54:16', NULL),
(19, 5, 5, 'Muy jugosa', '2023-05-22 14:54:16', '2023-05-22 14:54:16', NULL),
(20, 5, 4, 'Excelente, muy recomendable', '2023-05-22 14:54:16', '2023-05-22 14:54:16', NULL),
(21, 6, 1, 'Buena calidad de la carne', '2023-05-22 14:54:16', '2023-05-22 14:54:16', NULL),
(22, 6, 3, 'Excelente', '2023-05-22 14:54:16', '2023-05-22 14:54:16', NULL),
(23, 6, 3, 'Muy jugosa', '2023-05-22 14:54:16', '2023-05-22 14:54:16', NULL),
(24, 6, 5, 'Excelente, muy recomendable', '2023-05-22 14:54:16', '2023-05-22 14:54:16', NULL),
(25, 7, 1, 'Buena calidad de la carne', '2023-05-22 14:54:16', '2023-05-22 14:54:16', NULL),
(26, 7, 2, 'Excelente', '2023-05-22 14:54:16', '2023-05-22 14:54:16', NULL),
(27, 7, 3, 'Muy jugosa', '2023-05-22 14:54:16', '2023-05-22 14:54:16', NULL),
(28, 7, 4, 'Excelente, muy recomendable', '2023-05-22 14:54:16', '2023-05-22 14:54:16', NULL),
(29, 8, 6, 'Buena calidad de la carne', '2023-05-22 14:54:16', '2023-05-22 14:54:16', NULL),
(30, 8, 2, 'Excelente', '2023-05-22 14:54:16', '2023-05-22 14:54:16', NULL),
(31, 8, 3, 'Muy jugosa', '2023-05-22 14:54:16', '2023-05-22 14:54:16', NULL),
(32, 8, 5, 'Excelente, muy recomendable', '2023-05-22 14:54:16', '2023-05-22 14:54:16', NULL),
(33, 9, 1, 'Buena calidad de la carne', '2023-05-22 14:54:16', '2023-05-22 14:54:16', NULL),
(34, 9, 2, 'Excelente', '2023-05-22 14:54:16', '2023-05-22 14:54:16', NULL),
(35, 9, 6, 'Muy jugosa', '2023-05-22 14:54:16', '2023-05-22 14:54:16', NULL),
(36, 9, 4, 'Excelente, muy recomendable', '2023-05-22 14:54:16', '2023-05-22 14:54:16', NULL),
(37, 10, 5, 'Buena calidad de la carne', '2023-05-22 14:54:16', '2023-05-22 14:54:16', NULL),
(38, 10, 2, 'Excelente', '2023-05-22 14:54:16', '2023-05-22 14:54:16', NULL),
(39, 10, 3, 'Muy jugosa', '2023-05-22 14:54:16', '2023-05-22 14:54:16', NULL),
(40, 10, 4, 'Excelente, muy recomendable', '2023-05-22 14:54:16', '2023-05-22 14:54:16', NULL),
(41, 20, 19, 'Muy buen producto!', '2023-06-15 02:42:54', '2023-06-15 02:42:54', NULL),
(42, 21, 19, 'Jugoso!', '2023-06-15 02:56:52', '2023-06-15 02:56:52', NULL),
(43, 19, 19, 'Que buen corte!', '2023-06-15 03:13:15', '2023-06-15 03:13:15', NULL),
(44, 21, 19, '', '2023-06-15 03:30:31', '2023-06-15 03:30:31', NULL),
(45, 19, 19, 'Jugoso', '2023-06-15 19:00:58', '2023-06-15 19:00:58', NULL),
(46, 20, 19, 'Jugoso', '2023-06-15 19:17:40', '2023-06-15 19:17:40', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(10) UNSIGNED NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `foto` varchar(500) NOT NULL,
  `descripcion` text NOT NULL,
  `usuario_id` int(10) UNSIGNED NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `foto`, `descripcion`, `usuario_id`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'Bola de lomo', 'https://www.res.com.ar/media/catalog/product/cache/6c63de560a15562fe08de38c3c766637/b/o/bola-de-lomo.jpg', 'Se caracteriza por ser un corte tierno y económico, su uso mas popular es para milanesas.', 1, '2023-05-22 14:54:16', '2023-06-09 23:35:40', NULL),
(2, 'Chorizo', 'https://www.res.com.ar/media/catalog/product/cache/6c63de560a15562fe08de38c3c766637/c/h/chorizo.jpg', 'El chorizo se elabora con carne picada y grasa de cerdo, condimentada con pimentón y ajo, todo ello embutido en tripa natural.', 1, '2023-05-22 14:54:16', '2023-06-09 23:45:12', NULL),
(3, 'Entraña', 'https://www.res.com.ar/media/catalog/product/cache/6c63de560a15562fe08de38c3c766637/e/n/entra_a_1.jpg', 'La entraña es una pieza procedente de la parte interna de los costillares de nuestras terneras, para entendernos mejor, sería el músculo del diafragma, por lo que de cada ternera podrán sacarse como mucho dos piezas de esta fabulosa carne', 3, '2023-05-22 14:54:16', '2023-06-09 23:45:12', NULL),
(4, 'Picaña', 'https://www.res.com.ar/media/catalog/product/cache/6c63de560a15562fe08de38c3c766637/p/i/pica_a_1.jpg', 'La picaña tiene forma triangular y se corta en filetes o en dados. Está cubierta por una capa de grasa blanca -también posee alguna infiltración- que es responsable, en parte, del sabor, la terneza y la jugosidad únicos que posee esta preciada pieza', 4, '2023-05-22 14:54:16', '2023-06-09 23:45:12', NULL),
(5, 'Tira de Asado', 'https://www.res.com.ar/media/catalog/product/cache/6c63de560a15562fe08de38c3c766637/a/s/asado-new.jpg', 'La tira de asado se obtiene con el corte transversal del costillar de la res. Se encuentra en medio de otros dos clásicos cortes: las costillas, del lado más cercano a la columna vertebral, y la popular falda, que utilizamos para deshebrar, y se ubica del lado más lejano.', 6, '2023-05-22 14:54:16', '2023-06-09 23:45:12', NULL),
(6, 'Morcilla', 'https://www.res.com.ar/media/catalog/product/cache/6c63de560a15562fe08de38c3c766637/m/o/morcilla.jpg', 'La morcilla es un embutido sin carne, relleno principalmente con sangre coagulada, en su mayoría de cerdo. Es de color oscuro característico.', 2, '2023-05-22 14:54:16', '2023-06-09 23:45:12', NULL),
(7, 'Bife de Chorizo', 'https://www.res.com.ar/media/catalog/product/cache/6c63de560a15562fe08de38c3c766637/b/i/bife-de-chorizo.jpg', 'El bife de chorizo es la costeleta sin hueso ubicada en la cara externa del lomo del animal. Al ser separado del hueso, antes de cortarse en bifes, tiene forma triangular y cilíndrica.', 3, '2023-05-22 14:54:16', '2023-06-09 23:45:12', NULL),
(8, 'Vacio', 'https://www.res.com.ar/media/catalog/product/cache/6c63de560a15562fe08de38c3c766637/v/a/vacio_2.jpg', 'El vacio se obtiene de la parte lateral del vacuno, junto a las costillas. Entre sus características, podemos decir que es una carne un poco más fibrosa que el resto de piezas. Debido a ello, su sabor es muy sabroso.', 4, '2023-05-22 14:54:16', '2023-06-09 23:45:12', NULL),
(9, 'Matambre', 'https://www.res.com.ar/media/catalog/product/cache/6c63de560a15562fe08de38c3c766637/m/a/matambre_2.jpg', 'El matambre es una capa de carne que se saca de entre el cuero y el costillar de vacunos. Es una carne plana con grasa en una de las caras.', 5, '2023-05-22 14:54:16', '2023-06-09 23:45:12', NULL),
(10, 'Bondiola', 'https://www.res.com.ar/media/catalog/product/cache/6c63de560a15562fe08de38c3c766637/b/o/bondiola_2.jpg', 'La bondiola es un corte de carne de vaca situado entre la espalda y la pechuga. Se caracteriza por su sabor único y su textura tierna.', 4, '2023-05-22 14:54:16', '2023-06-09 23:45:12', NULL),
(19, 'Ojo de Bife', 'https://www.res.com.ar/media/catalog/product/cache/6c63de560a15562fe08de38c3c766637/o/j/ojo-de-bife.jpg', 'Es la parte central del bife ancho. En varios mercados del mundo y restaurantes argentinos, es considerado el preferido entre los bifes por su sabor y terneza.', 19, '2023-06-15 02:01:10', '2023-06-16 01:12:50', NULL),
(20, 'Bife ancho', 'https://www.res.com.ar/media/catalog/product/cache/6c63de560a15562fe08de38c3c766637/b/i/bife-ancho_1.jpg', 'Para preparar a la parrilla o plancha, la presencia del hueso en su cocción le da un gusto especial.', 19, '2023-06-15 02:22:42', '2023-06-15 02:22:42', NULL),
(21, 'Paleta', 'https://www.res.com.ar/media/catalog/product/cache/6c63de560a15562fe08de38c3c766637/p/a/paleta_2.jpg', 'Permite preparar churrascos de manera más económica así como estofados.', 19, '2023-06-15 02:25:43', '2023-06-16 01:05:15', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(10) UNSIGNED NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(800) DEFAULT NULL,
  `nombre_usuario` varchar(50) NOT NULL,
  `foto_perfil` varchar(2000) DEFAULT NULL,
  `fecha` date NOT NULL,
  `dni` int(8) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `email`, `password`, `nombre_usuario`, `foto_perfil`, `fecha`, `dni`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'lmessi@gmail.com', 'arg2022', 'leom', 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png', '2018-09-20', 11111111, '2023-05-22 14:54:16', '2023-06-16 01:57:44', NULL),
(2, 'bremondino@gmail.com', 'bauticapo', 'bremondino', 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png', '2020-12-29', 44233370, '2023-05-22 14:54:16', '2023-06-14 12:58:23', NULL),
(3, 'smignaquy@gmail.com', 'messicapo', 'smignaquy', 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png', '2022-01-12', 43766908, '2023-05-22 14:54:16', '2023-06-14 12:58:23', NULL),
(4, 'mzimm@gmail.com', 'udesa123', 'mzim', 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png', '2021-09-13', 44357890, '2023-05-22 14:54:16', '2023-06-14 12:58:23', NULL),
(5, 'rdepaul@udesa.com', 'qatar2022', 'rodridp', 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png', '2023-02-23', 33498002, '2023-05-22 14:54:16', '2023-06-14 12:58:23', NULL),
(6, 'kmbappe@gmail.com', 'aguantepsg', 'kmbappe', 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png', '2019-04-23', 23465667, '2023-05-22 14:54:16', '2023-06-14 12:58:40', NULL),
(7, 'bauty.remondino@gmail.com', '21321213123', 'bautylakd', '', '2023-05-01', 22222222, '2023-05-26 19:33:43', '2023-06-16 01:57:44', NULL),
(9, 'bauty@dh.com', '12', 'bautyyy', '', '2023-05-02', 21312321, '2023-05-26 20:14:12', '2023-05-26 20:14:12', NULL),
(10, 'bauty@dhh.com', '1', 'wqewqe', '', '2023-05-02', 12312390, '2023-05-26 20:18:55', '2023-06-16 01:57:44', NULL),
(12, 'bauty@dhha.com', '2', 'qwewqewq', '', '2023-05-03', 32131231, '2023-05-26 20:21:00', '2023-05-26 20:21:00', NULL),
(13, 'santi@dh.com', '213123123', 'santi123', '', '2004-04-15', 21321312, '2023-05-29 15:04:12', '2023-06-16 01:57:44', NULL),
(15, 'santi.migna@udesa.com', 'hola123`', 'santicapo1', '', '2004-02-15', 45831391, '2023-05-29 15:09:55', '2023-05-29 15:09:55', NULL),
(17, 'ale@dh.com', '123213', 'ale123', '', '2004-04-15', 15520340, '2023-05-29 15:24:40', '2023-05-29 15:24:40', NULL),
(18, 'lanino@udesa.com', '1234', 'Lorenzo ANino', 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png', '2004-12-31', 43212145, '2023-06-04 18:19:17', '2023-06-04 18:19:17', NULL),
(19, 'b@dh.com', '$2a$10$qE6ARvP53pobjOCLWfBQW.DZWmEb/2LcHILJf/hDkTeZpG7L1HZzC', 'Bauti Hasheado', 'https://scontent.faep14-2.fna.fbcdn.net/v/t1.18169-9/10430920_325455094276116_6092913889473555912_n.jpg?_nc_cat=106&cb=99be929b-3346023f&ccb=1-7&_nc_sid=174925&_nc_ohc=8UH40Pe9DA4AX9DSEBR&_nc_ht=scontent.faep14-2.fna&oh=00_AfCB-EcIyVW-T3NwocXSE2ZUt2sSET9EleJoDN9iWTyxxw&oe=64B1ECE5', '2004-04-30', 12900009, '2023-06-04 19:17:02', '2023-06-16 22:28:28', NULL),
(20, 's@dh.com', '$2a$10$4WviA27PnMrVREmDnE885eVIVfzWcKiy/n8QAi6nuY8xqJ8VtjeyC', 'Santi Hasheado', 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png', '2023-06-15', 88777666, '2023-06-04 20:13:55', '2023-06-04 20:13:55', NULL),
(21, 'mroccia@dh.com', '$2a$10$L/80X6oyZ129VF7NUWwvt.muT1uxgoA4GGxW1sbyH7chqeEydAOiy', 'mroccia', 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png', '1212-02-12', 12345555, '2023-06-10 01:33:12', '2023-06-16 01:57:44', NULL),
(22, 'mgiacometti@dh.com', '$2a$10$SNTPRDa0kvHV/IGMxISsUu8nex0ZLkE5nKSIKNLtI7zuEiZd91KXm', 'giaco', 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png', '2023-06-07', 43189349, '2023-06-16 03:04:01', '2023-06-16 03:04:01', NULL),
(23, 'fpettinari@dh.com', '$2a$10$cUtZSCJLgVRiDueSOCvapu/4.qx6AGPZVxv6k5FjWcykt.nNO7qAe', 'fpettinari', 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png', '2023-06-23', 17120002, '2023-06-16 03:08:02', '2023-06-16 03:08:02', NULL),
(24, 'h32@dh.com', '$2a$10$dOAxdZ8eVe1OyvRrtKfgSeiXQyEZ.fOj4e/xC0Lflm1iUrwHmZxgi', 'klkl', 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png', '2023-06-30', 43320777, '2023-06-16 03:10:39', '2023-06-16 03:10:39', NULL),
(25, 'vicky@dh.com', '$2a$10$OizB5EPhvWfEOPY5Zj9BzukzPn36jQwgWh9sUFL5X6iLlaTX0FVtm', 'vicky', 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png', '2023-06-29', 20400070, '2023-06-16 03:12:42', '2023-06-16 03:12:42', NULL),
(28, 'sprueba@dh.com', '$2a$10$O9jxdJtoymgipO3ICssv3ec2e3Yqg5biG/pFl8JSHhT0R24QH2Es.', 'sprueba', 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png', '2023-06-29', 45203379, '2023-06-16 21:22:00', '2023-06-16 21:22:00', NULL),
(29, 'gola@dh.com', '$2a$10$tPoYS6lm8bu0C9WbcBwE9.WWud1qhKbRiyKkZYnyo.ImgJsYkq8jW', 'gola', 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png', '2062-02-22', 11222339, '2023-06-16 21:25:45', '2023-06-16 21:25:45', NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuario_id` (`usuario_id`),
  ADD KEY `producto_id` (`producto_id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuario_id` (`usuario_id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nombre_usuario` (`nombre_usuario`),
  ADD UNIQUE KEY `dni` (`dni`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD CONSTRAINT `comentarios_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`),
  ADD CONSTRAINT `comentarios_ibfk_2` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`);

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
