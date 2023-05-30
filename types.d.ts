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
    likes: number,
    views: number,
    docType: 'blog'
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
    likes: number,
    views: number,
    docType: 'look'
}

type Promo = {
    slug: string,
    id: string,
    image: string,
    title: string,
    description: string,
    link: string,
    active: boolean,
    docType: 'promotion'
}

type UserComment = {
    comment: string,
    createdAt: FieldValue,
    articleId: string,
    docType: 'comment'
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