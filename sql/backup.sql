--
-- PostgreSQL database dump
--

-- Dumped from database version 10.6
-- Dumped by pg_dump version 10.6

-- Started on 2020-07-14 17:34:08

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 1 (class 3079 OID 12924)
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- TOC entry 2858 (class 0 OID 0)
-- Dependencies: 1
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 201 (class 1259 OID 336250)
-- Name: files; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.files (
    files_id integer NOT NULL,
    files_tricks_id integer,
    files_user_id integer,
    files_name character varying(255) NOT NULL,
    files_url character varying(255) NOT NULL,
    files_type character varying(10) NOT NULL
);


ALTER TABLE public.files OWNER TO postgres;

--
-- TOC entry 196 (class 1259 OID 336240)
-- Name: files_files_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.files_files_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.files_files_id_seq OWNER TO postgres;

--
-- TOC entry 197 (class 1259 OID 336242)
-- Name: group_group_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.group_group_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.group_group_id_seq OWNER TO postgres;

--
-- TOC entry 202 (class 1259 OID 336260)
-- Name: groupe; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.groupe (
    group_id integer NOT NULL,
    group_name character varying(255) NOT NULL
);


ALTER TABLE public.groupe OWNER TO postgres;

--
-- TOC entry 203 (class 1259 OID 336265)
-- Name: message; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.message (
    message_id integer NOT NULL,
    message_users_id integer,
    message_tricks_id integer,
    message_content character varying(255) NOT NULL,
    message_date timestamp(0) without time zone NOT NULL
);


ALTER TABLE public.message OWNER TO postgres;

--
-- TOC entry 198 (class 1259 OID 336244)
-- Name: message_message_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.message_message_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.message_message_id_seq OWNER TO postgres;

--
-- TOC entry 204 (class 1259 OID 336272)
-- Name: tricks; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tricks (
    tricks_id integer NOT NULL,
    tricks_group_id integer,
    tricks_name character varying(255) NOT NULL,
    tricks_description text NOT NULL
);


ALTER TABLE public.tricks OWNER TO postgres;

--
-- TOC entry 199 (class 1259 OID 336246)
-- Name: tricks_tricks_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.tricks_tricks_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tricks_tricks_id_seq OWNER TO postgres;

--
-- TOC entry 205 (class 1259 OID 336281)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    users_id integer NOT NULL,
    users_pseudo character varying(60) NOT NULL,
    users_email character varying(60) NOT NULL,
    users_password character varying(255) NOT NULL,
    users_photo character varying(255) DEFAULT NULL::character varying
);


ALTER TABLE public.users OWNER TO postgres;

--
-- TOC entry 200 (class 1259 OID 336248)
-- Name: users_users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_users_id_seq OWNER TO postgres;

--
-- TOC entry 2846 (class 0 OID 336250)
-- Dependencies: 201
-- Data for Name: files; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.files (files_id, files_tricks_id, files_user_id, files_name, files_url, files_type) FROM stdin;
1	1	1	mute2.jpg	/mute2.jpg	image
2	1	1	mute3.jpg	/mute3.jpg	image
3	1	1	snow3.jpeg	/snow3.jpeg	image
4	1	1	snow4.jpeg	/snow4.jpeg	image
5	2	1	snow5.jpeg	/snow5.jpeg	image
6	3	1	snow6.jpeg	/snow6.jpeg	image
7	4	1	snow12.jpg	/snow12.jpg	image
8	5	1	snow13.jpg	/snow13.jpg	image
9	5	1	GoPro: Alaskan Playground with John Jackson	https://www.youtube.com/embed/1TJ08caetkw	video
10	5	1	snow14.jpg	/snow14.jpg	image
11	6	1	snow20.jpg	/snow20.jpg	image
12	7	1	snow18.jpeg	/snow18.jpeg	image
13	8	1	snow16.jpg	/snow16.jpg	image
14	9	1	snow17.jpg	/snow17.jpg	image
15	10	1	snow19.jpg	/snow19.jpg	image
16	10	1	snow20.jpg	/snow20.jpg	image
17	10	1	Best Of Snowboarding 2016! Part 1.	https://www.youtube.com/embed/o7OB24ACnVM	video
18	11	1	mute3.jpg	/mute3.jpg	image
19	11	1	How To Keep Your Weight Over The Top Of Your Board	https://www.youtube.com/embed/OghfDJ9Gk_E	video
\.


--
-- TOC entry 2847 (class 0 OID 336260)
-- Dependencies: 202
-- Data for Name: groupe; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.groupe (group_id, group_name) FROM stdin;
1	Grabs
2	Rotate
3	Flips
4	Slides
\.


--
-- TOC entry 2848 (class 0 OID 336265)
-- Dependencies: 203
-- Data for Name: message; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.message (message_id, message_users_id, message_tricks_id, message_content, message_date) FROM stdin;
1	1	1	Beautiful picture of this tricks. I will try to pic another on my next snow session.	2020-07-14 15:33:08
\.


