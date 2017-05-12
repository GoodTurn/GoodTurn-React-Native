CREATE TABLE issues (
  id SERIAL PRIMARY KEY,
  email varchar(150),
  subject varchar(200),
  body text
);


CREATE TABLE profiles (
  id SERIAL PRIMARY KEY,
  email varchar(100),
  password varchar(100),
  latitude numeric(11,7),
  longitude numeric(11,7)
);

INSERT INTO profiles (email, password, latitude, longitude)
  VALUES
  ('whatiscameronsemail@gmail.com', '*****', 36.0169582, -114.6608136),
  ('barackObama@gmail.com', '*****', 40.2263338, -114.6608136),
  ('donaldTrump@gmail.com', '*****', 40.2263338, -111.6608056),
  ('test0@gmail.com', '*****', 36.0169582, -114.6608136),
  ('test1@gmail.com', '*****', 36.0169582, -114.6608136),
  ('test2@gmail.com', '*****', 36.0169582, -114.6608136),
  ('test3@gmail.com', '*****', 36.0169582, -114.6608136),
  ('test4@gmail.com', '*****', 36.0169582, -114.6608136),
  ('test5@gmail.com', '*****', 36.0169582, -114.6608136),
  ('test6@gmail.com', '*****', 36.0169582, -114.6608136),
  ('test7@gmail.com', '*****', 36.0169582, -114.6608136),
  ('test8@gmail.com', '*****', 40.2263338, -111.6608056),
  ('test9@gmail.com', '*****', 40.2263339, -111.6608106),
  ('test10@gmail.com', '*****', 40.2263339, -111.6608056),
  ('test11@gmail.com', '*****', 40.2263340, -111.6608116),
  ('test12@gmail.com', '*****', 40.2263340, -111.6608056),
  ('test13@gmail.com', '*****', 40.2263341, -111.6608126),
  ('test14@gmail.com', '*****', 40.2263341, -111.6608056),
  ('test15@gmail.com', '*****', 40.2263342, -111.6608136);

CREATE TABLE userInfo (
  id SERIAL PRIMARY KEY,
  first_name varchar(100),
  last_name varchar(100),
  pic text,
  education JSON,
  work JSON,
  relationship_status varchar(40),
  relation JSON,
  lived JSON,
  gtky JSON,
  profileId Integer
);

