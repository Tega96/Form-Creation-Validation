async function fetchUserData() {
    const apiUrl = await fetch('https://jsonplaceholder.typicode.com/users')
    const dataContainer = document.getElementById("api-data")
    
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await response.json()
    } catch (error) {
        console.error('Error loading file', error)
    }
}