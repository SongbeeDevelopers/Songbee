CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "email" VARCHAR (150) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "class" INT NOT NULL DEFAULT 1,
    "name" VARCHAR (150),
    "credit" INT
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

CREATE TABLE "song_details" (
    "id" SERIAL PRIMARY KEY,
    "song_request_id" integer REFERENCES "public"."song_request"("id") ON DELETE CASCADE,
    "url" VARCHAR (500),
    "lyrics" VARCHAR,
    "title" VARCHAR (250),
    "artist_id" integer REFERENCES "artist",
    "streaming_link" VARCHAR
);

CREATE TABLE "artist" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR (250),
  "user_id" integer REFERENCES "user",
  "vocal_type" VARCHAR (150),
  "website" VARCHAR DEFAULT NULL,
  "bio" VARCHAR,
  "photo" VARCHAR,
  "streaming_link" VARCHAR
);

CREATE TABLE "artist_genres" (
  "id" SERIAL PRIMARY KEY,
  "artist_id" integer REFERENCES "artist",
  "genre_id" integer REFERENCES "genres"
);

INSERT INTO "user"
("email", "password", "class")
VALUES
("hello@songbee.com", "$2a$10$beIgxp.l45eRiz5HYgUxBuTN6anPZwKY3TRE/nE2Ltg/5Fo1Jylw6", 3),
("walkerneudorff@gmail.com", "$2a$10$wRAZ7JrKo3WGbQaAvdzCwuiB3YK4RqumN1vx7F.6OCAybFMKpiJii", 2)

--Password for this account is: password --

INSERT INTO "genres"
VALUES
(1, 'Rap/Hip-Hop'), (2, 'Folk'), (3, 'Rock'), (4, 'Christian'), (5, 'R&B'), (6, 'Country'), (7, 'Singer Songwriter'), (8, 'Acoustic Pop'), (9, 'Spanish');

INSERT INTO "song_request"
("user_id", "genre_id", "requester", "recipient", "pronunciation", "recipient_relationship", "occasion", "vocal_type", "vibe", "tempo", "inspiration", "story1", "story2", "important_what", "important_why", "additional_info", "created_at", "delivery_days", "streaming", "extra_verse", "is_complete")
VALUES
(1, 3, 'Charles', 'Charlito', 'Shar-Lee-Toe', 'Best Friend', null, 'Female', 'Light-hearted', 'Fast', 'God', 'We used to beat eachother up', 'We were married as a joke once', 'They smell bad', 'It''s how we met', 'Her favorite color is invisible', '2024-01-29T15:58:20.453Z', 7, false, false, false), 
(1, 4, 'Charles', 'Jenny', 'Jeh-Knee', 'Daughter', null, 'Female', 'Mean-spirited', 'Slow', 'I need to prank my daughter', 'My daughter thinks Johnny Rotten is attractive', 'My daughter and I used to do the shaving cream and feather sleeping prank on eachother', 'My daughter lives in Tempe, AZ', 'Theres a lot of material to work with there', 'The final lyric should be Surprise!', '2024-01-28T15:58:20.453Z', 7, false, true, false),
(1, 1, 'The Springfield Office', 'Our Boss Jeffery', 'Jeff-Rey', 'Boss', null, 'Male', 'Spooktacular', 'Fast', 'Boss cant stop talking about Frank Sinatra', 'Our boss is very old and grew up listening to vocal crooners', 'Our boss always forgets his coffee mug in the conference room', 'He hates Gene Pitney', 'If it sounds too much like Gene Pitney it will go over poorly', 'Gene Pitney was his ex-wife''s favorite artist', '2024-01-22T15:58:20.453Z', 7, false, false, true);

INSERT INTO "song_details"
VALUES
(1, 3, 'https://res.cloudinary.com/dcram3k0q1/video/upload/v1705711050/syquoqbokasssbuem1sf.wav', 'I cant deface time / I cant deface time / I cant deface time', 'Jerry GarPsyOp', 'John DaRon', null);

INSERT INTO "artist"
("name", "user_id", "vocal_type")
VALUES
('Walker Neudorff', 2, 'male');

INSERT INTO "artist_genres"
("artist_id", "genre_id")
VALUES
(1, 3),
(1, 1);
