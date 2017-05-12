INSERT INTO userInfo (first_name, last_name, pic, education, work, relationship_status, relation, lived, gtky, profileId)
  VALUES ($1, $2, 'https://s3-us-west-2.amazonaws.com/goodturn-pics/blank-profile.png', '[]' , '[]' , null, '[]', '[]' , '["","","",""]', $3);
