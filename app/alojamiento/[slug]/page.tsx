"use client"

import { use } from "react"
import Link from "next/link"
import { MainHeader } from "@/components/main-header"
import {
  MapPin,
  Star,
  Heart,
  Share2,
  Wifi,
  Car,
  UtensilsCrossed,
  Waves,
  Wind,
  Coffee,
  Tv,
  Bath,
  Phone,
  ShieldCheck,
  Accessibility,
  Dumbbell,
  ChevronRight,
  Check,
  Users,
  CalendarDays,
  Bed,
} from "lucide-react"

/* ─── Data ─── */

const hotels: Record<string, {
  name: string
  location: string
  rating: number
  ratingLabel: string
  reviews: number
  stars: number
  description: string
  images: string[]
  rooms: { type: string; bed: string; size: string; price: string }[]
  popularAmenities: string[]
  amenities: { category: string; items: string[] }[]
}> = {
  "palacio-nazarenas": {
    name: "Palacio Nazarenas, A Belmond Hotel, Cusco",
    location: "Cuzco, Perú",
    rating: 9.8,
    ratingLabel: "Excepcional",
    reviews: 41,
    stars: 5,
    description:
      "Ubicado en un convento del siglo XVI restaurado, este lujoso hotel ofrece una experiencia única en el corazón de Cusco. Con su piscina climatizada al aire libre, spa de clase mundial y servicio de mayordomo personalizado, es el refugio perfecto para explorar la ciudad imperial.",
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop",
    ],
    rooms: [
      { type: "Suite", bed: "1 cama doble grande", size: "45 m²", price: "S/ 4.336" },
      { type: "Suite Deluxe", bed: "1 cama king size", size: "60 m²", price: "S/ 5.890" },
      { type: "Suite Junior", bed: "1 cama doble grande", size: "35 m²", price: "S/ 3.120" },
    ],
    popularAmenities: [
      "Piscina al aire libre",
      "Wifi gratis",
      "Traslado aeropuerto",
      "Spa y centro de bienestar",
      "Habitaciones sin humo",
      "Restaurante",
      "Recepción 24 horas",
      "Tetera/cafetera en todas las habitaciones",
      "Bar",
      "Desayuno",
    ],
    amenities: [
      {
        category: "Ideal para tu estancia",
        items: [
          "Baño privado",
          "Wifi gratis",
          "Bañera",
          "Aire acondicionado",
          "TV de pantalla plana",
          "Admite mascotas",
          "Spa y centro de bienestar",
          "Restaurante",
          "Traslado aeropuerto",
          "Adaptado personas de movilidad reducida",
        ],
      },
      {
        category: "Baño",
        items: [
          "Zapatillas",
          "Baño privado",
          "Artículos de aseo gratis",
          "Albornoz",
          "Secador de pelo",
        ],
      },
      {
        category: "Habitación",
        items: ["Ropa de cama", "Armario", "Reloj despertador"],
      },
      {
        category: "Comida y bebida",
        items: [
          "Vino / champán · De pago",
          "Menús para dietas especiales (bajo petición)",
          "Snack-bar",
          "Desayuno en la habitación",
          "Bar",
          "Minibar",
          "Restaurante",
          "Tetera / cafetera",
        ],
      },
      {
        category: "Internet",
        items: [
          "Hay conexión a internet Wi-Fi disponible en todo el establecimiento. Gratis.",
        ],
      },
      {
        category: "Aparcamiento",
        items: ["No hay parking"],
      },
      {
        category: "Servicios de recepción",
        items: [
          "Proporcionan factura",
          "Registro de entrada / salida privado",
          "Servicio de conserjería",
          "Guardaequipaje",
          "Información turística",
          "Cambio de moneda",
          "Recepción 24 horas",
        ],
      },
      {
        category: "Servicios de limpieza",
        items: [
          "Servicio de limpieza diario",
          "Plancha para pantalones · De pago",
          "Servicio de planchado · De pago",
          "Servicio de lavandería · De pago",
          "Servicio de limpieza en seco · De pago",
        ],
      },
      {
        category: "General",
        items: [
          "Zona TV / salón de uso compartido",
          "Aire acondicionado",
          "Prohibido fumar en todo el alojamiento",
          "Habitaciones hipoalergénicas",
          "Servicio de despertador",
          "Calefacción",
          "Capilla",
          "Ascensor",
        ],
      },
      {
        category: "Accesibilidad",
        items: ["Adaptado para sillas de ruedas"],
      },
      {
        category: "Piscina al aire libre",
        items: [
          "Horario de apertura",
          "Abierta todo el año",
          "Para todas las edades",
          "Piscina climatizada",
          "Toalla de playa/piscina",
          "Sombrillas",
        ],
      },
      {
        category: "Bienestar",
        items: [
          "Taquillas en el gimnasio / spa",
          "Clases de yoga",
          "Masaje corporal completo",
          "Masaje de manos",
          "Masaje en pareja",
        ],
      },
    ],
  },
  "monasterio-belmond": {
    name: "Monasterio, A Belmond Hotel, Cusco",
    location: "Cuzco, Perú",
    rating: 9.8,
    ratingLabel: "Excepcional",
    reviews: 243,
    stars: 5,
    description:
      "Un antiguo monasterio del siglo XVI convertido en un hotel de lujo, con claustros coloniales, jardines centenarios y una capilla barroca con pan de oro. Una joya histórica en el corazón de Cusco.",
    images: [
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop",
    ],
    rooms: [
      { type: "Superior", bed: "1 cama doble grande", size: "30 m²", price: "S/ 2.385" },
      { type: "Deluxe", bed: "1 cama king size", size: "40 m²", price: "S/ 3.200" },
    ],
    popularAmenities: ["Wifi gratis", "Restaurante", "Bar", "Jardín", "Recepción 24 horas", "Desayuno"],
    amenities: [
      { category: "Ideal para tu estancia", items: ["Baño privado", "Wifi gratis", "Aire acondicionado", "Restaurante", "Bar", "Jardín"] },
      { category: "Baño", items: ["Baño privado", "Artículos de aseo gratis", "Secador de pelo"] },
      { category: "General", items: ["Aire acondicionado", "Calefacción", "Ascensor", "Capilla"] },
    ],
  },
  "hotel-la-cupula": {
    name: "Hotel La Cupula",
    location: "Copacabana, Bolivia",
    rating: 9.1,
    ratingLabel: "Fantástico",
    reviews: 787,
    stars: 0,
    description:
      "Con vistas panorámicas al Lago Titicaca, este encantador hotel ofrece habitaciones con cúpulas de vidrio, jardines tropicales y una terraza con restaurante vegetariano. Ideal para viajeros que buscan tranquilidad.",
    images: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop",
    ],
    rooms: [
      { type: "Doble Estándar", bed: "1 cama doble", size: "20 m²", price: "S/ 226" },
      { type: "Suite con Vista al Lago", bed: "1 cama king size", size: "35 m²", price: "S/ 450" },
    ],
    popularAmenities: ["Wifi gratis", "Restaurante", "Terraza", "Jardín", "Vistas al lago"],
    amenities: [
      { category: "Ideal para tu estancia", items: ["Wifi gratis", "Restaurante", "Terraza", "Jardín", "Vistas al lago"] },
      { category: "General", items: ["Prohibido fumar", "Calefacción"] },
    ],
  },
  "hotel-dann-monasterio": {
    name: "Hotel Dann Monasterio",
    location: "Popayán, Colombia",
    rating: 9.0,
    ratingLabel: "Fantástico",
    reviews: 887,
    stars: 5,
    description:
      "Alojado en un edificio colonial del siglo XVIII, este hotel combina historia y confort moderno en el centro histórico de Popayán, la Ciudad Blanca de Colombia.",
    images: [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=300&fit=crop",
    ],
    rooms: [
      { type: "Estándar", bed: "1 cama doble", size: "22 m²", price: "S/ 274" },
      { type: "Superior", bed: "1 cama king size", size: "30 m²", price: "S/ 380" },
    ],
    popularAmenities: ["Wifi gratis", "Restaurante", "Recepción 24 horas", "Jardín", "Bar"],
    amenities: [
      { category: "Ideal para tu estancia", items: ["Wifi gratis", "Restaurante", "Bar", "Jardín", "Recepción 24 horas"] },
      { category: "General", items: ["Aire acondicionado", "Ascensor"] },
    ],
  },
}

