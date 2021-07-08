#!/bin/sh
find /usr/share/nginx/html/static/js -type f -print0 | xargs -0 sed -i s,VAR_URL_API,$URL_API,g
exec "$@"