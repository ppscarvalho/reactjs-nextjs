import "./styles.css";
import { Component } from "react";

import { loadPosts } from "./../../utils/load-posts";
import { Posts } from "./../../components/Posts/index";
import { Button } from "./../../components/Button/index";
import { TextInput } from "./../../components/TextInput/index";

class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsByPage: 6,
    searchValue: "",
  };

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const { page, postsByPage } = this.state;

    const postsAndPhotos = await loadPosts();
    this.setState({
      posts: postsAndPhotos.slice(page, postsByPage),
      allPosts: postsAndPhotos,
    });
  };

  loadMorePosts = () => {
    const { page, postsByPage, allPosts, posts } = this.state;
    const nextPage = page + postsByPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsByPage);
    posts.push(...nextPosts);

    this.setState({ posts, page: nextPage });
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ searchValue: value });
  };

  render() {
    const { posts, page, postsByPage, allPosts, searchValue } = this.state;
    const noMorePosts = page + postsByPage >= allPosts.length;
    const filteredPosts = !!searchValue
      ? allPosts.filter((post) => {
          return post.title.toLowerCase().includes(searchValue.toLowerCase());
        })
      : posts;

    return (
      <section className="container">
        <div className="search-container">
          {!!searchValue && <h1>SearchValue: {searchValue}</h1>}

          <TextInput actionFn={this.handleChange} inputValue={searchValue} />
        </div>

        {filteredPosts.length > 0 && <Posts posts={filteredPosts} />}
        {filteredPosts.length === 0 && <p>Não existe post. =(:</p>}

        <div className="button-container">
          {!searchValue && (
            <Button
              text="Load more posts"
              onClick={this.loadMorePosts}
              disabled={noMorePosts}
            />
          )}
        </div>
      </section>
    );
  }
}

export default Home;
