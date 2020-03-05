
export const getDetails = (id) => {
    return fetch('http://localhost:3500/api/bubbles/' + id)
    .then(res => {
        return res.json();
    })
    .then(data =>{
        return data
    })
  };
  