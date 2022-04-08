export async function fetchRequest () {
    const response = await fetch(`https://api.itbook.store/1.0/search/%7Bword-to-search%7D/%7Bpage-number-for-pagination%7D`)
    const result = await response.json()
    return result;
}