"use client"

import Link from "next/link"
import { useParams } from "next/navigation"
import { findHotel } from "@/app/paquete/_data"
import {
  Plane,
  Star,
  MapPin,
  Info,
  ArrowLeft,
  Phone,
  Home,
  HelpCircle,
  ShoppingCart,
  User,
  Menu,
  Sparkles,
  UtensilsCrossed,
  Waves,
  HandMetal,
  CircleParking,
  Snowflake,
  Wifi,
  Clock,
  Heart,
} from "lucide-react"

function StarIcons({ count }: { count: number }) {
  return (
    <span className="inline-flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
      ))}
    </span>
  )
}

const amenityIcons: Record<string, typeof UtensilsCrossed> = {
  Restaurante: UtensilsCrossed,
  "Piscina al aire libre todo el año": Waves,
  "Piscina al aire libre": Waves,
  "Piscina en azotea": Waves,
  Piscina: Waves,
  "Servicio de masajes": HandMetal,
  Spa: HandMetal,
  "Spa completo": HandMetal,
  "Estacionamiento gratis": CircleParking,
  Estacionamiento: CircleParking,
  "Aire acondicionado en zonas comunes": Snowflake,
  "Aire acondicionado": Snowflake,
  "Wi-Fi gratis en zonas comunes": Wifi,
  "Wi-Fi gratis": Wifi,
}

