UPDATE userinfo
  SET (first_name, last_name, pic, education, work, relationship_status, relation, lived, gtky) = ($2, $3, $4, $5, $6, $7, $8, $9, $10)
  WHERE profileid = $1;
