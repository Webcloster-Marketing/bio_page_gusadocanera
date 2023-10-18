import './style.css'
import 'remixicon/fonts/remixicon.css'

import Alpine from 'alpinejs'

window.Alpine = Alpine
Alpine.data('biodata', () => ({
  bio_name: 'Dotor Gustavo Adolfo Canaval Erazo',
  bio_position:
    'Especialista en : Ginecología y Obstetricia & Cirugía laparoscopica ginecológica',
  bio_profile: {
    // emoji: '👨‍⚕️💼🩺🔬👩‍🦰🤰🔪🔬🩸🏥💉',
    description: [
      'El Dr. Gustavo Adolfo Canaval Erazo es un destacado Ginecólogo, cuenta con amplia experiencia.',
      'Egresado como Médico Cirujano de la Universidad Libre de Cali es especialista en Ginecología y Obstetricia y subespecializado en Cirugía Endoscópica Ginecológica.',
      'Su amplia experiencia lo ha llevado a desempeñarse como Ginecólogo Obstetra Laparoscopista en el Hospital Universitario del Valle, la Clínica Versalles, el Centro Médico Imbanaco, la Clínica Salud IPS Florida, entre otras insituciones de prestigio en el país.',
      'Actualmente se encuentra dando consulta en el Centro Médico Imbanaco Torre B y la clínica Lunga Vita donde se especializa en tratamientos como: Cirugía de la Endometriosis, Embarazo de Riesgo, Embarazo Ectópico, Vaginosis, Dolor Pélvico y Planificación Familiar, Miomas Uterinos, Hemorragias Uterinas Anormales, Infecciones Ginecológicas, Quiste de Ovario sólo por mencionar algunos.',
      'Gracias a esto el Dr. Canaval Erazo es reconocido como uno de los mejores especialistas en Ginecología en Cali.'
    ]
  },
  colors: ['Red', 'Orange', 'Yellow'],
  bio_social: [
    {
      name: 'Facebook',
      icon: 'ri-facebook-fill',
      url: 'https://www.facebook.com/ginecocanaval2?mibextid=LQQJ4d'
    },
    {
      name: 'Instagram',
      icon: 'ri-instagram-fill',
      url: 'https://www.instagram.com/ginecocanaval2'
    },
    {
      name: 'Mail',
      icon: 'ri-mail-fill',
      url: 'mailto:ginecoscanaval@gmail.com'
    }
    // {
    //   name: 'WhatsApp',
    //   icon: 'ri-whatsapp-fill',
    //   url: 'https://api.whatsapp.com/send?phone=573174506954'
    // }
  ],
  bio_mail: 'ginecoscanaval@gmail.com',
  bio_whatsapp: '573174506954',
  bio_address: [
    {
      address: 'Clínica Imbanaco, Cra 38A # 5A-100, Torre B, consultorio 709',
      maps_address:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497.83697062297546!2d-76.54465411798536!3d3.4240777371669853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a69f60f5de21%3A0xa9778ccfe7e4dd0f!2sImbanaco%20Medical%20Clinic%20%7C%20Administration%20Office!5e0!3m2!1sen!2sco!4v1697644006105!5m2!1sen!2sco',
      city: 'Santiago de Cali',
      department: 'Valle del Cauca',
      country: 'Colombia',
      map_url: 'https://www.google.com/maps?ll=3.424252,-76.544121&z=18&t=m&hl=en&gl=CO&mapclient=embed&cid=12211383739215043855'
    },
    {
      address: 'Clínica Lunga Vita, Cra 105 #15-20',
      maps_address:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.9459489215733!2d-76.53772472400338!3d3.363386215703475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a19d98cd0dcf%3A0x8407d0b9d380c1d1!2sClinica%20Lungavita%20-%20D'Picture%20S.A!5e0!3m2!1sen!2sco!4v1697641689082!5m2!1sen!2sco",

      city: 'Santiago de Cali',
      department: 'Valle del Cauca',
      country: 'Colombia',
      map_url: 'https://www.google.com/maps?ll=3.363998,-76.533966&z=15&t=m&hl=en&gl=CO&mapclient=embed&cid=9513802234379420113'
    }
  ]
}))

Alpine.start()