export default function HotelDetailPage() {
  const params = useParams()
  const destSlug = params.slug as string
  const hotelSlug = params.hotelSlug as string

  const result = findHotel(destSlug, hotelSlug)

  if (!result) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="text-center">
          <p className="text-2xl font-bold text-gray-900">Hotel no encontrado</p>
          <Link href={`/paquete/${destSlug}`} className="mt-4 inline-block text-[#4300D2] hover:underline">
            Volver al paquete
          </Link>
        </div>
      </div>
    )
  }

  const { destination, hotel } = result
  const descParagraphs = hotel.description.split("\n\n")

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      {/* ============ TOP BAR ============ */}
      <header className="bg-[#4300D2] text-white">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20">
              <Plane className="h-4 w-4" />
            </div>
            <span className="text-xl font-bold tracking-tight">viajaYa</span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm lg:flex">
            <a href="#" className="flex items-center gap-1.5 text-white/90 hover:text-white transition-colors">
              <Phone className="h-3.5 w-3.5" /> Para ventas 0 800 7 8484
            </a>
            <a href="#" className="flex items-center gap-1.5 text-white/90 hover:text-white transition-colors">
              <Home className="h-3.5 w-3.5" /> Publica tu alojamiento
            </a>
            <a href="#" className="flex items-center gap-1.5 text-white/90 hover:text-white transition-colors">
              <HelpCircle className="h-3.5 w-3.5" /> Ayuda
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors">
              <User className="h-4 w-4" />
            </button>
            <button className="hidden sm:flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors">
              <Menu className="h-4 w-4" />
            </button>
            <div className="hidden sm:block h-6 w-px bg-white/20" />
            <button className="hidden sm:flex items-center gap-1.5 text-sm text-white/90 hover:text-white transition-colors">
              <ShoppingCart className="h-4 w-4" /> Carrito
            </button>
          </div>
        </div>
      </header>

      {/* ============ BREADCRUMB ============ */}
      <div className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="text-[#4300D2] hover:underline">Inicio</Link>
            <span>/</span>
            <Link href={`/paquete/${destSlug}`} className="text-[#4300D2] hover:underline">
              Paquetes {destination.name}
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium line-clamp-1">{hotel.name}</span>
          </div>
        </div>
      </div>

      {/* ============ MAIN CONTENT ============ */}
      <div className="mx-auto w-full max-w-7xl px-4 py-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
          {/* ---------- LEFT COLUMN ---------- */}
          <div>
            {/* Photo Gallery Grid */}
            <div className="grid grid-cols-1 gap-2 md:grid-cols-[2fr_1fr]">
              {/* Main image */}
              <div className="relative overflow-hidden rounded-l-xl">
                <img
                  src={hotel.images[0]}
                  alt={hotel.name}
                  className="h-[340px] w-full object-cover md:h-[400px]"
                />
              </div>
              {/* Side images */}
              <div className="hidden md:grid md:grid-rows-2 gap-2">
                <div className="relative overflow-hidden rounded-tr-xl">
                  <img
                    src={hotel.images[1]}
                    alt={hotel.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="relative overflow-hidden">
                    <img
                      src={hotel.images[2]}
                      alt={hotel.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="relative overflow-hidden rounded-br-xl">
                    <img
                      src={hotel.images[3]}
                      alt={hotel.name}
                      className="h-full w-full object-cover"
                    />
                    <button className="absolute inset-0 flex items-center justify-center bg-black/30 text-white transition-colors hover:bg-black/40">
                      <span className="rounded-full border-2 border-white px-4 py-2 text-sm font-semibold">
                        Ver galería
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Hotel Name & Info */}
            <div className="mt-6">
              <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">{hotel.name}</h1>
              <div className="mt-2">
                <StarIcons count={hotel.stars} />
              </div>
              <p className="mt-2 text-sm text-gray-500">
                {hotel.locationDetail}. {hotel.distanceCenter}{" "}
                <button className="ml-1 font-semibold text-[#4300D2] hover:underline">Ver en mapa</button>
              </p>
            </div>

            {/* Rating Card */}
            <div className="mt-5 flex items-stretch gap-0 overflow-hidden rounded-xl border">
              <div className="flex items-center gap-3 bg-teal-700 px-5 py-4 text-white">
                <span className="text-3xl font-extrabold">{hotel.rating}</span>
                <div>
                  <p className="font-bold">{hotel.ratingText}</p>
                  <p className="text-sm text-teal-100">Ver {hotel.reviews.toLocaleString()} comentarios</p>
                </div>
              </div>
              <div className="flex items-center border-l bg-purple-50 px-5 py-4">
                <div>
                  <p className="text-sm text-gray-700">
                    {hotel.reviewSummary}{" "}
                    <button className="font-bold text-[#4300D2] hover:underline">Ver más</button>
                  </p>
                  <p className="mt-1 flex items-center gap-1 text-xs text-gray-400">
                    <Sparkles className="h-3.5 w-3.5" />
                    Resumen de comentarios generado con IA
                  </p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <hr className="my-8 border-gray-200" />

            {/* Elegido por quienes viajan de a dos */}
            {hotel.badges.length > 0 && hotel.badges.some((b) => b.toLowerCase().includes("pareja")) && (
              <>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Elegido por quienes viajan de a dos</h2>
                  <p className="mt-2 text-sm text-gray-600">
                    Si buscas disfrutar de a dos, ¡este es el lugar para ti! Quienes viajan de esta forma eligen {hotel.name} porque cuenta con:
                  </p>

                  {/* Amenities Row */}
                  <div className="mt-6 flex flex-wrap items-start gap-6">
                    {hotel.amenities.slice(0, 7).map((amenity) => {
                      const Icon = amenityIcons[amenity] || Star
                      return (
                        <div key={amenity} className="flex flex-col items-center gap-2 text-center" style={{ width: 100 }}>
                          <Icon className="h-6 w-6 text-gray-700" />
                          <span className="text-xs text-gray-600 leading-tight">{amenity}</span>
                        </div>
                      )
                    })}
                    <button className="flex flex-col items-center gap-2 text-center" style={{ width: 100 }}>
                      <span className="text-sm font-bold text-[#4300D2]">Ver todos los servicios</span>
                    </button>
                  </div>
                </div>
                <hr className="my-8 border-gray-200" />
              </>
            )}

            {/* Amenities section if no badge */}
            {(!hotel.badges.length || !hotel.badges.some((b) => b.toLowerCase().includes("pareja"))) && (
              <>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Servicios del hotel</h2>
                  <div className="mt-6 flex flex-wrap items-start gap-6">
                    {hotel.amenities.slice(0, 7).map((amenity) => {
                      const Icon = amenityIcons[amenity] || Star
                      return (
                        <div key={amenity} className="flex flex-col items-center gap-2 text-center" style={{ width: 100 }}>
                          <Icon className="h-6 w-6 text-gray-700" />
                          <span className="text-xs text-gray-600 leading-tight">{amenity}</span>
                        </div>
                      )
                    })}
                    <button className="flex flex-col items-center gap-2 text-center" style={{ width: 100 }}>
                      <span className="text-sm font-bold text-[#4300D2]">Ver todos los servicios</span>
                    </button>
                  </div>
                </div>
                <hr className="my-8 border-gray-200" />
              </>
            )}

            {/* Conoce un poco más */}
            <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Conoce un poco más</h2>
                <div className="mt-4 space-y-4 text-sm leading-relaxed text-gray-700">
                  {descParagraphs.map((p, i) => (
                    <p key={i} className="whitespace-pre-line">{p}</p>
                  ))}
                </div>
              </div>

              {/* Location card */}
              <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
                <div className="relative h-36 bg-gradient-to-br from-blue-50 to-green-50">
                  <MapPin className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 text-[#4300D2]" />
                </div>
                <div className="p-4">
                  <button className="text-sm font-semibold text-[#4300D2] hover:underline">Ver en mapa</button>
                  <h3 className="mt-2 font-bold text-gray-900">Acerca de la ubicación</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {hotel.locationDescription}
                  </p>
                  <p className="mt-3 flex items-center gap-1 text-xs text-gray-400">
                    <Sparkles className="h-3.5 w-3.5" />
                    Resumen de ubicación generado con IA
                  </p>
                </div>
              </div>
            </div>

            <hr className="my-8 border-gray-200" />

            {/* Horarios del alojamiento */}
            <div>
              <h2 className="text-xl font-bold text-gray-900">Horarios del alojamiento</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="flex items-center gap-4 rounded-xl border bg-white p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-50 text-green-600">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Check-in</p>
                    <p className="text-sm text-gray-500">A partir de las {hotel.checkIn}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-xl border bg-white p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-red-500">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Check-out</p>
                    <p className="text-sm text-gray-500">Antes de las {hotel.checkOut}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ---------- RIGHT COLUMN: STICKY PRICE CARD ---------- */}
          <div>
            <div className="sticky top-6 overflow-hidden rounded-xl border bg-white shadow-sm">
              {/* Oferta badge */}
              {hotel.hasDiscount && (
                <div className="px-5 pt-5">
                  <span className="inline-block rounded bg-yellow-400 px-3 py-1 text-xs font-bold text-yellow-900">
                    Oferta imbatible
                  </span>
                </div>
              )}

              <div className="p-5">
                <p className="text-sm text-gray-500">Vuelo + Alojamiento</p>
                <p className="mt-1 font-semibold text-gray-900">{hotel.roomType}</p>
                <p className="text-sm text-gray-500">Precio final por persona</p>

                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-sm text-gray-500">US$</span>
                  <span className="text-4xl font-extrabold text-gray-900">{hotel.pricePerPerson}</span>
                  <Info className="h-4 w-4 text-gray-400" />
                </div>

                <p className="mt-2 text-sm font-semibold text-gray-700">
                  Final 2 personas US$ {(hotel.pricePerPerson * 2).toLocaleString()}
                </p>
                <p className="text-xs text-gray-400">Incluye impuestos, tasas y cargos</p>

                <button className="mt-5 w-full rounded-full bg-[#4300D2] py-3 text-sm font-bold text-white transition-colors hover:bg-[#3600A8]">
                  Ver habitaciones
                </button>
              </div>
            </div>

            {/* Back link */}
            <Link
              href={`/paquete/${destSlug}`}
              className="mt-4 flex items-center gap-2 text-sm text-[#4300D2] hover:underline"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver a resultados
            </Link>
          </div>
        </div>
      </div>

      {/* ============ FOOTER ============ */}
      <footer className="mt-auto border-t bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#4300D2] text-white">
                <Plane className="h-4 w-4" />
              </div>
              <span className="text-lg font-bold text-[#4300D2]">viajaYa</span>
            </div>
            <p className="text-sm text-gray-400">&copy; 2026 viajaYa. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
