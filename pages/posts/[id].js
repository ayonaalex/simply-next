import { getAllPostIds, getPostData } from "../../lib/singlePost";
import Head from "next/head";
import Date from "../../components/date";
import styled from "styled-components";
import media from "../../components/screen";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

const Blog = styled.div`
  ${media.mobile} {
    margin: 5% ;
  }

  ${media.tablets}{
    margin: 16% 7% ;
  }

  ${media.desktop}{
    font-size: 20px;
    margin: 10% 32% ;
  }
`;

const BlogArticle = styled.div`
font-family: Merriweather Sans,bold;  
`;

const Title = styled.h2`
  font-family: Averia Serif Libre, bold;
  text-align: center;
  ${media.mobile}{
    margin: 10px;
    font-size: 30px;

  }
  ${media.desktop}{
    font-size:35px
  }
`;

export default function Post({ postData }) {
  return (
    <div>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Blog>
        <Title>{postData.title}</Title>
        <br />
        {/* <Date dateString={postData.date} /> */}
        <BlogArticle
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </Blog>
    </div>
  );
}
