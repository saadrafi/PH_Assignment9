import React from "react";
import Page from "../Layout/Page";

const Blog = () => {
  return (
    <div>
        <Page>Blog</Page>
      <div className="mx-auto max-w-2xl p-6 flex flex-col gap-4">
        <h1 className="text-3xl font-bold mb-6">My Blog Post</h1>
        <p>
          <strong>a. When should you use context API?</strong><br /> The Context API is useful when you
          have data that needs to be accessed by many components at different levels of your
          component tree. Instead of passing the data down through multiple levels of props, you can
          use the Context API to provide a way for all the components to access the data without
          passing it explicitly.
        </p>
        <p>
          <strong>b. What is a custom hook?</strong><br /> A custom hook is a function in React that
          allows you to reuse stateful logic across different components. Custom hooks can be used
          to abstract away complex logic or behavior, making it easier to use and share among
          different parts of your application.
        </p>
        <p>
          <strong>c. What is useRef?</strong><br /> useRef is a hook in React that allows you to create a
          mutable reference that can be attached to a DOM element or a value. This reference
          persists across re-renders and can be useful for accessing or modifying DOM elements
          directly, as well as for storing previous values of a variable.
        </p>
        <p>
          <strong>d. What is useMemo?</strong><br /> useMemo is a hook in React that allows you to memoize
          the result of a function, preventing unnecessary re-renders. When used correctly, useMemo
          can significantly improve the performance of your application by reducing the amount of
          work that needs to be done on each re-render.
        </p>


      </div>
    </div>
  );
};

export default Blog;
