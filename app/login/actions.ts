"use server"

import { redirect } from "next/navigation"
import { db } from "@/shared/lib/db"
import { verifyPassword } from "@/features/auth/lib/password"
import { createSession } from "@/features/auth/lib/session"

export async function loginAction(
  _prevState: { error: string } | null,
  formData: FormData
) {
  const email = formData.get("email") as string
  const password = formData.get("password") as string

  if (!email || !password) {
    return { error: "Todos los campos son obligatorios" }
  }

  const user = await db.user.findUnique({
    where: { email },
    include: {
      role: {
        select: { id: true, slug: true },
      },
    },
  })

  if (!user || user.status !== "ACTIVE") {
    return { error: "Credenciales inválidas" }
  }

  const valid = await verifyPassword(password, user.password)
  if (!valid) {
    return { error: "Credenciales inválidas" }
  }

  await db.user.update({
    where: { id: user.id },
    data: { lastLoginAt: new Date() },
  })

  await createSession({
    userId: user.id,
    roleId: user.role.id,
    roleSlug: user.role.slug,
    email: user.email,
    firstName: user.firstName,
    paternalSurname: user.paternalSurname,
    maternalSurname: user.maternalSurname,
  })

  redirect("/admin")
}
