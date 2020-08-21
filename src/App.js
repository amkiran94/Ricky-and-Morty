import React, { useState, useEffect } from 'react';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar'
import Episodes from './Components/Episodes'
import Default from './Components/Default'
import DisplayEpisode from './Components/DisplayEpisode'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  let singleEpisode = {
    id: 0,
    name: "Episode Name",
    air_date: "Air Date",
    episode: "Episode"
  }
  const [search, setSearch] = useState("")
  const [episodes, setEpisodes] = useState([])
  const [singleEpi, setSingleEpic] = useState(singleEpisode)
  

  // const toTitleCase = (phrase) => {
  //   return phrase
  //     .toLowerCase()
  //     .split(' ')
  //     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  //     .join(' ');
  // };

  const searchIt = (e) => {
    setSearch(e.target.value)
  }

  const searchEpisode = (e) => {
    e.preventDefault(e)
      episodes.filter(item => {
      const number = item.name.localeCompare(search)
      if (number === 0) {
        const index = episodes.findIndex(x => x.name === item.name)
        const { id, name, air_date, episode } = episodes[index]
        
        setSingleEpic({
          id: id,
          name: name,
          air_date: air_date,
          episode: episode
        })
      }
    })
  }

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/episode?page=${1}`).then(received => {
      const { results = [] } = received.data
      localStorage.setItem('episodes', JSON.stringify(results))
    })
    axios.get(`https://rickandmortyapi.com/api/episode?page=${2}`).then(received => {
      const { results = [] } = received.data
      localStorage.setItem('episodes2', JSON.stringify(results))

    })
    axios.get(`https://rickandmortyapi.com/api/episode?page=${3}`).then(received => {
      const { results = [] } = received.data
      localStorage.setItem('episodes3', JSON.stringify(results))
    })

    setEpisodes([...JSON.parse(localStorage.getItem('episodes')),
    ...JSON.parse(localStorage.getItem('episodes2')),
    ...JSON.parse(localStorage.getItem('episodes3'))])
  }, [])

  return (
    <React.Fragment>
      <Router>
        <NavBar searchEpisode={searchEpisode} searchIt={searchIt} />
        <Switch>
          <Route path='/displayepisode' render={(props) => <DisplayEpisode {...props} epics={singleEpi} />} />
          <Route path="/episodes" component={Episodes} />
          <Route exact path="/" component={Default} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
