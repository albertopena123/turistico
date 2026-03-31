"use client"

import { useState } from "react"
import Link from "next/link"
import { MainHeader } from "@/components/main-header"
import {
  Bed,
  CalendarDays,
  Users,
  MapPin,
  Phone,
  ChevronRight,
  Shield,
  MessageSquare,
  Globe,
  Headphones,
  Heart,
  Star,
} from "lucide-react"

const uniqueHotels = [
  {
    slug: "palacio-nazarenas",
    name: "Palacio Nazarenas, A Belmond Hotel, Cusco",
    location: "Cuzco, Perú",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
    rating: 9.8,
    ratingLabel: "Excepcional",
    reviews: 41,
    stars: 5,
    price: "S/ 4.336",
    badge: true,
  },
  {
    slug: "monasterio-belmond",
    name: "Monasterio, A Belmond Hotel, Cusco",
    location: "Cuzco, Perú",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=300&fit=crop",
    rating: 9.8,
    ratingLabel: "Excepcional",
    reviews: 243,
    stars: 5,
    price: "S/ 2.385",
    badge: true,
  },
  {
    slug: "hotel-la-cupula",
    name: "Hotel La Cupula",
    location: "Copacabana, Bolivia",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop",
    rating: 9.1,
    ratingLabel: "Fantástico",
    reviews: 787,
    stars: 0,
    price: "S/ 226",
    badge: true,
  },
  {
    slug: "hotel-dann-monasterio",
    name: "Hotel Dann Monasterio",
    location: "Popayán, Colombia",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop",
    rating: 9.0,
    ratingLabel: "Fantástico",
    reviews: 887,
    stars: 5,
    price: "S/ 274",
    oldPrice: "S/ 421",
    badge: false,
  },
]

const accommodationTypes = [
  {
    name: "Hoteles",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
  },
  {
    name: "Apartamentos",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop",
  },
  {
    name: "Resorts",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=300&fit=crop",
  },
  {
    name: "Villas",
    image: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=400&h=300&fit=crop",
  },
]

const travelStyles = [
  { label: "Expediciones Históricas" },
  { label: "Viajes de Fotografía" },
  { label: "Aventura & Exploración" },
  { label: "Arte y Música" },
  { label: "Festivales y Eventos" },
  { label: "Comida y Cocina" },
]

