export const fetchUsers = async (page) => {
  try {
    const response = await fetch(getQuery(page))
    const data = await response.json()
    return data.result
  } catch (err) {
    throw new Error(err.message)
  }
}

const getQuery = (page) => {
  const pageValue = page ? `page=${page}&` : ''
  return `http://localhost:3001/digg/user?${pageValue}limit=5`
}