INSERT INTO userInfo (first_name, last_name, pic, education, work, relationship_status, relation, lived, gtky, profileId)
  VALUES ('Cameron', 'Walker', '././pics/IMG_0759.JPG', '[
      {"value": "Dev Mountain", "start": "2017", "end": "2017"},
      {"value": "Brigham Young University", "start": "2008", "end": "2014"},
      {"value": "Foothill High School", "start": "2004", "end": "2008"}
    ]' , '[
      {"value": "Operations Analyst", "employer": "Goldman Sachs", "start": "2014", "end": "2017"},
      {"value": "Economics Teaching Assistant", "employer": "Brigham Young University", "start": "2012", "end": "2014"}
    ]' , 'Married', '[
      {"value": "Child(ren)", "quantity": "1"},
      {"value": "Sibling(s)", "quantity": "4"}
    ]', '[
      {"value": "Salt Lake City, UT, USA"},
      {"value": "Provo, UT, USA"},
      {"value": "Rio de Janeiro, Brazil"},
      {"value": "Henderson, NV, USA"}
    ]' , '[
    "Building this website/app",
    "",
    "",
    ""
  ]', 1),
  ('Barack', 'Obama', '././pics/Obama.JPG', '
     [
      {"value": "Harvard University", "start": "1988", "end": "1991"},
      {"value": "Columbia University in the City of New York", "start": "1981", "end": "1983"},
      {"value": "Occidental College", "start": "1979", "end": "1981"}
    ]' ,
     '[
      {"value": "President", "employer": "United States of America", "start": "January 2009", "end": "January 2017"},
      {"value": "US Senator (IL-D)", "employer": "US Senate", "start": "January 2005", "end": "November 2008"},
      {"value": "State Senator", "employer": "Illinois State Senate", "start": "1997", "end": "2004"},
      {"value": "Senior Lecturer in Law", "employer": "University of Chicago Law School", "start": "1993", "end": "2004"}
    ]', 'Married',
     '[
      {"value": "Child(ren)", "quantity":"2"}
    ]',
     '[
      {"value": "Washington, DC, USA"},
      {"value": "Chicago, IL, USA"}
    ]', '[
    "My thoughts on current US policy",
    "Bad policy",
    "",
    "I''m thinking"
  ]', 2),
  ('Donald', 'Trump', '././pics/Trump.jpeg', '
     [
      {"value": "New York Military Academy", "start": "2004", "end": "2008"},
      {"value": "Wharton School of Finance", "start": "2004", "end": "2008"},
      {"value": "Fordham University", "start": "2004", "end": "2008"}
    ]' ,
     '[
      {"value": "President", "employer": "United States of America", "start": "2012", "end": "2014"},
      {"value": "Realty Business Leader", "start": "2012", "end": "2014"},
      {"value": "Television Star", "employer": "The Apprentice", "start": "2012", "end": "2014"}
    ]' , 'Married',
     '[
      {"value": "Child(ren)", "quantity": "2"}
    ]',
     '[
      {"value": "Washington, DC, USA"},
      {"value": "Queens, NY, USA"}
    ]', '[
    "Me",
    "Losers",
    "",
    ""
  ]', 3),
  ('test0-a', 'test', '././pics/blank-profile.png', '
       [
        {"value": "test0-b", "start": "2004", "end": "2008"}
      ]',
       '[
        {"value": "test0-c", "start": "2012", "end": "2014"}
      ]' ,
      'Single' ,'[]',
       '[
        {"value": "test0-e"}
      ]', '[
      "test0-f",
      "test0-g",
      "test0-h",
      "test0-i"
    ]', 4),
    ('test1-a', 'test', '././pics/blank-profile.png', '
       [
        {"value": "test1-b", "start": "2004", "end": "2008"}
      ]',
       '[
        {"value": "test1-c", "start": "2012", "end": "2014"}
      ]' ,
       'Single','[]',
       '[
        {"value": "test1-e"}
      ]', '[
      "test1-f",
      "test1-g",
      "test1-h",
      "test1-i"
    ]', 5),
    ('test2-a', 'test', '././pics/blank-profile.png', '
       [
        {"value": "test2-b", "start": "2004", "end": "2008"}
      ]',
       '[
        {"value": "test2-c", "start": "2012", "end": "2014"}
      ]' ,
       'Single','[]',
       '[
        {"value": "test2-e"}
      ]', '[
      "test2-f",
      "test2-g",
      "test2-h",
      "test2-i"
    ]', 6),
    ('test3-a', 'test', '././pics/blank-profile.png', '
       [
        {"value": "test3-b", "start": "2004", "end": "2008"}
      ]',
       '[
        {"value": "test3-c", "start": "2012", "end": "2014"}
      ]' ,
       'Single','[]',
       '[
        {"value": "test3-e"}
      ]', '[
      "test3-f",
      "test3-g",
      "test3-h",
      "test3-i"
    ]', 7),
    ('test4-a', 'test', '././pics/blank-profile.png', '
       [
        {"value": "test4-b", "start": "2004", "end": "2008"}
      ]',
       '[
        {"value": "test4-c", "start": "2012", "end": "2014"}
      ]' ,
       'Single','[]',
       '[
        {"value": "test4-e"}
      ]
    ', '[
      "test4-f",
      "test4-g",
      "test4-h",
      "test4-i"
    ]', 8),
    ('test5-a', 'test', '././pics/blank-profile.png', '
       [
        {"value": "test5-b", "start": "2004", "end": "2008"}
      ]',
       '[
        {"value": "test5-c", "start": "2012", "end": "2014"}
      ]' ,
       'Single','[]',
       '[
        {"value": "test5-e"}
      ]
    ', '[
      "test5-f",
      "test5-g",
      "test5-h",
      "test5-i"
    ]', 9),
    ('test6-a', 'test', '././pics/blank-profile.png', '
       [
        {"value": "test6-b", "start": "2004", "end": "2008"}
      ]',
       '[
        {"value": "test6-c", "start": "2012", "end": "2014"}
      ]' ,
       'Single','[]',
       '[
        {"value": "test6-e"}
      ]
    ', '[
      "test6-f",
      "test6-g",
      "test6-h",
      "test6-i"
    ]', 10),
    ('test7-a', 'test', '././pics/blank-profile.png', '
       [
        {"value": "test7-b", "start": "2004", "end": "2008"}
      ]',
       '[
        {"value": "test7-c", "start": "2012", "end": "2014"}
      ]',
       'Single','[]',
       '[
        {"value": "test7-e"}
      ]', '[
      "test7-f",
      "test7-g",
      "test7-h",
      "test7-i"
    ]', 11),
    ('test8-a', 'test', '././pics/blank-profile.png', '
       [
        {"value": "test8-b", "start": "2004", "end": "2008"}
      ]',
       '[
        {"value": "test8-c", "start": "2012", "end": "2014"}
      ]' ,
       'Single','[]',
       '[
        {"value": "test8-e"}
      ]
    ', '[
      "test8-f",
      "test8-g",
      "test8-h",
      "test8-i"
    ]', 12),
    ('test9-a', 'test', '././pics/blank-profile.png', '
       [
        {"value": "test9-b", "start": "2004", "end": "2008"}
      ]',
       '[
        {"value": "test9-c", "start": "2012", "end": "2014"}
      ]' ,
       'Single','[]',
       '[
        {"value": "test9-e"}
      ]', '[
      "test9-f",
      "test9-g",
      "test9-h",
      "test9-i"
    ]', 13),
    ('test10-a', 'test', '././pics/blank-profile.png', '
       [
        {"value": "test10-b", "start": "2004", "end": "2008"}
      ]',
       '[
        {"value": "test10-c", "start": "2012", "end": "2014"}
      ]' ,
      'Single' ,'[]',
       '[
        {"value": "test10-e"}
      ]', '[
      "test10-f",
      "test10-g",
      "test10-h",
      "test10-i"
    ]', 14),
    ('test11-a', 'test', '././pics/blank-profile.png', '
       [
        {"value": "test11-b", "start": "2004", "end": "2008"}
      ]',
       '[
        {"value": "test11-c", "start": "2012", "end": "2014"}
      ]' ,
      'Single' ,'[]',
       '[
        {"value": "test11-e"}
      ]', '[
      "test11-f",
      "test11-g",
      "test11-h",
      "test11-i"
    ]', 15),
    ('test12-a', 'test', '././pics/blank-profile.png', '
       [
        {"value": "test12-b", "start": "2004", "end": "2008"}
      ]',
       '[
        {"value": "test12-c", "start": "2012", "end": "2014"}
      ]' ,
      'Single' ,'[]',
       '[
        {"value": "test12-e"}
      ]', '[
      "test12-f",
      "test12-g",
      "test12-h",
      "test12-i"
    ]', 16),
    ('test13-a', 'test', '././pics/blank-profile.png', '
       [
        {"value": "test13-b", "start": "2004", "end": "2008"}
      ]',
       '[
        {"value": "test13-c", "start": "2012", "end": "2014"}
      ]' ,
      'Single' ,'[]',
       '[
        {"value": "test13-e"}
      ]', '[
      "test13-f",
      "test13-g",
      "test13-h",
      "test13-i"
    ]', 17),
    ('test14-a', 'test', '././pics/blank-profile.png', '
       [
        {"value": "test14-b", "start": "2004", "end": "2008"}
      ]',
       '[
        {"value": "test14-c", "start": "2012", "end": "2014"}
      ]' ,
      'Single' ,'[]',
       '[
        {"value": "test14-e"}
      ]', '[
      "test14-f",
      "test14-g",
      "test14-h",
      "test14-i"
    ]', 18),
    ('test15-a', 'test', '././pics/blank-profile.png', '
       [
        {"value": "test15-b", "start": "2004", "end": "2008"}
      ]',
       '[
        {"value": "test15-c", "start": "2012", "end": "2014"}
      ]' ,
      'Single' ,'[]',
       '[
        {"value": "test15-e"}
      ]', '[
      "test15-f",
      "test15-g",
      "test15-h",
      "test15-i"
    ]', 19);
