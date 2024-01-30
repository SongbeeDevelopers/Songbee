CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "admin" BOOLEAN NOT NULL DEFAULT FALSE,
    "email" VARCHAR (150),
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
    "artist" VARCHAR (250),
    "streaming_link" VARCHAR
);

INSERT INTO "genres"
VALUES
(1, 'Rap/Hip-Hop'), (2, 'Folk'), (3, 'Rock'), (4, 'Christian'), (5, 'R&B'), (6, 'Country'), (7, 'Singer Songwriter'), (8, 'Acoustic Pop'), (9, 'Spanish');

INSERT INTO "song_request"
VALUES
(1, 1, 3, 'Charles', 'Charlito', 'Shar-Lee-Toe', 'Best Friend', null, 'Female', 'Light-hearted', 'Fast', 'God', 'We used to beat eachother up', 'We were married as a joke once', 'They smell bad', 'It''s how we met', 'Her favorite color is invisible', '2024-01-29T15:58:20.453Z', 7, false, false, false), 
(2, 1, 4, 'Charles', 'Jenny', 'Jeh-Knee', 'Daughter', null, 'Female', 'Mean-spirited', 'Slow', 'I need to prank my daughter', 'My daughter thinks Johnny Rotten is attractive', 'My daughter and I used to do the shaving cream and feather sleeping prank on eachother', 'My daughter lives in Tempe, AZ', 'Theres a lot of material to work with there', 'The final lyric should be Surprise!', '2024-01-28T15:58:20.453Z', 7, false, true, false),
(3, 1, 1, 'The Springfield Office', 'Our Boss Jeffery', 'Jeff-Rey', 'Boss', null, 'Male', 'Spooktacular', 'Fast', 'Boss cant stop talking about Frank Sinatra', 'Our boss is very old and grew up listening to vocal crooners', 'Our boss always forgets his coffee mug in the conference room', 'He hates Gene Pitney', 'If it sounds too much like Gene Pitney it will go over poorly', 'Gene Pitney was his ex-wife''s favorite artist', '2024-01-22T15:58:20.453Z', 7, false, false, true);

INSERT INTO "song_details"
VALUES
(1, 3, 'https://res.cloudinary.com/dcram3k0q1/video/upload/v1705711050/syquoqbokasssbuem1sf.wav', 'I cant deface time / I cant deface time / I cant deface time', 'Jerry GarPsyOp', 'John DaRon', null)
