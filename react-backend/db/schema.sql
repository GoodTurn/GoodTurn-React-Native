CREATE TABLE profiles (
  id SERIAL PRIMARY KEY,
  email varchar(100),
  password varchar(100),
  latitude numeric(11,7),
  longitude numeric(11,7)
);

INSERT INTO profiles (email, password, latitude, longitude)
  VALUES ('whatiscameronsemail@gmail.com', '*****', 12.3455677, 53.9382716);
INSERT INTO profiles (email, password, latitude, longitude)
  VALUES ('barackObama@gmail.com', '*****', 13.3455677, 54.9382716);
INSERT INTO profiles (email, password, latitude, longitude)
  VALUES ('donaldTrump@gmail.com', '*****', 15.3455677, 56.9382716);
INSERT INTO profiles (email, password, latitude, longitude)
  VALUES ('test0@gmail.com', '*****', 40.2263334, -111.6608056),
  ('test1@gmail.com', '*****', 40.2263335, -111.6608066),
  ('test2@gmail.com', '*****', 40.2263335, -111.6608056),
  ('test3@gmail.com', '*****', 40.2263336, -111.6608076),
  ('test4@gmail.com', '*****', 40.2263336, -111.6608056),
  ('test5@gmail.com', '*****', 40.2263337, -111.6608086),
  ('test6@gmail.com', '*****', 40.2263337, -111.6608056),
  ('test7@gmail.com', '*****', 40.2263338, -111.6608096),
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
  specs JSON,
  gtky JSON,
  profileId Integer
);

