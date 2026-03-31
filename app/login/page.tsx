"use client"

import { useActionState, useState } from "react"
import Link from "next/link"
import { motion } from "motion/react"
import {
  Plane,
  Eye,
  EyeOff,
  ArrowLeft,
  Lock,
  Mail,
  AlertCircle,
  MapPin,
  Shield,
} from "lucide-react"
import { loginAction } from "./actions"

const ease = [0.22, 1, 0.36, 1] as const

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [state, formAction, isPending] = useActionState(loginAction, null)

  return (
    <div className="relative flex min-h-screen">
      {/* Left panel — branding */}
      <div className="relative hidden w-1/2 overflow-hidden lg:flex lg:flex-col lg:justify-between">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=900&fit=crop"
            alt="Playa tropical"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#4300D2]/90 via-[#4300D2]/70 to-[#7C3AED]/80" />
        </div>

        <div className="relative z-10 flex flex-1 flex-col justify-between p-12">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease }}
          >
            <Link href="/" className="group flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-white backdrop-blur-sm transition-transform duration-200 group-hover:scale-105">
                <Plane className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold text-white">viajaYa</span>
            </Link>
          </motion.div>

          {/* Center content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
            className="space-y-6"
          >
            <div className="flex items-center gap-2">
              <div className="h-px flex-1 bg-white/20" />
              <MapPin className="h-5 w-5 text-white/60" />
              <div className="h-px flex-1 bg-white/20" />
            </div>
            <h2 className="text-center text-3xl font-extrabold leading-tight text-white xl:text-4xl">
              Tu próxima aventura<br />comienza aquí
            </h2>
            <p className="mx-auto max-w-sm text-center text-sm leading-relaxed text-white/60">
              Accede a tu cuenta para gestionar reservas, ver ofertas exclusivas y planificar tus próximos viajes.
            </p>

            {/* Trust badges */}
            <div className="flex items-center justify-center gap-6 pt-4">
              {[
                { icon: Shield, text: "Pago seguro" },
                { icon: Plane, text: "Mejores precios" },
                { icon: MapPin, text: "+500 destinos" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-white/70">
                  <item.icon className="h-4 w-4" />
                  <span className="text-xs font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Footer */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xs text-white/40"
          >
            &copy; 2026 viajaYa. Todos los derechos reservados.
          </motion.p>
        </div>
      </div>

      {/* Right panel — login form */}
      <div className="relative flex w-full flex-col overflow-hidden bg-gray-50 lg:w-1/2">
        {/* Subtle background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/4 right-0 h-[400px] w-[400px] rounded-full bg-[#4300D2]/5 blur-3xl" />
          <div className="absolute -bottom-1/4 left-0 h-[300px] w-[300px] rounded-full bg-[#7C3AED]/5 blur-3xl" />
        </div>

        <div className="relative flex items-center justify-between p-6">
          <Link
            href="/"
            className="group flex items-center gap-2 text-sm text-gray-500 transition-colors duration-200 hover:text-gray-900"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
            Volver al inicio
          </Link>
        </div>

        <div className="relative flex flex-1 items-center justify-center px-6 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease }}
            className="w-full max-w-sm"
          >
            {/* Mobile logo */}
            <div className="mb-8 flex items-center gap-3 lg:hidden">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#4300D2] text-white">
                <Plane className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold text-gray-900">viajaYa</span>
            </div>

            <div className="mb-8">
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15, ease }}
                className="text-2xl font-bold tracking-tight text-gray-900"
              >
                Iniciar Sesión
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2, ease }}
                className="mt-2 text-sm text-gray-500"
              >
                Ingresa tu correo electrónico y contraseña
              </motion.p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              {state?.error && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-4 flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600"
                >
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  {state.error}
                </motion.div>
              )}

              <form action={formAction} className="space-y-5">
                {/* Email */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.25, ease }}
                  className="space-y-2"
                >
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Correo electrónico
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="tu@correo.com"
                      required
                      autoComplete="email"
                      className="h-11 w-full rounded-xl border border-gray-200 bg-gray-50 pl-10 text-sm text-gray-900 placeholder:text-gray-400 transition-colors focus:border-[#4300D2] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4300D2]/20"
                    />
                  </div>
                </motion.div>

                {/* Password */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3, ease }}
                  className="space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="text-sm font-medium text-gray-700">
                      Contraseña
                    </label>
                    <button
                      type="button"
                      className="text-xs text-[#4300D2] transition-colors hover:text-[#3600A8]"
                    >
                      ¿Olvidaste tu contraseña?
                    </button>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      required
                      autoComplete="current-password"
                      className="h-11 w-full rounded-xl border border-gray-200 bg-gray-50 pl-10 pr-10 text-sm text-gray-900 placeholder:text-gray-400 transition-colors focus:border-[#4300D2] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4300D2]/20"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition-colors hover:text-gray-600"
                      aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </motion.div>

                {/* Submit */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.35, ease }}
                >
                  <button
                    type="submit"
                    disabled={isPending}
                    className="flex h-11 w-full items-center justify-center rounded-xl bg-[#4300D2] font-semibold text-white shadow-lg shadow-[#4300D2]/25 transition-all duration-200 hover:bg-[#3600A8] hover:shadow-xl hover:shadow-[#4300D2]/30 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 disabled:pointer-events-none"
                  >
                    {isPending ? (
                      <motion.div
                        className="h-5 w-5 rounded-full border-2 border-white/30 border-t-white"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                      />
                    ) : (
                      "Ingresar"
                    )}
                  </button>
                </motion.div>
              </form>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.45 }}
              className="mt-6 text-center text-xs text-gray-400"
            >
              ¿Problemas para acceder?{" "}
              <button type="button" className="font-medium text-[#4300D2] transition-colors hover:underline">
                Contactar soporte
              </button>
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
