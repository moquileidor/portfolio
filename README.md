# Portafolio Personal - Jorge Luis Alvarado Cuesta

Este es mi portafolio personal desarrollado con React y Bootstrap. El sitio web muestra mi experiencia, habilidades y proyectos como estudiante de Ingeniería de Software.

## Características

- Diseño moderno y responsivo
- Secciones para mostrar información personal, habilidades y proyectos
- Formulario de contacto funcional
- Integración con redes sociales
- Animaciones sutiles para mejorar la experiencia de usuario

## Tecnologías Utilizadas

- React
- TypeScript
- Bootstrap
- React Router
- EmailJS (para el formulario de contacto)
- Font Awesome (para iconos)

## Instalación

1. Clona este repositorio:
```bash
git clone https://github.com/tu-usuario/portafolio-personal.git
```

2. Navega al directorio del proyecto:
```bash
cd portafolio-personal
```

3. Instala las dependencias:
```bash
npm install
```

4. Inicia el servidor de desarrollo:
```bash
npm start
```

## Configuración del Formulario de Contacto

Para que el formulario de contacto funcione, necesitas configurar EmailJS:

1. Crea una cuenta en [EmailJS](https://www.emailjs.com/)
2. Obtén tu Service ID, Template ID y User ID
3. Reemplaza los valores en el componente Contact.tsx:
```typescript
await emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  formData,
  'YOUR_USER_ID'
);
```

## Personalización

- Reemplaza las imágenes en la carpeta `public/`
- Actualiza la información personal en los componentes correspondientes
- Modifica los colores y estilos en `App.css`

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles. 