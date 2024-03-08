DROP TABLE IF EXISTS "user", "genres", "song_request", "artist", "song_details", "artist_genres";

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "email" VARCHAR (150) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "class" INT NOT NULL DEFAULT 1,
    "name" VARCHAR (150),
    "credit" INT,
    "created_at" TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE "genres" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (80) UNIQUE NOT NULL
);

CREATE TABLE "song_request" (
    "id" SERIAL PRIMARY KEY,
    "user_id" integer REFERENCES "user",
    "genre_id" integer REFERENCES "genres",
    "requester" VARCHAR (150),
    "recipient" VARCHAR (150),
    "pronunciation" VARCHAR (150),
    "recipient_relationship" VARCHAR (150),
    "occasion" VARCHAR (150) DEFAULT NULL,
    "vocal_type" VARCHAR (150),
    "vibe" VARCHAR (150),
    "tempo" VARCHAR (150),
    "inspiration" VARCHAR,
    "story1" VARCHAR,
    "story2" VARCHAR,
    "important_what" VARCHAR,
    "important_why" VARCHAR,
    "additional_info" VARCHAR,
    "created_at" TIMESTAMPTZ DEFAULT NOW(),
    "delivery_days" integer,
    "streaming" BOOLEAN,
    "extra_verse" BOOLEAN,
    "is_complete" BOOLEAN DEFAULT FALSE
);

CREATE TABLE "artist" (
  "id" SERIAL PRIMARY KEY,
  "artist_name" VARCHAR (250),
  "name" VARCHAR,
  "user_id" integer REFERENCES "user",
  "vocal_type" VARCHAR (150),
  "website" VARCHAR,
  "bio" VARCHAR,
  "photo" VARCHAR,
  "streaming_link" VARCHAR,
  "approved" BOOLEAN DEFAULT FALSE,
  "jr_approved" BOOLEAN DEFAULT FALSE,
  "w9" VARCHAR,
  "paypal" VARCHAR
);

CREATE TABLE "song_details" (
    "id" SERIAL PRIMARY KEY,
    "song_request_id" integer REFERENCES "public"."song_request"("id") ON DELETE CASCADE,
    "url" VARCHAR (500),
    "lyrics" VARCHAR,
    "title" VARCHAR (250),
    "artist_id" integer REFERENCES "artist",
    "streaming_link" VARCHAR
);


CREATE TABLE "songbeejr_details" (
    "id" SERIAL PRIMARY KEY,
    "jr_request_id" integer REFERENCES "public"."jr_request"("id") ON DELETE CASCADE,
    "url" VARCHAR (500),
    "lyrics" VARCHAR,
    "title" VARCHAR (250),
    "artist_id" integer REFERENCES "artist",
    "streaming_link" VARCHAR
);

CREATE TABLE "artist_genres" (
  "id" SERIAL PRIMARY KEY,
  "artist_id" integer REFERENCES "artist",
  "genre_id" integer REFERENCES "genres"
);

CREATE TABLE "jr_request" (
  "id" SERIAL PRIMARY KEY,
  "user_id" integer REFERENCES "user",
  "requester" VARCHAR,
  "child" VARCHAR,
  "pronunciation" VARCHAR,
  "age" INT,
  "skill" VARCHAR,
  "emotion" VARCHAR,
  "tempo" VARCHAR,
  "vocal_type" VARCHAR,
  "description" VARCHAR,
  "goals" VARCHAR,
  "created_at" TIMESTAMPTZ DEFAULT NOW(),
   "is_complete" BOOLEAN DEFAULT FALSE,
   "accepted"  BOOLEAN DEFAULT FALSE
);

CREATE TABLE "subscription" (
  "id" SERIAL PRIMARY KEY,
  "artist_id" integer REFERENCES "artist",
  "request_id" integer REFERENCES "jr_request",
  "song_count" INT,
  "is_complete" BOOLEAN DEFAULT FALSE
);

CREATE TABLE "subscription_song_details" (
  "id" SERIAL PRIMARY KEY,
  "subscription_id" integer REFERENCES "subscription",
  "number" INT,
  "song_goals" VARCHAR,
  "url" VARCHAR,
  "title" VARCHAR,
  "lyrics" VARCHAR
);

CREATE TABLE "documents" (
  "id" SERIAL PRIMARY KEY,
  "url" VARCHAR
);

INSERT INTO "user"
("email", "password", "class")
VALUES
('hello@songbee.com', '$2a$10$2dKeNpwM1zuoBqQvWzPRiuhNVELMhP/lzJWe5H9dLzwXqu5qnj9ia', 3),
('walkerneudorff@gmail.com', '$2a$10$wRAZ7JrKo3WGbQaAvdzCwuiB3YK4RqumN1vx7F.6OCAybFMKpiJii', 2),
('johngornay@gmail.com', '$2a$10$beIgxp.l45eRiz5HYgUxBuTN6anPZwKY3TRE/nE2Ltg/5Fo1Jylw6', 1),
('brimlygorblox@gmail.com', '$2a$10$beIgxp.l45eRiz5HYgUxBuTN6anPZwKY3TRE/nE2Ltg/5Fo1Jylw6', 1),
('hannahrutti@gmail.com', '$2a$10$beIgxp.l45eRiz5HYgUxBuTN6anPZwKY3TRE/nE2Ltg/5Fo1Jylw6', 2),
('linton@gmail.com', '$2a$10$beIgxp.l45eRiz5HYgUxBuTN6anPZwKY3TRE/nE2Ltg/5Fo1Jylw6', 2),
('sandylapras@gmail.com', '$2a$10$beIgxp.l45eRiz5HYgUxBuTN6anPZwKY3TRE/nE2Ltg/5Fo1Jylw6', 1),
('jenevee@godess.com', '$2a$10$beIgxp.l45eRiz5HYgUxBuTN6anPZwKY3TRE/nE2Ltg/5Fo1Jylw6', 2);

