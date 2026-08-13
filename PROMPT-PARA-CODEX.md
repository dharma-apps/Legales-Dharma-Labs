# Prompt reutilizable para incorporar una aplicación al centro legal

Copia el bloque siguiente en una tarea de Codex desde el repositorio del producto que quieras publicar.

```text
Necesito preparar los enlaces legales reales de este producto para una tienda de aplicaciones.

Repositorio legal común y público:
https://github.com/dharma-apps/Legales-Dharma-Labs.git

Sitio único publicado:
https://dharma-apps.github.io/Legales-Dharma-Labs/

Trabaja así:

1. Lee las instrucciones del repositorio del producto y audita su build final o candidato real. No redactes declaraciones basándote solamente en un README.
2. Verifica como mínimo: nombre, package/bundle ID, plataformas, empresa responsable, contacto, permisos, SDK de terceros, almacenamiento local, Android/iCloud backup, backend y países, cuentas/login, datos recogidos y compartidos, analítica/crash reporting, anuncios, compras/pagos, contenido generado por usuarios, público infantil, retención y mecanismo real de eliminación.
3. Si falta una decisión material o no puedes verificar un SDK/backend, detente y pídeme ese dato. Nunca declares “no recopilamos datos” sin evidencia del candidato final.
4. Clona o actualiza el repositorio Legales-Dharma-Labs en una carpeta separada. Conserva sus documentos generales:
   - /privacy/
   - /terms/
   - /account-deletion/
   No crees otro repositorio ni otro sitio de GitHub Pages.
5. Usa un slug estable y crea únicamente el anexo específico en:
   - /apps/<slug>/
   - /apps/<slug>/privacy/
   - /apps/<slug>/terms/
   - /apps/<slug>/delete/
   Si el producto no tiene cuentas, la última página debe explicar cómo borrar datos locales y backups. Si sí crea cuentas, debe describir y enlazar el mecanismo real de solicitud de eliminación dentro y fuera de la app.
6. Redacta español e inglés. El anexo debe identificar nombre del producto, package/bundle ID, responsable, contacto, fecha efectiva y relación con los documentos generales. Las afirmaciones específicas del anexo prevalecen sobre el marco general.
7. Añade el producto a /apps/index.html y todas sus rutas a sitemap.xml. Mantén el diseño, navegación, accesibilidad, ausencia de cookies/analytics/formularios y rutas bajo /Legales-Dharma-Labs/.
8. En el repositorio del producto, añade la URL específica de privacidad a la ficha de la tienda y un acceso visible dentro de la aplicación. No uses solamente la portada general.
9. Valida HTML, enlaces internos, ES/EN, móvil 390x844, escritorio, overflow, consola y respuesta HTTP pública. Ejecuta el escaneo de secretos y git diff --check.
10. Versiona únicamente archivos legales intencionales, haz commit y push a main del repositorio legal, espera GitHub Pages y comprueba públicamente todas las rutas HTTP 200. No incluyas secretos ni datos privados.
11. Entrégame las URLs exactas para App Store/Google Play y una tabla que compare lo declarado con lo observado en el build. Aclara cualquier revisión jurídica o humana todavía pendiente.

Antes de editar, completa como borrador la matriz de templates/APP-LEGAL-AUDIT.md. La documentación es una base operativa y no sustituye asesoría jurídica para salud, finanzas, niños, biometría, ubicación precisa, pagos, contenido de usuarios u otros tratamientos de alto riesgo.
```

## Regla sencilla

Los términos y marcos generales se reutilizan. Cada aplicación recibe un anexo porque su identidad, código, SDK y tratamiento de datos pueden ser distintos. Google Play debe enlazar la privacidad específica del producto.
