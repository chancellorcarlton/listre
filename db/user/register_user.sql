INSERT INTO profile (first_name, last_name, username, password, profile_pic) 
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;