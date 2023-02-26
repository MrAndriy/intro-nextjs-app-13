export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const getAllPosts = async () => {
  await delay(3000);
  return new Array(10).fill(1).map((_, i) => ({
    id: i,
    title: `This is post-${i}`,
    slug: `This-is-post-${i}`,
    body: `blahhhhh bla bla`,
  }));
};
