import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

const postDirectory = path.join(process.cwd(), 'posts');

// get markdown file
export const getPostsData = () => {
  const fileNames = fs.readdirSync(postDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, ''); //file name

    // get md and convert to string
    const fullPath = path.join(postDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');

    // get meta data
    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data,
    };
  });
  return allPostsData;
};

// getStaticPath
export const getAllPostIds = () => {
  const fileNames = fs.readdirSync(postDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
  /* return sample
  [
    {
      params: {
        id: 'hogehoge'
      }
    },
      {
      params: {
        id: 'fugafuga'
      }
    },
  ]
  */
};
