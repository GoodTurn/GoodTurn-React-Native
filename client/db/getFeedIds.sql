SELECT profiles.id, profiles.longitude, profiles.latitude, userinfo.first_name,
  userinfo.last_name, userinfo.pic, userinfo.education, userinfo.work, userinfo.relationship_status, userinfo.relation, userinfo.lived, userinfo.gtky FROM profiles
	JOIN userinfo ON profiles.id = userinfo.profileId
  WHERE profiles.latitude > $1 AND profiles.latitude < $2
  AND profiles.longitude > $3 AND profiles.longitude < $4
  AND profiles.id <> $5;
