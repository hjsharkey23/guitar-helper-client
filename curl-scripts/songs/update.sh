#!/bin/bash

curl "http://localhost:4741/songs/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
    --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "song": {
      "artist": "'"${ARTIST}"'",
      "tuning": "'"${TUNING}"'",
      "capo": "'"${CAPO}"'",
      "chords": "'"${CHORDS}"'",
      "title": "'"${TITLE}"'"
    }
  }'

echo
