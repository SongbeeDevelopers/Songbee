DROP TABLE IF EXISTS "songbeejr_details",
                     "subscription_song_details",
                     "subscription",
                     "jr_request",
                     "artist_genres",
                     "song_details",
                     "artist",
                     "song_request",
                     "genres",
                     "user",
                     "documents",
                     "pendingartistedit",
                     "learning_packs";

CREATE TABLE "user" (
  "id" SERIAL PRIMARY KEY,
  "email" VARCHAR (150) UNIQUE NOT NULL,
  "password" VARCHAR (1000) NOT NULL,
  "class" INT NOT NULL DEFAULT 1,
  "name" VARCHAR (150),
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
  "license" BOOLEAN,
  "backing_track" BOOLEAN,
  "is_complete" BOOLEAN DEFAULT FALSE
);

CREATE TABLE "artist" (
  "id" SERIAL PRIMARY KEY,
  "artist_name" VARCHAR (250),
  "name" VARCHAR,
  "user_id" integer REFERENCES "user",
  "vocal_type" VARCHAR (150),
  "is_active" BOOLEAN DEFAULT TRUE, 
  "website" VARCHAR,
  "instagram_link" VARCHAR,
  "sample_song_1" VARCHAR DEFAULT NULL,
  "song_title_1" VARCHAR DEFAULT NULL,
  "sample_song_2" VARCHAR DEFAULT NULL,
  "song_title_2" VARCHAR DEFAULT NULL,
  "sample_song_3" VARCHAR DEFAULT NULL,
  "song_title_3" VARCHAR DEFAULT NULL,
  "bio" VARCHAR,
  "location" VARCHAR,
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
  "artist_id" integer REFERENCES "artist" ON DELETE CASCADE,
  "accepted" BOOLEAN DEFAULT FALSE,
  "streaming_link" VARCHAR
);