const travelDestinations = [
  { name: "Cuzco", distance: "A 318 km", image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=200&h=200&fit=crop" },
  { name: "Puno", distance: "A 372 km", image: "https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=200&h=200&fit=crop" },
  { name: "Arequipa", distance: "A 493 km", image: "https://images.unsplash.com/photo-1533050487297-09b450131914?w=200&h=200&fit=crop" },
  { name: "Ayacucho", distance: "A 549 km", image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=200&h=200&fit=crop" },
  { name: "Huancayo", distance: "A 656 km", image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=200&h=200&fit=crop" },
  { name: "Nazca", distance: "A 669 km", image: "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=200&h=200&fit=crop" },
]

const trendingDestinations = [
  {
    name: "Cusco",
    country: "Perú",
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=400&h=300&fit=crop",
    properties: "1,245 alojamientos",
  },
  {
    name: "Cancún",
    country: "México",
    image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=400&h=300&fit=crop",
    properties: "2,180 alojamientos",
  },
  {
    name: "Cartagena",
    country: "Colombia",
    image: "https://images.unsplash.com/photo-1533050487297-09b450131914?w=400&h=300&fit=crop",
    properties: "890 alojamientos",
  },
  {
    name: "Río de Janeiro",
    country: "Brasil",
    image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=400&h=300&fit=crop",
    properties: "3,420 alojamientos",
  },
  {
    name: "Buenos Aires",
    country: "Argentina",
    image: "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=400&h=300&fit=crop",
    properties: "2,750 alojamientos",
  },
]

export default function HomePage() {
  const [activeStyle, setActiveStyle] = useState("Expediciones Históricas")

  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      <MainHeader />

      {/* ============ HERO + SEARCH ============ */}
      <section className="bg-[#003B00] pb-12 pt-8">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="text-3xl font-extrabold text-white md:text-5xl">
            Encuentra tu próxima estancia
          </h1>
          <p className="mt-2 text-lg text-white/80">
            Busca ofertas en hoteles, casas y mucho más...
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <div className="relative z-10 mx-auto -mt-7 w-full max-w-7xl px-4">
        <div className="flex flex-col rounded-xl bg-[#FFB700] p-1 shadow-xl md:flex-row md:items-stretch">
          <div className="flex flex-1 flex-col rounded-lg bg-white md:flex-row md:items-stretch md:divide-x md:divide-gray-300">
            <div className="flex flex-1 items-center gap-3 px-4 py-3.5 cursor-pointer hover:bg-gray-50 transition-colors md:rounded-l-lg">
              <Bed className="h-5 w-5 shrink-0 text-gray-400" />
              <p className="text-sm text-gray-800">¿Adónde vas?</p>
            </div>
            <div className="flex flex-1 items-center gap-3 border-t border-gray-300 px-4 py-3.5 cursor-pointer hover:bg-gray-50 transition-colors md:border-t-0">
              <CalendarDays className="h-5 w-5 shrink-0 text-gray-400" />
              <p className="text-sm text-gray-500">Fecha de entrada — Fecha de salida</p>
            </div>
            <div className="flex flex-1 items-center gap-3 border-t border-gray-300 px-4 py-3.5 cursor-pointer hover:bg-gray-50 transition-colors md:border-t-0 md:rounded-r-lg">
              <Users className="h-5 w-5 shrink-0 text-gray-400" />
              <p className="text-sm text-gray-800">2 adultos · 0 niños · 1 habitación</p>
              <ChevronRight className="h-4 w-4 shrink-0 text-gray-400 rotate-90" />
            </div>
          </div>
          <button className="mt-1 flex items-center justify-center rounded-lg bg-[#005C00] px-8 py-3.5 font-bold text-white transition-all hover:bg-[#004A00] active:scale-[0.98] md:mt-0 md:ml-1">
            Buscar
          </button>
        </div>
      </div>

      {/* ============ MAIN CONTENT ============ */}
      <main id="main-content" className="mx-auto w-full max-w-7xl px-4">

        {/* ---- WHY US ---- */}
        <section className="pt-14 pb-10">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">¿Por qué TuristicoYa?</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Shield, title: "Reserva ahora, paga en el alojamiento", desc: "Cancelación GRATIS en la mayoría de las habitaciones" },
              { icon: MessageSquare, title: "Más de 300 millones de comentarios", desc: "Consigue información fiable de gente que viaja como tú" },
              { icon: Globe, title: "Más de dos millones de alojamientos", desc: "Hoteles, hostales, apartamentos y mucho más..." },
              { icon: Headphones, title: "Atención al cliente de confianza, 24/7", desc: "Te ayudamos cuando lo necesites" },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-[#003B00]/10">
                  <item.icon className="h-6 w-6 text-[#003B00]" />
                </div>
                <p className="font-bold text-gray-900">{item.title}</p>
                <p className="mt-1 text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ---- UNIQUE STAYS ---- */}
        <section className="pb-10">
          <h2 className="text-2xl font-bold text-gray-900">Quédate en un alojamiento único</h2>
          <p className="mb-6 text-gray-500">Castillos, villas, barcos, iglús... Tenemos de todo</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {uniqueHotels.map((hotel) => (
              <Link key={hotel.slug} href={`/alojamiento/${hotel.slug}`} className="group rounded-xl border bg-white shadow-sm transition-shadow hover:shadow-md overflow-hidden">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <button
                    onClick={(e) => e.preventDefault()}
                    className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-gray-600 transition-colors hover:bg-white hover:text-red-500"
                  >
                    <Heart className="h-4 w-4" />
                  </button>
                </div>

                {/* Info */}
                <div className="p-3">
                  {/* Type + Stars */}
                  <div className="flex items-center gap-1.5 text-xs">
                    <span className="font-medium text-gray-700">Hotel</span>
                    {hotel.stars > 0 && (
                      <div className="flex items-center">
                        {Array.from({ length: hotel.stars }).map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-[#FFB700] text-[#FFB700]" />
                        ))}
                      </div>
                    )}
                    {hotel.badge && (
                      <span className="text-[#FFB700]">👍</span>
                    )}
                  </div>

                  {/* Name */}
                  <p className="mt-1 text-sm font-bold leading-tight text-[#003B00] group-hover:underline">
                    {hotel.name}
                  </p>
                  <p className="mt-0.5 text-xs text-gray-500">{hotel.location}</p>

                  {/* Rating */}
                  <div className="mt-2 flex items-center gap-1.5">
                    <span className="flex h-7 min-w-[28px] items-center justify-center rounded-tl-md rounded-tr-md rounded-br-md bg-[#003B00] px-1.5 text-xs font-bold text-white">
                      {hotel.rating}
                    </span>
                    <div className="text-xs">
                      <span className="font-medium text-gray-900">{hotel.ratingLabel}</span>
                      <br />
                      <span className="text-gray-500">{hotel.reviews} comentarios</span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mt-2 flex items-baseline justify-end gap-1.5">
                    {hotel.oldPrice && (
                      <span className="text-xs text-red-500 line-through">{hotel.oldPrice}</span>
                    )}
                    <span className="text-xs text-gray-500">Desde</span>
                    <span className="text-sm font-bold text-gray-900">{hotel.price}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ---- BROWSE BY TYPE ---- */}
        <section className="pb-10">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">Busca por tipo de alojamiento</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {accommodationTypes.map((type) => (
              <Link key={type.name} href="#" className="group">
                <div className="h-52 overflow-hidden rounded-xl">
                  <img
                    src={type.image}
                    alt={type.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <p className="mt-2 text-lg font-bold text-gray-900">{type.name}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* ---- TRAVEL PLANNER ---- */}
        <section className="pb-10">
          <h2 className="text-2xl font-bold text-gray-900">Planificador de viajes rápido y sencillo</h2>
          <p className="mb-4 text-gray-500">Elige un estilo y descubre los principales destinos en Perú</p>

          {/* Style tabs */}
          <div className="mb-6 flex flex-wrap gap-2">
            {travelStyles.map((style) => (
              <button
                key={style.label}
                onClick={() => setActiveStyle(style.label)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeStyle === style.label
                    ? "border-2 border-[#003B00] bg-white text-[#003B00]"
                    : "border border-gray-300 bg-white text-gray-700 hover:border-gray-400"
                }`}
              >
                {style.label}
              </button>
            ))}
          </div>

          {/* Destination cards */}
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-6">
            {travelDestinations.map((dest) => (
              <Link key={dest.name} href="#" className="group">
                <div className="aspect-square overflow-hidden rounded-xl">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <p className="mt-2 text-sm font-bold text-gray-900">{dest.name}</p>
                <p className="text-xs text-gray-500">{dest.distance}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* ---- TRENDING DESTINATIONS ---- */}
        <section className="pb-12">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">Destinos de moda</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {trendingDestinations.slice(0, 2).map((dest) => (
              <Link key={dest.name} href="#" className="group relative h-72 overflow-hidden rounded-xl">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-xl font-bold">{dest.name}</p>
                  <p className="text-sm text-white/80">{dest.country} · {dest.properties}</p>
                </div>
              </Link>
            ))}
            <div className="flex flex-col gap-4">
              {trendingDestinations.slice(2).map((dest) => (
                <Link key={dest.name} href="#" className="group relative flex-1 min-h-[88px] overflow-hidden rounded-xl">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 text-white">
                    <p className="text-lg font-bold">{dest.name}</p>
                    <p className="text-xs text-white/80">{dest.country} · {dest.properties}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ============ FOOTER ============ */}
      <footer className="border-t bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <span className="text-lg font-extrabold text-[#003B00]">TuristicoYa</span>
              <p className="mt-2 text-sm text-gray-500">
                Tu plataforma de confianza para encontrar y reservar los mejores alojamientos.
              </p>
            </div>
            <div>
              <h4 className="mb-3 font-semibold text-gray-900">Alojamiento</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-[#003B00] transition-colors">Hoteles</a></li>
                <li><a href="#" className="hover:text-[#003B00] transition-colors">Apartamentos</a></li>
                <li><a href="#" className="hover:text-[#003B00] transition-colors">Resorts</a></li>
                <li><a href="#" className="hover:text-[#003B00] transition-colors">Cabañas</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 font-semibold text-gray-900">Soporte</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-[#003B00] transition-colors">Centro de ayuda</a></li>
                <li><a href="#" className="hover:text-[#003B00] transition-colors">Contacto</a></li>
                <li><a href="#" className="hover:text-[#003B00] transition-colors">Términos y condiciones</a></li>
                <li><a href="#" className="hover:text-[#003B00] transition-colors">Política de privacidad</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 font-semibold text-gray-900">Contáctanos</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  0 800 8 0516
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Lima, Perú
                </li>
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
