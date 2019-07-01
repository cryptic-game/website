
FROM nginx
MAINTAINER cryptic-game

COPY src/ /usr/share/nginx/html

CMD [nginx]

