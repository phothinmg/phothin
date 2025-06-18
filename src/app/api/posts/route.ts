import { type PaginatePosts, paginatePosts } from "@/lib";
const pages: PaginatePosts = paginatePosts();
export const GET = async (_req: Request) =>
  new Response(JSON.stringify(pages), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
