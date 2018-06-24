let nextPost = 0
export const addPost = text => ({
  type: 'UPLOAD_POST',
  id: nextPost++,
  text
})
export const updatePost = id => ({
  type: 'UPDATE_POST',
  id
})