import { createContext, useContext, useMemo, useState } from "react";
import { faker } from "@faker-js/faker";

// 1) CREATE CONTEXT
// createContext is a function just like an useState,useEffect so initialize top
// and it return context  and PostContext is just like a compoenent

const PostContext = createContext();

function createRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
}

function PostProvider({ children }) {
  const [posts, setPosts] = useState(() =>
    Array.from({ length: 30 }, () => createRandomPost())
  );
  const [searchQuery, setSearchQuery] = useState("");

  // Derived state. These are the posts that will actually be displayed
  const searchedPosts =
    searchQuery.length > 0
      ? posts.filter((post) =>
          `${post.title} ${post.body}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : posts;

  function handleAddPost(post) {
    setPosts((posts) => [post, ...posts]);
  }

  function handleClearPosts() {
    setPosts([]);
  }

  const value = useMemo(() => {
    return {
      posts: searchedPosts,
      onClearPosts: handleClearPosts,
      searchQuery,
      setSearchQuery,
      onAddPost: handleAddPost,
    };
  }, [searchedPosts, searchQuery]);

  return (
    // 2) PROVIDE VALUE
    <PostContext.Provider value={value}>{children}</PostContext.Provider>
  );
}

function usePosts() {
  const context = useContext(PostContext);
  if (context === undefined)
    return new Error("PostContext is used outside the provider");
  return context;
}
export { PostProvider, usePosts };
