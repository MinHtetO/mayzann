let nextPost = 0
export const uploadPost = text => ({
  type: 'UPLOAD_POST',
  id: nextPost++,
  text
})
export const updatePost = id => ({
  type: 'UPDATE_POST',
  id
})