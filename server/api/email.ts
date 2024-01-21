import { useCompiler } from '#vue-email';

export default defineEventHandler(async () => {
  const template = await useCompiler('test.vue', {
    props: {
      username: 'John Doe',
    },
  });

  if (!template) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Not Found',
    });
  }

  return template.html;
});
