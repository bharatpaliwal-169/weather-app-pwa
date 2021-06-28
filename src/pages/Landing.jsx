import React,{useState} from 'react'
import {fetchWeather} from '../constants/FetchData';
import WeatherCard from '../components/Weather';
import Idle from  '../components/Idle';
import {Form,FormControl,
  Button,InputGroup} from 'react-bootstrap';

export default function Landing() {
  const [weather,setWeather] = useState({});
  const[query,setQuery] = useState('');
  const [flag,setFlag] = useState(false);
  const search = async (e) => {
    e.preventDefault();
    const data = await fetchWeather(query);
    console.log(data);
    setWeather(data);
    setFlag(true)
    setQuery('');
  }

  return (
    <React.Fragment>
      <div className="container-fluid" id='hero'>
        <div className="row">
          <div className="col-12 col-md-6 offset-md-3 mt-5">
            <section className='text-center'>
              <Form>
                <InputGroup>
                  <InputGroup.Text>
                    <i className="medieum material-icons">search</i>
                  </InputGroup.Text>
                  <FormControl 
                    type="text"
                    className="form-control"
                    placeholder='Search a city....'
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    />
                  <Button type="submit" onClick={search} variant='info'>
                    Search
                  </Button>
                </InputGroup>
              </Form>
            </section>
            {flag ? <WeatherCard {...weather} /> : <Idle />}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

