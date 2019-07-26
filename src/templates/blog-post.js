/* eslint-disable react/destructuring-assignment */
/* eslint react/prop-types: 0 */

// Components
import React, { Component } from 'react';
import { graphql } from 'gatsby';

import 'gitalk/dist/gitalk.css';

import { parseChineseDate } from '../api';

import ExternalLink from '../components/ExternalLink';
import Sidebar from '../components/Sidebar';
import Content from '../components/Content';
import SEO from '../components/SEO';
import Tag from '../components/Tag';

import Header from '../components/Header';
// import TableOfContent from '../components/TableOfContent';
import ShareBox from '../components/ShareBox';

import { config } from '../../data';

// Styles
import './blog-post.scss';

const { name, iconUrl, gitalk } = config;

const bgWhite = { padding: '10px 30px', background: 'white' };

// Prevent webpack window problem
const isBrowser = typeof window !== 'undefined';
const Gitalk = isBrowser ? require('gitalk') : undefined;


const footerStyle = {
  backgroundColor: 'gray',
  fontSize: '20px',
  color: 'white',
  borderTop: '1px solid #E7E7E7',
  textAlign: 'center',
  padding: '20px',
  position: 'fixed',
  left: '0',
  bottom: '0',
  height: '60px',
  width: '100%',
  zIndex: '100',
};

const linkStyle = {
  backgroundColor: 'gray',
  fontSize: '20px',
  color: 'white',
};


const phantomStyle = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%',
};

const tableStyle = {
  width: '100%',
};

const mapStyle = {
  border: '0',
};

class BlogPost extends Component {
  constructor(props) {
    super(props);
    this.data = this.props.data;
  }

  componentDidMount() {
    const { frontmatter, id: graphqlId } = this.data.content.edges[0].node;
    const { title, id } = frontmatter;
  }

  render() {
    const { node } = this.data.content.edges[0];

    const {
      html, frontmatter, fields, excerpt,
    } = node;

    const { slug } = fields;

    const {
      date, headerImage, title, walklink, listenlink, slideImage1, slideImage2, slideImage3, tags, walklinkembed, listenlinkembed,
    } = frontmatter;

    return (
      <div className="row post order-2">
        <Header
          img={headerImage || 'https://i.imgur.com/M795H8A.jpg'}
          slideImage1={slideImage1}
          slideImage2={slideImage2}
          slideImage3={slideImage3}
          title={title}
          authorName={name}
          authorImage={iconUrl}
          subTitle={parseChineseDate(date)}
        />
        <div className="stats">
          {tags.map(name => (
            <Tag name={name} key={name} />
          ))}
        </div>
        <div className="content">
          <div className="sub-title2"> The Journey: </div>
          <Content post={html} />
        </div>
        <div style={footerStyle}>
          <div id="footerId">
            <table style={tableStyle}>
              <tr>
                <td><div style={linkStyle}><a href={walklink}>Walk</a></div></td>
                <td><div style={linkStyle}><a href={listenlink}>Listen</a></div></td>
              </tr>
            </table>
          </div>
        </div>
        <div className="col-xl-7 col-lg-6 col-md-12 col-sm-12 order-11 content">
        <div className="sub-title"> The Trek: </div>
          <iframe src={`${walklinkembed}`} height="450" frameBorder="0" style={mapStyle} allowFullScreen />
        </div>
        <div className="col-xl-7 col-lg-6 col-md-12 col-sm-12 order-12 content">
        <div className="sub-title"> The Tracks: </div>
          <iframe src={`${listenlinkembed}`} height="380" frameBorder="0" allowTransparency="true" allow="encrypted-media" />
        </div>

        <SEO
          title={title}
          url={slug}
          siteTitleAlt="Calpa's Blog"
          isPost={false}
          description={excerpt}
          image={headerImage || 'https://i.imgur.com/M795H8A.jpg'}
        />
      </div>
    );
  }
}

export const pageQuery = graphql`
  fragment post on MarkdownRemark {
    fields {
      slug
    }
    frontmatter {
      id
      title
      slug
      date
      headerImage
      walklink
      walklinkembed
      listenlink
      listenlinkembed
      slideImage1
      slideImage2
      slideImage3
      tags
    }
  }

  query BlogPostQuery($index: Int) {
    content: allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      skip: $index
      limit: 1
    ) {
      edges {
        node {
          id
          html
          excerpt
          ...post
        }

        previous {
          ...post
        }

        next {
          ...post
        }
      }
    }
  }
`;

export default BlogPost;
