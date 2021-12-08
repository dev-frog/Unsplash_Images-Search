import React, { Component } from 'react';
import Masonry from 'react-masonry-css';
import PictureList from '../component/PictureList';
import api from './api/api';
// eslint-disable-next-line import/order
import Router from 'next/router';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Unsplash Search',
      imageSearch: '',
      images: [],
      page: 10
    };
  }

  imageSearchChanged(event) {
    this.setState({
      imageSearch: event.target.value,
    });
  }

  formSubmitted(event) {
    event.preventDefault();
    this.setState({
      images: [],
    });

    api.search(this.state.imageSearch).then((images) => {
      this.setState({
        images,
      });
    });
  }

  render() {
    const { title, imageSearch, images,page } = this.state;
    return (
      <div className="App">
        <h1>{title}</h1>
        <form onSubmit={(event) => this.formSubmitted(event)}>
          <label htmlFor="imageSearch">Image Search</label>
          <input
            className="searchBox"
            type="text"
            id="imageSearch"
            name="imageSearch"
            value={imageSearch}
            onChange={(event) => this.imageSearchChanged(event)}
          />
          <button type="submit">Search</button>
        </form>

        <section className="images">
          <Masonry
            breakpointCols="3"
            className="gallery-grid"
            columnClassName="gallery-grid_column"
          >
            {images.map((image) => (
              <>
                <div className="ImageResult">
                  <PictureList images={image} />
                </div>
              </>
            ))}
          </Masonry>
        </section>
        <button
          onClick={() => Router.push(``)}
          disabled={this.props.page <= 1}
        >
          PREV
        </button>
        <button onClick={() => Router.push(``)}>
          NEXT
        </button>


      </div>
    );
  }
}

export default Home;
