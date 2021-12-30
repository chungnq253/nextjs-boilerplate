import Request from '@shared/libs/request';

const request = Request();

export const find = (params = {}) => {
  return request.get('/posts', {
    params,
  });
};

export const findOne = async (params = {}) => {
  try {
    const data = await request.get('/posts', {
      params,
    });

    return data.length > 0 ? data[0] : null;
  } catch (error) {
    console.log(`error`, error)
    
    return null;
  }
};

export const findById = (id) => {
  return request.get(`/posts/${id}`);
};
