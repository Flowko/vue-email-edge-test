import { useCompiler } from "#vue-email"

export default defineEventHandler(async (event) => {
  return await useCompiler("Template.vue", {})
})
