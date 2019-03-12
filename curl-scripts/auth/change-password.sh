# Ex: TOKEN=33ad6372f795694b333ec5f329ebeaaa OLDPW="anexamplepassword" NEWPW="newpassword" sh curl-scripts/auth/change-password.sh

curl "http://localhost:4741/change-password" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "passwords": {
      "old": "'"${OLD_PASSWORD}"'",
      "new": "'"${NEW_PASSWORD}"'"
    }
  }'

echo
