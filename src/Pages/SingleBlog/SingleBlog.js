import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Loader from '../../components/Loader/Loader';
import Layout from '../../components/Layout';
import { SINGLE_POST } from '../../constants';
import { fetchBlog } from '../requests';
import s from './SingleBlog.module.css';

const SingleBlog = () => {

  const { cat, postId } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchDetails = async () => {
      const res = await fetchBlog({ id: postId })
      if (res === null) {
        setError(true);
        setLoading(false)
      } else {
        setError(false);
        setData(res);
        setLoading(false);
      }
    }

    fetchDetails()
  }, [])

  console.log(error, loading, data)

  if (error && !loading) {
    return (
      <Layout>
        <div>Failed to fetch the details</div>
      </Layout>
    )
  }

  return (
    <Layout>
      <section className="section wb">
        <div className="container">
          {!loading ? (<div className="row">
            <div className="col-12">
              <div className="page-wrapper">
                <div className="blog-title-area">
                  <ol className="breadcrumb hidden-xs-down">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item"><a href="/">{data.category}</a></li>
                    <li className="breadcrumb-item active">{data?.title}</li>
                  </ol>

                  <span className={s.catHighlight}>{data.category}</span>

                  <h3>{data?.title}</h3>

                  <div className="blog-meta big-meta">
                    <small>21 July, 2017</small>
                    <small>by {data.author}</small>
                    <small><i className="fa fa-eye"></i> {data.viewcount}</small>
                  </div>
                </div>

                <div className="single-post-media">
                  <img src={data.ref_img} alt="" className="img-fluid" />
                </div>

                <div className="blog-content mb-4">
                  <div className="pp">
                    {data.summary}
                  </div>
                </div>
                <a className={s.sourcelink} href={data.source_link} target="_blank" rel='noreferrer'>Source link</a>
                {/* <div className="blog-title-area mt-4">
                  <div className="tag-cloud-single">
                    <span>Tags</span>
                    <small><a href="#" title="">lifestyle</a></small>
                    <small><a href="#" title="">colorful</a></small>
                    <small><a href="#" title="">trending</a></small>
                    <small><a href="#" title="">another tag</a></small>
                  </div>
                </div> */}
                
              </div>
            </div>

          </div>) : (
            <div className={s.loader}>
              <Loader />
            </div>
          )}
        </div>
      </section>
    </Layout>
  )
}

export default SingleBlog;