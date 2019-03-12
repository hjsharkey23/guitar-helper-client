# Ex: TOKEN=33ad6372f795694b333ec5f329ebeaaa sh curl-scripts/auth/sign-out.sh

curl "http://localhost:4741/sign-out" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=${TOKEN}"

echo
