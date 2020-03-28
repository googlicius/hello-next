import Layout from '../../components/MyLayout';
import fetch from 'isomorphic-unfetch';
import Markdown from 'react-markdown';

const Post = ({ show }) => {
  const { name, summary, image } = show;

  return (
    <Layout>
      <h1>{name}</h1>
      <p>{summary.replace(/<[/]?[pb]>/g, '')}</p>
      {image ? <img src={image.medium} /> : null}
    </Layout>
  );
};

Post.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  console.log(`Fetched show: ${show.name}`);

  return { show };
};

export default Post;
