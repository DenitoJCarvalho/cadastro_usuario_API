create database fill_tecnologia;

use fill_tecnologia;

create table Usuario 
(
	usuario_id int not null auto_increment,
    nome varchar(40) not null,
    email varchar(40) not null,
    senha varchar(20) not null,
    criadoEm date,
    `status` tinyint default 0,
    
    primary key(usuario_id)
)
engine InnoDB,
charset utf8mb4;

create table Alternativas
(
	alternativa_id int not null auto_increment,
    descricao varchar(200),
    flag boolean,
    
    primary key(alternativa_id)
)
engine InnoDB,
charset utf8mb4;

create table Questoes
(
	questao_id int not null auto_increment,
    descricao varchar(100) not null,
    materia varchar(20) not null,
    professor int not null,
    alternativa_id int not null,
    
    primary key(questao_id),
    
    constraint usuario_questao foreign key (professor) references Usuario(usuario_id),
    constraint alternativa_questao foreign key (alternativa_id) references Alternativa(alternativa_id)
)
engine InnoDB,
charset utf8mb4;
