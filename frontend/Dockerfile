# 1. Aşama: Nginx kullanarak dosyaları sunma
FROM nginx:alpine

# HTML/JS/CSS dosyalarını Nginx'in varsayılan klasörüne kopyala
COPY public/ /usr/share/nginx/html

# Özel Nginx konfigürasyonunu kopyala
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]