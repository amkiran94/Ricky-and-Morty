import React, { useEffect, useState } from 'react';
import axios from 'axios'

function Episodes() {
  const [fetch, setFetch] = useState({})
  const { results = [] } = fetch

  useEffect(() => {
    changePage(1)
  }, [])

  const changePage = (page) => {
    axios.get(`https://rickandmortyapi.com/api/episode?page=${page}`).then(res => {
      setFetch(res.data)
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <div>
      <div className="row mx-auto text-light">
        {
          results.map(item => {
            return (
              <div key={item.id} className="col-md-3">
                <div className="card mt-3 mb-2 mx-auto" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <h5 className="card-title text-dark">{item.id}. {item.name}</h5>
                    <h6 className="card-subtitle mb-3 text-muted">{item.episode}</h6>
                    <li href="#" className="text-muted">{item.air_date}</li>
                  </div>
                </div>
              </div>
            )
          }
          )}
      </div >
      <div className="mt-2 mb-2">
        <nav>
          <ul className="pagination justify-content-center">
            <li className="page-item" onClick={() => { changePage(1) }}><a className="page-link text-dark">1</a></li>
            <li className="page-item" onClick={() => { changePage(2) }}><a className="page-link text-dark">2</a></li>
            <li className="page-item" onClick={() => { changePage(3) }}><a className="page-link text-dark">3</a></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
export default Episodes
