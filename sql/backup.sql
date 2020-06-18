--
-- PostgreSQL database dump
--

-- Dumped from database version 10.6
-- Dumped by pg_dump version 10.6

-- Started on 2020-06-18 11:09:20

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
-- TOC entry 2848 (class 0 OID 0)
-- Dependencies: 1
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 196 (class 1259 OID 303279)
-- Name: files; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.files (
    files_id integer NOT NULL,
    files_name text NOT NULL,
    files_url text,
    files_size integer,
    files_date date,
    files_type text,
    files_tricks_id integer
);


ALTER TABLE public.files OWNER TO postgres;

--
-- TOC entry 202 (class 1259 OID 319735)
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
-- TOC entry 200 (class 1259 OID 311527)
-- Name: groupe; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.groupe (
    group_id integer NOT NULL,
    group_name text
);


ALTER TABLE public.groupe OWNER TO postgres;

--
-- TOC entry 197 (class 1259 OID 303285)
-- Name: message; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.message (
    message_id integer NOT NULL,
    message_content text,
    message_users_id integer,
    message_tricks_id integer,
    message_date date
);


ALTER TABLE public.message OWNER TO postgres;

--
-- TOC entry 201 (class 1259 OID 319733)
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
-- TOC entry 198 (class 1259 OID 303291)
-- Name: tricks; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tricks (
    tricks_id integer NOT NULL,
    tricks_name text,
    tricks_description text,
    tricks_date date,
    tricks_group_id integer
);


ALTER TABLE public.tricks OWNER TO postgres;

--
-- TOC entry 203 (class 1259 OID 319737)
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
-- TOC entry 199 (class 1259 OID 303297)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    users_id integer NOT NULL,
    users_pseudo text,
    users_email text,
    users_password text,
    users_photo text
);


ALTER TABLE public.users OWNER TO postgres;

--
-- TOC entry 204 (class 1259 OID 319739)
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
-- TOC entry 2832 (class 0 OID 303279)
-- Dependencies: 196
-- Data for Name: files; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.files (files_id, files_name, files_url, files_size, files_date, files_type, files_tricks_id) FROM stdin;
66	_received_2034637816830953.jpg	/_received_2034637816830953.jpg	\N	\N	image	\N
2	mute2.jpg	/mute2.jpg	4485	\N	image	1
3	mute3.jpg	/mute3.jpg	9985	\N	image	1
67	FOCUS_mobile3.png	/FOCUS_mobile3.png	\N	\N	image	\N
68	_received_2034637816830953.jpg	/_received_2034637816830953.jpg	\N	\N	image	\N
69	_received_2034637816830953.jpg	/_received_2034637816830953.jpg	\N	\N	image	\N
7	snow3.jpeg	/snow3.jpeg	\N	\N	image	3
8	snow4.jpeg	/snow4.jpeg	\N	\N	image	4
70	_received_2034637816830953.jpg	/_received_2034637816830953.jpg	\N	\N	image	\N
10	snow6.jpeg	/snow6.jpeg	\N	\N	image	5
11	adrien.jpg	/user/adrien.jpg	\N	\N	image	\N
12	erwan.jpg	/user/erwan.jpg	\N	\N	image	\N
13	alexis.jpg	/user/alexis.jpg	\N	\N	image	\N
9	snow5.jpeg	/snow5.jpeg	\N	\N	image	6
15	snow12.jpg	/snow12.jpg	\N	\N	image	8
16	snow13.jpg	/snow13.jpg	\N	\N	image	9
17	C:\\wamp64\\www\\projet6/public/files/	/C:\\wamp64\\www\\projet6/public/files/	\N	\N	\N	\N
18	C:\\wamp64\\www\\projet6/public/files/	/C:\\wamp64\\www\\projet6/public/files/	\N	\N	\N	\N
20	C:\\wamp64\\www\\projet6/public/files/	/C:\\wamp64\\www\\projet6/public/files/	\N	\N	\N	\N
40	C:\\wamp64\\www\\projet6/public/files/	/C:\\wamp64\\www\\projet6/public/files/	\N	\N	\N	\N
43	C:\\wamp64\\www\\projet6/public/files/	/C:\\wamp64\\www\\projet6/public/files/	\N	\N	\N	\N
74	snow18.jpeg	/snow18.jpeg	\N	\N	/image	7
49	testvideo	testvideo.link	\N	\N	Video	\N
50	_received_2034637816830953.jpg	/_received_2034637816830953.jpg	\N	\N	image	\N
51	_received_2034637816830953.jpg	/_received_2034637816830953.jpg	\N	\N	image	\N
58	C:\\wamp64\\www\\projet6/public/files/	/C:\\wamp64\\www\\projet6/public/files/	\N	\N	\N	\N
59	C:\\wamp64\\www\\projet6/public/files/	/C:\\wamp64\\www\\projet6/public/files/	\N	\N	\N	\N
60	C:\\wamp64\\www\\projet6/public/files/	/C:\\wamp64\\www\\projet6/public/files/	\N	\N	\N	\N
61	C:\\wamp64\\www\\projet6/public/files/	/C:\\wamp64\\www\\projet6/public/files/	\N	\N	\N	\N
62	C:\\wamp64\\www\\projet6/public/files/	/C:\\wamp64\\www\\projet6/public/files/	\N	\N	\N	\N
63	C:\\wamp64\\www\\projet6/public/files/	/C:\\wamp64\\www\\projet6/public/files/	\N	\N	\N	\N
64	C:\\wamp64\\www\\projet6/public/files/	/C:\\wamp64\\www\\projet6/public/files/	\N	\N	\N	\N
65	C:\\wamp64\\www\\projet6/public/files/	/C:\\wamp64\\www\\projet6/public/files/	\N	\N	\N	\N
75	_received_2034637816830953.jpeg	/_received_2034637816830953.jpeg	\N	\N	image	\N
76	default	https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=100	\N	\N	image	\N
77	4d0dcdca32364346931a17d186584153.jpeg	/4d0dcdca32364346931a17d186584153.jpeg	\N	\N	\N	\N
78	GoPro: Alaskan Playground with John Jackson	https://www.youtube.com/embed/1TJ08caetkw	\N	\N	video	3
79	snow14.jpg	/snow14.jpg	\N	\N	image	10
80	snow20	/snow20.jpg	\N	\N	\N	11
\.