CREATE TABLE "artist_genres" (
  "id" SERIAL PRIMARY KEY,
  "artist_id" integer REFERENCES "artist" ON DELETE CASCADE,
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

CREATE TABLE "learning_packs" (
  "id" SERIAL PRIMARY KEY,
  "title" VARCHAR (250),
  "description" VARCHAR,
  "min_age" integer,
  "max_age" integer,
  "image" VARCHAR,
  "song1" VARCHAR,
  "song2" VARCHAR,
  "song3" VARCHAR,
  "song4" VARCHAR,
  "song5" VARCHAR,
  "song6" VARCHAR,
  "song7" VARCHAR,
  "song8" VARCHAR,
  "song9" VARCHAR,
  "song10" VARCHAR,
  "song11" VARCHAR,
  "song12" VARCHAR,
  "song13" VARCHAR
);

CREATE TABLE "subscription" (
  "id" SERIAL PRIMARY KEY,
  "user_id" integer REFERENCES "user" ON DELETE CASCADE,
  "pack_id" integer REFERENCES "learning_packs" ON DELETE CASCADE,
  "age" TIMESTAMPTZ,
  "name" VARCHAR,
  "pronunciation" VARCHAR,
  "is_active" BOOLEAN DEFAULT FALSE,
  "created_at" TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE "subscription_song_details" (
  "id" SERIAL PRIMARY KEY,
  "subscription_id" integer REFERENCES "subscription" ON DELETE CASCADE,
  "number" INT,
  "song_goals" VARCHAR,
  "url" VARCHAR,
  "title" VARCHAR,
  "lyrics" VARCHAR
);

CREATE TABLE "chat" (
  "id" SERIAL PRIMARY KEY,
  "user1_id" integer REFERENCES "user" ON DELETE CASCADE,
  "user2_id" integer REFERENCES "user" ON DELETE CASCADE
);

CREATE TABLE "messages" (
  "id" SERIAL PRIMARY KEY,
  "chat_id" integer REFERENCES "chat" ON DELETE CASCADE,
  "user_id" integer REFERENCES "user" ON DELETE CASCADE,
  "text" VARCHAR,
  "created_at" TIMESTAMPTZ DEFAULT NOW()
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
('jenevee@godess.com', '$2a$10$beIgxp.l45eRiz5HYgUxBuTN6anPZwKY3TRE/nE2Ltg/5Fo1Jylw6', 2),
('berchmanpaul@gmail.com', '$2a$10$9bWLNdvC42J3xoCKYD.JtuFt0eD9Zxn7FqkuV.Fy6F.efBhs6CoYC', 2),
('perrin.xthona@gmail.com', '$2a$10$2dKeNpwM1zuoBqQvWzPRiuhNVELMhP/lzJWe5H9dLzwXqu5qnj9ia', 2),
('lefevre.michaelj@gmail.com', '$2a$10$S/gUrKEDMRPAQigNo5cBcuyDAQDu1PXkbn6zjQNTqHclshKlpZLqe', 2);
--Password for songbee account is: Prime#0101

INSERT INTO "genres"
VALUES
(1, 'Rap/Hip-Hop'), (2, 'Folk'), (3, 'Rock'), (4, 'R&B'), (5, 'Country'), (6, 'Singer Songwriter'), (7, 'Acoustic Pop');

INSERT INTO "artist"
("artist_name", "name", "user_id", "vocal_type", "approved", "is_active", "website", "instagram_link", "sample_song_1", "song_title_1", "sample_song_2", "song_title_2", "sample_song_3", "song_title_3", "bio", "location", "photo", "streaming_link")
VALUES

('Michael LeFerve', 'Michael Leferve', 11, 'male', TRUE, TRUE, '', 'https://www.instagram.com/thefevaa/', 'https://res.cloudinary.com/dke4ukd0z/video/upload/v1713321165/Michael_Leferve_Summers_With_You_jxknhm.mp3', 'Summers With You', 'https://res.cloudinary.com/dke4ukd0z/video/upload/v1713321147/Blossoming_by_Michael_leferve_v6ylay.mp3', 'Blossoming', 'https://res.cloudinary.com/dke4ukd0z/video/upload/v1713321186/Michael-LeFevre-smile_kt9evo.mp3', 'Smile', 'Michael LeFevre is the lead singer and songwriter of None The Younger and Sleepy Soul. 
          While he has been writing music for well over a decade, he has been producing and recording out of his studio full time for the last 4 years.
          This has given him the experiences necessary to really perfect his craft. 
          Since his time as a full-time musician, he has been featured in Spotify and Youtube Editorial playlists, had many magazine write-ups, and accumulated millions of streams across all platforms.
          He looks forward to continuing to write and spread joy through music.', 'St. Louis, Missouri', 'https://res.cloudinary.com/dke4ukd0z/image/upload/v1713458694/Songbee/michael-photo_edh5b9.jpg', 'https://open.spotify.com/artist/32SXond7qEk5OOXU9M8Sq7?si=MZ2frkvaR6OUOmIYwGKd5w&nd=1&dlsi=3dca887b59374406/'),

('Berch', 'Berch', 9, 'male', TRUE, TRUE, '', 'https://www.instagram.com/mynameisberch/?igshid=MzMyNGUyNmU2YQ%3D%3D&utm_source=qr', 'https://res.cloudinary.com/dke4ukd0z/video/upload/v1713321136/Berch_m2vbfj.mp3', 'Berch', 'https://res.cloudinary.com/dke4ukd0z/video/upload/v1713321126/Berch_fee_fi_fo_fum_lgnkd3.mp3', 'FEE FI  FO FUM', 'https://res.cloudinary.com/dke4ukd0z/video/upload/v1713321572/Berch_feel_so_good_kwia9r.mp3', 'Feel So Good', 'Mynameisberch, hailing from Richmond, Virginia, is a versatile artist known for his pop,
             hip-hop, and soulful vocal style. With influences ranging from John Mayer to Lenny Kravitz and Drake, he effortlessly blends catchy melodies and heartfelt lyrics into his captivating compositions. 
             As a published BMI songwriter, mynameisberch consistently delivers multiple songs and records each year, showcasing his dedication to his craft. Additionally, 
             he has been recognized as a featured songwriter in Worship Leader magazine,
             a national publication in the contemporary Christian music scene. Combining his musical talents with his role as a worship leader at his church, mynameisberch''s passion for creating unique and impactful music shines through.
             With a genuine 
             desire to connect with individuals going through various situations and seasons, mynameisberch is excited to bring his creativity to Songbee, crafting personalized songs that resonate with each listener. He says, 
             I love creating for unique people going through unique situations in unique seasons.', 'Richmond, Virginia', 'https://res.cloudinary.com/dke4ukd0z/image/upload/v1714668161/Songbee/berch_bdrlty.jpg', 'https://mynameisberch.bandcamp.com/'),

('Perrin Xthona', 'Perrin Xthona', 10, 'female', TRUE, TRUE, 'https://www.tiktok.com/@perrinxthona?_t=8hjAn9c36du&_r=1/', 'https://www.instagram.com/perrinxthona/', 'https://res.cloudinary.com/dke4ukd0z/video/upload/v1713321199/Perrin_Xthona_faqiwx.mp3', 'As long As I''m With You', 'https://res.cloudinary.com/dke4ukd0z/video/upload/v1713321212/to_the_moon_and_back_PerrinXthona_wfqrgi.mp3', 'To The Moon and Back', 'https://res.cloudinary.com/dke4ukd0z/video/upload/v1713321226/You_Are_My_Home_PerrinXthona_vdkbkt.mp3', 'You Are My Home', 'Perrin Xthona is a pop songwriter from Portland, Oregon. She recently graduated from the Berklee College of Music, and her influences are Julia Michaels, 
                        Lennon Stella, Halsey, Jeremy Zucker, Lauv, and Harry Styles. 
                        She''s always loved writing songs, and the only thing she loves more is getting to hear other peoples stories.', 'Portland, Oregon', 'https://res.cloudinary.com/dke4ukd0z/image/upload/v1713458705/Songbee/perrin_photo_mhtkti.jpg', 'https://open.spotify.com/artist/1bNx6UhsCYSNuoIeL9LcnD?si=MLyNUmi6RJm2qLdyip1vMA&nd=1&dlsi=27bc328009f646c5/');



INSERT INTO "song_request"
("user_id", "genre_id", "requester", "recipient", "pronunciation", "recipient_relationship", "occasion", "vocal_type", "vibe", "tempo", "inspiration", "story1", "story2", "important_what", "important_why", "additional_info", "created_at", "delivery_days", "streaming", "extra_verse", "is_complete")
VALUES
(1, 3, 'Charles', 'Charlito', 'Shar-Lee-Toe', 'Best Friend', null, 'Female', 'Light-hearted', 'Fast', 'God', 'We used to beat eachother up', 'We were married as a joke once', 'They smell bad', 'It''s how we met', 'Her favorite color is invisible', '2024-01-29T15:58:20.453Z', 7, false, false, true), 
(1, 4, 'Charles', 'Jenny', 'Jeh-Knee', 'Daughter', null, 'Female', 'Mean-spirited', 'Slow', 'I need to prank my daughter', 'My daughter thinks Johnny Rotten is attractive', 'My daughter and I used to do the shaving cream and feather sleeping prank on eachother', 'My daughter lives in Tempe, AZ', 'Theres a lot of material to work with there', 'The final lyric should be Surprise!', '2024-01-28T15:58:20.453Z', 7, false, true, false),
(3, 1, 'The Springfield Office', 'Our Boss Jeffery', 'Jeff-Rey', 'Boss', null, 'Male', 'Spooktacular', 'Fast', 'Boss cant stop talking about Frank Sinatra', 'Our boss is very old and grew up listening to vocal crooners', 'Our boss always forgets his coffee mug in the conference room', 'He hates Gene Pitney', 'If it sounds too much like Gene Pitney it will go over poorly', 'Gene Pitney was his ex-wife''s favorite artist', '2024-01-22T15:58:20.453Z', 7, false, false, true),
(4, 3, 'Brimly', 'Gregor', 'Greh-ger', 'Crush', 'Valentines Day', 'Female', 'Light-hearted', 'Fast', 'Want to tell her how I feel', 'We had math class together', 'We love sin/cos/tan', 'She only wears orange', 'Its my favorite color', 'We eat Blimpie sandwiches at lunch together', '2024-02-12T15:58:20.453Z', 7, false, false, false), 
(7, 6, 'Sandy', 'Shimnar', 'Shim-Nahr', 'Husband', 'Anniversary', 'Female', 'Light-hearted', 'up-tempo', 'Want to tell her how I feel', 'We had math class together', 'We love sin/cos/tan', 'She only wears orange', 'Its my favorite color', 'We eat Blimpie sandwiches at lunch together', '2024-02-10T15:58:20.453Z', 7, false, false, false);

INSERT INTO "song_details"
("song_request_id", "url", "lyrics", "title", "artist_id", "streaming_link")
VALUES
(3, 'https://res.cloudinary.com/dcram3k0q1/video/upload/v1705711050/syquoqbokasssbuem1sf.wav', 'I cant deface time / I cant deface time / I cant deface time', 'Jerry GarPsyOp', 2, null),
(1, 'https://res.cloudinary.com/dcram3k0q1/video/upload/v1705711050/syquoqbokasssbuem1sf.wav', 'I love you baby', 'I love you baby', 3, null),
(2, 'https://res.cloudinary.com/dcram3k0q1/video/upload/v1705711050/syquoqbokasssbuem1sf.wav', 'Just wanna rock / I am on top / Living the best / Better than the rest', 'Rock Town', 3, null);

INSERT INTO "artist_genres"
("artist_id", "genre_id")
VALUES
(1, 6),
(2, 1),
(2, 7),
(3, 6),
(3, 7);


INSERT INTO "jr_request" (
  "user_id",
  "requester",
  "child",
  "pronunciation",
  "age",
  "skill",
  "emotion",
  "tempo",
  "vocal_type",
  "description",
  "goals"
) VALUES (
  9, -- Replace with the actual user_id
  'John Doe', -- Replace with the actual requester
  'Samantha', -- Replace with the actual child
  'Sam-an-tha', -- Replace with the actual pronunciation
  8, -- Replace with the actual age
  'Singing', -- Replace with the actual skill
  'Happy', -- Replace with the actual emotion
  'Moderate', -- Replace with the actual tempo
  'Soprano', -- Replace with the actual vocal_type
  'A song request for Samantha', -- Replace with the actual description
  'Improve singing skills' -- Replace with the actual goals
);

INSERT INTO "jr_request" (
  "user_id",
  "requester",
  "child",
  "pronunciation",
  "age",
  "skill",
  "emotion",
  "tempo",
  "vocal_type",
  "description",
  "goals",
  "is_complete",
  "accepted"
  
) VALUES
(1, 'John Doe', 'Samantha', 'Sam-an-tha', 8, 'Singing', 'Happy', 'Moderate', 'Soprano', 'A song request for Samantha', 'Improve singing skills', TRUE, TRUE),
(1 ,'Jane Smith', 'Michael', 'Mi-kel', 10, 'Piano', 'Calm', 'Slow', 'Alto', 'Piano lessons for Michael', 'Learn to play the piano', FALSE, TRUE),
(1, 'Bob Johnson', 'Emily', 'Em-i-ly', 12, 'Dancing', 'Energetic', 'Fast', 'Mezzo-Soprano', 'Choreography for Emily', 'Win a dance competition', FALSE, TRUE),
(1, 'Alice Brown', 'Daniel', 'Dan-yel', 9, 'Drawing', 'Focused', 'Steady', 'Tenor', 'Drawing lessons for Daniel', 'Develop artistic skills', FALSE, FALSE);

CREATE TABLE "songbeejr_details" (
  "id" SERIAL PRIMARY KEY,
  "jr_request_id" integer REFERENCES "public"."jr_request"("id") ON DELETE CASCADE,
  "url" VARCHAR (500),
  "lyrics" VARCHAR,
  "title" VARCHAR (250),
  "artist_id" integer REFERENCES "artist",
  "streaming_link" VARCHAR
);

INSERT INTO "songbeejr_details" ("jr_request_id") VALUES (1);
   
CREATE TABLE "pendingartistedit" (
  "id" SERIAL PRIMARY KEY,
  "artist_id" INTEGER REFERENCES "artist"(id) ON DELETE CASCADE,
  "edited_name" VARCHAR(255),
  "edited_artistName" VARCHAR(255),
  "edited_bio" TEXT,
  "edited_website" VARCHAR(255),
  "edited_vocal_type" VARCHAR(100),
  "edited_genre_id" INTEGER REFERENCES "genres"(id),
  "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO "learning_packs" 
  ("title", "description", "min_age", "max_age", "image")
VALUES
  ('The Bonder', 'With this learning pack, your baby will begin to adjust to sound and light. We start to stimulate the brain and start building neural connections with our thoughtfully developed music-based learning pack.', 0, 2, 'https://res.cloudinary.com/dke4ukd0z/image/upload/v1714072560/Songbee/babyOne_r5yrzu.jpg'),
  ('The Feeler', 'With this learning pack, your baby will be developing their senses: sight, touch, and hearing. Listen and play with sensory based songs, to help your child develop and learn.', 3, 4, 'https://res.cloudinary.com/dke4ukd0z/image/upload/v1714072908/Songbee/babyTwo_wwwfns.jpg'),
  ('The Detector', 'With this learning pack, help your baby develop fine motor skills and dive into the world of tactile fun.', 5, 6, 'https://res.cloudinary.com/dke4ukd0z/image/upload/v1714072568/Songbee/babyThree_vboal1.jpg'),
  ('The Experimenter', 'With this learning pack, your baby is ready to dive into shapes, colors, start understanding object permanence, as well as lay the foundation for memory development.', 7, 8, 'https://res.cloudinary.com/dke4ukd0z/image/upload/v1714072556/Songbee/babyFour_ofxfso.jpg'),
  ('The Investigator', 'With this learning pack, your baby starts to work on coordination and balance alongside learning emotional intelligence.', 9, 10, 'https://res.cloudinary.com/dke4ukd0z/image/upload/v1714072542/Songbee/babyFive_gdsvsb.jpg'),
  ('The Discoverer', 'With this learning pack, your child will expand their language skills, expand their pincer grip, as well as work on their problem solving skills.', 11, 12, 'https://res.cloudinary.com/dke4ukd0z/image/upload/v1714072564/Songbee/babySix_tknwqu.jpg'),
  ('The Talker', 'With this learning pack,you will be helping your toddler learn cause and effect and build key skills like language, fine and gross motor skills as well as learn how to independently play.', 13, 15, 'https://res.cloudinary.com/dke4ukd0z/image/upload/v1714073363/Songbee/babyOne_q445gx.jpg'),
  ('The Explorer', 'With this learning pack, your child is building their cognitive skills of reasoning and logical thinking. Puzzles, counting, and basic planning skills are key for this pack.', 16, 18, 'https://res.cloudinary.com/dke4ukd0z/image/upload/v1714073386/Songbee/babyTwo_gcggyn.jpg'),
  ('The Pathfinder', 'With this learning pack, your toddler will develop their creativity, imagination, and understanding of the world around them.', 19, 21, 'https://res.cloudinary.com/dke4ukd0z/image/upload/v1714073380/Songbee/babyThree_v2wsiv.jpg'),
  ('The Puzzler', 'With this learning pack, your child will learn spatial perception, sorting, basic emotions, and further their motor development.', 22, 24, 'https://res.cloudinary.com/dke4ukd0z/image/upload/v1714073358/Songbee/babyFour_ejxqbj.jpg'),
  ('The Analyzer', 'With this learning pack, dive into the world of “real life” understandings with your toddler and help them understand schedules, develop problem solving skills, confidence and logical thinking.', 25, 27, 'https://res.cloudinary.com/dke4ukd0z/image/upload/v1714073509/Songbee/babyOne_qtdodv.jpg'),
  ('The Story Teller', 'With this learning pack, your toddler will dive into the world of playing pretend and build their language skills, expand on their motor functions, and build pre-writing skills.', 28, 30, 'https://res.cloudinary.com/dke4ukd0z/image/upload/v1714073528/Songbee/babyTwo_op35fc.jpg'),
  ('The Creator', 'With this learning pack, your toddler will start to learn emotional intelligence, social skills, and start to identify and navigate big feelings.', 31, 33, 'https://res.cloudinary.com/dke4ukd0z/image/upload/v1714073517/Songbee/babyThree_b1rm5j.jpg'),
  ('The Adventurer', 'With this learning pack, your child will build their independence, curiosity, and further their motor and problem solving skills', 34, 36, 'https://res.cloudinary.com/dke4ukd0z/image/upload/v1714073504/Songbee/babyFour_zhzybi.jpg'),
  ('The Free Bird', 'With this learning pack, your child will take ownership of their day and take over planning, pretend to play, and explore the world around them.', 37, 39, 'https://res.cloudinary.com/dke4ukd0z/image/upload/v1714073639/Songbee/babyOne_qbm7zu.jpg'),
  ('The Socializer', 'With this learning pack, help your child start learning letters, numbers, and expand upon their emotional intelligence.', 40, 42, 'https://res.cloudinary.com/dke4ukd0z/image/upload/v1714073662/Songbee/babyTwo_no332w.jpg'),
  ('The Team Player', 'With this learning pack, your three year old will learn how to work well with others, understand basic manners, and improve on their hand-eye coordination.', 43, 45, 'https://res.cloudinary.com/dke4ukd0z/image/upload/v1714073657/Songbee/babyThree_hhyawv.jpg'),
  ('The Imaginator', 'With this learning pack, your child is becoming independent and developing a sense of “self” while furthering their curiosity and imagination.', 46, 48, 'https://res.cloudinary.com/dke4ukd0z/image/upload/v1714073635/Songbee/babyFour_zrp2tt.jpg'),
  ('The Innovator', 'With this learning pack, help your child link the skills they have made so far and make new, creative choices, investigate, and problem solve.', 49, 51, 'https://res.cloudinary.com/dke4ukd0z/image/upload/v1714073743/Songbee/babyOne_gwodu8.jpg'),
  ('The Inspector', 'With this learning pack, your child will learn to willingly follow directions and improve on their language and phonetic skills.', 52, 54, 'https://res.cloudinary.com/dke4ukd0z/image/upload/v1714073753/Songbee/babyTwo_zrnspn.jpg'),
  ('The Negotiator', 'With this learning pack, your child will further expand on their language skills, emotional learning, and social skills.', 55, 57, 'https://res.cloudinary.com/dke4ukd0z/image/upload/v1714073747/Songbee/babyThree_xxputr.jpg'),
  ('The Predictor', 'With this learning pack, your child will begin to learn and expand on executive functioning skills like: planning and independent self care alongside taking responsibility and showing initiative.', 58, 60, 'https://res.cloudinary.com/dke4ukd0z/image/upload/v1714073738/Songbee/babyFour_xlknjs.jpg');
   