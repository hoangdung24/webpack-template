import React, { useEffect, useState } from "react";
import { CCol } from "@coreui/react";
import Card from "../../components/Card";
import Searchbar from "../../components/Searchbar";
import ListCategories from "../../components/ListCategories";
import { useMediaQuery } from "react-responsive";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchPosts, resetPosts } from "../../store/actions/posts";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars";

const C1 = (props) => {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 });
  const [categories, setCategories] = useState([]);

  const onClickItems = (id) => {
    setCategories(
      categories.includes(id)
        ? categories.filter((v) => v !== id)
        : [...categories, id]
    );
  };

  const filterPostsByCategories = (data) => {
    if (categories.length === 0) {
      return Object.values(props.data);
    } else {
      return data.filter(post => {
        return post[0].post_categories.some(category => {
          return categories.includes(category.id);
        });
      });

    }
  }

  let totalPosts = filterPostsByCategories(Object.values(props.data)).length;


  const displayListPosts = () => {
    const filteredPosts = filterPostsByCategories(Object.values(props.data));
    
    console.log("C1", props);

    return filteredPosts.map((post) => {
      post = post[0];
      let np = 'np-out-card';
      if (props.location.pathname.replace('blogs', "").replaceAll('/', "") === post.slug) {
        np = 'np-in-card';
      }

      return (
        <div 
          key={post.id}
          className="post__card mb-5">
          <Link 
            to={`/blogs/${post.slug}`}
            key={post.slug}
            >
            <Card post={post} np={np}/>
          </Link>
        </div>
        );
    });
  };

  

  return (
    // <CCol lg={`${isDesktopOrLaptop ? "3" : "12"}`} className="shadow rounded p-3 adjust-container">
    <CCol className="rounded p-3 adjust-container col-lg-3 np-out-container"
    >
      <Scrollbars
        autoHide
        autoHideTimeout={300} 
        autoHideDuration={200}
        renderThumbVertical={({ style, ...props }) => {
          const thumbStyle = {
            borderRadius: 6,
            backgroundColor: "rgba(0, 0, 0, 0.3)"
          };
          return <div style={{ ...style, ...thumbStyle }} {...props} />;
        }}>
        <div className="d-flex flex-column">
          <div className="mb-4 mx-auto left-widget">
            <Searchbar/>
            <ListCategories
              items={Object.values(props.categories).map((category) => {
                return { id: category[0].id, name: category[0].category_name };
              })}
              onClickItems={onClickItems}
              itemsSelected={categories}
            />
          </div>
          <div className="listposts">
            <InfiniteScroll
              dataLength={totalPosts}
              //This is important field to render the next data
              next={props.fetchPosts()}
              hasMore={props.nextOffset !== -1}
              loader={<h4>Loading...</h4>}
              endMessage={
                <p style={{ textAlign: "center" }}>
                  Đây là những gì website chúng mình có!
                </p>
              }
            >
              {displayListPosts()}
            </InfiniteScroll>
          </div>
        </div>
      </Scrollbars>
    </CCol>
  );
};

const mapStateToProps = (state) => ({
  data: state.postReducer.data,
  nextOffset: state.postReducer.nextOffset,
  categories: state.categoryReducer.data,
});


export default connect(mapStateToProps, { resetPosts, fetchPosts })(C1);
