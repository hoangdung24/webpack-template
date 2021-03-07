import React, { useEffect, useState } from "react";
import { CRow, CCol, CImg, CFade } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { Logo } from "../../assets/logo";
import { connect } from "react-redux";
import axios from "axios";
import _ from "lodash";
import { Redirect } from "react-router-dom";
import HtmlRender from "../../components/HtmlRender";

const Blog = (props) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    if (props.data[props.match.params.slug]) {
      setData(props.data[props.match.params.slug][0]);
      setIsLoading(false);
    } else {
      axios
        .get(`/api/v2/posts/?slug=${props.match.params.slug}`)
        .then((response) => {
          setData(response.data.items[0]);
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);
        });
    }
  }, [props.match.params.slug]);

  if (isLoading) {
    return <h4>Loading...</h4>;
  } else if (!isLoading && _.isEmpty(data)) {
    return <Redirect to="/about" />;
  }

  const displayContent = () => {
    
    return data.post_body.map(postElement => {
      return (
        <div key={postElement.id}>
          <h4>{postElement.value.text}</h4>
          {postElement.value.post.map(postContent => {
            return <HtmlRender content={postContent.body} />;
          })}
        </div>
      );
    })
  }

  return (
    <>
      <div className="single-post">
        <div className="single-post__inner">
          <div className="single-post__image mb-3">
          {data.post_image ? (<CImg src={data.post_image.meta.download_url} />) : (<CIcon className="logoAbout" content={Logo} />)}
          </div>
          <div className="single-post__content">
            {displayContent()}
          </div>
        </div>
      </div>
      
    </>
  );
};

const mapStateToProps = (state) => ({
  data: state.postReducer.data
});

export default connect(mapStateToProps)(Blog);
