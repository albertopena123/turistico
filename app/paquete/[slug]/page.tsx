"use client"

import { useState } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import {
  Plane,
  Hotel,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Star,
  MapPin,
  Check,
  X,
  Plus,
  Info,
  Car,
  Compass,
  Bus,
  Coffee,
  ArrowLeft,
  Phone,
  Home,
  HelpCircle,
  ShoppingCart,
  User,
  Menu,
  Calendar,
} from "lucide-react"
import { destinationData } from "@/app/paquete/_data"

const sidebarFilters = [
  "Condiciones de tu reserva",
  "Moneda",
  "Nombre del alojamiento",
  "Alimentación",
  "Servicios",
  "Zonas",
  "Puntuación",
  "Estrellas",
  "Tipo de alojamiento",
  "Cadena hotelera",
]

function StarIcons({ count }: { count: number }) {
  return (
    <span className="inline-flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
      ))}
    </span>
  )
}

function RatingBadge({ rating, text, reviews }: { rating: number; text: string; reviews: number }) {
  const bg = rating >= 9 ? "bg-green-600" : rating >= 8 ? "bg-green-500" : "bg-teal-600"
  return (
    <span className="inline-flex items-center gap-2">
      <span className={`${bg} rounded-md px-2 py-0.5 text-sm font-bold text-white`}>{rating}</span>
      <span className="text-sm text-gray-600">{text} ({reviews.toLocaleString()})</span>
    </span>
  )
}

