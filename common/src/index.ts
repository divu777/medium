import z from "zod";

export const signupInputSchema = z.object({
  username: z.string().email(),
  password: z.string().min(6),
  name: z.string().optional(),
});

export type SignupInput = z.infer<typeof signupInputSchema>;

export const signinInputSchema = z.object({
  username: z.string().email(),
  password: z.string().min(6),
});

export type SigninInput = z.infer<typeof signinInputSchema>;

export const createBlogInputSchema = z.object({
  title: z.string(),
  content: z.string(),
});
export type CreateBlogInput = z.infer<typeof createBlogInputSchema>;

export const updateBlogInputSchema = z.object({
  title: z.string(),
  content: z.string(),
  id: z.number(),
});
export type UpdateBlogInput = z.infer<typeof updateBlogInputSchema>;
