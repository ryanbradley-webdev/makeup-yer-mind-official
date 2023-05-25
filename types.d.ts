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

type Look = {
    id: string,
    title: string,
    slug: string,
    description: string,
    image1: string,
    image2: string,
    tags: string[],
    colors: string[],
    createdAt: number,
    updatedAt: number | null,
    content: string,
    type: string
}