const amenityIcons: Record<string, typeof Wifi> = {
  "Ideal para tu estancia": ShieldCheck,
  "Baño": Bath,
  "Habitación": Bed,
  "Comida y bebida": UtensilsCrossed,
  "Internet": Wifi,
  "Aparcamiento": Car,
  "Servicios de recepción": Phone,
  "Servicios de limpieza": Wind,
  "General": Coffee,
  "Accesibilidad": Accessibility,
  "Piscina al aire libre": Waves,
  "Bienestar": Dumbbell,
}

export default function HotelDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const hotel = hotels[slug]

  if (!hotel) {
    return (
      <div className="flex min-h-screen flex-col bg-gray-100">
        <MainHeader />
        <div className="flex flex-1 items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900">Hotel no encontrado</h1>
            <p className="mt-2 text-gray-500">El alojamiento que buscas no existe.</p>
            <Link href="/" className="mt-4 inline-block rounded-md bg-[#003B00] px-6 py-2 text-sm font-bold text-white hover:bg-[#005C00]">
              Volver al inicio
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      <MainHeader />

      <main className="mx-auto w-full max-w-7xl px-4 py-6">
        {/* ── Breadcrumb ── */}
        <nav className="mb-4 flex items-center gap-1 text-sm text-gray-500">
          <Link href="/" className="hover:text-[#003B00] transition-colors">Inicio</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-gray-900">{hotel.name}</span>
        </nav>

        {/* ── Header row ── */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="flex items-center gap-2">
              {hotel.stars > 0 && (
                <div className="flex items-center">
                  {Array.from({ length: hotel.stars }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#FFB700] text-[#FFB700]" />
                  ))}
                </div>
              )}
              <span className="rounded bg-[#003B00]/10 px-2 py-0.5 text-xs font-medium text-[#003B00]">Hotel</span>
            </div>
            <h1 className="mt-1 text-2xl font-bold text-gray-900 md:text-3xl">{hotel.name}</h1>
            <p className="mt-1 flex items-center gap-1 text-sm text-[#003B00]">
              <MapPin className="h-4 w-4" />
              {hotel.location}
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <button className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 bg-white text-gray-600 hover:bg-gray-50 transition-colors">
              <Heart className="h-5 w-5" />
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 bg-white text-gray-600 hover:bg-gray-50 transition-colors">
              <Share2 className="h-5 w-5" />
            </button>
            <button className="rounded-md bg-[#005C00] px-5 py-2.5 text-sm font-bold text-white hover:bg-[#004A00] transition-colors">
              Ver disponibilidad
            </button>
          </div>
        </div>

        {/* ── Image gallery ── */}
        <div className="mt-4 grid gap-2 rounded-xl overflow-hidden sm:grid-cols-4 sm:grid-rows-2">
          <div className="sm:col-span-2 sm:row-span-2">
            <img src={hotel.images[0]} alt={hotel.name} className="h-full w-full object-cover sm:h-[400px]" />
          </div>
          {hotel.images.slice(1, 5).map((img, i) => (
            <div key={i} className="hidden sm:block">
              <img src={img} alt={`${hotel.name} ${i + 2}`} className="h-[196px] w-full object-cover" />
            </div>
          ))}
        </div>

        {/* ── Rating + Description ── */}
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="text-gray-700 leading-relaxed">{hotel.description}</p>
          </div>
          <div className="flex flex-col items-end justify-start gap-3 rounded-xl border bg-white p-5">
            <div className="flex w-full items-center gap-3">
              <span className="flex h-10 min-w-[40px] items-center justify-center rounded-tl-lg rounded-tr-lg rounded-br-lg bg-[#003B00] text-sm font-bold text-white">
                {hotel.rating}
              </span>
              <div>
                <p className="font-bold text-gray-900">{hotel.ratingLabel}</p>
                <p className="text-sm text-gray-500">{hotel.reviews} comentarios</p>
              </div>
            </div>
            <div className="w-full space-y-1">
              {["Limpieza", "Confort", "Ubicación", "Servicios", "Personal"].map((label) => (
                <div key={label} className="flex items-center gap-2 text-sm">
                  <span className="w-20 text-gray-600">{label}</span>
                  <div className="flex-1 h-2 rounded-full bg-gray-200 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-[#003B00]"
                      style={{ width: `${(hotel.rating / 10) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Rooms ── */}
        <section className="mt-8">
          <h2 className="mb-4 text-xl font-bold text-gray-900">Disponibilidad</h2>
          <div className="overflow-hidden rounded-xl border bg-white">
            <table className="w-full text-sm">
              <thead className="bg-[#003B00] text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-medium">Tipo de habitación</th>
                  <th className="hidden px-4 py-3 text-left font-medium sm:table-cell">Cama</th>
                  <th className="hidden px-4 py-3 text-left font-medium md:table-cell">Tamaño</th>
                  <th className="px-4 py-3 text-right font-medium">Precio / noche</th>
                  <th className="px-4 py-3 text-right font-medium"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {hotel.rooms.map((room) => (
                  <tr key={room.type} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-4">
                      <p className="font-bold text-[#003B00]">{room.type}</p>
                      <p className="mt-0.5 text-xs text-gray-500 sm:hidden">{room.bed}</p>
                    </td>
                    <td className="hidden px-4 py-4 text-gray-600 sm:table-cell">{room.bed}</td>
                    <td className="hidden px-4 py-4 text-gray-600 md:table-cell">{room.size}</td>
                    <td className="px-4 py-4 text-right font-bold text-gray-900">{room.price}</td>
                    <td className="px-4 py-4 text-right">
                      <button className="rounded-md bg-[#005C00] px-4 py-2 text-xs font-bold text-white hover:bg-[#004A00] transition-colors">
                        Mostrar precios
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Services ── */}
        <section className="mt-8">
          <h2 className="text-xl font-bold text-gray-900">
            Servicios de {hotel.name}
          </h2>
          <p className="mb-4 text-sm text-gray-500">¡Buenos servicios! Puntuación: {hotel.rating * 10 | 0}</p>

          {/* Popular amenities */}
          <div className="mb-6 flex flex-wrap gap-2">
            {hotel.popularAmenities.map((a) => (
              <span key={a} className="inline-flex items-center gap-1.5 rounded-full border border-gray-300 bg-white px-3 py-1.5 text-xs font-medium text-gray-700">
                <Check className="h-3 w-3 text-[#005C00]" />
                {a}
              </span>
            ))}
          </div>

          {/* Full amenity grid */}
          <div className="grid gap-6 rounded-xl border bg-white p-6 sm:grid-cols-2 lg:grid-cols-3">
            {hotel.amenities.map((group) => {
              const Icon = amenityIcons[group.category] || ShieldCheck
              return (
                <div key={group.category}>
                  <h3 className="mb-2 flex items-center gap-2 font-bold text-gray-900">
                    <Icon className="h-4 w-4 text-[#003B00]" />
                    {group.category}
                  </h3>
                  <ul className="space-y-1">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                        <Check className="mt-0.5 h-3 w-3 shrink-0 text-[#005C00]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </section>

        {/* ── CTA ── */}
        <div className="mt-8 mb-8 flex justify-center">
          <button className="rounded-md bg-[#005C00] px-8 py-3 text-sm font-bold text-white hover:bg-[#004A00] transition-colors">
            Ver disponibilidad
          </button>
        </div>
      </main>

      {/* ── Footer ── */}
      <footer className="border-t bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <span className="text-lg font-extrabold text-[#003B00]">TuristicoYa</span>
              <p className="mt-2 text-sm text-gray-500">Tu plataforma de confianza para encontrar y reservar los mejores alojamientos.</p>
            </div>
            <div>
              <h4 className="mb-3 font-semibold text-gray-900">Alojamiento</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-[#003B00] transition-colors">Hoteles</a></li>
                <li><a href="#" className="hover:text-[#003B00] transition-colors">Apartamentos</a></li>
                <li><a href="#" className="hover:text-[#003B00] transition-colors">Resorts</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 font-semibold text-gray-900">Soporte</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-[#003B00] transition-colors">Centro de ayuda</a></li>
                <li><a href="#" className="hover:text-[#003B00] transition-colors">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 font-semibold text-gray-900">Contáctanos</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center gap-2"><Phone className="h-4 w-4" />0 800 8 0516</li>
                <li className="flex items-center gap-2"><MapPin className="h-4 w-4" />Lima, Perú</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-6 text-center text-sm text-gray-400">
            &copy; 2026 TuristicoYa. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}