--
-- TOC entry 2836 (class 0 OID 311527)
-- Dependencies: 200
-- Data for Name: groupe; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.groupe (group_id, group_name) FROM stdin;
1	Grabs
2	Rotate
3	Flips
4	Slides
\.


--
-- TOC entry 2833 (class 0 OID 303285)
-- Dependencies: 197
-- Data for Name: message; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.message (message_id, message_content, message_users_id, message_tricks_id, message_date) FROM stdin;
22	Beautiful photo, I hope you will continue to show your tricks !	96	1	2020-06-16
23	Try to catch this moment with a GoPro at the last time	96	1	2020-06-16
24	I have a last question about this practice.	96	1	2020-06-16
\.


--
-- TOC entry 2834 (class 0 OID 303291)
-- Dependencies: 198
-- Data for Name: tricks; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tricks (tricks_id, tricks_name, tricks_description, tricks_date, tricks_group_id) FROM stdin;
3	Indy 	Seizure of the frontside edge of the board, between the two feet, with the rear hand.	\N	3
4	Stalefish	Grasping the backside of the board between the two feet with the back hand	\N	2
5	Tail grab	Seizure of the rear part of the board, with the back hand	\N	1
6	Nose grab	Seizure of the front part of the board, with the front hand	\N	1
8	Seat belt	Seizure of the frontside edge at the back with the front hand	\N	1
9	Truck driver	Seizure of the front and rear edges with each hand (like holding a car steering wheel)	\N	1
7	Japan air XL	Seizure of the front of the board, with the front hand, on the side of the frontside edge	\N	1
10	Rotation 360	Turn on 360 degrees during your flight	\N	3
1	Mute 	Grasping the frontside edge of the board between the two feet with the front hand.	\N	1
11	Rotation 180°	Turn on 360 degrees and receive your flight on your back	\N	3
\.


--
-- TOC entry 2835 (class 0 OID 303297)
-- Dependencies: 199
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (users_id, users_pseudo, users_email, users_password, users_photo) FROM stdin;
97	alexis33	alexis33@gmail.com	$2y$10$k3wPmKKXBz9FPKJwYJ9/CuJ/pcbrpSPwGDzq55DbjyBDs5r5eqvn.	\N
96	gatineau85	adgat34@gmail.com	$2y$10$yk8G8accmJZnJubGlKG18ufgCIih7dre.f1gHlpib0e3wK5TgTgci	adrien.jpg
\.


--
-- TOC entry 2849 (class 0 OID 0)
-- Dependencies: 202
-- Name: files_files_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.files_files_id_seq', 78, true);


--
-- TOC entry 2850 (class 0 OID 0)
-- Dependencies: 201
-- Name: message_message_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.message_message_id_seq', 24, true);


--
-- TOC entry 2851 (class 0 OID 0)
-- Dependencies: 203
-- Name: tricks_tricks_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tricks_tricks_id_seq', 114, true);


--
-- TOC entry 2852 (class 0 OID 0)
-- Dependencies: 204
-- Name: users_users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_users_id_seq', 97, true);


--
-- TOC entry 2698 (class 2606 OID 303310)
-- Name: files pk_files_id; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.files
    ADD CONSTRAINT pk_files_id PRIMARY KEY (files_id);


--
-- TOC entry 2706 (class 2606 OID 311534)
-- Name: groupe pk_group_id; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.groupe
    ADD CONSTRAINT pk_group_id PRIMARY KEY (group_id);


--
-- TOC entry 2700 (class 2606 OID 303304)
-- Name: message pk_message_id; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.message
    ADD CONSTRAINT pk_message_id PRIMARY KEY (message_id);


--
-- TOC entry 2702 (class 2606 OID 303308)
-- Name: tricks pk_tricks_id; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tricks
    ADD CONSTRAINT pk_tricks_id PRIMARY KEY (tricks_id);


--
-- TOC entry 2704 (class 2606 OID 303306)
-- Name: users pk_user_id; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT pk_user_id PRIMARY KEY (users_id);


--
-- TOC entry 2707 (class 2606 OID 303321)
-- Name: files files_files_tricks_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.files
    ADD CONSTRAINT files_files_tricks_id_fkey FOREIGN KEY (files_tricks_id) REFERENCES public.tricks(tricks_id);


--
-- TOC entry 2709 (class 2606 OID 303316)
-- Name: message message_message_tricks_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.message
    ADD CONSTRAINT message_message_tricks_id_fkey FOREIGN KEY (message_tricks_id) REFERENCES public.tricks(tricks_id);


--
-- TOC entry 2708 (class 2606 OID 303311)
-- Name: message message_message_users_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.message
    ADD CONSTRAINT message_message_users_id_fkey FOREIGN KEY (message_users_id) REFERENCES public.users(users_id);


--
-- TOC entry 2710 (class 2606 OID 311556)
-- Name: tricks tricks_tricks_group_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tricks
    ADD CONSTRAINT tricks_tricks_group_id_fkey FOREIGN KEY (tricks_group_id) REFERENCES public.groupe(group_id);


-- Completed on 2020-06-18 11:09:20

--
-- PostgreSQL database dump complete
--

