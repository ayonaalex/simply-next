import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import styled from "styled-components";
import Date from "./../components/date";
import media from "../components/screen";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

const BlogArticle = styled.div`  
  
  ${media.mobile} {
    text-align: left;
    font-size: 25px;

  }

  ${media.tablets} {
    text-align: left;
    width: 50%;
    margin: 10% 25% 10% 25%;
    font-size: 25px;
  }

  ${media.desktop} {
    width: 40%;
    padding: 1px;
    margin: 10% 25% 10% 35%;
    font-size: 25px;
    &:hover {
    box-shadow: 1px 3px 5px rgba(0,0,0,10);
  }
  }
`;

const Blog = styled.div`
  font-family: "Baloo Bhai 2";
  &:hover {
    box-shadow: 1px 3px 5px rgba(0,0,0,10);
  }


  ${media.mobile} {
    margin: 8%;
  }

  ${media.desktop} {
    font-size: 20px;
    padding: 1%;

  }
`;

const Title = styled.h3`
  text-align: center;
  font-family: Averia Serif Libre;

  ${media.tablets} {
    display: none;
  }

  ${media.desktop} {
    display: none;
  }
`;

const BlogTitle = styled.a`
  font-family: "Baloo Bhai 2", bold;
  &:hover {
    color: #d85678;
  }
  ${media.mobile} {
    font-size: 17px;
  }
  ${media.desktop}{
    
  }
`;

const BlogBody = styled.div`
  font-size: 15px;
  ${media.mobile}{
    font-size: 0.9rem;
  }
`;

export default function Home({ allPostsData }) {
  return (
    <BlogArticle>
      <Title>Simply Next</Title>
      {allPostsData.map(({ id, date, title, summary }) => (
        <div key={id}>
          <Blog>
            <Link href={`/posts/${id}`} passHref>
              <BlogTitle>{title}</BlogTitle>
            </Link>
            <BlogBody>
                <Date dateString={date} />
                <br />
              {summary}
            </BlogBody>
          </Blog>
        </div>
      ))}
    </BlogArticle>
  );
}
