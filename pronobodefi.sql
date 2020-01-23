/*
SQLyog Enterprise Trial - MySQL GUI v7.11 
MySQL - 5.6.46-log : Database - pronobo
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

CREATE DATABASE /*!32312 IF NOT EXISTS*/`pronobo` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `pronobo`;

/*Table structure for table `authentification` */

DROP TABLE IF EXISTS `authentification`;

CREATE TABLE `authentification` (
  `codigo` int(11) NOT NULL AUTO_INCREMENT,
  `login` varchar(50) NOT NULL,
  `password` varchar(200) NOT NULL,
  PRIMARY KEY (`codigo`,`login`),
  UNIQUE KEY `codigo` (`codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

/*Data for the table `authentification` */

insert  into `authentification`(`codigo`,`login`,`password`) values (2,'bouraoui.zich@gmail.com','263281266'),(3,'eee@eee.co','263281266'),(4,'ccc@ccc.cc','263281266'),(5,'ooo@bbb.com','263281266'),(6,'test@gmail.com','263281266');

/*Table structure for table `endereco` */

DROP TABLE IF EXISTS `endereco`;

CREATE TABLE `endereco` (
  `codigo` int(11) NOT NULL AUTO_INCREMENT,
  `numero` int(11) NOT NULL,
  `cep` int(11) NOT NULL,
  `complemento` varchar(200) DEFAULT NULL,
  `codigo_user` int(11) NOT NULL,
  PRIMARY KEY (`codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

/*Data for the table `endereco` */

insert  into `endereco`(`codigo`,`numero`,`cep`,`complemento`,`codigo_user`) values (1,1,156215,'complemento',1),(2,1,14523655,'test',24),(3,3,3,'test',2),(4,2,2,'test10',25);

/*Table structure for table `usuario` */

DROP TABLE IF EXISTS `usuario`;

CREATE TABLE `usuario` (
  `codigo1` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) NOT NULL,
  `cpf` varchar(15) NOT NULL,
  `email` varchar(50) NOT NULL,
  PRIMARY KEY (`codigo1`,`email`),
  UNIQUE KEY `codigo` (`codigo1`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=latin1;

/*Data for the table `usuario` */

insert  into `usuario`(`codigo1`,`nome`,`cpf`,`email`) values (1,'bouraoui','1234567894','bbb@gmail.com'),(2,'test','14785236987','test@test.com'),(24,'ooo','14785236999','oppp@mm.com'),(25,'test10','14522265454','test10@test.com');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
