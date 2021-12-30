const config = {
  revalidateStaticProp: process.env.NEXT_REVALIDATE_STATIC_PROP
    ? Number(process.env.NEXT_REVALIDATE_STATIC_PROP)
    : 1,
  limitStaticPathPageBuilded: process.env.NEXT_LIMIT_STATIC_PATH_PAGE_BUILDED
    ? Number(process.env.NEXT_LIMIT_STATIC_PATH_PAGE_BUILDED)
    : 100,
};

export default config;
