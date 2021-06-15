import './styles.css';
import { useState, useEffect, useCallback } from 'react';

import { loadPosts } from './../../utils/load-posts';
import { Posts } from './../../components/Posts/index';
import { Button } from './../../components/Button/index';
import { TextInput } from './../../components/TextInput/index';

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [allPosts, setallPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postsByPage] = useState(2);
  const [searchValue, setSearchValue] = useState('');

  const noMorePosts = page + postsByPage >= allPosts.length;
  const filteredPosts = searchValue
    ? allPosts.filter((post) => {
        return post.title.toLowerCase().includes(searchValue.toLowerCase());
      })
    : posts;

  const loadMorePosts = () => {
    const nextPage = page + postsByPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsByPage);
    posts.push(...nextPosts);

    setPosts(posts);
    setPage(nextPage);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  const handleLoadPosts = useCallback(async (page, postsByPage) => {
    const postsAndPhotos = await loadPosts();
    setPosts(postsAndPhotos.slice(page, postsByPage));
    setallPosts(postsAndPhotos);
  }, []);

  useEffect(() => {
    handleLoadPosts(0, postsByPage);
  }, [handleLoadPosts, postsByPage]);

  return (
    <section className="container">
      <div className="search-container">
        {!!searchValue && <h1>Search Value: {searchValue}</h1>}

        <TextInput actionFn={handleChange} inputValue={searchValue} />
      </div>

      {filteredPosts.length > 0 && <Posts posts={filteredPosts} />}
      {filteredPosts.length === 0 && <p>Não existem posts =(:</p>}

      <div className="button-container">
        {!searchValue && <Button text="Load more posts" onClick={loadMorePosts} disabled={noMorePosts} />}
      </div>
    </section>
  );
};