--Password for songbee account is: password

INSERT INTO "genres"
VALUES
(1, 'Rap/Hip-Hop'), (2, 'Folk'), (3, 'Rock'), (4, 'Christian'), (5, 'R&B'), (6, 'Country'), (7, 'Singer Songwriter'), (8, 'Acoustic Pop'), (9, 'Spanish');

INSERT INTO "artist"
("artist_name", "name", "user_id", "vocal_type", "approved", "website", "bio", "photo")
VALUES
('Hannah Rutti', 'Hannah Rutti', 5, 'female', TRUE, '', '', ''),
('The Yellow Dart', 'Walker Neudorff', 2, 'male', FALSE, '', '', ''),
('Linton Robinson', 'Linton', 6, 'male', TRUE, '', '', ''),
('Jene V', 'Jenny Vasquez', 8, 'female', TRUE, 'https://www.linkedin.com/in/walkerneudorff/', 'Jene V is a multi-disciplinary artist exploring R&B and Pop Music through a different lens. Jene V is breaking down genre borders and creating a sound all her own through unconventional instrumentation like ukulele and kazoo. Voted Next Artist to Watch by the Bayview Times!', 'https://wallpapers.com/images/hd/portrait-of-woman-with-random-people-5wu04gyr7p6p0i5c.jpg');

INSERT INTO "song_request"
("user_id", "genre_id", "requester", "recipient", "pronunciation", "recipient_relationship", "occasion", "vocal_type", "vibe", "tempo", "inspiration", "story1", "story2", "important_what", "important_why", "additional_info", "created_at", "delivery_days", "streaming", "extra_verse", "is_complete")
VALUES
(1, 3, 'Charles', 'Charlito', 'Shar-Lee-Toe', 'Best Friend', null, 'Female', 'Light-hearted', 'Fast', 'God', 'We used to beat eachother up', 'We were married as a joke once', 'They smell bad', 'It''s how we met', 'Her favorite color is invisible', '2024-01-29T15:58:20.453Z', 7, false, false, true), 
(1, 4, 'Charles', 'Jenny', 'Jeh-Knee', 'Daughter', null, 'Female', 'Mean-spirited', 'Slow', 'I need to prank my daughter', 'My daughter thinks Johnny Rotten is attractive', 'My daughter and I used to do the shaving cream and feather sleeping prank on eachother', 'My daughter lives in Tempe, AZ', 'Theres a lot of material to work with there', 'The final lyric should be Surprise!', '2024-01-28T15:58:20.453Z', 7, false, true, true),
(3, 1, 'The Springfield Office', 'Our Boss Jeffery', 'Jeff-Rey', 'Boss', null, 'Male', 'Spooktacular', 'Fast', 'Boss cant stop talking about Frank Sinatra', 'Our boss is very old and grew up listening to vocal crooners', 'Our boss always forgets his coffee mug in the conference room', 'He hates Gene Pitney', 'If it sounds too much like Gene Pitney it will go over poorly', 'Gene Pitney was his ex-wife''s favorite artist', '2024-01-22T15:58:20.453Z', 7, false, false, true),
(4, 3, 'Brimly', 'Gregor', 'Greh-ger', 'Crush', 'Valentines Day', 'Female', 'Light-hearted', 'Fast', 'Want to tell her how I feel', 'We had math class together', 'We love sin/cos/tan', 'She only wears orange', 'Its my favorite color', 'We eat Blimpie sandwiches at lunch together', '2024-02-12T15:58:20.453Z', 7, false, false, false), 
(7, 6, 'Sandy', 'Shimnar', 'Shim-Nahr', 'Husband', 'Anniversary', 'Female', 'Light-hearted', 'up-tempo', 'Want to tell her how I feel', 'We had math class together', 'We love sin/cos/tan', 'She only wears orange', 'Its my favorite color', 'We eat Blimpie sandwiches at lunch together', '2024-02-10T15:58:20.453Z', 7, false, false, false);

INSERT INTO "song_details"
("song_request_id", "url", "lyrics", "title", "artist_id", "streaming_link")
VALUES
(3, 'https://res.cloudinary.com/dcram3k0q1/video/upload/v1705711050/syquoqbokasssbuem1sf.wav', 'I cant deface time / I cant deface time / I cant deface time', 'Jerry GarPsyOp', 2, null),
(1, 'https://res.cloudinary.com/dcram3k0q1/video/upload/v1705711050/syquoqbokasssbuem1sf.wav', 'I love you baby', 'I love you baby', 1, null),
(2, 'https://res.cloudinary.com/dcram3k0q1/video/upload/v1705711050/syquoqbokasssbuem1sf.wav', 'Just wanna rock / I am on top / Living the best / Better than the rest', 'Rock Town', 3, null);

INSERT INTO "artist_genres"
("artist_id", "genre_id")
VALUES
(1, 5),
(1, 7),
(2, 1),
(2, 2),
(3, 7),
(3, 8),
(4, 8),
(4, 5);
