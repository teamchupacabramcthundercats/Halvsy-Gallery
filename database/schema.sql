CREATE DATABASE IF NOT EXISTS gallery;

USE gallery;

DROP TABLE IF EXISTS `images`;

DROP TABLE IF EXISTS `products`;

CREATE TABLE `products` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `isFavorite` BOOLEAN,
  PRIMARY KEY (`id`)
);

CREATE TABLE `images` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `full` VARCHAR(255) NOT NULL,
  `small` VARCHAR(255) NOT NULL,
  `thumbnail` VARCHAR(255) NOT NULL,
  `productId` INTEGER NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`productId`)
    REFERENCES `products` (`id`)
    ON DELETE CASCADE
);
