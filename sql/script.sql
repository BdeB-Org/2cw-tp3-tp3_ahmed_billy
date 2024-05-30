-- Generated by Oracle SQL Developer Data Modeler 23.1.0.087.0806
--   at:        2024-05-18 18:23:21 EDT
--   site:      Oracle Database 11g
--   type:      Oracle Database 11g



-- predefined type, no DDL - MDSYS.SDO_GEOMETRY

-- predefined type, no DDL - XMLTYPE




CREATE TABLE emprunts (
    id              NUMBER NOT NULL,
    id_utilisateur  NUMBER NOT NULL,
    id_livre        NUMBER NOT NULL,
    date_emprunt    DATE NOT NULL,
    utilisateurs_id NUMBER NOT NULL,
    livres_id       NUMBER NOT NULL
);

ALTER TABLE emprunts ADD CONSTRAINT emprunts_pk PRIMARY KEY ( id );

CREATE TABLE livres (
    id             NUMBER NOT NULL,
    titre          VARCHAR2(15) NOT NULL,
    auteur         VARCHAR2(15),
    genre          VARCHAR2(15),
    disponibiliter CHAR(1)
);

ALTER TABLE livres ADD CONSTRAINT livres_pk PRIMARY KEY ( id );

CREATE TABLE retours (
    id          NUMBER NOT NULL,
    id_emprunt  NUMBER,
    date_retour DATE NOT NULL,
    emprunts_id NUMBER NOT NULL
);

CREATE UNIQUE INDEX retours__idx ON retours (emprunts_id ASC);

ALTER TABLE retours ADD CONSTRAINT retours_pk PRIMARY KEY ( id );

CREATE TABLE utilisateurs (
    id           NUMBER NOT NULL,
    nom          VARCHAR2(20) NOT NULL,
    email        VARCHAR2(20) NOT NULL,
    mot_de_passe VARCHAR2(15) NOT NULL
);

ALTER TABLE utilisateurs ADD CONSTRAINT utilisateurs_pk PRIMARY KEY ( id );

ALTER TABLE emprunts
    ADD CONSTRAINT emprunts_livres_fk FOREIGN KEY ( livres_id )
        REFERENCES livres ( id );

ALTER TABLE emprunts
    ADD CONSTRAINT emprunts_utilisateurs_fk FOREIGN KEY ( utilisateurs_id )
        REFERENCES utilisateurs ( id );

ALTER TABLE retours
    ADD CONSTRAINT retours_emprunts_fk FOREIGN KEY ( emprunts_id )
        REFERENCES emprunts ( id );


        INSERT INTO livres (id, titre, auteur, genre, disponibiliter) VALUES (1, 'Vietnam', 'William', 'Roman', 'O');
INSERT INTO livres (id, titre, auteur, genre, disponibiliter) VALUES (2, 'Sigma', 'Ahmed', 'Science', 'O');
INSERT INTO livres (id, titre, auteur, genre, disponibiliter) VALUES (3, 'Noir', 'Omar', 'Fantasie', 'O');
INSERT INTO livres (id, titre, auteur, genre, disponibiliter) VALUES (4, 'Jaune', 'Billy', 'Peur', 'N');
INSERT INTO livres (id, titre, auteur, genre, disponibiliter) VALUES (5, 'Ali', 'Muhammed', 'Mystère', 'O');
INSERT INTO livres (id, titre, auteur, genre, disponibiliter) VALUES (6, 'Streets', 'Snoop', 'Histoire', 'O');
INSERT INTO livres (id, titre, auteur, genre, disponibiliter) VALUES (7, 'Biggie', 'Tupac', 'Histoire', 'N');
INSERT INTO livres (id, titre, auteur, genre, disponibiliter) VALUES (8, 'MJ', 'Jordan', 'Aventure', 'O');
INSERT INTO livres (id, titre, auteur, genre, disponibiliter) VALUES (9, 'DBZ', 'Max', 'Drame', 'N');
INSERT INTO livres (id, titre, auteur, genre, disponibiliter) VALUES (10, 'Pinochio', 'Aymen', 'Roman', 'O');

-- Enable ORDS for each table
BEGIN
  ORDS.enable_object (
    p_enabled      => TRUE, 
    p_schema       => 'RESTSCOTT',
    p_object       => 'LIVRES',
    p_object_type  => 'TABLE', 
    p_object_alias => 'livres'
  );

  ORDS.enable_object (
    p_enabled      => TRUE, 
    p_schema       => 'RESTSCOTT',
    p_object       => 'EMPRUNTS',
    p_object_type  => 'TABLE', 
    p_object_alias => 'emprunts'
  );

  ORDS.enable_object (
    p_enabled      => TRUE, 
    p_schema       => 'RESTSCOTT',
    p_object       => 'RETOURS',
    p_object_type  => 'TABLE', 
    p_object_alias => 'retours'
  );

  ORDS.enable_object (
    p_enabled      => TRUE, 
    p_schema       => 'RESTSCOTT',
    p_object       => 'UTILISATEURS',
    p_object_type  => 'TABLE', 
    p_object_alias => 'users'
  );

  COMMIT;
END;
/




-- Oracle SQL Developer Data Modeler Summary Report: 
-- 
-- CREATE TABLE                             4
-- CREATE INDEX                             1
-- ALTER TABLE                              7
-- CREATE VIEW                              0
-- ALTER VIEW                               0
-- CREATE PACKAGE                           0
-- CREATE PACKAGE BODY                      0
-- CREATE PROCEDURE                         0
-- CREATE FUNCTION                          0
-- CREATE TRIGGER                           0
-- ALTER TRIGGER                            0
-- CREATE COLLECTION TYPE                   0
-- CREATE STRUCTURED TYPE                   0
-- CREATE STRUCTURED TYPE BODY              0
-- CREATE CLUSTER                           0
-- CREATE CONTEXT                           0
-- CREATE DATABASE                          0
-- CREATE DIMENSION                         0
-- CREATE DIRECTORY                         0
-- CREATE DISK GROUP                        0
-- CREATE ROLE                              0
-- CREATE ROLLBACK SEGMENT                  0
-- CREATE SEQUENCE                          0
-- CREATE MATERIALIZED VIEW                 0
-- CREATE MATERIALIZED VIEW LOG             0
-- CREATE SYNONYM                           0
-- CREATE TABLESPACE                        0
-- CREATE USER                              0
-- 
-- DROP TABLESPACE                          0
-- DROP DATABASE                            0
-- 
-- REDACTION POLICY                         0
-- 
-- ORDS DROP SCHEMA                         0
-- ORDS ENABLE SCHEMA                       0
-- ORDS ENABLE OBJECT                       0
-- 
-- ERRORS                                   0
-- WARNINGS                                 0
