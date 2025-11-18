'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Star } from 'lucide-react'
import { QRCodeSVG } from 'qrcode.react'
import Image from 'next/image'

export default function ReviewPage() {
  // CID: 2449893619098567211 (converted from hex 0x21df1224908f522b)
  const googleReviewUrl = 'https://www.google.com/search?rlz=1C1ONGR_esCO1069CO1069&sca_esv=fdcf620e6fdd6b42&cs=1&sxsrf=AE3TifNKWmU_8daNe-Ekns8yJxeD5JS_HA:1763436747287&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-EzLMqo6NtPwdRp-RJjUx0ISHrnqPaGJzB1Vjhc0iewvusy3RVXW5qEGZB-SNUdnJXwzjOJEBdL9kCuDfUFUQXah8cGW0&q=Luxury+Air+Opiniones&sa=X&ved=2ahUKEwiit5_n4fqQAxX0TTABHTcyIKAQ0bkNegQIJRAD&biw=1536&bih=695&dpr=1.25#lrd=0x8ef42df468f20f01:0x21df1224908f522b,3,,,,'

  // Alternative CID link format
  const googleCidUrl = 'https://www.google.com/maps?cid=2449893619098567211'

  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-50 flex items-center justify-center p-4">
      <Card className="max-w-md w-full p-8 text-center space-y-6 shadow-2xl">
        {/* Logo */}
        <div className="flex justify-center">
          <Image
            src="/LuxuryLogo.svg"
            alt="Luxury Air Logo"
            width={200}
            height={200}
            className="w-auto h-auto max-w-[200px]"
            priority
          />
        </div>

        {/* Main message */}
        <div className="space-y-3">
          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <h2 className="text-2xl font-heading font-semibold text-balance">
            ¿Disfrutaste nuestro servicio?
          </h2>
          <p className="text-muted-foreground text-pretty">
            Tu opinión nos ayuda a mejorar. Escanea el código QR o haz clic en el botón para dejar tu reseña en Google.
          </p>
        </div>

        <div className="bg-sky-50 rounded-lg p-4 space-y-2 text-left border border-sky-100">
          <p className="font-semibold text-sm text-sky-900">Instrucciones:</p>
          <ol className="text-sm text-sky-800 space-y-1 list-decimal list-inside">
            <li>Escanea el código QR o presiona el botón abajo</li>
            <li>Presiona las estrellas para calificar</li>
            <li>Escribe tu opinión y comparte tu experiencia</li>
          </ol>
        </div>

        {/* QR Code */}
        <div className="flex justify-center py-4">
          <div className="p-4 bg-white rounded-xl shadow-md">
            <QRCodeSVG
              value={googleReviewUrl}
              size={200}
              level="H"
              includeMargin={false}
            />
          </div>
        </div>

        {/* CTA Button */}
        <Button 
          size="lg" 
          className="w-full text-lg h-12"
          onClick={() => window.open(googleReviewUrl, '_blank')}
        >
          Dejar Reseña en Google
        </Button>

        {/* Footer note */}
        <p className="text-xs text-muted-foreground text-balance">
          Gracias por confiar en Luxury Air para tus necesidades de climatización
        </p>
      </Card>
    </main>
  )
}
