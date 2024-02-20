import { z } from 'zod';

// Definir el esquema
export const registerUserSchema = z.object({
  name: z.string().min(1, { message: 'El nombre es requerido' }),
  email: z.string().email({ message: 'El correo electrónico no es válido' }),
  password: z.string().min(5, { message: 'La constraseña debe tenner minimo 5 caracteres' }),
  phone: z.string().min(8, { message: 'El telefono debe tener al menos 8' }).optional(),
  confirmPassword: z.string().min(5, { message: 'La constraseña debe tenner minimo 5 caracteres' })
}).refine(data => data.password === data.confirmPassword, {
  message: "Las contraseñas deben coincidir",
  path: ['confirmPassword'] // Esto especifica que el error se asocia con el campo 'confirmPassword'
});
