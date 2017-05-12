SELECT first_name, last_name, pic, education, work, relationship_status, relation, lived, gtky, profileid
  FROM userinfo
  WHERE profileid = $1;
