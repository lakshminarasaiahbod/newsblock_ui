import axios from 'axios';

export const fetchArticles = props => {

  const { limit = 5, category } = props;
  return new Promise(resolve => {
    axios
      .get('data/articles', {
        params: {
          limit,
          category,
          user_token: localStorage.getItem('token')
        }
      })
      .then(response => {
        if (response.status === 200) {
          const newObj = {
            id: category,
            articles: Object.values(response.data.response || {})[0]
          }
          resolve(newObj);
        } else {
          resolve({});
        }
      })
      .catch(err => {
        resolve({});
      })
  })
}

export const fetchBlog = props => {
  return new Promise(resolve => {
    axios.get('data/article', {
      params: {
        id: props.id,
        user_token: localStorage.getItem('token')
      }
    })
    .then(response => {
      if (response.hasError !== true) {
        console.log(response.data.response)
        resolve(response.data.response)
      } else {
        resolve(null);
      }
    })
    .catch(err => {
      resolve(null)
    })
  })
}


export const fetchCategories = () => {
  return new Promise(resolve => {
    axios.get('data/categories')
      .then(response => {
        if (response.status === 200) {
          resolve(response.data.response);
        } else {
          resolve([])
        }
      })
      .catch(err => {
        resolve([]);
      })
  })
}