--
-- TOC entry 2849 (class 0 OID 336272)
-- Dependencies: 204
-- Data for Name: tricks; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tricks (tricks_id, tricks_group_id, tricks_name, tricks_description) FROM stdin;
1	2	Mute	Grasping the frontside edge of the board between the two feet with the front hand.
2	3	Indy	Seizure of the frontside edge of the board, between the two feet, with the rear hand.
3	2	Stalefish	Grasping the backside of the board between the two feet with the back hand
4	2	Tail grab	Seizure of the rear part of the board, with the back hand
5	4	Nose grab	Seizure of the front part of the board, with the front hand
6	2	Seat belt	Seizure of the frontside edge at the back with the front hand
7	2	Truck driver	Seizure of the front and rear edges with each hand (like holding a car steering wheel)
8	2	Rotation 360°	Grasping the frontside edge of the board between the two feet with the front hand.
9	2	Rotation 180°	Turn on 360 degrees during your flight
10	2	Japan air	Seizure between your tails and your nose of the board. When you're on flight, you must turn your left foot to tuch your right hand.
11	2	Rocket air	The front hand grabs the toe edge in front of the front foot (mute) and the back leg is boned while the board points perpendicular to the ground.
\.


--
-- TOC entry 2850 (class 0 OID 336281)
-- Dependencies: 205
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (users_id, users_pseudo, users_email, users_password, users_photo) FROM stdin;
1	gatineau85	gatineau85@gmail.com	$2y$13$PscPigiTkT/HbvD2edu6te6vb3./JAGUEZ5x/rr0Hp2cJTof5luC.	\N
\.


--
-- TOC entry 2859 (class 0 OID 0)
-- Dependencies: 196
-- Name: files_files_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.files_files_id_seq', 19, true);


--
-- TOC entry 2860 (class 0 OID 0)
-- Dependencies: 197
-- Name: group_group_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.group_group_id_seq', 4, true);


--
-- TOC entry 2861 (class 0 OID 0)
-- Dependencies: 198
-- Name: message_message_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.message_message_id_seq', 1, true);


--
-- TOC entry 2862 (class 0 OID 0)
-- Dependencies: 199
-- Name: tricks_tricks_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tricks_tricks_id_seq', 11, true);


--
-- TOC entry 2863 (class 0 OID 0)
-- Dependencies: 200
-- Name: users_users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_users_id_seq', 1, true);


--
-- TOC entry 2699 (class 2606 OID 336257)
-- Name: files files_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.files
    ADD CONSTRAINT files_pkey PRIMARY KEY (files_id);


--
-- TOC entry 2703 (class 2606 OID 336264)
-- Name: groupe groupe_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.groupe
    ADD CONSTRAINT groupe_pkey PRIMARY KEY (group_id);


--
-- TOC entry 2707 (class 2606 OID 336269)
-- Name: message message_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.message
    ADD CONSTRAINT message_pkey PRIMARY KEY (message_id);


--
-- TOC entry 2710 (class 2606 OID 336279)
-- Name: tricks tricks_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tricks
    ADD CONSTRAINT tricks_pkey PRIMARY KEY (tricks_id);


--
-- TOC entry 2714 (class 2606 OID 336289)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (users_id);


--
-- TOC entry 2700 (class 1259 OID 336258)
-- Name: idx_635405943e756ef; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_635405943e756ef ON public.files USING btree (files_tricks_id);


--
-- TOC entry 2701 (class 1259 OID 336259)
-- Name: idx_63540596b3ccc2; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_63540596b3ccc2 ON public.files USING btree (files_user_id);


--
-- TOC entry 2704 (class 1259 OID 336271)
-- Name: idx_b6bd307f51ac3762; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_b6bd307f51ac3762 ON public.message USING btree (message_tricks_id);


--
-- TOC entry 2705 (class 1259 OID 336270)
-- Name: idx_b6bd307f6e95702c; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_b6bd307f6e95702c ON public.message USING btree (message_users_id);


--
-- TOC entry 2708 (class 1259 OID 336280)
-- Name: idx_e1d902c1de4e02e0; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_e1d902c1de4e02e0 ON public.tricks USING btree (tricks_group_id);


--
-- TOC entry 2711 (class 1259 OID 336290)
-- Name: uniq_1483a5e9892bc70d; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX uniq_1483a5e9892bc70d ON public.users USING btree (users_pseudo);


--
-- TOC entry 2712 (class 1259 OID 336291)
-- Name: uniq_1483a5e9e5d83d; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX uniq_1483a5e9e5d83d ON public.users USING btree (users_email);


--
-- TOC entry 2715 (class 2606 OID 336292)
-- Name: files fk_635405943e756ef; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.files
    ADD CONSTRAINT fk_635405943e756ef FOREIGN KEY (files_tricks_id) REFERENCES public.tricks(tricks_id);


--
-- TOC entry 2716 (class 2606 OID 336297)
-- Name: files fk_63540596b3ccc2; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.files
    ADD CONSTRAINT fk_63540596b3ccc2 FOREIGN KEY (files_user_id) REFERENCES public.users(users_id);


--
-- TOC entry 2718 (class 2606 OID 336307)
-- Name: message fk_b6bd307f51ac3762; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.message
    ADD CONSTRAINT fk_b6bd307f51ac3762 FOREIGN KEY (message_tricks_id) REFERENCES public.tricks(tricks_id);


--
-- TOC entry 2717 (class 2606 OID 336302)
-- Name: message fk_b6bd307f6e95702c; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.message
    ADD CONSTRAINT fk_b6bd307f6e95702c FOREIGN KEY (message_users_id) REFERENCES public.users(users_id);


--
-- TOC entry 2719 (class 2606 OID 336312)
-- Name: tricks fk_e1d902c1de4e02e0; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tricks
    ADD CONSTRAINT fk_e1d902c1de4e02e0 FOREIGN KEY (tricks_group_id) REFERENCES public.groupe(group_id);


-- Completed on 2020-07-14 17:34:09

--
-- PostgreSQL database dump complete
--

