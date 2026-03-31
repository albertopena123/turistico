"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Phone,
  Home,
  Plane,
  Package,
  Tag,
  Compass,
  Map,
  Car,
  Castle,
  ShieldCheck,
  Bus,
  ChevronLeft,
  ChevronRight,
  Search,
  ArrowLeftRight,
  CalendarDays,
  Users,
  CreditCard,
  Gift,
  Headphones,
  MapPin,
  HelpCircle,
  Star,
  Menu,
  ShoppingCart,
  User,
} from "lucide-react"

const navTabs = [
  { label: "Alojamientos", icon: Home, active: false },
  { label: "Vuelos", icon: Plane, active: false },
  { label: "Paquetes", icon: Package, active: true },
  { label: "Ofertas", icon: Tag, active: false },
  { label: "Actividades", icon: Compass, active: false },
  { label: "Circuitos", icon: Map, active: false },
  { label: "Autos", icon: Car, active: false },
  { label: "Disney", icon: Castle, active: false },
  { label: "Asistencias", icon: ShieldCheck, active: false },
  { label: "Traslados", icon: Bus, active: false },
]

const destinations = [
  {
    name: "Cancún",
    slug: "cancun",
    country: "México",
    image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=400&h=300&fit=crop",
    price: "USD 450",
  },
  {
    name: "Cartagena",
    slug: "cartagena",
    country: "Colombia",
    image: "https://images.unsplash.com/photo-1533050487297-09b450131914?w=400&h=300&fit=crop",
    price: "USD 380",
  },
  {
    name: "Cusco",
    slug: "cusco",
    country: "Perú",
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=400&h=300&fit=crop",
    price: "USD 220",
  },
  {
    name: "Río de Janeiro",
    slug: "rio-de-janeiro",
    country: "Brasil",
    image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=400&h=300&fit=crop",
    price: "USD 520",
  },
]

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("Paquetes")

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      {/* ============ TOP BAR ============ */}
      <header className="bg-[#4300D2] text-white">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20">
              <Plane className="h-4 w-4" />
            </div>
            <span className="text-xl font-bold tracking-tight">viajaYa</span>
          </Link>

          {/* Center links */}
          <nav className="hidden items-center gap-6 text-sm lg:flex">
            <a href="#" className="flex items-center gap-1.5 text-white/90 hover:text-white transition-colors">
              <Phone className="h-3.5 w-3.5" />
              Para ventas 0 800 7 8484
            </a>
            <a href="#" className="flex items-center gap-1.5 text-white/90 hover:text-white transition-colors">
              <Home className="h-3.5 w-3.5" />
              Publica tu alojamiento
            </a>
            <a href="#" className="flex items-center gap-1.5 text-white/90 hover:text-white transition-colors">
              <MapPin className="h-3.5 w-3.5" />
              Mis viajes
            </a>
            <a href="#" className="flex items-center gap-1.5 text-white/90 hover:text-white transition-colors">
              <HelpCircle className="h-3.5 w-3.5" />
              Ayuda
            </a>
            <a href="#" className="flex items-center gap-1.5 text-white/90 hover:text-white transition-colors">
              <Star className="h-3.5 w-3.5" />
              Beneficios Pasaporte
            </a>
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-3">
            <Link href="/login" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors">
              <User className="h-4 w-4" />
            </Link>
            <button className="hidden sm:flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors">
              <Menu className="h-4 w-4" />
            </button>
            <div className="hidden sm:block h-6 w-px bg-white/20" />
            <button className="hidden sm:flex items-center gap-1.5 text-sm text-white/90 hover:text-white transition-colors">
              <ShoppingCart className="h-4 w-4" />
              Carrito
            </button>
          </div>
        </div>
      </header>

      {/* ============ NAV TABS ============ */}
      <nav className="border-b bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center gap-1 overflow-x-auto py-2 scrollbar-hide">
            {navTabs.map((tab) => (
              <button
                key={tab.label}
                onClick={() => setActiveTab(tab.label)}
                className={`flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeTab === tab.label
                    ? "bg-[#4300D2]/10 text-[#4300D2] ring-1 ring-[#4300D2]/30"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <tab.icon className="h-4 w-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* ============ SEARCH SECTION ============ */}
      <section className="bg-white pb-6 pt-4 shadow-sm">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-4 text-lg font-bold text-gray-900">Paquetes turísticos</h2>
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
            {/* Origin / Destination */}
            <div className="flex flex-1 items-center gap-0 rounded-xl border bg-white">
              <div className="flex flex-1 items-center gap-3 px-4 py-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#4300D2]">
                  <div className="h-2 w-2 rounded-full bg-[#4300D2]" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Origen</p>
                  <p className="text-sm font-medium text-gray-700">Lima, Perú</p>
                </div>
              </div>
              <button className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border bg-white text-[#4300D2] hover:bg-gray-50 transition-colors">
                <ArrowLeftRight className="h-4 w-4" />
              </button>
              <div className="flex flex-1 items-center gap-3 px-4 py-3">
                <MapPin className="h-4 w-4 text-gray-400" />
                <div>
                  <p className="text-xs text-gray-400">Destino</p>
                  <p className="text-sm text-gray-400">¿A dónde viajas?</p>
                </div>
              </div>
            </div>

            {/* Dates */}
            <div className="flex flex-1 items-center gap-0 rounded-xl border bg-white lg:max-w-xs">
              <div className="flex flex-1 items-center gap-3 border-r px-4 py-3">
                <CalendarDays className="h-4 w-4 text-gray-400" />
                <div>
                  <p className="text-xs text-gray-400">Entrada</p>
                  <p className="text-sm text-gray-400">Seleccionar</p>
                </div>
              </div>
              <div className="flex flex-1 items-center gap-3 px-4 py-3">
                <CalendarDays className="h-4 w-4 text-gray-400" />
                <div>
                  <p className="text-xs text-gray-400">Salida</p>
                  <p className="text-sm text-gray-400">Seleccionar</p>
                </div>
              </div>
            </div>

            {/* Passengers */}
            <div className="flex items-center gap-3 rounded-xl border bg-white px-4 py-3 lg:max-w-[220px]">
              <Users className="h-4 w-4 text-gray-400" />
              <div>
                <p className="text-xs text-gray-400">Pasajeros y habitaciones</p>
                <p className="text-sm font-medium text-gray-700">2 personas, 1 habitación</p>
              </div>
            </div>

            {/* Search button */}
            <button className="flex items-center justify-center gap-2 rounded-xl bg-red-600 px-8 py-3 font-semibold text-white shadow-lg transition-all hover:bg-red-700 hover:shadow-xl active:scale-[0.98]">
              <Search className="h-5 w-5" />
              Buscar
            </button>
          </div>
        </div>
      </section>

      {/* ============ HERO BANNER / CAROUSEL ============ */}
      <section className="mx-auto w-full max-w-7xl px-4 py-8">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#4300D2] via-[#5B21B6] to-[#7C3AED] shadow-xl">
          <div className="grid min-h-[320px] items-center lg:grid-cols-2">
            {/* Image side */}
            <div className="relative hidden h-full lg:block">
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700&h=400&fit=crop"
                alt="Playa tropical"
                className="h-full w-full object-cover"
                style={{ clipPath: "ellipse(90% 100% at 30% 50%)" }}
              />
            </div>

            {/* Text side */}
            <div className="flex flex-col items-center justify-center px-8 py-12 text-center text-white lg:items-start lg:text-left">
              <p className="text-xl font-semibold lg:text-2xl">Todos los productos</p>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-lg">USD</span>
                <span className="text-7xl font-extrabold leading-none lg:text-8xl">80</span>
                <span className="text-lg font-semibold">DCTO.<br/>ADICIONAL</span>
              </div>
              <button className="mt-6 rounded-full border-2 border-white bg-transparent px-8 py-2.5 font-semibold text-white transition-colors hover:bg-white hover:text-[#4300D2]">
                Ver ofertas
              </button>
            </div>
          </div>

          {/* Carousel arrows */}
          <button className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-white/30">
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-white/30">
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-white" />
            <div className="h-2.5 w-2.5 rounded-full bg-white/40" />
            <div className="h-2.5 w-2.5 rounded-full bg-white/40" />
          </div>
        </div>
      </section>

      {/* ============ THREE FEATURE CARDS ============ */}
      <section className="mx-auto w-full max-w-7xl px-4 pb-8">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="flex items-center gap-4 rounded-xl border bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#4300D2]/10 text-[#4300D2]">
              <CreditCard className="h-6 w-6" />
            </div>
            <div>
              <p className="font-bold text-gray-900">Promos y medios de pago</p>
              <p className="mt-0.5 text-sm text-gray-500">
                Cuotas con tarjetas, promociones bancarias y mucho más
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-xl border bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#4300D2]/10 text-[#4300D2]">
              <Gift className="h-6 w-6" />
            </div>
            <div>
              <p className="font-bold text-gray-900">Beneficios y cupones</p>
              <p className="mt-0.5 text-sm text-gray-500">
                Acumula puntos Pasaporte y aprovecha todos los cupones
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-xl border bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#4300D2]/10 text-[#4300D2]">
              <Headphones className="h-6 w-6" />
            </div>
            <div>
              <p className="font-bold text-gray-900">Mi agente de viajes</p>
              <p className="mt-0.5 text-sm text-gray-500">
                Compra llamando al <strong>0 800 8 0516</strong> o en nuestros canales
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ POPULAR DESTINATIONS ============ */}
      <section className="mx-auto w-full max-w-7xl px-4 pb-12">
        <h2 className="mb-6 text-2xl font-bold text-gray-900">
          Paquetes turísticos a destinos populares con descuentos
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((dest) => (
            <Link
              key={dest.name}
              href={`/paquete/${dest.slug}`}
              className="group overflow-hidden rounded-xl border bg-white shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-3 left-3 text-white">
                  <p className="text-lg font-bold">{dest.name}</p>
                  <p className="text-sm text-white/80">{dest.country}</p>
                </div>
              </div>
              <div className="px-4 py-3">
                <p className="text-xs text-gray-500">Paquetes desde</p>
                <p className="text-lg font-bold text-[#4300D2]">{dest.price}</p>
                <p className="text-xs text-gray-400">por persona</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ============ SECOND PROMO BANNER ============ */}
      <section className="mx-auto w-full max-w-7xl px-4 pb-12">
        <div className="overflow-hidden rounded-2xl bg-gradient-to-r from-[#1E0A3C] to-[#4300D2] p-8 lg:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div className="text-white">
              <p className="text-sm font-semibold uppercase tracking-widest text-purple-300">
                Ofertas exclusivas
              </p>
              <h3 className="mt-2 text-3xl font-extrabold lg:text-4xl">
                Escapadas de fin de semana
              </h3>
              <p className="mt-3 max-w-md text-base text-purple-200">
                Descubre paquetes con descuentos especiales para los mejores
                destinos. Reserva ahora y ahorra hasta un 40%.
              </p>
              <button className="mt-6 rounded-full bg-red-600 px-8 py-3 font-semibold text-white shadow-lg transition-all hover:bg-red-700 hover:shadow-xl active:scale-[0.98]">
                Ver todas las ofertas
              </button>
            </div>
            <div className="hidden justify-center lg:flex">
              <img
                src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=500&h=300&fit=crop"
                alt="Viaje"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="border-t bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#4300D2] text-white">
                  <Plane className="h-4 w-4" />
                </div>
                <span className="text-lg font-bold text-[#4300D2]">viajaYa</span>
              </div>
              <p className="text-sm text-gray-500">
                Tu plataforma de confianza para planificar y reservar los mejores viajes.
              </p>
            </div>
            <div>
              <h4 className="mb-3 font-semibold text-gray-900">Productos</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-[#4300D2] transition-colors">Vuelos</a></li>
                <li><a href="#" className="hover:text-[#4300D2] transition-colors">Hoteles</a></li>
                <li><a href="#" className="hover:text-[#4300D2] transition-colors">Paquetes</a></li>
                <li><a href="#" className="hover:text-[#4300D2] transition-colors">Actividades</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 font-semibold text-gray-900">Soporte</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-[#4300D2] transition-colors">Centro de ayuda</a></li>
                <li><a href="#" className="hover:text-[#4300D2] transition-colors">Contacto</a></li>
                <li><a href="#" className="hover:text-[#4300D2] transition-colors">Términos y condiciones</a></li>
                <li><a href="#" className="hover:text-[#4300D2] transition-colors">Política de privacidad</a></li>
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
            &copy; 2026 viajaYa. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}
