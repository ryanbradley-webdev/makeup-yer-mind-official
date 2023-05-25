type Blog = {
    id: string,
    title: string,
    slug: string,
    description: string,
    image: string,
    topics: string[],
    createdAt: number,
    updatedAt: number | null,
    content: string,
    type: string
}