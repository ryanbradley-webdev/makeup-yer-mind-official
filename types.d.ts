type Blog = {
    id: string,
    title: string,
    slug: string,
    description: string,
    image: string,
    topics: string[],
    createdAt: TimeStamp,
    updatedAt?: TimeStamp,
    content: string,
    type: string,
    comments: string[],
    likes: number
}

type Look = {
    id: string,
    title: string,
    slug: string,
    description: string,
    image1: string,
    image2: string,
    tags: string[],
    colors: Color[],
    createdAt: TimeStamp,
    updatedAt?: TimeStamp,
    content: string,
    comments: string[],
    likes: number
}

type Color = {
    brand: string,
    category: string,
    link: string,
    image: string,
    name: string
}

type TimeStamp = {
    seconds: number,
    nanoseconds: number
}