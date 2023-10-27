import Image from 'next/image'
import styles from './page.module.css'
import bg from '@/public/background0.jpg'
import logo from '@/public/logo.png'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.67), rgba(0, 0, 0, 0.67)), url(${bg.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}>
      <div className={styles.header}>
        <Image
          className={styles.logo}
          src={logo.src}
          alt='Logo Migracion Responsable'
          width={160}
          height={120}
          priority
        />
        <div className={styles.contentHeaderUpper}>
          <h1>¡Tu viaje hacia una vida llena de oportunidades y desafíos comienza aquí!</h1>
          <div className={styles.contentHeaderLower}>
            <div>
              <p>No estas solo, estamos aquí para ser tus compañeros de ruta, tus guías, y tus aliados en cada paso del proceso de migración.</p>
              <div className={styles.socialmedia}>
                <Link href="https://www.instagram.com/migracion_responsable/">
                  <img width="48"
                    height="48"
                    src="https://img.icons8.com/color/96/instagram-new--v1.png"
                    alt="instagram-new--v1" />
                </Link>
                <Link href="https://www.tiktok.com/@migracionresponsable.com">
                  <img width="48"
                    height="48"
                    src="https://img.icons8.com/color/48/tiktok--v1.png"
                    alt="tiktok--v1" />
                </Link>
                <Link href="mailto:info@migracionresponsable.com">
                  <img width="48" 
                    height="48" 
                    src="https://img.icons8.com/color/48/gmail-new.png" 
                    alt="gmail-new" />
                </Link>
              </div>
              <Link href="https://calendly.com/migracionresponsable/asesoria-migracion?month=2023-10"
                className={styles.makeAppointment}>
                Reserva tu asesoría aqui</Link>
            </div>
            <iframe width="480" height="280" src="https://www.youtube.com/embed/OeZPQid1UE8?si=rLfz40_CBiFS8BiG" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
        </div>
      </div>

      <div className={styles.content}>

      </div>
      <div className={styles.footer}>

      </div>
    </main>

  )
}
