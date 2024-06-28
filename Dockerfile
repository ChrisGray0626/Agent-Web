FROM nginx:stable
# Copy the configuration of Nginx
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
# COPY the source code
COPY dist/ /usr/share/nginx/html/
