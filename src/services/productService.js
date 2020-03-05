
export const getProducts = () => {
    return fetch('http://localhost:3500/api/bubbles')
    .then(res => {
        return res.json();
    })
    .then(data =>{
        return data
    })
  };
  