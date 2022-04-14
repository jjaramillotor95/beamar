-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-04-2022 a las 09:37:43
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 7.4.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `crm_app`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `amandars`
--

CREATE TABLE `amandars` (
  `id` int(11) NOT NULL,
  `idcontrato` int(11) DEFAULT NULL,
  `titulo` varchar(100) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `contrato` varchar(45) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `numeroContrato` varchar(20) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `fechaInicio` date DEFAULT NULL,
  `fechaFinal` date DEFAULT NULL,
  `sueldo` bigint(20) DEFAULT NULL,
  `ciudadOfc` text COLLATE utf8_spanish2_ci DEFAULT NULL,
  `dirOfc` text COLLATE utf8_spanish2_ci DEFAULT NULL,
  `tipoSueldo` tinyint(4) DEFAULT NULL,
  `cargo` text COLLATE utf8_spanish2_ci DEFAULT NULL,
  `grupoNomina` text COLLATE utf8_spanish2_ci DEFAULT NULL,
  `subtipoCotizante` text COLLATE utf8_spanish2_ci DEFAULT NULL,
  `tipoCotizante` varchar(45) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `reteFuente` tinyint(4) DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `amandars`
--

INSERT INTO `amandars` (`id`, `idcontrato`, `titulo`, `contrato`, `numeroContrato`, `fechaInicio`, `fechaFinal`, `sueldo`, `ciudadOfc`, `dirOfc`, `tipoSueldo`, `cargo`, `grupoNomina`, `subtipoCotizante`, `tipoCotizante`, `reteFuente`, `createdAt`, `updatedAt`) VALUES
(3, 10, 'OK', NULL, NULL, NULL, NULL, 100, 'zcx', 'ada', NULL, NULL, 'Grupo 1', 'Tipo 2', 'Tipo 1', 1, '2022-04-14', '2022-04-14'),
(4, 10, 'Bajo sueldo', NULL, NULL, NULL, NULL, 100000, 'OK', 'ok', NULL, NULL, 'Grupo 2', 'Tipo 1', 'Tipo 2', 1, '2022-04-14', '2022-04-14');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contratos`
--

CREATE TABLE `contratos` (
  `id` int(11) NOT NULL,
  `idempleado` int(11) DEFAULT NULL,
  `contrato` varchar(45) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `numeroContrato` varchar(20) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `fechaInicio` date DEFAULT NULL,
  `fechaFinal` date DEFAULT NULL,
  `sueldo` bigint(20) DEFAULT NULL,
  `ciudadOfc` text COLLATE utf8_spanish2_ci DEFAULT NULL,
  `dirOfc` text COLLATE utf8_spanish2_ci DEFAULT NULL,
  `tipoSueldo` tinyint(4) DEFAULT NULL,
  `cargo` text COLLATE utf8_spanish2_ci DEFAULT NULL,
  `grupoNomina` text COLLATE utf8_spanish2_ci DEFAULT NULL,
  `subtipoCotizante` text COLLATE utf8_spanish2_ci DEFAULT NULL,
  `tipoCotizante` varchar(45) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `reteFuente` tinyint(4) DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `contratos`
--

INSERT INTO `contratos` (`id`, `idempleado`, `contrato`, `numeroContrato`, `fechaInicio`, `fechaFinal`, `sueldo`, `ciudadOfc`, `dirOfc`, `tipoSueldo`, `cargo`, `grupoNomina`, `subtipoCotizante`, `tipoCotizante`, `reteFuente`, `createdAt`, `updatedAt`) VALUES
(5, 0, 'Indefinido', '22413568C', '2022-04-15', '2022-04-15', 6000000, '545', '555454', 0, 'Admin', 'Grupo 1', '', NULL, 0, '2022-04-13', '2022-04-13'),
(6, 89, 'Prestacion de servicio', '22413205C', '2022-04-21', '2022-04-15', 333, 'Centro', 'OK', 1, 'CM', 'Grupo 3', 'Tipo 3', 'Tipo 2', 0, '2022-04-13', '2022-04-14'),
(7, 90, 'Prestacion de servicio', '22413141C', '2022-04-16', '2022-04-13', 300000000, '234234', '324234', 1, 'Admin', 'Grupo 1', '', NULL, 1, '2022-04-13', '2022-04-13'),
(8, 92, 'Indefinido', '22413530C', '2022-04-14', '2022-04-14', 600, '67', '567', 0, 'Admin', 'Grupo 1', 'Tipo 3', 'Tipo 2', 1, '2022-04-13', '2022-04-13'),
(9, 9, 'Prestacion de servicio', '22413243C', '2022-04-13', '2022-04-14', 1000000, '12314', '345345345', 0, 'Desarrollo WEB', 'Grupo 2', 'Tipo 1', 'Tipo 3', 0, '2022-04-13', '2022-04-14'),
(10, 89, 'Pasantia', '22413487C', '2022-04-12', '2022-04-15', 67000, '5567', '456456', 1, 'Desarrollo WEB', 'Grupo 1', 'Tipo 1', 'Tipo 2', 1, '2022-04-13', '2022-04-13'),
(12, 89, 'Indefinido', NULL, '2022-04-21', '2022-04-13', 333, '767', '677', 0, 'Desarrollo WEB', 'Grupo 1', 'Tipo 3', 'Tipo 2', 0, '2022-04-14', '2022-04-14'),
(13, 9, 'Prestacion de servicio', NULL, '2022-04-13', '2022-04-14', 1000000, '12314', '345345345', 0, 'Desarrollo WEB', 'Grupo 2', 'Tipo 2', 'Tipo 3', 0, '2022-04-14', '2022-04-14'),
(14, 9, 'Indefinido', NULL, '2022-04-13', '2022-04-14', 1000000, '12314', '345345345', 0, 'Desarrollo WEB', 'Grupo 2', 'Tipo 2', 'Tipo 1', 0, '2022-04-14', '2022-04-14'),
(15, 9, 'Prestacion de servicio', NULL, '2022-04-13', '2022-04-14', 1000000, '12314', '345345345', 0, 'Desarrollo WEB', 'Grupo 2', 'Tipo 2', 'Tipo 1', 0, '2022-04-14', '2022-04-14');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleados`
--

CREATE TABLE `empleados` (
  `id` int(11) NOT NULL,
  `numeroEmpleado` varchar(20) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `nombres` varchar(100) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `apellidos` varchar(100) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `tipoDoc` varchar(10) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `documento` bigint(20) DEFAULT NULL,
  `celular` varchar(12) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `direccion` text COLLATE utf8_spanish2_ci DEFAULT NULL,
  `ciudad` varchar(45) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `idmetodoPago` varchar(100) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `datosPago` varchar(100) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `idsalud` varchar(100) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `idpension` varchar(100) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `idarl` varchar(100) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `idcajaCompensacion` varchar(100) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `idcensantias` varchar(100) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `empleados`
--

INSERT INTO `empleados` (`id`, `numeroEmpleado`, `nombres`, `apellidos`, `tipoDoc`, `documento`, `celular`, `direccion`, `ciudad`, `idmetodoPago`, `datosPago`, `idsalud`, `idpension`, `idarl`, `idcajaCompensacion`, `idcensantias`, `createdAt`, `updatedAt`) VALUES
(88, '22413348E', 'Juan', 'Jaramillo', '1', 123456, '66666', 'sdfsfd', '1', '1', '234234', '2', '1', '0', '1', '1', '2022-04-13', '2022-04-13'),
(89, '22413802E', 'Miguel', 'ok', '1', 7676, '7676', '6767', '1', '1', '766776', '1', '2', '0', '2', '1', '2022-04-13', '2022-04-13'),
(90, '22413225E', 'Torres', 'Torres', '1', 67, '67', 'gh', '2', '1', '6565', '2', '1', '1', '1', '1', '2022-04-13', '2022-04-13'),
(92, '22413071E', 'Sergio3', 'Herrera4', '1', 1234574, '345345', '54342', '2', '1', '3245345', 'saludcol', 'Seguro', 'sura', 'Caja 2', 'Colpensiones', '2022-04-13', '2022-04-13');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `amandars`
--
ALTER TABLE `amandars`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `contratos`
--
ALTER TABLE `contratos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `empleados`
--
ALTER TABLE `empleados`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `doc` (`documento`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `amandars`
--
ALTER TABLE `amandars`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `contratos`
--
ALTER TABLE `contratos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `empleados`
--
ALTER TABLE `empleados`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=93;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
