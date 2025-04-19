export default defineEventHandler(async (event) => {
  const slug = getQuery(event).slug as string
  const fs = await import('fs/promises')
  const path = `./server/config/site/${slug}.json`

  try {
    const file = await fs.readFile(path, 'utf-8')
    const config = JSON.parse(file)
    return { config }
  } catch {
    return { config: null }
  }
})
