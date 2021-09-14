import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'



//https://www.geeksforgeeks.org/node-js-process-cwd-method/
const postsDirectory = path.join(process.cwd(), 'posts')

export function getSortedPostsData() {
  //https://www.geeksforgeeks.org/node-js-fs-readdirsync-method/
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    }
  })

  // Sort posts by date
  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1
    } else if (a > b) {
      return -1
    } else {
      return 0
    }
  })
}


