type Blog = {
    id: string,
    title: string,
    slug: string,
    description: string,
    image: string,
    topics: string[],
    createdAt: FieldValue,
    updatedAt?: FieldValue,
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
    createdAt: FieldValue,
    updatedAt?: FieldValue,
    content: string
}