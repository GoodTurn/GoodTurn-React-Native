SELECT profiles.id, profiles.longitude, profiles.latitude, userinfo.first_name,
  userinfo.last_name, userinfo.pic, userinfo.specs, userinfo.gtky FROM profiles
	JOIN userinfo ON profiles.id = userinfo.profileId
  WHERE profiles.latitude > $1 AND profiles.latitude < $2
  AND profiles.longitude > $3 AND profiles.longitude < $4;
