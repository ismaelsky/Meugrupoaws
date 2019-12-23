-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema meugrupo1
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema meugrupo1
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `meugrupo1` DEFAULT CHARACTER SET utf8 ;
USE `meugrupo1` ;

-- -----------------------------------------------------
-- Table `meugrupo1`.`tbUser`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `meugrupo1`.`tbUser` (
  `idUser` INT NOT NULL AUTO_INCREMENT,
  `stgNome` VARCHAR(45) NOT NULL,
  `stgUserName` VARCHAR(45) NULL,
  `stgEmail` VARCHAR(50) NULL,
  `stgTelefone` VARCHAR(11) NULL,
  `stgPass` VARCHAR(45) NULL,
  `intNivel` INT(1) NULL,
  `stgEndereco` VARCHAR(80) NULL,
  `Img` VARCHAR(45) NULL,
  `stgAfiliacao` VARCHAR(45) NULL,
  `stgCodAux` VARCHAR(45) NULL DEFAULT 0,
  PRIMARY KEY (`idUser`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `meugrupo1`.`tbGrupo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `meugrupo1`.`tbGrupo` (
  `idGrupo` INT NOT NULL AUTO_INCREMENT,
  `stgNome` VARCHAR(45) NOT NULL,
  `fkAdm` INT NULL,
  `stgShared` VARCHAR(45) NULL,
  `stgCodAux` VARCHAR(45) NULL,
  PRIMARY KEY (`idGrupo`),
  INDEX `grup_user_idx` (`fkAdm` ASC),
  CONSTRAINT `grup_user`
    FOREIGN KEY (`fkAdm`)
    REFERENCES `meugrupo1`.`tbUser` (`idUser`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `meugrupo1`.`tbMembro`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `meugrupo1`.`tbMembro` (
  `idMembro` INT NOT NULL AUTO_INCREMENT,
  `stgNome` VARCHAR(45) NOT NULL,
  `intTelefone` INT(9) NULL,
  `dtAniver` DATE NULL,
  `intMembro` INT(1) NULL,
  `intEvang` INT(1) NULL,
  `fkGrupo` INT NULL,
  PRIMARY KEY (`idMembro`),
  INDEX `menbro_grupo_idx` (`fkGrupo` ASC),
  CONSTRAINT `menbro_grupo`
    FOREIGN KEY (`fkGrupo`)
    REFERENCES `meugrupo1`.`tbGrupo` (`idGrupo`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `meugrupo1`.`tbPresenca`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `meugrupo1`.`tbPresenca` (
  `idPresenca` INT NOT NULL AUTO_INCREMENT,
  `stgNome` VARCHAR(45) NOT NULL,
  `intCodMembro` INT(100) NULL DEFAULT 0,
  `intPresenca` VARCHAR(1) NOT NULL,
  `dtData` DATE NULL,
  `fkGrupo` INT NULL,
  PRIMARY KEY (`idPresenca`),
  INDEX `pres_membro_idx` (`fkGrupo` ASC),
  CONSTRAINT `pres_membro`
    FOREIGN KEY (`fkGrupo`)
    REFERENCES `meugrupo1`.`tbMembro` (`idMembro`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `meugrupo1`.`tbMensagem`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `meugrupo1`.`tbMensagem` (
  `idMensagem` INT NOT NULL AUTO_INCREMENT,
  `fkUser` INT NOT NULL,
  `stgTipo` VARCHAR(45) NOT NULL,
  `txtMensagem` TEXT(250) NOT NULL,
  `stgStatus` VARCHAR(45) NULL,
  PRIMARY KEY (`idMensagem`),
  INDEX `mens_user_idx` (`fkUser` ASC),
  CONSTRAINT `mens_user`
    FOREIGN KEY (`fkUser`)
    REFERENCES `meugrupo1`.`tbUser` (`idUser`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
