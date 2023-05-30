export const getURLPath = () => {
    const { href } = window.location

    if (href.includes('blogs')) {
        return 'blogs'
    } else if (href.includes('looks')) {
        return 'looks'
    } else {
        return null
    }
}