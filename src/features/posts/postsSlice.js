import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: "1",
    title: "First Post",
    ava: "T",
    content: "Hello! How are you guys doing ?",
    user: "0",
    comments: {
      com: 3
    },
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      thumbsUp: 2,
    },
  },
  {
    id: "2",
    title: "After Long Time",
    ava: "P",
    content: "I am back guys , how are you guys doing? I was not well .",
    user: "2",
    comments: {
      com: 3
    },
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    reactions: {
      thumbsUp: 4,
    },
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            date: new Date().toISOString(),
            title,
            content,         
            user: userId,
            comments: {
              com: 0
            },
            reactions: {
              thumbsUp: 0,
            },
          },
        };
      },
    },
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload;
      const existingPost = state.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },

    commentAdded(state, action) {
      const { postId, comm } = action.payload;
      const existingPost = state.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.comments[comm]++;
      }
    },

    postUpdated(state, action) {
      const { id, title, content } = action.payload;
      const existingPost = state.find((post) => post.id === id);
      if (existingPost) {
        existingPost.title = title;
        existingPost.content = content;
      }
    },
  },
});

export const { postAdded, postUpdated, reactionAdded, commentAdded } = postsSlice.actions;

export default postsSlice.reducer;
