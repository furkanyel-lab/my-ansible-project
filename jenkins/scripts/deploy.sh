#!/bin/bash

echo "Sistem güncelleniyor ve Docker imajları build ediliyor..."

# Eski konteynerları durdur ve temizle
docker-compose down

# Yeni imajları build et ve arka planda çalıştır
docker-compose up -d --build

echo "Dağıtım (Deployment) başarıyla tamamlandı!"