const initialState = [
  {
          id: 1,
          title: 'Post1',
          content: 'post 1 content',
          user:'Min Htet Oo' 
         },
         {
          id: 2,
          title: 'Post2',
          content: 'post 2 content',
          user:'Sandi' 
         },
         {
          id: 3,
          title: 'Post2',
          content: 'post 3 content',
          user:'Sandi' 
         },
         {
          id: 4,
          title: 'Post2',
          content: 'post 4 content',
          user:'Sandi' 
         },
         {
          id: 5,
          title: 'Post2',
          content: 'post 5 content',
          user:'Sandi' 
         },
         {
          id: 6,
          title: 'Post2',
          content: 'post 6 content',
          user:'Sandi' 
         },
         {
          id: 7,
          title: 'Post2',
          content: 'post 7 content',
          user:'Sandi' 
         },
         {
          id: 8,
          title: 'Post2',
          content: 'post 8 content',
          user:'Sandi' 
         },
         {
          id: 9,
          title: 'Post2',
          content: 'post 9 content',
          user:'Sandi' 
         }
]

const posts = (state = initialState, action) => {
  switch (action.type) {
    case upload_post:
      return [
        ...state,
        action.payload
      ]

      case 'ADD_STATE':
      return
        [
          ...state,
          {
            id: action.payload.id,
            title: action.payload.title,
            content: action.payload.content,
            user: action.payload.user
          }

        ]

        case 'FETCH_DETAIL':
        // return state.filter(post=> post.id === action.payload.id);
        return action.payload.id;

      case edit_post:
      return state.map(oldOne =>
        (oldOne.id === action.id)
          ? [...oldOne, {title: action.title, text: action.text}]
          : oldOne
      )
    default:
      return state
  }
}
export default posts