INSERT INTO userInfo (first_name, last_name, pic, specs, gtky, profileId)
  VALUES ('Cameron', 'Walker', '././pics/IMG_0759.JPG', '{
    "education": [
      {"value": "Dev Mountain", "start_date": "2017", "end_date": "2017"},
      {"value": "Brigham Young University", "start_date": "2008", "end_date": "2014"},
      {"value": "Foothill High School", "start_date": "2004", "end_date": "2008"}
    ] ,
    "work": [
      {"value": "Operations Analyst - Goldman Sachs", "start_date": "2014", "end_date": "2017"},
      {"value": "Economics Teaching Assistant - Brigham Young University", "start_date": "2012", "end_date": "2014"}
    ] ,
    "relation": [
      {"value": "Married"},
      {"value": "1 child"},
      {"value": "4 siblings"}
    ],
    "lived": [
      {"value": "Salt Lake City, UT, USA"},
      {"value": "Provo, UT, USA"},
      {"value": "Rio de Janeiro, Brazil"},
      {"value": "Henderson, NV, USA"}
    ]
  }', '[
    "Building this website/app",
    "",
    "",
    ""
  ]', 1),
  ('Barack', 'Obama', '././pics/Obama.JPG', '{
    "education": [
      {"value": "Harvard University", "start_date": "1988", "end_date": "1991"},
      {"value": "Columbia University in the City of New York", "start_date": "1981", "end_date": "1983"},
      {"value": "Occidental College", "start_date": "1979", "end_date": "1981"}
    ] ,
    "work": [
      {"value": "President - United States of America", "start_date": "January 2009", "end_date": "January 2017"},
      {"value": "US Senator (IL-D) - US Senate", "start_date": "January 2005", "end_date": "November 2008"},
      {"value": "State Senator - Illinois State Senate", "start_date": "1997", "end_date": "2004"},
      {"value": "Senior Lecturer in Law - University of Chicago Law School", "start_date": "1993", "end_date": "2004"}
    ] ,
    "relation": [
      {"value": "Married"},
      {"value": "2 children"}
    ],
    "lived": [
      {"value": "Washington, DC, USA"},
      {"value": "Chicago, IL, USA"}
    ]
  }', '[
    "My thoughts on current US policy",
    "Bad policy",
    "",
    "I''m thinking"
  ]', 2),
  ('Donald', 'Trump', '././pics/Trump.jpeg', '{
    "education": [
      {"value": "New York Military Academy", "start_date": "2004", "end_date": "2008"},
      {"value": "Wharton School of Finance", "start_date": "2004", "end_date": "2008"},
      {"value": "Fordham University", "start_date": "2004", "end_date": "2008"}
    ] ,
    "work": [
      {"value": "President - United States of America", "start_date": "2012", "end_date": "2014"},
      {"value": "Realty Business Leader", "start_date": "2012", "end_date": "2014"},
      {"value": "Television Star - The Apprentice", "start_date": "2012", "end_date": "2014"}
    ] ,
    "relation": [
      {"value": "Married"},
      {"value": "5 children"}
    ],
    "lived": [
      {"value": "Washington, DC, USA"},
      {"value": "Queens, NY, USA"}
    ]
  }', '[
    "Me",
    "Losers",
    "",
    ""
  ]', 3),
  ('test0-a', 'test', '././pics/test.jpeg', '{
      "education": [
        {"value": "test0-b", "start_date": "2004", "end_date": "2008"}
      ],
      "work": [
        {"value": "test0-c", "start_date": "2012", "end_date": "2014"}
      ] ,
      "relation": [
        {"value": "test0-d"}
      ],
      "lived": [
        {"value": "test0-e"}
      ]
    }', '[
      "test0-f",
      "test0-g",
      "test0-h",
      "test0-i"
    ]', 4),
    ('test1-a', 'test', '././pics/test.jpeg', '{
      "education": [
        {"value": "test1-b", "start_date": "2004", "end_date": "2008"}
      ],
      "work": [
        {"value": "test1-c", "start_date": "2012", "end_date": "2014"}
      ] ,
      "relation": [
        {"value": "test1-d"}
      ],
      "lived": [
        {"value": "test1-e"}
      ]
    }', '[
      "test1-f",
      "test1-g",
      "test1-h",
      "test1-i"
    ]', 5),
    ('test2-a', 'test', '././pics/test.jpeg', '{
      "education": [
        {"value": "test2-b", "start_date": "2004", "end_date": "2008"}
      ],
      "work": [
        {"value": "test2-c", "start_date": "2012", "end_date": "2014"}
      ] ,
      "relation": [
        {"value": "test2-d"}
      ],
      "lived": [
        {"value": "test2-e"}
      ]
    }', '[
      "test2-f",
      "test2-g",
      "test2-h",
      "test2-i"
    ]', 6),
    ('test3-a', 'test', '././pics/test.jpeg', '{
      "education": [
        {"value": "test3-b", "start_date": "2004", "end_date": "2008"}
      ],
      "work": [
        {"value": "test3-c", "start_date": "2012", "end_date": "2014"}
      ] ,
      "relation": [
        {"value": "test3-d"}
      ],
      "lived": [
        {"value": "test3-e"}
      ]
    }', '[
      "test3-f",
      "test3-g",
      "test3-h",
      "test3-i"
    ]', 7),
    ('test4-a', 'test', '././pics/test.jpeg', '{
      "education": [
        {"value": "test4-b", "start_date": "2004", "end_date": "2008"}
      ],
      "work": [
        {"value": "test4-c", "start_date": "2012", "end_date": "2014"}
      ] ,
      "relation": [
        {"value": "test4-d"}
      ],
      "lived": [
        {"value": "test4-e"}
      ]
    }', '[
      "test4-f",
      "test4-g",
      "test4-h",
      "test4-i"
    ]', 8),
    ('test5-a', 'test', '././pics/test.jpeg', '{
      "education": [
        {"value": "test5-b", "start_date": "2004", "end_date": "2008"}
      ],
      "work": [
        {"value": "test5-c", "start_date": "2012", "end_date": "2014"}
      ] ,
      "relation": [
        {"value": "test5-d"}
      ],
      "lived": [
        {"value": "test5-e"}
      ]
    }', '[
      "test5-f",
      "test5-g",
      "test5-h",
      "test5-i"
    ]', 9),
    ('test6-a', 'test', '././pics/test.jpeg', '{
      "education": [
        {"value": "test6-b", "start_date": "2004", "end_date": "2008"}
      ],
      "work": [
        {"value": "test6-c", "start_date": "2012", "end_date": "2014"}
      ] ,
      "relation": [
        {"value": "test6-d"}
      ],
      "lived": [
        {"value": "test6-e"}
      ]
    }', '[
      "test6-f",
      "test6-g",
      "test6-h",
      "test6-i"
    ]', 10),
    ('test7-a', 'test', '././pics/test.jpeg', '{
      "education": [
        {"value": "test7-b", "start_date": "2004", "end_date": "2008"}
      ],
      "work": [
        {"value": "test7-c", "start_date": "2012", "end_date": "2014"}
      ] ,
      "relation": [
        {"value": "test7-d"}
      ],
      "lived": [
        {"value": "test7-e"}
      ]
    }', '[
      "test7-f",
      "test7-g",
      "test7-h",
      "test7-i"
    ]', 11),
    ('test8-a', 'test', '././pics/test.jpeg', '{
      "education": [
        {"value": "test8-b", "start_date": "2004", "end_date": "2008"}
      ],
      "work": [
        {"value": "test8-c", "start_date": "2012", "end_date": "2014"}
      ] ,
      "relation": [
        {"value": "test8-d"}
      ],
      "lived": [
        {"value": "test8-e"}
      ]
    }', '[
      "test8-f",
      "test8-g",
      "test8-h",
      "test8-i"
    ]', 12),
    ('test9-a', 'test', '././pics/test.jpeg', '{
      "education": [
        {"value": "test9-b", "start_date": "2004", "end_date": "2008"}
      ],
      "work": [
        {"value": "test9-c", "start_date": "2012", "end_date": "2014"}
      ] ,
      "relation": [
        {"value": "test9-d"}
      ],
      "lived": [
        {"value": "test9-e"}
      ]
    }', '[
      "test9-f",
      "test9-g",
      "test9-h",
      "test9-i"
    ]', 13),
    ('test10-a', 'test', '././pics/test.jpeg', '{
      "education": [
        {"value": "test10-b", "start_date": "2004", "end_date": "2008"}
      ],
      "work": [
        {"value": "test10-c", "start_date": "2012", "end_date": "2014"}
      ] ,
      "relation": [
        {"value": "test10-d"}
      ],
      "lived": [
        {"value": "test10-e"}
      ]
    }', '[
      "test10-f",
      "test10-g",
      "test10-h",
      "test10-i"
    ]', 14),
    ('test11-a', 'test', '././pics/test.jpeg', '{
      "education": [
        {"value": "test11-b", "start_date": "2004", "end_date": "2008"}
      ],
      "work": [
        {"value": "test11-c", "start_date": "2012", "end_date": "2014"}
      ] ,
      "relation": [
        {"value": "test11-d"}
      ],
      "lived": [
        {"value": "test11-e"}
      ]
    }', '[
      "test11-f",
      "test11-g",
      "test11-h",
      "test11-i"
    ]', 15),
    ('test12-a', 'test', '././pics/test.jpeg', '{
      "education": [
        {"value": "test12-b", "start_date": "2004", "end_date": "2008"}
      ],
      "work": [
        {"value": "test12-c", "start_date": "2012", "end_date": "2014"}
      ] ,
      "relation": [
        {"value": "test12-d"}
      ],
      "lived": [
        {"value": "test12-e"}
      ]
    }', '[
      "test12-f",
      "test12-g",
      "test12-h",
      "test12-i"
    ]', 16),
    ('test13-a', 'test', '././pics/test.jpeg', '{
      "education": [
        {"value": "test13-b", "start_date": "2004", "end_date": "2008"}
      ],
      "work": [
        {"value": "test13-c", "start_date": "2012", "end_date": "2014"}
      ] ,
      "relation": [
        {"value": "test13-d"}
      ],
      "lived": [
        {"value": "test13-e"}
      ]
    }', '[
      "test13-f",
      "test13-g",
      "test13-h",
      "test13-i"
    ]', 17),
    ('test14-a', 'test', '././pics/test.jpeg', '{
      "education": [
        {"value": "test14-b", "start_date": "2004", "end_date": "2008"}
      ],
      "work": [
        {"value": "test14-c", "start_date": "2012", "end_date": "2014"}
      ] ,
      "relation": [
        {"value": "test14-d"}
      ],
      "lived": [
        {"value": "test14-e"}
      ]
    }', '[
      "test14-f",
      "test14-g",
      "test14-h",
      "test14-i"
    ]', 18),
    ('test15-a', 'test', '././pics/test.jpeg', '{
      "education": [
        {"value": "test15-b", "start_date": "2004", "end_date": "2008"}
      ],
      "work": [
        {"value": "test15-c", "start_date": "2012", "end_date": "2014"}
      ] ,
      "relation": [
        {"value": "test15-d"}
      ],
      "lived": [
        {"value": "test15-e"}
      ]
    }', '[
      "test15-f",
      "test15-g",
      "test15-h",
      "test15-i"
    ]', 19);
