/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: article
# ------------------------------------------------------------

DROP TABLE IF EXISTS `article`;
CREATE TABLE `article` (
  `idarticle` int(11) NOT NULL AUTO_INCREMENT,
  `title` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `text` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `category` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idarticle`)
) AUTO_INCREMENT = 26 COLLATE = utf8mb4_0900_ai_ci;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: categorys
# ------------------------------------------------------------

DROP TABLE IF EXISTS `categorys`;
CREATE TABLE `categorys` (
  `idcategorys` int(11) NOT NULL AUTO_INCREMENT,
  `category` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `Datum` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idcategorys`)
) AUTO_INCREMENT = 9 COLLATE = utf8mb4_0900_ai_ci;

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: article
# ------------------------------------------------------------

INSERT INTO
  `article` (`idarticle`, `title`, `text`, `category`, `date`)
VALUES
  (
    12,
    'Online Developer, Freelance',
    'LkÖKLKököäkäkll',
    'About',
    '2019-12-04 22:36:18'
  );
INSERT INTO
  `article` (`idarticle`, `title`, `text`, `category`, `date`)
VALUES
  (
    13,
    'Freelance Frontend Developer',
    '.hkhjhlklkjhlkhkjhjölh.',
    'Referenz',
    '2019-12-04 22:39:49'
  );
INSERT INTO
  `article` (`idarticle`, `title`, `text`, `category`, `date`)
VALUES
  (
    24,
    'React + Express — Creating the boilerplate',
    'Source code of this tutorial is available in: https://github.com/AvanthikaMeenakshi/ReactNodeNew\nFacebook’s create-react-app is a great boon to React enthusiasts because you don’t have to scratch your head for configuring Webpack and Babel. Right-away you can clone create-react-app, and can start coding in react.\nNow, let’s see how we can connect our ExpressJS backend to this creat-react-app.',
    'Referenz',
    '2019-12-05 02:35:42'
  );
INSERT INTO
  `article` (`idarticle`, `title`, `text`, `category`, `date`)
VALUES
  (
    25,
    'Adding a Sass Stylesheet',
    'Note: this feature is available with react-scripts@2.0.0 and higher.\n\nGenerally, we recommend that you don’t reuse the same CSS classes across different components. For example, instead of using a .Button CSS class in <AcceptButton> and <RejectButton> components, we recommend creating a <Button> component with its own .Button styles, that both <AcceptButton> and <RejectButton> can render (but not inherit).\n\nFollowing this rule often makes CSS preprocessors less useful, as features like mixins and nesting are replaced by component composition. You can, however, integrate a CSS preprocessor if you find it valuable.\n\n',
    'Projekt',
    '2019-12-05 02:36:41'
  );

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: categorys
# ------------------------------------------------------------

INSERT INTO
  `categorys` (`idcategorys`, `category`, `Datum`)
VALUES
  (5, 'Home', '2019-12-04 16:14:05');
INSERT INTO
  `categorys` (`idcategorys`, `category`, `Datum`)
VALUES
  (6, 'About', '2019-12-04 16:14:05');
INSERT INTO
  `categorys` (`idcategorys`, `category`, `Datum`)
VALUES
  (7, 'Referenz', '2019-12-04 16:14:05');
INSERT INTO
  `categorys` (`idcategorys`, `category`, `Datum`)
VALUES
  (8, 'Projekt', '2019-12-04 16:14:05');

/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
