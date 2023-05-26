export function convertServerTimestamp(createdAt: TimeStamp, updatedAt: TimeStamp | undefined) {
    const timestamp = updatedAt ? updatedAt.seconds : createdAt.seconds

    const date = new Date(timestamp * 1000).toDateString()

    return (
        <h5>
            <span>
                {updatedAt ? 'Updated: ' : 'Posted: '}
            </span>
            {date}
        </h5>
    )
}