export default function PaquetePage() {
  const params = useParams()
  const slug = params.slug as string
  const data = destinationData[slug]
  const [showPromo, setShowPromo] = useState(true)
  const [openFilters, setOpenFilters] = useState<Record<string, boolean>>({ "Condiciones de tu reserva": true })
  const [activeFilter, setActiveFilter] = useState("Todos")

  if (!data) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="text-center">
          <p className="text-2xl font-bold text-gray-900">Destino no encontrado</p>
          <Link href="/" className="mt-4 inline-block text-[#4300D2] hover:underline">Volver al inicio</Link>
        </div>
      </div>
    )
  }

  const { selectedHotel } = data

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
            <Link href="/" className="flex items-center gap-1 text-[#4300D2] hover:underline">
              <ArrowLeft className="h-4 w-4" /> Inicio
            </Link>
            <span>/</span>
            <span>Paquetes</span>
            <span>/</span>
            <span className="text-gray-900 font-medium">{data.name}, {data.country}</span>
          </div>
        </div>
      </div>

      {/* ============ TITLE ============ */}
      <div className="bg-white pb-4">
        <div className="mx-auto max-w-7xl px-4 pt-4">
          <h1 className="text-xl font-bold text-gray-900">
            Este es el paquete que elegiste. <span className="text-[#4300D2]">Empieza a vivir tu viaje!</span>
          </h1>
        </div>
      </div>

      {/* ============ SELECTED PACKAGE SUMMARY ============ */}
      <div className="bg-white pb-6">
        <div className="mx-auto max-w-7xl px-4">
          <div className="overflow-hidden rounded-xl border">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_auto_auto]">
              {/* Accommodation */}
              <div className="border-b p-4 lg:border-b-0 lg:border-r">
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                    <Hotel className="h-4 w-4" /> Alojamiento
                  </div>
                  <button className="text-xs text-[#4300D2] hover:underline">Cambiar alojamiento</button>
                </div>
                <div className="flex gap-3">
                  <img src={selectedHotel.image} alt={selectedHotel.name} className="h-20 w-24 rounded-lg object-cover" />
                  <div>
                    <span className="inline-block mb-1 rounded bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700">{selectedHotel.mealPlan}</span>
                    <p className="text-sm font-semibold text-gray-900 line-clamp-1">{selectedHotel.name}</p>
                    <div className="mt-1 flex items-center gap-2">
                      <span className="rounded bg-teal-600 px-1.5 py-0.5 text-xs font-bold text-white">{selectedHotel.rating}</span>
                      <StarIcons count={selectedHotel.stars} />
                    </div>
                    <p className="mt-1 text-xs text-gray-500">5 noches</p>
                    <Link href={`/paquete/${slug}/hotel/${selectedHotel.slug}`} className="text-xs text-[#4300D2] hover:underline">Ver detalle</Link>
                  </div>
                </div>
              </div>

              {/* Flight */}
              <div className="border-b p-4 lg:border-b-0 lg:border-r">
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                    <Plane className="h-4 w-4" /> Vuelo
                  </div>
                  <button className="text-xs text-[#4300D2] hover:underline">Cambiar vuelo</button>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex h-6 w-6 items-center justify-center rounded bg-blue-600">
                      <Plane className="h-3 w-3 text-white" />
                    </div>
                    <div>
                      <span className="font-semibold">LIM</span>
                      <span className="mx-1 text-gray-400">02:15</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-xs text-gray-400">1 escala</span>
                      <div className="h-px w-12 bg-gray-300" />
                    </div>
                    <div>
                      <span className="font-semibold">{data.airport}</span>
                      <span className="mx-1 text-gray-400">08:38</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex h-6 w-6 items-center justify-center rounded bg-blue-600">
                      <Plane className="h-3 w-3 rotate-180 text-white" />
                    </div>
                    <div>
                      <span className="font-semibold">{data.airport}</span>
                      <span className="mx-1 text-gray-400">09:44</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-xs text-gray-400">1 escala</span>
                      <div className="h-px w-12 bg-gray-300" />
                    </div>
                    <div>
                      <span className="font-semibold">LIM</span>
                      <span className="mx-1 text-gray-400">15:40</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additionals */}
              <div className="border-b p-4 lg:border-b-0 lg:border-r">
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                    <Compass className="h-4 w-4" /> Adicionales
                  </div>
                  <button className="text-xs text-[#4300D2] hover:underline">Ver</button>
                </div>
                <div className="space-y-2">
                  {[
                    { icon: Compass, label: "Actividad" },
                    { icon: Bus, label: "Traslado" },
                    { icon: Car, label: "Carro" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <item.icon className="h-4 w-4" />
                        {item.label}
                      </div>
                      <Plus className="h-4 w-4 text-[#4300D2]" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="flex flex-col items-end justify-center p-4">
                <p className="text-xs text-gray-500">Precio final por persona</p>
                <div className="flex items-center gap-1">
                  <Info className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-500">US$</span>
                  <span className="text-3xl font-extrabold text-gray-900">{selectedHotel.pricePerPerson}</span>
                </div>
                <p className="mt-1 text-xs text-gray-500">Final 2 personas US${selectedHotel.pricePerPerson * 2}</p>
                <p className="text-xs text-gray-400">Incluye impuestos, tasas y cargos</p>
                <button className="mt-3 w-full rounded-full bg-red-600 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-red-700">
                  Comprar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============ MAIN CONTENT: SIDEBAR + RESULTS ============ */}
      <div className="mx-auto w-full max-w-7xl px-4 py-6">
        <div className="flex gap-6">
          {/* ---------- LEFT SIDEBAR ---------- */}
          <aside className="hidden w-64 shrink-0 lg:block">
            {/* Map card */}
            <div className="mb-4 overflow-hidden rounded-xl border bg-white">
              <div className="relative h-28 bg-gradient-to-br from-green-100 to-blue-100">
                <MapPin className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 text-[#4300D2]" />
              </div>
              <div className="p-3 text-center">
                <button className="text-sm font-semibold text-[#4300D2] hover:underline">Explorar mapa &gt;</button>
              </div>
            </div>

            {/* Filters */}
            {sidebarFilters.map((filter) => (
              <div key={filter} className="border-b bg-white px-4 py-3 first:rounded-t-xl last:rounded-b-xl last:border-b-0">
                <button
                  onClick={() => setOpenFilters((prev) => ({ ...prev, [filter]: !prev[filter] }))}
                  className="flex w-full items-center justify-between text-sm font-semibold text-gray-800"
                >
                  {filter}
                  {openFilters[filter] ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </button>
                {openFilters[filter] && filter === "Condiciones de tu reserva" && (
                  <div className="mt-3 space-y-3">
                    <label className="flex items-center justify-between text-sm text-gray-600">
                      <span className="flex items-center gap-2">
                        <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-[#4300D2]" />
                        Reserva flexible
                      </span>
                      <span className="text-gray-400">175</span>
                    </label>
                    <label className="flex items-center justify-between text-sm text-gray-600">
                      <span className="flex items-center gap-2">
                        <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-[#4300D2]" />
                        Pagar en cuotas
                      </span>
                      <span className="text-gray-400">820</span>
                    </label>
                  </div>
                )}
              </div>
            ))}
          </aside>

          {/* ---------- RIGHT: RESULTS ---------- */}
          <div className="flex-1">
            {/* Selected hotel card */}
            <div className="mb-6 overflow-hidden rounded-xl border bg-white shadow-sm">
              <div className="bg-[#2D0B6A] px-4 py-2">
                <p className="text-sm font-semibold text-white">Alojamiento seleccionado</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_auto]">
                {/* Image */}
                <div className="relative h-64 md:h-auto">
                  <img src={selectedHotel.image} alt={selectedHotel.name} className="h-full w-full object-cover" />
                  <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-green-700 backdrop-blur-sm">
                    <Coffee className="h-3.5 w-3.5" />
                    {selectedHotel.mealPlan}
                  </span>
                  <button className="absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-gray-700 hover:bg-white">
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-gray-700 hover:bg-white">
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>

                {/* Details */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900">{selectedHotel.name}</h3>
                  <div className="mt-2 flex items-center gap-2">
                    <RatingBadge rating={selectedHotel.rating} text={selectedHotel.ratingText} reviews={selectedHotel.reviews} />
                    <span className="mx-1">|</span>
                    <StarIcons count={selectedHotel.stars} />
                  </div>
                  <p className="mt-2 flex items-center gap-1 text-sm text-gray-500">
                    <MapPin className="h-3.5 w-3.5 text-[#4300D2]" />
                    {selectedHotel.location}
                  </p>
                  <button className="text-sm text-[#4300D2] hover:underline">Ver en mapa</button>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {selectedHotel.badges.map((b) => (
                      <span key={b} className="rounded-md border px-2.5 py-1 text-xs font-medium text-gray-600">{b}</span>
                    ))}
                  </div>
                  <p className="mt-3 flex items-center gap-1.5 text-sm text-gray-500">
                    <Plane className="h-3.5 w-3.5" />
                    Vuelo con escalas {selectedHotel.flightRoute}
                  </p>
                  <p className="mt-2 text-sm font-medium text-[#4300D2]">Paga en hasta 18 cuotas sin interés</p>
                </div>

                {/* Price */}
                <div className="flex flex-col items-end justify-between border-t p-4 md:border-t-0 md:border-l">
                  <div className="text-right">
                    <p className="text-xs text-gray-500">Vuelo + Alojamiento</p>
                    <p className="text-xs text-gray-500">Precio final por persona</p>
                    <div className="mt-1 flex items-baseline gap-1">
                      <span className="text-sm text-gray-500">US$</span>
                      <span className="text-3xl font-extrabold text-gray-900">{selectedHotel.pricePerPerson}</span>
                      <Info className="h-4 w-4 text-gray-400" />
                    </div>
                    <p className="mt-1 text-sm font-semibold text-gray-700">Final 2 personas US$ {selectedHotel.pricePerPerson * 2}</p>
                    <p className="text-xs text-gray-400">Incluye impuestos, tasas y cargos</p>
                  </div>
                  <Link href={`/paquete/${slug}/hotel/${selectedHotel.slug}`} className="mt-4 rounded-full bg-[#4300D2] px-8 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#3600A8]">
                    Ver detalle
                  </Link>
                </div>
              </div>
            </div>

            {/* Promo banner */}
            {showPromo && (
              <div className="mb-6 flex items-center justify-between rounded-xl border bg-white p-4 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#4300D2]/10 text-[#4300D2]">
                    <Hotel className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Con paquetes te ahorras hasta un 30%</p>
                    <div className="mt-1 flex flex-wrap gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1"><Check className="h-4 w-4 text-gray-500" /> Lo armas a tu gusto</span>
                      <span className="flex items-center gap-1"><Check className="h-4 w-4 text-gray-500" /> Consigues precios más bajos</span>
                      <span className="flex items-center gap-1"><Check className="h-4 w-4 text-gray-500" /> Queda todo listo en una sola compra</span>
                    </div>
                  </div>
                </div>
                <button onClick={() => setShowPromo(false)} className="shrink-0 text-gray-400 hover:text-gray-600">
                  <X className="h-5 w-5" />
                </button>
              </div>
            )}

            {/* ---- OTHER ACCOMMODATIONS SECTION ---- */}
            <h2 className="mb-4 text-xl font-bold text-gray-900">Puedes elegir otro alojamiento</h2>

            {/* Sort / Filter bar */}
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 rounded-lg border bg-white px-3 py-2 text-sm">
                <span className="text-xs font-semibold uppercase text-gray-500">Ordenar por</span>
                <span className="font-medium text-gray-700">Más relevantes</span>
                <ChevronDown className="h-4 w-4 text-gray-400" />
              </div>
              {["Todos", "Hoteles", "Alquileres"].map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${
                    activeFilter === f
                      ? "border-[#4300D2] bg-white text-[#4300D2]"
                      : "bg-white text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {f === "Hoteles" && <Hotel className="mr-1.5 inline h-4 w-4" />}
                  {f === "Alquileres" && <Home className="mr-1.5 inline h-4 w-4" />}
                  {f}
                </button>
              ))}
              <div className="ml-auto">
                <button className="rounded-lg border bg-white px-4 py-2 text-sm font-semibold text-[#4300D2] transition-colors hover:bg-gray-50">
                  Explorar mapa &gt;
                </button>
              </div>
            </div>

            {/* Hotel cards list */}
            <div className="space-y-4">
              {data.hotels.map((hotel) => (
                <div key={hotel.slug} className="overflow-hidden rounded-xl border bg-white shadow-sm transition-shadow hover:shadow-md">
                  <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_auto]">
                    {/* Image */}
                    <div className="relative h-56 md:h-auto">
                      <img src={hotel.image} alt={hotel.name} className="h-full w-full object-cover" />
                      <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-green-700 backdrop-blur-sm">
                        <Coffee className="h-3.5 w-3.5" />
                        {hotel.mealPlan}
                      </span>
                      <button className="absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-gray-700 hover:bg-white">
                        <ChevronLeft className="h-5 w-5" />
                      </button>
                      <button className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-gray-700 hover:bg-white">
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </div>

                    {/* Details */}
                    <div className="p-4">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <h3 className="text-lg font-bold text-gray-900">{hotel.name}</h3>
                      </div>
                      <div className="mt-2 flex items-center gap-2">
                        <RatingBadge rating={hotel.rating} text={hotel.ratingText} reviews={hotel.reviews} />
                        <span className="mx-1">|</span>
                        <StarIcons count={hotel.stars} />
                      </div>
                      <p className="mt-2 flex items-center gap-1 text-sm text-gray-500">
                        <MapPin className="h-3.5 w-3.5 text-[#4300D2]" />
                        {hotel.location}
                      </p>
                      <button className="text-sm text-[#4300D2] hover:underline">Ver en mapa</button>

                      {hotel.badges.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {hotel.badges.map((b) => (
                            <span key={b} className="rounded-md bg-yellow-50 border border-yellow-300 px-2.5 py-1 text-xs font-semibold text-yellow-700">{b}</span>
                          ))}
                        </div>
                      )}

                      <p className="mt-3 flex items-center gap-1.5 text-sm text-gray-500">
                        <Plane className="h-3.5 w-3.5" />
                        Vuelo con escalas LIM ⇄ {data.airport}
                      </p>

                      {hotel.hasDiscount && (
                        <p className="mt-2 flex items-center gap-1 text-sm text-green-600">
                          <Check className="h-4 w-4" />
                          US$ 80 de descuento extra con tarjetas seleccionadas
                        </p>
                      )}

                      <p className="mt-2 text-sm font-medium text-[#4300D2]">Paga en hasta 18 cuotas sin interés</p>
                    </div>

                    {/* Price */}
                    <div className="flex flex-col items-end justify-between border-t p-4 md:border-t-0 md:border-l">
                      <div className="text-right">
                        <p className="text-xs text-gray-500">Vuelo + Alojamiento</p>
                        <p className="text-xs text-gray-500">Precio final por persona</p>
                        <div className="mt-1 flex items-baseline gap-1">
                          <span className="text-sm text-gray-500">US$</span>
                          <span className="text-3xl font-extrabold text-gray-900">{hotel.pricePerPerson}</span>
                          <Info className="h-4 w-4 text-gray-400" />
                        </div>
                        <p className="mt-1 text-sm font-semibold text-gray-700">
                          Final 2 personas US$ {(hotel.pricePerPerson * 2).toLocaleString()}
                        </p>
                        <p className="text-xs text-gray-400">Incluye impuestos, tasas y cargos</p>
                      </div>
                      <Link href={`/paquete/${slug}/hotel/${hotel.slug}`} className="mt-4 w-full rounded-full bg-[#4300D2] px-8 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-[#3600A8]">
                        Ver detalle
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ---- CONVENIENT DATES SECTION ---- */}
            <div className="mt-8 rounded-xl border bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-50 text-[#4300D2]">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Paquetes más convenientes!</h3>
                  <p className="text-sm text-gray-500">Cercanos a tu fecha, estos paquetes te pueden resultar más favorables.</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                {data.convenientDates.map((d, i) => (
                  <button
                    key={i}
                    className="rounded-xl border-2 border-gray-200 p-3 text-center transition-colors hover:border-[#4300D2] hover:bg-purple-50"
                  >
                    <p className="text-xs font-semibold text-gray-500">{d.nights} noches</p>
                    <div className="mt-1 flex items-center justify-center gap-2 text-sm">
                      <span className="text-gray-600">{d.checkIn}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm">
                      <span className="text-gray-600">{d.checkOut}</span>
                    </div>
                    <p className="mt-2 text-lg font-extrabold text-gray-900">us${d.price}</p>
                  </button>
                ))}
              </div>
            </div>
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
