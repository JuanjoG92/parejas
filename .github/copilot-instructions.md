# Copilot Instructions - FaithMeet (parejas)

## Proyecto
Plataforma de parejas cristianas tipo Tinder. Nombre: "FaithMeet".
URL de producción: **https://parejas.centralchat.pro/**

## Stack técnico
- **Frontend**: HTML5 + CSS3 + JavaScript vanilla (NO frameworks)
- **Backend**: PHP con SQLite
- **NO hay compilación**. NUNCA usar `run_build`.

## Repositorio Git
- **Repo**: `https://github.com/JuanjoG92/parejas.git`
- **Branch principal**: `main`
- **Carpeta local**: `C:\parejas`

## Flujo de trabajo y deploy
- SIEMPRE modificar archivos en LOCAL (`C:\parejas`).
- Hacer commit y push a GitHub:
  ```powershell
  cd C:\parejas; git add -A; git commit -m "descripción"; git push origin main
  ```
- Luego hacer git pull en el VPS:
  ```
  ssh -i "$env:USERPROFILE\.ssh\nueva_llave" root@172.96.8.245 "cd /var/www/parejas; git pull"
  ```
- NUNCA subir archivos con `scp`. Todo va por git.
- NUNCA compilar ni usar `run_build`.
- Usar `;` como separador en PowerShell, NO `&&`.

## VPS
- IP: `172.96.8.245`
- SSH: `ssh -i "$env:USERPROFILE\.ssh\nueva_llave" root@172.96.8.245`
- Ruta: `/var/www/parejas`
- Servidor: Nginx + PHP-FPM
- Subdominio: `parejas.centralchat.pro`

## Estructura
```
parejas/
├── Parejas.sln          Solución Visual Studio
├── Parejas.njsproj      Proyecto
├── index.html           Landing page
├── register.html        Registro
├── login.html           Login
├── app.html             App principal (discover/matches/profile)
├── css/app.css          Estilos
├── js/app.js            JS + i18n (ES/EN/PT)
├── api/
│   ├── init-db.php      Inicialización SQLite
│   ├── auth.php         Registro/login
│   ├── discover.php     Perfiles para descubrir
│   ├── like.php         Like/pass/match
│   ├── matches.php      Obtener matches
│   └── profile.php      CRUD perfil
├── data/                SQLite DB (NO versionar)
├── uploads/             Fotos de perfil
└── deploy/              Config Nginx
```

## Paleta de colores
- Primary: `#C9515B` (rosa cálido)
- Secondary: `#D4A24C` (dorado cálido)
- Accent: `#6B9E6F` (verde salvia)
- Light bg: `#FFF9F3` / Dark bg: `#1A1614`

## Reglas
- Archivos modulares de 500-700 líneas máximo.
- Mobile-first responsive.
- i18n: ES, EN, PT con `data-i18n` + objeto `L` en `js/app.js`.
- Solo Font Awesome y Google Fonts DM Sans.

## Git workflow
- Cuando el usuario diga "haz commit y push", ejecutar sin preguntar:
  ```powershell
  cd C:\parejas; git add -A; git commit -m "mensaje"; git push origin main
  ```
