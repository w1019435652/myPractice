/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     2018/2/22 19:14:12                           */
/*==============================================================*/


drop table if exists account_all;

drop table if exists u_comment;

drop table if exists user;

drop table if exists user_friend;

drop table if exists user_state;

drop table if exists user_stateImg;

drop table if exists user_stateImg2;

/*==============================================================*/
/* Table: account_all                                           */
/*==============================================================*/
create table account_all
(
   a_id                 int not null auto_increment,
   a_account            varchar(50),
   a_state              int,
   primary key (a_id)
);

/*==============================================================*/
/* Table: u_comment                                             */
/*==============================================================*/
create table u_comment
(
   c_id                 int not null auto_increment,
   s_id                 int not null,
   c_account            varchar(50),
   c_aComment           varchar(200),
   c_beAccount          varchar(50),
   c_bComment           varchar(200),
   primary key (c_id)
);

/*==============================================================*/
/* Table: user                                                  */
/*==============================================================*/
create table user
(
   u_id                 int not null auto_increment,
   u_name               varchar(50) not null,
   u_account            varchar(50) not null,
   u_pwd                varchar(50) not null,
   u_img                varchar(500),
   u_phone              varchar(50),
   u_state              int,
   primary key (u_id)
);

/*==============================================================*/
/* Table: user_friend                                           */
/*==============================================================*/
create table user_friend
(
   f_id                 int not null auto_increment,
   u_id                 int,
   f_account            varchar(50),
   f_intimacy           int,
   f_addTime            date,
   primary key (f_id)
);

/*==============================================================*/
/* Table: user_state                                            */
/*==============================================================*/
create table user_state
(
   s_id                 int not null auto_increment,
   u_id                 int,
   s_title              varchar(200),
   s_browseNum          int,
   s_state              int,
   primary key (s_id)
);

/*==============================================================*/
/* Table: user_stateImg                                         */
/*==============================================================*/
create table user_stateImg
(
   si_id                int not null auto_increment,
   s_id                 int not null,
   s_img                varchar(500),
   primary key (si_id)
);

/*==============================================================*/
/* Table: user_stateImg2                                        */
/*==============================================================*/
create table user_stateImg2
(
   sv_id                int not null auto_increment,
   s_id                 int not null,
   s_video              varchar(500),
   primary key (sv_id)
);

alter table u_comment add constraint FK_Reference_5 foreign key (s_id)
      references user_state (s_id) on delete restrict on update restrict;

alter table user_friend add constraint FK_Reference_6 foreign key (u_id)
      references user (u_id) on delete restrict on update restrict;

alter table user_state add constraint FK_Reference_2 foreign key (u_id)
      references user (u_id) on delete restrict on update restrict;

alter table user_stateImg add constraint FK_Reference_4 foreign key (s_id)
      references user_state (s_id) on delete restrict on update restrict;

alter table user_stateImg2 add constraint FK_Reference_7 foreign key (s_id)
      references user_state (s_id) on delete restrict on update restrict;

