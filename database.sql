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
  "extra_verse" BOOLEAN
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
