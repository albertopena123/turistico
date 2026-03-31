"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Bed,
  Plane,
  Car,
  Sparkles,
  TramFront,
  HelpCircle,
  Menu,
  X,
  CircleDollarSign,
} from "lucide-react"

const navTabs = [
  { label: "Alojamiento", icon: Bed, href: "/" },
  { label: "Vuelos", icon: Plane, href: "#" },
  { label: "Alquiler de coches", icon: Car, href: "#" },
  { label: "Atracciones", icon: Sparkles, href: "#" },
  { label: "Taxis aeropuerto", icon: TramFront, href: "#" },
]

export function MainHeader() {
  const [activeTab, setActiveTab] = useState("Alojamiento")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Skip to content — WCAG 2.4.1 */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-[#003B00] focus:font-semibold focus:shadow-lg"
      >
        Ir al contenido principal
      </a>

      {/* ============ TOP BAR ============ */}
      <header className="bg-[#003B00]">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-6">
          {/* Logo */}
          <Link
            href="/"
            className="text-[1.65rem] font-extrabold tracking-tight text-white transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white rounded-sm"
          >
            TuristicoYa
          </Link>

          {/* Right side — desktop */}
          <div className="hidden items-center gap-2 md:flex">
            <button
              aria-label="Cambiar moneda, actual: PEN"
              className="flex items-center gap-1.5 rounded-md px-3 py-2 text-sm text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <CircleDollarSign className="h-4 w-4" aria-hidden="true" />
              PEN
            </button>

            <button
              aria-label="Cambiar idioma/región"
              className="flex h-11 w-11 items-center justify-center rounded-md text-lg transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <span aria-hidden="true">🇵🇪</span>
            </button>

            <button
              aria-label="Centro de ayuda"
              className="flex h-11 w-11 items-center justify-center rounded-md text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <HelpCircle className="h-5 w-5" aria-hidden="true" />
            </button>

            <div className="mx-1 h-5 w-px bg-white/30" aria-hidden="true" />

            <a
              href="#"
              className="rounded-md px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Registra tu alojamiento
            </a>

            <Link
              href="/register"
              className="rounded-md border border-white px-4 py-2 text-sm font-medium text-white transition-all hover:bg-white hover:text-[#003B00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Hazte una cuenta
            </Link>
            <Link
              href="/login"
              className="rounded-md border border-white px-4 py-2 text-sm font-medium text-white transition-all hover:bg-white hover:text-[#003B00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Inicia sesión
            </Link>
          </div>

          {/* Mobile */}
          <div className="flex items-center gap-2 md:hidden">
            <Link
              href="/login"
              className="rounded-md border border-white px-3 py-1.5 text-sm font-medium text-white transition-all hover:bg-white hover:text-[#003B00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Inicia sesión
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
              className="flex h-11 w-11 items-center justify-center rounded-md text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="border-t border-white/30 px-4 pb-4 md:hidden" role="menu">
            <div className="flex flex-col gap-1 pt-3">
              <a href="#" role="menuitem" className="rounded-md px-3 py-3 text-sm text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                Registra tu alojamiento
              </a>
              <Link href="/register" role="menuitem" className="rounded-md px-3 py-3 text-sm text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                Hazte una cuenta
              </Link>
              <div className="my-2 h-px bg-white/30" aria-hidden="true" />
              <div className="flex items-center gap-3 px-3 py-2">
                <span className="text-lg" aria-hidden="true">🇵🇪</span>
                <span className="text-sm text-white">PEN · Español</span>
              </div>
              <a href="#" role="menuitem" className="flex items-center gap-2 rounded-md px-3 py-3 text-sm text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                <HelpCircle className="h-4 w-4" aria-hidden="true" />
                Centro de ayuda
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ============ NAV TABS ============ */}
      <nav className="bg-[#003B00]" aria-label="Categorías de viaje">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-hide" role="tablist">
            {navTabs.map((tab) => {
              const isActive = activeTab === tab.label
              return (
                <button
                  key={tab.label}
                  role="tab"
                  aria-selected={isActive}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setActiveTab(tab.label)}
                  className={`group relative flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium motion-safe:transition-all motion-safe:duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                    isActive
                      ? "border border-white bg-white/20 text-white"
                      : "border border-transparent text-white/80 hover:border-white/40 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <tab.icon className="h-[18px] w-[18px]" aria-hidden="true" />
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>
      </nav>
    </>
  )
}
